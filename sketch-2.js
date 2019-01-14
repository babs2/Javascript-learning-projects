// function setup(){
// createCanvas(800,800);
// background(255);
// }
// function touchMoved(){
//   ellipse(mouseX, mouseY,100,100);
//
// }
//
// function draw (){
//   var x = random(0,600);
//   var y = random(0,600);
//   var c1 = random(0,255);
//   var c2 = random(0,255);
//   var c3 = random(0,255);
//   var rndPI = random(0.1, 4.0);
// // background(255);
// stroke(41);
// // textSize(48);
// // rotate (PI / rndPI);
// fill(c1,c2,c3);

// text("I love you Laura",x,y);



// // Setup
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };
//
// function checkObj(checkProp){
//     if(myObj.hasOwnProperty(checkProp)){
//       console.log(myObj[checkProp]);
//     }
//   //  {console.log("Nothing Found");
// //  }
// }
//
// // Test your code by modifying these values
// checkObj("gift");
// checkObj("dog");
// checkObj("pet");
// checkObj("sleigh");
// checkObj("bed");



// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}
console.log(collectionCopy);
console.log(collection);
console.log(collectionCopy);



// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
