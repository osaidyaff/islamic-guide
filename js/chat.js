// Islamic Guidance - AI Chat Logic
// Free Knowledge-Based Islamic Q&A System (No API Key Required)

// Comprehensive Islamic Knowledge Base
const islamicKnowledge = {
    // Five Pillars of Islam
    pillars: {
        keywords: ['pillar', 'pillars', 'five pillars', '5 pillars', 'arkan', 'foundation'],
        response: `**The Five Pillars of Islam** are the foundational acts of worship that every Muslim must follow:

**1. Shahada (Declaration of Faith)**
"أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله"
"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah."
This is the most fundamental belief in Islam - pure monotheism (Tawheed).

**2. Salah (Prayer)**
Five daily prayers performed at specific times: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Prayer is a direct connection between the worshipper and Allah.

**3. Zakat (Charitable Giving)**
Obligatory charity of 2.5% of one's savings given annually to those in need. It purifies wealth and helps build a just society.

**4. Sawm (Fasting)**
Fasting during the month of Ramadan from dawn to sunset. It teaches self-discipline, empathy for the poor, and gratitude to Allah.

**5. Hajj (Pilgrimage)**
The pilgrimage to Mecca, required once in a lifetime for those who are physically and financially able.

*"Islam is built upon five (pillars): testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving Zakat, performing Hajj, and fasting Ramadan."* - Sahih al-Bukhari`
    },

    // Shahada
    shahada: {
        keywords: ['shahada', 'declaration', 'testimony', 'faith', 'convert', 'revert', 'become muslim', 'accept islam', 'how to become'],
        response: `**The Shahada - Declaration of Faith**

The Shahada is the Islamic declaration of faith and the first pillar of Islam:

**In Arabic:**
"أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله"

**Transliteration:**
"Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah"

**Meaning:**
"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah."

**To Become Muslim:**
1. Sincerely believe in the meaning of the Shahada
2. Say it with conviction and understanding
3. That's it - you're Muslim! No formal ceremony required

The Shahada contains the essence of Islam:
- **Tawheed** (Oneness of God) - There is only one God worthy of worship
- **Prophethood** - Muhammad ﷺ is Allah's final messenger

After accepting Islam, the next steps are:
- Learn to pray (start with what you can)
- Learn about Islamic practices gradually
- Connect with a local Muslim community
- Keep learning and growing in faith

*Allah says: "So know that there is no god except Allah"* - Quran 47:19`
    },

    // Prayer/Salah
    prayer: {
        keywords: ['pray', 'prayer', 'salah', 'salat', 'namaz', 'how to pray', 'wudu', 'ablution', 'times'],
        response: `**Salah (Islamic Prayer)**

Prayer is the second pillar of Islam and the most important act of worship after the Shahada.

**The Five Daily Prayers:**
1. **Fajr** - Dawn prayer (2 units) - Before sunrise
2. **Dhuhr** - Midday prayer (4 units) - After sun passes zenith
3. **Asr** - Afternoon prayer (4 units) - Late afternoon
4. **Maghrib** - Sunset prayer (3 units) - Just after sunset
5. **Isha** - Night prayer (4 units) - After twilight disappears

**Basic Steps of Prayer:**
1. Make **Wudu** (ablution) - Ritual washing
2. Face the **Qibla** (direction of Kaaba in Mecca)
3. Make **intention** (Niyyah) in your heart
4. Say **"Allahu Akbar"** (Allah is Greatest) to begin
5. Recite **Surah Al-Fatihah** (opening chapter)
6. Perform **Ruku** (bowing) saying "Subhana Rabbiyal Azeem"
7. Stand up saying "Sami Allahu liman hamidah"
8. Perform **Sujud** (prostration) twice
9. Complete with **Tashahhud** and **Salam**

**Wudu (Ablution) Steps:**
1. Make intention
2. Wash hands (3 times)
3. Rinse mouth (3 times)
4. Clean nose (3 times)
5. Wash face (3 times)
6. Wash arms to elbows (3 times each)
7. Wipe head and ears
8. Wash feet to ankles (3 times each)

*"Indeed, prayer has been decreed upon the believers a decree of specified times."* - Quran 4:103`
    },

    // Fasting/Ramadan
    fasting: {
        keywords: ['fast', 'fasting', 'ramadan', 'sawm', 'siyam', 'iftar', 'suhoor', 'eid'],
        response: `**Fasting (Sawm) in Islam**

Fasting during Ramadan is the fourth pillar of Islam.

**What is Ramadan?**
Ramadan is the 9th month of the Islamic lunar calendar - the month when the Quran was first revealed to Prophet Muhammad ﷺ.

**Fasting Requirements:**
- Fast from dawn (Fajr) to sunset (Maghrib)
- Abstain from food, drink, and marital relations
- Focus on spiritual growth, extra prayers, and Quran reading

**Who Must Fast:**
- Every adult Muslim who is physically able
- Exceptions: sick, elderly, traveling, pregnant/nursing women, menstruating women

**Spiritual Benefits:**
- Develops self-control and discipline
- Builds empathy for the poor and hungry
- Purifies the soul
- Increases gratitude to Allah

**Key Terms:**
- **Suhoor** - Pre-dawn meal before fasting begins
- **Iftar** - Meal to break the fast at sunset
- **Tarawih** - Special night prayers during Ramadan
- **Laylatul Qadr** - Night of Decree (better than 1000 months)
- **Eid ul-Fitr** - Festival celebrating end of Ramadan

*"O you who believe! Fasting is prescribed for you as it was prescribed for those before you, that you may become righteous."* - Quran 2:183`
    },

    // Zakat
    zakat: {
        keywords: ['zakat', 'charity', 'zakah', 'alms', 'sadaqah', 'giving', 'poor'],
        response: `**Zakat - Obligatory Charity**

Zakat is the third pillar of Islam - obligatory charity that purifies wealth.

**Who Must Pay:**
Muslims who possess wealth above the Nisab (minimum threshold) for one lunar year.

**How Much:**
2.5% of total savings and wealth annually

**Nisab (Minimum Threshold):**
- Gold: 85 grams
- Silver: 595 grams
- Cash: Equivalent value

**Who Can Receive Zakat:**
The Quran specifies 8 categories (Surah At-Tawbah 9:60):
1. The poor (Fuqara)
2. The needy (Masakin)
3. Zakat collectors
4. Those whose hearts need reconciliation
5. Freeing slaves
6. Those in debt
7. In the cause of Allah
8. Travelers in need

**Zakat vs Sadaqah:**
- **Zakat** - Obligatory, fixed amount (2.5%), specific recipients
- **Sadaqah** - Voluntary, any amount, anyone can receive

**Benefits:**
- Purifies wealth and soul
- Helps eliminate poverty
- Creates social solidarity
- Brings blessings to wealth

*"Take from their wealth a charity by which you purify them and cause them increase."* - Quran 9:103`
    },

    // Hajj
    hajj: {
        keywords: ['hajj', 'pilgrimage', 'mecca', 'makkah', 'kaaba', 'umrah'],
        response: `**Hajj - The Pilgrimage to Mecca**

Hajj is the fifth pillar of Islam - the sacred pilgrimage to Mecca.

**Who Must Perform:**
Every Muslim who is physically and financially able, at least once in their lifetime.

**When:**
During the Islamic month of Dhul Hijjah (8th-12th/13th)

**Key Rituals of Hajj:**
1. **Ihram** - State of purity, wearing white garments
2. **Tawaf** - Circling the Kaaba 7 times
3. **Sa'i** - Walking between Safa and Marwa (7 times)
4. **Day of Arafah** - Standing at Mount Arafah (most important)
5. **Muzdalifah** - Collecting pebbles, overnight stay
6. **Jamarat** - Stoning the pillars (symbolic rejection of Satan)
7. **Sacrifice** - Animal sacrifice (Qurbani)
8. **Farewell Tawaf** - Final circling of Kaaba

**Umrah vs Hajj:**
- **Umrah** - Lesser pilgrimage, any time of year
- **Hajj** - Major pilgrimage, specific days only

**Spiritual Significance:**
- Unity of Muslims worldwide
- Equality - all wear same simple clothes
- Commemorates Prophet Ibrahim and his family
- Forgiveness of sins

*"And proclaim to the people the Hajj; they will come to you on foot and on every lean camel."* - Quran 22:27`
    },

    // Prophet Muhammad
    prophet: {
        keywords: ['prophet', 'muhammad', 'messenger', 'rasool', 'pbuh', 'sunnah', 'biography', 'life'],
        response: `**Prophet Muhammad ﷺ**

Muhammad ibn Abdullah (570-632 CE) is the final prophet and messenger of Allah.

**Early Life:**
- Born in Mecca in 570 CE (Year of the Elephant)
- Orphaned young - father died before birth, mother at age 6
- Raised by grandfather, then uncle Abu Talib
- Known as "Al-Amin" (The Trustworthy) and "As-Sadiq" (The Truthful)

**Prophethood:**
- Received first revelation at age 40 in Cave Hira
- Angel Jibreel (Gabriel) delivered Allah's message
- Preached for 23 years (13 in Mecca, 10 in Medina)
- Faced persecution but remained patient and merciful

**Character:**
- Most merciful of creation
- Never took revenge for personal matters
- Kind to children, women, and animals
- Simple lifestyle despite being leader
- Best example for all humanity

**Key Events:**
- First revelation (610 CE)
- Night Journey (Isra and Mi'raj)
- Migration to Medina (Hijra - 622 CE)
- Treaty of Hudaybiyyah
- Conquest of Mecca (peaceful)
- Farewell Pilgrimage and Sermon

**His Message:**
- Worship Allah alone (Tawheed)
- Follow the Quran and Sunnah
- Good character and mercy to all
- Justice and equality
- Preparation for the afterlife

*"And We have not sent you, [O Muhammad], except as a mercy to the worlds."* - Quran 21:107`
    },

    // Quran
    quran: {
        keywords: ['quran', 'koran', 'book', 'scripture', 'revelation', 'surah', 'ayah', 'verse'],
        response: `**The Holy Quran**

The Quran is the literal word of Allah, revealed to Prophet Muhammad ﷺ through Angel Jibreel over 23 years.

**Key Facts:**
- 114 Surahs (chapters)
- 6,236 Ayahs (verses)
- Revealed in Arabic
- Memorized by millions word-for-word
- Unchanged for over 1,400 years

**Types of Surahs:**
- **Meccan** - Revealed in Mecca (focus on faith, afterlife)
- **Medinan** - Revealed in Medina (focus on law, society)

**Notable Surahs:**
- **Al-Fatihah** - The Opening (recited in every prayer)
- **Al-Baqarah** - The Cow (longest surah)
- **Ayatul Kursi** (2:255) - Greatest verse
- **Al-Ikhlas** - Equal to 1/3 of Quran in meaning
- **Ya-Sin** - Heart of the Quran

**Themes:**
- Oneness of Allah (Tawheed)
- Stories of prophets
- Guidance for all aspects of life
- Day of Judgment and afterlife
- Laws and ethics
- Scientific miracles

**Preservation:**
*"Indeed, it is We who sent down the Quran and indeed, We will be its guardian."* - Quran 15:9

**Reading & Understanding:**
- Read with Tajweed (proper pronunciation)
- Study Tafsir (commentary) for deeper understanding
- Listen to recitations by famous Qaris
- Reflect on meanings and apply to life`
    },

    // Jesus in Islam
    jesus: {
        keywords: ['jesus', 'isa', 'issa', 'christ', 'christian', 'christianity', 'mary', 'maryam'],
        response: `**Jesus (Isa) in Islam**

Muslims love and revere Jesus (Isa) as one of the greatest prophets of Allah.

**What Muslims Believe:**
✓ Jesus was a mighty prophet of Allah
✓ Born miraculously to Virgin Mary (Maryam)
✓ Performed miracles by Allah's permission
✓ Spoke in the cradle defending his mother
✓ Will return before the Day of Judgment
✓ He is the Messiah (Al-Masih)

**What Muslims Don't Believe:**
✗ Jesus is not God or son of God
✗ He was not crucified (saved by Allah)
✗ No concept of original sin
✗ No divine trinity

**Jesus's Miracles (by Allah's permission):**
- Born of a virgin
- Spoke as an infant
- Healed the blind and lepers
- Raised the dead
- Made birds from clay that came alive

**Mary (Maryam) in Islam:**
- An entire chapter (Surah 19) named after her
- One of the greatest women in history
- Example of piety and devotion
- Mentioned more in Quran than in the Bible

**Key Verses:**
*"The Messiah, son of Mary, was not but a messenger; [other] messengers have passed on before him. And his mother was a supporter of truth."* - Quran 5:75

*"Indeed, the example of Jesus to Allah is like that of Adam. He created Him from dust; then He said to him, 'Be,' and he was."* - Quran 3:59`
    },

    // Islam meaning
    meaning: {
        keywords: ['what is islam', 'meaning', 'definition', 'about islam', 'basics', 'introduction', 'explain'],
        response: `**What is Islam?**

Islam is the world's second-largest religion with nearly 2 billion followers (Muslims).

**Meaning of "Islam":**
The Arabic word "Islam" means "submission to the will of God" and comes from "Salam" meaning "peace."

**Core Beliefs (Six Articles of Faith):**
1. **Belief in Allah** - One God, the Creator
2. **Belief in Angels** - Created from light, serve Allah
3. **Belief in Holy Books** - Quran, Torah, Gospel, Psalms
4. **Belief in Prophets** - From Adam to Muhammad
5. **Belief in Day of Judgment** - Accountability for deeds
6. **Belief in Divine Decree** - Allah's knowledge and will

**Who is Allah?**
- The Arabic word for God
- Same God worshipped by Abraham, Moses, Jesus
- One, Unique, All-Powerful, All-Knowing
- Has 99 Beautiful Names describing His attributes

**Key Characteristics:**
- **Monotheism** - Strict belief in One God
- **Universal** - For all humanity, not one race
- **Complete Way of Life** - Guidance for all matters
- **Balance** - Between spiritual and material life

**Common Greeting:**
"Assalamu Alaikum" - Peace be upon you

*"Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."* - Quran 112:1-4`
    },

    // Women in Islam
    women: {
        keywords: ['women', 'woman', 'female', 'hijab', 'veil', 'rights', 'marriage', 'wife'],
        response: `**Women in Islam**

Islam elevated the status of women over 1,400 years ago, granting them rights that took centuries for other societies to recognize.

**Rights Given to Women:**
- Right to education
- Right to own property
- Right to work and earn
- Right to choose spouse
- Right to divorce
- Right to inheritance
- Right to keep maiden name

**Spiritual Equality:**
*"Indeed, the Muslim men and Muslim women... for them Allah has prepared forgiveness and a great reward."* - Quran 33:35

**Honored Roles:**
- **As Daughter** - Raising daughters brings paradise
- **As Mother** - Paradise is at the feet of mothers
- **As Wife** - "Best of you are those best to their wives"
- **As Scholar** - Many female scholars in Islamic history

**Hijab (Modest Dress):**
- Sign of dignity and identity
- Protection from objectification
- Focus on character over appearance
- Commanded for both men and women (in different ways)

**Marriage in Islam:**
- Mutual consent required
- Mahr (dowry) given to the bride
- Husband must provide for wife
- Wife's earnings are her own
- Kindness and compassion are obligatory

**Famous Muslim Women:**
- Khadijah - First Muslim, successful businesswoman
- Aisha - Great scholar, taught many companions
- Fatimah - Beloved daughter of the Prophet
- Maryam (Mary) - Honored in the Quran

*"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."* - Quran 30:21`
    },

    // Jihad
    jihad: {
        keywords: ['jihad', 'holy war', 'violence', 'terrorism', 'fight', 'war'],
        response: `**Understanding Jihad**

Jihad is one of the most misunderstood concepts in Islam.

**Literal Meaning:**
"Jihad" means "struggle" or "striving" - NOT "holy war"

**Types of Jihad:**

**1. Jihad of the Self (Greatest Jihad)**
- Struggling against one's own desires
- Improving character and faith
- Resisting temptation and sin
- The Prophet ﷺ called this the "greater jihad"

**2. Jihad of Knowledge**
- Seeking and spreading beneficial knowledge
- Speaking truth against falsehood
- Teaching and educating

**3. Jihad of Wealth**
- Spending in good causes
- Supporting those in need
- Building community institutions

**4. Jihad of Defense (Lesser Jihad)**
- Only defensive warfare
- Strict rules of engagement
- Last resort after all peaceful options

**Rules of Warfare in Islam:**
✓ Only in self-defense
✓ No killing civilians, women, children, elderly
✓ No destroying crops, trees, or animals
✓ No forcing anyone to convert
✓ If enemy seeks peace, accept it
✓ Treat prisoners humanely

**What Islam Condemns:**
✗ Terrorism of any kind
✗ Killing innocent people
✗ Suicide attacks
✗ Aggression and oppression

*"Fight in the way of Allah those who fight you but do not transgress. Indeed, Allah does not like transgressors."* - Quran 2:190

*"There is no compulsion in religion."* - Quran 2:256`
    },

    // Afterlife
    afterlife: {
        keywords: ['afterlife', 'death', 'heaven', 'hell', 'jannah', 'jahannam', 'paradise', 'judgment', 'grave'],
        response: `**Life After Death in Islam**

Belief in the afterlife (Akhirah) is one of the six articles of Islamic faith.

**Stages After Death:**

**1. Death (Mawt)**
- Soul is taken by the Angel of Death
- Every soul will taste death

**2. Life in the Grave (Barzakh)**
- Intermediate state until Day of Judgment
- Questioned by angels about faith
- Experience of grave depends on deeds

**3. Day of Judgment (Yawm al-Qiyamah)**
- All creation resurrected
- Deeds presented in books
- Scales weigh good vs evil deeds
- Crossing the Sirat (bridge)

**4. Eternal Destination:**

**Jannah (Paradise):**
- Gardens with rivers flowing
- No pain, sadness, or fatigue
- Eternal youth and beauty
- Whatever the soul desires
- Greatest reward: seeing Allah

**Jahannam (Hellfire):**
- Punishment for disbelief and evil
- Severe torment
- Some Muslims may eventually leave
- Disbelievers remain eternally

**How to Attain Paradise:**
- Sincere faith in Allah and His Messenger
- Good deeds and righteous actions
- Repentance and seeking forgiveness
- Following the Quran and Sunnah

*"Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection. So whoever is drawn away from the Fire and admitted to Paradise has attained success."* - Quran 3:185`
    },

    // Angels
    angels: {
        keywords: ['angel', 'angels', 'jibril', 'gabriel', 'mikail', 'malak'],
        response: `**Angels in Islam**

Belief in angels (Malaika) is one of the six articles of Islamic faith.

**Nature of Angels:**
- Created from light
- Do not have free will
- Obey Allah perfectly
- Cannot disobey
- Different from humans and jinn

**Notable Angels:**

**1. Jibreel (Gabriel)**
- Greatest of angels
- Brought revelation to prophets
- Delivered Quran to Muhammad ﷺ

**2. Mikail (Michael)**
- In charge of provisions and rain
- Controls sustenance for creation

**3. Israfil**
- Will blow the trumpet on Day of Judgment
- Signals resurrection

**4. Izrail (Angel of Death)**
- Takes souls at time of death
- By Allah's command

**5. Munkar and Nakir**
- Question people in the grave
- Ask about faith and deeds

**6. Kiraman Katibin**
- Recording angels
- Write all deeds (good and bad)
- One on right, one on left

**7. Malik**
- Guardian of Hellfire

**8. Ridwan**
- Guardian of Paradise

**Angels and Humans:**
- Angels made prostrate to Adam (except Iblis)
- Angels surround gatherings of remembrance
- Angels pray for believers

*"The angels and the Spirit descend therein by permission of their Lord for every matter."* - Quran 97:4`
    },

    // Repentance
    repentance: {
        keywords: ['repent', 'repentance', 'forgive', 'forgiveness', 'sin', 'tawbah', 'mistake', 'bad deed'],
        response: `**Repentance (Tawbah) in Islam**

Allah is Al-Ghafur (The Most Forgiving) and At-Tawwab (The Acceptor of Repentance).

**Allah's Mercy:**
*"Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."* - Quran 39:53

**Conditions for Sincere Repentance:**
1. **Stop the sin immediately**
2. **Feel genuine remorse** (not just fear of punishment)
3. **Firm intention** not to return to the sin
4. **Make amends** if rights of others were violated
5. **Repent before death** or sunrise from the west

**Beautiful Hadiths on Forgiveness:**

*"Allah is more pleased with the repentance of His servant than a person who finds his lost camel in a desert."* - Sahih Muslim

*"By the One in Whose Hand is my soul, if you did not sin, Allah would replace you with people who would sin and seek forgiveness, and He would forgive them."* - Sahih Muslim

**When to Repent:**
- Immediately after sinning
- No need to wait for special time
- Can repent unlimited times
- Never too late (until death)

**Dua for Forgiveness:**
"Astaghfirullah" - I seek forgiveness from Allah
"Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lana kunan minal khasireen" - Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.

**Remember:**
- No sin is too great for Allah to forgive
- Despair in Allah's mercy is itself a sin
- Sincere repentance erases past sins completely`
    },

    // Halal/Haram
    halal: {
        keywords: ['halal', 'haram', 'forbidden', 'allowed', 'food', 'alcohol', 'pork', 'permissible', 'eat'],
        response: `**Halal and Haram in Islam**

Islam provides guidance on what is permissible (Halal) and forbidden (Haram).

**Halal (Permissible):**
✓ Most foods and drinks
✓ All seafood
✓ Vegetables, fruits, grains
✓ Properly slaughtered animals
✓ Lawful business and trade
✓ Marriage and family relations

**Haram (Forbidden):**

**Food & Drink:**
✗ Pork and pork products
✗ Alcohol and intoxicants
✗ Blood
✗ Carrion (dead animals)
✗ Animals not slaughtered properly
✗ Carnivorous animals with fangs

**Actions:**
✗ Lying, cheating, stealing
✗ Adultery and fornication
✗ Murder and oppression
✗ Gambling
✗ Interest (Riba/usury)
✗ Magic and fortune-telling

**Slaughter Requirements (Dhabihah):**
- Say "Bismillah Allahu Akbar"
- Swift cut to minimize suffering
- Blood must drain out
- Animal should not see the blade

**Wisdom Behind Prohibitions:**
- Health benefits (no pork, no blood)
- Mental clarity (no alcohol)
- Social protection (no gambling)
- Economic justice (no interest)

**General Principle:**
*"He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah."* - Quran 2:173

When in doubt, it's better to avoid.`
    },

    // Islamic greeting
    greeting: {
        keywords: ['hello', 'hi', 'salam', 'assalam', 'greeting', 'hey'],
        response: `**Wa Alaikum Assalam wa Rahmatullahi wa Barakatuh!**
(And upon you be peace, mercy, and blessings of Allah!)

Welcome to Islamic Guidance! I'm here to help answer your questions about Islam.

**You can ask me about:**
- The Five Pillars of Islam
- How to pray (Salah)
- Prophet Muhammad ﷺ
- The Holy Quran
- Islamic beliefs and practices
- Women in Islam
- Common misconceptions
- And much more!

Feel free to type your question, and I'll do my best to provide helpful, accurate information based on the Quran and authentic Sunnah.

*"Invite to the way of your Lord with wisdom and good instruction."* - Quran 16:125`
    },

    // Thank you
    thanks: {
        keywords: ['thank', 'thanks', 'jazak', 'shukr', 'appreciate'],
        response: `**Wa iyyakum! (And to you too!)**

You're most welcome! It's my pleasure to help you learn about Islam.

**In Arabic, we say:**
- "Jazak Allahu Khayran" (May Allah reward you with goodness) - when thanking someone
- "Wa iyyak" / "Wa iyyakum" - the response (And to you too)

**The Prophet ﷺ said:**
*"Whoever does not thank people has not thanked Allah."* - Sunan Abu Dawud

If you have more questions, feel free to ask! May Allah bless you with knowledge and guidance.`
    }
};

// Function to find the best matching response
function findBestMatch(query) {
    const lowerQuery = query.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const [key, data] of Object.entries(islamicKnowledge)) {
        let score = 0;
        for (const keyword of data.keywords) {
            if (lowerQuery.includes(keyword.toLowerCase())) {
                // Longer keyword matches are more specific
                score += keyword.length;
            }
        }
        if (score > highestScore) {
            highestScore = score;
            bestMatch = data;
        }
    }

    return bestMatch;
}

// Generate response based on query
function generateResponse(query) {
    const match = findBestMatch(query);

    if (match) {
        return match.response;
    }

    // Default response for unmatched queries
    return `**Thank you for your question!**

I appreciate your interest in learning about Islam. While I may not have a specific answer prepared for that exact question, here are some suggestions:

**Popular Topics I Can Help With:**
- The Five Pillars of Islam
- How to become Muslim (Shahada)
- Prayer (Salah) and how to pray
- Fasting and Ramadan
- Prophet Muhammad ﷺ
- The Holy Quran
- Jesus (Isa) in Islam
- Women's rights in Islam
- Understanding Jihad
- Life after death
- Halal and Haram
- Repentance and forgiveness

**Try asking questions like:**
- "What are the five pillars of Islam?"
- "How do I pray?"
- "What does Islam say about Jesus?"
- "How do I become Muslim?"
- "What is Ramadan?"

*"And say: My Lord, increase me in knowledge."* - Quran 20:114

May Allah guide us all to the straight path!`;
}

class IslamicChat {
    constructor() {
        this.messages = [];
        this.isProcessing = false;
        this.init();
    }

    init() {
        // DOM elements
        this.chatContainer = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.sendButton = document.getElementById('send-btn');
        this.apiSetupSection = document.getElementById('api-setup');
        this.chatSection = document.getElementById('chat-section');

        // Always show chat (no API key needed!)
        this.showChat();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    bindEvents() {
        if (this.sendButton) {
            this.sendButton.addEventListener('click', () => this.sendMessage());
        }

        if (this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    }

    showChat() {
        if (this.apiSetupSection) this.apiSetupSection.style.display = 'none';
        if (this.chatSection) this.chatSection.style.display = 'flex';
    }

    addWelcomeMessage() {
        const welcomeMessages = [
            "Assalamu Alaikum! (Peace be upon you)",
            "Welcome to the Islamic Guidance chat. I'm here to help answer your questions about Islam based on the Quran and authentic Sunnah.",
            "Feel free to ask anything - whether you're curious about Islamic beliefs, practices, history, or want to understand more about this beautiful religion.",
            "How can I help you today?"
        ];

        welcomeMessages.forEach((msg, index) => {
            setTimeout(() => {
                this.addMessage(msg, 'assistant');
            }, index * 300);
        });
    }

    addMessage(content, role) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;

        // Process content to highlight Arabic text and formatting
        let processedContent = content;

        // Convert markdown-style formatting
        processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        processedContent = processedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert line breaks
        processedContent = processedContent.replace(/\n/g, '<br>');

        // Highlight Quran references
        processedContent = processedContent.replace(
            /(Surah [A-Za-z-]+ \d+:\d+(-\d+)?)/gi,
            '<span style="color: var(--gold); font-weight: 600;">$1</span>'
        );

        processedContent = processedContent.replace(
            /(Quran \d+:\d+(-\d+)?)/gi,
            '<span style="color: var(--gold); font-weight: 600;">$1</span>'
        );

        // Detect Arabic text and style it
        processedContent = processedContent.replace(
            /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\s]*)/g,
            '<span class="arabic-quote">$1</span>'
        );

        // Style checkmarks and X marks
        processedContent = processedContent.replace(/✓/g, '<span style="color: #27ae60;">✓</span>');
        processedContent = processedContent.replace(/✗/g, '<span style="color: #e74c3c;">✗</span>');

        messageDiv.innerHTML = processedContent;
        this.chatContainer?.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addLoadingMessage() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message assistant loading-message';
        loadingDiv.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <span>Thinking...</span>
            </div>
        `;
        this.chatContainer?.appendChild(loadingDiv);
        this.scrollToBottom();
        return loadingDiv;
    }

    removeLoadingMessage(element) {
        element?.remove();
    }

    scrollToBottom() {
        if (this.chatContainer) {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        }
    }

    async sendMessage() {
        if (this.isProcessing) return;

        const userMessage = this.chatInput?.value?.trim();
        if (!userMessage) return;

        // Clear input
        if (this.chatInput) this.chatInput.value = '';

        // Add user message to chat
        this.addMessage(userMessage, 'user');

        // Add to message history
        this.messages.push({
            role: 'user',
            content: userMessage
        });

        // Show loading
        this.isProcessing = true;
        const loadingElement = this.addLoadingMessage();

        // Simulate thinking delay for natural feel
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

        // Generate response
        const response = generateResponse(userMessage);

        this.removeLoadingMessage(loadingElement);
        this.addMessage(response, 'assistant');

        this.messages.push({
            role: 'assistant',
            content: response
        });

        this.isProcessing = false;
    }
}

// Suggested questions for users
const suggestedQuestions = [
    "What are the Five Pillars of Islam?",
    "Who is Prophet Muhammad ﷺ?",
    "What does the Quran teach?",
    "How do Muslims pray?",
    "What is the meaning of Islam?",
    "What do Muslims believe about Jesus?",
    "Why do Muslims fast during Ramadan?",
    "How do I become Muslim?"
];

function loadSuggestedQuestions() {
    const container = document.getElementById('suggested-questions');
    if (!container) return;

    suggestedQuestions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.margin = '0.25rem';
        btn.style.padding = '0.5rem 1rem';
        btn.style.fontSize = '0.9rem';
        btn.textContent = question;
        btn.onclick = () => {
            const input = document.getElementById('chat-input');
            if (input) {
                input.value = question;
                input.focus();
            }
        };
        container.appendChild(btn);
    });
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IslamicChat();
    loadSuggestedQuestions();
});
