import './style.scss';
import { gsap } from "gsap";

// Create a timeline
/**
 * repeats the timeline infinite times with a repeat delay of 1s. This will repeat back and forth on each repeat
 */
let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to(".box", {
  x: '60vw',
  rotation: 720,
  duration: 3, // how long the animation lasts
  ease: "bounce.out", // Easing is possibly the most important part of motion design.
  stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating, a negative value would do the same but backwards
  repeat: 2, // the number of repeats - this will play 3 times
  yoyo: true // this will repeat back and forth on each repeat. Like a yoyo
}).to(".green", { rotation: -360, duration: 3, ease: "bounce.out" })
  .to(".red", { rotation: 360, duration: 2, ease: "back.inOut" });