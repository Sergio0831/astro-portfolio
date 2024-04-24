import { A11y, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const projectsSliderParams: SwiperOptions = {
  modules: [Navigation, Pagination, Keyboard, Scrollbar, A11y],
  direction: 'vertical',
  loop: false,
  speed: 1000,
  slidesPerView: 'auto',
  grabCursor: true,
  // Enable keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // Slider navigation buttons with arrows
  navigation: {
    nextEl: '.next-slide',
    prevEl: '.prev-slide',
    disabledClass: 'slider-btn-disabled',
  },
  // Slider scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // Custom pagination with numbers
  pagination: {
    el: '.total-slides',
    type: 'custom',
    // Render total slides
    renderCustom: function (swiper, current, total) {
      return `0${total}`;
    },
  },
  breakpoints: {
    // From 0px and above set slider direction to horizontal and hide scrollbar
    0: {
      direction: 'horizontal',
      scrollbar: {
        enabled: false,
      },
    },
    // From 1060px and above set slider direction to vertical and show scrollbar
    1060: {
      direction: 'vertical',
      scrollbar: {
        enabled: true,
      },
    },
  },
};
