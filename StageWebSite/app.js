  
  const firebaseConfig = {
    apiKey: "AIzaSyABLSp0NkCG1tWaUgRxQM80U_frfPF2rmA",
    authDomain: "n-stagie.firebaseapp.com",
    projectId: "n-stagie",
    storageBucket: "n-stagie.appspot.com",
    messagingSenderId: "1015399882820",
    appId: "1:1015399882820:web:47d99773fb9590fff49c11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    var uploadTask;
    document.getElementById('file').addEventListener('change', (event) => {
      document.getElementById("next").style.display = "block";
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);
   uploadTask = storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;

       



});
});




next.addEventListener('click',(e)=>{
  window.location.href = "afterSignUp01.html";
 
});




