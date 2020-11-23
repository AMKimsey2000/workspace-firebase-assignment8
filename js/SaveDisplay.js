// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA49jhFYfw-wv116rAMmqWrWTE9ecp6UW4",
    authDomain: "fire-assignment8.firebaseapp.com",
    databaseURL: "https://fire-assignment8.firebaseio.com",
    projectId: "fire-assignment8",
    storageBucket: "fire-assignment8.appspot.com",
    messagingSenderId: "1094407611598",
    appId: "1:1094407611598:web:5a19d9d37d07f50d67dc9f",
    measurementId: "G-XZZ8HV9T3M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type = 'submit']").click(function(obj) {
  obj.preventDefault();
  var data = $(".sampleSurvey").serializeArray();
  var json = {};
  data.forEach(function(_, index) {
    json[data[index]["name"]] = data[index]["value"]
  });
  firebase.firestore().collection("survey-data").add(json);
  console.log("Successfully saved survey data to database");
});
// update the result in table
firebase.firestore().collection("survey-data").onSnapshot(function(snap) {
  $("td").each(function() {
    if ($(this).attr("id")) {
      $(this).text("0");
    }
  });
  console.log("Successfully pulled " + snap.size + " items from database");
  snap.forEach(document => {
    var obj = $("td#ans" + (String(document.data().choice).charCodeAt(0) - 64));
    obj.text(parseInt(obj.text()) + 1);
  });
});