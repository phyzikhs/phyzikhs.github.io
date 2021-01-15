// color object
/*class Color {
  constructor(price, name, selections) {// each color has its object in checkout
    this.name = name;
    this.price = price;
    this.selections = selections;
  }
  function add() {//increment number of selections of this color
    this.selections++;
  }
  function delete() {// decrement number of selections of this color
    this.selections--;
  }
}
// list of colors that were selected
var details = new Color[];*/

var colours = [
	{name: "Electric Red", class: "red_shape", price: 17.99, discount: 0.25, reviews: 6895, ratings: 5},
	{name: "Shine Purple", class: "purple_shape", price: 19.00, discount: 0.30, reviews: 5230, ratings: 5},
	{name: "Black", class: "black_shape", price: 13.50, discount: 0.20, reviews: 23658, ratings: 4.5},
	{name: "White", class: "white_shape", price: 30.00, discount: 0.40, reviews: 9743, ratings: 4},
	{name: "Orange", class: "orange_shape", price: 21.65, discount: 0.10, reviews: 3548, ratings: 4},
	{name: "Yellow", class: "yellow_shape", price: 19.99, discount: 0.25, reviews: 65489, ratings: 3.5},
	{name: "Blue", class: "blue_shape", price: 15.40, discount: 0.30, reviews: 24056, ratings: 5},
	{name: "Navy Blue", class: "navy_shape", price: 7.39, discount: 0.05, reviews: 8789, ratings: 4.5},
	{name: "Light Brown", class: "lbrown_shape", price: 18.50, discount: 0.20, reviews: 1202, ratings: 5},
	{name: "Pink", class: "pink_shape", price: 3.99, discount: 0.01, reviews: 5400, ratings: 5},
	{name: "Gold", class: "dbrown_shape", price: 12.99, discount: 0.13, reviews: 6979, ratings: 5},
	{name: "Green", class: "green_shape", price: 16.99, discount: 0.15, reviews: 1687, ratings: 5},
	{name: "Grey", class: "dgrey_shape", price: 17.20, discount: 0.06, reviews: 10235, ratings: 4.5},
	{name: "Warm Brown", class: "vbrown_shape", price: 6.85, discount: 0.05, reviews: 6975, ratings: 4.5},
	{name: "Cyan", class: "lime_shape", price: 11.80, discount: 0.05, reviews: 7512, ratings: 5},
	{name: "Light Grey", class: "grey_shape", price: 5.50, discount: 0.05, reviews: 16875, ratings: 4.5},
]

//color names
var colos = ["Electric Red","Native Purple","Black","White","Orange","Yellow","Blue","Navy","Light Brown","Pink","Gold","Green","Grey","Dry Brown","Hue","Light Grey"];
var colo_classes = ["red_shape","purple_shape","black_shape","white_shape","orange_shape","yellow_shape","blue_shape","navy_shape","lbrown_shape","pink_shape","dbrown_shape","green_shape","dgrey_shape","vbrown_shape","lime_shape","grey_shape"];
var prices = [14.99,5.12,14.99,8.33,16.45,16.22,5.15,12.23,7.81,54.21,8.32,22.14,16.01,92.11,6.48,6.99]; //
var incrementable = document.getElementsByClassName("incrementable")[0].innerHTML;
var shapes = document.getElementsByClassName("shapes");
var clicked = 0;
function enable(color) { // toggles colour clicked
	// disable all other elements and enable current
	document.getElementsByClassName("inTheCart")[0].innerHTML = 0;
	document.getElementsByClassName("actual_price")[0].innerHTML = "$"+colours[color].price.toFixed(2);
	document.getElementsByClassName("current_price")[0].innerHTML = "$"+(colours[color].price-colours[color].discount*colours[color].price).toFixed(2);
	document.getElementsByClassName("discount")[0].innerHTML = (colours[color].discount*100)+"% OFF"
	document.getElementsByClassName('button')[0].innerHTML = "Add to Cart";

	document.getElementsByClassName("num_reviews")[0].innerHTML = numberWithCommas(colours[color].reviews);
	// document.getElementsByClassName("num_reviews")[0].innerHTML
	for (var i = shapes.length - 1; i >= 0; i--) {
		if (shapes[i]!=shapes[color]) { // if not currently enabled, set as disabled
			shapes[i].style.borderColor = "white";
			shapes[i].style.boxShadow = "0px 0px 0px 2px white";
		}
		else { // set as enabled
			// shapes[i].style.borderColor = "grey";
			shapes[i].style.boxShadow = "0px 0px 0px 2px grey";
		}
	}
	renamePrices(color);
}

	function addDetails(color_name, int) {
		console.log(color_name.innerHTML);
	var pos = colos.indexOf(color_name.innerHTML);
	color_class = "shapes "+colours[pos].class;
	var div = "<div class='"+color_class+" circle_details"+"'"+" onclick=this.remove() ></div>";
	for (var i = 0; i < int; i++) {
		document.getElementById("chosen_color").innerHTML+=div;
	}

}
function showProceedList() {
	document.getElementsByClassName('showFinal')[0].innerHTML = document.getElementById('chosen_color').innerHTML;
}
function renamePrices(int){
	colo = document.getElementsByClassName("colorname")[0].innerHTML = colours[int].name;
	clicked = int;
}

function incr(){
	incrementable++;
	relableNumb();
}
function decr(){
	if (incrementable>0) {
		incrementable--;
		relableNumb();
	}
	else {
		relableNumb();
	}
}
function relableNumb() {
	document.getElementsByClassName("incrementable")[0].innerHTML = incrementable;
}

function resetCounter(){
	incrementable = 0;
}

function agree() {
	/*if (incrementable!=0) {
		document.getElementsByClassName('button')[0].innerHTML = "Checkout Now";
	}*/
	document.getElementsByClassName("inTheCart")[0].innerHTML = incrementable;
	addDetails(document.getElementsByClassName("colorname1")[0], incrementable);
	resetCounter();
	relableNumb();
	// document.getElementsByClassName("modal")[0].style.display = "none";
}

function changeColorModal() {
	resetCounter();
	document.getElementsByClassName("colorname1")[0].innerHTML = colos[clicked];
}

function numberWithCommas(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
