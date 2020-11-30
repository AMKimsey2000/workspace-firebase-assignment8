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

$("#loginForm").submit(page => {
  page.preventDefault();
  firebase.auth().signInWithEmailAndPassword($("#login").val(), $("#pwd").val()).then(_ => {
    console.log("Login successful");
    $("input[type = 'submit'").val("Success");
    setTimeout(function() {
      $("input[type = 'submit'").val("Submit");
    }, 2500);
  }).catch(err => {
    alert(err.message);
  })
})