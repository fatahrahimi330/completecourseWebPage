'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


function fakeUsersDatabase() {
  var fakeUsersDatabase = [
      { email: 'ff@gmail.com', password: '0000' }
  ];
  return fakeUsersDatabase;
}

function login() {
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  var isValidUser = fakeUsersDatabase().some(function(user) {
      return user.email === email && user.password === password;
  });

  if (isValidUser) {
      window.location.href = "https://www.w3schools.com/";
  } else {
      alert('Incorrect email or password. Please try again.');
  }
}


function register() {
  var name = document.querySelector('input[name="name"]').value;
  var lastName = document.querySelector('input[name="lastName"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;
  var confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

  if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
  }

  // Assuming you have a function fakeUsersDatabase() that returns an array of users
  var users = fakeUsersDatabase();

  // Check if the email is already registered
  var isEmailRegistered = users.some(function(user) {
      return user.email === email;
  });

  if (isEmailRegistered) {
      alert("Email is already registered. Please use a different email.");
      return;
  }
  else{
  // Add the new user to the fake user database
  users.push({email: email, password: password });
    
  alert("Registration successful!");

  }
}



document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const currentTheme = localStorage.getItem("theme");

  // Apply the saved theme or default to light mode
  if (currentTheme) {
    body.classList.add(currentTheme);
  } else {
    body.classList.add("light-mode");
  }

  // Function to play sound based on theme
  function playClickSound(theme) {
    var soundFile = theme === "dark-mode" ? './assets/sounds/darkMood.mp3' : './assets/sounds/lightMood.mp3';
    var clickSound = new Audio(soundFile);
    clickSound.play();
  }

  // Event listener for theme toggle button
  themeToggle.addEventListener("click", function () {
    // Toggle between light and dark modes
    if (body.classList.contains("light-mode")) {
      body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark-mode");
      playClickSound("dark-mode");
    } else {
      body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light-mode");
      playClickSound("light-mode");
    }
  });

  // Debug: Output the current theme to the console
  console.log("Current Theme:", currentTheme);
});


