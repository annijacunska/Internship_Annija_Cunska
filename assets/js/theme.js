// Show navigation active item
var btnContainer = document.getElementsByClassName("menu-item-list");
var btns = btnContainer[0].getElementsByClassName("menu-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("js-active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" js-active", "");
    }

    this.className += " js-active";
  });
}

// Show selected language
var lngContainer = document.getElementsByClassName("lng-select");
var lngs = lngContainer[0].getElementsByClassName("lng");

for (var i = 0; i < lngs.length; i++) {
  lngs[i].addEventListener("click", function() {

    var cur = document.getElementsByClassName("js-selected");

    if (cur.length > 0) {
      cur[0].className = cur[0].className.replace(" js-selected", "");
    }

    this.className += " js-selected";
    // this.parentNode.insertBefore(this, lngs[0]);
  });
}

// Mobile navigation overlay open/close
var menu = document.getElementsByClassName("menu-items");
var btnOpen = document.getElementsByClassName("nav-open-btn");
var btnClose = document.getElementsByClassName("nav-close-btn");
var body = document.body;

function openNav() {

  for (var i=0;i<menu.length;i+=1){
    menu[i].style.display = 'block';
  }

  btnClose[0].style.display = 'block';
  btnOpen[0].style.display = 'none';

  body.style.overflow = 'hidden';
}

function closeNav() {
  for (var i=0;i<menu.length;i+=1){
    menu[i].style.display = 'none';
  }
  btnClose[0].style.display = "none";
  btnOpen[0].style.display = 'block';

  body.style.overflow = 'visible';
}

// Scroll to top

mybutton = document.getElementsByClassName("scroll-up")[0];
footer = document.getElementsByClassName("footer")[0];

window.onscroll = function() {scrollFunction()};

var top = mybutton.offsetTop;
var footerTop = footer.offsetTop;
var btnHeight = mybutton.offsetHeight;
var maxy = footerTop - btnHeight;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';

    //Stop before footer function - not working properly

    // if (top > maxy) {
    //   if(!mybutton.classList.contains('js-sticky')) {
    //     mybutton.classList.add('js-sticky');
    //   }
    // } else {
    //   mybutton.classList.remove('js-sticky');
    // }

  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scroll({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}

function playStory(o) {
    var number = o.getElementsByClassName("grid-number")[0].innerHTML;
    console.log(number);
    getVideoSrc(o, number);
    playVideo();
}

function playVideo(){
  var video = document.getElementsByClassName("video-overlay")[0];

  if (video.classList.contains("closed")) {
    video.className = video.className.replace(" closed", " show");
    body.style.overflow = 'hidden';
  } else {
    video.className = video.className.replace(" show", " closed");
    body.style.overflow = 'visible';
  }
}

function getVideoSrc(o, number) {
  var src;
  var vid = document.getElementsByClassName("video")[0];
  var label = document.getElementsByClassName("video-label")[0];

  switch (number) {
    case "1":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F667801507044573%2F&show_text=false&width=560"
      break;
    case "2":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1045591265802805%2F&show_text=false&width=560"
      break;
    case "3":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F246173059854924%2F&show_text=false&width=560"
      break;
    case "4":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2479558679035439%2F&show_text=false&width=560"
      break;
    case "5":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F366661860920420%2F&show_text=false&width=560"
      break;
    case "6":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F523010931805446%2F&show_text=false&width=560"
      break;
    case "7":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1448911495273524%2F&show_text=false&width=560"
      break;
    case "8":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F391119238243150%2F&show_text=false&width=560"
      break;
    case "9":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2498204853778440%2F&show_text=false&width=560"
      break;
    case "10":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2355375954728669%2F&show_text=false&width=560"
      break;
    case "11":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2567116616672068%2F&show_text=false&width=560"
      break;
    case "12":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2644468722446960%2F&show_text=false&width=560"
      break;
    case "13":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1025361531138956%2F&show_text=false&width=560"
      break;
    case "14":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F571571993652253%2F&show_text=false&width=560"
      break;
    case "15":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F760974734366673%2F&show_text=false&width=560"
      break;
    case "16":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2085262408449994%2F&show_text=false&width=560"
      break;
    case "17":
      src = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2368016840121489%2F&show_text=false&width=560"
      break;       
  }

  vid.src = src;
  label.innerHTML = o.getElementsByClassName("grid-name")[0].innerHTML;
}


document.addEventListener("DOMContentLoaded", function(event) { 
  var slider = document.getElementById("light-slider");
  if (slider) {
    slider.lightSlider();
  }  
});

// Button functions

function goToForm() {
  var form = document.getElementsByClassName("form-container")[0];
  form.scrollIntoView({ behavior: 'smooth' });
}

function goToSapnotajiem(){
  location.href='piesakiSapni.html';
}

function goToUznemejiem(){
  location.href='uznemejiem.html';
}

function formSubmit(){
  //submit and validate form

  let name = document.forms["sazinatiesForm"]["flname"];
  let email = document.forms["sazinatiesForm"]["email"];
  let org = document.forms["sazinatiesForm"]["organization"];
  let phone = document.forms["sazinatiesForm"]["phone"];
  let message = document.forms["sazinatiesForm"]["message"];
  let privacyChk = document.forms["sazinatiesForm"]["privacy-chk"];


  if (name.value == "" || email.value == "" || phone.value == "" || message.value == "" || privacyChk.checked == false) {
    alert("Lūdzu aizpildiet visus obligātos laukus!");
    return false;
  }

  if (org) {
    if (org.value == "") {
      alert("Lūdzu aizpildiet visus obligātos laukus!");
      return false;
    }
  }

  if (isNaN(phone.value) || phone.value.length != 8  ) {
    alert("Lūdzu norādiet pareizu tālruņa numuru!");
    phone.focus();
    return false;
  }

  atpos = email.value.indexOf("@");
  dotpos = email.value.lastIndexOf(".");
    
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
      alert("Lūdzu norādiet pareizu e-pasta adresi!")
      email.focus() ;
      return false;
  }

  //show affirmation message
  var submitButton = document.getElementsByClassName("form-unfilled")[0];
  var affMessage = document.getElementsByClassName("form-filled")[0];
  submitButton.style.display = "none"
  affMessage.style.display = "block"
}

