import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyD0WcxhL0tVSxaDFlkspWP54lIBTSFEIxM",
    authDomain: "resourcefy-7104b.firebaseapp.com",
    projectId: "resourcefy-7104b",
    storageBucket: "resourcefy-7104b.appspot.com",
    messagingSenderId: "215371510884",
    appId: "1:215371510884:web:82b283d17ce402c658db71",
  };


  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;