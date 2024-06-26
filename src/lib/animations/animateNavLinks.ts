import gsap from 'gsap';

export const animateNavLinks = () => {
  const navMenu = document.getElementById('navMenu') as HTMLElement;
  // Select all navigation items
  const navLinks = navMenu.querySelectorAll('li') as NodeListOf<HTMLLIElement>;

  // Create a timeline for the animation with initial settings
  const timeline = gsap.timeline({ paused: true });

  // Define animation properties for the nav links
  timeline.fromTo(
    navLinks,
    {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: 'elastic(1, 0.5)',
      duration: 0.5,
      delay: 1.2,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: 'elastic(1, 0.5)',
      duration: 0.5,
      delay: 1.2,
      onStart: () => {
        navMenu.style.display = 'flex';
      },
      onReverseComplete: () => {
        navMenu.style.display = 'none';
      },
    },
    '-=0.9',
  );

  // Reverse the timeline
  timeline.reverse();

  // Return the timeline
  return timeline;
};
