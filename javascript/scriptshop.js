var navBar = document.getElementById("navBar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };


      var zoom = document.querySelector("#zoom");
      var zoomImg = document.querySelector("#zoom-img");
      var mainImg = document.querySelector("#main-img");
      var enterTL = new TimelineMax({ paused: true });
      var timer = TweenLite.delayedCall(1, () => enterTL.reverse()).pause();
      
      var cx, cy, ratio;
      
      window.addEventListener("load", init);
      
      function init() {
      
        zoomImg.src = mainImg.src;
        ratio = mainImg.naturalWidth / mainImg.width;
        resize();
      
        TweenLite.set([zoom, zoomImg], { xPercent: -50, yPercent: -50 });
        TweenLite.set(zoom, { autoAlpha: 0, scale: 0 });
      
        enterTL.
        to(mainImg, 0.5, { filter: "grayscale(0.4)", "-webkit-filter": "grayscale(0.4)" }, 0).
        to(zoom, 0.5, { autoAlpha: 1, scale: 1.2 }, 0);
      
        window.addEventListener("resize", resize);
        mainImg.addEventListener("mouseleave", leaveAction);
        mainImg.addEventListener("mousemove", moveAction);
      }
      
      function leaveAction() {
        enterTL.reverse();
      }
      
      function moveAction(e) {
        enterTL.play();
        timer.restart(true);
        TweenLite.set(zoom, { x: e.x, y: e.y });
        TweenLite.set(zoomImg, { x: (cx - e.x) * ratio, y: (cy - e.y) * ratio });
      }
      
      function resize() {
        var rect = mainImg.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
      }

      const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");

function changeImage(e) {
  activeImage.src = e.target.src;
}
productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);


$(document).ready(function(){
  $("h1, p").delay("1000").fadeIn();
  $("#back-top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 200) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });
  
      $('a#back-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
  });