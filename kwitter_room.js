var firebaseConfig = {
      apiKey: "AIzaSyAQ0j1HISIhoz4syeuFsxdRDg-1tz0cOyE",
      authDomain: "kwitter-a6246.firebaseapp.com",
      databaseURL: "https://kwitter-a6246-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6246",
      storageBucket: "kwitter-a6246.appspot.com",
      messagingSenderId: "853195704012",
      appId: "1:853195704012:web:69f8d8e0e54631e8a8e469"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.is)'>#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}