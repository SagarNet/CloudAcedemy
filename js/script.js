 // everything inside runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Navigation Toggle for Mobile / small screen devices
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Name is required';
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                document.getElementById('emailError').textContent = 'Email is required';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Subject
            const subject = document.getElementById('subject');
            if (subject.value.trim() === '') {
                document.getElementById('subjectError').textContent = 'Subject is required';
                document.getElementById('subjectError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Message
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                document.getElementById('messageError').textContent = 'Message is required';
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                contactForm.reset();
                const successMessage = document.getElementById('successMessage');
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.display = 'block';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }
});