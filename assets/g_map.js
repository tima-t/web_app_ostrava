	  // Note: This example requires that you consent to location sharing when
	  // prompted by your browser. If you see the error "The Geolocation service
	  // failed.", it means you probably did not give permission for the browser to
	  // locate you.

	  function initMap() {
		//resize map 
		$(window).resize(function () {
			var h = $(window).height(),
			offsetTop = 60; // Calculate the top offset
			$('#map').css('height', (h - offsetTop));
		}).resize();
		
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: -34.397, lng: 150.644},
		  zoom: 6
		});
		var infoWindow = new google.maps.InfoWindow({map: map});

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
			  lat: position.coords.latitude,
			  lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			map.setCenter(pos);
		  }, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		  });
		} else {
		  // Browser doesn't support Geolocation
		  handleLocationError(false, infoWindow, map.getCenter());
		}

		//
		 var geocoder = new google.maps.Geocoder();

		google.maps.event.addListener(map, 'click', function(event) {
		geocoder.geocode({
			'latLng': event.latLng
			 }, 
			function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					console.log(results[0].formatted_address);
					var segments = results[0].formatted_address.split(",");
					var country = segments.pop();
					if (results[0].formatted_address) {
				   // alert("Do you want to learn something more about" + country);
					  $('#showInfo').text("Do you want to learn something more about" + country);
					  console.log(country);
					  $('#hidCountry').text(country);
					  $('#myModal').modal('show');
					}
				}
			});
		});

	  }

	  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
							  'Error: The Geolocation service failed.' :
							  'Error: Your browser doesn\'t support geolocation.');
	  }

	  // $("#myModal").on('hidden.bs.modal', function () {
	  //   console.log('here modal');
	  //   $scope.$apply();
	  // });



