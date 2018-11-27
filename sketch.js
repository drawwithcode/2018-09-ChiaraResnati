var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('Leaflet');


// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 3,
	style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();

	fill('black')
	textSize(30);
	textStyle(BOLD);
	text("5 most populated cities in the world", 60, 50)

	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	fill('white');
	rect(point.x-10, point.y-10, 115, 20)

	fill("#13a7db")
	ellipse(point.x, point.y, 15);

	noStroke();
	textSize(15);
	textStyle(BOLD);
	text("You are here", point.x + 10, point.y + 5)

	var point1 = myMap.latLngToPixel(31.2729385, 120.9915176)
	fill("#e7474d")
	ellipse(point1.x, point1.y, 30);

	fill('white')
	text('1', point1.x - 5, point1.y+5)

	var point2 = myMap.latLngToPixel(39.9385466,116.1172731)
	fill("#e7474d")
	ellipse(point2.x, point2.y, 30);

	fill('white')
	text('2', point2.x - 5, point2.y+5)

	var point3 = myMap.latLngToPixel(6.5480357,3.1438725)
	fill("#e7474d")
	ellipse(point3.x, point3.y, 30);

	fill('white')
	text('3', point3.x - 5, point3.y+5)

	var point4 = myMap.latLngToPixel(28.5272181,77.0688994)
	fill("#e7474d")
	ellipse(point4.x, point4.y, 30);

	fill('white')
	text('4', point4.x - 5, point4.y+5)

	var point5 = myMap.latLngToPixel(39.1246963,117.015346)
	fill("#e7474d")
	ellipse(point5.x, point5.y, 30);

	fill('white')
	text('5', point5.x - 5, point5.y+5)
}
