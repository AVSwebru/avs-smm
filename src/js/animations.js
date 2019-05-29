import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    //Дизайны
    if (document.querySelector('.js-design')) {
      const designTween = new TimelineMax();

      designTween
        .from('.js-services-title', 0.5, { opacity: 0, x: -50 })
        .from('.js-design-title', 0.5, { opacity: 0, x: -50 })
        .staggerFrom('.js-design-item', 0.5, { opacity: 0, y: 100 }, 0.25);

      const designScene = new ScrollMagic.Scene({
        triggerElement: '.js-design',
        reverse: false,
      })
        .addTo(controller)
        .setTween(designTween);
    }

    //Продвижение
    if (document.querySelector('.js-promotion')) {
      const promotionTween = new TimelineMax();

      promotionTween
        .from('.js-promotion-title', 0.5, { opacity: 0, x: -50 })
        .from('.js-promotion-desc', 0.5, { opacity: 0, x: -50 })
        .staggerFrom('.js-promotion-item', 0.5, { opacity: 0, y: 100 }, 0.25);

      const promotionScene = new ScrollMagic.Scene({
        triggerElement: '.js-promotion',
        reverse: false,
      })
        .addTo(controller)
        .setTween(promotionTween);
    }

    //Акции
    if (document.querySelector('.js-action')) {
      const actionTween = new TimelineMax();

      actionTween
        .from('.js-action-banner', 1, {
          transformOrigin: '50% 0',
          transformStyle: 'preserve-3d',
          ease: Elastic.easeOut.config(1, 0.3),
          rotationX: 270,
        })
        .from('.js-action-title', 0.3, { rotationY: -90 })
        .from('.js-action-link', 0.5, { opacity: 0 });

      const actionScene = new ScrollMagic.Scene({
        triggerElement: '.js-action',
        reverse: false,
      })
        .addTo(controller)
        .setTween(actionTween);
    }

    //Контакты
    if (document.querySelector('.js-contacts')) {
      const contactsTween = new TimelineMax();

      contactsTween
        .from('.js-contacts-title', 0.5, { opacity: 0, x: -50 })
        .staggerFrom('.js-contacts-item', 0.5, { opacity: 0 }, 0.5);

      const contactsScene = new ScrollMagic.Scene({
        triggerElement: '.js-contacts',
        reverse: false,
      })
        .addTo(controller)
        .setTween(contactsTween);
    }

    //Блог
    if (document.querySelector('.js-blog')) {
      const blogTween = new TimelineMax();

      blogTween
        .from('.js-blog-title', 0.5, { opacity: 0, x: -50 })
        .from('.js-blog-desc', 0.5, { opacity: 0, x: -50 })
        .from('.js-blog-link', 0.5, { opacity: 0 })
        .staggerFrom(
          '.js-blog-item',
          0.5,
          { ease: Power1.easeIn, opacity: 0, x: 100 },
          0.25
        )
        .from('.js-blog-left-decor', 0.5, {
          ease: Power3.easeOut,
          transformOrigin: '100% 50%',
          scale: 0,
        })
        .from(
          '.js-blog-right-decor',
          0.5,
          { ease: Power3.easeOut, transformOrigin: '0 50%', scale: 0 },
          '-=0.5'
        )
        .from('.js-blog-arrow-decor', 0.5, { opacity: 0, y: -20 })
        .from('.js-blog-free-link', 0.5, { opacity: 0, scale: 1.5 })
        .to('.js-blog-free-link', 0.5, { scale: 1 });

      const blogScene = new ScrollMagic.Scene({
        triggerElement: '.js-blog',
        reverse: false,
      })
        .addTo(controller)
        .setTween(blogTween);
    }
  });
})();
