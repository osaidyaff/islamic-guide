// Islamic Guidance - Multi-language Support

const translations = {
    en: {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        // Navigation
        navHome: 'Home',
        navAskAi: 'Ask AI',
        navJourney: 'Your Journey',
        navPrayerTimes: 'Prayer Times',
        navQuran: 'Quran',
        navHadith: 'Hadith',

        // Home Page
        homeWelcome: 'Welcome to Your Path of Peace',
        homeDesc: 'Discover the beauty of Islam - a religion of peace, mercy, and guidance for all of humanity. Whether you\'re curious, seeking answers, or deepening your faith, we\'re here to help.',
        homeStartJourney: 'Start Your Journey',
        homeAskQuestions: 'Ask Questions',
        homeExploreLearn: 'Explore & Learn',
        homeExploreDesc: 'Everything you need to understand and embrace Islam',

        // Feature Cards
        cardAiTitle: 'AI Assistant',
        cardAiDesc: 'Ask any question about Islam and receive knowledgeable, respectful answers powered by AI.',
        cardAiBtn: 'Start Chatting',
        cardJourneyTitle: 'Guided Journey',
        cardJourneyDesc: 'An interactive path based on your beliefs and questions, guiding you toward understanding Islam.',
        cardJourneyBtn: 'Begin Journey',
        cardPrayerTitle: 'Prayer Times',
        cardPrayerDesc: 'Get accurate prayer times for your location and learn about the importance of Salah.',
        cardPrayerBtn: 'View Times',
        cardQuranTitle: 'Holy Quran',
        cardQuranDesc: 'Read the Quran with translations, explore verses, and understand the divine message.',
        cardQuranBtn: 'Read Quran',
        cardHadithTitle: 'Hadith Library',
        cardHadithDesc: 'Explore authentic sayings of Prophet Muhammad with full references and chains of narration.',
        cardHadithBtn: 'Browse Hadith',

        // Wisdom Section
        wisdomTitle: 'Wisdom from the Prophet',
        wisdomDesc: 'Daily Hadith - Sayings of Prophet Muhammad (peace be upon him)',

        // What is Islam Section
        islamTitle: 'What is Islam?',
        islamDesc: 'The basics of the world\'s fastest-growing religion',
        pillarTitle: 'The Five Pillars',
        beliefTitle: 'Core Beliefs',
        peaceTitle: 'Peace & Mercy',
        peaceDesc: 'Islam means "submission to God" and is derived from the word "Salam" (peace). Muslims greet each other with "Assalamu Alaikum" - Peace be upon you. The religion emphasizes mercy, justice, and compassion for all creation.',

        // CTA Section
        ctaTitle: 'Ready to Learn More?',
        ctaDesc: 'Start your personalized journey to understanding Islam based on your unique questions and background.',
        ctaBtn: 'Begin Your Journey',

        // Footer
        footerMade: 'Made with love for the sake of Allah',

        // Chat Page
        chatTitle: 'Islamic Knowledge Assistant',
        chatSubtitle: 'Ask any question about Islam - Quran, Hadith, practices, and more',
        chatChangeKey: 'Change API Key',
        chatPlaceholder: 'Type your question about Islam...',
        chatSend: 'Send',
        chatSetupTitle: 'Setup AI Assistant',
        chatSetupDesc: 'To use the AI chat, you need an OpenAI API key. Your key is stored locally in your browser and never sent to our servers.',
        chatHowTo: 'How to get an API key:',
        chatSaveKey: 'Save API Key',
        chatKeyNote: 'Your API key is stored securely in your browser\'s local storage. We never see or store your key on our servers.',

        // Journey Page
        journeyTitle: 'Begin Your Journey',
        journeyLoading: 'Loading your personalized path to understanding Islam...',
        journeyBack: 'Go Back',

        // Prayer Page
        prayerTitle: 'Prayer Times',
        prayerLocation: 'Your Location',
        prayerRefresh: 'Refresh Location',
        prayerQiblaTitle: 'Qibla Direction',
        prayerQiblaDesc: 'The direction to face during prayer (towards Kaaba in Mecca)',
        prayerFromNorth: 'from North',
        prayerFaceDir: 'Face this direction when praying',
        prayerImportance: 'The Importance of Salah',
        prayerImportanceDesc: 'Prayer is the second pillar of Islam and was the first act of worship made obligatory. The Prophet Muhammad (peace be upon him) said: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer."',
        prayerFiveTitle: 'The Five Daily Prayers',
        prayerQiblaCardTitle: 'Qibla - The Direction',
        prayerQiblaCardDesc: 'Muslims around the world face the Kaaba in Mecca when praying. This unified direction symbolizes the unity of all Muslims worshipping One God together.',
        prayerNewTitle: 'New to Prayer?',
        prayerNewDesc: 'Learning to pray is a beautiful journey',
        prayerStepsTitle: 'Basic Steps of Prayer',
        prayerHelp: 'Ask AI for Help Learning Prayer',

        // Quran Page
        quranTitle: 'Holy Quran',
        quranExplore: 'Explore the Quran',
        quranSelectSurah: 'Select Surah',
        quranVerse: 'Verse #',
        quranGo: 'Go',
        quranRandom: 'Random Verse',
        quranPrev: 'Previous Verse',
        quranNext: 'Next Verse',
        quranAboutTitle: 'About the Holy Quran',
        quranAboutDesc: 'The final revelation from Allah to mankind',
        quranWhatIs: 'What is the Quran?',
        quranWhatIsDesc: 'The Quran is the literal word of Allah, revealed to Prophet Muhammad (peace be upon him) through Angel Jibreel (Gabriel) over 23 years. It contains 114 chapters (Surahs) and over 6,000 verses (Ayahs).',
        quranPreserved: 'Perfectly Preserved',
        quranPreservedDesc: 'The Quran is the only religious scripture that has been preserved in its original language, letter by letter, for over 1,400 years. Millions of Muslims have memorized it entirely.',
        quranGuidance: 'Guidance for All',
        quranGuidanceDesc: 'The Quran provides guidance on all aspects of life: worship, family, business, justice, and spirituality. It is a mercy and healing for the hearts of believers.',
        quranNotable: 'Notable Surahs',
        quranNotableDesc: 'Some chapters hold special significance',
        quranAskAi: 'Ask AI About Quran Verses',

        // Hadith Page
        hadithTitle: 'Hadith Library',
        hadithSubtitle: 'Authentic sayings of Prophet Muhammad (peace be upon him)',
        hadithSearch: 'Search hadith by text, narrator, or source...',
        hadithAll: 'All Categories',
        hadithFaith: 'Faith & Belief',
        hadithWorship: 'Worship',
        hadithCharacter: 'Character & Manners',
        hadithFamily: 'Family & Relations',
        hadithSociety: 'Society & Justice',
        hadithKnowledge: 'Knowledge & Learning',
        hadithDaily: 'Daily Life',
        hadithHereafter: 'Hereafter',
        hadithNarrator: 'Narrator',
        hadithSource: 'Source',
        hadithReference: 'Reference',
        hadithGrading: 'Grading',
        hadithUnderstanding: 'Understanding Hadith',
        hadithUnderstandingDesc: 'The second source of Islamic guidance after the Quran',
        hadithCollections: 'Major Hadith Collections',

        // Common
        loading: 'Loading...',
        error: 'An error occurred. Please try again.'
    },

    ar: {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        // Navigation
        navHome: 'الرئيسية',
        navAskAi: 'اسأل الذكاء',
        navJourney: 'رحلتك',
        navPrayerTimes: 'مواقيت الصلاة',
        navQuran: 'القرآن',
        navHadith: 'الحديث',

        // Home Page
        homeWelcome: 'مرحباً بك في طريق السلام',
        homeDesc: 'اكتشف جمال الإسلام - دين السلام والرحمة والهداية للبشرية جمعاء. سواء كنت فضولياً أو تبحث عن إجابات أو تعمق إيمانك، نحن هنا للمساعدة.',
        homeStartJourney: 'ابدأ رحلتك',
        homeAskQuestions: 'اطرح أسئلة',
        homeExploreLearn: 'استكشف وتعلم',
        homeExploreDesc: 'كل ما تحتاجه لفهم الإسلام واعتناقه',

        // Feature Cards
        cardAiTitle: 'مساعد الذكاء الاصطناعي',
        cardAiDesc: 'اطرح أي سؤال عن الإسلام واحصل على إجابات معرفية ومحترمة.',
        cardAiBtn: 'ابدأ المحادثة',
        cardJourneyTitle: 'رحلة موجهة',
        cardJourneyDesc: 'مسار تفاعلي بناءً على معتقداتك وأسئلتك، يرشدك نحو فهم الإسلام.',
        cardJourneyBtn: 'ابدأ الرحلة',
        cardPrayerTitle: 'مواقيت الصلاة',
        cardPrayerDesc: 'احصل على أوقات الصلاة الدقيقة لموقعك وتعرف على أهمية الصلاة.',
        cardPrayerBtn: 'عرض الأوقات',
        cardQuranTitle: 'القرآن الكريم',
        cardQuranDesc: 'اقرأ القرآن مع الترجمات، واستكشف الآيات، وافهم الرسالة الإلهية.',
        cardQuranBtn: 'اقرأ القرآن',
        cardHadithTitle: 'مكتبة الحديث',
        cardHadithDesc: 'استكشف أحاديث النبي الصحيحة مع المراجع الكاملة والأسانيد.',
        cardHadithBtn: 'تصفح الأحاديث',

        // Wisdom Section
        wisdomTitle: 'من حكمة النبي',
        wisdomDesc: 'حديث اليوم - من أقوال النبي محمد صلى الله عليه وسلم',

        // What is Islam Section
        islamTitle: 'ما هو الإسلام؟',
        islamDesc: 'أساسيات أسرع الأديان نمواً في العالم',
        pillarTitle: 'أركان الإسلام الخمسة',
        beliefTitle: 'أركان الإيمان',
        peaceTitle: 'السلام والرحمة',
        peaceDesc: 'الإسلام يعني "الاستسلام لله" ومشتق من كلمة "سلام". يحيي المسلمون بعضهم بـ "السلام عليكم". يؤكد الدين على الرحمة والعدل والرأفة لجميع المخلوقات.',

        // CTA Section
        ctaTitle: 'هل أنت مستعد لمعرفة المزيد؟',
        ctaDesc: 'ابدأ رحلتك الشخصية لفهم الإسلام بناءً على أسئلتك وخلفيتك الفريدة.',
        ctaBtn: 'ابدأ رحلتك',

        // Footer
        footerMade: 'صُنع بحب لوجه الله',

        // Chat Page
        chatTitle: 'مساعد المعرفة الإسلامية',
        chatSubtitle: 'اطرح أي سؤال عن الإسلام - القرآن، الحديث، العبادات، وأكثر',
        chatChangeKey: 'تغيير مفتاح API',
        chatPlaceholder: 'اكتب سؤالك عن الإسلام...',
        chatSend: 'إرسال',
        chatSetupTitle: 'إعداد مساعد الذكاء الاصطناعي',
        chatSetupDesc: 'لاستخدام المحادثة الذكية، تحتاج إلى مفتاح OpenAI API. يتم تخزين مفتاحك محلياً في متصفحك.',
        chatHowTo: 'كيفية الحصول على مفتاح API:',
        chatSaveKey: 'حفظ المفتاح',
        chatKeyNote: 'يتم تخزين مفتاح API الخاص بك بشكل آمن في متصفحك. نحن لا نرى أو نخزن مفتاحك على خوادمنا.',

        // Journey Page
        journeyTitle: 'ابدأ رحلتك',
        journeyLoading: 'جارٍ تحميل مسارك الشخصي لفهم الإسلام...',
        journeyBack: 'رجوع',

        // Prayer Page
        prayerTitle: 'مواقيت الصلاة',
        prayerLocation: 'موقعك',
        prayerRefresh: 'تحديث الموقع',
        prayerQiblaTitle: 'اتجاه القبلة',
        prayerQiblaDesc: 'الاتجاه الذي تواجهه أثناء الصلاة (نحو الكعبة في مكة)',
        prayerFromNorth: 'من الشمال',
        prayerFaceDir: 'واجه هذا الاتجاه عند الصلاة',
        prayerImportance: 'أهمية الصلاة',
        prayerImportanceDesc: 'الصلاة هي الركن الثاني من أركان الإسلام وكانت أول عبادة فُرضت. قال النبي محمد صلى الله عليه وسلم: "أول ما يُحاسب عليه العبد يوم القيامة الصلاة."',
        prayerFiveTitle: 'الصلوات الخمس',
        prayerQiblaCardTitle: 'القبلة - الاتجاه',
        prayerQiblaCardDesc: 'يتجه المسلمون حول العالم نحو الكعبة في مكة عند الصلاة. هذا الاتجاه الموحد يرمز لوحدة جميع المسلمين في عبادة الله الواحد.',
        prayerNewTitle: 'جديد على الصلاة؟',
        prayerNewDesc: 'تعلم الصلاة رحلة جميلة',
        prayerStepsTitle: 'الخطوات الأساسية للصلاة',
        prayerHelp: 'اسأل الذكاء الاصطناعي للمساعدة في تعلم الصلاة',

        // Quran Page
        quranTitle: 'القرآن الكريم',
        quranExplore: 'استكشف القرآن',
        quranSelectSurah: 'اختر السورة',
        quranVerse: 'رقم الآية',
        quranGo: 'اذهب',
        quranRandom: 'آية عشوائية',
        quranPrev: 'الآية السابقة',
        quranNext: 'الآية التالية',
        quranAboutTitle: 'عن القرآن الكريم',
        quranAboutDesc: 'الوحي الأخير من الله للبشرية',
        quranWhatIs: 'ما هو القرآن؟',
        quranWhatIsDesc: 'القرآن هو كلام الله الحرفي، أُنزل على النبي محمد صلى الله عليه وسلم عبر الملك جبريل على مدى 23 سنة. يحتوي على 114 سورة وأكثر من 6000 آية.',
        quranPreserved: 'محفوظ تماماً',
        quranPreservedDesc: 'القرآن هو الكتاب المقدس الوحيد الذي حُفظ بلغته الأصلية، حرفاً حرفاً، لأكثر من 1400 سنة. ملايين المسلمين حفظوه كاملاً.',
        quranGuidance: 'هداية للجميع',
        quranGuidanceDesc: 'يوفر القرآن التوجيه في جميع جوانب الحياة: العبادة، الأسرة، التجارة، العدل، والروحانية. إنه رحمة وشفاء لقلوب المؤمنين.',
        quranNotable: 'سور مميزة',
        quranNotableDesc: 'بعض السور لها أهمية خاصة',
        quranAskAi: 'اسأل الذكاء الاصطناعي عن آيات القرآن',

        // Hadith Page
        hadithTitle: 'مكتبة الحديث',
        hadithSubtitle: 'أحاديث صحيحة للنبي محمد صلى الله عليه وسلم',
        hadithSearch: 'ابحث في الأحاديث بالنص أو الراوي أو المصدر...',
        hadithAll: 'جميع الفئات',
        hadithFaith: 'الإيمان والعقيدة',
        hadithWorship: 'العبادات',
        hadithCharacter: 'الأخلاق والآداب',
        hadithFamily: 'الأسرة والعلاقات',
        hadithSociety: 'المجتمع والعدل',
        hadithKnowledge: 'العلم والتعلم',
        hadithDaily: 'الحياة اليومية',
        hadithHereafter: 'الآخرة',
        hadithNarrator: 'الراوي',
        hadithSource: 'المصدر',
        hadithReference: 'المرجع',
        hadithGrading: 'الدرجة',
        hadithUnderstanding: 'فهم الحديث',
        hadithUnderstandingDesc: 'المصدر الثاني للتوجيه الإسلامي بعد القرآن',
        hadithCollections: 'مجموعات الحديث الرئيسية',

        // Common
        loading: 'جارٍ التحميل...',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى.'
    },

    fr: {
        code: 'fr',
        name: 'Français',
        dir: 'ltr',
        // Navigation
        navHome: 'Accueil',
        navAskAi: 'Demander IA',
        navJourney: 'Votre Parcours',
        navPrayerTimes: 'Heures de Prière',
        navQuran: 'Coran',
        navHadith: 'Hadith',

        // Home Page
        homeWelcome: 'Bienvenue sur Votre Chemin de Paix',
        homeDesc: 'Découvrez la beauté de l\'Islam - une religion de paix, de miséricorde et de guidance pour toute l\'humanité.',
        homeStartJourney: 'Commencer Votre Parcours',
        homeAskQuestions: 'Poser des Questions',
        homeExploreLearn: 'Explorer et Apprendre',
        homeExploreDesc: 'Tout ce dont vous avez besoin pour comprendre l\'Islam',

        // Feature Cards
        cardAiTitle: 'Assistant IA',
        cardAiDesc: 'Posez n\'importe quelle question sur l\'Islam et recevez des réponses éclairées.',
        cardAiBtn: 'Commencer à Discuter',
        cardJourneyTitle: 'Parcours Guidé',
        cardJourneyDesc: 'Un chemin interactif basé sur vos croyances et questions.',
        cardJourneyBtn: 'Commencer le Parcours',
        cardPrayerTitle: 'Heures de Prière',
        cardPrayerDesc: 'Obtenez les heures de prière précises pour votre emplacement.',
        cardPrayerBtn: 'Voir les Heures',
        cardQuranTitle: 'Saint Coran',
        cardQuranDesc: 'Lisez le Coran avec des traductions, explorez les versets.',
        cardQuranBtn: 'Lire le Coran',
        cardHadithTitle: 'Bibliothèque Hadith',
        cardHadithDesc: 'Explorez les paroles authentiques du Prophète Muhammad.',
        cardHadithBtn: 'Parcourir les Hadiths',

        // Wisdom Section
        wisdomTitle: 'Sagesse du Prophète',
        wisdomDesc: 'Hadith du Jour - Paroles du Prophète Muhammad (paix soit sur lui)',

        // What is Islam Section
        islamTitle: 'Qu\'est-ce que l\'Islam?',
        islamDesc: 'Les bases de la religion à la croissance la plus rapide au monde',
        pillarTitle: 'Les Cinq Piliers',
        beliefTitle: 'Croyances Fondamentales',
        peaceTitle: 'Paix et Miséricorde',
        peaceDesc: 'Islam signifie "soumission à Dieu" et est dérivé du mot "Salam" (paix). Les musulmans se saluent avec "Assalamu Alaikum" - La paix soit sur vous.',

        // CTA Section
        ctaTitle: 'Prêt à en Apprendre Plus?',
        ctaDesc: 'Commencez votre parcours personnalisé pour comprendre l\'Islam.',
        ctaBtn: 'Commencer Votre Parcours',

        // Footer
        footerMade: 'Fait avec amour pour l\'amour d\'Allah',

        // Chat Page
        chatTitle: 'Assistant de Connaissance Islamique',
        chatSubtitle: 'Posez n\'importe quelle question sur l\'Islam',
        chatChangeKey: 'Changer la Clé API',
        chatPlaceholder: 'Tapez votre question sur l\'Islam...',
        chatSend: 'Envoyer',
        chatSetupTitle: 'Configuration de l\'Assistant IA',
        chatSetupDesc: 'Pour utiliser le chat IA, vous avez besoin d\'une clé API OpenAI.',
        chatHowTo: 'Comment obtenir une clé API:',
        chatSaveKey: 'Enregistrer la Clé',
        chatKeyNote: 'Votre clé API est stockée en sécurité dans votre navigateur.',

        // Journey Page
        journeyTitle: 'Commencez Votre Parcours',
        journeyLoading: 'Chargement de votre chemin personnalisé...',
        journeyBack: 'Retour',

        // Prayer Page
        prayerTitle: 'Heures de Prière',
        prayerLocation: 'Votre Emplacement',
        prayerRefresh: 'Actualiser',
        prayerQiblaTitle: 'Direction de la Qibla',
        prayerQiblaDesc: 'La direction à faire face pendant la prière',
        prayerFromNorth: 'du Nord',
        prayerFaceDir: 'Faites face à cette direction pour prier',
        prayerImportance: 'L\'Importance de la Salah',
        prayerImportanceDesc: 'La prière est le deuxième pilier de l\'Islam.',
        prayerFiveTitle: 'Les Cinq Prières Quotidiennes',
        prayerQiblaCardTitle: 'Qibla - La Direction',
        prayerQiblaCardDesc: 'Les musulmans du monde entier font face à la Kaaba à la Mecque lors de la prière.',
        prayerNewTitle: 'Nouveau à la Prière?',
        prayerNewDesc: 'Apprendre à prier est un beau voyage',
        prayerStepsTitle: 'Étapes de Base de la Prière',
        prayerHelp: 'Demander à l\'IA pour Apprendre la Prière',

        // Quran Page
        quranTitle: 'Saint Coran',
        quranExplore: 'Explorer le Coran',
        quranSelectSurah: 'Sélectionner Sourate',
        quranVerse: 'Verset #',
        quranGo: 'Aller',
        quranRandom: 'Verset Aléatoire',
        quranPrev: 'Verset Précédent',
        quranNext: 'Verset Suivant',
        quranAboutTitle: 'À Propos du Saint Coran',
        quranAboutDesc: 'La révélation finale d\'Allah à l\'humanité',
        quranWhatIs: 'Qu\'est-ce que le Coran?',
        quranWhatIsDesc: 'Le Coran est la parole littérale d\'Allah.',
        quranPreserved: 'Parfaitement Préservé',
        quranPreservedDesc: 'Le Coran est la seule écriture religieuse préservée dans sa langue originale.',
        quranGuidance: 'Guidance pour Tous',
        quranGuidanceDesc: 'Le Coran fournit des conseils sur tous les aspects de la vie.',
        quranNotable: 'Sourates Notables',
        quranNotableDesc: 'Certains chapitres ont une signification spéciale',
        quranAskAi: 'Demander à l\'IA sur les Versets',

        // Hadith Page
        hadithTitle: 'Bibliothèque Hadith',
        hadithSubtitle: 'Paroles authentiques du Prophète Muhammad',
        hadithSearch: 'Rechercher hadith...',
        hadithAll: 'Toutes les Catégories',
        hadithFaith: 'Foi et Croyance',
        hadithWorship: 'Adoration',
        hadithCharacter: 'Caractère et Manières',
        hadithFamily: 'Famille et Relations',
        hadithSociety: 'Société et Justice',
        hadithKnowledge: 'Connaissance',
        hadithDaily: 'Vie Quotidienne',
        hadithHereafter: 'Au-delà',
        hadithNarrator: 'Narrateur',
        hadithSource: 'Source',
        hadithReference: 'Référence',
        hadithGrading: 'Classification',
        hadithUnderstanding: 'Comprendre le Hadith',
        hadithUnderstandingDesc: 'La deuxième source de guidance islamique',
        hadithCollections: 'Collections Majeures de Hadith',

        // Common
        loading: 'Chargement...',
        error: 'Une erreur s\'est produite.'
    },

    ur: {
        code: 'ur',
        name: 'اردو',
        dir: 'rtl',
        // Navigation
        navHome: 'ہوم',
        navAskAi: 'AI سے پوچھیں',
        navJourney: 'آپ کا سفر',
        navPrayerTimes: 'نماز کے اوقات',
        navQuran: 'قرآن',
        navHadith: 'حدیث',

        // Home Page
        homeWelcome: 'امن کے راستے پر خوش آمدید',
        homeDesc: 'اسلام کی خوبصورتی دریافت کریں - امن، رحمت اور پوری انسانیت کے لیے ہدایت کا دین۔',
        homeStartJourney: 'اپنا سفر شروع کریں',
        homeAskQuestions: 'سوالات پوچھیں',
        homeExploreLearn: 'دریافت کریں اور سیکھیں',
        homeExploreDesc: 'اسلام کو سمجھنے کے لیے آپ کو جو کچھ درکار ہے',

        // Feature Cards
        cardAiTitle: 'AI اسسٹنٹ',
        cardAiDesc: 'اسلام کے بارے میں کوئی بھی سوال پوچھیں اور علمی جوابات حاصل کریں۔',
        cardAiBtn: 'بات چیت شروع کریں',
        cardJourneyTitle: 'رہنمائی شدہ سفر',
        cardJourneyDesc: 'آپ کے عقائد اور سوالات پر مبنی ایک انٹرایکٹو راستہ۔',
        cardJourneyBtn: 'سفر شروع کریں',
        cardPrayerTitle: 'نماز کے اوقات',
        cardPrayerDesc: 'اپنے مقام کے لیے درست نماز کے اوقات حاصل کریں۔',
        cardPrayerBtn: 'اوقات دیکھیں',
        cardQuranTitle: 'قرآن مجید',
        cardQuranDesc: 'ترجمے کے ساتھ قرآن پڑھیں، آیات دریافت کریں۔',
        cardQuranBtn: 'قرآن پڑھیں',
        cardHadithTitle: 'حدیث لائبریری',
        cardHadithDesc: 'نبی صلی اللہ علیہ وسلم کی صحیح احادیث دریافت کریں۔',
        cardHadithBtn: 'احادیث دیکھیں',

        // Wisdom Section
        wisdomTitle: 'نبی کی حکمت',
        wisdomDesc: 'آج کی حدیث - نبی محمد صلی اللہ علیہ وسلم کے اقوال',

        // What is Islam Section
        islamTitle: 'اسلام کیا ہے؟',
        islamDesc: 'دنیا کے تیزی سے بڑھتے ہوئے مذہب کی بنیادیں',
        pillarTitle: 'پانچ ارکان',
        beliefTitle: 'بنیادی عقائد',
        peaceTitle: 'امن اور رحمت',
        peaceDesc: 'اسلام کا مطلب "خدا کے سامنے جھکنا" ہے۔ مسلمان ایک دوسرے کو "السلام علیکم" سے مخاطب کرتے ہیں۔',

        // CTA Section
        ctaTitle: 'مزید سیکھنے کے لیے تیار ہیں؟',
        ctaDesc: 'اسلام کو سمجھنے کے لیے اپنا ذاتی سفر شروع کریں۔',
        ctaBtn: 'اپنا سفر شروع کریں',

        // Footer
        footerMade: 'اللہ کی رضا کے لیے محبت سے بنایا گیا',

        // Chat Page
        chatTitle: 'اسلامی علم کا اسسٹنٹ',
        chatSubtitle: 'اسلام کے بارے میں کوئی بھی سوال پوچھیں',
        chatChangeKey: 'API کلید تبدیل کریں',
        chatPlaceholder: 'اسلام کے بارے میں اپنا سوال لکھیں...',
        chatSend: 'بھیجیں',
        chatSetupTitle: 'AI اسسٹنٹ سیٹ اپ',
        chatSetupDesc: 'AI چیٹ استعمال کرنے کے لیے آپ کو OpenAI API کلید درکار ہے۔',
        chatHowTo: 'API کلید کیسے حاصل کریں:',
        chatSaveKey: 'کلید محفوظ کریں',
        chatKeyNote: 'آپ کی API کلید آپ کے براؤزر میں محفوظ طریقے سے ذخیرہ ہے۔',

        // Journey Page
        journeyTitle: 'اپنا سفر شروع کریں',
        journeyLoading: 'آپ کا ذاتی راستہ لوڈ ہو رہا ہے...',
        journeyBack: 'واپس جائیں',

        // Prayer Page
        prayerTitle: 'نماز کے اوقات',
        prayerLocation: 'آپ کا مقام',
        prayerRefresh: 'ریفریش کریں',
        prayerQiblaTitle: 'قبلے کی سمت',
        prayerQiblaDesc: 'نماز کے دوران جس سمت رخ کرنا ہے',
        prayerFromNorth: 'شمال سے',
        prayerFaceDir: 'نماز کے لیے اس سمت رخ کریں',
        prayerImportance: 'نماز کی اہمیت',
        prayerImportanceDesc: 'نماز اسلام کا دوسرا رکن ہے۔',
        prayerFiveTitle: 'پانچ روزانہ نمازیں',
        prayerQiblaCardTitle: 'قبلہ - سمت',
        prayerQiblaCardDesc: 'دنیا بھر کے مسلمان نماز کے وقت مکہ میں کعبہ کی طرف رخ کرتے ہیں۔',
        prayerNewTitle: 'نماز میں نئے ہیں؟',
        prayerNewDesc: 'نماز سیکھنا ایک خوبصورت سفر ہے',
        prayerStepsTitle: 'نماز کے بنیادی مراحل',
        prayerHelp: 'نماز سیکھنے میں مدد کے لیے AI سے پوچھیں',

        // Quran Page
        quranTitle: 'قرآن مجید',
        quranExplore: 'قرآن دریافت کریں',
        quranSelectSurah: 'سورہ منتخب کریں',
        quranVerse: 'آیت نمبر',
        quranGo: 'جائیں',
        quranRandom: 'کوئی بھی آیت',
        quranPrev: 'پچھلی آیت',
        quranNext: 'اگلی آیت',
        quranAboutTitle: 'قرآن مجید کے بارے میں',
        quranAboutDesc: 'اللہ کی طرف سے انسانیت کو آخری وحی',
        quranWhatIs: 'قرآن کیا ہے؟',
        quranWhatIsDesc: 'قرآن اللہ کا کلام ہے۔',
        quranPreserved: 'مکمل طور پر محفوظ',
        quranPreservedDesc: 'قرآن واحد مذہبی کتاب ہے جو اپنی اصل زبان میں محفوظ ہے۔',
        quranGuidance: 'سب کے لیے ہدایت',
        quranGuidanceDesc: 'قرآن زندگی کے تمام پہلوؤں پر رہنمائی فراہم کرتا ہے۔',
        quranNotable: 'قابل ذکر سورتیں',
        quranNotableDesc: 'کچھ سورتوں کی خاص اہمیت ہے',
        quranAskAi: 'قرآنی آیات کے بارے میں AI سے پوچھیں',

        // Hadith Page
        hadithTitle: 'حدیث لائبریری',
        hadithSubtitle: 'نبی محمد صلی اللہ علیہ وسلم کی صحیح احادیث',
        hadithSearch: 'حدیث تلاش کریں...',
        hadithAll: 'تمام زمرے',
        hadithFaith: 'ایمان اور عقیدہ',
        hadithWorship: 'عبادات',
        hadithCharacter: 'اخلاق و آداب',
        hadithFamily: 'خاندان اور تعلقات',
        hadithSociety: 'معاشرہ اور انصاف',
        hadithKnowledge: 'علم اور سیکھنا',
        hadithDaily: 'روزمرہ زندگی',
        hadithHereafter: 'آخرت',
        hadithNarrator: 'راوی',
        hadithSource: 'ماخذ',
        hadithReference: 'حوالہ',
        hadithGrading: 'درجہ',
        hadithUnderstanding: 'حدیث کو سمجھنا',
        hadithUnderstandingDesc: 'قرآن کے بعد اسلامی رہنمائی کا دوسرا ذریعہ',
        hadithCollections: 'اہم حدیث مجموعے',

        // Common
        loading: 'لوڈ ہو رہا ہے...',
        error: 'ایک خرابی ہوئی۔'
    },

    tr: {
        code: 'tr',
        name: 'Türkçe',
        dir: 'ltr',
        navHome: 'Ana Sayfa',
        navAskAi: 'AI\'ya Sor',
        navJourney: 'Yolculuğunuz',
        navPrayerTimes: 'Namaz Vakitleri',
        navQuran: 'Kur\'an',
        navHadith: 'Hadis',
        homeWelcome: 'Barış Yolunuza Hoş Geldiniz',
        homeDesc: 'İslam\'ın güzelliğini keşfedin - tüm insanlık için barış, merhamet ve rehberlik dini.',
        homeStartJourney: 'Yolculuğunuza Başlayın',
        homeAskQuestions: 'Soru Sorun',
        homeExploreLearn: 'Keşfet ve Öğren',
        homeExploreDesc: 'İslam\'ı anlamak için ihtiyacınız olan her şey',
        cardAiTitle: 'AI Asistan',
        cardAiDesc: 'İslam hakkında herhangi bir soru sorun ve bilgili cevaplar alın.',
        cardAiBtn: 'Sohbete Başla',
        cardJourneyTitle: 'Rehberli Yolculuk',
        cardJourneyDesc: 'İnançlarınıza ve sorularınıza dayalı etkileşimli bir yol.',
        cardJourneyBtn: 'Yolculuğa Başla',
        cardPrayerTitle: 'Namaz Vakitleri',
        cardPrayerDesc: 'Konumunuz için doğru namaz vakitlerini alın.',
        cardPrayerBtn: 'Vakitleri Gör',
        cardQuranTitle: 'Kur\'an-ı Kerim',
        cardQuranDesc: 'Çevirilerle Kur\'an\'ı okuyun, ayetleri keşfedin.',
        cardQuranBtn: 'Kur\'an Oku',
        cardHadithTitle: 'Hadis Kütüphanesi',
        cardHadithDesc: 'Hz. Muhammed\'in sahih hadislerini keşfedin.',
        cardHadithBtn: 'Hadislere Göz At',
        wisdomTitle: 'Peygamberden Hikmet',
        wisdomDesc: 'Günün Hadisi',
        islamTitle: 'İslam Nedir?',
        islamDesc: 'Dünyanın en hızlı büyüyen dininin temelleri',
        pillarTitle: 'Beş Şart',
        beliefTitle: 'Temel İnançlar',
        peaceTitle: 'Barış ve Merhamet',
        peaceDesc: 'İslam "Allah\'a teslimiyet" anlamına gelir.',
        ctaTitle: 'Daha Fazla Öğrenmeye Hazır mısınız?',
        ctaDesc: 'İslam\'ı anlamak için kişiselleştirilmiş yolculuğunuza başlayın.',
        ctaBtn: 'Yolculuğunuza Başlayın',
        footerMade: 'Allah rızası için sevgiyle yapıldı',
        chatTitle: 'İslami Bilgi Asistanı',
        chatSubtitle: 'İslam hakkında herhangi bir soru sorun',
        chatChangeKey: 'API Anahtarını Değiştir',
        chatPlaceholder: 'İslam hakkında sorunuzu yazın...',
        chatSend: 'Gönder',
        chatSetupTitle: 'AI Asistan Kurulumu',
        chatSetupDesc: 'AI sohbetini kullanmak için API anahtarına ihtiyacınız var.',
        chatHowTo: 'API anahtarı nasıl alınır:',
        chatSaveKey: 'Anahtarı Kaydet',
        chatKeyNote: 'API anahtarınız tarayıcınızda güvenli bir şekilde saklanır.',
        journeyTitle: 'Yolculuğunuza Başlayın',
        journeyLoading: 'Kişisel yolunuz yükleniyor...',
        journeyBack: 'Geri Dön',
        prayerTitle: 'Namaz Vakitleri',
        prayerLocation: 'Konumunuz',
        prayerRefresh: 'Yenile',
        prayerQiblaTitle: 'Kıble Yönü',
        prayerQiblaDesc: 'Namaz sırasında yönelmeniz gereken yön',
        prayerFromNorth: 'Kuzeyden',
        prayerFaceDir: 'Namaz için bu yöne dönün',
        prayerImportance: 'Namazın Önemi',
        prayerImportanceDesc: 'Namaz İslam\'ın ikinci şartıdır.',
        prayerFiveTitle: 'Beş Vakit Namaz',
        prayerQiblaCardTitle: 'Kıble - Yön',
        prayerQiblaCardDesc: 'Dünyadaki Müslümanlar namaz kılarken Mekke\'deki Kabe\'ye yönelir.',
        prayerNewTitle: 'Namaza Yeni misiniz?',
        prayerNewDesc: 'Namaz öğrenmek güzel bir yolculuktur',
        prayerStepsTitle: 'Namazın Temel Adımları',
        prayerHelp: 'Namaz Öğrenmek için AI\'dan Yardım İsteyin',
        quranTitle: 'Kur\'an-ı Kerim',
        quranExplore: 'Kur\'an\'ı Keşfet',
        quranSelectSurah: 'Sure Seç',
        quranVerse: 'Ayet #',
        quranGo: 'Git',
        quranRandom: 'Rastgele Ayet',
        quranPrev: 'Önceki Ayet',
        quranNext: 'Sonraki Ayet',
        quranAboutTitle: 'Kur\'an Hakkında',
        quranAboutDesc: 'Allah\'tan insanlığa son vahiy',
        quranWhatIs: 'Kur\'an Nedir?',
        quranWhatIsDesc: 'Kur\'an Allah\'ın sözüdür.',
        quranPreserved: 'Mükemmel Korunmuş',
        quranPreservedDesc: 'Kur\'an orijinal dilinde korunan tek kutsal kitaptır.',
        quranGuidance: 'Herkes İçin Rehberlik',
        quranGuidanceDesc: 'Kur\'an hayatın her alanında rehberlik sağlar.',
        quranNotable: 'Önemli Sureler',
        quranNotableDesc: 'Bazı surelerin özel önemi var',
        quranAskAi: 'Ayetler Hakkında AI\'ya Sor',
        hadithTitle: 'Hadis Kütüphanesi',
        hadithSubtitle: 'Hz. Muhammed\'in sahih hadisleri',
        hadithSearch: 'Hadis ara...',
        hadithAll: 'Tüm Kategoriler',
        hadithFaith: 'İman ve İnanç',
        hadithWorship: 'İbadet',
        hadithCharacter: 'Karakter ve Ahlak',
        hadithFamily: 'Aile ve İlişkiler',
        hadithSociety: 'Toplum ve Adalet',
        hadithKnowledge: 'İlim ve Öğrenme',
        hadithDaily: 'Günlük Hayat',
        hadithHereafter: 'Ahiret',
        hadithNarrator: 'Ravi',
        hadithSource: 'Kaynak',
        hadithReference: 'Referans',
        hadithGrading: 'Derece',
        hadithUnderstanding: 'Hadisi Anlamak',
        hadithUnderstandingDesc: 'Kur\'an\'dan sonra ikinci İslami kaynak',
        hadithCollections: 'Büyük Hadis Koleksiyonları',
        loading: 'Yükleniyor...',
        error: 'Bir hata oluştu.'
    },

    id: {
        code: 'id',
        name: 'Indonesia',
        dir: 'ltr',
        navHome: 'Beranda',
        navAskAi: 'Tanya AI',
        navJourney: 'Perjalanan',
        navPrayerTimes: 'Waktu Shalat',
        navQuran: 'Al-Quran',
        navHadith: 'Hadits',
        homeWelcome: 'Selamat Datang di Jalan Kedamaian',
        homeDesc: 'Temukan keindahan Islam - agama perdamaian, kasih sayang, dan petunjuk bagi seluruh umat manusia.',
        homeStartJourney: 'Mulai Perjalanan',
        homeAskQuestions: 'Ajukan Pertanyaan',
        homeExploreLearn: 'Jelajahi dan Pelajari',
        homeExploreDesc: 'Semua yang Anda butuhkan untuk memahami Islam',
        cardAiTitle: 'Asisten AI',
        cardAiDesc: 'Ajukan pertanyaan apa pun tentang Islam dan dapatkan jawaban yang berpengetahuan.',
        cardAiBtn: 'Mulai Mengobrol',
        cardJourneyTitle: 'Perjalanan Terpandu',
        cardJourneyDesc: 'Jalur interaktif berdasarkan keyakinan dan pertanyaan Anda.',
        cardJourneyBtn: 'Mulai Perjalanan',
        cardPrayerTitle: 'Waktu Shalat',
        cardPrayerDesc: 'Dapatkan waktu shalat yang akurat untuk lokasi Anda.',
        cardPrayerBtn: 'Lihat Waktu',
        cardQuranTitle: 'Al-Quran',
        cardQuranDesc: 'Baca Al-Quran dengan terjemahan, jelajahi ayat-ayat.',
        cardQuranBtn: 'Baca Al-Quran',
        cardHadithTitle: 'Perpustakaan Hadits',
        cardHadithDesc: 'Jelajahi hadits shahih Nabi Muhammad.',
        cardHadithBtn: 'Telusuri Hadits',
        wisdomTitle: 'Hikmah dari Nabi',
        wisdomDesc: 'Hadits Hari Ini',
        islamTitle: 'Apa itu Islam?',
        islamDesc: 'Dasar-dasar agama dengan pertumbuhan tercepat di dunia',
        pillarTitle: 'Lima Rukun',
        beliefTitle: 'Keyakinan Inti',
        peaceTitle: 'Perdamaian dan Kasih Sayang',
        peaceDesc: 'Islam berarti "penyerahan kepada Tuhan".',
        ctaTitle: 'Siap Belajar Lebih Banyak?',
        ctaDesc: 'Mulai perjalanan personal Anda untuk memahami Islam.',
        ctaBtn: 'Mulai Perjalanan',
        footerMade: 'Dibuat dengan cinta karena Allah',
        chatTitle: 'Asisten Pengetahuan Islam',
        chatSubtitle: 'Ajukan pertanyaan apa pun tentang Islam',
        chatChangeKey: 'Ubah Kunci API',
        chatPlaceholder: 'Ketik pertanyaan Anda tentang Islam...',
        chatSend: 'Kirim',
        chatSetupTitle: 'Pengaturan Asisten AI',
        chatSetupDesc: 'Untuk menggunakan obrolan AI, Anda memerlukan kunci API.',
        chatHowTo: 'Cara mendapatkan kunci API:',
        chatSaveKey: 'Simpan Kunci',
        chatKeyNote: 'Kunci API Anda disimpan dengan aman di browser Anda.',
        journeyTitle: 'Mulai Perjalanan Anda',
        journeyLoading: 'Memuat jalur personal Anda...',
        journeyBack: 'Kembali',
        prayerTitle: 'Waktu Shalat',
        prayerLocation: 'Lokasi Anda',
        prayerRefresh: 'Segarkan',
        prayerQiblaTitle: 'Arah Kiblat',
        prayerQiblaDesc: 'Arah menghadap saat shalat',
        prayerFromNorth: 'dari Utara',
        prayerFaceDir: 'Hadap arah ini saat shalat',
        prayerImportance: 'Pentingnya Shalat',
        prayerImportanceDesc: 'Shalat adalah rukun Islam kedua.',
        prayerFiveTitle: 'Lima Waktu Shalat',
        prayerQiblaCardTitle: 'Kiblat - Arah',
        prayerQiblaCardDesc: 'Muslim di seluruh dunia menghadap Kakbah di Mekah saat shalat.',
        prayerNewTitle: 'Baru Mengenal Shalat?',
        prayerNewDesc: 'Belajar shalat adalah perjalanan yang indah',
        prayerStepsTitle: 'Langkah Dasar Shalat',
        prayerHelp: 'Minta Bantuan AI untuk Belajar Shalat',
        quranTitle: 'Al-Quran',
        quranExplore: 'Jelajahi Al-Quran',
        quranSelectSurah: 'Pilih Surah',
        quranVerse: 'Ayat #',
        quranGo: 'Pergi',
        quranRandom: 'Ayat Acak',
        quranPrev: 'Ayat Sebelumnya',
        quranNext: 'Ayat Berikutnya',
        quranAboutTitle: 'Tentang Al-Quran',
        quranAboutDesc: 'Wahyu terakhir dari Allah untuk umat manusia',
        quranWhatIs: 'Apa itu Al-Quran?',
        quranWhatIsDesc: 'Al-Quran adalah firman Allah.',
        quranPreserved: 'Terpelihara Sempurna',
        quranPreservedDesc: 'Al-Quran adalah satu-satunya kitab suci yang terpelihara dalam bahasa aslinya.',
        quranGuidance: 'Petunjuk untuk Semua',
        quranGuidanceDesc: 'Al-Quran memberikan petunjuk dalam setiap aspek kehidupan.',
        quranNotable: 'Surah Penting',
        quranNotableDesc: 'Beberapa surah memiliki makna khusus',
        quranAskAi: 'Tanya AI tentang Ayat',
        hadithTitle: 'Perpustakaan Hadits',
        hadithSubtitle: 'Hadits shahih Nabi Muhammad',
        hadithSearch: 'Cari hadits...',
        hadithAll: 'Semua Kategori',
        hadithFaith: 'Iman dan Keyakinan',
        hadithWorship: 'Ibadah',
        hadithCharacter: 'Akhlak dan Adab',
        hadithFamily: 'Keluarga dan Hubungan',
        hadithSociety: 'Masyarakat dan Keadilan',
        hadithKnowledge: 'Ilmu dan Pembelajaran',
        hadithDaily: 'Kehidupan Sehari-hari',
        hadithHereafter: 'Akhirat',
        hadithNarrator: 'Perawi',
        hadithSource: 'Sumber',
        hadithReference: 'Referensi',
        hadithGrading: 'Derajat',
        hadithUnderstanding: 'Memahami Hadits',
        hadithUnderstandingDesc: 'Sumber kedua panduan Islam setelah Al-Quran',
        hadithCollections: 'Koleksi Hadits Utama',
        loading: 'Memuat...',
        error: 'Terjadi kesalahan.'
    }
};

// Language manager
class LanguageManager {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'en';
    }

    getSavedLanguage() {
        return localStorage.getItem('preferred_language');
    }

    saveLanguage(lang) {
        localStorage.setItem('preferred_language', lang);
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            this.saveLanguage(lang);
            this.applyLanguage();
            return true;
        }
        return false;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    t(key) {
        return translations[this.currentLang][key] || translations['en'][key] || key;
    }

    applyLanguage() {
        const lang = translations[this.currentLang];

        // Set document direction
        document.documentElement.dir = lang.dir;
        document.documentElement.lang = lang.code;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (lang[key] || translations['en'][key]) {
                el.textContent = lang[key] || translations['en'][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (lang[key] || translations['en'][key]) {
                el.placeholder = lang[key] || translations['en'][key];
            }
        });

        // Update language selector
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = this.currentLang;
        }
    }

    getAvailableLanguages() {
        return Object.keys(translations).map(code => ({
            code,
            name: translations[code].name,
            dir: translations[code].dir
        }));
    }
}

// Create language selector HTML
function createLanguageSelector() {
    const manager = window.langManager;
    const languages = manager.getAvailableLanguages();

    let html = `<select id="language-selector" class="language-selector" onchange="window.langManager.setLanguage(this.value)">`;
    languages.forEach(lang => {
        const selected = lang.code === manager.getCurrentLanguage() ? 'selected' : '';
        html += `<option value="${lang.code}" ${selected}>${lang.name}</option>`;
    });
    html += '</select>';

    return html;
}

// Initialize language manager globally
window.langManager = new LanguageManager();
window.createLanguageSelector = createLanguageSelector;
window.translations = translations;

// Apply language on page load
document.addEventListener('DOMContentLoaded', () => {
    window.langManager.applyLanguage();
});
