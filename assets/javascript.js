$(document).ready(function () {

    //initialize firebase
    var config = {
        apiKey: "AIzaSyA_6R4-Ph7tjjK-KYRF2tZVq3PLV3OyJ40",
        authDomain: "train-scheduler-f1aee.firebaseapp.com",
        databaseURL: "https://train-scheduler-f1aee.firebaseio.com",
        projectId: "train-scheduler-f1aee",
        storageBucket: "train-scheduler-f1aee.appspot.com",
        messagingSenderId: "664303252169"
      };
      firebase.initializeApp(config);

// created variable to represent the database
var database = firebase.database ();

//create an event listener to capture new train after user clicks button to submit
$('#submitNewTrain').on('click', function(event) {
// event.preventDefault();
console.log("button clicked");

//store user input in variables; trim any extra spaces
var trainName = $('#trainName').val().trim();
var destination = $('#destination').val().trim();

//goal of moment is to calc time using the year method for the correct timezone that user needs
var firstTrainTime = $('#firstTrainTime').val().trim();
console.log (moment().format()); 
// var convertedTime = moment(firstTrainTime, "hh:mm").subtract(1, "years").format("X");
// console.log.apply(convertedTime);

var frequency = $('#frequency').val().trim();

// create local temporary object for holding new train data
var newTrain = {
    Name: trainName,
    Destination: destination,
    Time: firstTrainTime,
    frequency: frequency,
};

database.ref().push(newTrain);
console.log(trainName);
console.log(destination);
console.log(firstTrainTime);
console.log(frequency);

// alert('train added!');
})
})

//time now
// console.log("CURRENT TIME: " +  moment(currentTime).format("hh:mm"));