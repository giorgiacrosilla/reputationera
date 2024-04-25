window.addEventListener('scroll', function() {
    const zoomFrame = document.getElementById('zoomFrame');
    let scrollPosition = window.pageYOffset;
    let newPosition = scrollPosition * 0.5; // Adjust the scrolling speed here
    
    // Check if scroll position is greater than 0
    if (scrollPosition > 0) {
        zoomFrame.style.top = `${newPosition}px`;
    } else {
        // If scroll position is 0, reset to initial position
        zoomFrame.style.top = '-15vw';
    }

    // Show hidden elements based on scroll position
    var titles = document.querySelectorAll('.hidden');
    titles.forEach(function(title) {
        var position = title.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
            title.classList.add('visible');
        }
    });
});