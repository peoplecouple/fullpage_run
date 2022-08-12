$(function () {
  const TXT = ['page01', 'page02', 'page03', 'page04', 'footer']

  $('#main').fullpage({
    anchors: ['page01', 'page02', 'page03', 'page04', 'footer'],
    css3: false,
    //navigation: true, 커스텀하기 어려움
    responsiveWidth: 768,
    afterLoad: function (anchorLink, idx) {
      $('.gnb li').removeClass('on');
      $('.gnb li').eq(idx - 1).addClass('on');
      $('.section').removeClass('on');
      $('.section').eq(idx - 1).addClass('on');

      idx == 3 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w');
      //text바꾸는거
      $('h1 span').text(TXT[idx - 1])

      //fullpage에는 slick-active처럼 active가 있음 
    }
  });

  $('.coverBtn').on('click', function () {
    $(this).toggleClass('on');
    $('.cover').toggleClass('on');
  })

  var coverContent = $('.gnb ul').clone().addClass('co');
  console.log(coverContent);

  $('.cover .case').append(coverContent);

  $('.cover a').on('click', function () {
    $('.cover').toggleClass('on');
    $('.coverBtn').toggleClass('on');
  });

  //cover열었을때 스크롤 하는 이벤트를 전달하지 않는다.
  $('.cover').on('scroll, wheel', function (e) {
    e.stopPropagation()
  })


  $('.contact').on('click', function () {
    $(this).toggleClass('on');
  })

})

