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