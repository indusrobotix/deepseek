// Contact form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // Simple validation
            let isValid = true;
            
            // Name validation
            if (!formValues.name.trim()) {
                showError('name', 'Please enter your name');
                isValid = false;
            } else {
                clearError('name');
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formValues.email.trim()) {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!emailRegex.test(formValues.email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('email');
            }
            
            // Message validation
            if (!formValues.message.trim()) {
                showError('message', 'Please enter your message');
                isValid = false;
            } else if (formValues.message.trim().length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                isValid = false;
            } else {
                clearError('message');
            }
            
            // If valid, simulate form submission
            if (isValid) {
                // Show success message
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(function() {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'success-message';
                    successMsg.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <p>Thank you for your message! We'll get back to you soon.</p>
                    `;
                    
                    contactForm.parentNode.insertBefore(successMsg, contactForm);
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Remove success message after 5 seconds
                    setTimeout(function() {
                        successMsg.remove();
                    }, 5000);
                }, 1500);
            }
        });
        
        // Helper functions for error handling
        function showError(fieldId, message) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(`${fieldId}-error`) || createErrorElement(fieldId);
            
            field.classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        function clearError(fieldId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(`${fieldId}-error`);
            
            if (field) field.classList.remove('error');
            if (errorElement) errorElement.style.display = 'none';
        }
        
        function createErrorElement(fieldId) {
            const errorElement = document.createElement('div');
            errorElement.id = `${fieldId}-error`;
            errorElement.className = 'error-message';
            
            const field = document.getElementById(fieldId);
            field.parentNode.appendChild(errorElement);
            
            return errorElement;
        }
    }
});
