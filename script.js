document.addEventListener("DOMContentLoaded", function () {
    setupMenuToggle();
    setupAlertButtons();
    setupSwiper();
    setupVideoClick();
});

// ✅ Toggle menu
function setupMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => menu.classList.toggle("active"));
    }
}

// ✅ Cài đặt Swiper (Giữ nguyên)
function setupSwiper() {
    new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 8,
        allowTouchMove: false,
        autoplay: false,
        speed: 500,
        navigation: {
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 }
        }
    });
}

// ✅ Hiển thị thông báo khi nhấn nút đăng ký
function setupAlertButtons() {
    document.querySelectorAll(".register-btn").forEach(button => {
        button.addEventListener("click", () => alert("Đăng ký thành công!"));
    });
}

// ✅ Xử lý khi bấm vào ảnh mở YouTube
function setupVideoClick() {
    const videoIcon = document.getElementById("videoIcon");
    const doctorImage = document.querySelector("img[alt='Bác sĩ tư vấn']"); // Ảnh bsigp.png

    function openVideo() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

    if (videoIcon) {
        videoIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            openVideo();
        });
    } else {
        console.error("❌ Không tìm thấy phần tử có ID 'videoIcon'");
    }

    if (doctorImage) {
        doctorImage.addEventListener("click", function () {
            openVideo();
        });
    } else {
        console.error("❌ Không tìm thấy ảnh bác sĩ");
    }
}
