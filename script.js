document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.content-box, .cv-container');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease';
            element.style.opacity = '1';
        }, 100);
    });
    
    // Add hover effect to service tags
    const serviceTags = document.querySelectorAll('.services span');
    serviceTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(255, 191, 0, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

