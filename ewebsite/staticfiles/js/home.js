// // Wait for DOM to fully load
// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile Navigation Toggle
//     const navToggle = document.getElementById('navToggle');
//     const mainNav = document.getElementById('mainNav');

//     navToggle.addEventListener('click', () => {
//         mainNav.classList.toggle('active');
//     });

//     // Smooth Scrolling for Navigation Links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             mainNav.classList.remove('active');
            
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 70,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Form Submission
//     const contactForm = document.getElementById('contactForm');
    
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;
        
//         // Here you would typically send the form data to a server
//         // For this example, we'll just show an alert
//         alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
        
//         // Reset the form
//         contactForm.reset();
//     });

//     // Scroll Animation for Feature Cards
//     const featureCards = document.querySelectorAll('.feature-card');
    
//     // Initial check on page load
//     checkScroll();
    
//     // Check on scroll
//     window.addEventListener('scroll', checkScroll);
    
//     function checkScroll() {
//         featureCards.forEach(card => {
//             const cardPosition = card.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.3;
            
//             if (cardPosition < screenPosition) {
//                 card.classList.add('active');
//             }
//         });
//     }

//     // Add current year to copyright
//     document.querySelector('.copyright').innerHTML = `© ${new Date().getFullYear()} Your Company. All rights reserved.`;
// });

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links (only for links that start with #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            mainNav.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Only prevent default for client-side handling
            // Remove this preventDefault if you want server-side processing
            // e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log("Form submitted with:", { name, email, message });
            
            // If using client-side handling:
            alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            contactForm.reset();
        });
    }

    // Scroll Animation for Feature Cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Initial check on page load
    if (featureCards.length > 0) {
        checkScroll();
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
    }
    
    function checkScroll() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('active');
            }
        });
    }

    // Feed interactions
    const feedActions = document.querySelectorAll('.feed-action');
    
    if (feedActions.length > 0) {
        feedActions.forEach(action => {
            action.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Simple interaction for demo purposes
                const currentText = this.textContent;
                if (currentText.includes('Like')) {
                    this.textContent = currentText.replace('Like', 'Liked');
                    this.style.color = '#3498db';
                }
            });
        });
    }

    // Add current year to copyright
    const copyright = document.querySelector('.copyright');
    if (copyright && !copyright.textContent.includes("{% now")) {
        copyright.innerHTML = `© ${new Date().getFullYear()} Your Company. All rights reserved.`;
    }
});