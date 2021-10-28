let btnOpen = document.getElementById("btnOpen");

btnOpen.onclick = function () {
  document.querySelector(".textHeader ul").classList.toggle("open");
};

// Loader Page
window.onload = setInterval((_) => {
  document.querySelector(".loader-container").classList.add("fade-out");
}, 1800);




let befents = document.querySelector('.befents');
let befChild = document.querySelector('.flex-befents');


let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');

let moveToRight = document.querySelector('.flex-');


window.onscroll = function(){
  // For Changeing The Number Of Section3
  if(window.scrollY >= section2.offsetTop - 120){

    const counters = document.querySelectorAll(".col #counter");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCoun = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCoun, 20);
        } else {
          count.innerText = target;
        }
      };
      updateCoun();
    });
  }

  if (window.scrollY >= befents.offsetTop - 120){
    befChild.classList.add('transformX');
  }

  if (window.scrollY >= section1.offsetTop - 120){
    section1.classList.add('transformX');
  }

  if (window.scrollY >= moveToRight.offsetTop - 120){
    moveToRight.classList.add('transformX');
  }

}

function myFunction(x) {
  if (x.matches) { // If media query matches
    window.onscroll = function(){
      // For Changeing The Number Of Section3
      if(window.scrollY >= section2.offsetTop - 120){
    
        const counters = document.querySelectorAll(".col #counter");
        const speed = 200;
    
        counters.forEach((counter) => {
          const updateCoun = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
    
            const inc = target / speed;
    
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCoun, 20);
            } else {
              count.innerText = target;
            }
          };
          updateCoun();
        });
      }
      if (window.scrollY >= befents.offsetTop - 120){
        befChild.classList.add('transformX');
        console.log('The media query matches');
      }
    
      if (window.scrollY >= section1.offsetTop - 120){
        section1.classList.add('transformX');
        console.log('The media query matches');
      }
    
      if (window.scrollY >= moveToRight.offsetTop - 120){
        moveToRight.classList.add('transformX');
        console.log('The media query matches');
      }
    }
  } else {
    window.onscroll = function(){
      // For Changeing The Number Of Section3
      if(window.scrollY >= section2.offsetTop - 60){
    
        const counters = document.querySelectorAll(".col #counter");
        const speed = 200;
    
        counters.forEach((counter) => {
          const updateCoun = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
    
            const inc = target / speed;
    
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCoun, 20);
            } else {
              count.innerText = target;
            }
          };
          updateCoun();
        });
      }
      if (window.scrollY >= befents.offsetTop - 60){
        befChild.classList.add('transformX');
      }
      if (window.scrollY >= section1.offsetTop - 60){
        section1.classList.add('transformX');
      }
      if (window.scrollY >= moveToRight.offsetTop - 60){
        moveToRight.classList.add('transformX');
      }
    }
  }
}
var x = window.matchMedia("(max-width: 1200)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
