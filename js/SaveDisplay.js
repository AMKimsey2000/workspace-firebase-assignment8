// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
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
  console.log(json)
});
// update the result in table
