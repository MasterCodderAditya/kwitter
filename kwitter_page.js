//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });
   document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h>";
message_with_tag = "<hr class='message_h4'>" + message + "</h4>";
like_button="<button onclick='updateLike(this.id)' class='btn btn-warning' id="+firebase_message_id+" value="+like+">";
span_with_tag = "<span class='glyphicon glymphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
   } });  }); }
getData();

function updateLike(message_id)
{
   console.log("clicked on like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes
   });
}