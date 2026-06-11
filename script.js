        const track = document.getElementById('sliderTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;
        
        // Find out exactly how many slides exist
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
            // Moves the track left by 100% of the window size for each index
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }