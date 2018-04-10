$(document).ready(function () {

    //initialize firebase
    var config = {
        apiKey: "AIzaSyA_6R4-Ph7tjjK-KYRF2tZVq3PLV3OyJ40",
        authDomain: "train-scheduler-f1aee.firebaseapp.com",
        databaseURL: "https://train-scheduler-f1aee.firebaseio.com",
        projectId: "train-scheduler-f1aee",
        storageBucket: "",
        messagingSenderId: "664303252169"
    };
    firebase.initializeApp(config);
// created variable to represent the database
var database = firebase.database ();

//create an event listener via JQuery to capture after button clicked
$('#submitNewTrain').on('click', function(event) {
// event.preventDefault(); //Only needed if button type in html is "submit". Changed type to "button" since event.preventDefault with "submit" doesn't work in Firefox browswer.

//store user input in variables; trim any extra spaces
var trainName = $('#trainName').val().trim();
var destination = $('#destination').val().trim();
var firstTrainTime = $('firstTrainTime').val().trim();
var frequency = $('frequency').val().trim();
})
})