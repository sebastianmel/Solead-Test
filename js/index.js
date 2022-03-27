var orderNumber = 0;

function incrementation() {
  orderNumber++;
  document.getElementById("orderNumber").textContent = orderNumber;
}
function decrementation() {
  if(orderNumber>1){
    orderNumber--;
    
  }else{
    orderNumber=0
  }
  document.getElementById("orderNumber").textContent = orderNumber;
}
document.getElementById("more").addEventListener("click", incrementation);
document.getElementById("less").addEventListener("click", decrementation);



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// ------------------------------------------------------
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// -----------------------------Cart------------------------------------
var notif = document.getElementById("notifications")
var emptyCartAspect = document.getElementById("inCart")
var img = document.getElementById("littleImg")
var delButton = document.getElementById("del")

delButton.classList.add('hidden')
emptyCartAspect.classList.add('center')
notif.classList.add('hidden')
document.getElementById("articleName").innerHTML="Cart is empty"

img.classList.add("hidden")
function addCart(){
  
  document.getElementById("articleName").innerHTML="Fall Limited Edition Sneakers";
  document.getElementById("howMany").innerHTML="$125 X "+orderNumber
  document.getElementById("toPaid").innerHTML="$"+ 125*orderNumber
  console.log("Sneakers $125 X "+orderNumber);

  if(orderNumber>0){
    delButton.classList.remove('hidden')
    img.classList.remove("hidden")
    emptyCartAspect.classList.remove("center")
    document.getElementById("notifications").innerHTML=orderNumber
    
    notif.classList.remove('hidden')

  }else{
    delButton.classList.add('hidden')
    img.classList.add("hidden")
    emptyCartAspect.classList.add('center')
    notif.classList.add('hidden')
    document.getElementById("articleName").innerHTML="Cart is empty"
    document.getElementById("howMany").innerHTML=" "
    document.getElementById("toPaid").innerHTML=""
  }

}

// ---------------------Delete Orders

function delet() {
  delButton.classList.add('hidden')
  img.classList.add("hidden")
  emptyCartAspect.classList.add('center')
  notif.classList.add('hidden')
  document.getElementById("articleName").innerHTML="Cart is empty"
  document.getElementById("howMany").innerHTML=" "
  document.getElementById("toPaid").innerHTML=""
}

// ---------------------------Open and Close Cart----------------------------------
var openCart = document.getElementById("cart")

openCart.classList.add('hidden')
function openClose(){
  openCart.classList.toggle('hidden')
}