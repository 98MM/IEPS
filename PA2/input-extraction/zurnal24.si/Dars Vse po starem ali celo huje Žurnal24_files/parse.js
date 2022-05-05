$(function(){

	var now = new Date(),
    day = now.getDay(),
    hours = now.getHours();

    dataFeed = '';

    console.log('Doberavto - Ura: '+hours);

    if (true) {}

	//every hour
	if(1 <= hours && hours < 2) {
		if(hours !== 2 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kabrioleti.php';
			console.log('Doberavto.si - Feed: kabrioleti - Ura: '+hours);
		}
	}
	if(2 <= hours && hours < 3) {
		if(hours !== 3 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kupeji.php';
			console.log('Doberavto.si - Feed: kupeji - Ura: '+hours);
		}
	}
	if(3 <= hours && hours < 4) {
		if(hours !== 4 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_suv.php';
			console.log('Doberavto.si - Feed: suv - Ura: '+hours);
		}
	}
	if(4 <= hours && hours < 5) {
		if(hours !== 5 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kombilimuzine.php';
			console.log('Doberavto.si - Feed: kombilimuzine - Ura: '+hours);
		}
	}
	if(5 <= hours && hours < 6) {
		if(hours !== 6 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_enoprostorci.php';
			console.log('Doberavto.si - Feed: enoprostorci - Ura: '+hours);
		}
	}
	if(6 <= hours && hours < 7) {
		if(hours !== 7 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_limuzine.php';
			console.log('Doberavto.si - Feed: limuzine - Ura: '+hours);
		}
	}
	if(7 <= hours && hours < 8) {
		if(hours !== 8 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_karavan.php';
			console.log('Doberavto.si - Feed: karavan - Ura: '+hours);
		}
	}
	if(8 <= hours && hours < 9) {
		if(hours !== 9 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_pickup.php';
			console.log('Doberavto.si - Feed: pickup - Ura: '+hours);
		}
	}
	if(9 <= hours && hours < 10) {
		if(hours !== 10 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kombi.php';
			console.log('Doberavto.si - Feed: kombi - Ura: '+hours);
		}
	}
	if(10 <= hours && hours < 11) {
		if(hours !== 11 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kabrioleti.php';
			console.log('Doberavto.si - Feed: kabrioleti - Ura: '+hours);
		}
	}
	if(11 <= hours && hours < 12) {
		if(hours !== 12 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kupeji.php';
			console.log('Doberavto.si - Feed: kupeji - Ura: '+hours);
		}
	}
	if(12 <= hours && hours < 13) {
		if(hours !== 13 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_suv.php';
			console.log('Doberavto.si - Feed: suv - Ura: '+hours);
		}
	}
	if(13 <= hours && hours < 14) {
		if(hours !== 14 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kombilimuzine.php';
			console.log('Doberavto.si - Feed: kombilimuzine - Ura: '+hours);
		}
	}
	if(14 <= hours && hours < 15) {
		if(hours !== 15 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_enoprostorci.php';
			console.log('Doberavto.si - Feed: enoprostorci - Ura: '+hours);
		}
	}
	if(15 <= hours && hours < 16) {
		if(hours !== 16 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_limuzine.php';
			console.log('Doberavto.si - Feed: limuzine - Ura: '+hours);
		}
	}
	if(16 <= hours && hours < 17) {
		if(hours !== 17 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_karavan.php';
			console.log('Doberavto.si - Feed: karavan - Ura: '+hours);
		}
	}
	if(17 <= hours && hours < 18) {
		if(hours !== 18 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_pickup.php';
			console.log('Doberavto.si - Feed: pickup - Ura: '+hours);
		}
	}
	if(18 <= hours && hours < 19) {
		if(hours !== 19 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kombi.php';
			console.log('Doberavto.si - Feed: kombi - Ura: '+hours);
		}
	}
	if(19 <= hours && hours < 20) {
		if(hours !== 20 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kabrioleti.php';
			console.log('Doberavto.si - Feed: kabrioleti - Ura: '+hours);
		}
	}
	if(20 <= hours && hours < 21) {
		if(hours !== 21 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kupeji.php';
			console.log('Doberavto.si - Feed: kupeji - Ura: '+hours);
		}
	}
	if(21 <= hours && hours < 22) {
		if(hours !== 22 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_suv.php';
			console.log('Doberavto.si - Feed: suv - Ura: '+hours);
		}
	}
	if(22 <= hours && hours < 23) {
		if(hours !== 23 || now.getMinutes() <= 30) {
			dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_kombilimuzine.php';
			console.log('Doberavto.si - Feed: kombilimuzine - Ura: '+hours);
		}
	} 
	// else {

	// 	dataFeed = 'https://ad.zurnal24.si/widgets/doberavto/json_enoprostorci.php';
	// 	console.log('Doberavto.si - Feed: enoprostorci - Ura: 23-01');

	// }


	$.ajax({
		//url: 'https://www.zurnal24.si/api/doberavto/data.json',
		url: dataFeed,
		crossDomain: true,
		dataType: "json",
		success: function (data) {
			//console.log(data)
			$('#doberavto_widget_container').before('<link rel="stylesheet" href="https://ad.zurnal24.si/widgets/doberavto/style.css">');
			$('#doberavto_widget_container').append('<div id="doberavto_widget"><div class="doberavto_title"><img src="https://ad.zurnal24.si/widgets/doberavto/da_logo.jpg" alt="Doberavto.si logo" /></div><div class="doberavto_inner"></div></div>');

			for (i = 0; i < 8; i++) {

				var dateNew = data[i]['pubDate'].split(" ");

				$(".doberavto_inner").append('\
					<div class="doberavto_item">\
						<a class="doberavto_link" href="'+data[i]['link']+'" onclick="return getOutboundLink(\''+data[i]['link']+'\', true);" target="_blank">\
							<img class="doberavto_image" src="'+data[i]['image']+'" alt="">\
							<div class="doberavto_date">'+dateNew[1]+' '+dateNew[2]+' '+dateNew[3]+'</div>\
							<div class="doberavto_description">'+data[i]['description']+'</div>\
						</a>\
					</div>');

			}
			$(window).load(function(){
				equalHeight();
			});

		},
		  error: function (xhr, status) {
		  console.log("error");
		}
	});

	function equalHeight() {
		h1 = 0;
		h2 = 0;
		p1 = 0;
		p2 = 0;
		for (i = 0; i < 4; i++) {
			if ($('.doberavto-posting h1').eq(i).outerHeight() > h1){
				$('.doberavto-posting h1').eq(i).height('auto');
				h1 = $('.doberavto-posting h1').eq(i).outerHeight();
			}
			if ($('.doberavto-posting h1').eq(i+4).outerHeight() > h2){
				$('.doberavto-posting h1').eq(i+4).height('auto');
				h2 = $('.doberavto-posting h1').eq(i+4).outerHeight();
			}
			if ($('.doberavto-posting-details').eq(i).outerHeight() > p1){
				$('.doberavto-posting-details').eq(i).height('auto');
				p1 = $('.doberavto-posting-details').eq(i).outerHeight();
			}
			if ($('.doberavto-posting-details').eq(i+5).outerHeight() > p2){
				$('.doberavto-posting-details').eq(i+5).height('auto');
				p2 = $('.doberavto-posting-details').eq(i+5).outerHeight();
			}
			if (i == 3){
				for (k = 0; k < 4; k++) {
					$('.doberavto-posting h1').eq(k).height(h1);
					$('.doberavto-posting h1').eq(k+4).height(h2);
					$('.doberavto-posting-details').eq(k).height(p1);
					$('.doberavto-posting-details').eq(k+4).height(p2);
				}
			}
		}
	}
});