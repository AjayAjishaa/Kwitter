
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBRAHG2s61FgAgmwO03Tyxbr4bvF66fmG8",
      authDomain: "kwitter-8e584.firebaseapp.com",
      databaseURL: "https://kwitter-8e584-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e584",
      storageBucket: "kwitter-8e584.appspot.com",
      messagingSenderId: "931505136252",
      appId: "1:931505136252:web:30a3770504ee336f549ff9"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="welcome " + user_name + "!";
 
    function addRoom()
     {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
        });
 
        localStorage.setItem("room_name", room_name);
 
        window.location ="kwitter_page.html";
     }
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("room_name-" + Room_names);
        row ="<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id)'> #" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
       });});}

 getData();
 function redirectToRoomName(name)
 {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location ="kwitter_page.html";
 }

 function logout()
 {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="index.html";
 }
  

