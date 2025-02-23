function check(){
    let x=document.getElementById("email").value;
    let y=document.getElementById("password").value;
    console.log(x);
    console.log(y);
    let array=JSON.parse(localStorage.getItem('local'));
    if(array==null){
        array=[];
        alert("no user");
      }
    let c=0;
    let c1=0;
    console.log(array);
    for(let z of array){
        console.log(z);
        if((z.email==x) && (z.password==y)){
        console.log("you are loged in");
      document.getElementById("login").classList.add("span_"); 
      x=JSON.stringify(x); 
      localStorage.setItem("login",x);
      window.location.href="/landingpage2.html"; 
        c1=1;
        break;
        }
        c++;
    }
    if(c1==0){
        alert("the person is not found");
    }
    
    localStorage.setItem("match",JSON.stringify(c));
    }