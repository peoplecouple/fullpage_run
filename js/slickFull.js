$(function () {
  const SL = $('#slickFull').slick({
    arrows: false,
    // vertical: true,
  });

  $('#slickFull').on('wheel', function (e) {
    console.log(e.originalEvent.wheelDelta)

    let D = e.originalEvent.wheelDelta;
    D > 0 ? SL.slick('slickPrev') : SL.slick('slickNext')
  })

  SL.on('afterChange', function (s,e,c) {
    let A = $('.slick-current');
    A.addClass('on').siblings().removeClass('on')
    // 위에처럼하면 애니메이션을 줄 수 있다.
  })
})