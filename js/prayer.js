// Islamic Guidance - Prayer Times Logic
// Using Aladhan API (free, no key required)

class PrayerTimes {
    constructor() {
        this.prayers = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        this.prayerArabic = {
            'Fajr': 'الفجر',
            'Sunrise': 'الشروق',
            'Dhuhr': 'الظهر',
            'Asr': 'العصر',
            'Maghrib': 'المغرب',
            'Isha': 'العشاء'
        };
        this.prayerMeanings = {
            'Fajr': 'Dawn prayer before sunrise',
            'Sunrise': 'Time when Fajr ends',
            'Dhuhr': 'Midday prayer',
            'Asr': 'Afternoon prayer',
            'Maghrib': 'Sunset prayer',
            'Isha': 'Night prayer'
        };

        this.location = null;
        this.timings = null;

        this.init();
    }

    async init() {
        this.locationInfo = document.getElementById('location-info');
        this.prayerGrid = document.getElementById('prayer-grid');
        this.dateDisplay = document.getElementById('date-display');

        // Show loading
        if (this.prayerGrid) {
            Utils.showLoading(this.prayerGrid);
        }

        // Try to get location
        await this.getLocation();
    }

    async getLocation() {
        if ("geolocation" in navigator) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 300000 // 5 minutes cache
                    });
                });

                this.location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                await this.fetchPrayerTimes();
                await this.getLocationName();

            } catch (error) {
                console.error('Geolocation error:', error);
                this.showLocationError();
            }
        } else {
            this.showLocationError();
        }
    }

    async getLocationName() {
        try {
            // Using a simple reverse geocoding approach
            const response = await fetch(
                `https://api.aladhan.com/v1/timingsByCity?city=&country=&latitude=${this.location.lat}&longitude=${this.location.lng}`
            );
            const data = await response.json();

            if (data.data && data.data.meta) {
                const meta = data.data.meta;
                this.updateLocationInfo(`${meta.timezone || 'Your Location'}`);
            }
        } catch (error) {
            this.updateLocationInfo(`Lat: ${this.location.lat.toFixed(2)}, Lng: ${this.location.lng.toFixed(2)}`);
        }
    }

    updateLocationInfo(text) {
        if (this.locationInfo) {
            this.locationInfo.innerHTML = `
                <h3 style="color: var(--primary-green); margin-bottom: 0.5rem;">Your Location</h3>
                <p>${text}</p>
                <button id="refresh-location" class="btn btn-secondary" style="margin-top: 0.5rem; padding: 0.5rem 1rem;">
                    Refresh Location
                </button>
            `;

            document.getElementById('refresh-location')?.addEventListener('click', () => {
                this.init();
            });
        }
    }

    showLocationError() {
        if (this.locationInfo) {
            this.locationInfo.innerHTML = `
                <h3 style="color: var(--primary-green);">Location Access Needed</h3>
                <p>Please allow location access to see accurate prayer times for your area.</p>
                <button id="retry-location" class="btn btn-primary" style="margin-top: 1rem;">
                    Allow Location
                </button>
                <div style="margin-top: 1.5rem;">
                    <p style="margin-bottom: 0.5rem;">Or enter a city manually:</p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                        <input type="text" id="city-input" placeholder="City name" style="padding: 0.5rem; border-radius: 8px; border: 2px solid #e0e0e0;">
                        <input type="text" id="country-input" placeholder="Country" style="padding: 0.5rem; border-radius: 8px; border: 2px solid #e0e0e0;">
                        <button id="search-city" class="btn btn-green" style="padding: 0.5rem 1rem;">Search</button>
                    </div>
                </div>
            `;

            document.getElementById('retry-location')?.addEventListener('click', () => {
                this.getLocation();
            });

            document.getElementById('search-city')?.addEventListener('click', () => {
                const city = document.getElementById('city-input')?.value;
                const country = document.getElementById('country-input')?.value;
                if (city && country) {
                    this.fetchPrayerTimesByCity(city, country);
                }
            });
        }

        if (this.prayerGrid) {
            this.prayerGrid.innerHTML = '<p style="text-align: center; padding: 2rem;">Waiting for location...</p>';
        }
    }

    async fetchPrayerTimes() {
        try {
            const today = new Date();
            const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

            const response = await fetch(
                `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${this.location.lat}&longitude=${this.location.lng}&method=2`
            );
            const data = await response.json();

            if (data.code === 200 && data.data) {
                this.timings = data.data.timings;
                this.displayDate(data.data.date);
                this.displayPrayerTimes();
            } else {
                throw new Error('Invalid response');
            }
        } catch (error) {
            console.error('Prayer times error:', error);
            if (this.prayerGrid) {
                Utils.showError(this.prayerGrid, 'Could not fetch prayer times. Please try again.');
            }
        }
    }

    async fetchPrayerTimesByCity(city, country) {
        try {
            Utils.showLoading(this.prayerGrid);

            const today = new Date();
            const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

            const response = await fetch(
                `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`
            );
            const data = await response.json();

            if (data.code === 200 && data.data) {
                this.timings = data.data.timings;
                this.location = {
                    lat: data.data.meta.latitude,
                    lng: data.data.meta.longitude
                };

                this.displayDate(data.data.date);
                this.displayPrayerTimes();
                this.updateLocationInfo(`${city}, ${country}`);
            } else {
                throw new Error('City not found');
            }
        } catch (error) {
            console.error('City prayer times error:', error);
            Utils.showError(this.prayerGrid, 'City not found. Please check the spelling and try again.');
        }
    }

    displayDate(dateData) {
        if (this.dateDisplay && dateData) {
            const hijri = dateData.hijri;
            const gregorian = dateData.gregorian;

            this.dateDisplay.innerHTML = `
                <div style="background: var(--white); padding: 1.5rem; border-radius: 12px; text-align: center; margin-bottom: 1.5rem;">
                    <h3 style="color: var(--primary-green); margin-bottom: 0.5rem;">
                        ${gregorian.weekday.en}, ${gregorian.day} ${gregorian.month.en} ${gregorian.year}
                    </h3>
                    <p style="color: var(--gold); font-size: 1.2rem; font-family: 'Amiri', serif;">
                        ${hijri.day} ${hijri.month.en} ${hijri.year} AH
                    </p>
                    <p style="color: var(--gold); font-family: 'Amiri', serif; font-size: 1.5rem; margin-top: 0.25rem;">
                        ${hijri.month.ar}
                    </p>
                </div>
            `;
        }
    }

    displayPrayerTimes() {
        if (!this.prayerGrid || !this.timings) return;

        const currentPrayer = this.getCurrentPrayer();

        let html = '';
        this.prayers.forEach(prayer => {
            const time = this.timings[prayer];
            const isCurrent = prayer === currentPrayer;

            html += `
                <div class="prayer-card ${isCurrent ? 'current' : ''}">
                    <p class="arabic-name" style="font-family: 'Amiri', serif;">${this.prayerArabic[prayer]}</p>
                    <h3>${prayer}</h3>
                    <p class="time">${Utils.formatTime12h(time)}</p>
                    <p style="font-size: 0.8rem; opacity: 0.7; margin-top: 0.25rem;">${this.prayerMeanings[prayer]}</p>
                </div>
            `;
        });

        this.prayerGrid.innerHTML = html;
    }

    getCurrentPrayer() {
        if (!this.timings) return null;

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const prayerMinutes = {};
        this.prayers.forEach(prayer => {
            const [hours, minutes] = this.timings[prayer].split(':').map(Number);
            prayerMinutes[prayer] = hours * 60 + minutes;
        });

        // Find current prayer (the most recent prayer time that has passed)
        let currentPrayer = 'Isha'; // Default to Isha if before Fajr

        for (let i = 0; i < this.prayers.length; i++) {
            const prayer = this.prayers[i];
            const nextPrayer = this.prayers[i + 1];

            if (currentMinutes >= prayerMinutes[prayer]) {
                if (!nextPrayer || currentMinutes < prayerMinutes[nextPrayer]) {
                    currentPrayer = prayer;
                    break;
                }
            }
        }

        // Handle case before Fajr
        if (currentMinutes < prayerMinutes['Fajr']) {
            currentPrayer = 'Isha';
        }

        return currentPrayer;
    }

}

// Prayer explanation content
const prayerInfo = {
    importance: `
        <h3>The Importance of Salah (Prayer)</h3>
        <p>Prayer is the second pillar of Islam and was the first act of worship made obligatory.
        The Prophet Muhammad ﷺ said: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer."</p>
        <p>Prayer is a direct connection between the worshipper and Allah - no intermediaries needed.</p>
    `,
    times: `
        <h3>The Five Daily Prayers</h3>
        <ul>
            <li><strong>Fajr (Dawn)</strong> - 2 units (rak'ah) - Before sunrise</li>
            <li><strong>Dhuhr (Midday)</strong> - 4 units - After the sun passes its zenith</li>
            <li><strong>Asr (Afternoon)</strong> - 4 units - Late afternoon</li>
            <li><strong>Maghrib (Sunset)</strong> - 3 units - Just after sunset</li>
            <li><strong>Isha (Night)</strong> - 4 units - After twilight disappears</li>
        </ul>
    `
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new PrayerTimes();
});
