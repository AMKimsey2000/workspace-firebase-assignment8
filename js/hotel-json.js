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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }
console.log(inputJson);
firebase.firestore().collection("hotel-data").add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});
