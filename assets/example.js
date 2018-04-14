
function getTimes(freq, first_time) {
     console.log(“I’m in the getTimes function”);

     // Assumptions
   //var tFrequency = 1440; // frequency
   var tFrequency = freq;
   console.log(“frequency is ” + tFrequency);
   console.log(“I was passed ” + freq);
   // Time is 3:30 AM
   //var firstTime = “00:00"; //train starts
   var firstTime = first_time;
   console.log(“first train is ” + firstTime);
   console.log(“I was passed ” + first_time);

   // First Time (pushed back 1 year to make sure it comes before current time)
   var firstTimeConverted = moment(firstTime, “hh:mm”).subtract(1, “years”);
   console.log(“first time converted is ”  + firstTimeConverted);

   // Current Time
   var currentTime = moment();
   console.log(“CURRENT TIME: ” + moment(currentTime).format(“hh:mm”));

   // Difference between the times
   var diffTime = moment().diff(moment(firstTimeConverted), “minutes”);
   console.log(“DIFFERENCE IN TIME: ” + diffTime);

   // Time apart (remainder)
   var tRemainder = diffTime % tFrequency;
   console.log(tRemainder);

   // Minute Until Train
   var tMinutesTillTrain = tFrequency - tRemainder;
   console.log(“MINUTES TILL TRAIN: ” + tMinutesTillTrain);

   // Next Train
   var nextTrain = moment().add(tMinutesTillTrain, “minutes”);
   console.log(nextTrain);
   console.log(“ARRIVAL TIME: ” + moment(nextTrain).format(“hh:mm”));

   //setting these global variable bc return isn’t working liked I hoped
   nextArrival = moment(nextTrain).format(“hh:mm A”);

   minsAway = tMinutesTillTrain;
   console.log(minsAway);
   return nextTrain, tMinutesTillTrain;
 }