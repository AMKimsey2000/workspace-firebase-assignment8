const firebaseConfig = {
  apiKey: "AIzaSyA36sUzMsdEYel8St87dZDh10vLbyLc_Ow",
  authDomain: "fire-assign7.firebaseapp.com",
  databaseURL: "https://fire-assign7.firebaseio.com",
  projectId: "fire-assign7",
  storageBucket: "fire-assign7.appspot.com",
  messagingSenderId: "300042996526",
  appId: "1:300042996526:web:02cac17a21ed2e7507c8bf",
  measurementId: "G-QSQ8750499"
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
