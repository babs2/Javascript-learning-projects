var weather;
var url='http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'rochester';
var code = '&524901&APPID=882a639d8bf42019204a694de6c4a18d';
var units = '&units=imperial';


//getAPI(http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=882a639d8bf42019204a694de6c4a18d,data);

function setup(){
	createCanvas(400,400);
	loadJSON(url + city + code + units, dataFetch);

}

function dataFetch(data) {
	weather = data;
	console.log(data);


}

// function draw() {
// 	background(0);
// 	if (weather) {
// 		var temp = weather.main.temp;
// 		var humidity = weather.main.humidity;
// 		fill(255);
// 		rect(100,300,75,-temp*2);
// 		rect(300,300,75,-humidity);
// 		fill(0);
// 		text(temp,125,275);
// 		text(humidity,325,275);

// 	}

}