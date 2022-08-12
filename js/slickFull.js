$(function () {
  const TXT = ['page01', 'page02', 'page03', 'page04', 'footer']
  const SL = $('#slickFull').slick({
    arrows: false,
    // vertical: true,
  });

  $('#slickFull').on('wheel', function (e) {
    console.log(e.originalEvent.wheelDelta)

    let D = e.originalEvent.wheelDelta;
    D > 0 ? SL.slick('slickPrev') : SL.slick('slickNext')
  })


  $('.txt').text(TXT[0])
  SL.on('afterChange', function (s, e, c) {

    let A = $('.slick-current');
    A.addClass('on').siblings().removeClass('on')
    // 위에처럼하면 애니메이션을 줄 수 있다.
    $('.txt').text(TXT[c])

  })
})