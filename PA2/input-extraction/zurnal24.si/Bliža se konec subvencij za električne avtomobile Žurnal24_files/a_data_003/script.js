$(function() {

    captchaCheck();
    validations();

});

function validations() {

    $('#send_btn').click(function(e) {

        var email = $('#email').val();
        var pravila = $('#pravilnik').is(':checked');
        if (email == '') {

            e.preventDefault();

            $('.input-bg').addClass('error');
            $('#informer').html('Polje je obvezno!');


        } else if (!isValidEmailAddress(email)) {
            e.preventDefault();
            $('#email').addClass('error');
            $('#informer').html('Vpišite pravilen e-mail naslov');

        } else if(!pravila) {
            e.preventDefault();
            $('#informer').html('Strinjati se morate s pravili sodelovanja');
        }
    });


}

var onloadCallback = function() {
    //alert('captcha ready');
    var captchaContainer = null;
    var loadCaptcha = function() {
        captchaContainer = grecaptcha.render('captcha_container', {
            'sitekey': '6Lfckw0UAAAAANtAS2PpJnZ6ptPcnrfTiTcC41QV',
            'callback': function(response) {
                var capt_resp = response;
                if (capt_resp == '') {
                    alert('Prosimo potrdite, da niste robot.');
                } else {
                    //console.log('captcha response: ' + capt_resp); // --> captcha response
                    $.ajax({
                        type: "POST",
                        url: "https://ad.zurnal24.si/recaptcha/recaptcha.php",
                        data: "g-recaptcha-response=" + capt_resp,
                        success: function(data) {
                            if (data == "passed") {
                            	if ($('#send_btn').length) {
                            		validations();
                            	} else {
                            		$('#send_btn_placeholder').hide();
                                    $('#send_btn_placeholder').after('<input type="submit" name="shrani" id="send_btn" value="PRIJAVA!" />');
                                    validations();
                            	}
                            } else if (data == "failed") {
                                //console.log('failed');
                                alert('Preverjanje neuspešno. Prosimo potrdite, da niste robot.');
                            }
                        },
                        error: function(xhr, status, error) {
                        }
                    });
                }
            }
        });
    };
    loadCaptcha();
 };


function captchaCheck() {
 	console.log('captcha');
    $('#z24_form_container').append('<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script><div id="captcha_container"></div><script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>');
}


function isValidEmailAddress(sendermail) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(sendermail);
};

function IsNumeric(input) {
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}