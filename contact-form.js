// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // Validate form
            if (validateContactForm(formValues)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // Show success message
                    showFormSuccess();
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
        
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (nameInput) {
            nameInput.addEventListener('blur', validateName);
        }
        
        if (emailInput) {
            emailInput.addEventListener('blur', validateEmail);
        }
        
        if (messageInput) {
            messageInput.addEventListener('blur', validateMessage);
        }
    }
});

// Validate contact form
function validateContactForm(formData) {
    let isValid = true;
    
    // Validate name
    if (!validateNameField(formData.name)) {
        isValid = false;
    }
    
    // Validate email
    if (!validateEmailField(formData.email)) {
        isValid = false;
    }
    
    // Validate message
    if (!validateMessageField(formData.message)) {
        isValid = false;
    }
    
    return isValid;
}

// Validate name field
function validateName() {
    const nameField = document.getElementById('name');
    return validateNameField(nameField.value);
}

function validateNameField(name) {
    const errorElement = document.getElementById('name-error');
    
    if (!name.trim()) {
        showError('name', 'Please enter your name');
        return false;
    } else if (name.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters long');
        return false;
    } else {
        clearError('name');
        return true;
    }
}

// Validate email field
function validateEmail() {
    const emailField = document.getElementById('email');
    return validateEmailField(emailField.value);
}

function validateEmailField(email) {
    const errorElement = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
        showError('email', 'Please enter your email address');
        return false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        return false;
    } else {
        clearError('email');
        return true;
    }
}

// Validate message field
function validateMessage() {
    const messageField = document.getElementById('message');
    return validateMessageField(messageField.value);
}

function validateMessageField(message) {
    const errorElement = document.getElementById('message-error');
    
    if (!message.trim()) {
        showError('message', 'Please enter your message');
        return false;
    } else if (message.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters long');
        return false;
    } else {
        clearError('message');
        return true;
    }
}

// Validate phone number (optional)
function validatePhone(phone) {
    if (!phone) return true; // Phone is optional
    
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    return phoneRegex.test(cleanedPhone);
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Clear error message
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.remove('error');
        field.style.borderColor = '';
    }
    
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Show form success message
function showFormSuccess() {
    const form = document.getElementById('contact-form');
    const successMsg = document.createElement('div');
    
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <div class="success-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="success-content">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting IndusRoboTix. We'll get back to you within 24 hours.</p>
            <p class="success-note">A confirmation email has been sent to your inbox.</p>
        </div>
    `;
    
    form.parentNode.insertBefore(successMsg, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
    
    // Add success message styles
    if (!document.querySelector('#success-styles')) {
        const style = document.createElement('style');
        style.id = 'success-styles';
        style.textContent = `
            .success-message {
                background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
                color: white;
                padding: 30px;
                border-radius: var(--radius);
                margin-bottom: 30px;
                display: flex;
                align-items: center;
                gap: 20px;
                animation: slideDown 0.5s ease;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .success-icon {
                font-size: 3rem;
            }
            
            .success-content h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: white;
            }
            
            .success-content p {
                margin-bottom: 5px;
                opacity: 0.9;
            }
            
            .success-note {
                font-size: 0.9rem;
                font-style: italic;
            }
            
            body.dark-mode .success-message {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            }
        `;
        document.head.appendChild(style);
    }
}

// Export functions for use in other scripts
window.validateContactForm = validateContactForm;
window.showError = showError;
window.clearError = clearError;
