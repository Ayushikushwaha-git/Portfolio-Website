//  const nav=document.getElementById('full')
var navbar = document.getElementById("full");

 window.onscroll=function(){
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop > 0 ){     full.classList.add("nav-colored");
 
  full.classList.remove("nav-transparent"); }  else {
    full.classList.add("nav-transparent");
    full.classList.remove("nav-colored");
   
    } };

    const navEl=document.querySelector('.navupdown');
    const navE=document.querySelector('.navigation');
    const hamburgerEl=document.querySelector('.hamburger');
    hamburgerEl.addEventListener("click",()=>{
// // full.classList.toggle("nav-open")
 navE.classList.toggle("h-resp")
// //  navE.classList.toggle("h-resp");

 navEl.classList.toggle("v-resp");
    });

    
window.addEventListener('resize', 
() => map.getViewPort().resize());



//  function sendEmail() {
//    Email.send({
//         Host: "smtp.gmail.com",
//         Username: "sender@email_address.com",
//      Password: "Enter your password",
//      To: 'receiver@email_address.com',
//      From: "sender@email_address.com",
//         Subject: "Sending Email using javascript",
//      Body: "Well that was easy!!",
//        })
//      .then(function (message) {
//        alert("mail sent successfully")
//     });
//     }
  
// document.querySelector(".formm").addEventListener("submit",submitForm);
//  function submitForm(e){
//     e.preventDefault;
//     let name=document.querySelector(".name").value;
//     let email=document.querySelector(".email").value;
//     let subject =document.querySelector(".subject").value;
//     let message=document.querySelector(".message").value;
//     console.log(name,email,subject);
//     saveContactInfo(name,email,subject,message);
//     document.querySelector(".formm").reset();
//     sendEmail(name,email,subject,message);
//  }
//  function saveContactInfo(name,email,subject,message){
//     let newContact=contactInfo.push();
//     newContact.set({
//         name:name,
//         email:email,
//         message:message,
//         subject:subject,
//     })
      
    
//  }


 //
//  function sendEmail(){
//     email.send(
//         {
//             Host: "smtp.gmail.com",
//              Username: "kayushi157@gmail.com",
//            Password: "zpylxklqingtpzha",
//                 To: "kayushi157@gmail.com",
//                From: "kayushi157@gmail.com",
//              Subject: "Sending Email using javascript",
//               Body: "Well that was easy!!",   
//         }
//     ).then((mesage)=>alert("email sent"));
//  }