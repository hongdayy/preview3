document.addEventListener("DOMContentLoaded", function () {
  setupAlertButtons();
  setupSwiper();
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

// Mở menu khi nhấn vào nút menu-toggle
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("show");
});

// Đóng menu khi nhấn vào nút close-btn
closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
});

// ✅ Cài đặt Swiper (Tự động lướt và hiệu ứng nhanh)
function setupSwiper() {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    allowTouchMove: true,
    autoplay: {
      delay: 2500, // Lướt sau 2.5 giây
      disableOnInteraction: false
    },
    speed: 300,
    navigation: {
      nextEl: "#nextBtn",
      prevEl: "#prevBtn",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 12 },
      1024: { slidesPerView: 3, spaceBetween: 16 }
    }
  });

  document.querySelectorAll("#prevBtn1, #nextBtn1").forEach(button => {
    button.classList.add("transition-transform", "duration-150", "active:scale-90");
  });
}

// ✅ Hiển thị thông báo khi nhấn nút đăng ký
function setupAlertButtons() {
  document.querySelectorAll(".register-btn").forEach(button => {
    button.addEventListener("click", () => alert("Đăng ký thành công!"));
  });
}

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
      slidesPerView: 6, // Hiển thị 6 slide cho màn hình lớn hơn 1024px
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
