function addUser(){
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyDqz5GGRvznR7Rb3aDatC-Jj4F_FZBqC0A",
    authDomain: "project-94-439a4.firebaseapp.com",
    databaseURL: "https://project-94-439a4-default-rtdb.firebaseio.com",
    projectId: "project-94-439a4",
    storageBucket: "project-94-439a4.appspot.com",
    messagingSenderId: "1070997505088",
    appId: "1:1070997505088:web:a574634984a5bf5de88ba5",
    measurementId: "G-0459PS0EJF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});