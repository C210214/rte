var thumbs = $('.img-selection').find('img');

thumbs.click(function(){
  var src = $(this).attr('src');
  var dp = $('.display-img');
  var img = $('.zoom');
  dp.attr('src', src);
  img.attr('src', src);
});

$(".img-thumbnail").click(function(){
  $('.img-thumbnail').removeClass('selected');
  $(this).addClass('selected');
});

var zoom = $('.big-img').find('img').attr('src');
$('.big-img').append('<img class="zoom" src="'+zoom+'">');
$('.big-img').mouseenter(function(){
  $(this).mousemove(function(event){
    var offset = $(this).offset();
    var left = event.pageX - offset.left;
    var top = event.pageY - offset.top;
    
    $(this).find('.zoom').css({
      width: '200%',
      opacity: 1,
      left: -left,
      top: -top,
    });
  });
});

$('.big-img').mouseleave(function(){
  $(this).find('.zoom').css({
    width: '100%',
    opacity: 0,
    left: 0,
    top: 0,
  });
});