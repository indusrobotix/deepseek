// Loading animation control
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Minimum display time for loading screen (1.5 seconds)
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Remove from DOM after fade out
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Fallback in case page takes too long to load
setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen && loadingScreen.style.opacity !== '0') {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}, 5000); // Maximum 5 seconds
