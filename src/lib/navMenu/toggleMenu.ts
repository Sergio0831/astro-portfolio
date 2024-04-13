export const toggleMenu = (navBtn: HTMLButtonElement) => {
  // Select the navigation background
  const navBg = document.getElementById('navBg') as HTMLDivElement;
  // Determine if the button is initially pressed
  const isPressed = navBtn.getAttribute('aria-pressed') === 'true';
  // Toggle the 'isPressed' state
  const newState = !isPressed;
  // Update the 'aria-pressed' attribute
  navBtn.setAttribute('aria-pressed', `${newState}`);
  // Update the 'aria-label' attribute
  navBtn.setAttribute('aria-label', newState ? 'Close Navigation' : 'Open Navigation');
  // Update the 'aria-expanded' attribute
  if (navBg) {
    navBg.setAttribute('aria-expanded', `${newState}`);
  }

  // Toggle body scroll
  document.body.style.overflow = newState ? 'hidden' : 'auto';
};
