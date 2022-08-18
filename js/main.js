// Start To Change Navbar Background While Scroll Down
let myNavbarBg = document.querySelector(".navbar");
this.window.onscroll = function () {
  if ((this.window.scrollTo = 10)) {
    console.log("Scroll");
    myNavbarBg.style.backgroundColor = "#ddd";
  }
};
// End To Change Navbar Background While Scroll Down

// Start Scroll Top Button Functionality
let myBtn = document.querySelector(".my-btn");
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};
myBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// End Scroll Top Button Functionality
