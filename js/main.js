// Islamic Guidance Website - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Utility Functions
const Utils = {
    // Format time to 12-hour format
    formatTime12h: function(time24) {
        const [hours, minutes] = time24.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    },

    // Show loading state
    showLoading: function(element) {
        element.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <span>Loading...</span>
            </div>
        `;
    },

    // Show error message
    showError: function(element, message) {
        element.innerHTML = `
            <div class="error-message" style="color: #e74c3c; padding: 1rem; text-align: center;">
                <p>${message}</p>
            </div>
        `;
    },

    // Escape HTML to prevent XSS
    escapeHtml: function(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // Store data in localStorage
    saveToStorage: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },

    // Get data from localStorage
    getFromStorage: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },

    // Remove data from localStorage
    removeFromStorage: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// Islamic Greetings based on time of day
function getIslamicGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return { english: 'Good Morning', arabic: 'صباح الخير' };
    } else if (hour >= 12 && hour < 17) {
        return { english: 'Good Afternoon', arabic: 'مساء الخير' };
    } else if (hour >= 17 && hour < 21) {
        return { english: 'Good Evening', arabic: 'مساء الخير' };
    } else {
        return { english: 'Peace be upon you', arabic: 'السلام عليكم' };
    }
}

// Sample Hadiths for display
const sampleHadiths = [
    {
        text: "The best among you are those who have the best manners and character.",
        source: "Sahih Bukhari",
        arabic: "خَيْرُكُمْ أَحْسَنُكُمْ أَخْلَاقًا"
    },
    {
        text: "None of you truly believes until he loves for his brother what he loves for himself.",
        source: "Sahih Bukhari & Muslim",
        arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ"
    },
    {
        text: "Speak good or remain silent.",
        source: "Sahih Bukhari & Muslim",
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ"
    },
    {
        text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
        source: "Sahih Bukhari",
        arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ"
    },
    {
        text: "Make things easy and do not make them difficult, cheer people up and do not drive them away.",
        source: "Sahih Bukhari",
        arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا"
    }
];

// Get random hadith
function getRandomHadith() {
    return sampleHadiths[Math.floor(Math.random() * sampleHadiths.length)];
}

// Export for use in other files
window.Utils = Utils;
window.getIslamicGreeting = getIslamicGreeting;
window.getRandomHadith = getRandomHadith;
