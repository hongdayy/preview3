// Cài đặt Swiper cho phần thiết bị
var equipmentSwiper = new Swiper('.equipmentSwiper', {
    slidesPerView: 2, // Hiển thị 2 slide một lúc trên các màn hình nhỏ
    spaceBetween: 20, // Khoảng cách giữa các slide
    navigation: {
      nextEl: '#nextBtn1',
      prevEl: '#prevBtn1'
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // Hiển thị 2 slide cho màn hình nhỏ hơn 640px
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3, // Hiển thị 3 slide cho màn hình lớn hơn 768px
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 5, // Hiển thị 6 slide cho màn hình lớn hơn 1024px
        spaceBetween: 20
      }
    }
  });
  
  function openPopup() {
    document.getElementById('video-popup').classList.remove('hidden');
    document.getElementById('youtube-video').src = "https://www.youtube.com/embed/Ef83M9iiJh0?autoplay=1";
  }
  
  function closePopup() {
    document.getElementById('video-popup').classList.add('hidden');
    document.getElementById('youtube-video').src = "";
  }