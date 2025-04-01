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

// ✅ Cài đặt Swiper (Tự động lướt và hiệu ứng nhanh)
function setupSwiper() {
    new Swiper(".mySwiper", {
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
            1024: { slidesPerView: 3.5, spaceBetween: 16 }
        }
    });

    document.querySelectorAll("#prevBtn, #nextBtn").forEach(button => {
        button.classList.add("transition-transform", "duration-150", "active:scale-90");
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
    const doctorImage = document.querySelector("img[alt='Bác sĩ tư vấn']");

    // Mở video YouTube trong modal khi click
    function openVideo() {
        var modal = document.getElementById('videoModal');
        var youtubeVideo = document.getElementById('youtubeVideo');

        // Đặt link video YouTube (thay "VIDEO_ID" bằng ID thực của video YouTube)
        youtubeVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // ?autoplay=1 để tự động phát video

        modal.classList.remove('hidden');
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

// Mở modal khi click vào nút
document.getElementById('openModal').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var youtubeVideo = document.getElementById('youtubeVideo');

    // Đặt link video YouTube (thay "VIDEO_ID" bằng ID thực của video YouTube)
    youtubeVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // ?autoplay=1 để tự động phát video

    modal.classList.remove('hidden');
});

// Đóng modal khi click vào nút đóng
document.getElementById('closeModal').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var youtubeVideo = document.getElementById('youtubeVideo');

    // Dừng video khi đóng modal
    youtubeVideo.src = "";

    modal.classList.add('hidden');
});
