$('.menu-toggle input').on('click', function () {
  $('nav ul').toggleClass('slider');
});

$(document).ready(function () {
  var strings = ["Search for", "<span class='text-black'>Search for</span> <span class='text-[#E82B2B]'>NFT here </span>"];
  var typing = new Typed(".typing", {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    cursorChar: '<span style="color: white;">|</span>'
  });
});

$(".info-content2").hide(); // Sembunyikan semua info-content saat halaman dimuat
$(".info-content3").hide(); // Sembunyikan semua info-content saat halaman dimuat
$(".info-content5").hide(); // Sembunyikan semua info-content saat halaman dimuat

$(document).ready(function () {
  $(".info-tittle").click(function () {
    $(".info-content").slideToggle();
  })
});

$(document).ready(function () {
  $(".info-tittle2").click(function () {
    $(".info-content2").slideToggle();
  })
});

$(document).ready(function () {
  $(".info-tittle3").click(function () {
    $(".info-content3").slideToggle();
  })
});
$(document).ready(function () {
  $(".info-tittle4").click(function () {
    $(".info-content4").slideToggle();
  })
});
$(document).ready(function () {
  $(".info-tittle5").click(function () {
    $(".info-content5").slideToggle();
  })
});
$(document).ready(function () {
  $(".info-tittle6").click(function () {
    $(".info-content6").slideToggle();
  })
});
$(document).ready(function () {
  $(".info-tittle7").click(function () {
    $(".info-content7").slideToggle();
  })
});