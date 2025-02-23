let a=[];
const form = document.getElementById("frm");
document.getElementById("frm").onload = setter();
const formObject = {};

//fuction to sumbi the form data ass objects and push tehm uinto an array
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let x=empty();

  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  if(x==0){
    check();

  }
 

});


function setter() {
  a = JSON.parse(localStorage.getItem("local"));
  console.log(a);
  if(a==null){
    a=[];
  }
  a = a.filter(obj => {
    return Object.values(obj).every(val => val !== "");
  });

}
  function empty(){
    let count=0;
    //to check if therer is any value not enterd inside the input tag
    if(document.getElementById("fname").value==''){
      document.getElementById("f").classList.add("span_");  
      //window.location.reload();//so that each time error happens it refreshes
      count++;

    }
    if(document.getElementById("lname").value==''){
      document.getElementById("l").classList.add("span_");          
      count++;

    }
    if(document.getElementById("email").value==''){
      document.getElementById("e").classList.add("span_");
      count++;
    }
    if(document.getElementById("password").value==''){
      document.getElementById("p").classList.add("span_");
      count++;
    }
    return count;
  }
  function check(){
    //check function checks weather the email is already existing or not
    let count=0;
  for(x of a){
    if(formObject.email==x.email){
      document.getElementById("account").classList.add("span_");
      count++;
      break;
      }
    }
    if(count==0){
      console.log(formObject);
      a.push(formObject);
       console.log(a);
       let y = JSON.stringify(a);
       localStorage.setItem("local", y);
    }
  }