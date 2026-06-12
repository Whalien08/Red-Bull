const track = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Only run the slider code if the slider actually exists on the page
if (track && prevBtn && nextBtn) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
} else {
    console.log("Slider elements not found. Check your HTML IDs.");
}



const nav = document.getElementById('myNav');

//Only run scroll code if myNav exists
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 2) {
            nav.classList.add('scrolled'); 
        } else {
            nav.classList.remove('scrolled'); 
        }
    });
} else {
    console.log("Navigation ID 'myNav' not found. Check your HTML.");
}