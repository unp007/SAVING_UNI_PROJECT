var firebaseConfig = {
    apiKey: "AIzaSyDd587I2mhR23EPlcY3vRFywWOGZunGZmU",
    authDomain: "savings-f9889.firebaseapp.com",
    projectId: "savings-f9889",
    storageBucket: "savings-f9889.appspot.com",
    messagingSenderId: "324331603963",
    appId: "1:324331603963:web:518549caec2c0ceb236d5e",
    measurementId: "G-PTMY4JWPQG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var first_Name = document.getElementById("First_Name").value;
    var Last_Name = document.getElementById("Last_Name").value;
    var UserName = document.getElementById("User_Name").value;
    var phoneNumber = document.getElementById("Phone").value;
    var Address = document.getElementById("Address").value;
    var email = document.getElementById("registerId").value;
    var password = document.getElementById("registerPassword").value;
    var repassword = document.getElementById("registerRePassword").value;
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.then((result) => {
      var id = firebase.auth().currentUser.uid;
      firebase.database().ref('Savings/'+id).set({
          F_Name: first_Name,
          L_Name: Last_Name,
          U_Name: UserName,
          Phone:  phoneNumber,
          address: Address,
      });
    }).catch((err) => {
      
    });
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("loginId");
    var password  = document.getElementById("loginpassword");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })