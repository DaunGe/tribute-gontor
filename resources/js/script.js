$(document).ready(function(){

/* stick navigation */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down"){
        $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },{
    offset: "80px"
  });

/* mobile nav*/
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav, .js--second-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);
  if(icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
});
  /* scrool-button*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /*animation scroll*/
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  },{
    offset: '50%'
  });
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  },{
    offset:'30%'
  });

  /*TYPED */
  var typed = new Typed(".type", {
  // Waits 1000ms after typing "First"
  strings: ["Jadda wa jada", 'saaro alad-darbi <br> washola',"shobaro dzhofiro", "qolla shidquhu <br>  qolla shodiiquhu"],
  typeSpeed: 50,
  backSpeed: 200,
  smartBackspace: true,
  loop: true,
  typedCursor: true

  });
/* magnificPopup*/
  $('.view').magnificPopup({
    type:'image',
  });



});

/*map */


var map;
// create a new blank array for all the gontor listing
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat: -7.928088, lng:111.498257},
        zoom: 10
    });

    var locations = [
      {title: "Universitas Darussalam", location:{lat: -7.901727, lng: 111.490886}},
      {title: "Darussalam gontor 1", location:{lat: -7.928088, lng: 111.498257}},
      {title: "Darussalam gontor 2", location:{lat: -7.906734, lng: 111.460334}},
      {title: "Darul-Ma'rifat",location:{lat: -7.818782, lng: 112.100732}},
      {title: "Darul-Muttaqien",location:{lat: -8.364064, lng: 114.309947}},
      {title: "Darul-Qiyam",location:{lat: -7.536011, lng: 110.298138}},
      {title: "Riyadhatul-Mujahidin",location:{lat: -4.158685, lng: 122.252755}},
      {title: "Darussalam Gontor 8",location:{lat: -5.103757, lng: 105.676265}},
      {title: "Darussalam Gontor 9",location:{lat: -5.679273, lng: 105.623594}},
      {title: "Darul-Amien",location:{lat: 5.365207, lng: 95.618466}},
      {title: "Darussalam Gontor 11",location:{lat: -0.611920, lng: 100.600308}},
      {title: "Darussalam Gontor 12",location:{lat: -1.257572, lng: 103.805444}},
      {title: "Ittihadul-Ummah",location:{lat: -1.335754, lng: 120.644935}},
      {title: "Darussalam Gontor 14",location:{lat: 0.871726, lng: 101.688043}},
      {title: "Darussalam Gontor Female 1",location:{lat: -7.372894, lng: 111.175173}},
      {title: "Darussalam Gontor Female 2",location:{lat: -7.370894, lng: 111.171899}},
      {title: "Darussalam Gontor Female 3",location:{lat: -7.385967, lng: 111.249172}},
      {title: "Darussalam Gontor Female 4",location:{lat: -4.153652, lng: 122.491300}},
      {title: "Darussalam Gontor Female 5",location:{lat: -7.748927, lng: 112.258033}},
      {title: "Darussalam Gontor Female 6",location:{lat: -1.333141, lng: 120.645247}},
      {title: "Darussalam Gontor Female 7",location:{lat: -0.436215, lng: 101.317802}},
    ];

    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var title = locations[i].title;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
      markers.push(marker);
      // Create an onclick event to open an infowindow at each marker.
      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
      });
      bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
  }
  // This function populates the infowindow when the marker is clicked. We'll only allow
  // one infowindow which will open at the marker that is clicked, and populate based
  // on that markers position.
  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
      });
    }


  /*
    var unida = {lat: -7.901727, lng: 111.490886};
    var marker = new google.maps.Marker({
        position: unida,
        map: map,
        title: 'Universitas Darussalam'
    });

    var gontor1 = {lat: -7.928088, lng: 111.498257};
    var marker = new google.maps.Marker({
        position: gontor1,
        map: map,
        title: ' Darussalam Gontor 1'
    });

    var gontor2 = {lat: -7.906734, lng: 111.460334};
    var marker = new google.maps.Marker({
        position: gontor2,
        map: map,
        title: ' Darussalam Gontor 2'
    });

    var gontor3 = {lat: -7.818782, lng: 112.100732};
    var marker = new google.maps.Marker({
        position: gontor3,
        map: map,
        title: " Darul-Ma'rifat"
    });

    var gontor5 = {lat: -8.364064, lng: 114.309947};
    var marker = new google.maps.Marker({
        position: gontor5,
        map: map,
        title: " Darul-Muttaqien"
    });

    var gontor6 = {lat: -7.536011, lng: 110.298138};
    var marker = new google.maps.Marker({
        position: gontor6,
        map: map,
        title: " Darul-Qiyam"
    });

    var gontor7 = {lat: -4.158685, lng: 122.252755};
    var marker = new google.maps.Marker({
        position: gontor7,
        map: map,
        title: " Riyadhatul-Mujahidin"
    });

    var gontor8 = {lat: -5.103757, lng: 105.676265};
    var marker = new google.maps.Marker({
        position: gontor8,
        map: map,
        title: " Darussalam gontor 8"
    });

    var gontor9 = {lat: -5.679273, lng: 105.623594};
    var marker = new google.maps.Marker({
        position: gontor9,
        map: map,
        title: " Darussalam gontor 9"
    });

    var gontor10 = {lat: 5.365207, lng: 95.618466};
    var marker = new google.maps.Marker({
        position: gontor10,
        map: map,
        title: " Darul-Amien"
    });

    var gontor11 = {lat: -0.611920, lng: 100.600308};
    var marker = new google.maps.Marker({
        position: gontor11,
        map: map,
        title: " Darussalam Gontor 11"
    });

    var gontor12 = {lat: -1.257572, lng: 103.805444};
    var marker = new google.maps.Marker({
        position: gontor12,
        map: map,
        title: " Darussalam Gontor 12"
    });

    var gontor13 = {lat: -1.335754, lng: 120.644935};
    var marker = new google.maps.Marker({
        position: gontor13,
        map: map,
        title: " Ittihadul-Ummah"
    });

    var gontor14 = {lat: 0.871726, lng: 101.688043};
    var marker = new google.maps.Marker({
        position: gontor14,
        map: map,
        title: "Darussalam gontor 14"
    });

    var gontor15 = {lat: -7.372894, lng: 111.175173};
    var marker = new google.maps.Marker({
        position: gontor15,
        map: map,
        title: "Darussalam gontor Female 1"
    });

    var gontor16 = {lat: -7.370894, lng: 111.171899};
    var marker = new google.maps.Marker({
        position: gontor16,
        map: map,
        title: "Darussalam gontor Female 2"
    });

    var gontor17 = {lat: -7.385967, lng: 111.249172};
    var marker = new google.maps.Marker({
        position: gontor17,
        map: map,
        title: "Darussalam gontor Female 3"
    });

    var gontor18 = {lat: -4.153652, lng: 122.491300};
    var marker = new google.maps.Marker({
        position: gontor18,
        map: map,
        title: "Darussalam gontor Female 4"
    });

    var gontor19 = {lat: -7.748927, lng: 112.258033};
    var marker = new google.maps.Marker({
        position: gontor19,
        map: map,
        title: "Darussalam gontor Female 5"
    });

    var gontor20 = {lat: -1.333141, lng: 120.645247};
    var marker = new google.maps.Marker({
        position: gontor20,
        map: map,
        title: "Darussalam gontor Female 6"
    });

    var gontor21 = {lat: -0.436215, lng: 101.317802};
    var marker = new google.maps.Marker({
        position: gontor21,
        map: map,
        title: "Darussalam gontor Female 7"
    });*/

}
