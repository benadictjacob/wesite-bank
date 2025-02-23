let initial = 500;
let b = [];
let option = 0;
let mpin = 0;
const form = document.getElementById("frm-data");
document.getElementById("frm-data").onload = setter();
let formObject = {};
let email = JSON.parse(localStorage.getItem("login"));
console.log(email);
//function to validate the email
function email_valid() {
  //to vlidate each time the key is pressed
  let x = document.getElementById("email").value;
  let exists = b.some((obj) => obj.email === x);
  if (exists) {
    // console.log("hi");
    document.getElementById("eml_vld").classList.remove("span");
    document.getElementById("eml_vld").classList.add("span_");
  } else {
    document.getElementById("eml_vld").classList.add("span");
    document.getElementById("eml_vld").classList.remove("span_");
  }
}
function pause() {
  //here we set hovering effect to freez
  document.getElementById("alone").classList.remove("btn");
  document.getElementById("alone").classList.add("btn-after");

  document.getElementById("business").classList.remove("btn-after");
  document.getElementById("business").classList.add("btn");
  //  this function will only be performed when the option is clicked
  document.getElementById("usr").classList.remove("usrtyp");
  document.getElementById("usr").classList.add("usr_typ");
  option = 1;
}
function pause_() {
  //here we set hovering effect to freez
  document.getElementById("business").classList.remove("btn");
  document.getElementById("business").classList.add("btn-after");

  document.getElementById("alone").classList.remove("btn-after");
  document.getElementById("alone").classList.add("btn");
  //  this function will only be performed when the option is clicked
  document.getElementById("usr").classList.remove("usrtyp");
  document.getElementById("usr").classList.add("usr_typ");
  option = 2;
}
function account() {
  //to enrter user informations to start a personal account
  if (option == 1) {
    document.getElementById("frm-display").classList.remove("frm");
    document.getElementById("frm-display").classList.add("frm_");
    //to dissapear other elements
    document.getElementById("deposite").classList.add("u_");
    document.getElementById("deposite").classList.remove("deposite");
    //to remove the widthdraw
    document.getElementById("widthdraw").classList.add("u_");
    document.getElementById("widthdraw").classList.remove("widthdraw");
    //too remove acount list
    document.getElementById("user-detail").classList.add("u_");
    document.getElementById("user-detail").classList.remove("u");

    window.location.href = "#frm-display";
  } else if (option == 2) {
    //
  } else {
    document.getElementById("usr").style.borderColor = "#CAFF33";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let x=empty();
  document.getElementById("alert").classList.remove("frm");
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  pinGenarator();
  // check();
});

//fuction to sumbi the form data ass objects and push tehm uinto an array

function setter() {
  b = JSON.parse(localStorage.getItem("Account"));
  console.log(b);
  if (b == null) {
    b = [];
  }
  //here actually we dont nnee the arrow function not yet
  // for(let x of b){
  //   if(x.email==email){
  //     if(x.pin==NaN || !(Object.hasOwn(x,'pin'))){
  //       //
  //       document.getElementById("set").classList.remove("u_");
  //       document.getElementById("set").classList.add("span");
  //     }
  //   }
  // }
}
//function to generate random number
function random_num() {
  let x = 0;
  for (let i = 0; i <= 10; i++) {
    let y = Math.floor(Math.random() * 10);
    x = x * 10 + y;
  }
  return x;
}
function pinGenarator() {
  //hre we write the codde to generate the pin
  document.getElementById("_pin_").classList.remove("u_");
  document.getElementById("_pin_").classList.add("pin");
  //to remove deposite
  document.getElementById("deposite").classList.add("u_");
  document.getElementById("deposite").classList.remove("deposite");
  //to remove the widthdraw
  document.getElementById("widthdraw").classList.add("u_");
  document.getElementById("widthdraw").classList.remove("widthdraw");
  //toremove form
  document.getElementById("frm-display").classList.add("frm");
  document.getElementById("frm-display").classList.remove("frm_");
  document.getElementById("confirm").addEventListener("click", () => {
    mpin = parseInt(document.getElementById("mpin").value);
    console.log(mpin);
    formObject.pin = mpin;
    console.log(formObject);
    let z = random_num();
    formObject.id = z;
    formObject.minBalance = initial;
    b.push(formObject);
    let y = JSON.stringify(b);
    localStorage.setItem("Account", y);
  });
}

//check function

//to see the account details
document.getElementById("user-data").addEventListener("click", display);
document.getElementById("user-data1").addEventListener("click", display1);
document.getElementById("user-data2").addEventListener("click", display2);
document.getElementById("user-data3").addEventListener("click", display3);

//display function defenition
function display() {
  // console.log("display");
  // window.location.reload();
  //to remove BALANCE
  document.getElementById("balance").classList.add("u_");
  document.getElementById("balance").classList.remove("balance");

  document.getElementById("user-detail").classList.remove("u_");
  document.getElementById("user-detail").classList.add("u");
  //to remove the depoite
  document.getElementById("deposite").classList.add("u_");
  document.getElementById("deposite").classList.remove("deposite");
  //to remove the widthdraw
  document.getElementById("widthdraw").classList.add("u_");
  document.getElementById("widthdraw").classList.remove("widthdraw");
  //toremove form
  document.getElementById("frm-display").classList.add("frm");
  document.getElementById("frm-display").classList.remove("frm_");
  //to remove password genarator
  document.getElementById("_pin_").classList.add("u_");
  document.getElementById("_pin_").classList.remove("pin");
}
//second function to display elements
function display1() {
  document.getElementById("balance").classList.add("u_");
  document.getElementById("balance").classList.remove("balance");

  document.getElementById("deposite").classList.remove("u_");
  document.getElementById("deposite").classList.add("deposite");
  //to remove the widthdraw
  document.getElementById("widthdraw").classList.add("u_");
  document.getElementById("widthdraw").classList.remove("widthdraw");
  //to reove the account details
  document.getElementById("user-detail").classList.add("u_");
  document.getElementById("user-detail").classList.remove("u");
  //toremove form
  document.getElementById("frm-display").classList.add("frm");
  document.getElementById("frm-display").classList.remove("frm_");
  //to remove password genarator
  document.getElementById("_pin_").classList.add("u_");
  document.getElementById("_pin_").classList.remove("pin");
}
function display2() {
  document.getElementById("balance").classList.add("u_");
  document.getElementById("balance").classList.remove("balance");

  document.getElementById("widthdraw").classList.remove("u_");
  document.getElementById("widthdraw").classList.add("widthdraw");
  //to remove deposite
  document.getElementById("deposite").classList.add("u_");
  document.getElementById("deposite").classList.remove("deposite");
  //to remove account details
  document.getElementById("user-detail").classList.add("u_");
  document.getElementById("user-detail").classList.remove("u");
  //toremove form
  document.getElementById("frm-display").classList.add("frm");
  document.getElementById("frm-display").classList.remove("frm_");
  //to remove password genarator
  document.getElementById("_pin_").classList.add("u_");
  document.getElementById("_pin_").classList.remove("pin");
}
function display3() {
  document.getElementById("balance").classList.remove("u_");
  document.getElementById("balance").classList.add("balance");

  //to remove deposite
  document.getElementById("widthdraw").classList.add("u_");
  document.getElementById("widthdraw").classList.remove("widthdraw");
  //to remove deposite
  document.getElementById("deposite").classList.add("u_");
  document.getElementById("deposite").classList.remove("deposite");
  //to remove account details
  document.getElementById("user-detail").classList.add("u_");
  document.getElementById("user-detail").classList.remove("u");
  //toremove form
  document.getElementById("frm-display").classList.add("frm");
  document.getElementById("frm-display").classList.remove("frm_");
  //to remove password genarator
  document.getElementById("_pin_").classList.add("u_");
  document.getElementById("_pin_").classList.remove("pin");
  document.getElementById("b-data").classList.add("u_");
  document.getElementById("b-data").classList.remove("pin");
}

function deposite() {
  //we have to add the entered amount into the current balance

  let x = document.getElementById("code").value;
  let z1 = document.getElementById("pin#").value;

  for (z of b) {
    if (x == z.id && z.pin == z1) {
      let temp = parseInt(z.minBalance);
      let value = parseInt(document.getElementById("rupees").value);
      z.minBalance = temp + value;
      console.log(z);
    }
  }
  let y = JSON.stringify(b);
  localStorage.setItem("Account", y);
}
function widthdraw() {
  //here we right the code to widthdraw the elements
  let z1 = document.getElementById("pin").value;
  let x = document.getElementById("code_").value;
  for (z of b) {
    if (x == z.id && z.pin == z1) {
      let temp = parseInt(z.minBalance);
      let value = parseInt(document.getElementById("dollar").value);
      let diff = temp - value;
      if (diff == 0) {
        alert("acount is empty");
        z.minBalance = 0;
      } else if (diff < 0) {
        document.getElementById("insuf").classList.remove("u_");
        document.getElementById("insuf").classList.add("span_");
      } else if (diff > 0) {
        z.minBalance = diff;
      }
      console.log(z);
    }
  }
  let y = JSON.stringify(b);
  localStorage.setItem("Account", y);
}
function encription() {
  let x = document.getElementById("bid").value;
  let z1 = document.getElementById("bpin").value;
  console.log(x);
  console.log(z1);
  let flag = 0;
  for (z of b) {
    if (x == z.id && z.pin == z1) {
      document.getElementById("b-data").innerHTML = z.minBalance;
      document.getElementById("b-data").classList.remove("u_");
      document.getElementById("b-data").classList.add("span_");
      document.getElementById("b-data").style.Color = "green";
      flag = 1;
    }
  }
  if (flag == 0) {
    alert("the account is not found");
  }
}
//trnasaction
function trnasfer() {
  // alert("hi");
  let x = document.getElementById("tid").value;
  let z1 = document.getElementById("tip").value;
  let w = document.getElementById("t_id").value;
  let y = parseInt(document.getElementById("trn").value);
  let c1 = 0;
  let c2 = 0;

  //
  let sender = b.find((o) => o.id == x && o.pin == z1);
  let reciver = b.find((o) => o.id == w);
  console.log(sender);
  console.log(reciver);
  let prev1 = sender.minBalance;
  let prev2 = reciver.minBalance;

  if (prev1 - y >= 0) {
    sender.minBalance -= y;
    reciver.minBalance += y;

    const trnasaction = (obj, a, b) => {
      if (obj < a) {
        return { transaction: b, type: "sender" };
      } else {
        return { transaction: b, type: "reciver" };
      }
    };
    sender.Log = [];
    reciver.Log = [];
    sender.Log.push(trnasaction(sender.minBalance, prev1, y));
    reciver.Log.push(trnasaction(reciver.minBalance, prev2, y));
    let y1 = JSON.stringify(b);
    localStorage.setItem("Account", y1);
  } else {
    alert("unsufficient balance");
  }
}
function discription() {
  let x = document.getElementById("aid").value;
  let z1 = document.getElementById("apin").value;
  console.log(x);
  console.log(z1);
  let flag = 0;
  document.getElementById("aid").style.display = "none";
  document.getElementById("apin").style.display = "none";
  document.getElementById("abutton").style.display = "none";
  for (z of b) {
    if (x == z.id && z.pin == z1) {
      for (let y in z) {
        if (y == "Log") {
          for (let x of z[y]) {
            for (w in x) {
              // let a=JSON.stringify(w);
              document.getElementById("data").innerHTML +=
                y + ":" + w + ":" + x[w] + "<br>";
            }
          }
          continue;
        } else if (y == "pin") {
          document.getElementById("data").innerHTML +=
            y + ":" + "  " + "##########" + "<br>";
          continue;
        }
        document.getElementById("data").innerHTML +=
          y + ":" + "  " + z[y] + "<br>";
      }
      flag = 1;
    }
  }
  if (flag == 0) {
    alert("the account is not found");
  }
}
