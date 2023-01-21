//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyBi-mhbN_3D_2Yv_pp1dTQ1Lp_2WPHEvmE",
//    authDomain: "todo-a414d.firebaseapp.com",
//    projectId: "todo-a414d",
//    storageBucket: "todo-a414d.appspot.com",
//    messagingSenderId: "275362858590",
//    appId: "1:275362858590:web:27daccb1f236b874c496cf",
//    measurementId: "G-TZNW09SKSX"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);





var mainlist = document.getElementById('mainlist');
 function addElem(){
  var inp1 = document.getElementById('inp1');

  var a = document.createElement('LI');
      var b = document.createTextNode(inp1.value);
  
      a.appendChild(b);
      mainlist.appendChild(a);
     console.log(a);
      var delBtn = document.createElement('BUTTON');
     var delText = document.createTextNode('Delete');
     delBtn.appendChild(delText);
       a.appendChild(delBtn);

       var edtBtn = document.createElement('Button');
         var edtText = document.createTextNode('Edit');
            edtBtn.appendChild(edtText);
            a.appendChild(edtBtn);
       
        mainlist.appendChild(a);
       
            delBtn.setAttribute('class','editing');
            delBtn.setAttribute('onclick','delbutton(this)');
            edtBtn.setAttribute('class','editing2');
         edtBtn.setAttribute('onclick','edtbutton(this)')
    console.log(a);

}
    function delbutton (element){
            element.parentNode.remove();
         }

         function edtbutton (element){
             console.log(element.parentNode);
           element.parentNode.firstChild.nodeValue = prompt();
      }

           function deleteAll(){
               mainlist.innerHTML = "";
               }