const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const KOOZYKOOZ = document.querySelector("#KOOZYKOOZ");
const medias = document.querySelectorAll(".bulle");
const l1 = document.querySelector(".l1");
const l2 = document.querySelectorAll(".l2");
const ramp = document.querySelectorAll("#ramp");
const fingerboardclub = document.querySelectorAll("#fingerboardclub");
const fingerskate = document.querySelectorAll("#fingerboard");
const fatrampe = document.querySelectorAll("#fatramp");
const fingerboard3 = document.querySelectorAll("#fingerboard3");
const koozylogo = document.querySelectorAll("#koozylogo2");
const stairs = document.querySelectorAll("#stairs");
const scroller = document.querySelectorAll(".scroller");
const fingerboardsolo = document.querySelectorAll("#fingerboardsolo");

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true, delay: 0.2 });

  TL.staggerFrom(
    titreSpans,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  )

    .from(KOOZYKOOZ, 1, { y: -200, ease: "bounce.out" }, "<")

    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "<")
    .from(l1, 2, { width: 0, ease: "power2.out" }, "<")
    .from(l2, 3, { width: 0, ease: "power2.out" }, "<")
    .from(ramp, 2, { opacity: 0, ease: "power3.out" }, "<")
    .from(fatrampe, 2, { opacity: 0, ease: "power3.out" }, "<")
    .from(stairs, 2, { opacity: 0, ease: "power3.out" }, "<")
    .from(fingerskate, { left: -350, duration: 3 }, "<")
    .from(fingerboardsolo, { opacity: 0, ease: "power2.out" }, "<")

    .staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.3, "1")
    .fromTo(
      fingerboard3,
      { opacity: 0 },
      { opacity: 100, x: -350, duration: 2, delay: 1 },
      "<"
    )
    

    .staggerFrom(koozylogo, 5, { opacity: 0, ease: "power2.out" }, 0.3, "<");

  TL.play();
});

let compteur = 0; 
let timer, elements, slides, slideWidth, speed, transition;

window.onload = () => {
  
  const diapo = document.querySelector(".diapo");
  
  speed = diapo.dataset.speed;
  transition = diapo.dataset.transition;

  elements = document.querySelector(".elements");

  let firstImage = elements.firstElementChild.cloneNode(true);

  elements.appendChild(firstImage);

  slides = Array.from(elements.children);

  slideWidth = diapo.getBoundingClientRect().width;

  timer = setInterval(slideNext, 5000);
};


function slideNext() {
  
  compteur++;
  elements.style.transition = transition + "ms linear";

  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;

 
  setTimeout(function () {
    if (compteur >= slides.length - 1) {
      compteur = 0;
      elements.style.transition = "unset";
      elements.style.transform = "translateX(0)";
    }
  }, transition);
}


function slidePrev() {
 
  compteur--;
  elements.style.transition = transition + "ms linear";

  if (compteur < 0) {
    compteur = slides.length - 1;
    let decal = -slideWidth * compteur;
    elements.style.transition = "unset";
    elements.style.transform = `translateX(${decal}px)`;
    setTimeout(slidePrev, 1);
  }

  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

function stopTimer() {
  clearInterval(timer);
}

function startTimer() {
  timer = setInterval(slideNext, speed);
}

gsap.to(scroller, {
  scrollTrigger: ".presentation",
  opacity: 0,
});

gsap.to(fingerboardsolo, {
  scrollTrigger: "#logocible",
  left: 40,
  duration: 4,
  delay: 1,
});




const footer = document.querySelectorAll(".footer");

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to(footer, {
  scrollTrigger: ".presentation",
  opacity: 100,
});
