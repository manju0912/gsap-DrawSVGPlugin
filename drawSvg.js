import { DrawSVGPlugin} from "./DrawSVGPlugin.js"
function animateArrow () {
  let drawArrow = document.querySelector('[data-path="button-arrow"]');
  let tl = gsap.timeline({ 
    duration: 1, 
    ease: "linear", 
  });
  tl.fromTo(drawArrow, { 
    drawSVG: "0% 100%",
    stagger: 0.5, 
    duration:2, 
  });
}
animateArrow();


