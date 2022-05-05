(function(w,doc) {
  DEBUG = 1;
  var dolog = DEBUG ? console.log : function(){};

  var is_frame = w!=top,
      tracker_loaded = false,
      cx = w._contentExchange = w._contentExchange || {is_frame,loaded:false,start:Date.now()},
      body = document.querySelector('html'),
      load_bex = 'undefined' == 'true',
      do_return = false;

  //DO NOT LOAD TWICE
  if (!cx.loaded) {
    cx.loaded = true
  } else { //if CX tracker already loaded => ContentExchangeLoad exists ELSE will be triggered on tracker load!
    ('function' == typeof contentExchangeLoad) && contentExchangeLoad()
    do_return = true
  }
  if (load_bex) {
    //DO NOT LOAD TWICE
    if (!cx.bex_loaded) {
      cx.bex_loaded = true
    } else { //if BEX tracker already loaded => bexLoad exists ELSE will be triggered on tracker load!
      ('function' == typeof bexLoad) && bexLoad()
      do_return = do_return && true
    }
  }
  if (do_return) return

  var tcf = (is_frame ? w : top).origin.match('.bg')
  var poller = false, polls = 0, maxpolls=tcf ? 5 : 1, delay=100;
  function init(immediate) {
    if (is_frame) {
    //define tcfapi proxy
      var frm = w,
          cmpfrm = false,
          cmpCb = {};
      while (frm) {
        try {
          if (frm.frames['__tcfapiLocator']) {cmpfrm = frm; break}
        } catch(e) {}
        if (frm==w.top) break
        frm = frm.parent
      }
      if (cmpfrm) {
        w.__tcfapi = function(command,version,cb,parameter) {
          var callId = guid(),
              _tcfapiCall= {command,parameter,version,callId};
          cmpCb[callId] = cb
          cmpfrm.postMessage({_tcfapiCall},'*')
        }
        tcfapiHandler = function(e) {
          var data = {}
          try {
            data = typeof e.data=='string' ? JSON.parse(e.data) : e.data
          } catch(e) {}
          var res = data.__tcfapiReturn,
              cb = cmpCb[res.callId]
          if (cb) cb(res.returnValue,res.success)
          delete cmpCb[res.callId]
        }
        w.addEventListener('message', tcfapiHandler, false)
      }
    }
    if (w.__tcfapi) { //we have a CMP
        clearTimeout(poller)
        dolog('TCF API present',immediate ? 'immediate' : 'delayed')
      __tcfapi('addEventListener',2, function (tcdata,success) {
        if( success
          && ['useractioncomplete','tcloaded'].indexOf(tcdata.eventStatus)>-1
        ) {
          dolog('Have tcdata',tcdata)
          if (tcdata.tcString) {
            cx.tcdata = tcdata
            cx.gdpr = tcdata.gdprApplies ? 1 : 0
            if (tracker_loaded) return console.log('tracker already loaded')
            tracker_loaded = true
            load(tcdata)
          } else {
            cx.tcdata = false
            cx.gdpr = 2
            load(false)
          }
        }
      })
    } else { //we were called without CMP - at the discretion of publisher
      dolog('TCF locator',frames && frames['__tcfapiLocator'] && 'present' || 'missing')
      dolog('TCF API missing',++polls,immediate ? 'immediate' : 'delayed')
      if (polls<maxpolls) return   
      clearTimeout(poller)
      cx.tcdata = false
      cx.gdpr = 2
      load(false)
    }
  }
  poller = setInterval(init,delay)
  init(true)
  
  //https://vanillajstoolkit.com/helpers/getcookie/
  function getPart(name,parts,separator) {
	  var value = separator + parts;
	  var parts = value.split(separator + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function load(tcdata) {
    var checkOK = true
    if (tcdata && tcdata.gdprApplies) {
      //check purposes - we are entirely consent based
      var consent = tcdata.purpose.consents,
          vendor = tcdata.vendor.consents;
      checkOK  = (DEBUG || vendor[864]) //do we have consent for our vendor ID - yes for debugging
            && consent[1] //Store info locally
            && consent[2] //basic ads + cx widgets w/imprecise geo, user agent, asn, freq cap
            && consent[3] //create personalized ads profile
            && consent[4] //serve personalized ads
            && consent[5] //create personalized content profile
            && consent[6] //serve personalized content
            && consent[7] //measure ad performance, viewability, stats/reports
            && consent[8] //measure content performance, interactions, stats/reports
            && consent[9] //apply market research
            && consent[10] //develop and improve => use for training / machine learning
    }

    var ref = is_frame ? 'iframe' : doc.referrer || 'direct',
        url = is_frame ? doc.referrer : w.location.href,
        url_qry = url.split('?')[1] || '',
        qry = {
                url,
                ref,
                gdpr: cx.gdpr
              }
              
    if (''!='') qry.force_ref = '';

    if (tcdata && tcdata.gdprApplies) qry.gdpr_consent = tcdata.tcString

    cx.ref = ref
    cx.url = url
    if (!tcdata || !tcdata.gdprApplies || consent[1]) {
      var haveCookies = false
      document.cookie = 'cx_test'
      haveCookies = document.cookie.match('cx_test')
      document.cookie = "cx_test= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      if (haveCookies) {
        if (url_qry.match('cx_id')) qry.ex_id = getPart('cx_id',url_qry,'&')
        cx.cx_id = qry.cx_id = getPart('cx_id',doc.cookie,'; ') || 'new'
      } else {
        cx.cx_id = qry.cx_id = 'anon'
      }
    } else {
      cx.cx_id = qry.cx_id = 'anon'
    }

    var qryStr = []
    Object.keys(qry).forEach( function(k) { qryStr.push(k+'='+encodeURIComponent(qry[k]))} )
    var scrpt = document.createElement('script')
    scrpt.src = 'https://tracker.contentexchange.me/boot?'+qryStr.join('&')
    body.appendChild(scrpt)
    if (load_bex) {
      var scrpt = document.createElement('script')
      scrpt.src = 'undefined/boot/?'+qryStr.join('&')
      body.appendChild(scrpt)
    }
  }
})(window,document)
