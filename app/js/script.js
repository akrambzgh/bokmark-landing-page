// header
let humb = document.querySelector(".hamburger");
let list = document.querySelector(".main__head");

function openMenuByHumb() {
  humb.addEventListener("click", () => {
    if (list.classList.contains("open")) {
      list.classList.remove("open");
    } else {
      list.classList.add("open");
    }
  });
}
openMenuByHumb();


function closeMenu() {
  list.addEventListener("click", () => {
    list.classList.remove("open");
  });
}
closeMenu();

// features
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("bnt-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// question
let faq = document.getElementsByClassName("question-page");
let i;
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
  
    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

// contact

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector(".btn");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function check() {
  if (email.value.match(regExp)) {
    email.style.borderColor = "lightgreen";
    icon1.style.display = "none";
    error.style.display = "none";
    btn.style.display = "block";
  } else {
    email.style.borderColor = "#fa5757";
    icon1.style.display = "block";
    error.style.display = "block";
  }
  if (email.value == "") {
    email.style.borderColor = "#fa5757";
    icon1.style.display = "none";
    icon2.style.display = "none";
    error.style.display = "none";
  }
}