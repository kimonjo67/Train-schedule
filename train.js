// Initializa firebase
var config = {
    apiKey: "AIzaSyD3hAqD8mkQs1myD_rjD8SP_kX6Hihn2Sg",
    authDomain: "train-schedule-7c3d0.firebaseapp.com",
    databaseURL: "https://train-schedule-7c3d0.firebaseio.com",
    projectId: "train-schedule-7c3d0",
    storageBucket: "train-schedule-7c3d0.appspot.com",
    messagingSenderId: "739863430682"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  console.log("database created");

  // Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
  	event.preventDefault();
  	//Grab User input
  	var trainName = $("#train-name-input").val().trim();
  	var trainDestination = $("#destination-input").val().trim();
  	var trainFirst = $("#first-input").val().trim();

  // Create a local temporary storage object for holding user input
  var TrainInfo = {
  	name: trainName,
  	destination: trainDestination,
  	first: trainFirst
  };

  //upload new train data to the database
  database.ref().push(TrainInfo);

  	console.log(TrainInfo.name);
  	console.log(TrainInfo.destination);
  	console.log(TrainInfo.first);

  //Alert
  alert("New train added here")

  //Clear all of the text boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-input").val("");
 });

  // Create a firebase event for adding Train to database and a row in the html
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirst = childSnapshot.val().first;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFirst);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainFirst + "</td></tr>");
});
