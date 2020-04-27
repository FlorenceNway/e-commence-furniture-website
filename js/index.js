const start = () => {
    const home = document.getElementById('Home')
    home.className += " active";
    home.style.display='block'
}
start()

const openTab = (evt, tabName) => {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const closeNav = () => {
    const container = document.querySelector(".container");
    container.classList.remove('overlay')
    const closebtn = document.querySelector(".right-menu a");
    closebtn.classList.remove('closebtn')
    closebtn.innerText = ''
    const mobile_leftmenu = document.querySelector('.mobile-left-menu')
    mobile_leftmenu.style.display = 'none'

    const row2 = document.querySelector(".grid-item2");
    const row3 = document.querySelector(".grid-item3");
    const row4 = document.querySelector(".grid-item4");
    row2.style.display = 'flex'
    row3.style.display = 'flex'
    row4.style.display = 'flex'
}  

const clickMenuBarsIcon = () => {
    const wholePage = document.querySelector(".container");
      wholePage.classList.add("overlay");
    const closebtn = document.querySelector(".right-menu a");
        closebtn.innerText = 'X'
        closebtn.className = "closebtn"
    const mobile_leftmenu = document.querySelector('.mobile-left-menu')
        mobile_leftmenu.style.display = 'block'
  
    const row2 = document.querySelector(".grid-item2");
    const row3 = document.querySelector(".grid-item3");
    const row4 = document.querySelector(".grid-item4");
    row2.style.display = 'none'
    row3.style.display = 'none'
    row4.style.display = 'none'
  } 

//   Carousel
const carousel = document.querySelector(".carousel");
const slideQuantity = document.querySelectorAll(".carousel li").length;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next")
let counter = 0;

const handleClick = (direction) => {
    counter = direction === "-" ? counter + 1: counter + slideQuantity - 1;

    const localCounter = Math.abs(counter % slideQuantity);

    const perc = `${localCounter}00%`;
    carousel.style.transform = `translate(-${perc}, 0)`;
    
}

prevBtn.addEventListener("click",() => handleClick('+'))
nextBtn.addEventListener("click",() => handleClick('-'))
  
// ------- Filter side ----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ----Slider--------

const sliderLeft = document.querySelector("#slider0to500");
const sliderRight = document.querySelector("#slider51to1000");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
 
function fromSliderLeft(){
    from.innerText =`£${sliderLeft.value}`;
}
function toSliderRight(){
    to.innerText =`£${sliderRight.value}`;
}
sliderLeft.addEventListener("change",fromSliderLeft);
sliderRight.addEventListener("change",toSliderRight);


renderProducts(PRODUCTS)
renderColors(PRODUCTS)
renderCategories(PRODUCTS)