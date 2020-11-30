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
firebase.initializeApp(firebaseConfig);

$("#signup-form").submit(function(page) {
  page.preventDefault();
  if (!($("input[name = 'cpassword']").val() == $("input[name = 'password']").val())) {
    alert("Passwords do not match");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword($("input[name = 'username']").val(), $("input[name = 'cpassword']").val()).then(_ => {
    $("input[type = 'submit']").val("Success");
    $("#signup-form")[0].reset();
    setTimeout(function() {
      $("input[type = 'submit']").val("Create your acoount");
    }, 2500);
  }).catch(error => {
    alert(error.message);
  });
});