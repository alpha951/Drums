// document.querySelector("button").addEventListener("click", handleClick);

// //

//! Anonymous function
// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });

var drums_count = document.querySelectorAll(".drum").length;
for (var i = 0; i < drums_count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      document.querySelector(".a").classList.add("pressed");
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      document.querySelector(".s").classList.add("pressed");
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      document.querySelector(".d").classList.add("pressed");
      break;

    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      document.querySelector(".j").classList.add("pressed");
      break;

    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      document.querySelector(".k").classList.add("pressed");
      break;

    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      document.querySelector(".l").classList.add("pressed");
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

//objects in JS
// var hk1 = {
//   name: "angela",
//   yoe: 12,
//   workPermit: True,
//   cleaning: ["bathroom", "kitchen", "cars"],
// };

//constructor function
//first letter of function name has to be capatilized
// function BellBoy(name, age, workPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.workPermit = workPermit;
//   this.languages = languages;
// }

// var hk2 = new BellBoy("john", 22, true, [
//   "English",
//   "German",
//   "Irish",
//   "Polish",
// ]);

// this.style.color = "white";
// var source = "sounds/tom-" + (i + 1) + ".mp3";
// console.log(source);
// var audio = new Audio("sounds/crash.mp3");
// audio.play();
// // this.style.color = "#DA0463";
