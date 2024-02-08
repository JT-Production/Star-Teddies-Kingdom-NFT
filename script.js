const carousel = document.querySelector(".carousel") ,
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".container i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, postionDiff;



const showHideIcons = () => {
    //sowing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 10; // getting first img width & adding 12 margin value
       // console.log(icon);
       //if clicked icon is left, reduce with value from the carousel scroll left else add to it
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);// calling showhideicons after 60ms
    });
});

const autoSlide = () => {

    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    postionDiff = Math.abs(postionDiff) // making position value to positive
    let firstImgWidth =firstImg.clientWidth + 10;
    // getting diffrence value that needs to add or reduce left to take middle img center
    let valDiff = firstImgWidth - postionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += postionDiff > firstImgWidth / 3 ? valDiff : -postionDiff;
    } else{ // if user is scrolling to the left
        carousel.scrollLeft -= postionDiff > firstImgWidth / 3 ? valDiff : -postionDiff;
    }
    console.log(postionDiff);
}

const dragStart = (e) => {
    //updating global variable value on mouse down
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
   
}

const dragging = (e) => {
  //  console.log(e.pageX); 320
  //scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
 postionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - postionDiff;

  showHideIcons();

}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchleave", dragStop);





var spinnerwrapper = document.querySelector('.spinner-wrapper');


// setTimeout (() => {
//     spinnerwrapper.style.opacity = '0';

// },1000);
window.addEventListener('load', () =>{
    spinnerwrapper.style.opacity = '0';

    setTimeout(() =>{
        spinnerwrapper.style.display = 'none';
    },500)
})


const animate1 = document.querySelector(".animate");





window.addEventListener("scroll", () => {
 if (window.pageYOffset > 370){
   animate1.classList.add("active");
 }else{
   animate1.classList.remove("active");
 }
});


const animate2 = document.querySelector(".grid-container");

window.addEventListener("scroll", () => {
 if (window.pageYOffset > 1000){
   animate2.classList.add("active2");
  console.log(window.pageYOffset);
 }else{
   animate2.classList.remove("active2");
   console.log(window.pageYOffset);
 }
});
