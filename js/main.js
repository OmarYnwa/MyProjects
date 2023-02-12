var websitename = document.getElementById("wsname");
var websitelink = document.getElementById("wsurl");


var allwebsites = [];
if(localStorage.getItem("websiets")!=null){
  allwebsites =JSON.parse(localStorage.getItem("websiets"));
  displayform();
}

function addlink() {
  if(validatename()==true&&validatelink()==true){
    var website = {
      name: websitename.value,
      link: websitelink.value,
    }
   allwebsites.push(website);
   localStorage.setItem("websiets",JSON.stringify(allwebsites))
    clearform()
    displayform();
  }
  else if(validatename()==false){
    document.getElementById("pragraph1").innerHTML=`<p class="my-2 m-auto bg-warning">"insert character with number from two char to 15 char"</p>`;
  }
  
  else{
    document.getElementById("pragraph2").innerHTML=`<p class="my-2  m-auto bg-warning">"insert name of website with number of character from two char to 25 char"</p>`; 

  }
}

function clearform(){
websitename.value="";
websitelink.value="";
}

function displayform(){
  var cartoona="";
 for(var i=0;i<allwebsites.length;i++){
  cartoona +=`<tr>
<td class="fs-4">${allwebsites[i].name}</td>
<td>
<a href="http://www.${allwebsites[i].link}.com/" class="btn btn-outline-success" target="_blank">Visit</a>
<button onclick="deleteform(${i})" class= "btn btn-outline-danger">Delete</button>
</td>
  </tr>`
}
document.getElementById("mytable").innerHTML=cartoona;
}

function deleteform(index){

  allwebsites.splice(index,1); 
  displayform();
localStorage.setItem("websiets",JSON.stringify(allwebsites))
}
function validatename(){
  var regexname= /^[a-z]{2,15}$/ig;
   return regexname.test(websitename.value); 
}
   function validatelink(){
  var regexlink= /^[a-z]{2,25}$/i;
 return regexlink.test(websitelink.value); 
}

function onkey1(){
  document.getElementById("pragraph1").innerHTML="";

}
function onkey2(){
  document.getElementById("pragraph2").innerHTML="";
}