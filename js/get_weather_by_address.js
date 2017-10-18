//https://gist.github.com/marchawkins/9755430

	// function to get weather for an address
	function getWeather(latitude,longitude) {
		if(latitude != '' && longitude != '') {
			$("#weather").val("Retrieving weather...");										// write temporary response while we get the weather
			$.getJSON( "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=imperial", function(data) {	// add '&units=imperial' to get U.S. measurements
				var currWeather					= new Array();								// create array to hold our weather response data
				currWeather['currTemp']			= Math.round(data.main.temp);				// current temperature
				currWeather['highTemp']			= Math.round(data.main.temp_max);			// today's high temp
				currWeather['lowTemp']			= Math.round(data.main.temp_min);			// today's low temp
				currWeather['humidity']			= Math.round(data.main.humidity);			// humidity (in percent)
				currWeather['pressure']			= data.main.pressure * 0.02961339710085;	// barometric pressure (converting hPa to inches)
				currWeather['pressure']			= currWeather['pressure'].toFixed(2);		// barometric pressure (rounded to 2 decimals)
				
				currWeather['description']		= data.weather[0].description;				// short text description (ie. rain, sunny, etc.)
				currWeather['icon']				= "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";	// 50x50 pixel png icon
				currWeather['cloudiness']		= data.clouds.all;							// cloud cover (in percent)
				currWeather['windSpeed']		= Math.round(data.wind.speed);				// wind speed
				
				currWeather['windDegree']		= data.wind.deg;							// wind direction (in degrees)
				currWeather['windCompass']		= Math.round((currWeather['windDegree'] -11.25) / 22.5);	// wind direction (compass value)
				
				// array of direction (compass) names
				var windNames					= new Array("North","North Northeast","Northeast","East Northeast","East","East Southeast", "Southeast", "South Southeast","South","South Southwest","Southwest","West Southwest","West","West Northwest","Northwest","North Northwest");
				// array of abbreviated (compass) names
				var windShortNames				= new Array("N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW");
				currWeather['windDirection']	= windNames[currWeather['windCompass']];	// convert degrees and find wind direction name
				
				
				var response 		= "Current Weather: "+currWeather['currTemp']+"\xB0 and "+currWeather['description'];
				var spokenResponse	= "It is currently "+currWeather['currTemp']+" degrees and "+currWeather['description'];
				
				if(currWeather['windSpeed']>0) {											// if there's wind, add a wind description to the response
					response		= response+" with winds out of the "+windNames[currWeather['windCompass']]+" at "+currWeather['windSpeed'];
					spokenResponse	= spokenResponse+" with winds out of the "+windNames[currWeather['windCompass']]+" at "+currWeather['windSpeed'];
					if(currWeather['windSpeed']==1) {
						response		+= " mile per hour";
						spokenResponse	+= " mile per hour";
					} else {
						response		+= " miles per hour";
						spokenResponse	+= " miles per hour";
					}
				}
				
				console.log(data);												// log weather data for reference (json format) 
				$("#weather").val(response);									// write current weather to textarea
				//speakText(spokenResponse);
			});