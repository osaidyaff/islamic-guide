// Islamic Guidance - Enhanced Quran Reader with Research & Analysis
// Using Al-Quran Cloud API and additional tafsir resources

// Fallback Utils if main.js fails to load
if (typeof Utils === 'undefined') {
    window.Utils = {
        showLoading: (element) => {
            if (element) element.innerHTML = '<div class="loading"><div class="loading-spinner"></div><span>Loading...</span></div>';
        },
        showError: (element, message) => {
            if (element) element.innerHTML = `<div style="text-align: center; padding: 2rem; color: #dc3545;"><p>${message}</p></div>`;
        }
    };
}

// Surah data (name, verses count, revelation type)
const surahList = [
    { number: 1, name: 'Al-Fatihah', englishName: 'The Opening', verses: 7, type: 'Meccan' },
    { number: 2, name: 'Al-Baqarah', englishName: 'The Cow', verses: 286, type: 'Medinan' },
    { number: 3, name: 'Ali Imran', englishName: 'The Family of Imran', verses: 200, type: 'Medinan' },
    { number: 4, name: 'An-Nisa', englishName: 'The Women', verses: 176, type: 'Medinan' },
    { number: 5, name: 'Al-Ma\'idah', englishName: 'The Table Spread', verses: 120, type: 'Medinan' },
    { number: 6, name: 'Al-An\'am', englishName: 'The Cattle', verses: 165, type: 'Meccan' },
    { number: 7, name: 'Al-A\'raf', englishName: 'The Heights', verses: 206, type: 'Meccan' },
    { number: 8, name: 'Al-Anfal', englishName: 'The Spoils of War', verses: 75, type: 'Medinan' },
    { number: 9, name: 'At-Tawbah', englishName: 'The Repentance', verses: 129, type: 'Medinan' },
    { number: 10, name: 'Yunus', englishName: 'Jonah', verses: 109, type: 'Meccan' },
    { number: 11, name: 'Hud', englishName: 'Hud', verses: 123, type: 'Meccan' },
    { number: 12, name: 'Yusuf', englishName: 'Joseph', verses: 111, type: 'Meccan' },
    { number: 13, name: 'Ar-Ra\'d', englishName: 'The Thunder', verses: 43, type: 'Medinan' },
    { number: 14, name: 'Ibrahim', englishName: 'Abraham', verses: 52, type: 'Meccan' },
    { number: 15, name: 'Al-Hijr', englishName: 'The Rocky Tract', verses: 99, type: 'Meccan' },
    { number: 16, name: 'An-Nahl', englishName: 'The Bee', verses: 128, type: 'Meccan' },
    { number: 17, name: 'Al-Isra', englishName: 'The Night Journey', verses: 111, type: 'Meccan' },
    { number: 18, name: 'Al-Kahf', englishName: 'The Cave', verses: 110, type: 'Meccan' },
    { number: 19, name: 'Maryam', englishName: 'Mary', verses: 98, type: 'Meccan' },
    { number: 20, name: 'Ta-Ha', englishName: 'Ta-Ha', verses: 135, type: 'Meccan' },
    { number: 21, name: 'Al-Anbiya', englishName: 'The Prophets', verses: 112, type: 'Meccan' },
    { number: 22, name: 'Al-Hajj', englishName: 'The Pilgrimage', verses: 78, type: 'Medinan' },
    { number: 23, name: 'Al-Mu\'minun', englishName: 'The Believers', verses: 118, type: 'Meccan' },
    { number: 24, name: 'An-Nur', englishName: 'The Light', verses: 64, type: 'Medinan' },
    { number: 25, name: 'Al-Furqan', englishName: 'The Criterion', verses: 77, type: 'Meccan' },
    { number: 26, name: 'Ash-Shu\'ara', englishName: 'The Poets', verses: 227, type: 'Meccan' },
    { number: 27, name: 'An-Naml', englishName: 'The Ants', verses: 93, type: 'Meccan' },
    { number: 28, name: 'Al-Qasas', englishName: 'The Stories', verses: 88, type: 'Meccan' },
    { number: 29, name: 'Al-Ankabut', englishName: 'The Spider', verses: 69, type: 'Meccan' },
    { number: 30, name: 'Ar-Rum', englishName: 'The Romans', verses: 60, type: 'Meccan' },
    { number: 31, name: 'Luqman', englishName: 'Luqman', verses: 34, type: 'Meccan' },
    { number: 32, name: 'As-Sajdah', englishName: 'The Prostration', verses: 30, type: 'Meccan' },
    { number: 33, name: 'Al-Ahzab', englishName: 'The Confederates', verses: 73, type: 'Medinan' },
    { number: 34, name: 'Saba', englishName: 'Sheba', verses: 54, type: 'Meccan' },
    { number: 35, name: 'Fatir', englishName: 'The Originator', verses: 45, type: 'Meccan' },
    { number: 36, name: 'Ya-Sin', englishName: 'Ya-Sin', verses: 83, type: 'Meccan' },
    { number: 37, name: 'As-Saffat', englishName: 'Those Lined Up', verses: 182, type: 'Meccan' },
    { number: 38, name: 'Sad', englishName: 'Sad', verses: 88, type: 'Meccan' },
    { number: 39, name: 'Az-Zumar', englishName: 'The Groups', verses: 75, type: 'Meccan' },
    { number: 40, name: 'Ghafir', englishName: 'The Forgiver', verses: 85, type: 'Meccan' },
    { number: 41, name: 'Fussilat', englishName: 'Explained in Detail', verses: 54, type: 'Meccan' },
    { number: 42, name: 'Ash-Shura', englishName: 'The Consultation', verses: 53, type: 'Meccan' },
    { number: 43, name: 'Az-Zukhruf', englishName: 'The Gold Adornment', verses: 89, type: 'Meccan' },
    { number: 44, name: 'Ad-Dukhan', englishName: 'The Smoke', verses: 59, type: 'Meccan' },
    { number: 45, name: 'Al-Jathiyah', englishName: 'The Kneeling', verses: 37, type: 'Meccan' },
    { number: 46, name: 'Al-Ahqaf', englishName: 'The Sand Dunes', verses: 35, type: 'Meccan' },
    { number: 47, name: 'Muhammad', englishName: 'Muhammad', verses: 38, type: 'Medinan' },
    { number: 48, name: 'Al-Fath', englishName: 'The Victory', verses: 29, type: 'Medinan' },
    { number: 49, name: 'Al-Hujurat', englishName: 'The Rooms', verses: 18, type: 'Medinan' },
    { number: 50, name: 'Qaf', englishName: 'Qaf', verses: 45, type: 'Meccan' },
    { number: 51, name: 'Adh-Dhariyat', englishName: 'The Scattering Winds', verses: 60, type: 'Meccan' },
    { number: 52, name: 'At-Tur', englishName: 'The Mount', verses: 49, type: 'Meccan' },
    { number: 53, name: 'An-Najm', englishName: 'The Star', verses: 62, type: 'Meccan' },
    { number: 54, name: 'Al-Qamar', englishName: 'The Moon', verses: 55, type: 'Meccan' },
    { number: 55, name: 'Ar-Rahman', englishName: 'The Most Merciful', verses: 78, type: 'Medinan' },
    { number: 56, name: 'Al-Waqi\'ah', englishName: 'The Event', verses: 96, type: 'Meccan' },
    { number: 57, name: 'Al-Hadid', englishName: 'The Iron', verses: 29, type: 'Medinan' },
    { number: 58, name: 'Al-Mujadilah', englishName: 'The Pleading Woman', verses: 22, type: 'Medinan' },
    { number: 59, name: 'Al-Hashr', englishName: 'The Gathering', verses: 24, type: 'Medinan' },
    { number: 60, name: 'Al-Mumtahanah', englishName: 'The Examined One', verses: 13, type: 'Medinan' },
    { number: 61, name: 'As-Saff', englishName: 'The Row', verses: 14, type: 'Medinan' },
    { number: 62, name: 'Al-Jumu\'ah', englishName: 'Friday', verses: 11, type: 'Medinan' },
    { number: 63, name: 'Al-Munafiqun', englishName: 'The Hypocrites', verses: 11, type: 'Medinan' },
    { number: 64, name: 'At-Taghabun', englishName: 'The Loss and Gain', verses: 18, type: 'Medinan' },
    { number: 65, name: 'At-Talaq', englishName: 'The Divorce', verses: 12, type: 'Medinan' },
    { number: 66, name: 'At-Tahrim', englishName: 'The Prohibition', verses: 12, type: 'Medinan' },
    { number: 67, name: 'Al-Mulk', englishName: 'The Dominion', verses: 30, type: 'Meccan' },
    { number: 68, name: 'Al-Qalam', englishName: 'The Pen', verses: 52, type: 'Meccan' },
    { number: 69, name: 'Al-Haqqah', englishName: 'The Inevitable', verses: 52, type: 'Meccan' },
    { number: 70, name: 'Al-Ma\'arij', englishName: 'The Ways of Ascent', verses: 44, type: 'Meccan' },
    { number: 71, name: 'Nuh', englishName: 'Noah', verses: 28, type: 'Meccan' },
    { number: 72, name: 'Al-Jinn', englishName: 'The Jinn', verses: 28, type: 'Meccan' },
    { number: 73, name: 'Al-Muzzammil', englishName: 'The Wrapped One', verses: 20, type: 'Meccan' },
    { number: 74, name: 'Al-Muddaththir', englishName: 'The Cloaked One', verses: 56, type: 'Meccan' },
    { number: 75, name: 'Al-Qiyamah', englishName: 'The Resurrection', verses: 40, type: 'Meccan' },
    { number: 76, name: 'Al-Insan', englishName: 'Man', verses: 31, type: 'Medinan' },
    { number: 77, name: 'Al-Mursalat', englishName: 'Those Sent Forth', verses: 50, type: 'Meccan' },
    { number: 78, name: 'An-Naba', englishName: 'The Announcement', verses: 40, type: 'Meccan' },
    { number: 79, name: 'An-Nazi\'at', englishName: 'Those Who Pull Out', verses: 46, type: 'Meccan' },
    { number: 80, name: 'Abasa', englishName: 'He Frowned', verses: 42, type: 'Meccan' },
    { number: 81, name: 'At-Takwir', englishName: 'The Folding Up', verses: 29, type: 'Meccan' },
    { number: 82, name: 'Al-Infitar', englishName: 'The Cleaving', verses: 19, type: 'Meccan' },
    { number: 83, name: 'Al-Mutaffifin', englishName: 'Those Who Deal in Fraud', verses: 36, type: 'Meccan' },
    { number: 84, name: 'Al-Inshiqaq', englishName: 'The Splitting Asunder', verses: 25, type: 'Meccan' },
    { number: 85, name: 'Al-Buruj', englishName: 'The Stars', verses: 22, type: 'Meccan' },
    { number: 86, name: 'At-Tariq', englishName: 'The Night Visitor', verses: 17, type: 'Meccan' },
    { number: 87, name: 'Al-A\'la', englishName: 'The Most High', verses: 19, type: 'Meccan' },
    { number: 88, name: 'Al-Ghashiyah', englishName: 'The Overwhelming', verses: 26, type: 'Meccan' },
    { number: 89, name: 'Al-Fajr', englishName: 'The Dawn', verses: 30, type: 'Meccan' },
    { number: 90, name: 'Al-Balad', englishName: 'The City', verses: 20, type: 'Meccan' },
    { number: 91, name: 'Ash-Shams', englishName: 'The Sun', verses: 15, type: 'Meccan' },
    { number: 92, name: 'Al-Layl', englishName: 'The Night', verses: 21, type: 'Meccan' },
    { number: 93, name: 'Ad-Duha', englishName: 'The Morning Hours', verses: 11, type: 'Meccan' },
    { number: 94, name: 'Ash-Sharh', englishName: 'The Opening Forth', verses: 8, type: 'Meccan' },
    { number: 95, name: 'At-Tin', englishName: 'The Fig', verses: 8, type: 'Meccan' },
    { number: 96, name: 'Al-Alaq', englishName: 'The Clot', verses: 19, type: 'Meccan' },
    { number: 97, name: 'Al-Qadr', englishName: 'The Night of Decree', verses: 5, type: 'Meccan' },
    { number: 98, name: 'Al-Bayyinah', englishName: 'The Clear Evidence', verses: 8, type: 'Medinan' },
    { number: 99, name: 'Az-Zalzalah', englishName: 'The Earthquake', verses: 8, type: 'Medinan' },
    { number: 100, name: 'Al-Adiyat', englishName: 'The Runners', verses: 11, type: 'Meccan' },
    { number: 101, name: 'Al-Qari\'ah', englishName: 'The Striking Hour', verses: 11, type: 'Meccan' },
    { number: 102, name: 'At-Takathur', englishName: 'The Piling Up', verses: 8, type: 'Meccan' },
    { number: 103, name: 'Al-Asr', englishName: 'The Time', verses: 3, type: 'Meccan' },
    { number: 104, name: 'Al-Humazah', englishName: 'The Slanderer', verses: 9, type: 'Meccan' },
    { number: 105, name: 'Al-Fil', englishName: 'The Elephant', verses: 5, type: 'Meccan' },
    { number: 106, name: 'Quraysh', englishName: 'Quraysh', verses: 4, type: 'Meccan' },
    { number: 107, name: 'Al-Ma\'un', englishName: 'The Small Kindnesses', verses: 7, type: 'Meccan' },
    { number: 108, name: 'Al-Kawthar', englishName: 'The Abundance', verses: 3, type: 'Meccan' },
    { number: 109, name: 'Al-Kafirun', englishName: 'The Disbelievers', verses: 6, type: 'Meccan' },
    { number: 110, name: 'An-Nasr', englishName: 'The Help', verses: 3, type: 'Medinan' },
    { number: 111, name: 'Al-Masad', englishName: 'The Palm Fiber', verses: 5, type: 'Meccan' },
    { number: 112, name: 'Al-Ikhlas', englishName: 'The Sincerity', verses: 4, type: 'Meccan' },
    { number: 113, name: 'Al-Falaq', englishName: 'The Daybreak', verses: 5, type: 'Meccan' },
    { number: 114, name: 'An-Nas', englishName: 'Mankind', verses: 6, type: 'Meccan' }
];

// Available translations
const translations = {
    'en.sahih': { name: 'Sahih International', lang: 'English' },
    'en.pickthall': { name: 'Pickthall', lang: 'English' },
    'en.yusufali': { name: 'Yusuf Ali', lang: 'English' },
    'en.asad': { name: 'Muhammad Asad', lang: 'English' },
    'ar.alafasy': { name: 'Arabic (Alafasy)', lang: 'Arabic' }
};

// Topic categories for research
const quranTopics = {
    tawheed: {
        name: 'Tawheed (Oneness of Allah)',
        verses: [
            { surah: 112, ayah: 1, title: 'Allah is One' },
            { surah: 2, ayah: 255, title: 'Ayatul Kursi - The Throne Verse' },
            { surah: 59, ayah: 22, title: 'Names of Allah' },
            { surah: 6, ayah: 103, title: 'Vision cannot perceive Him' },
            { surah: 42, ayah: 11, title: 'Nothing is like Him' },
            { surah: 16, ayah: 51, title: 'Do not take two gods' }
        ]
    },
    prophets: {
        name: 'Stories of Prophets',
        verses: [
            { surah: 12, ayah: 1, title: 'Story of Yusuf (Joseph)' },
            { surah: 19, ayah: 16, title: 'Story of Maryam (Mary)' },
            { surah: 28, ayah: 7, title: 'Story of Musa (Moses)' },
            { surah: 21, ayah: 83, title: 'Story of Ayyub (Job)' },
            { surah: 37, ayah: 139, title: 'Story of Yunus (Jonah)' },
            { surah: 3, ayah: 42, title: 'Isa (Jesus) in Islam' }
        ]
    },
    afterlife: {
        name: 'Day of Judgment & Afterlife',
        verses: [
            { surah: 99, ayah: 1, title: 'The Earthquake' },
            { surah: 56, ayah: 1, title: 'The Inevitable Event' },
            { surah: 78, ayah: 1, title: 'The Great News' },
            { surah: 55, ayah: 46, title: 'Gardens of Paradise' },
            { surah: 3, ayah: 185, title: 'Every soul shall taste death' }
        ]
    },
    guidance: {
        name: 'Guidance & Wisdom',
        verses: [
            { surah: 2, ayah: 2, title: 'Guidance for the righteous' },
            { surah: 17, ayah: 82, title: 'Quran as healing' },
            { surah: 31, ayah: 13, title: 'Luqman\'s advice' },
            { surah: 49, ayah: 13, title: 'Equality of mankind' },
            { surah: 94, ayah: 5, title: 'With hardship comes ease' }
        ]
    },
    worship: {
        name: 'Prayer & Worship',
        verses: [
            { surah: 1, ayah: 1, title: 'Al-Fatihah - The Opening' },
            { surah: 2, ayah: 238, title: 'Guard your prayers' },
            { surah: 29, ayah: 45, title: 'Prayer prevents evil' },
            { surah: 4, ayah: 103, title: 'Prayer at fixed times' },
            { surah: 20, ayah: 14, title: 'Establish prayer for My remembrance' }
        ]
    },
    ethics: {
        name: 'Ethics & Character',
        verses: [
            { surah: 17, ayah: 23, title: 'Kindness to parents' },
            { surah: 49, ayah: 11, title: 'Do not mock others' },
            { surah: 2, ayah: 195, title: 'Do good to others' },
            { surah: 16, ayah: 90, title: 'Justice and kindness' },
            { surah: 25, ayah: 63, title: 'Servants of the Most Merciful' }
        ]
    },
    science: {
        name: 'Scientific Miracles',
        verses: [
            { surah: 21, ayah: 30, title: 'Big Bang - Heaven and Earth joined' },
            { surah: 51, ayah: 47, title: 'Expanding Universe' },
            { surah: 23, ayah: 12, title: 'Stages of human creation' },
            { surah: 55, ayah: 19, title: 'Two seas that do not mix' },
            { surah: 36, ayah: 38, title: 'Sun runs its course' },
            { surah: 86, ayah: 11, title: 'The returning sky' }
        ]
    },
    women: {
        name: 'Women in Islam',
        verses: [
            { surah: 4, ayah: 1, title: 'Created from single soul' },
            { surah: 9, ayah: 71, title: 'Believing men and women' },
            { surah: 33, ayah: 35, title: 'Equal rewards' },
            { surah: 3, ayah: 195, title: 'Equal in deeds' },
            { surah: 16, ayah: 97, title: 'Good life for believers' }
        ]
    }
};

// Tafsir notes for important verses
const tafsirNotes = {
    '2:255': {
        title: 'Ayatul Kursi - The Throne Verse',
        explanation: 'This is the greatest verse in the Quran according to the Prophet Muhammad (peace be upon him). It describes Allah\'s absolute sovereignty, His eternal nature (Al-Hayy Al-Qayyum), His complete knowledge, and His supreme authority over the heavens and earth. The verse affirms that nothing happens except by His will and permission.',
        keyPoints: [
            'Allah is Al-Hayy (The Ever-Living) and Al-Qayyum (The Self-Sustaining)',
            'Neither slumber nor sleep overtakes Him',
            'His Kursi (Throne/Knowledge) extends over the heavens and earth',
            'No one can intercede except by His permission',
            'He is Al-\'Aliyy (The Most High) and Al-\'Azeem (The Most Great)'
        ],
        relatedVerses: ['3:2', '20:111', '40:65']
    },
    '112:1': {
        title: 'Surah Al-Ikhlas - Pure Monotheism',
        explanation: 'This surah equals one-third of the Quran in meaning because it contains the essence of Tawheed (Islamic monotheism). It refutes all forms of polytheism and establishes Allah\'s absolute oneness and uniqueness.',
        keyPoints: [
            'Allah is Ahad (The One and Only)',
            'Allah is As-Samad (The Self-Sufficient, upon whom all depend)',
            'He neither begets nor was begotten - refuting Christian and pagan beliefs',
            'Nothing is comparable to Him'
        ],
        relatedVerses: ['2:163', '6:101', '19:35']
    },
    '1:1': {
        title: 'Al-Fatihah - The Opening',
        explanation: 'This is the greatest surah in the Quran. It is recited in every unit of prayer and is a comprehensive summary of Islam: praise of Allah, acknowledgment of the Day of Judgment, a declaration of worship and seeking help only from Allah, and a prayer for guidance.',
        keyPoints: [
            'Begins with Bismillah - In the name of Allah',
            'Al-Hamd - All praise belongs to Allah alone',
            'Ar-Rahman Ar-Raheem - The Most Gracious, The Most Merciful',
            'Malik Yawm ad-Deen - Master of the Day of Judgment',
            'Prayer for guidance to the Straight Path'
        ],
        relatedVerses: ['2:2', '6:161', '17:9']
    },
    '21:107': {
        title: 'Muhammad - A Mercy to the Worlds',
        explanation: 'This verse establishes that Prophet Muhammad (peace be upon him) was sent as a mercy not just for Muslims, but for all of creation - humans, jinn, animals, and all that exists. His message is one of compassion, justice, and guidance for all.',
        keyPoints: [
            'Universal message - not limited to Arabs or Muslims',
            'Mercy (Rahmah) is the defining characteristic of his mission',
            'Includes mercy for non-Muslims through just treatment',
            'Reflects Allah\'s mercy to all His creation'
        ],
        relatedVerses: ['3:159', '9:128', '68:4']
    }
};

class QuranReader {
    constructor() {
        this.currentSurah = 1;
        this.currentAyah = 1;
        this.maxAyah = 7;
        this.currentTranslation = 'en.sahih';
        this.bookmarks = this.loadBookmarks();
        this.searchResults = [];
        this.viewMode = 'verse'; // 'verse' or 'surah'

        this.init();
    }

    init() {
        this.surahSelect = document.getElementById('surah-select');
        this.ayahInput = document.getElementById('ayah-input');
        this.goButton = document.getElementById('go-btn');
        this.randomButton = document.getElementById('random-btn');
        this.verseDisplay = document.getElementById('verse-display');
        this.prevButton = document.getElementById('prev-btn');
        this.nextButton = document.getElementById('next-btn');

        this.populateSurahSelect();
        this.bindEvents();
        this.createResearchTools();
        this.loadRandomVerse();
    }

    createResearchTools() {
        // Add research tools section after the search section
        const searchSection = document.querySelector('.quran-search');
        if (!searchSection) return;

        const researchHTML = `
            <div class="research-tools" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e0e0e0;">
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; align-items: center;">
                    <div>
                        <label style="font-size: 0.9rem; color: var(--text-light);">Translation:</label>
                        <select id="translation-select" class="translation-select" style="padding: 0.5rem; border-radius: 8px; border: 2px solid #e0e0e0;">
                            <option value="en.sahih">Sahih International</option>
                            <option value="en.pickthall">Pickthall</option>
                            <option value="en.yusufali">Yusuf Ali</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.9rem; color: var(--text-light);">Topics:</label>
                        <select id="topic-select" style="padding: 0.5rem; border-radius: 8px; border: 2px solid #e0e0e0;">
                            <option value="">Browse by Topic</option>
                            <option value="tawheed">Tawheed (Oneness of Allah)</option>
                            <option value="prophets">Stories of Prophets</option>
                            <option value="afterlife">Day of Judgment</option>
                            <option value="guidance">Guidance & Wisdom</option>
                            <option value="worship">Prayer & Worship</option>
                            <option value="ethics">Ethics & Character</option>
                            <option value="science">Scientific Miracles</option>
                            <option value="women">Women in Islam</option>
                        </select>
                    </div>
                    <button id="read-surah-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem;">Read Full Surah</button>
                    <button id="bookmark-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem;">Bookmark</button>
                </div>
                <div style="margin-top: 1rem;">
                    <input type="text" id="quran-search" placeholder="Search Quran by keyword..." style="width: 100%; max-width: 400px; padding: 0.75rem; border-radius: 8px; border: 2px solid #e0e0e0;">
                </div>
            </div>
        `;

        searchSection.insertAdjacentHTML('beforeend', researchHTML);

        // Bind research tool events
        document.getElementById('translation-select')?.addEventListener('change', (e) => {
            this.currentTranslation = e.target.value;
            this.fetchVerse(this.currentSurah, this.currentAyah);
        });

        document.getElementById('topic-select')?.addEventListener('change', (e) => {
            if (e.target.value) {
                this.showTopicVerses(e.target.value);
            }
        });

        document.getElementById('read-surah-btn')?.addEventListener('click', () => {
            this.loadFullSurah(this.currentSurah);
        });

        document.getElementById('bookmark-btn')?.addEventListener('click', () => {
            this.toggleBookmark(this.currentSurah, this.currentAyah);
        });

        document.getElementById('quran-search')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchQuran(e.target.value);
            }
        });
    }

    populateSurahSelect() {
        if (!this.surahSelect) return;

        surahList.forEach(surah => {
            const option = document.createElement('option');
            option.value = surah.number;
            option.textContent = `${surah.number}. ${surah.name} (${surah.englishName})`;
            this.surahSelect.appendChild(option);
        });
    }

    bindEvents() {
        this.surahSelect?.addEventListener('change', () => {
            const surahNum = parseInt(this.surahSelect.value);
            const surah = surahList.find(s => s.number === surahNum);
            if (surah) {
                this.maxAyah = surah.verses;
                if (this.ayahInput) {
                    this.ayahInput.max = this.maxAyah;
                    this.ayahInput.value = 1;
                }
            }
        });

        this.goButton?.addEventListener('click', () => this.loadSpecificVerse());
        this.randomButton?.addEventListener('click', () => this.loadRandomVerse());
        this.prevButton?.addEventListener('click', () => this.loadPreviousVerse());
        this.nextButton?.addEventListener('click', () => this.loadNextVerse());

        this.ayahInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.loadSpecificVerse();
        });
    }

    async loadSpecificVerse() {
        const surah = parseInt(this.surahSelect?.value) || 1;
        const ayah = parseInt(this.ayahInput?.value) || 1;

        this.currentSurah = surah;
        this.currentAyah = ayah;
        this.viewMode = 'verse';

        try {
            await this.fetchVerse(surah, ayah);
        } catch (error) {
            console.error('Error loading specific verse:', error);
            this.showFallbackVerse();
        }
    }

    async loadRandomVerse() {
        const beautifulVerses = [
            { surah: 2, ayah: 255 }, { surah: 2, ayah: 286 }, { surah: 3, ayah: 185 },
            { surah: 21, ayah: 107 }, { surah: 55, ayah: 13 }, { surah: 94, ayah: 5 },
            { surah: 112, ayah: 1 }, { surah: 1, ayah: 1 }, { surah: 36, ayah: 1 },
            { surah: 67, ayah: 1 }, { surah: 93, ayah: 1 }, { surah: 103, ayah: 1 },
            { surah: 2, ayah: 152 }, { surah: 13, ayah: 28 }, { surah: 39, ayah: 53 },
            { surah: 49, ayah: 13 }, { surah: 31, ayah: 13 }, { surah: 17, ayah: 23 }
        ];

        const random = beautifulVerses[Math.floor(Math.random() * beautifulVerses.length)];
        this.currentSurah = random.surah;
        this.currentAyah = random.ayah;
        this.viewMode = 'verse';

        if (this.surahSelect) this.surahSelect.value = random.surah;
        if (this.ayahInput) this.ayahInput.value = random.ayah;

        try {
            await this.fetchVerse(random.surah, random.ayah);
        } catch (error) {
            console.error('Error loading random verse:', error);
            // Show a fallback verse if API fails
            this.showFallbackVerse();
        }
    }

    showFallbackVerse() {
        if (!this.verseDisplay) return;

        // Show a pre-loaded verse if API fails
        this.verseDisplay.innerHTML = `
            <p class="surah-name">Al-Fatihah (The Opening)</p>
            <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 2rem; line-height: 2;">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
                الرَّحْمَٰنِ الرَّحِيمِ
                مَالِكِ يَوْمِ الدِّينِ
                إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
                اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
                صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
            </p>
            <p class="translation-text">
                "In the name of Allah, the Most Gracious, the Most Merciful.
                All praise is due to Allah, Lord of the worlds.
                The Most Gracious, the Most Merciful.
                Master of the Day of Judgment.
                You alone we worship, and You alone we ask for help.
                Guide us to the straight path.
                The path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray."
            </p>
            <p class="verse-reference">Surah Al-Fatihah 1:1-7</p>
            <p style="margin-top: 1rem; padding: 1rem; background: var(--cream); border-radius: 8px; color: var(--text-light); font-size: 0.9rem;">
                Note: Unable to connect to Quran API. Please check your internet connection and try again.
                <br><br>
                <button onclick="window.quranReader?.loadRandomVerse()" class="btn btn-primary" style="margin-top: 0.5rem;">Try Again</button>
            </p>
        `;
    }

    async loadPreviousVerse() {
        if (this.viewMode === 'surah') {
            if (this.currentSurah > 1) {
                this.currentSurah--;
                await this.loadFullSurah(this.currentSurah);
            }
            return;
        }

        if (this.currentAyah > 1) {
            this.currentAyah--;
        } else if (this.currentSurah > 1) {
            this.currentSurah--;
            const surah = surahList.find(s => s.number === this.currentSurah);
            this.currentAyah = surah ? surah.verses : 1;
        }

        if (this.surahSelect) this.surahSelect.value = this.currentSurah;
        if (this.ayahInput) this.ayahInput.value = this.currentAyah;

        try {
            await this.fetchVerse(this.currentSurah, this.currentAyah);
        } catch (error) {
            console.error('Error loading previous verse:', error);
            this.showFallbackVerse();
        }
    }

    async loadNextVerse() {
        if (this.viewMode === 'surah') {
            if (this.currentSurah < 114) {
                this.currentSurah++;
                await this.loadFullSurah(this.currentSurah);
            }
            return;
        }

        const currentSurahData = surahList.find(s => s.number === this.currentSurah);
        const maxAyah = currentSurahData ? currentSurahData.verses : 1;

        if (this.currentAyah < maxAyah) {
            this.currentAyah++;
        } else if (this.currentSurah < 114) {
            this.currentSurah++;
            this.currentAyah = 1;
        }

        if (this.surahSelect) this.surahSelect.value = this.currentSurah;
        if (this.ayahInput) this.ayahInput.value = this.currentAyah;

        try {
            await this.fetchVerse(this.currentSurah, this.currentAyah);
        } catch (error) {
            console.error('Error loading next verse:', error);
            this.showFallbackVerse();
        }
    }

    async fetchVerse(surah, ayah) {
        if (!this.verseDisplay) return;

        // Show loading state (with fallback if Utils not defined)
        if (typeof Utils !== 'undefined' && Utils.showLoading) {
            Utils.showLoading(this.verseDisplay);
        } else {
            this.verseDisplay.innerHTML = '<div class="loading"><div class="loading-spinner"></div><span>Loading verse...</span></div>';
        }

        try {
            const [arabicRes, translationRes] = await Promise.all([
                fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`),
                fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/${this.currentTranslation}`)
            ]);

            const arabicData = await arabicRes.json();
            const translationData = await translationRes.json();

            if (arabicData.code === 200 && translationData.code === 200) {
                this.displayVerse(arabicData.data, translationData.data);
            } else {
                throw new Error('Verse not found');
            }
        } catch (error) {
            console.error('Quran API error:', error);
            // Re-throw so calling functions can handle with fallback
            throw error;
        }
    }

    displayVerse(arabicData, translationData) {
        const surahInfo = surahList.find(s => s.number === arabicData.surah.number);
        const verseKey = `${arabicData.surah.number}:${arabicData.numberInSurah}`;
        const tafsir = tafsirNotes[verseKey];
        const isBookmarked = this.isBookmarked(arabicData.surah.number, arabicData.numberInSurah);

        let tafsirHTML = '';
        if (tafsir) {
            tafsirHTML = `
                <div class="tafsir-section" style="margin-top: 2rem; padding: 1.5rem; background: var(--cream); border-radius: 12px; text-align: left;">
                    <h4 style="color: var(--primary-green); margin-bottom: 1rem;">Tafsir (Explanation)</h4>
                    <p style="margin-bottom: 1rem;">${tafsir.explanation}</p>
                    <h5 style="color: var(--primary-green); margin-bottom: 0.5rem;">Key Points:</h5>
                    <ul style="margin-left: 1.5rem;">
                        ${tafsir.keyPoints.map(point => `<li style="margin-bottom: 0.25rem;">${point}</li>`).join('')}
                    </ul>
                    ${tafsir.relatedVerses ? `
                        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-light);">
                            <strong>Related verses:</strong> ${tafsir.relatedVerses.join(', ')}
                        </p>
                    ` : ''}
                </div>
            `;
        }

        this.verseDisplay.innerHTML = `
            <div class="verse-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                <p class="surah-name">
                    ${arabicData.surah.englishName} (${arabicData.surah.name})
                    <br>
                    <span style="font-size: 0.9rem; color: var(--text-light);">
                        ${surahInfo?.englishName || ''} - ${surahInfo?.type || ''} - ${arabicData.surah.numberOfAyahs} verses
                    </span>
                </p>
                <span style="font-size: 1.5rem; cursor: pointer;" onclick="window.quranReader?.toggleBookmark(${arabicData.surah.number}, ${arabicData.numberInSurah})" title="Bookmark this verse">
                    ${isBookmarked ? '★' : '☆'}
                </span>
            </div>
            <p class="arabic-text">${arabicData.text}</p>
            <p class="translation-text">"${translationData.text}"</p>
            <p class="verse-reference">
                Surah ${arabicData.surah.englishName} ${arabicData.surah.number}:${arabicData.numberInSurah}
            </p>
            ${tafsirHTML}
            <div class="verse-actions" style="margin-top: 1.5rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="window.quranReader?.showCompareTranslations(${arabicData.surah.number}, ${arabicData.numberInSurah})" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                    Compare Translations
                </button>
                <button onclick="window.quranReader?.copyVerse()" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                    Copy Verse
                </button>
            </div>
        `;

        this.maxAyah = arabicData.surah.numberOfAyahs;
        this.lastArabicText = arabicData.text;
        this.lastTranslationText = translationData.text;
        this.lastReference = `Surah ${arabicData.surah.englishName} ${arabicData.surah.number}:${arabicData.numberInSurah}`;
    }

    async loadFullSurah(surahNumber) {
        if (!this.verseDisplay) return;

        this.viewMode = 'surah';
        this.currentSurah = surahNumber;
        Utils.showLoading(this.verseDisplay);

        try {
            const [arabicRes, translationRes] = await Promise.all([
                fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`),
                fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/${this.currentTranslation}`)
            ]);

            const arabicData = await arabicRes.json();
            const translationData = await translationRes.json();

            if (arabicData.code === 200 && translationData.code === 200) {
                this.displayFullSurah(arabicData.data, translationData.data);
            }
        } catch (error) {
            console.error('Error loading surah:', error);
            Utils.showError(this.verseDisplay, 'Could not load surah. Please try again.');
        }
    }

    displayFullSurah(arabicData, translationData) {
        const surahInfo = surahList.find(s => s.number === arabicData.number);

        let versesHTML = '';
        for (let i = 0; i < arabicData.ayahs.length; i++) {
            const arabicAyah = arabicData.ayahs[i];
            const translationAyah = translationData.ayahs[i];
            const isBookmarked = this.isBookmarked(arabicData.number, arabicAyah.numberInSurah);

            versesHTML += `
                <div class="surah-verse" style="padding: 1.5rem; margin-bottom: 1rem; background: var(--white); border-radius: 12px; border-left: 4px solid var(--primary-green);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span style="background: var(--primary-green); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem;">
                            ${arabicAyah.numberInSurah}
                        </span>
                        <span style="cursor: pointer;" onclick="window.quranReader?.toggleBookmark(${arabicData.number}, ${arabicAyah.numberInSurah})">
                            ${isBookmarked ? '★' : '☆'}
                        </span>
                    </div>
                    <p class="arabic-text" style="font-size: 1.6rem; margin-bottom: 1rem;">${arabicAyah.text}</p>
                    <p style="color: var(--text-dark); line-height: 1.8;">${translationAyah.text}</p>
                </div>
            `;
        }

        this.verseDisplay.innerHTML = `
            <div class="surah-header" style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: var(--primary-green);">${arabicData.englishName}</h2>
                <p class="arabic-font" style="font-size: 2rem; color: var(--gold);">${arabicData.name}</p>
                <p style="color: var(--text-light);">
                    ${surahInfo?.englishName || ''} - ${surahInfo?.type || ''} - ${arabicData.numberOfAyahs} verses
                </p>
                <button onclick="window.quranReader.viewMode='verse'; window.quranReader.fetchVerse(${arabicData.number}, 1);" class="btn btn-secondary" style="margin-top: 1rem; padding: 0.5rem 1rem;">
                    Switch to Verse View
                </button>
            </div>
            <div class="surah-content">
                ${versesHTML}
            </div>
        `;

        if (this.surahSelect) this.surahSelect.value = surahNumber;
    }

    showTopicVerses(topicKey) {
        const topic = quranTopics[topicKey];
        if (!topic || !this.verseDisplay) return;

        let versesHTML = topic.verses.map(v => `
            <div class="topic-verse" style="padding: 1rem; margin-bottom: 0.5rem; background: var(--white); border-radius: 8px; cursor: pointer;"
                 onclick="window.quranReader?.fetchVerse(${v.surah}, ${v.ayah}); document.getElementById('topic-select').value='';">
                <strong style="color: var(--primary-green);">${v.title}</strong>
                <br>
                <span style="color: var(--text-light); font-size: 0.9rem;">Surah ${v.surah}:${v.ayah}</span>
            </div>
        `).join('');

        this.verseDisplay.innerHTML = `
            <div class="topic-header" style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: var(--primary-green);">${topic.name}</h2>
                <p style="color: var(--text-light);">Click on any verse to read it</p>
            </div>
            <div class="topic-verses">
                ${versesHTML}
            </div>
        `;
    }

    async showCompareTranslations(surah, ayah) {
        if (!this.verseDisplay) return;

        Utils.showLoading(this.verseDisplay);

        try {
            const translationKeys = ['en.sahih', 'en.pickthall', 'en.yusufali'];
            const responses = await Promise.all([
                fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`),
                ...translationKeys.map(t => fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/${t}`))
            ]);

            const data = await Promise.all(responses.map(r => r.json()));
            const arabicData = data[0].data;

            let comparisonsHTML = '';
            for (let i = 1; i < data.length; i++) {
                const translation = data[i].data;
                const translationInfo = translations[translationKeys[i-1]];
                comparisonsHTML += `
                    <div style="padding: 1rem; background: var(--cream); border-radius: 8px; margin-bottom: 1rem;">
                        <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;">${translationInfo.name}</h4>
                        <p>"${translation.text}"</p>
                    </div>
                `;
            }

            this.verseDisplay.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 style="color: var(--primary-green);">Compare Translations</h3>
                    <p style="color: var(--text-light);">Surah ${arabicData.surah.englishName} ${surah}:${ayah}</p>
                </div>
                <div style="padding: 1.5rem; background: var(--white); border-radius: 12px; margin-bottom: 2rem;">
                    <p class="arabic-text" style="font-size: 1.8rem;">${arabicData.text}</p>
                </div>
                ${comparisonsHTML}
                <button onclick="window.quranReader?.fetchVerse(${surah}, ${ayah})" class="btn btn-primary" style="display: block; margin: 1rem auto;">
                    Back to Single View
                </button>
            `;
        } catch (error) {
            console.error('Error comparing translations:', error);
            Utils.showError(this.verseDisplay, 'Could not load translations.');
        }
    }

    async searchQuran(query) {
        if (!query || query.length < 3 || !this.verseDisplay) return;

        Utils.showLoading(this.verseDisplay);

        try {
            const response = await fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(query)}/all/en.sahih`);
            const data = await response.json();

            if (data.code === 200 && data.data.matches) {
                this.displaySearchResults(data.data.matches, query);
            } else {
                this.verseDisplay.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <h3>No results found for "${query}"</h3>
                        <p style="color: var(--text-light);">Try a different search term.</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Search error:', error);
            Utils.showError(this.verseDisplay, 'Search failed. Please try again.');
        }
    }

    displaySearchResults(matches, query) {
        const limitedMatches = matches.slice(0, 20); // Limit to 20 results

        let resultsHTML = limitedMatches.map(match => `
            <div class="search-result" style="padding: 1rem; margin-bottom: 0.5rem; background: var(--white); border-radius: 8px; cursor: pointer; border-left: 4px solid var(--primary-green);"
                 onclick="window.quranReader?.fetchVerse(${match.surah.number}, ${match.numberInSurah})">
                <strong style="color: var(--primary-green);">${match.surah.englishName} ${match.surah.number}:${match.numberInSurah}</strong>
                <p style="margin-top: 0.5rem;">${match.text}</p>
            </div>
        `).join('');

        this.verseDisplay.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="color: var(--primary-green);">Search Results for "${query}"</h3>
                <p style="color: var(--text-light);">${matches.length} verses found (showing first ${limitedMatches.length})</p>
            </div>
            <div class="search-results">
                ${resultsHTML}
            </div>
        `;
    }

    // Bookmark functions
    loadBookmarks() {
        try {
            return JSON.parse(localStorage.getItem('quran_bookmarks') || '[]');
        } catch {
            return [];
        }
    }

    saveBookmarks() {
        localStorage.setItem('quran_bookmarks', JSON.stringify(this.bookmarks));
    }

    isBookmarked(surah, ayah) {
        return this.bookmarks.some(b => b.surah === surah && b.ayah === ayah);
    }

    toggleBookmark(surah, ayah) {
        const index = this.bookmarks.findIndex(b => b.surah === surah && b.ayah === ayah);
        if (index >= 0) {
            this.bookmarks.splice(index, 1);
        } else {
            this.bookmarks.push({ surah, ayah, date: new Date().toISOString() });
        }
        this.saveBookmarks();
        // Refresh display
        if (this.viewMode === 'verse') {
            this.fetchVerse(this.currentSurah, this.currentAyah);
        } else {
            this.loadFullSurah(this.currentSurah);
        }
    }

    copyVerse() {
        const text = `${this.lastArabicText}\n\n"${this.lastTranslationText}"\n\n- ${this.lastReference}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Verse copied to clipboard!');
        }).catch(() => {
            alert('Could not copy verse.');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.quranReader = new QuranReader();
});
