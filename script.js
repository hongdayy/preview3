document.addEventListener("DOMContentLoaded", function () {
    setupMenuToggle();
    setupCarousel();
    setupAlertButtons();
});

// Toggle menu
function setupMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => menu.classList.toggle("active"));
    }
}

// Cài đặt carousel
function setupCarousel() {
    const container = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const items = document.querySelectorAll("#carousel > div");
    
    if (!container || !prevBtn || !nextBtn || items.length === 0) return;

    let itemWidth = items[0].offsetWidth + 24;
    let visibleItems = getVisibleItems();
    let currentIndex = 0;

    function updateSlider() {
        container.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < items.length - visibleItems) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function getVisibleItems() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    function handleResize() {
        visibleItems = getVisibleItems();
        itemWidth = items[0].offsetWidth + 24;
        updateSlider();
    }

    window.addEventListener("resize", handleResize);
    handleResize();
}

// Hiển thị thông báo khi nhấn nút đăng ký
function setupAlertButtons() {
    document.querySelectorAll(".register-btn").forEach(button => {
        button.addEventListener("click", () => alert("Đăng ký thành công!"));
    });
}
