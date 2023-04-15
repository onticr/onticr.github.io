const imgs = document.querySelectorAll(".container-slides .slide");
console.log(imgs)


var currentIndex = 0;
let time = 3000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
   

  }
  imgs[index].style.display = "block";

};

defClass(1, 0);



const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
 console.log(currentIndex)
  }, time);
 
};

startAutoSlide();