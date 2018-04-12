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
    var database = firebase.database();

    //create an event listener to capture new train after user clicks button to submit
    $('#submitNewTrain').on('click', function (event) {
        // event.preventDefault(); //not needed sine button type is "button" not "submit"
        // console.log("button clicked");

        //store user input in variables; trim any extra spaces
        var trainName = $('#trainName').val().trim();
        var frequency = $('#frequency').val().trim();
        var destination = $('#destination').val().trim();
        //goal of moment is to calc time using the year method for the correct timezone that user needs
       
        var firstTrainTime = $('#firstTrainTime').val().trim();
        // console.log(moment().format());
        var convertedTime = moment(firstTrainTime, "hh:mm").subtract(1, "years").format("X");
        console.log.apply(convertedTime);

        // create local temporary object for holding new train data
        var newTrain = {
            Name: trainName,
            Destination: destination,
            Time: firstTrainTime,
            frequency: frequency,
        };

        //push adds user data to firebase db
        database.ref().push(newTrain);
        // console.log(trainName);
        // console.log(destination);
        // console.log(firstTrainTime);
        // console.log(frequency);

        // alert('train added!');

        //clear out user input boxes
        $('#trainName').val('');
        $('#destination').val('');
        $('#firstTrainTime').val('');
        $('#frequency').val('');
    }) //end of onclick event

    //Firebase event with child added retrieves data on each new post added to your app.
    //The child_added event is typically used when retrieving a list of items from the database. Unlike value which returns the entire contents of the location, child_added is triggered once for each existing child and then again every time a new child is added to the specified path. The event callback is passed a snapshot containing the new child's data. For ordering purposes, it is also passed a second argument containing the key of the previous child.
    database.ref().on('child_added', function(childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());

    //store childSnapshots in variables
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

        // console.log(trainName);
        // console.log(destination);
        // console.log(firstTrainTime);
        // console.log(frequency);
    })

    //store user input in hh:mm format into new trainTime variable
    var trainTime = moment.unix(firstTrainTime).format('hh:mm');
    console.log("this is the train time: " + trainTime);

    // crete new variable storing the difference between the times?
    var timeDifference = moment().diff(moment(trainTime),'minutes');

    // store only the remainder of timeDifference divided by frequency in variable
    var remainingTime = timeDifference % frequency;

    //store minutes until next arrival in new variable
    var minutesUntilArrival = frequency - remainingTime;

    //add minutes Until arrival to current time to get New arrival time in hh:mm; store in new var
    var nextArrival = moment().add(minutesUntilArrival, "minutes").format('hh:mm');
    console.log("this is the arrival", nextArrival);

    //Dynamically append user input to table in DOM
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesUntilArrival + "</td></tr>");


}) //end of document.ready function



//time now
// console.log("CURRENT TIME: " +  moment(currentTime).format("hh:mm"));