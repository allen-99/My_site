
$('section.awSlider .carousel').carousel({
    pause: "hover",
    interval: 5000 });
  
  

  
  $('section.awSlider .carousel').on('slid.bs.carousel', function () {
    var bscn = $(this).find('.item.active > img').attr('src');
    $('section.awSlider > img').attr('src', bscn);
  });
  
  
  