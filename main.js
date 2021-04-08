/* Burger Menu */

const navSlide = () =>{
    const burger = document.querySelector('.fa-bars')
    const nav = document.querySelector('.nav_links')

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav_active')
        console.log(nav)

        burger.classList.toggle('fa-bars-active')
    })
}

navSlide();




const slides = document.querySelector(".slider").children
const indicator = document.querySelector(".indicator")
let index = 0



// Circle indicators 
function circleIndicator(){
    for(let i=0; i<slides.length; i++){
        const div = document.createElement("div")
        div.setAttribute("onclick","indicateSlide(this)")
        div.id = i;
        if(i===0){
            div.className = "active"
        }
        indicator.appendChild(div)
    }
}
circleIndicator()

// Indicate the slide
function indicateSlide(element){
    index = element.id
    changeSlide()
    updateCircleIndicator()
    resetTimer()
}

// Add/Remove the active class to change the color of the dot
function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove("active")
    }
    indicator.children[index].classList.add("active")
}




//Next Slide 
function nextSlide(){
    if(index === slides.length - 1){
        index = 0;
    }
    else{
        index++
    }
    changeSlide()
}

//Add/Remove the active class to show a new slide 
function changeSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active")
}

// Autoplay

function autoPlay(){
    nextSlide()
    updateCircleIndicator()
}
let timer = setInterval(autoPlay,4000)

// Reset timer
function resetTimer(){
    clearInterval(timer)
    timer = setInterval(autoPlay,4000)
}


/* Filterable Gallery */

const categoryTitle = document.querySelectorAll('.category_title')
const allCategoryPosts = document.querySelectorAll('.all')

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click',
    filterPosts.bind(this, categoryTitle[i]))
}

function filterPosts(item){
    changeActivePosition(item)
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains
            (item.attributes.id.value)){
                allCategoryPosts[i].style.display = 'block'
            } else{
                allCategoryPosts[i].style.display = 'none'
            }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active2')
    }
    activeItem.classList.add('active2')
}

/* Testimonials */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active3", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active3";
}

/* Sticky Navbar */

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar")

// Get the offset position of the navbar
let sticky = navbar.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed")
  }
}

const nav = document.querySelector('.active1')
console.log(nav)

