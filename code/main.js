document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");

  // Các button của slider chính
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Các button của slider cơ sở vật chất
  const prevBtn1 = document.getElementById("prevBtn1");
  const nextBtn2 = document.getElementById("nextBtn2");

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  let currentIndex = 1; // Đối với slider chính
  let currentIndex1 = 1; // Đối với slider cơ sở vật chất

  const slideWidth = slides[0].clientWidth + 20; // 20px khoảng cách giữa các slide
  const totalSlides = slides.length;

  // Tạo bản sao của slide đầu tiên và cuối cùng
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".slide");
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Đặt slider bắt đầu

  // Hàm cập nhật vị trí của slider
  function updateSliderPosition(immediate = false) {
    slider.style.transition = immediate ? "none" : "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Hàm cập nhật vị trí của slider cơ sở vật chất (sliderWrapper1)
  const sliderWrapper1 = document.getElementById("sliderWrapper1");
  function updateSliderPosition1(immediate = false) {
    sliderWrapper1.style.transition = immediate ? "none" : "transform 0.3s ease-in-out";
    sliderWrapper1.style.transform = `translateX(-${currentIndex1 * slideWidth}px)`;
  }

  // Hàm xử lý khi nhấn nút next (slider chính)
  function handleNext() {
    if (currentIndex < 6) { // Dừng khi đạt slide thứ 7
      currentIndex++;
      updateSliderPosition();
    }
  }

  // Hàm xử lý khi nhấn nút prev (slider chính)
  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  }

  // Hàm xử lý khi nhấn nút next (slider cơ sở vật chất)
  function handleNext1() {
    if (currentIndex1 < 6) { // Dừng khi đạt slide thứ 7
      currentIndex1++;
      updateSliderPosition1();
    }
  }

  // Hàm xử lý khi nhấn nút prev (slider cơ sở vật chất)
  function handlePrev1() {
    if (currentIndex1 > 0) {
      currentIndex1--;
      updateSliderPosition1();
    }
  }

  // Gán sự kiện cho các nút prev và next (slider chính)
  prevBtn.addEventListener("click", handlePrev);
  nextBtn.addEventListener("click", handleNext);

  // Gán sự kiện cho các nút prev và next (slider cơ sở vật chất)
  prevBtn1.addEventListener("click", handlePrev1);
  nextBtn2.addEventListener("click", handleNext1);

  // Mở menu khi nhấn vào nút menu-toggle
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("show");
  });

  // Đóng menu khi nhấn vào nút close-btn
  closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
  });

  // Thêm sự kiện vuốt và kéo
  let startX = 0;
  let isDragging = false;

  function startDrag(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging = true;
  }

  function moveDrag(e) {
    if (!isDragging) return;
    let currentX = e.touches ? e.touches[0].clientX : e.clientX;
    let diff = startX - currentX;
    if (diff > 50) {  // Vuốt sang phải
      if (currentIndex < 6) {
        nextBtn.click();
      }
      isDragging = false;
    } else if (diff < -50) {  // Vuốt sang trái
      if (currentIndex > 0) {
        prevBtn.click();
      }
      isDragging = false;
    }
  }

  function endDrag() {
    isDragging = false;
  }

  // Xử lý các sự kiện touch và mouse cho slider chính
  slider.addEventListener("touchstart", startDrag);
  slider.addEventListener("touchmove", moveDrag);
  slider.addEventListener("touchend", endDrag);

  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("mousemove", moveDrag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("mouseleave", endDrag);

  // Thêm sự kiện vuốt và kéo cho slider cơ sở vật chất (sliderWrapper1)
  sliderWrapper1.addEventListener("touchstart", startDrag);
  sliderWrapper1.addEventListener("touchmove", moveDrag);
  sliderWrapper1.addEventListener("touchend", endDrag);

  sliderWrapper1.addEventListener("mousedown", startDrag);
  sliderWrapper1.addEventListener("mousemove", moveDrag);
  sliderWrapper1.addEventListener("mouseup", endDrag);
  sliderWrapper1.addEventListener("mouseleave", endDrag);
});





function openPopup() {
  document.getElementById('video-popup').classList.remove('hidden');
  document.getElementById('youtube-video').src = "https://www.youtube.com/embed/Ef83M9iiJh0?autoplay=1";
}

function closePopup() {
  document.getElementById('video-popup').classList.add('hidden');
  document.getElementById('youtube-video').src = "";
}