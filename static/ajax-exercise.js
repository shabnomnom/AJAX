"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

	$.get('/fortune', (results) => {
		const fortune = results;

		$('#fortune-text').html(fortune);
	});

}
// call the evt handler outside of the function, so it would run only 
// when the event happens 
$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {

	// write this line to load run stuff on an order rather than on the way js optimize 
    evt.preventDefault();

    // make a variable to put the /url that we want to run in ajax 
    let url = "/weather.json";

    // get user input form data using .val method of jquery to extract what 
    // is in the form before before having it passed to the server  
    let formData = {"zipcode": $("#zipcode-field").val()};

    	// send form data to server 
    	// first orange result all the way to } is the call back function 
    	// first orange result = parameter to our inline function 
    	// result is the object AKA dictionary that the weather.json returns 
    	// json returns a dictunary 
    	// send data from user to the route in server to get the result 
    	$.get(url,formData, (results) => {
    	const weather = results['temp'] + ":" + results['forecast'];

    	//Display result from server 
    	$('#weather-info').html(weather);

    	// add print for debugging  
    	console.dir(results);
    
    	// display an alart
		 alert(`The forcast for zipcode ${formData.zipcode} is ${results.forecast}`);
		});
    // TODO: request weather with that URL and show the forecast in #weather-info
}

// function showWeather(evt) {

// 	// write this line to load run stuff on an order rather than on the way js optimize 
//     evt.preventDefault();

//     // make a variable to put the /url that we want to run in ajax 
//     let url = "/weather.json";

//     // get user input form data  
//     let formData = {"zipcode": $("#zipcode-field").val()};

//     	$.get(url,formData, displayResults);
//     // TODO: request weather with that URL and show the forecast in #weather-info
// }


// function displayResults(results) {
// 	const weather = results['temp'] + ":" + results['forecast'];

//     	//Display result from server 
//     	$('#weather-info').html(weather);

//     	// add print for debugging  
//     	console.dir(results);
    
//     	// display an alart
// 		 alert(`The forcast is ${results.forecast}`);
// }

// call back on submit has to be outside of function 
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


