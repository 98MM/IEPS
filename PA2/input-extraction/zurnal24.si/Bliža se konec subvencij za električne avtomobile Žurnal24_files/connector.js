window.addEventListener('load', function(){
    !function () {
        function e(e, t) {
            var o = t.parentNode;
            o.lastchild == t ? o.appendChild(e) : o.insertBefore(e, t.nextSibling)
        }

        for (var t = "", o = "", n = document.getElementsByTagName("meta"), r = 0, a = n.length; a > r; r++) "keywords" == n[r].name.toLowerCase() && (o = n[r].content);
        var d = document.getElementsByTagName("script");
        for (var scripts = 0; scripts < d.length; scripts++) {
            if(d[scripts].className.indexOf('sales-module') > -1 && d[scripts].className.indexOf('module-loaded') == -1) {
                d[scripts].classList.add('module-loaded-' + scripts);
                var iframe_url = d[scripts].src;
                var full_path = iframe_url.split('#');
                var full_link = decodeURIComponent(full_path[1]);
                if(full_link.indexOf('?') > -1) {
                    full_link += '&';
                } else {
                    full_link += '?';
                }

                module = document.createElement("iframe"), module.setAttribute("src", t + full_link + "load=" + scripts + "&location=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(document.title) + "&keywords=" + encodeURIComponent(o)), module.setAttribute("class", "loaded-" + scripts), module.setAttribute("width", "100%"), module.setAttribute("height", "500"), module.setAttribute("frameborder", "0"), e(module, document.querySelector(".module-loaded-" + scripts));

                window.removeEventListener("message", function(e){});

                window.addEventListener("message", function (e) {
                //if(e.origin.indexOf('localhost') > -1) {
                    //var m = e.data.split("=");
                    //if(m[0].indexOf('.loaded-') > -1) {


                        //console.log(e);
                        module.setAttribute("height", e.data);
                   // }
                //}
                }); 
            }
        }
    }();
}, false)

console.log('connector');

$('.dfp_banner--BellowLead').css('margin-bottom', '22px');

$(".adsense_matched_content").css({
    'position' : 'relative',
    'z-index' : '5'
});

// $('.header_wrapper').append('<iframe class="dars_scroller" src="https://ad.zurnal24.si/dars/" style="width: 100%; height: 25px;" frameborder="0"></iframe>');

// var dars_width = $('.dars_scroller').width();
// if (dars_width < 1024) {
//     $('.content__wrap').css('margin-top', '25px');
// } else if (dars_width > 1024) {
//     var subnav = $('.header_wrapper__subback');
//     if (subnav.length > 0 && subnav.is(':visible')) {
//         $('.dars_scroller').css('margin-top', '40px');
//     }
//     $('.content__wrap .container').css('margin-top', '89px !important');
// }

// $(function(){
//     if($('.article__wrapper').length){
//         $('body').append('\
//             <style>\
//                 .preroll_pop{\
//                     position: fixed !important;\
//                     bottom: 15px;\
//                     right: 15px;\
//                     z-index: 999;\
//                     width: 400px !important;\
//                     height: 225px !important;\
//                     overflow: visible !important;\
//                 }\
//                 .preroll_pize{\
//                     width: 400px !important;\
//                     height: 225px !important;\
//                 }\
//                 .preroll_mute_fix{\
//                     bottom: 20px;\
//                     width: 45px !important;\
//                     height: 45px !important;\
//                 }\
//                 #preroll_pop_close{\
//                     display: none;\
//                     position:absolute;\
//                     top:-10px;\
//                     right:-10px;\
//                     width:30px;\
//                     height:30px;\
//                     z-index:999999;\
//                     background: url(https://zurnal24.si/banners/dfp/close.png);\
//                     background-size: cover;\
//                     background-repeat: no-repeat;\
//                     cursor: pointer;\
//                 }\
//                 @media screen and (max-width: 1024px){\
//                     .preroll_pop{\
//                         width: 295px !important;\
//                         height: 170px !important;\
//                     }\
//                     .preroll_pize{\
//                         width: 300px !important;\
//                         height: 170px !important;\
//                     }\
//                     .preroll_mute_fix{\
//                         width: 44px !important;\
//                         height: 44px !important;\
//                     }\
//                 }\
//             </style>\
//         ');

//         var $el_pop = $('.article__figure');
//         var bottomPop = $el_pop.offset().top + $el_pop.outerHeight(true);
//         blocker_pop = 0;
//         $(window.parent).on('scroll', function() {
//             if (blocker_pop == 0) {
//                 var fromPop = $(window.parent).scrollTop();
//                 if (fromPop > bottomPop) {
//                     $('#preroll_pop_close').show();
//                     $('#dfp_mainContainer').addClass('preroll_pop');
//                     $('#dfp_content').addClass('preroll_pize');
//                     $('#dfp_adContainer div').addClass('preroll_pize');
//                     $('#dfp_contentElement').addClass('preroll_pize');
//                     $('#_dfp_vast_article').addClass('preroll_pize');
//                     $('#dfp_adContainer').addClass('preroll_pize');
//                     $('.preroll_mute').addClass('preroll_mute_fix');
//                 } else if (fromPop < bottomPop) {
//                     $('#preroll_pop_close').hide();
//                     $('#dfp_mainContainer').removeClass('preroll_pop');
//                     $('#dfp_content').removeClass('preroll_pize');
//                     $('#_dfp_vast_article').removeClass('preroll_pize');
//                     $('#dfp_adContainer div').removeClass('preroll_pize');
//                     $('#dfp_contentElement').removeClass('preroll_pize');
//                     $('#dfp_adContainer').removeClass('preroll_pize');
//                     $('.preroll_mute').removeClass('preroll_mute_fix');
//                 }
//             }
//         });
//         setTimeout(function(){
//             document.getElementById("preroll_pop_close").addEventListener("click", function(){
//                 blocker_pop = 1;
//                 $('#preroll_pop_close').remove();
//                 $('#dfp_mainContainer').removeClass('preroll_pop');
//                 $('#dfp_content').removeClass('preroll_pize');
//                 $('#_dfp_vast_article').removeClass('preroll_pize');
//                 $('#dfp_adContainer div').removeClass('preroll_pize');
//                 $('#dfp_contentElement').removeClass('preroll_pize');
//                 $('#dfp_adContainer').removeClass('preroll_pize');
//                 $('.preroll_mute').removeClass('preroll_mute_fix');
//             });
//         }, 3000);
//     }
// });

var getUrl = document.URL;
console.log(getUrl);

if (getUrl == 'https://www.zurnal24.si/zdravje/sem-s-teboj' || getUrl == 'https://www.zurnal24.si/zdravje/sem-s-teboj/' || getUrl == 'https://www.zurnal24.si/zdravje/sem-s-teboj?meta_refresh=true') {

    $('body').append('\
            <style>\
                @media screen and (min-width: 1370px){\
                    .card--09 .card__title{\
                        font-size: 2.0rem;\
                        line-height: 2.4rem;\
                    }\
                }\
            </style>\
        ');

}

if (getUrl == 'https://www.zurnal24.si/uspesna-oddaja-obrazca/' || getUrl == 'https://www.zurnal24.si/uspesna-oddaja-obrazca/?meta_refresh=true'){

    $('body').append('\
            <style>\
                .flatpages{\
                    padding-top: 70px;\
                }\
            </style>\
        ');

}

if (getUrl.indexOf('gallery-') != -1) {
    $('.header__logo_heading').css({
        'display' : 'none'
    });
}

if ($('.fold_article__bellow_content').length != 0) {
    $('.fold_article__bellow_content').append('\
        <style>\
            .fold_article__bellow_content .dfp_banner>div{\
                margin: 10px 0 10px;\
            }\
        </style>\
    ');
}

if (getUrl == 'https://www.zurnal24.si/glas-generacije' || getUrl == 'https://www.zurnal24.si/glas-generacije?meta_refresh=true') {

    $('.leadblock__title').after('\
        <div class="slogan_ppecial">\
            <h1>\
                <span>Marec: Mesec za ženske sprememb</span>\
            </h1>\
        </div>\
        <style>\
            .slogan_ppecial{\
                clear: both;\
                display: inline-block;\
                width: 100%;\
                margin: 0;\
                padding: 0;\
                text-align: center;\
                font: normal 700 100% "Rubik", sans-serif;\
                letter-spacing: -0.025em;\
                margin-top: 20px;\
            }\
            .slogan_ppecial h1 {\
                display: inline;\
                padding: 0 14px;\
                font-size: 2.8rem;\
                line-height: 3.2rem;\
                -webkit-box-decoration-break: clone;\
                box-decoration-break: clone;\
                color: #fff;\
                background: #292929;\
            }\
            .slogan_ppecial h1 span {\
                position: relative;\
            }\
        </style>\
    ');

    $('.leadblock__title h1 span').html('Glas generacije');

    $('#divBillboardTop').after('\
        <style>\
            #divBillboardTop{\
                display: none;\
            }\
            #divBillboardMid{\
                display: none;\
            }\
        </style>'); 
}

if (getUrl == 'https://www.zurnal24.si/mesec-pametnih-obrokov' || getUrl == 'https://www.zurnal24.si/mesec-pametnih-obrokov?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/varno-na-dopust' || getUrl == 'https://www.zurnal24.si/varno-na-dopust?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/jesen-na-zurnalu' || getUrl == 'https://www.zurnal24.si/jesen-na-zurnalu?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/uzivajmo-poletje' || getUrl == 'https://www.zurnal24.si/uzivajmo-poletje?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/poletje-je-moje' || getUrl == 'https://www.zurnal24.si/poletje-je-moje?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/pripravimo-avto-na-zimo' || getUrl == 'https://www.zurnal24.si/pripravimo-avto-na-zimo?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/najbolj-in-darila' || getUrl == 'https://www.zurnal24.si/najbolj-in-darila?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/abeceda-imunskega-sistema' || getUrl == 'https://www.zurnal24.si/abeceda-imunskega-sistema?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/pripravljeni-na-pomlad' || getUrl == 'https://www.zurnal24.si/pripravljeni-na-pomlad?meta_refresh=true' || 
    getUrl == 'https://www.zurnal24.si/mesec-za-vrtove-balkone-in-zare' || getUrl == 'https://www.zurnal24.si/mesec-za-vrtove-balkone-in-zare?meta_refresh=true') {
    $('#divBillboardTop').after('\
        <style>\
            #divBillboardTop{\
                display: none;\
            }\
            #divBillboardMid{\
                display: none;\
            }\
        </style>'); 
}

if (getUrl == 'https://www.zurnal24.si/dosje' || getUrl == 'https://www.zurnal24.si/dosje?meta_refresh=true') {
    $('#divBillboardMid').after('\
        <style>\
            #divBillboardTop{\
                display: none;\
            }\
            #divBillboardMid{\
                display: none;\
            }\
            #divBillboardBot{\
                display: none;\
            }\
        </style>');
}

if (getUrl == 'https://www.zurnal24.si/zdravje/sem-s-teboj' || getUrl == 'https://www.zurnal24.si/zdravje/sem-s-teboj?meta_refresh=true') {

    $('body').append('\
            <style type="text/css">.google-auto-placed{\
                    display: none !important;\
                }\
            </style>\
        ');

    (function(funcName, baseObj) {

        funcName = funcName || "docReady";
        baseObj = baseObj || window;
        var readyList = [];
        var readyFired = false;
        var readyEventHandlersInstalled = false;

        // call this when the document is ready
        // this function protects itself against being called more than once
        function ready() {
            if (!readyFired) {
                readyFired = true;
                for (var i = 0; i < readyList.length; i++) {
                    readyList[i].fn.call(window, readyList[i].ctx);
                }
                readyList = [];
            }
        }

        function readyStateChange() {
            if ( document.readyState === "complete" ) {
                ready();
            }
        }

        baseObj[funcName] = function(callback, context) {
            if (typeof callback !== "function") {
                throw new TypeError("callback for docReady(fn) must be a function");
            }
            if (readyFired) {
                setTimeout(function() {callback(context);}, 1);
                return;
            } else {
                readyList.push({fn: callback, ctx: context});
            }
            // if document already ready to go, schedule the ready function to run
            if (document.readyState === "complete") {
                setTimeout(ready, 1);
            } else if (!readyEventHandlersInstalled) {
                // otherwise if we don't have event handlers installed, install them
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", ready, false);
                    window.addEventListener("load", ready, false);
                } else {
                    // must be IE
                    document.attachEvent("onreadystatechange", readyStateChange);
                    window.attachEvent("onload", ready);
                }
                readyEventHandlersInstalled = true;
            }
        }
    })("docReady", window);



    docReady(function(){
        document.querySelectorAll('.dfp_banner--Leaderboard')[0].style.display = 'none'; // Billboard top
        document.querySelectorAll('.dfp_banner--Leaderboard')[1].style.display = 'none'; // Billboard bot
        document.querySelectorAll('.dfp_banner--Leaderboard')[2].style.display = 'none'; // Billboard bot
        document.querySelectorAll('.dfp_banner--sticky_footer')[0].style.display = 'none'; // Billboard bot
        //document.querySelectorAll('.dfp_banner--BellowLead')[0].style.display = 'none'; // Below Lead
        document.querySelectorAll('.dfp_banner--Halfpage')[0].style.display = 'none'; // Halfpage Top
        //document.querySelectorAll('#divAIO1')[0].style.display = 'none';
        //document.querySelectorAll('#divAIO2')[0].style.display = 'none';
    });


}


var idArray = ['335234', '327795', '342977', '343089', '343138',
                '344519', '342805', '343163', '343165', '337113',
                '337527', '337302', '338639', '340489', '340123',
                '337443', '337490', '337491', '337494', '336375',
                '337938', '337407', '335972', '336656', '327965',
                '333150', '326654', '332768', '328099', '327664',
                '327123', '345620', '345331', '345265', '345395',
                '345070', '345728', '345787', '347177', '346963',
                '346873', '348701', '343375', '347483', '347417',
                '347173', '346566', '344976', '344466', '343649',
                '341316', '340244', '347960', '348406', '348632',
                '348699', '348897', '348342', '352385', '352534',
                '352924', '354001', '353355', '354203', '355057',
                '354473', '354587', '354541', '343733', '343316',
                '344228', '355256', '354830', '354963', '354102',
                '354867', '357400', '359009', '359013', '357453',
                '352576', '352480', '349693', '360335', '346124',
                '361680', '361891', '362471', '361221', '362399',
                '358358', '358215', '358806', '362529', '362528',
                '362760', '6291', '363798', '281861', '239552',
                '270838', '364425', '364426', '365599', '365289',
                '365085', '365020', '353148', '353148', '366333',
                '365473', '365689', '367736', '367314', '368571',
                '368667', '366527', '367611', '369726', '368888',
                '370131', '369674', '370320', '372114', '373304',
                '373306', '374379', '374987', '375076', '375855',
                '375784', '376621', '375377', '376343', '376333',
                '376469', '374963', '375097', '377557', '377767',
                '377520', '377759', '378289', '378755', '377758',
                '378232', '376107', '377910', '378698', '375598',
                '375355', '375168', '374091', '373883', '373494',
                '378625', '378630', '378632', '378640', '376751',
                '380835', '380967', '381232', '384268', '384225',
                '384117'];


for (i = 0; i < idArray.length; i++) {
    if (getUrl.indexOf(idArray[i]) != -1) {
        $.ajax({
            type: 'POST',
            url: 'https://ad.zurnal24.si/count/'+idArray[i]+'/index.php',
            data: {},
            dataType:'text',
            success: function(data) {
                console.log(data);
              $('.article__views strong').html(data);
              $('.article__views').css('display', 'block');
            },

            error: function(request, status, error) {
                console.log(error);
            }
        });

    }
}


if (getUrl == 'https://www.zurnal24.si/isci/') {
    $('.dars_pcroller').hide();
    $('.body_inner_wrap').css('margin-top', '89px');
} else if (getUrl.indexOf('a1-mesec-druzine') != -1) {
    console.log('Special hide ads');
    //$('.dfp_banner--Leaderboard').eq(0).hide();
    $('.dfp_banner--Leaderboard').eq(1).hide();
    $('.dfp_banner--Leaderboard').eq(2).hide();
} else if (getUrl.indexOf('hibridne-zgodbe') != -1) {
    console.log('Special hide ads');
    $('.dfp_banner--Leaderboard').eq(0).hide();
    $('.dfp_banner--Leaderboard').eq(1).hide();
    $('.dfp_banner--Leaderboard').eq(2).hide();
} else if (getUrl.indexOf('glas-generacije') != -1) {
    console.log('Special change color');
    $('.card__overtitle_wrap .card__overtitle').css({
        'background' : '#35b2a2'
    });
}

if (getUrl.indexOf('354417') != -1) {

    $('.article__figure').append('<img src="https://ad.zurnal24.si/nlblogo.jpg" style="position: absolute; top: 10px; right: 10px; width: 110px;">');

}

if (getUrl == 'https://www.zurnal24.si' || getUrl == 'https://www.zurnal24.si/' || getUrl == 'https://www.zurnal24.si/?meta_refresh=true') {

    $('.position--G2').html('\
            <div class="card__wrap">\
                <a class="card__link" href="https://forum.over.net/kako-so-telefoni-postali-nepogresljiv-modni-dodatek-22677987/" title="Medover" target="">\
                    <!-- blok sa slikom -->\
                    <div class="card__photo_wrap">\
                        <span class="card__photo">\
                            <figure class="card__figure">\
                                <picture data-alt="Avstrija" data-default-src="https://zurnal24.si/banners/2022/03/medover/large.jpg">\
                                    <source srcset="https://zurnal24.si/banners/2022/03/medover/large.jpg" media="(min-width: 1370px)" data-size="297x224">\
                                    <source srcset="https://zurnal24.si/banners/2022/03/medover/medium.jpg" media="(min-width: 1024px)" data-size="317x178">\
                                    <source srcset="https://zurnal24.si/banners/2022/03/medover/small.jpg" data-size="120x120">\
                                    <img class="card__img" src="https://zurnal24.si/banners/2022/03/medover/small.jpg" alt="Medover" data-size="120x120" pinger-seen="true">\
                                    <noscript>\
                                        <img class="card__img" src="https://zurnal24.si/banners/2022/03/medover/large.jpg" alt="Medover" />\
                                    </noscript>\
                                </picture>\
                            </figure>\
                        </span>\
                    </div>\
                    <!-- blok sa nadnaslovom, naslovom i podnaslovom -->\
                    <div class="card__data_wrap cf">\
                        <span class="card__data cf">\
                            <h2 class="card__title">\
                                <span class="card__title_highlight">Kako so pametni telefoni postali nepogrešljiv modni dodatek</span>\
                            </h2>\
                        </span>\
                    </div>\
                    <!-- blok sa lead textom -->\
                    <div class="card__description_wrap">\
                        <span class="card__description">Nekoč so se za izboljšanje oprave uporabljale torbice in nakit, a nekje vmes se je kot modni dodatek prikradel pametni telefon in ukradel naziv nepogrešljivega dodatka.</span>\
                    </div>\
                </a>\
            </div>');

    // $('.position--H3').html('\
    //             <div class="card__wrap">\
    //                 <a class="card__link" href="https://med.over.net/ce-se-ne-spravimo-v-red-nam-bo-trda-predla/" title="MedOverNet" target="">\
    //                     <!-- blok sa slikom -->\
    //                     <div class="card__photo_wrap">\
    //                         <span class="card__photo">\
    //                             <figure class="card__figure">\
    //                                 <picture data-alt="MedOverNet" data-default-src="https://zurnal24.si/banners/2022/04/medover/big.jpg">\
    //                                     <source srcset="https://zurnal24.si/banners/2022/04/medover/big.jpg" media="(min-width: 1024px)" data-size="297x167">\
    //                                     <source srcset="https://zurnal24.si/banners/2022/04/medover/tiny.jpg" data-size="120x120">\
    //                                     <img class="card__img" src="https://zurnal24.si/banners/2022/04/medover/tiny.jpg" alt="MedOverNet" data-size="120x120" pinger-seen="true">\
    //                                     <noscript>\
    //                                         <img class="card__img" src="https://zurnal24.si/banners/2022/04/medover/big.jpg" alt="MedOverNet" />\
    //                                     </noscript>\
    //                                 </picture>\
    //                             </figure>\
    //                         </span>\
    //                     </div>\
    //                     <!-- blok sa nadnaslovom, naslovom i podnaslovom -->\
    //                     <div class="card__data_wrap cf">\
    //                         <span class="card__data cf">\
    //                             <span class="card__overtitle_wrap">\
    //                                 <span class="card__overtitle card__overtitle--background">PROMO</span>\
    //                             </span>\
    //                             <h2 class="card__title">\
    //                                 <span class="card__title_highlight">Če se ne spravimo v red, nam bo trda predla</span>\
    //                             </h2>\
    //                         </span>\
    //                     </div>\
    //                     <!-- blok sa lead textom -->\
    //                     <div class="card__label">preberi več…</div>\
    //                 </a>\
    //             </div>');


    // $('.position--G2').html('\
    //         <div class="card__wrap">\
    //             <a class="card__link" href="https://track.adform.net/C/?bn=49889639" title="Avstrija" target="">\
    //                 <!-- blok sa slikom -->\
    //                 <div class="card__photo_wrap">\
    //                     <span class="card__photo">\
    //                         <figure class="card__figure">\
    //                             <picture data-alt="Avstrija" data-default-src="https://zurnal24.si/banners/2021/10/avstrija/large_4.jpg">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/10/avstrija/large_4.jpg" media="(min-width: 1370px)" data-size="297x224">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/10/avstrija/medium_4.jpg" media="(min-width: 1024px)" data-size="317x178">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/10/avstrija/small_4.jpg" data-size="120x120">\
    //                                 <img class="card__img" src="https://zurnal24.si/banners/2021/10/avstrija/small_4.jpg" alt="Avstrija" data-size="120x120" pinger-seen="true">\
    //                                 <noscript>\
    //                                     <img class="card__img" src="https://zurnal24.si/banners/2021/10/avstrija/large_4.jpg" alt="Avstrija" />\
    //                                 </noscript>\
    //                             </picture>\
    //                         </figure>\
    //                     </span>\
    //                 </div>\
    //                 <!-- blok sa nadnaslovom, naslovom i podnaslovom -->\
    //                 <div class="card__data_wrap cf">\
    //                     <span class="card__data cf">\
    //                         <h2 class="card__title">\
    //                             <span class="card__title_highlight">Zimska ljubezen te ne izpusti</span>\
    //                         </h2>\
    //                     </span>\
    //                 </div>\
    //                 <!-- blok sa lead textom -->\
    //                 <div class="card__description_wrap">\
    //                     <span class="card__description">Zimska ljubezen je več kot le led in sneg. Je ena najlepših priložnosti za preživljanje dopusta v Avstriji. Smučajte ali deskajte po izvrstno pripravljenih progah, elegantno drsajte po jezerih ali pohajkujte po zasneženih mestih v Avstriji.</span>\
    //                 </div>\
    //             </a>\
    //         </div>');

    // $('.position--G1').html('\
    //         <div class="card__wrap">\
    //             <a class="card__link" href="https://med.over.net/golo-iskreno-o-uspehu-podjetniske-ize-sie-login/" title="MedOverNet" target="">\
    //                 <!-- blok sa slikom -->\
    //                 <div class="card__photo_wrap">\
    //                     <span class="card__photo">\
    //                         <figure class="card__figure">   \
    //                             <picture data-alt="MedOverNet" data-default-src="https://zurnal24.si/banners/2021/06/medover/large.jpg">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/06/medover/large.jpg" media="(min-width: 1370px)" data-size="950x404">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/06/medover/medium.jpg" media="(min-width: 1024px)" data-size="643x362">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/06/medover/small.jpg" media="(min-width: 540px)" data-size="540x304">\
    //                                 <source srcset="https://zurnal24.si/banners/2021/06/medover/square.jpg" data-size="480x480">\
    //                                 <img class="card__img" src="https://zurnal24.si/banners/2021/06/medover/square.jpg" alt="MedOverNet" data-size="480x480" pinger-seen="true">\
    //                                 <noscript>\
    //                                     <img class="card__img" src="https://zurnal24.si/banners/2021/06/medover/large.jpeg" alt="MedOverNet" />\
    //                                 </noscript>\
    //                             </picture>\
    //                         </figure>\
    //                     </span>\
    //                 </div>\
    //                 <!-- blok sa nadnaslovom, naslovom i podnaslovom -->\
    //                 <div class="card__data_wrap cf">\
    //                     <span class="card__data cf">        \
    //                         <span class="card__overtitle_wrap">\
    //                             <span class="card__overtitle card__overtitle--background">PROMO</span>\
    //                         </span>                     \
    //                         <h2 class="card__title">\
    //                             <span class="card__title_highlight">Golo iskreno o uspehu podjetniške Ize Sie Login</span>\
    //                         </h2>\
    //                     </span>\
    //                 </div>\
    //                 <!-- blok sa lead textom -->\
    //             </a>\
    //         </div>\
    //         ');


    //Mesec april - special


    // $('.home__content_exchange').after('\
    //             <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">\
    //             <link rel="stylesheet" href="https://ad.zurnal24.si/posveceno-mesto/uporabno/style.css">\
    //             <div class="spec_modul_posveceno">\
    //                 <div class="spec_modul_left">\
    //                     <div class="spec_modul_text_big"><span style="font-weight: 800;">Uporabno</span></div>\
    //                 </div>\
    //                 <div class="spec_modul_right">\
    //                     <a href="https://www.zurnal24.si/uporabno/dopust-v-covid-casu-izrednega-pomena-je-dobro-zavarovanje-367881" target="_blank">\
    //                         <div class="spec_modul_article">\
    //                             <img class="spec_modul_article_img" src="https://ad.zurnal24.si/posveceno-mesto/uporabno/a1.jpeg" alt="">\
    //                             <div class="spec_modul_article_title">Dopust v covid času: izrednega pomena je dobro zavarovanje</div>\
    //                         </div>\
    //                     </a>\
    //                     <hr class="spec_modul_hr_line">\
    //                     <a href="https://www.zurnal24.si/uporabno/kakovost-zraka-v-zaprtih-prostorih-vpliva-na-dolgorocno-kakovost-nasega-zivljenja-367072" target="_blank">\
    //                         <div class="spec_modul_article">\
    //                             <img class="spec_modul_article_img" src="https://ad.zurnal24.si/posveceno-mesto/uporabno/a2.jpg" alt="">\
    //                             <div class="spec_modul_article_title">Kakovost zraka v zaprtih prostorih vpliva na dolgoročno kakovost našega življenja!</div>\
    //                         </div>\
    //                     </a>\
    //                     <hr class="spec_modul_hr_line">\
    //                     <a href="https://www.zurnal24.si/uporabno/triki-za-dvig-razpolozenja-ki-delujejo-v-hipu-368267" target="_blank">\
    //                         <div class="spec_modul_article">\
    //                             <img class="spec_modul_article_img" src="https://ad.zurnal24.si/posveceno-mesto/uporabno/a3.jpeg" alt="">\
    //                             <div class="spec_modul_article_title">Triki za dvig razpoloženja, ki delujejo v hipu</div>\
    //                         </div>\
    //                     </a>\
    //                 </div>\
    //             </div>\
    //         ');


}


// if ($.cookie('merc_junij') == null && (getUrl == 'https://www.zurnal24.si/slovenija' || getUrl == 'https://www.zurnal24.si/slovenija?meta_refresh=true')) {
//     console.log('Mercator opendoor init');
//     var expDate = new Date();
//     //expDate.setTime(expDate.getTime() + (3 * 60 * 60 * 1000)); // add 15 minutes
//     document.write('<scr'+'ipt src="https://sigde.adocean.pl/_'+(new Date()).getTime()+'/ad.js?id=y.Dx6u3EDG6rQ3JwFw.Ne8GX7zenOc9YU60U4_HtvDv.N7/nc=0/redir=" language="javascript"></scr'+'ipt>');
//     $.cookie('merc_junij', '1', {expires: 1});

// } else if ($.cookie('merc_junij') != null) {

//     console.log('Open door: cookie already set, freqency cap 1. Ad display stopped.');

// }


