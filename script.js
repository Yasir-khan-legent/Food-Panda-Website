// user sign up id call
var youname = document.getElementById("spanname");
var username = document.getElementById("username");
var useremail = document.getElementById("useremail");
var userpassword = document.getElementById("userpassword");
var usercard = document.getElementById("usercard");

// login id call

var useremaillogin = document.getElementById("luseremail");
var userpasswordlogin = document.getElementById("luserpassword");
// add to cart id call
var count = document.getElementById("count");
var cart = document.getElementById("cart");
var addplus = 0;

// admin sign up id call

var adminname = document.getElementById("adminname");
var adminemail = document.getElementById("adminemail");
var adminpassword = document.getElementById("adminpassword");
var restname = document.getElementById("restaurantName");
var resnamespan = document.getElementById("resname");
var hi = document.getElementById("adminhi");

// admin login id call
var aloginemail = document.getElementById("adminloginemail");
var aloginpassword = document.getElementById("adminloginpassword");
// admin home id call inputs
var inpres = document.getElementById("inpresname");
var inpitem = document.getElementById("inpitem");
var inprice = document.getElementById("inpprice");
var card = document.getElementById("cardmain");
var imageurl = document.getElementById("img");
var inpemail = document.getElementById("inpemail");

var arry2 = JSON.parse(localStorage.getItem("admininfo")) || [];
var arry = JSON.parse(localStorage.getItem("Userinfo")) || [];
var arry3 = JSON.parse(localStorage.getItem("card")) || [];

document.addEventListener("DOMContentLoaded", function () {
  let arry3 = JSON.parse(localStorage.getItem("card")) || [];
  let currentAdmin = localStorage.getItem("currentAdmin");
  console.log(currentAdmin);
  let usercard = document.getElementById("usercard");
  let card = document.getElementById("cardmain");

 // user
  if (usercard) {
    for (let i = 0; i < arry3.length; i++) {
      usercard.innerHTML += `
        <div class="cards">
          <div class="foodimg">
            <img src="${arry3[i].imgsrc}">
          </div>
          <div class="desc">
            <h1 class="restname">${arry3[i].resturant}</h1>
            <li><span class="fodname">${arry3[i].item}</span></li>
            <li><span class="rate">Rs: <span class="rs">${arry3[i].price}</span></span></li>
            <p class="para">Freshly prepared and packed with flavor, this dish is a customer favorite! Perfect for quick lunches or cozy dinners at home. Delivered hot and ready — just the way you like it. One bite, and you’ll be back for more!</p>
            <div class="btnmain">
            <button onclick="addtocart(${i})" class="add">Add To Cart</button>
            </div>
          </div>
        </div>
      `;
    }
  }

  // admin
  if (card) {
    for (let i = 0; i < arry3.length; i++) {
      if (arry3[i].inpemail === currentAdmin) {
        card.innerHTML += `
          <div class="cards">
            <div class="foodimg">
              <img src="${arry3[i].imgsrc}">
            </div>
            <div class="desc">
              <h1 class="restname">${arry3[i].resturant}</h1>
              <li><span class="fodname">${arry3[i].item}</span></li>
              <li><span class="rate">Rs: <span class="rs">${arry3[i].price}</span></span></li>
              <p class="para">Freshly prepared and packed with flavor, this dish is a customer favorite! Perfect for quick lunches or cozy dinners at home. Delivered hot and ready — just the way you like it. One bite, and you’ll be back for more!</p>
              <div class="btnmain">
               <button onclick="deleteAdminItem(${i})" class="udelete">Delete</button></div>
              </div>
            </div>
          </div>
        `;
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < arry2.length; i++) {
    var resnamespan = document.getElementById("resname");
    var hi = document.getElementById("adminhi");

    if (resnamespan && hi) {
      for (var key in arry2[i]) {
        var sname2 = arry2[i]["resturant"];
        var adminhiname = arry2[i]["name"];
        resnamespan.innerText = sname2;
        hi.innerText = adminhiname;
      }
    }
  }

  for (var i = 0; i < arry.length; i++) {
    var youname = document.getElementById("spanname");
    if (youname) {
      for (var key in arry[i]) {
        var sname = arry[i]["name"];
        youname.innerText = sname;
      }
    }
  }
});

function usersignup() {
  location.href = "./sign-up.html";
}

function loginbtn() {
  location.href = "./login.html";
}

function mainlogin() {
  // Get the inputs here inside the function
  var useremaillogin = document.getElementById("luseremail");
  var userpasswordlogin = document.getElementById("luserpassword");

  var getdata = JSON.parse(localStorage.getItem("Userinfo")) || [];
  let found = false;
  if (useremaillogin.value === "" && userpasswordlogin.value === "") {
    return Swal.fire({
      icon: "error",
      title: "Fill The Input",
      text: "Something went wrong!",
      footer: "",
    });
  }

  for (let i = 0; i < getdata.length; i++) {
    var email = getdata[i].email;
    var password = getdata[i].password;

    if (useremaillogin.value == email && userpasswordlogin.value == password) {
      found = true;
      break;
    }
  }

  if (found) {
    location.href = "./user.html";
    youname.innerText = name;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login Info Incorrect",
    });
  }
}

function mainsignup() {
  if (
    username.value === "" ||
    useremail.value === "" ||
    userpassword.value === ""
  ) {
    return Swal.fire({
      icon: "error",
      title: "Fill The Input",
      text: "Something went wrong!",
      footer: "",
    });
  }

  var data = {
    name: username.value,
    email: useremail.value,
    password: userpassword.value,
  };

  arry.push(data);
  localStorage.setItem("Userinfo", JSON.stringify(arry));
  location.href = "./user.html";
}

function adminsignuppage() {
  location.href = "./adminsign.html";
}

function adminsignup() {
  if (
    adminname.value === "" ||
    adminemail.value === "" ||
    adminpassword.value === "" ||
    restname.valuec === ""
  ) {
    return Swal.fire({
      icon: "error",
      title: "Fill The Input",
      text: "Something went wrong!",
      footer: "",
    });
  }

  var data2 = {
    name: adminname.value,
    email: adminemail.value,
    password: adminpassword.value,
    resturant: restname.value,
  };

  arry2.push(data2);
  localStorage.setItem("admininfo", JSON.stringify(arry2));
  localStorage.setItem("currentAdmin", adminemail.value);
  location.href = "./adminhome.html";
}

function adminlogin() {
  var getdata = JSON.parse(localStorage.getItem("admininfo")) || [];
  let found = false;
  if (aloginemail.value === "" && aloginpassword.value === "") {
    return Swal.fire({
      icon: "error",
      title: "Fill The Input",
      text: "Something went wrong!",
      footer: "",
    });
  }

  for (let i = 0; i < getdata.length; i++) {
    var email = getdata[i].email;
    var password = getdata[i].password;

    if (aloginemail.value == email && aloginpassword.value == password) {
      found = true;
      break;
    }
  }

  if (found) {
    location.href = "./adminhome.html";
    youname.innerText = name;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login Info Incorrect",
    });
  }
}
function logoutadmin() {
  location.href = "./home.html";
}

function additemss() {
  if(inpitem.value == "" || inpres.value == ""|| inprice.value == "" || imageurl.value == ""){
    return   Swal.fire({
      icon: "error",
      title: "Fill The Input",
      text: "Something went wrong!",
      footer: "",
    });
  }
  Swal.fire({
  title: "Item added Successfully",
  icon: "success",
  draggable: true
});
  let currentAdmin = localStorage.getItem("currentAdmin");

  var data3 = {
    item: inpitem.value,
    resturant: inpres.value,
    price: inprice.value,
    imgsrc: imageurl.value,
    inpemail: currentAdmin,
  };
  arry3.push(data3);
  localStorage.setItem("card", JSON.stringify(arry3));

  card.innerHTML += `
        <div class="cards">
<div class="foodimg"><img src="${imageurl.value}" ></div>
<div class="desc">
    <h1 class="restname">${inpres.value}</h1>
<li><span class="fodname">${inpitem.value}</span></li>
<li><span class="rate">Rs: <span class="rs">${inprice.value}</span></span></li>
<p class="para">Freshly prepared and packed with flavor, this dish is a customer favorite! Perfect for quick lunches or cozy dinners at home. Delivered hot and ready — just the way you like it. One bite, and you’ll be back for more!</p>
<div class="btnmain"><button  class="udelete">Delete</button></div>
</div>
    `;
  inpitem.value = "";
  inpres.value = "";
  inpres.value = "";
  imageurl.value = "";
}

function edit() {
  inpitem.value = "";
  inpres.value = "";
  inpres.value = "";
  imageurl.value = "";
}

function serach() {
  var serach = document.getElementById("serachitem");
  console.log("serach");
}

function serach() {
  // Search input value ko get karo aur lowercase mein convert karo
  var searchValue = document.getElementById("serachitem").value.toLowerCase();

  // Sabhi cards ko lo
  var cards = document.querySelectorAll(".cards");

  // Har card ke andar se food item aur restaurant name nikaalo
  cards.forEach(function (card) {
    var itemName = card.querySelector(".fodname").textContent.toLowerCase();
    var restName = card.querySelector(".restname").textContent.toLowerCase();

    // Agar search text match karta hai to card ko dikhayein
    if (itemName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Agar input khali ho jaye to sab card dobara dikhao
  if (searchValue === "") {
    cards.forEach(function (card) {
      card.style.display = "block";
    });
  }
}
function cartbtn() {
  location.href = "./user.html";
}

function addtocart(index) {
  Swal.fire({
  title: "Add To Cart",
  icon: "success",
  draggable: true
});
  let arry3 = JSON.parse(localStorage.getItem("card")) || [];
  console.log("All Cards:", arry3);
  console.log("Selected Index:", index);
  console.log("Selected Item:", arry3[index]);

  let cart = JSON.parse(localStorage.getItem("cartitem")) || [];
  cart.push(arry3[index]);
  localStorage.setItem("cartitem", JSON.stringify(cart));
  console.log("Updated Cart:", cart);

  addplus++;
  count.innerText = addplus;
}

function addcart() {
  location.href = "./cart.html";
}

document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartitem")) || [];
  var cart = document.getElementById("cart");

  if (cart) {
    for (let i = 0; i < cartItems.length; i++) {
      cart.innerHTML += `
        <div class="cards">
          <div class="foodimg">
            <img src="${cartItems[i].imgsrc}">
          </div>
          <div class="desc">
            <h1 class="restname">${cartItems[i].resturant}</h1>
            <li><span class="fodname">${cartItems[i].item}</span></li>
            <li><span class="rate">Rs: <span class="rs">${cartItems[i].price}</span></span></li>
            <p class="para">Freshly prepared and packed with flavor, this dish is a customer favorite! Perfect for quick lunches or cozy dinners at home. Delivered hot and ready — just the way you like it. One bite, and you’ll be back for more!</p>
            <div class="btnmain">
          <button onclick="deletee(${i})"  class="udelete">Delete</button></div>
            </div>
          </div>
        </div>
      `;
    }
  }
});

function deletee(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartitem")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartitem", JSON.stringify(cartItems));
  location.reload();
}
function deleteAdminItem(index) {
  let arry3 = JSON.parse(localStorage.getItem("card")) || [];
  arry3.splice(index, 1);
  localStorage.setItem("card", JSON.stringify(arry3));
  location.reload();
}
