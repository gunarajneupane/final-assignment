// Menu Bar

function menuOpen() {
  document.getElementById("menubar").style.width = "200px";
}

function menuClose() {
  document.getElementById("menubar").style.width =  "0px";
}


// Goto Top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("gototop").style.display = "block";
  } else {
    document.getElementById("gototop").style.display = "none";
  }
}