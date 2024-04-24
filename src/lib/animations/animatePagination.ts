import type Swiper from 'swiper';
import gsap from 'gsap';
import { Power2 } from 'gsap';

export const animatePagination = (slider: Swiper, currentSlide: HTMLSpanElement) => {
  // Find the index of the current slide
  const slideIndex = slider.realIndex;
  // Animate the custom pagination current number to a default state
  gsap.to(currentSlide, {
    duration: 0.2,
    force3D: true,
    y: -10,
    opacity: 0,
    ease: Power2.easeOut,
    // When the animation completes, update the custom pagination current number
    onComplete: () => {
      gsap.to(currentSlide, {
        duration: 0.1,
        force3D: true,
        y: 10,
      });
      // Set the inner HTML of the custom pagination current number to the slide nuimber
      currentSlide.innerHTML = `0${slideIndex + 1}`;
    },
  });
  // Animate the custom pagination current number to its final state
  gsap.to(currentSlide, {
    duration: 0.2,
    force3D: true,
    y: 0,
    opacity: 1,
    ease: Power2.easeOut,
    delay: 0.3,
  });
};
