// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const btnDiscover = document.querySelector('.btn-discover');
    
    btnDiscover.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
