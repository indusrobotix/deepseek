// IndusRoboTix Website Configuration
// ==================================
// Edit this file to customize your website easily

const SITE_CONFIG = {
    // Site Information
    siteName: "IndusRoboTix",
    tagline: "Pakistan's Premier Robotics Provider",
    foundedYear: "2026",
    owner: "Furqan Khatti",
    location: "Lahore, Pakistan",
    
    // Contact Information
    contact: {
        email: "info@indusrobotix.pk",
        phone: "+92 300 1234567",
        address: "Tech Innovation Hub, Lahore, Pakistan",
        businessHours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    
    // Social Media Links
    socialMedia: {
        facebook: "https://facebook.com/indusrobotix",
        instagram: "https://instagram.com/indusrobotix",
        youtube: "https://youtube.com/indusrobotix",
        linkedin: "https://linkedin.com/company/indusrobotix",
        twitter: "https://twitter.com/indusrobotix"
    },
    
    // Business Stats
    stats: {
        kitsDelivered: "500+",
        customDesigns: "50+",
        localSourcing: "100%",
        satisfactionRate: "98%"
    },
    
    // Products
    products: [
        {
            id: "starter-kit",
            name: "Starter Robotics Kit",
            price: "Rs. 8,500",
            description: "Perfect for beginners. Includes Arduino Uno, sensors, motors, and our signature acrylic chassis.",
            features: ["Arduino Uno", "5 Sensors", "4 Motors", "Acrylic Chassis"],
            badge: "Bestseller"
        },
        {
            id: "advanced-kit",
            name: "Advanced Robotics Kit",
            price: "Rs. 15,000",
            description: "For experienced builders. Features ESP32, advanced sensors, and modular chassis design.",
            features: ["ESP32", "8 Sensors", "6 Motors", "Modular Chassis"],
            badge: "Advanced"
        },
        {
            id: "line-follower",
            name: "Line Follower Robot",
            price: "Rs. 6,500",
            description: "Ready-to-assemble line following robot with pre-programmed Arduino and IR sensor array.",
            features: ["Arduino Nano", "IR Sensor Array", "2 Motors", "Pre-programmed"],
            badge: "Educational"
        }
    ],
    
    // Services
    services: [
        {
            name: "Custom Kit Assembly",
            icon: "fa-tools",
            description: "Pre-assembled and DIY robotic kits tailored for students, hobbyists, and professionals."
        },
        {
            name: "Precision Chassis",
            icon: "fa-ruler-combined",
            description: "Custom-designed acrylic chassis with laser-cut precision for your unique projects."
        },
        {
            name: "Expert Assembly",
            icon: "fa-tools",
            description: "Professional component assembly and testing to ensure your robots work flawlessly."
        },
        {
            name: "STEM Education",
            icon: "fa-graduation-cap",
            description: "Supporting Pakistan's education sector with quality robotics learning materials."
        }
    ],
    
    // Testimonials
    testimonials: [
        {
            name: "Ahmed Hassan",
            role: "Engineering Student, NUST University",
            content: "The starter kit from IndusRoboTix helped me win my first robotics competition. The quality of components and the custom chassis design gave me an edge over competitors.",
            initials: "AH"
        },
        {
            name: "Dr. Ayesha Khan",
            role: "Professor, FAST University",
            content: "We've been ordering bulk kits for our robotics lab. The quality is consistent and Furqan's team provides excellent support for educational institutions.",
            initials: "AK"
        },
        {
            name: "Bilal Mahmood",
            role: "Robotics Hobbyist",
            content: "Finally, a local supplier who understands robotics! No more waiting for international shipping. The custom chassis service is a game-changer.",
            initials: "BM"
        }
    ],
    
    // Navigation Menu
    navigation: [
        { name: "HOME", url: "index.html" },
        { name: "PRODUCTS", url: "products.html" },
        { name: "SERVICES", url: "services.html" },
        { name: "GALLERY", url: "gallery.html" },
        { name: "ABOUT", url: "about.html" },
        { name: "CONTACT", url: "contact.html" }
    ],
    
    // Color Scheme
    colors: {
        primary: "#2563eb",
        secondary: "#0d9488",
        accent: "#f97316",
        lightBg: "#f8fafc",
        darkBg: "#0f172a"
    },
    
    // SEO Meta Tags
    meta: {
        description: "IndusRoboTix - Custom Robotics Kits in Pakistan. Locally sourced components, custom acrylic chassis design, and STEM education.",
        keywords: "robotics, Pakistan, STEM, custom kits, acrylic chassis, robotic components, Furqan Khatti",
        author: "Furqan Khatti"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
