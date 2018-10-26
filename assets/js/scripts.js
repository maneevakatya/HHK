$(document).ready(function() {

  window.sf = {};
  window.sf.form = {
    init: function() {
      var o = this;
      $(".request__input--phone").keydown(function(e) {
          -1 !== $.inArray(e.keyCode, [
            46,
            8,
            9,
            27,
            13,
            110,
            190
          ]) || 65 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
        }),
        $(".request__input--phone").inputmask("+7 (999) 999 - 99 - 99", {
          placeholder: " ",
          showMaskOnHover: !1,
          showMaskOnFocus: !1
        }),
        $(".request__form").submit(function(e) {
          if (!o.checkForm($(this)))
            return !1
        })
    },
    checkForm: function(e) {
      var o = !0;
      return e.find(".warning").removeClass("warning"),
        e.find("input, textarea, select").each(function() {
          if ($(this).data("req"))
            switch ($(this).data("type")) {
              case "mobile":
                $.trim($(this).val()).length < 22 && ($(this).addClass("warning"), o = !1);
                break;
              default:
                "" === $.trim($(this).val()) && ($(this).addClass("warning"), o = !1)
            }
        }),
        o
    }
  }.init(),
  window.sf.contacts = ({

    bindEvents: function() {
      var styles = [{
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
              "hue": "#ffbb00"
            },
            {
              "saturation": 43.400000000000006
            },
            {
              "lightness": 37.599999999999994
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ff0000"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
              "hue": "#5fff00"
            },
            {
              "saturation": "-53"
            },
            {
              "lightness": "-46"
            },
            {
              "gamma": "1.17"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
              "hue": "#ffc200"
            },
            {
              "saturation": -61.8
            },
            {
              "lightness": 45.599999999999994
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
              "hue": "#FF0300"
            },
            {
              "saturation": -100
            },
            {
              "lightness": 51.19999999999999
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
              "hue": "#ff0300"
            },
            {
              "saturation": -100
            },
            {
              "lightness": 52
            },
            {
              "gamma": 1
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "hue": "#0078ff"
            },
            {
              "saturation": -13.200000000000003
            },
            {
              "lightness": 2.4000000000000057
            },
            {
              "gamma": 1
            }
          ]
        }
      ]

      var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
      });

      var mapOptions = {
        zoom: 7,
        scrollwheel: false,
        center: '',
        styles: styles,

        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
      };

      var image = 'assets/img/pin.png';

      mapOptions.center = new google.maps.LatLng(50.8994201,132.1392537);
      map = new google.maps.Map(document.getElementById('contactsmap'), mapOptions);
      var start_point = new google.maps.LatLng(50.410758, 127.658320);

      var map_center = new google.maps.LatLng(50.8994201,132.1392537);

      var marker = new google.maps.Marker({
        position: start_point,
        map: map,
        icon: image
      });

    },

    init: function() {

      if ($('#contactsmap').length)
        this.bindEvents();
    }

  }).init();

  $(window).resize(function() {
    if ($(window).width() < 650) {
      $('.header').addClass("fixed");
    }
  }).trigger('resize');

  $(window).scroll(function() {

  if ($(this).width() < 650) {
    return false;
  } else

    if ($(this).scrollTop() > 50) {
      $('.header').addClass("fixed");
    }
    else{
      $('.header').removeClass("fixed");
    }

}).trigger('resize');

$(".burger-menu").click(function() {
  $(this).toggleClass("is-active");
   $(".header__nav").slideToggle();
 });

$("body").on("click", ".js-scrollTo", function(event) {
	event.preventDefault();
	var elementClick = $(this).attr("href").substr(1);
    var destination = $(elementClick).offset().top;
    if (($(window).width() <= 1024)) {
      $("html, body").animate({
        scrollTop: destination
      }, 1500)
      $(".header__nav").slideUp('slow', function() {
        $(this).css('display', '');
      });
      $(".burger-menu").toggleClass("is-active");
      $("html, body").toggleClass("ovh");
    } else {
      $("html, body").animate({
        scrollTop: destination - 91
      }, 1500)
    }
});
if (location.hash != '') {
   setTimeout(function(){
    var _this = location.hash;
      t = $(_this).offset().top;
    $("html, body").animate({
     scrollTop: t - 50
    }, 1000)
   }, 500)
  }
});
