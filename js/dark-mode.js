// Dark Mode Toggle Functionality

class DarkMode {
    constructor() {
        this.darkModeToggle = document.querySelector('.dark-mode-toggle');
        this.darkModeStyle = document.getElementById('dark-mode-style');
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        this.init();
    }
    
    init() {
        // Apply initial dark mode state
        if (this.isDarkMode) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }
        
        // Add click event to toggle button
        if (this.darkModeToggle) {
            this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
            
            // Also add event to mobile toggle if it exists
            const mobileToggle = document.querySelector('.mobile-dark-mode .dark-mode-toggle');
            if (mobileToggle) {
                mobileToggle.addEventListener('click', () => this.toggleDarkMode());
            }
        }
        
        // Listen for system preference changes
        this.watchSystemPreference();
    }
    
    toggleDarkMode() {
        if (this.isDarkMode) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', this.isDarkMode);
        
        // Dispatch custom event for other scripts to listen to
        window.dispatchEvent(new CustomEvent('darkModeChange', {
            detail: { isDarkMode: this.isDarkMode }
        }));
    }
    
    enableDarkMode() {
        document.body.classList.add('dark-mode');
        if (this.darkModeStyle) {
            this.darkModeStyle.disabled = false;
        }
        this.updateToggleIcon(true);
        this.isDarkMode = true;
        
        // Add transition class for smooth transition
        document.body.classList.add('dark-mode-transition');
        setTimeout(() => {
            document.body.classList.remove('dark-mode-transition');
        }, 300);
    }
    
    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        if (this.darkModeStyle) {
            this.darkModeStyle.disabled = true;
        }
        this.updateToggleIcon(false);
        this.isDarkMode = false;
        
        // Add transition class for smooth transition
        document.body.classList.add('dark-mode-transition');
        setTimeout(() => {
            document.body.classList.remove('dark-mode-transition');
        }, 300);
    }
    
    updateToggleIcon(isDarkMode) {
        const icons = document.querySelectorAll('.dark-mode-toggle i');
        const labels = document.querySelectorAll('.dark-mode-toggle span');
        
        icons.forEach(icon => {
            if (isDarkMode) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
        
        // Update text labels if they exist
        labels.forEach(label => {
            if (label) {
                label.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
            }
        });
        
        // Update aria-label
        this.darkModeToggle.setAttribute('aria-label', 
            isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
        );
    }
    
    watchSystemPreference() {
        // Check if user prefers dark mode
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Listen for changes in system preference
        prefersDarkScheme.addEventListener('change', (e) => {
            // Only apply system preference if user hasn't manually set a preference
            if (!localStorage.getItem('darkMode')) {
                if (e.matches) {
                    this.enableDarkMode();
                } else {
                    this.disableDarkMode();
                }
            }
        });
    }
    
    // Public method to check current mode
    getIsDarkMode() {
        return this.isDarkMode;
    }
    
    // Public method to set dark mode
    setDarkMode(enabled) {
        if (enabled) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }
        localStorage.setItem('darkMode', enabled);
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.darkMode = new DarkMode();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkMode;
}
