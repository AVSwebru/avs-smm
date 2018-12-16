(function() {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(max-width: 640px)').matches) {
      let blogSlideshow = document.querySelector('.js-blog-slideshow');
      let blogSlideshowItems = document.querySelector('.js-blog-slideshow-items');

      blogSlideshowItems.classList.add('uk-slideshow-items');
      UIkit.slideshow(blogSlideshow, {
        minHeight: 230
      });
    }
  });
})();
