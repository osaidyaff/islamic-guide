// Islamic Guidance - Expanded Belief Journey / Decision Tree
// With comprehensive paths including guidance for Shia Muslims to Sunnah

const journeyData = {
    // Starting point
    start: {
        id: 'start',
        title: {
            en: 'Welcome, Seeker of Truth',
            ar: 'مرحباً، أيها الباحث عن الحقيقة',
            fr: 'Bienvenue, Chercheur de Vérité',
            ur: 'خوش آمدید، حق کے متلاشی',
            tr: 'Hoş Geldiniz, Hakikat Arayıcısı',
            id: 'Selamat Datang, Pencari Kebenaran'
        },
        content: {
            en: 'This journey is designed to help you explore and understand Islam based on where you are in your spiritual path. Answer honestly, and we will guide you with wisdom, evidence, and respect.',
            ar: 'تم تصميم هذه الرحلة لمساعدتك على استكشاف وفهم الإسلام بناءً على مكانك في مسيرتك الروحية. أجب بصدق، وسنرشدك بالحكمة والدليل والاحترام.',
            fr: 'Ce voyage est conçu pour vous aider à explorer et comprendre l\'Islam selon votre cheminement spirituel. Répondez honnêtement, et nous vous guiderons avec sagesse, preuves et respect.',
            ur: 'یہ سفر آپ کو اسلام کو سمجھنے میں مدد کے لیے بنایا گیا ہے۔ ایمانداری سے جواب دیں، اور ہم حکمت، ثبوت اور احترام کے ساتھ آپ کی رہنمائی کریں گے۔',
            tr: 'Bu yolculuk, manevi yolculuğunuza göre İslam\'ı keşfetmenize ve anlamanıza yardımcı olmak için tasarlanmıştır. Dürüstçe cevap verin, sizi hikmet, kanıt ve saygıyla yönlendireceğiz.',
            id: 'Perjalanan ini dirancang untuk membantu Anda menjelajahi dan memahami Islam. Jawablah dengan jujur, dan kami akan membimbing Anda dengan hikmah, bukti, dan rasa hormat.'
        },
        verse: {
            arabic: 'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',
            translation: {
                en: 'Invite to the way of your Lord with wisdom and good instruction.',
                ar: 'ادع إلى سبيل ربك بالحكمة والموعظة الحسنة.',
                fr: 'Invite au sentier de ton Seigneur avec sagesse et bonne exhortation.',
                ur: 'اپنے رب کی راہ کی طرف حکمت اور اچھی نصیحت کے ساتھ دعوت دو۔',
                tr: 'Rabbinin yoluna hikmetle ve güzel öğütle davet et.',
                id: 'Serulah ke jalan Tuhanmu dengan hikmah dan pengajaran yang baik.'
            },
            reference: 'Surah An-Nahl 16:125'
        },
        options: [
            { label: { en: 'I believe in God/Creator', ar: 'أؤمن بالله/الخالق', fr: 'Je crois en Dieu/Créateur', ur: 'میں اللہ/خالق پر ایمان رکھتا ہوں', tr: 'Tanrı\'ya/Yaratıcı\'ya inanıyorum', id: 'Saya percaya pada Tuhan/Pencipta' }, next: 'believes_god' },
            { label: { en: 'I\'m unsure about God\'s existence', ar: 'لست متأكداً من وجود الله', fr: 'Je ne suis pas sûr de l\'existence de Dieu', ur: 'مجھے اللہ کے وجود کے بارے میں یقین نہیں', tr: 'Tanrı\'nın varlığından emin değilim', id: 'Saya tidak yakin tentang keberadaan Tuhan' }, next: 'unsure_god' },
            { label: { en: 'I don\'t believe in God', ar: 'لا أؤمن بالله', fr: 'Je ne crois pas en Dieu', ur: 'میں اللہ پر ایمان نہیں رکھتا', tr: 'Tanrı\'ya inanmıyorum', id: 'Saya tidak percaya pada Tuhan' }, next: 'atheist_start' },
            { label: { en: 'I\'m already Muslim', ar: 'أنا مسلم بالفعل', fr: 'Je suis déjà musulman', ur: 'میں پہلے سے مسلمان ہوں', tr: 'Ben zaten Müslümanım', id: 'Saya sudah Muslim' }, next: 'muslim_path' },
            { label: { en: 'I follow another religion', ar: 'أتبع ديناً آخر', fr: 'Je suis une autre religion', ur: 'میں کسی اور مذہب کی پیروی کرتا ہوں', tr: 'Başka bir dine mensubum', id: 'Saya mengikuti agama lain' }, next: 'other_religion' },
            { label: { en: 'Address misconceptions about Islam', ar: 'معالجة المفاهيم الخاطئة عن الإسلام', fr: 'Aborder les idées fausses sur l\'Islam', ur: 'اسلام کے بارے میں غلط فہمیوں کا ازالہ', tr: 'İslam hakkındaki yanlış anlamaları ele al', id: 'Bahas kesalahpahaman tentang Islam' }, next: 'misconceptions' }
        ]
    },

    // Muslim Path - New Branch
    muslim_path: {
        id: 'muslim_path',
        title: {
            en: 'Welcome, Fellow Muslim',
            ar: 'مرحباً أيها المسلم',
            fr: 'Bienvenue, Cher Musulman',
            ur: 'خوش آمدید، ساتھی مسلم',
            tr: 'Hoş Geldin, Kardeş Müslüman',
            id: 'Selamat Datang, Saudara Muslim'
        },
        content: {
            en: 'Alhamdulillah! Whether you\'re seeking to strengthen your faith, learn more about your deen, or have questions about different groups within Islam, this journey will help you.',
            ar: 'الحمد لله! سواء كنت تسعى لتقوية إيمانك، أو تعلم المزيد عن دينك، أو لديك أسئلة حول الفرق المختلفة في الإسلام، هذه الرحلة ستساعدك.',
            fr: 'Alhamdulillah! Que vous cherchiez à renforcer votre foi, à en apprendre plus sur votre deen, ou que vous ayez des questions sur les différents groupes dans l\'Islam, ce voyage vous aidera.',
            ur: 'الحمد للہ! چاہے آپ اپنے ایمان کو مضبوط کرنا چاہتے ہیں، اپنے دین کے بارے میں مزید جاننا چاہتے ہیں، یا اسلام کے مختلف گروہوں کے بارے میں سوالات ہیں، یہ سفر آپ کی مدد کرے گا۔',
            tr: 'Elhamdülillah! İster imanınızı güçlendirmek, ister dininiz hakkında daha fazla öğrenmek, ister İslam içindeki farklı gruplar hakkında sorularınız olsun, bu yolculuk size yardımcı olacak.',
            id: 'Alhamdulillah! Apakah Anda ingin memperkuat iman, mempelajari lebih lanjut tentang agama Anda, atau memiliki pertanyaan tentang kelompok berbeda dalam Islam, perjalanan ini akan membantu Anda.'
        },
        verse: {
            arabic: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',
            translation: {
                en: 'And hold firmly to the rope of Allah all together and do not become divided.',
                ar: 'واعتصموا بحبل الله جميعاً ولا تفرقوا.',
                fr: 'Et cramponnez-vous tous ensemble au câble d\'Allah et ne soyez pas divisés.',
                ur: 'اور سب مل کر اللہ کی رسی کو مضبوطی سے پکڑو اور تفرقہ نہ کرو۔',
                tr: 'Hep birlikte Allah\'ın ipine sımsıkı sarılın ve ayrılmayın.',
                id: 'Dan berpeganglah kamu semuanya kepada tali Allah, dan janganlah kamu bercerai berai.'
            },
            reference: 'Surah Ali Imran 3:103'
        },
        options: [
            { label: { en: 'I want to strengthen my practice', ar: 'أريد تقوية عبادتي', fr: 'Je veux renforcer ma pratique', ur: 'میں اپنی عبادت کو مضبوط کرنا چاہتا ہوں', tr: 'İbadetimi güçlendirmek istiyorum', id: 'Saya ingin memperkuat ibadah saya' }, next: 'strengthen_practice' },
            { label: { en: 'I have questions about Sunni/Shia differences', ar: 'لدي أسئلة حول الفروق بين السنة والشيعة', fr: 'J\'ai des questions sur les différences Sunnite/Chiite', ur: 'مجھے سنی/شیعہ فرق کے بارے میں سوالات ہیں', tr: 'Sünni/Şii farklılıkları hakkında sorularım var', id: 'Saya punya pertanyaan tentang perbedaan Sunni/Syiah' }, next: 'sunni_shia_intro' },
            { label: { en: 'I\'m Shia and curious about Sunnah', ar: 'أنا شيعي وأريد معرفة السنة', fr: 'Je suis Chiite et curieux de la Sunnah', ur: 'میں شیعہ ہوں اور سنت کے بارے میں جاننا چاہتا ہوں', tr: 'Şii\'yim ve Sünnet hakkında merak ediyorum', id: 'Saya Syiah dan ingin tahu tentang Sunnah' }, next: 'shia_to_sunnah' },
            { label: { en: 'I want to understand authentic Islam', ar: 'أريد فهم الإسلام الصحيح', fr: 'Je veux comprendre l\'Islam authentique', ur: 'میں صحیح اسلام کو سمجھنا چاہتا ہوں', tr: 'Otantik İslam\'ı anlamak istiyorum', id: 'Saya ingin memahami Islam yang otentik' }, next: 'authentic_islam' },
            { label: { en: 'Questions about innovation (Bid\'ah)', ar: 'أسئلة حول البدعة', fr: 'Questions sur l\'innovation (Bid\'ah)', ur: 'بدعت کے بارے میں سوالات', tr: 'Bid\'at hakkında sorular', id: 'Pertanyaan tentang bid\'ah' }, next: 'bidah_intro' },
            { label: { en: 'Deep theological questions', ar: 'أسئلة عقدية عميقة', fr: 'Questions théologiques profondes', ur: 'گہرے عقائدی سوالات', tr: 'Derin teolojik sorular', id: 'Pertanyaan teologis mendalam' }, next: 'theological_deep' }
        ]
    },

    // Strengthen Practice
    strengthen_practice: {
        id: 'strengthen_practice',
        title: {
            en: 'Strengthening Your Islam',
            ar: 'تقوية إسلامك',
            fr: 'Renforcer Votre Islam',
            ur: 'اپنے اسلام کو مضبوط کرنا',
            tr: 'İslam\'ınızı Güçlendirmek',
            id: 'Memperkuat Islam Anda'
        },
        content: {
            en: 'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it." Strengthening your Islam starts with knowledge, consistent worship, and following the Sunnah of the Prophet ﷺ.',
            ar: 'قال النبي ﷺ: "خيركم من تعلم القرآن وعلمه." تقوية إسلامك تبدأ بالعلم والعبادة المستمرة واتباع سنة النبي ﷺ.',
            fr: 'Le Prophète ﷺ a dit: "Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent." Renforcer votre Islam commence par la connaissance, l\'adoration constante et suivre la Sunnah du Prophète ﷺ.',
            ur: 'نبی ﷺ نے فرمایا: "تم میں سے بہترین وہ ہے جو قرآن سیکھے اور سکھائے۔" اپنے اسلام کو مضبوط کرنا علم، مستقل عبادت اور نبی ﷺ کی سنت کی پیروی سے شروع ہوتا ہے۔',
            tr: 'Peygamber ﷺ buyurdu: "Sizin en hayırlınız Kur\'an\'ı öğrenen ve öğretendir." İslam\'ınızı güçlendirmek ilim, sürekli ibadet ve Peygamber\'in ﷺ Sünnetine uymakla başlar.',
            id: 'Nabi ﷺ bersabda: "Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya." Memperkuat Islam Anda dimulai dengan ilmu, ibadah yang konsisten, dan mengikuti Sunnah Nabi ﷺ.'
        },
        verse: {
            arabic: 'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا',
            translation: {
                en: 'And whatever the Messenger has given you - take; and what he has forbidden you - refrain from.',
                ar: 'وما آتاكم الرسول فخذوه وما نهاكم عنه فانتهوا.',
                fr: 'Ce que le Messager vous donne, prenez-le; et ce qu\'il vous interdit, abstenez-vous en.',
                ur: 'اور رسول جو کچھ تمہیں دے لے لو اور جس سے منع کرے رک جاؤ۔',
                tr: 'Peygamber size ne verdiyse onu alın, size neyi yasakladıysa ondan sakının.',
                id: 'Apa yang diberikan Rasul kepadamu maka terimalah, dan apa yang dilarangnya bagimu maka tinggalkanlah.'
            },
            reference: 'Surah Al-Hashr 59:7'
        },
        options: [
            { label: { en: 'Learn about the Five Pillars', ar: 'تعرف على أركان الإسلام الخمسة', fr: 'Apprendre les Cinq Piliers', ur: 'اسلام کے پانچ ارکان جانیں', tr: 'Beş Şartı öğren', id: 'Pelajari Lima Rukun' }, next: 'islam_basics' },
            { label: { en: 'Understand the importance of Sunnah', ar: 'فهم أهمية السنة', fr: 'Comprendre l\'importance de la Sunnah', ur: 'سنت کی اہمیت سمجھیں', tr: 'Sünnetin önemini anla', id: 'Pahami pentingnya Sunnah' }, next: 'about_sunnah' },
            { label: { en: 'Learn about the Companions', ar: 'تعرف على الصحابة', fr: 'Apprendre sur les Compagnons', ur: 'صحابہ کے بارے میں جانیں', tr: 'Sahabeler hakkında öğren', id: 'Pelajari tentang Sahabat' }, next: 'about_sahaba' },
            { label: { en: 'Avoid innovations in religion', ar: 'تجنب البدع في الدين', fr: 'Éviter les innovations religieuses', ur: 'دین میں بدعات سے بچیں', tr: 'Dindeki bid\'atlerden kaçın', id: 'Hindari bid\'ah dalam agama' }, next: 'bidah_intro' }
        ]
    },

    // Sunni-Shia Introduction
    sunni_shia_intro: {
        id: 'sunni_shia_intro',
        title: 'Understanding the Division',
        content: 'The division between Sunni and Shia originated as a political dispute over leadership after the Prophet\'s ﷺ death, but later developed theological differences. Sunnis (about 85-90% of Muslims) follow the Quran, Sunnah, and the understanding of the Companions. Let\'s explore the key differences.',
        verse: {
            arabic: 'إِنَّ الَّذِينَ فَرَّقُوا دِينَهُمْ وَكَانُوا شِيَعًا لَّسْتَ مِنْهُمْ فِي شَيْءٍ',
            translation: 'Indeed, those who have divided their religion and become sects - you are not associated with them in anything.',
            reference: 'Surah Al-An\'am 6:159'
        },
        options: [
            { label: 'What do Sunnis believe?', next: 'sunni_beliefs' },
            { label: 'Questions about the Companions', next: 'about_sahaba' },
            { label: 'What about Ahlul Bayt?', next: 'ahlul_bayt_sunnah' },
            { label: 'Historical perspective', next: 'historical_context' }
        ]
    },

    // Shia to Sunnah Path - Main Entry
    shia_to_sunnah: {
        id: 'shia_to_sunnah',
        title: 'Seeking the Authentic Path',
        content: 'We welcome you with love and respect. Many have walked this path of inquiry before you. Let us examine the evidence from the Quran and authentic hadith together. Our goal is truth, not winning an argument.',
        verse: {
            arabic: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا',
            translation: 'And say, "Truth has come, and falsehood has departed. Indeed, falsehood is bound to depart."',
            reference: 'Surah Al-Isra 17:81'
        },
        options: [
            { label: 'Status of the Companions (Sahaba)', next: 'sahaba_evidence' },
            { label: 'Imamate vs Caliphate', next: 'imamate_question' },
            { label: 'What about Ali (RA)?', next: 'ali_in_sunnah' },
            { label: 'Preservation of Quran', next: 'quran_preservation' },
            { label: 'Intercession and graves', next: 'intercession_topic' }
        ]
    },

    // Status of Companions - Evidence
    sahaba_evidence: {
        id: 'sahaba_evidence',
        title: 'The Companions in Quran',
        content: 'Allah praised the Companions extensively in the Quran. He declared His pleasure with the Muhajireen and Ansar, promised them Paradise, and commanded us to follow their way. These verses were revealed while they were alive - Allah knew their future actions.',
        verse: {
            arabic: 'وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ وَالَّذِينَ اتَّبَعُوهُم بِإِحْسَانٍ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ',
            translation: 'And the first forerunners among the Muhajireen and Ansar and those who followed them with good conduct - Allah is pleased with them and they are pleased with Him.',
            reference: 'Surah At-Tawbah 9:100'
        },
        options: [
            { label: 'More Quranic evidence', next: 'sahaba_quran_more' },
            { label: 'What about their disputes?', next: 'sahaba_disputes' },
            { label: 'Abu Bakr and Umar in Quran', next: 'abubakr_umar_quran' },
            { label: 'The Prophet\'s love for them', next: 'prophet_love_sahaba' }
        ]
    },

    // More Quranic evidence for Sahaba
    sahaba_quran_more: {
        id: 'sahaba_quran_more',
        title: 'More Quranic Praise',
        content: 'Allah also said about those who gave Bay\'ah (pledge) at Hudaybiyyah - including Abu Bakr, Umar, Uthman, and others: Allah was pleased with them. He knew what was in their hearts. This included most major Companions.',
        verse: {
            arabic: 'لَّقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
            translation: 'Certainly was Allah pleased with the believers when they pledged allegiance to you under the tree.',
            reference: 'Surah Al-Fath 48:18'
        },
        options: [
            { label: 'What does "pleased" mean?', next: 'ridwan_meaning' },
            { label: 'Continue to Abu Bakr\'s status', next: 'abubakr_umar_quran' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Meaning of Allah's pleasure
    ridwan_meaning: {
        id: 'ridwan_meaning',
        title: 'Understanding Allah\'s Pleasure',
        content: 'When Allah says He is "pleased" (Radiya) with someone, this is an eternal decree based on His complete knowledge of past, present, and future. Allah knew everything they would do until death, yet still declared His pleasure. This is not conditional - it is a firm declaration from the All-Knowing.',
        verse: {
            arabic: 'عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ',
            translation: 'Knower of the unseen and the witnessed, the Grand, the Exalted.',
            reference: 'Surah Ar-Ra\'d 13:9'
        },
        options: [
            { label: 'This makes sense, continue', next: 'abubakr_umar_quran' },
            { label: 'What about disputes among Sahaba?', next: 'sahaba_disputes' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Abu Bakr and Umar in Quran
    abubakr_umar_quran: {
        id: 'abubakr_umar_quran',
        title: 'Abu Bakr in the Quran',
        content: 'Abu Bakr is mentioned in the Quran as the "second of two" in the cave with the Prophet ﷺ during Hijrah. Allah says He sent tranquility upon him and the Prophet ﷺ. Being the Prophet\'s sole companion on this crucial journey shows his immense status.',
        verse: {
            arabic: 'إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
            translation: 'When they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us."',
            reference: 'Surah At-Tawbah 9:40'
        },
        options: [
            { label: 'Hadith about Abu Bakr', next: 'abubakr_hadith' },
            { label: 'What about Ali\'s status?', next: 'ali_in_sunnah' },
            { label: 'Continue to Imamate question', next: 'imamate_question' }
        ]
    },

    // Abu Bakr in Hadith
    abubakr_hadith: {
        id: 'abubakr_hadith',
        title: 'The Prophet\'s Love for Abu Bakr',
        content: 'The Prophet ﷺ said: "If I were to take a Khalil (closest friend) from among my Ummah, I would have taken Abu Bakr, but he is my brother and companion." He also appointed Abu Bakr to lead prayers during his final illness - a clear indication of leadership.',
        verse: {
            arabic: 'مُحَمَّدٌ رَّسُولُ اللَّهِ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ',
            translation: 'Muhammad is the Messenger of Allah; and those with him are forceful against the disbelievers, merciful among themselves.',
            reference: 'Surah Al-Fath 48:29 - describing the Companions'
        },
        options: [
            { label: 'Why did Abu Bakr lead prayers?', next: 'abubakr_prayer' },
            { label: 'What about Ali\'s position?', next: 'ali_in_sunnah' },
            { label: 'The succession question', next: 'imamate_question' }
        ]
    },

    // Abu Bakr leading prayers
    abubakr_prayer: {
        id: 'abubakr_prayer',
        title: 'Abu Bakr Leading the Prayers',
        content: 'During his final illness, the Prophet ﷺ specifically ordered Abu Bakr to lead the prayers. When Aisha suggested Umar instead (as Abu Bakr was soft-hearted), the Prophet ﷺ insisted: "Tell Abu Bakr to lead the people in prayer." This was the clearest indication of succession.',
        verse: {
            arabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا',
            translation: 'Indeed, prayer has been decreed upon the believers at specified times.',
            reference: 'Surah An-Nisa 4:103'
        },
        options: [
            { label: 'What about Ghadir Khumm?', next: 'ghadir_khumm' },
            { label: 'Ali\'s position in Sunnah', next: 'ali_in_sunnah' },
            { label: 'Continue learning', next: 'shia_to_sunnah' }
        ]
    },

    // Ghadir Khumm
    ghadir_khumm: {
        id: 'ghadir_khumm',
        title: 'Understanding Ghadir Khumm',
        content: 'At Ghadir Khumm, the Prophet ﷺ said: "Whoever I am his Mawla, Ali is his Mawla." Sunnis accept this hadith but understand "Mawla" to mean friend/supporter, not leader - as the word has many meanings in Arabic. This interpretation is supported by the context and other evidences.',
        verse: {
            arabic: 'ذَٰلِكَ بِأَنَّ اللَّهَ مَوْلَى الَّذِينَ آمَنُوا وَأَنَّ الْكَافِرِينَ لَا مَوْلَىٰ لَهُمْ',
            translation: 'That is because Allah is the protector (Mawla) of those who believe and because the disbelievers have no protector.',
            reference: 'Surah Muhammad 47:11 - showing Mawla means protector'
        },
        options: [
            { label: 'Why wasn\'t Ali appointed directly?', next: 'no_direct_appointment' },
            { label: 'Ali\'s own actions', next: 'ali_accepted_caliphs' },
            { label: 'Continue to other topics', next: 'shia_to_sunnah' }
        ]
    },

    // No Direct Appointment
    no_direct_appointment: {
        id: 'no_direct_appointment',
        title: 'No Explicit Appointment',
        content: 'If Allah intended Ali to be the leader after the Prophet ﷺ, there would be clear, explicit verses - just as clear as verses about prayer, fasting, or hijab. The Quran is explicit about fundamental matters. The absence of such clarity indicates this was left to the community\'s choice.',
        verse: {
            arabic: 'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',
            translation: 'And their affair is [determined by] consultation among themselves.',
            reference: 'Surah Ash-Shura 42:38'
        },
        options: [
            { label: 'How did Ali respond?', next: 'ali_accepted_caliphs' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Ali accepted the Caliphs
    ali_accepted_caliphs: {
        id: 'ali_accepted_caliphs',
        title: 'Ali\'s Acceptance of the Caliphs',
        content: 'Ali (RA) gave bay\'ah (pledge of allegiance) to Abu Bakr, Umar, and Uthman. He served as their advisor, married his daughter to Umar, and named his sons after them (there are sons of Ali named Abu Bakr, Umar, and Uthman). Would he do this if he believed they usurped his right?',
        verse: {
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ',
            translation: 'O you who believe, obey Allah and obey the Messenger and those in authority among you.',
            reference: 'Surah An-Nisa 4:59'
        },
        options: [
            { label: 'Ali\'s love for the Companions', next: 'ali_loved_sahaba' },
            { label: 'The Imamate concept', next: 'imamate_question' },
            { label: 'Continue to other topics', next: 'shia_to_sunnah' }
        ]
    },

    // Ali loved the Companions
    ali_loved_sahaba: {
        id: 'ali_loved_sahaba',
        title: 'Ali\'s Love for His Brothers',
        content: 'Ali (RA) spoke highly of Abu Bakr and Umar. When asked about the best person after the Prophet ﷺ, Ali said "Abu Bakr, then Umar." He said about Umar: "We used to say while the Prophet ﷺ was alive that Abu Bakr and Umar are the masters of the elderly people of Paradise."',
        verse: {
            arabic: 'وَالَّذِينَ جَاءُوا مِن بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',
            translation: 'Those who came after them say, "Our Lord, forgive us and our brothers who preceded us in faith."',
            reference: 'Surah Al-Hashr 59:10'
        },
        options: [
            { label: 'This is convincing, what about Ahlul Bayt?', next: 'ahlul_bayt_sunnah' },
            { label: 'What about cursing Companions?', next: 'cursing_sahaba' },
            { label: 'Continue to other topics', next: 'shia_to_sunnah' }
        ]
    },

    // Ali in Sunnah
    ali_in_sunnah: {
        id: 'ali_in_sunnah',
        title: 'Ali\'s Status in Sunni Islam',
        content: 'Sunnis love and honor Ali (RA) tremendously. He is the fourth Rightly Guided Caliph, the Prophet\'s cousin and son-in-law, father of Al-Hasan and Al-Husayn, and one of the greatest Companions. The Prophet ﷺ said: "Ali is from me and I am from Ali."',
        verse: {
            arabic: 'إِنَّمَا وَلِيُّكُمُ اللَّهُ وَرَسُولُهُ وَالَّذِينَ آمَنُوا',
            translation: 'Your ally is none but Allah and His Messenger and those who believe.',
            reference: 'Surah Al-Ma\'idah 5:55'
        },
        options: [
            { label: 'More about Ali in hadith', next: 'ali_hadith' },
            { label: 'Status of Ahlul Bayt', next: 'ahlul_bayt_sunnah' },
            { label: 'Why not first Caliph?', next: 'imamate_question' }
        ]
    },

    // Ali in Hadith
    ali_hadith: {
        id: 'ali_hadith',
        title: 'The Prophet\'s Love for Ali',
        content: 'The Prophet ﷺ said about Ali: "You are to me as Harun was to Musa, except there is no prophet after me." He also said: "None loves Ali except a believer, and none hates him except a hypocrite." Sunnis fully accept and honor these hadith.',
        verse: {
            arabic: 'قُل لَّا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا إِلَّا الْمَوَدَّةَ فِي الْقُرْبَىٰ',
            translation: 'Say, "I do not ask you for this message any payment except good will through kinship."',
            reference: 'Surah Ash-Shura 42:23'
        },
        options: [
            { label: 'So Sunnis love Ahlul Bayt?', next: 'ahlul_bayt_sunnah' },
            { label: 'Why the succession to Abu Bakr?', next: 'imamate_question' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Ahlul Bayt in Sunnah
    ahlul_bayt_sunnah: {
        id: 'ahlul_bayt_sunnah',
        title: 'Loving Ahlul Bayt - The Sunni Way',
        content: 'Sunnis love the Prophet\'s family deeply! The difference is that Sunni love doesn\'t require hating the Companions. We love Ahlul Bayt AND the Sahaba, as they loved each other. Abu Bakr said: "Watch how you treat Muhammad through his family."',
        verse: {
            arabic: 'إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا',
            translation: 'Allah intends only to remove from you the impurity, O people of the [Prophet\'s] household, and to purify you with purification.',
            reference: 'Surah Al-Ahzab 33:33'
        },
        options: [
            { label: 'Who are Ahlul Bayt?', next: 'who_ahlulbayt' },
            { label: 'Ali\'s relationship with Sahaba', next: 'ali_loved_sahaba' },
            { label: 'Continue to other topics', next: 'shia_to_sunnah' }
        ]
    },

    // Who are Ahlul Bayt
    who_ahlulbayt: {
        id: 'who_ahlulbayt',
        title: 'The Prophet\'s Household',
        content: 'Ahlul Bayt includes the Prophet\'s wives (as stated in verse 33:33), as well as Ali, Fatimah, Al-Hasan, and Al-Husayn (as emphasized in hadith). Sunnis honor all of them without exception. The wives of the Prophet ﷺ are the "Mothers of the Believers."',
        verse: {
            arabic: 'النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ وَأَزْوَاجُهُ أُمَّهَاتُهُمْ',
            translation: 'The Prophet is more worthy of the believers than themselves, and his wives are their mothers.',
            reference: 'Surah Al-Ahzab 33:6'
        },
        options: [
            { label: 'What about Aisha (RA)?', next: 'aisha_status' },
            { label: 'Continue to Imamate', next: 'imamate_question' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Aisha's Status
    aisha_status: {
        id: 'aisha_status',
        title: 'Aisha - Mother of the Believers',
        content: 'Aisha (RA) was the beloved wife of the Prophet ﷺ. Allah revealed her innocence from the heavens in Surah An-Nur when she was falsely accused. The Prophet ﷺ died with his head in her lap, in her room. Insulting her is insulting the Prophet ﷺ and denying the Quran.',
        verse: {
            arabic: 'إِنَّ الَّذِينَ جَاءُوا بِالْإِفْكِ عُصْبَةٌ مِّنكُمْ لَا تَحْسَبُوهُ شَرًّا لَّكُم بَلْ هُوَ خَيْرٌ لَّكُمْ',
            translation: 'Indeed, those who came with falsehood are a group among you. Do not think it bad for you; rather it is good for you.',
            reference: 'Surah An-Nur 24:11 - About the slander against Aisha'
        },
        options: [
            { label: 'This makes sense', next: 'shia_to_sunnah' },
            { label: 'What about the Imamate?', next: 'imamate_question' },
            { label: 'Continue learning', next: 'authentic_islam' }
        ]
    },

    // Imamate Question
    imamate_question: {
        id: 'imamate_question',
        title: 'Imamate vs Shura (Consultation)',
        content: 'The concept of divinely appointed Imams with supernatural knowledge is not found in the Quran. The Quran emphasizes Shura (consultation) for leadership. If Imamate were a pillar of faith, it would be clearly stated like prayer and fasting are.',
        verse: {
            arabic: 'فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ',
            translation: 'And consult them in the matter. And when you have decided, then rely upon Allah.',
            reference: 'Surah Ali Imran 3:159'
        },
        options: [
            { label: 'What about the Twelve Imams?', next: 'twelve_imams' },
            { label: 'How was Abu Bakr chosen?', next: 'abubakr_selection' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Twelve Imams
    twelve_imams: {
        id: 'twelve_imams',
        title: 'The Twelve Imams Concept',
        content: 'The hadith about "Twelve Caliphs" exists in Sunni sources, but it refers to righteous rulers throughout history, not a divine line of Imams. Many of the later Shia Imams were scholars who themselves followed Sunni Islam and never claimed divine appointment.',
        verse: {
            arabic: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ',
            translation: 'Muhammad is not but a messenger. [Other] messengers have passed on before him.',
            reference: 'Surah Ali Imran 3:144'
        },
        options: [
            { label: 'What about the hidden Imam?', next: 'hidden_imam' },
            { label: 'Continue to Quran preservation', next: 'quran_preservation' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Hidden Imam
    hidden_imam: {
        id: 'hidden_imam',
        title: 'The Hidden Imam Doctrine',
        content: 'The belief in a hidden Imam who has been alive for over 1100 years has no basis in Quran or authentic hadith. The Quran mentions the lifespan of Nuh (950 years) as miraculous - this would be even longer. This doctrine developed centuries after the Prophet ﷺ.',
        verse: {
            arabic: 'وَمَا جَعَلْنَا لِبَشَرٍ مِّن قَبْلِكَ الْخُلْدَ أَفَإِن مِّتَّ فَهُمُ الْخَالِدُونَ',
            translation: 'And We did not grant to any man before you eternity [on earth]; so if you die - would they be eternal?',
            reference: 'Surah Al-Anbiya 21:34'
        },
        options: [
            { label: 'This raises questions for me', next: 'continue_reflection' },
            { label: 'What about Quran preservation?', next: 'quran_preservation' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Quran Preservation
    quran_preservation: {
        id: 'quran_preservation',
        title: 'The Quran is Perfectly Preserved',
        content: 'Allah promised to preserve the Quran, and He has. Some Shia sources claim the Quran was corrupted - this contradicts the Quran itself! The same Quran has been in Muslim hands since the time of Uthman (RA). To claim corruption is to say Allah failed His promise.',
        verse: {
            arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
            translation: 'Indeed, it is We who sent down the Quran and indeed, We will be its guardian.',
            reference: 'Surah Al-Hijr 15:9'
        },
        options: [
            { label: 'What about intercession?', next: 'intercession_topic' },
            { label: 'Authentic Islam', next: 'authentic_islam' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Intercession Topic
    intercession_topic: {
        id: 'intercession_topic',
        title: 'Intercession in Islam',
        content: 'True intercession belongs to Allah alone. The Prophet ﷺ will intercede on the Day of Judgment by Allah\'s permission. Asking the dead for intercession, praying at graves, or believing that Imams can answer prayers - these are forms of shirk (associating partners with Allah).',
        verse: {
            arabic: 'قُل لِّلَّهِ الشَّفَاعَةُ جَمِيعًا',
            translation: 'Say, "To Allah belongs [the right to allow] intercession entirely."',
            reference: 'Surah Az-Zumar 39:44'
        },
        options: [
            { label: 'What about visiting graves?', next: 'visiting_graves' },
            { label: 'What is Tawassul?', next: 'tawassul_topic' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Visiting Graves
    visiting_graves: {
        id: 'visiting_graves',
        title: 'The Correct Way to Visit Graves',
        content: 'The Prophet ﷺ permitted visiting graves to remember death and make dua FOR the dead (not TO them). However, he ﷺ also warned: "Do not take my grave as a place of celebration." Building shrines, praying to the dead, or believing they can benefit you is forbidden.',
        verse: {
            arabic: 'وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا',
            translation: 'And the mosques are for Allah, so do not invoke anyone along with Allah.',
            reference: 'Surah Al-Jinn 72:18'
        },
        options: [
            { label: 'This makes sense', next: 'continue_reflection' },
            { label: 'What about self-flagellation?', next: 'self_harm' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Self-harm practices
    self_harm: {
        id: 'self_harm',
        title: 'Self-Harm is Forbidden',
        content: 'Practices like Tatbir (self-flagellation) during Ashura are forbidden in Islam. The Prophet ﷺ forbade hitting oneself in grief. Even many Shia scholars have spoken against these practices. The Prophet ﷺ said: "He is not one of us who slaps his cheeks, tears his clothes, and follows the ways of Jahiliyyah."',
        verse: {
            arabic: 'وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ',
            translation: 'And do not throw yourselves into destruction with your own hands.',
            reference: 'Surah Al-Baqarah 2:195'
        },
        options: [
            { label: 'What is the correct way to mourn?', next: 'proper_mourning' },
            { label: 'Continue learning', next: 'continue_reflection' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Proper Mourning
    proper_mourning: {
        id: 'proper_mourning',
        title: 'Mourning According to Sunnah',
        content: 'Islam allows crying and grieving - the Prophet ﷺ wept when his son Ibrahim died. However, excessive wailing, self-harm, and ritualized grief ceremonies are forbidden. The best way to honor Al-Husayn (RA) is to follow the Islam he died for - the Sunnah of his grandfather ﷺ.',
        verse: {
            arabic: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
            translation: 'Who, when disaster strikes them, say, "Indeed we belong to Allah, and indeed to Him we will return."',
            reference: 'Surah Al-Baqarah 2:156'
        },
        options: [
            { label: 'I want to follow the Sunnah', next: 'continue_reflection' },
            { label: 'Learn authentic Islam', next: 'authentic_islam' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Cursing Sahaba
    cursing_sahaba: {
        id: 'cursing_sahaba',
        title: 'The Sin of Cursing Companions',
        content: 'The Prophet ﷺ said: "Do not curse my Companions. If one of you were to spend gold equal to Mount Uhud, it would not equal a mudd (handful) of one of them, or even half of it." Cursing those whom Allah praised in the Quran is a grave sin.',
        verse: {
            arabic: 'مُّحَمَّدٌ رَّسُولُ اللَّهِ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ',
            translation: 'Muhammad is the Messenger of Allah; and those with him are forceful against the disbelievers, merciful among themselves.',
            reference: 'Surah Al-Fath 48:29'
        },
        options: [
            { label: 'What about their disputes?', next: 'sahaba_disputes' },
            { label: 'I understand now', next: 'continue_reflection' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Sahaba Disputes
    sahaba_disputes: {
        id: 'sahaba_disputes',
        title: 'Understanding Companion Disputes',
        content: 'Yes, there were disputes among Companions - they were human. But they were the best generation, and their disputes were based on ijtihad (scholarly reasoning), not evil intentions. We remain silent about their disputes and do not take sides. They all sought what they believed was right.',
        verse: {
            arabic: 'تِلْكَ أُمَّةٌ قَدْ خَلَتْ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ',
            translation: 'That is a nation which has passed on. It will have what it earned, and you will have what you have earned.',
            reference: 'Surah Al-Baqarah 2:134'
        },
        options: [
            { label: 'What about Karbala?', next: 'karbala_event' },
            { label: 'I understand the Sunni position', next: 'continue_reflection' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Karbala Event
    karbala_event: {
        id: 'karbala_event',
        title: 'The Tragedy of Karbala',
        content: 'Sunnis recognize Karbala as a great tragedy. Al-Husayn (RA) was wrongly killed, and we honor his sacrifice. However, we do not blame the Companions or create annual mourning rituals. We remember him by following Islam correctly, not through self-harm or cursing others.',
        verse: {
            arabic: 'وَلَا تَحْسَبَنَّ الَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ أَمْوَاتًا بَلْ أَحْيَاءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ',
            translation: 'And never think of those who have been killed in the cause of Allah as dead. Rather, they are alive with their Lord, receiving provision.',
            reference: 'Surah Ali Imran 3:169'
        },
        options: [
            { label: 'How do Sunnis honor Al-Husayn?', next: 'honoring_husayn' },
            { label: 'Continue learning', next: 'continue_reflection' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Honoring Husayn
    honoring_husayn: {
        id: 'honoring_husayn',
        title: 'Honoring Al-Husayn the Right Way',
        content: 'The best way to honor Al-Husayn (RA) is to follow the Islam he lived and died for - the Quran and Sunnah. He was raised by the Prophet ﷺ and learned Islam from him. He would never approve of practices that contradict the Sunnah, like shrine worship or cursing Companions.',
        verse: {
            arabic: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
            translation: 'There has certainly been for you in the Messenger of Allah an excellent pattern.',
            reference: 'Surah Al-Ahzab 33:21'
        },
        options: [
            { label: 'I want to follow authentic Islam', next: 'authentic_islam' },
            { label: 'Take me to the basics', next: 'islam_basics' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Continue Reflection
    continue_reflection: {
        id: 'continue_reflection',
        title: 'Reflecting on the Evidence',
        content: 'We hope this information has been beneficial. Remember, the goal is not to attack anyone, but to follow the truth. The Prophet ﷺ said: "I have left among you two things; you will never go astray as long as you hold fast to them: the Book of Allah and my Sunnah."',
        verse: {
            arabic: 'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ',
            translation: 'So ask the people of knowledge if you do not know.',
            reference: 'Surah An-Nahl 16:43'
        },
        options: [
            { label: 'I want to learn authentic Islam', next: 'authentic_islam' },
            { label: 'Explore more topics', next: 'shia_to_sunnah' },
            { label: 'Start from the beginning', next: 'start' }
        ]
    },

    // Authentic Islam
    authentic_islam: {
        id: 'authentic_islam',
        title: 'The Authentic Path',
        content: 'Authentic Islam is based on the Quran, authentic Sunnah, and the understanding of the Companions. This is the path of "Ahlus Sunnah wal Jama\'ah" - the main body of Muslims throughout history. It avoids extremes and follows the clear guidance of the Prophet ﷺ.',
        verse: {
            arabic: 'وَمَن يُشَاقِقِ الرَّسُولَ مِن بَعْدِ مَا تَبَيَّنَ لَهُ الْهُدَىٰ وَيَتَّبِعْ غَيْرَ سَبِيلِ الْمُؤْمِنِينَ نُوَلِّهِ مَا تَوَلَّىٰ',
            translation: 'And whoever opposes the Messenger after guidance has become clear to him and follows other than the way of the believers - We will give him what he has taken and drive him into Hell.',
            reference: 'Surah An-Nisa 4:115'
        },
        options: [
            { label: 'Learn the Five Pillars', next: 'islam_basics' },
            { label: 'Understand the Sunnah', next: 'about_sunnah' },
            { label: 'Learn about the Companions', next: 'about_sahaba' }
        ]
    },

    // About Sahaba
    about_sahaba: {
        id: 'about_sahaba',
        title: 'The Noble Companions',
        content: 'The Companions (Sahaba) were the Prophet\'s ﷺ students who learned Islam directly from him. They sacrificed everything for Islam, preserved the Quran and Hadith, and spread Islam to the world. Without them, we would have no Islam today. We love and honor them all.',
        verse: {
            arabic: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',
            translation: 'You are the best nation produced for mankind.',
            reference: 'Surah Ali Imran 3:110 - First addressed to the Companions'
        },
        options: [
            { label: 'Learn Islam basics', next: 'islam_basics' },
            { label: 'Understand the Sunnah', next: 'about_sunnah' },
            { label: 'Back to beginning', next: 'start' }
        ]
    },

    // Bid'ah Introduction
    bidah_intro: {
        id: 'bidah_intro',
        title: 'Understanding Innovation (Bid\'ah)',
        content: 'The Prophet ﷺ said: "Every innovation is misguidance, and every misguidance is in the Fire." This refers to religious innovations - inventing new acts of worship or beliefs. Islam was completed during the Prophet\'s ﷺ time; nothing needs to be added.',
        verse: {
            arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',
            translation: 'This day I have perfected for you your religion and completed My favor upon you.',
            reference: 'Surah Al-Ma\'idah 5:3'
        },
        options: [
            { label: 'Examples of innovations', next: 'bidah_examples' },
            { label: 'How to follow pure Sunnah', next: 'about_sunnah' },
            { label: 'Back to beginning', next: 'start' }
        ]
    },

    // Bid'ah Examples
    bidah_examples: {
        id: 'bidah_examples',
        title: 'Examples of Religious Innovation',
        content: 'Examples include: celebrating the Prophet\'s birthday (Mawlid) with special rituals, specific dhikr gatherings not taught by the Prophet ﷺ, building shrines over graves, praying to saints, and creating new pillars of faith. The safest path is to stick to what the Prophet ﷺ and Companions practiced.',
        verse: {
            arabic: 'أَمْ لَهُمْ شُرَكَاءُ شَرَعُوا لَهُم مِّنَ الدِّينِ مَا لَمْ يَأْذَن بِهِ اللَّهُ',
            translation: 'Or have they partners who have ordained for them a religion which Allah has not allowed?',
            reference: 'Surah Ash-Shura 42:21'
        },
        options: [
            { label: 'How to worship correctly', next: 'about_sunnah' },
            { label: 'Islam basics', next: 'islam_basics' },
            { label: 'Back to beginning', next: 'start' }
        ]
    },

    // Tawassul Topic
    tawassul_topic: {
        id: 'tawassul_topic',
        title: 'Understanding Tawassul',
        content: 'Permissible Tawassul includes: asking Allah through His names, through your good deeds, or asking a living person to make dua for you. Impermissible is asking the dead to intercede or invoking their status with Allah. The Companions never asked through the Prophet ﷺ after his death.',
        verse: {
            arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
            translation: 'And to Allah belong the most beautiful names, so invoke Him by them.',
            reference: 'Surah Al-A\'raf 7:180'
        },
        options: [
            { label: 'Continue learning', next: 'authentic_islam' },
            { label: 'Back to intercession', next: 'intercession_topic' },
            { label: 'Start over', next: 'start' }
        ]
    },

    // Historical Context
    historical_context: {
        id: 'historical_context',
        title: 'Historical Development',
        content: 'After the Prophet\'s ﷺ death, the community chose Abu Bakr through Shura (consultation). Ali (RA) eventually gave bay\'ah. The split came later with political disputes. Many Shia doctrines developed centuries after - Twelve Imams, hidden Imam, and cursing Companions were not from early Islam.',
        verse: {
            arabic: 'وَلَا تَكُونُوا كَالَّذِينَ تَفَرَّقُوا وَاخْتَلَفُوا مِن بَعْدِ مَا جَاءَهُمُ الْبَيِّنَاتُ',
            translation: 'And do not be like those who became divided and differed after the clear proofs had come to them.',
            reference: 'Surah Ali Imran 3:105'
        },
        options: [
            { label: 'How was Abu Bakr chosen?', next: 'abubakr_selection' },
            { label: 'What did Ali do?', next: 'ali_accepted_caliphs' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Abu Bakr Selection
    abubakr_selection: {
        id: 'abubakr_selection',
        title: 'The Selection of Abu Bakr',
        content: 'After the Prophet\'s ﷺ death, the Muslims gathered at Saqifah. After discussion, they chose Abu Bakr based on: his closeness to the Prophet ﷺ, being chosen to lead prayers, his companionship in the cave, and his knowledge and piety. Ali later gave bay\'ah and served loyally.',
        verse: {
            arabic: 'وَشَاوِرْهُمْ فِي الْأَمْرِ',
            translation: 'And consult them in the matter.',
            reference: 'Surah Ali Imran 3:159'
        },
        options: [
            { label: 'Ali gave bay\'ah?', next: 'ali_accepted_caliphs' },
            { label: 'Continue learning', next: 'authentic_islam' },
            { label: 'Back to beginning', next: 'start' }
        ]
    },

    // Sunni Beliefs
    sunni_beliefs: {
        id: 'sunni_beliefs',
        title: 'What Sunnis Believe',
        content: 'Sunnis believe in: The Quran and authentic Sunnah as the only sources of religion, the righteousness of all Companions, the four Rightly Guided Caliphs in order, love for Ahlul Bayt without extremism, direct worship of Allah alone, and no intercession except on the Day of Judgment by Allah\'s permission.',
        verse: {
            arabic: 'اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ وَلَا تَتَّبِعُوا مِن دُونِهِ أَوْلِيَاءَ',
            translation: 'Follow what has been revealed to you from your Lord and do not follow other than Him any allies.',
            reference: 'Surah Al-A\'raf 7:3'
        },
        options: [
            { label: 'Learn about the Companions', next: 'about_sahaba' },
            { label: 'Islam basics', next: 'islam_basics' },
            { label: 'Back to Sunni/Shia', next: 'sunni_shia_intro' }
        ]
    },

    // Prophet's love for Sahaba
    prophet_love_sahaba: {
        id: 'prophet_love_sahaba',
        title: 'The Prophet\'s Love for His Companions',
        content: 'The Prophet ﷺ loved his Companions dearly. He praised Abu Bakr and Umar specifically, called Uthman modest, honored Ali and his family, and prayed for them all. He married his daughters to Uthman and Ali. His household and Companions loved each other deeply.',
        verse: {
            arabic: 'مُّحَمَّدٌ رَّسُولُ اللَّهِ وَالَّذِينَ مَعَهُ',
            translation: 'Muhammad is the Messenger of Allah; and those with him...',
            reference: 'Surah Al-Fath 48:29'
        },
        options: [
            { label: 'Continue to evidence for Sahaba', next: 'sahaba_evidence' },
            { label: 'What about Ahlul Bayt?', next: 'ahlul_bayt_sunnah' },
            { label: 'Back to beginning', next: 'start' }
        ]
    },

    // ============ ORIGINAL NODES (Kept and expanded) ============

    // Branch: Believes in God
    believes_god: {
        id: 'believes_god',
        title: {
            en: 'You Believe in a Creator',
            ar: 'أنت تؤمن بالخالق',
            fr: 'Vous Croyez en un Créateur',
            ur: 'آپ خالق پر ایمان رکھتے ہیں',
            tr: 'Bir Yaratıcıya İnanıyorsunuz',
            id: 'Anda Percaya pada Pencipta'
        },
        content: {
            en: 'That\'s wonderful! Belief in One God is the foundation of Islam. Muslims believe in the same God worshipped by Abraham, Moses, and Jesus - called "Allah" in Arabic (which simply means "The God").',
            ar: 'هذا رائع! الإيمان بالله الواحد هو أساس الإسلام. يؤمن المسلمون بنفس الإله الذي عبده إبراهيم وموسى وعيسى - يسمى "الله" بالعربية.',
            fr: 'C\'est merveilleux! La croyance en un Dieu Unique est le fondement de l\'Islam. Les musulmans croient au même Dieu adoré par Abraham, Moïse et Jésus - appelé "Allah" en arabe.',
            ur: 'یہ بہت اچھی بات ہے! ایک اللہ پر ایمان اسلام کی بنیاد ہے۔ مسلمان اسی خدا پر ایمان رکھتے ہیں جس کی عبادت ابراہیم، موسیٰ اور عیسیٰ نے کی - عربی میں "اللہ" کہلاتا ہے۔',
            tr: 'Bu harika! Tek Tanrı\'ya inanç İslam\'ın temelidir. Müslümanlar İbrahim, Musa ve İsa\'nın ibadet ettiği aynı Tanrı\'ya inanır - Arapça\'da "Allah" olarak adlandırılır.',
            id: 'Itu luar biasa! Kepercayaan pada Tuhan Yang Esa adalah dasar Islam. Muslim percaya pada Tuhan yang sama yang disembah oleh Ibrahim, Musa, dan Isa - disebut "Allah" dalam bahasa Arab.'
        },
        verse: {
            arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
            translation: {
                en: 'Say: He is Allah, the One.',
                ar: 'قل هو الله أحد.',
                fr: 'Dis: Il est Allah, l\'Unique.',
                ur: 'کہو: وہ اللہ ہے، ایک۔',
                tr: 'De ki: O, Allah\'tır, bir tektir.',
                id: 'Katakanlah: Dialah Allah, Yang Maha Esa.'
            },
            reference: 'Surah Al-Ikhlas 112:1'
        },
        options: [
            { label: { en: 'I believe God sends prophets to guide humanity', ar: 'أؤمن أن الله يرسل الأنبياء لهداية البشرية', fr: 'Je crois que Dieu envoie des prophètes pour guider l\'humanité', ur: 'میں مانتا ہوں کہ اللہ انسانیت کی رہنمائی کے لیے نبی بھیجتا ہے', tr: 'Tanrı\'nın insanlığa rehberlik için peygamberler gönderdiğine inanıyorum', id: 'Saya percaya Tuhan mengutus nabi untuk membimbing umat manusia' }, next: 'believes_prophets' },
            { label: { en: 'I\'m not sure about prophets', ar: 'لست متأكداً بشأن الأنبياء', fr: 'Je ne suis pas sûr des prophètes', ur: 'مجھے نبیوں کے بارے میں یقین نہیں', tr: 'Peygamberler konusunda emin değilim', id: 'Saya tidak yakin tentang nabi' }, next: 'learn_prophets' },
            { label: { en: 'What makes Islam different?', ar: 'ما الذي يميز الإسلام؟', fr: 'Qu\'est-ce qui rend l\'Islam différent?', ur: 'اسلام کو کیا منفرد بناتا ہے؟', tr: 'İslam\'ı farklı kılan nedir?', id: 'Apa yang membuat Islam berbeda?' }, next: 'islam_unique' },
            { label: { en: 'What is the purpose of life?', ar: 'ما هو الغرض من الحياة؟', fr: 'Quel est le but de la vie?', ur: 'زندگی کا مقصد کیا ہے؟', tr: 'Hayatın amacı nedir?', id: 'Apa tujuan hidup?' }, next: 'purpose_of_life' }
        ]
    },

    // Purpose of Life
    purpose_of_life: {
        id: 'purpose_of_life',
        title: {
            en: 'Why Are We Here?',
            ar: 'لماذا نحن هنا؟',
            fr: 'Pourquoi Sommes-Nous Ici?',
            ur: 'ہم یہاں کیوں ہیں؟',
            tr: 'Neden Buradayız?',
            id: 'Mengapa Kita Di Sini?'
        },
        content: {
            en: 'Islam answers the fundamental question of existence clearly: We were created to know and worship Allah. This worship isn\'t just prayer - it\'s living a life of purpose, gratitude, justice, and preparation for the eternal life to come.',
            ar: 'يجيب الإسلام على السؤال الأساسي للوجود بوضوح: خُلقنا لنعرف الله ونعبده. هذه العبادة ليست مجرد صلاة - إنها حياة هادفة، شكر، عدل، واستعداد للحياة الأبدية القادمة.',
            fr: 'L\'Islam répond clairement à la question fondamentale de l\'existence: Nous avons été créés pour connaître et adorer Allah. Cette adoration n\'est pas que la prière - c\'est vivre une vie de but, de gratitude, de justice et de préparation pour la vie éternelle.',
            ur: 'اسلام وجود کے بنیادی سوال کا واضح جواب دیتا ہے: ہمیں اللہ کو جاننے اور اس کی عبادت کے لیے پیدا کیا گیا۔ یہ عبادت صرف نماز نہیں - یہ مقصد، شکرگزاری، انصاف اور ابدی زندگی کی تیاری کی زندگی ہے۔',
            tr: 'İslam varoluşun temel sorusunu açıkça cevaplar: Allah\'ı tanımak ve O\'na ibadet etmek için yaratıldık. Bu ibadet sadece namaz değil - amaç, şükür, adalet ve ebedi hayata hazırlık ile dolu bir hayattır.',
            id: 'Islam menjawab pertanyaan fundamental keberadaan dengan jelas: Kita diciptakan untuk mengenal dan menyembah Allah. Ibadah ini bukan hanya shalat - ini adalah hidup dengan tujuan, syukur, keadilan, dan persiapan untuk kehidupan kekal.'
        },
        verse: {
            arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
            translation: {
                en: 'And I did not create the jinn and mankind except to worship Me.',
                ar: 'وما خلقت الجن والإنس إلا ليعبدون.',
                fr: 'Je n\'ai créé les djinns et les hommes que pour qu\'ils M\'adorent.',
                ur: 'اور میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا۔',
                tr: 'Ben cinleri ve insanları ancak bana ibadet etsinler diye yarattım.',
                id: 'Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka menyembah-Ku.'
            },
            reference: 'Surah Adh-Dhariyat 51:56'
        },
        options: [
            { label: { en: 'What happens after death?', ar: 'ماذا يحدث بعد الموت؟', fr: 'Que se passe-t-il après la mort?', ur: 'موت کے بعد کیا ہوتا ہے؟', tr: 'Ölümden sonra ne olur?', id: 'Apa yang terjadi setelah kematian?' }, next: 'afterlife' },
            { label: { en: 'How do we worship?', ar: 'كيف نعبد الله؟', fr: 'Comment adorons-nous?', ur: 'ہم عبادت کیسے کریں؟', tr: 'Nasıl ibadet ederiz?', id: 'Bagaimana kita beribadah?' }, next: 'islam_basics' },
            { label: { en: 'Tell me about prophets', ar: 'أخبرني عن الأنبياء', fr: 'Parlez-moi des prophètes', ur: 'مجھے انبیاء کے بارے میں بتائیں', tr: 'Peygamberler hakkında anlat', id: 'Ceritakan tentang nabi-nabi' }, next: 'believes_prophets' }
        ]
    },

    // Afterlife
    afterlife: {
        id: 'afterlife',
        title: {
            en: 'The Life After Death',
            ar: 'الحياة بعد الموت',
            fr: 'La Vie Après la Mort',
            ur: 'موت کے بعد کی زندگی',
            tr: 'Ölümden Sonraki Hayat',
            id: 'Kehidupan Setelah Kematian'
        },
        content: {
            en: 'Islam teaches that this life is a test. After death, we will be resurrected and held accountable for our deeds. Those who believed and did good will enter Paradise - eternal bliss. Those who rejected truth and did evil face punishment. But Allah\'s mercy is vast.',
            ar: 'يعلمنا الإسلام أن هذه الحياة اختبار. بعد الموت، سنُبعث ونُحاسب على أعمالنا. الذين آمنوا وعملوا الصالحات يدخلون الجنة - النعيم الأبدي. أما الذين رفضوا الحق وعملوا الشر فيواجهون العقاب. لكن رحمة الله واسعة.',
            fr: 'L\'Islam enseigne que cette vie est un test. Après la mort, nous serons ressuscités et tenus responsables de nos actes. Ceux qui ont cru et fait le bien entreront au Paradis - la félicité éternelle. Ceux qui ont rejeté la vérité font face au châtiment. Mais la miséricorde d\'Allah est vaste.',
            ur: 'اسلام سکھاتا ہے کہ یہ زندگی ایک امتحان ہے۔ موت کے بعد، ہمیں اٹھایا جائے گا اور اپنے اعمال کا حساب دینا ہوگا۔ جو ایمان لائے اور نیکی کی وہ جنت میں داخل ہوں گے - ابدی خوشی۔ لیکن اللہ کی رحمت وسیع ہے۔',
            tr: 'İslam bu hayatın bir sınav olduğunu öğretir. Ölümden sonra diriltileceğiz ve amellerimizden hesaba çekileceğiz. İman edip iyi işler yapanlar Cennete girecek - ebedi mutluluk. Ama Allah\'ın rahmeti geniştir.',
            id: 'Islam mengajarkan bahwa kehidupan ini adalah ujian. Setelah kematian, kita akan dibangkitkan dan dimintai pertanggungjawaban atas perbuatan kita. Mereka yang beriman dan berbuat baik akan masuk Surga - kebahagiaan abadi. Tetapi rahmat Allah sangat luas.'
        },
        verse: {
            arabic: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',
            translation: {
                en: 'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.',
                ar: 'كل نفس ذائقة الموت وإنما توفون أجوركم يوم القيامة.',
                fr: 'Toute âme goûtera la mort, et vous ne recevrez votre pleine rétribution que le Jour de la Résurrection.',
                ur: 'ہر جان موت کا مزہ چکھے گی اور قیامت کے دن ہی تمہیں پورا بدلہ دیا جائے گا۔',
                tr: 'Her nefis ölümü tadacaktır ve ancak kıyamet günü amellerinizin karşılığı size tam olarak verilecektir.',
                id: 'Setiap jiwa akan merasakan kematian dan kamu akan diberikan balasanmu yang sempurna pada hari kiamat.'
            },
            reference: 'Surah Ali Imran 3:185'
        },
        options: [
            { label: { en: 'How do I prepare for it?', ar: 'كيف أستعد لها؟', fr: 'Comment m\'y préparer?', ur: 'میں اس کے لیے کیسے تیاری کروں؟', tr: 'Nasıl hazırlanırım?', id: 'Bagaimana cara mempersiapkannya?' }, next: 'islam_basics' },
            { label: { en: 'How does one achieve salvation?', ar: 'كيف يحقق المرء الخلاص؟', fr: 'Comment atteindre le salut?', ur: 'نجات کیسے حاصل ہوتی ہے؟', tr: 'Kurtuluş nasıl elde edilir?', id: 'Bagaimana cara mencapai keselamatan?' }, next: 'salvation' },
            { label: { en: 'Continue learning', ar: 'استمر في التعلم', fr: 'Continuer à apprendre', ur: 'سیکھنا جاری رکھیں', tr: 'Öğrenmeye devam et', id: 'Lanjutkan belajar' }, next: 'believes_prophets' }
        ]
    },

    // Branch: Believes in Prophets
    believes_prophets: {
        id: 'believes_prophets',
        title: {
            en: 'Prophets: God\'s Messengers',
            ar: 'الأنبياء: رسل الله',
            fr: 'Les Prophètes: Messagers de Dieu',
            ur: 'انبیاء: اللہ کے رسول',
            tr: 'Peygamberler: Allah\'ın Elçileri',
            id: 'Nabi-Nabi: Utusan Allah'
        },
        content: {
            en: 'Muslims believe in ALL prophets sent by God - including Adam, Noah, Abraham, Moses, and Jesus (peace be upon them all). We believe Muhammad ﷺ is the final prophet, sent with the complete and preserved message.',
            ar: 'يؤمن المسلمون بجميع الأنبياء الذين أرسلهم الله - بما في ذلك آدم ونوح وإبراهيم وموسى وعيسى (عليهم السلام جميعاً). نؤمن أن محمداً ﷺ هو النبي الخاتم، أُرسل بالرسالة الكاملة والمحفوظة.',
            fr: 'Les Musulmans croient en TOUS les prophètes envoyés par Dieu - y compris Adam, Noé, Abraham, Moïse et Jésus (paix sur eux tous). Nous croyons que Muhammad ﷺ est le dernier prophète, envoyé avec le message complet et préservé.',
            ur: 'مسلمان اللہ کے بھیجے ہوئے تمام نبیوں پر ایمان رکھتے ہیں - بشمول آدم، نوح، ابراہیم، موسیٰ اور عیسیٰ (ان سب پر سلام)۔ ہم ایمان رکھتے ہیں کہ محمد ﷺ آخری نبی ہیں، جنہیں مکمل اور محفوظ پیغام کے ساتھ بھیجا گیا۔',
            tr: 'Müslümanlar Allah tarafından gönderilen TÜM peygamberlere inanır - Adem, Nuh, İbrahim, Musa ve İsa dahil (hepsine selam olsun). Muhammed ﷺ\'in eksiksiz ve korunmuş mesajla gönderilen son peygamber olduğuna inanırız.',
            id: 'Muslim percaya pada SEMUA nabi yang diutus Allah - termasuk Adam, Nuh, Ibrahim, Musa, dan Isa (semoga kedamaian atas mereka semua). Kami percaya Muhammad ﷺ adalah nabi terakhir, diutus dengan pesan yang lengkap dan terpelihara.'
        },
        verse: {
            arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ',
            translation: {
                en: 'The Messenger has believed in what was revealed to him from his Lord, and so have the believers.',
                ar: 'آمن الرسول بما أنزل إليه من ربه والمؤمنون.',
                fr: 'Le Messager a cru en ce qui lui a été révélé de son Seigneur, ainsi que les croyants.',
                ur: 'رسول اس پر ایمان لایا جو اس کے رب کی طرف سے نازل ہوا اور مومنین بھی۔',
                tr: 'Peygamber Rabbinden kendisine indirilene iman etti, müminler de.',
                id: 'Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman.'
            },
            reference: 'Surah Al-Baqarah 2:285'
        },
        options: [
            { label: { en: 'Tell me about Prophet Muhammad ﷺ', ar: 'أخبرني عن النبي محمد ﷺ', fr: 'Parlez-moi du Prophète Muhammad ﷺ', ur: 'مجھے نبی محمد ﷺ کے بارے میں بتائیں', tr: 'Peygamber Muhammed ﷺ hakkında anlat', id: 'Ceritakan tentang Nabi Muhammad ﷺ' }, next: 'about_muhammad' },
            { label: { en: 'What about Jesus in Islam?', ar: 'ماذا عن عيسى في الإسلام؟', fr: 'Qu\'en est-il de Jésus dans l\'Islam?', ur: 'اسلام میں عیسیٰ کے بارے میں کیا؟', tr: 'İslam\'da İsa hakkında ne dersiniz?', id: 'Bagaimana dengan Isa dalam Islam?' }, next: 'jesus_islam' },
            { label: { en: 'Why is Muhammad the final prophet?', ar: 'لماذا محمد هو النبي الخاتم؟', fr: 'Pourquoi Muhammad est-il le dernier prophète?', ur: 'محمد آخری نبی کیوں ہیں؟', tr: 'Muhammed neden son peygamber?', id: 'Mengapa Muhammad nabi terakhir?' }, next: 'final_prophet' },
            { label: { en: 'What about Abraham?', ar: 'ماذا عن إبراهيم؟', fr: 'Qu\'en est-il d\'Abraham?', ur: 'ابراہیم کے بارے میں کیا؟', tr: 'İbrahim hakkında ne dersiniz?', id: 'Bagaimana dengan Ibrahim?' }, next: 'about_ibrahim' }
        ]
    },

    // About Ibrahim
    about_ibrahim: {
        id: 'about_ibrahim',
        title: 'Ibrahim (Abraham) - Father of Prophets',
        content: 'Ibrahim (peace be upon him) is one of the greatest prophets. He was a pure monotheist who rejected idolatry. Muslims, Jews, and Christians all trace their spiritual lineage to him. He built the Kaaba with his son Ismail, and his descendants include Moses, Jesus, and Muhammad ﷺ.',
        verse: {
            arabic: 'إِنَّ إِبْرَاهِيمَ كَانَ أُمَّةً قَانِتًا لِّلَّهِ حَنِيفًا وَلَمْ يَكُ مِنَ الْمُشْرِكِينَ',
            translation: 'Indeed, Abraham was a nation, devoutly obedient to Allah, inclining toward truth, and he was not of the polytheists.',
            reference: 'Surah An-Nahl 16:120'
        },
        options: [
            { label: 'About Prophet Muhammad ﷺ', next: 'about_muhammad' },
            { label: 'What about Jesus?', next: 'jesus_islam' },
            { label: 'Islam basics', next: 'islam_basics' }
        ]
    },

    // About Prophet Muhammad
    about_muhammad: {
        id: 'about_muhammad',
        title: 'Prophet Muhammad ﷺ',
        content: 'Muhammad ﷺ was born in Mecca in 570 CE. He was known as "Al-Amin" (The Trustworthy) even before prophethood. At 40, he received revelation from Allah through Angel Jibreel (Gabriel). He taught worship of One God, justice, mercy, and equality of all humans.',
        verse: {
            arabic: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
            translation: 'And indeed, you are of a great moral character.',
            reference: 'Surah Al-Qalam 68:4'
        },
        options: [
            { label: 'What is the Quran?', next: 'about_quran' },
            { label: 'What did he teach?', next: 'teachings' },
            { label: 'His miracles?', next: 'prophet_miracles' },
            { label: 'I want to learn more about Islam', next: 'islam_basics' }
        ]
    },

    // Prophet's Miracles
    prophet_miracles: {
        id: 'prophet_miracles',
        title: 'The Miracles of Muhammad ﷺ',
        content: 'The greatest miracle given to Muhammad ﷺ is the Quran itself - a literary, scientific, and spiritual miracle that remains to this day. He also had other miracles: the splitting of the moon, water flowing from his hands, and numerous accurate prophecies that have come true.',
        verse: {
            arabic: 'اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ',
            translation: 'The Hour has come near, and the moon has split.',
            reference: 'Surah Al-Qamar 54:1'
        },
        options: [
            { label: 'Tell me about the Quran', next: 'about_quran' },
            { label: 'His prophecies', next: 'prophecies' },
            { label: 'Islam basics', next: 'islam_basics' }
        ]
    },

    // Prophecies
    prophecies: {
        id: 'prophecies',
        title: 'Prophecies of the Prophet ﷺ',
        content: 'The Prophet ﷺ made many prophecies that have come true: the conquest of Persia and Rome, tall buildings in Arabia, widespread communication technology, and moral decline in later times. These fulfilled prophecies testify to his prophethood.',
        verse: {
            arabic: 'وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ',
            translation: 'Nor does he speak from his own desire. It is not but a revelation revealed.',
            reference: 'Surah An-Najm 53:3-4'
        },
        options: [
            { label: 'This is convincing', next: 'about_quran' },
            { label: 'Islam basics', next: 'islam_basics' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Jesus in Islam
    jesus_islam: {
        id: 'jesus_islam',
        title: 'Jesus (Isa) in Islam',
        content: 'Muslims love and revere Jesus (Isa in Arabic)! We believe he was: a mighty prophet, born miraculously to Virgin Mary, performed miracles by God\'s permission, and will return before the Day of Judgment. The difference is that Muslims believe Jesus was a human prophet, not divine.',
        verse: {
            arabic: 'إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ',
            translation: 'Indeed, the example of Jesus to Allah is like that of Adam. He created him from dust; then He said to him, "Be," and he was.',
            reference: 'Surah Ali Imran 3:59'
        },
        options: [
            { label: 'What about the crucifixion?', next: 'crucifixion' },
            { label: 'Why don\'t Muslims believe Jesus is God?', next: 'jesus_not_god' },
            { label: 'His return?', next: 'jesus_return' },
            { label: 'Continue learning about Islam', next: 'islam_basics' }
        ]
    },

    // Jesus's Return
    jesus_return: {
        id: 'jesus_return',
        title: 'The Return of Jesus',
        content: 'Muslims believe Jesus (peace be upon him) was not crucified but raised to Heaven. He will return near the Day of Judgment to fight the false messiah (Dajjal), establish justice, and rule according to Islamic law. He will die a natural death and be buried next to Prophet Muhammad ﷺ.',
        verse: {
            arabic: 'وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا',
            translation: 'And indeed, Jesus will be a sign for the Hour, so do not be in doubt of it.',
            reference: 'Surah Az-Zukhruf 43:61'
        },
        options: [
            { label: 'Continue learning Islam', next: 'islam_basics' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Crucifixion
    crucifixion: {
        id: 'crucifixion',
        title: 'The Crucifixion Question',
        content: 'The Quran states that Jesus was not killed or crucified, but it was made to appear so. Allah raised Jesus to Himself. Muslims believe Jesus will return to earth before the Day of Judgment to establish justice.',
        verse: {
            arabic: 'وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ',
            translation: 'And they did not kill him, nor did they crucify him; but it was made to appear so to them.',
            reference: 'Surah An-Nisa 4:157'
        },
        options: [
            { label: 'How do Muslims achieve salvation?', next: 'salvation' },
            { label: 'Continue learning about Islam', next: 'islam_basics' }
        ]
    },

    // Jesus not God
    jesus_not_god: {
        id: 'jesus_not_god',
        title: 'The Nature of Jesus',
        content: 'Muslims believe Jesus was one of the mightiest messengers, but not divine because: 1) Jesus himself prayed to God, 2) He said "the Father is greater than I", 3) He had human needs (ate, slept), 4) The Trinity concept developed centuries after Jesus.',
        verse: {
            arabic: 'لَّقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ',
            translation: 'They have certainly disbelieved who say, "Allah is the Messiah, the son of Mary."',
            reference: 'Surah Al-Ma\'idah 5:72'
        },
        options: [
            { label: 'How do Muslims achieve salvation?', next: 'salvation' },
            { label: 'What is the Quran?', next: 'about_quran' },
            { label: 'Continue learning about Islam', next: 'islam_basics' }
        ]
    },

    // Salvation
    salvation: {
        id: 'salvation',
        title: 'Salvation in Islam',
        content: 'In Islam, salvation is through: 1) Belief in One God (Tawheed), 2) Following His guidance, 3) Sincere repentance (Tawbah), 4) Good deeds. Allah is the Most Merciful - His mercy encompasses all things. No one needs to die for our sins.',
        verse: {
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
            translation: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
            reference: 'Surah Az-Zumar 39:53'
        },
        options: [
            { label: 'What are the basics of Islam?', next: 'islam_basics' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Unsure about God
    unsure_god: {
        id: 'unsure_god',
        title: {
            en: 'Questioning God\'s Existence',
            ar: 'التساؤل عن وجود الله',
            fr: 'Questionner l\'Existence de Dieu',
            ur: 'اللہ کے وجود پر سوال',
            tr: 'Tanrı\'nın Varlığını Sorgulamak',
            id: 'Mempertanyakan Keberadaan Tuhan'
        },
        content: {
            en: 'It\'s okay to have questions - Islam encourages sincere inquiry. Let\'s think together: Everything that begins to exist has a cause. The universe began to exist. Therefore, the universe has a cause. This cause must be uncaused, timeless, and powerful.',
            ar: 'لا بأس بالتساؤل - الإسلام يشجع البحث الصادق. لنفكر معاً: كل شيء يبدأ في الوجود له سبب. الكون بدأ في الوجود. إذن الكون له سبب. هذا السبب يجب أن يكون غير مسبب، أزلي، وقدير.',
            fr: 'C\'est normal d\'avoir des questions - l\'Islam encourage la recherche sincère. Réfléchissons ensemble: Tout ce qui commence à exister a une cause. L\'univers a commencé à exister. Donc l\'univers a une cause.',
            ur: 'سوالات ہونا ٹھیک ہے - اسلام مخلصانہ تحقیق کی حوصلہ افزائی کرتا ہے۔ آئیں مل کر سوچیں: ہر چیز جو وجود میں آتی ہے اس کا ایک سبب ہوتا ہے۔ کائنات وجود میں آئی۔ لہذا کائنات کا ایک سبب ہے۔',
            tr: 'Soru sormak sorun değil - İslam samimi araştırmayı teşvik eder. Birlikte düşünelim: Var olmaya başlayan her şeyin bir sebebi vardır. Evren var olmaya başladı. Dolayısıyla evrenin bir sebebi vardır.',
            id: 'Tidak apa-apa memiliki pertanyaan - Islam mendorong penyelidikan yang tulus. Mari berpikir bersama: Segala sesuatu yang mulai ada memiliki penyebab. Alam semesta mulai ada. Oleh karena itu, alam semesta memiliki penyebab.'
        },
        verse: {
            arabic: 'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ',
            translation: {
                en: 'Do they not look at the camels - how they are created?',
                ar: 'أفلا ينظرون إلى الإبل كيف خلقت؟',
                fr: 'Ne regardent-ils pas les chameaux, comment ils ont été créés?',
                ur: 'کیا وہ اونٹوں کو نہیں دیکھتے کہ کیسے پیدا کیے گئے؟',
                tr: 'Develere bakmıyorlar mı, nasıl yaratıldılar?',
                id: 'Maka apakah mereka tidak memperhatikan unta bagaimana ia diciptakan?'
            },
            reference: 'Surah Al-Ghashiyah 88:17'
        },
        options: [
            { label: { en: 'Tell me more about evidence for God', ar: 'أخبرني المزيد عن أدلة وجود الله', fr: 'Dites-moi plus sur les preuves de Dieu', ur: 'مجھے اللہ کے وجود کے ثبوت کے بارے میں مزید بتائیں', tr: 'Tanrı\'nın varlığına dair kanıtları anlat', id: 'Ceritakan lebih banyak tentang bukti keberadaan Tuhan' }, next: 'evidence_god' },
            { label: { en: 'What about science and Islam?', ar: 'ماذا عن العلم والإسلام؟', fr: 'Qu\'en est-il de la science et de l\'Islam?', ur: 'سائنس اور اسلام کے بارے میں کیا؟', tr: 'Bilim ve İslam hakkında ne dersiniz?', id: 'Bagaimana dengan sains dan Islam?' }, next: 'science_islam' },
            { label: { en: 'The design argument', ar: 'حجة التصميم', fr: 'L\'argument du dessein', ur: 'ڈیزائن کی دلیل', tr: 'Tasarım argümanı', id: 'Argumen desain' }, next: 'design_argument' },
            { label: { en: 'I\'m starting to believe, what\'s next?', ar: 'بدأت أؤمن، ما التالي؟', fr: 'Je commence à croire, quelle est la suite?', ur: 'میں ایمان لانا شروع کر رہا ہوں، آگے کیا؟', tr: 'İnanmaya başlıyorum, sırada ne var?', id: 'Saya mulai percaya, apa selanjutnya?' }, next: 'believes_god' }
        ]
    },

    // Design Argument
    design_argument: {
        id: 'design_argument',
        title: {
            en: 'The Design in Creation',
            ar: 'التصميم في الخلق',
            fr: 'Le Dessein dans la Création',
            ur: 'تخلیق میں ڈیزائن',
            tr: 'Yaratılıştaki Tasarım',
            id: 'Desain dalam Penciptaan'
        },
        content: {
            en: 'Look at the human body: 37 trillion cells working in harmony, eyes more complex than any camera, a brain with 86 billion neurons. Look at the universe: precisely balanced forces, Earth perfectly positioned for life. Does this look like random chance or intelligent design?',
            ar: 'انظر إلى جسم الإنسان: 37 تريليون خلية تعمل بانسجام، عيون أكثر تعقيداً من أي كاميرا، دماغ بـ 86 مليار خلية عصبية. انظر إلى الكون: قوى متوازنة بدقة، الأرض في موقع مثالي للحياة. هل يبدو هذا صدفة عشوائية أم تصميم ذكي؟',
            fr: 'Regardez le corps humain: 37 billions de cellules travaillant en harmonie, des yeux plus complexes que n\'importe quelle caméra, un cerveau avec 86 milliards de neurones. Regardez l\'univers: des forces précisément équilibrées, la Terre parfaitement positionnée pour la vie. Cela ressemble-t-il au hasard ou à un dessein intelligent?',
            ur: 'انسانی جسم کو دیکھیں: 37 ٹریلین خلیے ہم آہنگی سے کام کر رہے ہیں، کسی بھی کیمرے سے زیادہ پیچیدہ آنکھیں، 86 ارب نیورانز والا دماغ۔ کائنات کو دیکھیں: قوتوں کا درست توازن، زمین زندگی کے لیے بالکل صحیح جگہ۔ کیا یہ اتفاقی لگتا ہے یا ذہین ڈیزائن؟',
            tr: 'İnsan vücuduna bakın: 37 trilyon hücre uyum içinde çalışıyor, herhangi bir kameradan daha karmaşık gözler, 86 milyar nöronlu bir beyin. Evrene bakın: tam olarak dengelenmiş kuvvetler, yaşam için mükemmel konumlanmış Dünya. Bu rastgele şans mı yoksa akıllı tasarım mı?',
            id: 'Lihatlah tubuh manusia: 37 triliun sel bekerja harmonis, mata lebih kompleks dari kamera manapun, otak dengan 86 miliar neuron. Lihatlah alam semesta: kekuatan yang seimbang sempurna, Bumi diposisikan sempurna untuk kehidupan. Apakah ini terlihat seperti kebetulan atau desain cerdas?'
        },
        verse: {
            arabic: 'وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ',
            translation: {
                en: 'And within yourselves. Will you not then see?',
                ar: 'وفي أنفسكم أفلا تبصرون؟',
                fr: 'Et en vous-mêmes, ne voyez-vous donc pas?',
                ur: 'اور تمہاری اپنی جانوں میں، کیا تم نہیں دیکھتے؟',
                tr: 'Kendi nefislerinizde de öyle. Hâlâ görmüyor musunuz?',
                id: 'Dan dalam dirimu sendiri, apakah kamu tidak melihat?'
            },
            reference: 'Surah Adh-Dhariyat 51:21'
        },
        options: [
            { label: { en: 'More evidence', ar: 'المزيد من الأدلة', fr: 'Plus de preuves', ur: 'مزید ثبوت', tr: 'Daha fazla kanıt', id: 'Lebih banyak bukti' }, next: 'evidence_god' },
            { label: { en: 'I\'m convinced', ar: 'أنا مقتنع', fr: 'Je suis convaincu', ur: 'میں قائل ہوں', tr: 'İkna oldum', id: 'Saya yakin' }, next: 'believes_god' },
            { label: { en: 'Science and Islam?', ar: 'العلم والإسلام؟', fr: 'Science et Islam?', ur: 'سائنس اور اسلام؟', tr: 'Bilim ve İslam?', id: 'Sains dan Islam?' }, next: 'science_islam' }
        ]
    },

    // Evidence for God
    evidence_god: {
        id: 'evidence_god',
        title: {
            en: 'Evidence for a Creator',
            ar: 'الأدلة على وجود الخالق',
            fr: 'Preuves d\'un Créateur',
            ur: 'خالق کے وجود کے ثبوت',
            tr: 'Yaratıcının Varlığına Kanıt',
            id: 'Bukti Adanya Pencipta'
        },
        content: {
            en: 'Consider: 1) The Fine-Tuning: The universe\'s constants are precisely calibrated for life. 2) DNA\'s Information: Complex coded information requires an intelligent source. 3) Consciousness: Material cannot produce immaterial consciousness. 4) The Quran: Contains knowledge impossible for a 7th-century man.',
            ar: 'تأمل: ١) الضبط الدقيق: ثوابت الكون مضبوطة بدقة للحياة. ٢) معلومات الحمض النووي: المعلومات المشفرة المعقدة تتطلب مصدراً ذكياً. ٣) الوعي: المادة لا يمكنها إنتاج وعي غير مادي. ٤) القرآن: يحتوي على معرفة مستحيلة لرجل في القرن السابع.',
            fr: 'Considérez: 1) Le Réglage Fin: Les constantes de l\'univers sont précisément calibrées pour la vie. 2) L\'Information de l\'ADN: Une information codée complexe nécessite une source intelligente. 3) La Conscience: La matière ne peut pas produire une conscience immatérielle. 4) Le Coran: Contient des connaissances impossibles pour un homme du 7ème siècle.',
            ur: 'غور کریں: ١) باریک ٹیوننگ: کائنات کے اصول زندگی کے لیے درست طور پر ترتیب دیے گئے ہیں۔ ٢) ڈی این اے کی معلومات: پیچیدہ کوڈڈ معلومات ذہین ماخذ کی ضرورت ہے۔ ٣) شعور: مادہ غیر مادی شعور پیدا نہیں کر سکتا۔ ٤) قرآن: ساتویں صدی کے آدمی کے لیے ناممکن علم رکھتا ہے۔',
            tr: 'Düşünün: 1) İnce Ayar: Evrenin sabitleri yaşam için tam olarak kalibre edilmiş. 2) DNA\'nın Bilgisi: Karmaşık kodlanmış bilgi akıllı bir kaynak gerektirir. 3) Bilinç: Madde maddi olmayan bilinç üretemez. 4) Kur\'an: 7. yüzyıl insanı için imkansız bilgiler içerir.',
            id: 'Pertimbangkan: 1) Penyetelan Halus: Konstanta alam semesta dikalibrasi tepat untuk kehidupan. 2) Informasi DNA: Informasi berkode kompleks memerlukan sumber cerdas. 3) Kesadaran: Materi tidak dapat menghasilkan kesadaran non-materi. 4) Al-Quran: Berisi pengetahuan yang mustahil bagi manusia abad ke-7.'
        },
        verse: {
            arabic: 'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',
            translation: {
                en: 'We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.',
                ar: 'سنريهم آياتنا في الآفاق وفي أنفسهم حتى يتبين لهم أنه الحق.',
                fr: 'Nous leur montrerons Nos signes dans les horizons et en eux-mêmes jusqu\'à ce qu\'il leur devienne évident que c\'est la vérité.',
                ur: 'ہم انہیں اپنی نشانیاں آفاق میں اور ان کی اپنی جانوں میں دکھائیں گے یہاں تک کہ ان پر واضح ہو جائے کہ یہ حق ہے۔',
                tr: 'Onlara ufuklarda ve kendi nefislerinde ayetlerimizi göstereceğiz, ta ki bunun hak olduğu onlara açıkça belli oluncaya kadar.',
                id: 'Kami akan memperlihatkan kepada mereka tanda-tanda Kami di segenap ufuk dan pada diri mereka sendiri hingga jelas bagi mereka bahwa itu adalah benar.'
            },
            reference: 'Surah Fussilat 41:53'
        },
        options: [
            { label: { en: 'What about science and Islam?', ar: 'ماذا عن العلم والإسلام؟', fr: 'Qu\'en est-il de la science et de l\'Islam?', ur: 'سائنس اور اسلام کے بارے میں کیا؟', tr: 'Bilim ve İslam hakkında ne dersiniz?', id: 'Bagaimana dengan sains dan Islam?' }, next: 'science_islam' },
            { label: { en: 'I\'m convinced, tell me more about Islam', ar: 'أنا مقتنع، أخبرني المزيد عن الإسلام', fr: 'Je suis convaincu, parlez-moi plus de l\'Islam', ur: 'میں قائل ہوں، مجھے اسلام کے بارے میں مزید بتائیں', tr: 'İkna oldum, İslam hakkında daha fazla anlat', id: 'Saya yakin, ceritakan lebih banyak tentang Islam' }, next: 'believes_god' },
            { label: { en: 'What does the Quran say?', ar: 'ماذا يقول القرآن؟', fr: 'Que dit le Coran?', ur: 'قرآن کیا کہتا ہے؟', tr: 'Kur\'an ne diyor?', id: 'Apa kata Al-Quran?' }, next: 'about_quran' }
        ]
    },

    // Science and Islam
    science_islam: {
        id: 'science_islam',
        title: {
            en: 'Science and Islam',
            ar: 'العلم والإسلام',
            fr: 'Science et Islam',
            ur: 'سائنس اور اسلام',
            tr: 'Bilim ve İslam',
            id: 'Sains dan Islam'
        },
        content: {
            en: 'Islam and science are not in conflict. The Islamic Golden Age led world scientific advancement. The Quran contains statements about embryology, the Big Bang, expanding universe, and water cycle that align with modern science - remarkable for a 7th century book.',
            ar: 'الإسلام والعلم ليسا في صراع. العصر الذهبي الإسلامي قاد التقدم العلمي العالمي. يحتوي القرآن على تصريحات عن علم الأجنة، الانفجار العظيم، الكون المتوسع، ودورة الماء تتوافق مع العلم الحديث - أمر رائع لكتاب من القرن السابع.',
            fr: 'L\'Islam et la science ne sont pas en conflit. L\'Âge d\'Or islamique a mené l\'avancement scientifique mondial. Le Coran contient des déclarations sur l\'embryologie, le Big Bang, l\'univers en expansion et le cycle de l\'eau qui s\'alignent avec la science moderne - remarquable pour un livre du 7ème siècle.',
            ur: 'اسلام اور سائنس میں تضاد نہیں۔ اسلامی سنہری دور نے عالمی سائنسی ترقی کی قیادت کی۔ قرآن میں جنین کی نشوونما، بگ بینگ، پھیلتی کائنات، اور پانی کے چکر کے بارے میں بیانات ہیں جو جدید سائنس سے ہم آہنگ ہیں - ساتویں صدی کی کتاب کے لیے حیرت انگیز۔',
            tr: 'İslam ve bilim çatışma içinde değil. İslam Altın Çağı dünya bilimsel ilerlemesine öncülük etti. Kur\'an embriyoloji, Büyük Patlama, genişleyen evren ve su döngüsü hakkında modern bilimle uyumlu ifadeler içerir - 7. yüzyıl kitabı için dikkat çekici.',
            id: 'Islam dan sains tidak bertentangan. Zaman Keemasan Islam memimpin kemajuan ilmiah dunia. Al-Quran berisi pernyataan tentang embriologi, Big Bang, alam semesta yang mengembang, dan siklus air yang sejalan dengan sains modern - luar biasa untuk buku abad ke-7.'
        },
        verse: {
            arabic: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا',
            translation: {
                en: 'Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them?',
                ar: 'أولم ير الذين كفروا أن السماوات والأرض كانتا رتقاً ففتقناهما؟',
                fr: 'Ceux qui ont mécru n\'ont-ils pas vu que les cieux et la terre étaient une masse compacte? Nous les avons séparés.',
                ur: 'کیا کافروں نے نہیں دیکھا کہ آسمان اور زمین ملے ہوئے تھے پھر ہم نے انہیں جدا کیا؟',
                tr: 'İnkar edenler görmedi mi ki gökler ve yer bitişik idi, biz onları ayırdık?',
                id: 'Apakah orang-orang kafir tidak melihat bahwa langit dan bumi keduanya dahulu adalah sesuatu yang padu, kemudian Kami pisahkan keduanya?'
            },
            reference: 'Surah Al-Anbiya 21:30'
        },
        options: [
            { label: { en: 'More scientific miracles', ar: 'المزيد من المعجزات العلمية', fr: 'Plus de miracles scientifiques', ur: 'مزید سائنسی معجزات', tr: 'Daha fazla bilimsel mucize', id: 'Lebih banyak mukjizat ilmiah' }, next: 'quran_science' },
            { label: { en: 'Tell me about the Quran', ar: 'أخبرني عن القرآن', fr: 'Parlez-moi du Coran', ur: 'مجھے قرآن کے بارے میں بتائیں', tr: 'Kur\'an hakkında anlat', id: 'Ceritakan tentang Al-Quran' }, next: 'about_quran' },
            { label: { en: 'I want to learn Islam basics', ar: 'أريد تعلم أساسيات الإسلام', fr: 'Je veux apprendre les bases de l\'Islam', ur: 'میں اسلام کی بنیادیں سیکھنا چاہتا ہوں', tr: 'İslam\'ın temellerini öğrenmek istiyorum', id: 'Saya ingin belajar dasar-dasar Islam' }, next: 'islam_basics' }
        ]
    },

    // Quran Scientific Facts
    quran_science: {
        id: 'quran_science',
        title: 'Scientific Miracles in the Quran',
        content: 'The Quran contains many statements about the natural world that align with modern scientific discoveries - remarkable for a book from the 7th century. Let\'s explore some specific examples.',
        verse: {
            arabic: 'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',
            translation: 'We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.',
            reference: 'Surah Fussilat 41:53'
        },
        options: [
            { label: 'Embryology miracle', next: 'miracle_embryo' },
            { label: 'Universe & cosmology', next: 'miracle_cosmos' },
            { label: 'Oceans & water', next: 'miracle_seas' },
            { label: 'Mountains & geology', next: 'miracle_mountains' },
            { label: 'Iron from space', next: 'miracle_iron' },
            { label: 'Fingerprints', next: 'miracle_fingerprints' }
        ]
    },

    // Embryology Miracle
    miracle_embryo: {
        id: 'miracle_embryo',
        title: 'Human Embryology in the Quran',
        content: 'The Quran describes human embryonic development with remarkable accuracy: from a drop (nutfah), to a clinging clot (alaqah), to a chewed lump (mudghah), to bones clothed with flesh. The word "alaqah" means something that clings - exactly what the embryo does. This description matches what scientists discovered only with microscopes in the 20th century.',
        verse: {
            arabic: 'ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا',
            translation: 'Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made the lump bones, and We covered the bones with flesh.',
            reference: 'Surah Al-Mu\'minun 23:14'
        },
        options: [
            { label: 'More scientific miracles', next: 'quran_science' },
            { label: 'This is remarkable', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Cosmology Miracle
    miracle_cosmos: {
        id: 'miracle_cosmos',
        title: 'The Big Bang & Expanding Universe',
        content: 'The Quran describes that the heavens and earth were once joined together (the singularity before the Big Bang), and that the universe is expanding. The Big Bang theory was only proposed in 1927 by Georges Lemaître, and the expanding universe was confirmed by Edwin Hubble in 1929. Yet the Quran mentioned this 1,400 years ago!',
        verse: {
            arabic: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا',
            translation: 'Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them?',
            reference: 'Surah Al-Anbiya 21:30'
        },
        options: [
            { label: 'Expanding universe verse', next: 'miracle_expanding' },
            { label: 'More scientific miracles', next: 'quran_science' },
            { label: 'I\'m convinced', next: 'become_muslim' }
        ]
    },

    // Expanding Universe
    miracle_expanding: {
        id: 'miracle_expanding',
        title: 'The Ever-Expanding Universe',
        content: 'The Arabic word "la-mūsi\'ūn" (لَمُوسِعُونَ) means "We are expanders" - present tense, indicating ongoing expansion. This precisely matches what modern cosmology tells us: the universe is continuously expanding, discovered by Hubble nearly 1,400 years after the Quran was revealed.',
        verse: {
            arabic: 'وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ',
            translation: 'And the heaven We constructed with strength, and indeed, We are [its] expander.',
            reference: 'Surah Adh-Dhariyat 51:47'
        },
        options: [
            { label: 'More scientific miracles', next: 'quran_science' },
            { label: 'Tell me about the Quran', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Seas Barrier Miracle
    miracle_seas: {
        id: 'miracle_seas',
        title: 'The Barrier Between Two Seas',
        content: 'The Quran describes a barrier between two bodies of salt water that meet but do not mix. Modern oceanography has confirmed this phenomenon: where different seas meet (like the Mediterranean and Atlantic), they have distinct temperatures, salinity, and densities that create an invisible barrier. This was only discovered with modern technology.',
        verse: {
            arabic: 'مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ',
            translation: 'He released the two seas, meeting [side by side]; between them is a barrier so neither of them transgresses.',
            reference: 'Surah Ar-Rahman 55:19-20'
        },
        options: [
            { label: 'More miracles', next: 'quran_science' },
            { label: 'Learn about Islam', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Mountains Miracle
    miracle_mountains: {
        id: 'miracle_mountains',
        title: 'Mountains as Stakes',
        content: 'The Quran describes mountains as "pegs" or "stakes" (awtad). Modern geology has confirmed that mountains have deep roots beneath the surface that stabilize the Earth\'s crust - just like tent pegs. This wasn\'t known until the 19th century when scientists discovered that mountains extend deep into the lithosphere.',
        verse: {
            arabic: 'وَالْجِبَالَ أَوْتَادًا',
            translation: 'And the mountains as stakes.',
            reference: 'Surah An-Naba 78:7'
        },
        options: [
            { label: 'More miracles', next: 'quran_science' },
            { label: 'Tell me about Islam', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Iron Miracle
    miracle_iron: {
        id: 'miracle_iron',
        title: 'Iron Sent Down from Space',
        content: 'The Quran says iron was "sent down" (anzalna) to Earth. Modern astrophysics confirms that iron was not formed on Earth - it was created in distant stars through nuclear fusion and delivered to Earth through meteorites billions of years ago. The word "sent down" is remarkably accurate!',
        verse: {
            arabic: 'وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ',
            translation: 'And We sent down iron, wherein is great military might and benefits for the people.',
            reference: 'Surah Al-Hadid 57:25'
        },
        options: [
            { label: 'More miracles', next: 'quran_science' },
            { label: 'About the Quran', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Fingerprints Miracle
    miracle_fingerprints: {
        id: 'miracle_fingerprints',
        title: 'The Uniqueness of Fingerprints',
        content: 'When deniers questioned resurrection, the Quran responded by emphasizing Allah\'s ability to recreate even fingertips - highlighting the complexity and uniqueness of fingerprints. Fingerprint uniqueness was only scientifically established in the late 19th century and is now used for identification. Why mention fingertips specifically unless highlighting their unique nature?',
        verse: {
            arabic: 'بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ',
            translation: 'Yes! We are able to put together in perfect order the very tips of his fingers.',
            reference: 'Surah Al-Qiyamah 75:4'
        },
        options: [
            { label: 'More miracles', next: 'quran_science' },
            { label: 'About Islam', next: 'about_quran' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Atheist Start
    atheist_start: {
        id: 'atheist_start',
        title: {
            en: 'For the Thoughtful Skeptic',
            ar: 'للمشكك المفكر',
            fr: 'Pour le Sceptique Réfléchi',
            ur: 'سوچنے والے شکی کے لیے',
            tr: 'Düşünceli Şüpheciler İçin',
            id: 'Untuk Skeptis yang Bijaksana'
        },
        content: {
            en: 'We respect your position and welcome honest dialogue. Let\'s explore together: The existence of objective morality, consciousness, the origin of the universe, and the remarkable precision of life all point toward something beyond the material.',
            ar: 'نحترم موقفك ونرحب بالحوار الصادق. لنستكشف معاً: وجود الأخلاق الموضوعية، والوعي، وأصل الكون، ودقة الحياة المذهلة كلها تشير إلى شيء وراء المادة.',
            fr: 'Nous respectons votre position et accueillons un dialogue honnête. Explorons ensemble: L\'existence de la moralité objective, la conscience, l\'origine de l\'univers et la précision remarquable de la vie pointent tous vers quelque chose au-delà du matériel.',
            ur: 'ہم آپ کے موقف کا احترام کرتے ہیں اور ایمانداری سے گفتگو کا خیرمقدم کرتے ہیں۔ آئیں مل کر جانیں: معروضی اخلاقیات، شعور، کائنات کی ابتدا، اور زندگی کی حیرت انگیز درستگی سب کچھ مادے سے بالاتر کی طرف اشارہ کرتے ہیں۔',
            tr: 'Tutumunuza saygı duyuyor ve dürüst diyaloğu memnuniyetle karşılıyoruz. Birlikte keşfedelim: Nesnel ahlakın varlığı, bilinç, evrenin kökeni ve yaşamın dikkat çekici hassasiyeti hepsi maddenin ötesinde bir şeye işaret ediyor.',
            id: 'Kami menghormati posisi Anda dan menyambut dialog jujur. Mari kita jelajahi bersama: Keberadaan moralitas objektif, kesadaran, asal usul alam semesta, dan ketepatan kehidupan yang luar biasa semuanya menunjuk ke sesuatu di luar materi.'
        },
        verse: {
            arabic: 'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',
            translation: {
                en: 'Were they created by nothing, or were they the creators [of themselves]?',
                ar: 'أم خلقوا من غير شيء أم هم الخالقون؟',
                fr: 'Ont-ils été créés à partir de rien ou sont-ils les créateurs?',
                ur: 'کیا یہ بغیر کسی کے پیدا ہوئے یا یہ خود خالق ہیں؟',
                tr: 'Yoksa hiçbir şey olmaksızın mı yaratıldılar, yoksa yaratıcılar onlar mı?',
                id: 'Apakah mereka diciptakan tanpa sesuatu pun atau mereka yang menciptakan?'
            },
            reference: 'Surah At-Tur 52:35'
        },
        options: [
            { label: { en: 'Show me evidence for God', ar: 'أرني الدليل على وجود الله', fr: 'Montrez-moi les preuves de Dieu', ur: 'مجھے اللہ کے وجود کا ثبوت دکھائیں', tr: 'Tanrı\'nın varlığına dair kanıt göster', id: 'Tunjukkan bukti keberadaan Tuhan' }, next: 'evidence_god' },
            { label: { en: 'What about science?', ar: 'ماذا عن العلم؟', fr: 'Qu\'en est-il de la science?', ur: 'سائنس کے بارے میں کیا؟', tr: 'Bilim ne olacak?', id: 'Bagaimana dengan sains?' }, next: 'science_islam' },
            { label: { en: 'What does Islam teach about morality?', ar: 'ماذا يعلم الإسلام عن الأخلاق؟', fr: 'Qu\'enseigne l\'Islam sur la moralité?', ur: 'اسلام اخلاقیات کے بارے میں کیا سکھاتا ہے؟', tr: 'İslam ahlak hakkında ne öğretir?', id: 'Apa yang Islam ajarkan tentang moralitas?' }, next: 'morality' },
            { label: { en: 'The design argument', ar: 'حجة التصميم', fr: 'L\'argument du dessein', ur: 'ڈیزائن کی دلیل', tr: 'Tasarım argümanı', id: 'Argumen desain' }, next: 'design_argument' }
        ]
    },

    // Morality
    morality: {
        id: 'morality',
        title: 'Morality and Purpose',
        content: 'If there\'s no God, where do objective moral values come from? Why is kindness "good" and cruelty "bad"? Islam teaches that morality comes from Allah - The All-Knowing, All-Wise. This gives life purpose: to know and worship the Creator.',
        verse: {
            arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
            translation: 'And I did not create the jinn and mankind except to worship Me.',
            reference: 'Surah Adh-Dhariyat 51:56'
        },
        options: [
            { label: 'I\'m interested, tell me more about God', next: 'evidence_god' },
            { label: 'What are Islam\'s teachings?', next: 'islam_basics' }
        ]
    },

    // Other Religion Branch
    other_religion: {
        id: 'other_religion',
        title: {
            en: 'Exploring Truth Together',
            ar: 'استكشاف الحقيقة معاً',
            fr: 'Explorer la Vérité Ensemble',
            ur: 'مل کر حقیقت کی تلاش',
            tr: 'Birlikte Gerçeği Keşfetmek',
            id: 'Menjelajahi Kebenaran Bersama'
        },
        content: {
            en: 'We respect all sincere seekers of truth. Islam teaches that God sent prophets to all nations throughout history. Let us share what unites us and respectfully discuss our differences.',
            ar: 'نحترم جميع الباحثين الصادقين عن الحقيقة. يعلم الإسلام أن الله أرسل الأنبياء إلى جميع الأمم عبر التاريخ. دعونا نشارك ما يوحدنا ونناقش خلافاتنا باحترام.',
            fr: 'Nous respectons tous les chercheurs sincères de vérité. L\'Islam enseigne que Dieu a envoyé des prophètes à toutes les nations. Partageons ce qui nous unit et discutons respectueusement de nos différences.',
            ur: 'ہم تمام مخلص حق کے متلاشیوں کا احترام کرتے ہیں۔ اسلام سکھاتا ہے کہ اللہ نے تمام اقوام کو نبی بھیجے۔ آئیں ہم مل کر وہ بات کریں جو ہمیں جوڑتی ہے اور احترام سے اپنے اختلافات پر بات کریں۔',
            tr: 'Tüm samimi hakikat arayıcılarına saygı duyuyoruz. İslam, Allah\'ın tarih boyunca tüm milletlere peygamberler gönderdiğini öğretir. Bizi birleştiren şeyleri paylaşalım ve farklılıklarımızı saygıyla tartışalım.',
            id: 'Kami menghormati semua pencari kebenaran yang tulus. Islam mengajarkan bahwa Allah mengutus nabi-nabi kepada semua bangsa sepanjang sejarah. Mari kita berbagi apa yang menyatukan kita dan mendiskusikan perbedaan kita dengan hormat.'
        },
        verse: {
            arabic: 'قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ',
            translation: {
                en: 'Say, "O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah."',
                ar: 'قل يا أهل الكتاب تعالوا إلى كلمة سواء بيننا وبينكم ألا نعبد إلا الله.',
                fr: 'Dis: "Ô gens du Livre, venez à une parole commune entre nous et vous: que nous n\'adorions qu\'Allah."',
                ur: 'کہو: اے اہل کتاب! ایک ایسی بات کی طرف آؤ جو ہم میں اور تم میں برابر ہے - کہ ہم اللہ کے سوا کسی کی عبادت نہ کریں۔',
                tr: 'De ki: "Ey Ehli Kitap! Bizimle sizin aranızda eşit olan bir söze gelin: Allah\'tan başkasına ibadet etmeyelim."',
                id: 'Katakanlah: "Wahai Ahli Kitab, marilah kepada kalimat yang sama antara kami dan kalian - bahwa kita tidak menyembah kecuali Allah."'
            },
            reference: 'Surah Ali Imran 3:64'
        },
        options: [
            { label: { en: 'I\'m Christian', ar: 'أنا مسيحي', fr: 'Je suis Chrétien', ur: 'میں عیسائی ہوں', tr: 'Ben Hristiyanım', id: 'Saya Kristen' }, next: 'christian_path' },
            { label: { en: 'I\'m Jewish', ar: 'أنا يهودي', fr: 'Je suis Juif', ur: 'میں یہودی ہوں', tr: 'Ben Yahudiyim', id: 'Saya Yahudi' }, next: 'jewish_path' },
            { label: { en: 'I\'m Hindu', ar: 'أنا هندوسي', fr: 'Je suis Hindou', ur: 'میں ہندو ہوں', tr: 'Ben Hinduyum', id: 'Saya Hindu' }, next: 'hindu_path' },
            { label: { en: 'I\'m Buddhist', ar: 'أنا بوذي', fr: 'Je suis Bouddhiste', ur: 'میں بدھ مت ہوں', tr: 'Ben Budistim', id: 'Saya Buddha' }, next: 'buddhist_path' },
            { label: { en: 'I follow another path', ar: 'أتبع طريقاً آخر', fr: 'Je suis une autre voie', ur: 'میں کسی اور راستے پر ہوں', tr: 'Başka bir yol izliyorum', id: 'Saya mengikuti jalan lain' }, next: 'other_path' }
        ]
    },

    // Hindu Path
    hindu_path: {
        id: 'hindu_path',
        title: 'Dialogue with Hindu Friends',
        content: 'Many Hindu scriptures point to One Supreme Being. The Vedas say "Ekam Brahma, dvitiya naste" (There is only one God, not a second). Islam affirms this pure monotheism while rejecting idol worship. The concept of Brahman as the Ultimate Reality has parallels with Allah.',
        verse: {
            arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
            translation: 'And your god is one God. There is no deity except Him, the Most Merciful.',
            reference: 'Surah Al-Baqarah 2:163'
        },
        options: [
            { label: 'Tell me about God in Islam', next: 'evidence_god' },
            { label: 'Purpose of life?', next: 'purpose_of_life' },
            { label: 'Islam basics', next: 'islam_basics' }
        ]
    },

    // Buddhist Path
    buddhist_path: {
        id: 'buddhist_path',
        title: 'Dialogue with Buddhist Friends',
        content: 'Buddhism emphasizes ethics, mindfulness, and liberation from suffering - values Islam also cherishes. However, Islam adds the dimension of a loving Creator who guides us, forgives us, and gives life ultimate meaning and purpose. The goal is eternal Paradise with our Lord.',
        verse: {
            arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            translation: 'Verily, in the remembrance of Allah do hearts find rest.',
            reference: 'Surah Ar-Ra\'d 13:28'
        },
        options: [
            { label: 'Purpose of life in Islam', next: 'purpose_of_life' },
            { label: 'What is God like?', next: 'evidence_god' },
            { label: 'Islam basics', next: 'islam_basics' }
        ]
    },

    // Christian Path
    christian_path: {
        id: 'christian_path',
        title: 'Common Ground with Christianity',
        content: 'Muslims and Christians share much: belief in One God, virgin birth of Jesus, his miracles, his return, the Day of Judgment, and moral values. We both revere Jesus - Muslims believe he was a prophet who called people to worship God alone.',
        verse: {
            arabic: 'وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ وَقَفَّيْنَا مِن بَعْدِهِ بِالرُّسُلِ',
            translation: 'And We gave Moses the Scripture and followed up after him with messengers.',
            reference: 'Surah Al-Baqarah 2:87'
        },
        options: [
            { label: 'What does Islam say about Jesus?', next: 'jesus_islam' },
            { label: 'What about the Bible?', next: 'about_scripture' },
            { label: 'Trinity question', next: 'trinity_question' },
            { label: 'Tell me about Islam basics', next: 'islam_basics' }
        ]
    },

    // Trinity Question
    trinity_question: {
        id: 'trinity_question',
        title: 'The Trinity Concept',
        content: 'The word "Trinity" doesn\'t appear in the Bible. Early Christians had diverse beliefs about Jesus. The Nicene Creed (325 CE) was a later development. Jesus himself never claimed to be God - he prayed to God, said "the Father is greater than I," and called God his God.',
        verse: {
            arabic: 'لَّقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ ثَالِثُ ثَلَاثَةٍ',
            translation: 'They have certainly disbelieved who say, "Allah is the third of three."',
            reference: 'Surah Al-Ma\'idah 5:73'
        },
        options: [
            { label: 'Jesus in Islam', next: 'jesus_islam' },
            { label: 'Salvation in Islam', next: 'salvation' },
            { label: 'Islam basics', next: 'islam_basics' }
        ]
    },

    // Jewish Path
    jewish_path: {
        id: 'jewish_path',
        title: 'Common Ground with Judaism',
        content: 'Islam and Judaism share deep roots: strict monotheism, prophets like Abraham and Moses, dietary laws, prayer, and emphasis on righteous deeds. Muslims see Islam as the continuation of the message given to Moses. We worship the same God.',
        verse: {
            arabic: 'قُولُوا آمَنَّا بِاللَّهِ وَمَا أُنزِلَ إِلَيْنَا وَمَا أُنزِلَ إِلَىٰ إِبْرَاهِيمَ',
            translation: 'Say, "We believe in Allah and what was revealed to us and what was revealed to Abraham..."',
            reference: 'Surah Al-Baqarah 2:136'
        },
        options: [
            { label: 'Tell me about Prophet Muhammad', next: 'about_muhammad' },
            { label: 'What is the Quran?', next: 'about_quran' },
            { label: 'Tell me about Islam basics', next: 'islam_basics' }
        ]
    },

    // Other Path
    other_path: {
        id: 'other_path',
        title: 'All Paths Lead to Questions',
        content: 'Whatever your background, the fundamental questions are the same: Why are we here? Is there a Creator? What happens after death? How should we live? Islam provides clear, rational answers to these questions.',
        verse: {
            arabic: 'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',
            translation: '[Adhere to] the fitrah of Allah upon which He has created mankind.',
            reference: 'Surah Ar-Rum 30:30'
        },
        options: [
            { label: 'What is the purpose of life?', next: 'purpose_of_life' },
            { label: 'Show me evidence for God', next: 'evidence_god' },
            { label: 'Tell me about Islam basics', next: 'islam_basics' }
        ]
    },

    // About Scripture
    about_scripture: {
        id: 'about_scripture',
        title: 'Divine Scriptures',
        content: 'Muslims believe God sent scriptures to various prophets: the Torah to Moses, the Psalms to David, the Gospel to Jesus, and the Quran to Muhammad ﷺ. The Quran is unique because it has been preserved letter-by-letter for 1400 years.',
        verse: {
            arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
            translation: 'Indeed, it is We who sent down the Quran and indeed, We will be its guardian.',
            reference: 'Surah Al-Hijr 15:9'
        },
        options: [
            { label: 'Tell me more about the Quran', next: 'about_quran' },
            { label: 'Learn Islam basics', next: 'islam_basics' }
        ]
    },

    // About Quran
    about_quran: {
        id: 'about_quran',
        title: 'The Holy Quran',
        content: 'The Quran is the literal word of Allah, revealed to Prophet Muhammad ﷺ over 23 years. It has been preserved unchanged for 1400 years - millions have memorized it entirely. It contains guidance for all aspects of life.',
        verse: {
            arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ',
            translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
            reference: 'Surah Al-Baqarah 2:2'
        },
        options: [
            { label: 'What does Islam teach?', next: 'islam_basics' },
            { label: 'Scientific miracles?', next: 'quran_science' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Islam Basics
    islam_basics: {
        id: 'islam_basics',
        title: {
            en: 'The Basics of Islam',
            ar: 'أساسيات الإسلام',
            fr: 'Les Bases de l\'Islam',
            ur: 'اسلام کی بنیادیں',
            tr: 'İslam\'ın Temelleri',
            id: 'Dasar-Dasar Islam'
        },
        content: {
            en: 'Islam rests on Five Pillars: 1) Shahada - Declaration of faith, 2) Salah - Five daily prayers, 3) Zakat - Charity, 4) Sawm - Fasting in Ramadan, 5) Hajj - Pilgrimage to Mecca.',
            ar: 'يقوم الإسلام على خمسة أركان: ١) الشهادة - شهادة أن لا إله إلا الله، ٢) الصلاة - الصلوات الخمس، ٣) الزكاة - الصدقة، ٤) الصوم - صيام رمضان، ٥) الحج - الحج إلى مكة.',
            fr: 'L\'Islam repose sur Cinq Piliers: 1) Shahada - Déclaration de foi, 2) Salah - Cinq prières quotidiennes, 3) Zakat - Charité, 4) Sawm - Jeûne du Ramadan, 5) Hajj - Pèlerinage à la Mecque.',
            ur: 'اسلام پانچ ارکان پر قائم ہے: ١) شہادت - ایمان کا اقرار، ٢) صلاۃ - پانچ وقت کی نماز، ٣) زکاۃ - صدقہ، ٤) صوم - رمضان کے روزے، ٥) حج - مکہ کی زیارت۔',
            tr: 'İslam Beş Şart üzerine kuruludur: 1) Şehadet - İman ikrarı, 2) Namaz - Beş vakit namaz, 3) Zekat - Sadaka, 4) Oruç - Ramazan orucu, 5) Hac - Mekke\'ye hac.',
            id: 'Islam berdiri di atas Lima Rukun: 1) Syahadat - Pengakuan iman, 2) Shalat - Lima waktu shalat, 3) Zakat - Sedekah, 4) Puasa - Puasa Ramadan, 5) Haji - Ziarah ke Mekah.'
        },
        verse: {
            arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
            translation: {
                en: 'This day I have perfected for you your religion and completed My favor upon you.',
                ar: 'اليوم أكملت لكم دينكم وأتممت عليكم نعمتي ورضيت لكم الإسلام ديناً.',
                fr: 'Aujourd\'hui, J\'ai parachevé pour vous votre religion et accompli sur vous Mon bienfait.',
                ur: 'آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا اور تم پر اپنی نعمت پوری کر دی۔',
                tr: 'Bugün sizin için dininizi kemale erdirdim, size nimetimi tamamladım.',
                id: 'Pada hari ini telah Kusempurnakan untuk kamu agamamu dan telah Kucukupkan kepadamu nikmat-Ku.'
            },
            reference: 'Surah Al-Ma\'idah 5:3'
        },
        options: [
            { label: { en: 'Tell me about the Six Articles of Faith', ar: 'أخبرني عن أركان الإيمان الستة', fr: 'Parlez-moi des Six Articles de Foi', ur: 'مجھے ایمان کے چھ ارکان کے بارے میں بتائیں', tr: 'İmanın Altı Şartını anlat', id: 'Ceritakan tentang Enam Rukun Iman' }, next: 'six_articles' },
            { label: { en: 'What is Sunnah?', ar: 'ما هي السنة؟', fr: 'Qu\'est-ce que la Sunnah?', ur: 'سنت کیا ہے؟', tr: 'Sünnet nedir?', id: 'Apa itu Sunnah?' }, next: 'about_sunnah' },
            { label: { en: 'How do I become Muslim?', ar: 'كيف أصبح مسلماً؟', fr: 'Comment devenir Musulman?', ur: 'میں مسلمان کیسے بنوں؟', tr: 'Nasıl Müslüman olurum?', id: 'Bagaimana cara menjadi Muslim?' }, next: 'become_muslim' }
        ]
    },

    // Six Articles of Faith
    six_articles: {
        id: 'six_articles',
        title: {
            en: 'Six Articles of Faith',
            ar: 'أركان الإيمان الستة',
            fr: 'Les Six Articles de Foi',
            ur: 'ایمان کے چھ ارکان',
            tr: 'İmanın Altı Şartı',
            id: 'Enam Rukun Iman'
        },
        content: {
            en: 'Muslims believe in: 1) Allah - The One True God, 2) Angels, 3) Divine Books including Quran, 4) Prophets from Adam to Muhammad ﷺ, 5) Day of Judgment, 6) Divine Decree.',
            ar: 'يؤمن المسلمون بـ: ١) الله - الإله الواحد الحق، ٢) الملائكة، ٣) الكتب السماوية بما فيها القرآن، ٤) الأنبياء من آدم إلى محمد ﷺ، ٥) يوم القيامة، ٦) القضاء والقدر.',
            fr: 'Les Musulmans croient en: 1) Allah - Le Seul Vrai Dieu, 2) Les Anges, 3) Les Livres Divins dont le Coran, 4) Les Prophètes d\'Adam à Muhammad ﷺ, 5) Le Jour du Jugement, 6) Le Décret Divin.',
            ur: 'مسلمان ایمان رکھتے ہیں: ١) اللہ - واحد سچا خدا، ٢) فرشتے، ٣) آسمانی کتابیں بشمول قرآن، ٤) آدم سے محمد ﷺ تک نبی، ٥) یوم القیامہ، ٦) تقدیر۔',
            tr: 'Müslümanlar şunlara inanır: 1) Allah - Tek Gerçek Tanrı, 2) Melekler, 3) Kur\'an dahil İlahi Kitaplar, 4) Adem\'den Muhammed ﷺ\'e Peygamberler, 5) Kıyamet Günü, 6) Kader.',
            id: 'Muslim percaya pada: 1) Allah - Tuhan Yang Maha Esa, 2) Malaikat, 3) Kitab-kitab Suci termasuk Al-Quran, 4) Nabi-nabi dari Adam hingga Muhammad ﷺ, 5) Hari Kiamat, 6) Qada dan Qadar.'
        },
        verse: {
            arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ',
            translation: {
                en: 'The Messenger believed in what was revealed to him from his Lord, and so have the believers.',
                ar: 'آمن الرسول بما أنزل إليه من ربه والمؤمنون.',
                fr: 'Le Messager a cru en ce qui lui a été révélé de son Seigneur, ainsi que les croyants.',
                ur: 'رسول اس پر ایمان لایا جو اس کے رب کی طرف سے نازل ہوا اور مومنین بھی۔',
                tr: 'Peygamber Rabbinden kendisine indirilene iman etti, müminler de.',
                id: 'Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman.'
            },
            reference: 'Surah Al-Baqarah 2:285'
        },
        options: [
            { label: { en: 'What is Sunnah?', ar: 'ما هي السنة؟', fr: 'Qu\'est-ce que la Sunnah?', ur: 'سنت کیا ہے؟', tr: 'Sünnet nedir?', id: 'Apa itu Sunnah?' }, next: 'about_sunnah' },
            { label: { en: 'How do I become Muslim?', ar: 'كيف أصبح مسلماً؟', fr: 'Comment devenir Musulman?', ur: 'میں مسلمان کیسے بنوں؟', tr: 'Nasıl Müslüman olurum?', id: 'Bagaimana cara menjadi Muslim?' }, next: 'become_muslim' }
        ]
    },

    // About Sunnah
    about_sunnah: {
        id: 'about_sunnah',
        title: {
            en: 'The Sunnah (Prophetic Way)',
            ar: 'السنة النبوية',
            fr: 'La Sunnah (Voie Prophétique)',
            ur: 'سنت (نبوی طریقہ)',
            tr: 'Sünnet (Peygamber Yolu)',
            id: 'Sunnah (Jalan Nabi)'
        },
        content: {
            en: 'The Sunnah refers to the teachings and practices of Prophet Muhammad ﷺ. It\'s the practical example of how to live Islam. Following the Sunnah is essential because the Prophet ﷺ was the best interpreter of the Quran.',
            ar: 'السنة تشير إلى تعاليم وممارسات النبي محمد ﷺ. إنها المثال العملي لكيفية العيش بالإسلام. اتباع السنة ضروري لأن النبي ﷺ كان أفضل مفسر للقرآن.',
            fr: 'La Sunnah fait référence aux enseignements et pratiques du Prophète Muhammad ﷺ. C\'est l\'exemple pratique de comment vivre l\'Islam. Suivre la Sunnah est essentiel car le Prophète ﷺ était le meilleur interprète du Coran.',
            ur: 'سنت نبی محمد ﷺ کی تعلیمات اور عمل کو کہتے ہیں۔ یہ اسلام کو جینے کا عملی نمونہ ہے۔ سنت کی پیروی ضروری ہے کیونکہ نبی ﷺ قرآن کے بہترین مفسر تھے۔',
            tr: 'Sünnet, Peygamber Muhammed ﷺ\'in öğretileri ve uygulamalarına atıfta bulunur. İslam\'ı nasıl yaşayacağımızın pratik örneğidir. Sünnete uymak önemlidir çünkü Peygamber ﷺ Kur\'an\'ın en iyi yorumcusuydu.',
            id: 'Sunnah merujuk pada ajaran dan praktik Nabi Muhammad ﷺ. Ini adalah contoh praktis bagaimana menjalani Islam. Mengikuti Sunnah sangat penting karena Nabi ﷺ adalah penafsir terbaik Al-Quran.'
        },
        verse: {
            arabic: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
            translation: {
                en: 'There has certainly been for you in the Messenger of Allah an excellent pattern.',
                ar: 'لقد كان لكم في رسول الله أسوة حسنة.',
                fr: 'Vous avez certes dans le Messager d\'Allah un excellent modèle.',
                ur: 'بے شک تمہارے لیے رسول اللہ میں بہترین نمونہ ہے۔',
                tr: 'Andolsun, sizin için Allah\'ın Resûlünde güzel bir örnek vardır.',
                id: 'Sesungguhnya telah ada pada diri Rasulullah itu suri teladan yang baik bagimu.'
            },
            reference: 'Surah Al-Ahzab 33:21'
        },
        options: [
            { label: { en: 'I\'m ready to become Muslim', ar: 'أنا مستعد لأصبح مسلماً', fr: 'Je suis prêt à devenir Musulman', ur: 'میں مسلمان بننے کو تیار ہوں', tr: 'Müslüman olmaya hazırım', id: 'Saya siap menjadi Muslim' }, next: 'become_muslim' },
            { label: { en: 'I want to explore more', ar: 'أريد استكشاف المزيد', fr: 'Je veux explorer davantage', ur: 'میں مزید جاننا چاہتا ہوں', tr: 'Daha fazla keşfetmek istiyorum', id: 'Saya ingin menjelajahi lebih banyak' }, next: 'start' }
        ]
    },

    // Final Prophet
    final_prophet: {
        id: 'final_prophet',
        title: 'The Seal of Prophets',
        content: 'Muhammad ﷺ is called the "Seal of the Prophets" because: 1) His message is universal, 2) The Quran is perfectly preserved, 3) His teachings are comprehensive, 4) No new prophet is needed after a complete message.',
        verse: {
            arabic: 'مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ',
            translation: 'Muhammad is the Messenger of Allah and the seal of the prophets.',
            reference: 'Surah Al-Ahzab 33:40'
        },
        options: [
            { label: 'What is the Quran?', next: 'about_quran' },
            { label: 'Learn Islam basics', next: 'islam_basics' }
        ]
    },

    // Islam Unique
    islam_unique: {
        id: 'islam_unique',
        title: 'What Makes Islam Unique?',
        content: 'Islam is unique because: 1) Pure monotheism, 2) Direct relationship with Allah, 3) Preserved scripture, 4) Complete way of life, 5) Universal for all humanity, 6) Balance between spiritual and material.',
        verse: {
            arabic: 'إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ',
            translation: 'Indeed, the religion in the sight of Allah is Islam.',
            reference: 'Surah Ali Imran 3:19'
        },
        options: [
            { label: 'Tell me about the Quran', next: 'about_quran' },
            { label: 'What are Islam\'s teachings?', next: 'islam_basics' },
            { label: 'Tell me about Prophet Muhammad ﷺ', next: 'about_muhammad' }
        ]
    },

    // Learn about Prophets
    learn_prophets: {
        id: 'learn_prophets',
        title: 'Understanding Prophethood',
        content: 'Throughout history, God sent prophets to guide humanity. They were chosen humans who received revelation and taught people to worship God alone. They included Adam, Noah, Abraham, Moses, Jesus, and Muhammad ﷺ.',
        verse: {
            arabic: 'وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ',
            translation: 'And We sent into every nation a messenger, saying, "Worship Allah."',
            reference: 'Surah An-Nahl 16:36'
        },
        options: [
            { label: 'I believe this makes sense', next: 'believes_prophets' },
            { label: 'Tell me about Muhammad ﷺ', next: 'about_muhammad' },
            { label: 'What about Jesus?', next: 'jesus_islam' }
        ]
    },

    // Teachings
    teachings: {
        id: 'teachings',
        title: 'The Teachings of Islam',
        content: 'Islam teaches: worship of One God alone, honoring parents, kindness to all creatures, justice, honesty, modesty, seeking knowledge, helping the poor, and protecting the weak. It\'s a complete way of life.',
        verse: {
            arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',
            translation: 'Indeed, Allah orders justice and good conduct.',
            reference: 'Surah An-Nahl 16:90'
        },
        options: [
            { label: 'What are the Five Pillars?', next: 'islam_basics' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Become Muslim
    become_muslim: {
        id: 'become_muslim',
        title: {
            en: 'Embracing Islam',
            ar: 'اعتناق الإسلام',
            fr: 'Embrasser l\'Islam',
            ur: 'اسلام قبول کرنا',
            tr: 'İslam\'ı Kucaklamak',
            id: 'Memeluk Islam'
        },
        content: {
            en: 'To become Muslim, sincerely declare the Shahada: "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah" (I bear witness there is no god but Allah, and Muhammad is His messenger). After this, gradually learn prayer, Quran, and good character.',
            ar: 'لتصبح مسلماً، أعلن الشهادة بإخلاص: "أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله". بعد ذلك، تعلم تدريجياً الصلاة والقرآن وحسن الخلق.',
            fr: 'Pour devenir Musulman, déclarez sincèrement la Shahada: "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah" (J\'atteste qu\'il n\'y a pas de dieu sauf Allah et que Muhammad est Son messager). Après cela, apprenez progressivement la prière, le Coran et le bon caractère.',
            ur: 'مسلمان بننے کے لیے، خلوص سے شہادت کا اقرار کریں: "اشہد ان لا الہ الا اللہ و اشہد ان محمداً رسول اللہ" (میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور محمد اللہ کے رسول ہیں)۔ اس کے بعد، آہستہ آہستہ نماز، قرآن اور اچھے اخلاق سیکھیں۔',
            tr: 'Müslüman olmak için Şehadeti içtenlikle ilan edin: "Eşhedü en la ilahe illallah ve eşhedü enne Muhammeden resulullah" (Allah\'tan başka ilah olmadığına ve Muhammed\'in O\'nun elçisi olduğuna şehadet ederim). Bundan sonra namaz, Kur\'an ve güzel ahlak öğrenin.',
            id: 'Untuk menjadi Muslim, ucapkan Syahadat dengan tulus: "Asyhadu an la ilaha illallah, wa asyhadu anna Muhammadan rasulullah" (Saya bersaksi tidak ada tuhan selain Allah dan Muhammad adalah utusan-Nya). Setelah itu, pelajari shalat, Al-Quran, dan akhlak mulia secara bertahap.'
        },
        verse: {
            arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
            translation: {
                en: 'I bear witness that there is no god but Allah, and Muhammad is the Messenger of Allah.',
                ar: 'أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله.',
                fr: 'J\'atteste qu\'il n\'y a pas de dieu sauf Allah et que Muhammad est le Messager d\'Allah.',
                ur: 'میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور محمد اللہ کے رسول ہیں۔',
                tr: 'Allah\'tan başka ilah olmadığına ve Muhammed\'in Allah\'ın elçisi olduğuna şehadet ederim.',
                id: 'Saya bersaksi bahwa tidak ada tuhan selain Allah dan Muhammad adalah utusan Allah.'
            },
            reference: 'The Shahada'
        },
        options: [
            { label: { en: 'What are the next steps?', ar: 'ما هي الخطوات التالية؟', fr: 'Quelles sont les prochaines étapes?', ur: 'اگلے اقدامات کیا ہیں؟', tr: 'Sonraki adımlar neler?', id: 'Apa langkah selanjutnya?' }, next: 'next_steps' },
            { label: { en: 'I want to explore more first', ar: 'أريد الاستكشاف أكثر أولاً', fr: 'Je veux d\'abord en explorer davantage', ur: 'میں پہلے مزید جاننا چاہتا ہوں', tr: 'Önce daha fazla keşfetmek istiyorum', id: 'Saya ingin menjelajahi lebih dulu' }, next: 'start' }
        ]
    },

    // Next Steps
    next_steps: {
        id: 'next_steps',
        title: {
            en: 'Your New Beginning',
            ar: 'بدايتك الجديدة',
            fr: 'Votre Nouveau Départ',
            ur: 'آپ کی نئی شروعات',
            tr: 'Yeni Başlangıcınız',
            id: 'Awal Baru Anda'
        },
        content: {
            en: 'After Shahada: 1) Take a purifying bath (Ghusl), 2) Learn to pray, 3) Read Quran with translation, 4) Connect with local Muslims/mosque, 5) Learn gradually. All previous sins are forgiven - you\'re like a newborn!',
            ar: 'بعد الشهادة: ١) اغتسل غسلاً، ٢) تعلم الصلاة، ٣) اقرأ القرآن بالترجمة، ٤) تواصل مع المسلمين المحليين/المسجد، ٥) تعلم تدريجياً. جميع الذنوب السابقة مغفورة - أنت كالمولود الجديد!',
            fr: 'Après la Shahada: 1) Prenez un bain purificateur (Ghusl), 2) Apprenez à prier, 3) Lisez le Coran avec traduction, 4) Connectez-vous avec les Musulmans locaux/mosquée, 5) Apprenez progressivement. Tous les péchés passés sont pardonnés - vous êtes comme un nouveau-né!',
            ur: 'شہادت کے بعد: ١) غسل کریں، ٢) نماز سیکھیں، ٣) ترجمے کے ساتھ قرآن پڑھیں، ٤) مقامی مسلمانوں/مسجد سے رابطہ کریں، ٥) آہستہ آہستہ سیکھیں۔ تمام پچھلے گناہ معاف - آپ نوزائیدہ کی طرح ہیں!',
            tr: 'Şehadetten sonra: 1) Gusül alın, 2) Namaz kılmayı öğrenin, 3) Kur\'an\'ı tercümesiyle okuyun, 4) Yerel Müslümanlar/cami ile bağlantı kurun, 5) Yavaş yavaş öğrenin. Tüm geçmiş günahlar affedildi - yeni doğmuş gibisiniz!',
            id: 'Setelah Syahadat: 1) Mandi besar (Ghusl), 2) Belajar shalat, 3) Baca Al-Quran dengan terjemahan, 4) Hubungi Muslim/masjid setempat, 5) Belajar bertahap. Semua dosa masa lalu diampuni - Anda seperti bayi yang baru lahir!'
        },
        verse: {
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
            translation: {
                en: 'Say, "O My servants who have transgressed, do not despair of the mercy of Allah."',
                ar: 'قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله.',
                fr: 'Dis: "Ô Mes serviteurs qui avez transgressé, ne désespérez pas de la miséricorde d\'Allah."',
                ur: 'کہو: اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی، اللہ کی رحمت سے مایوس نہ ہو۔',
                tr: 'De ki: "Ey kendilerine karşı aşırı giden kullarım, Allah\'ın rahmetinden ümit kesmeyin."',
                id: 'Katakanlah: "Wahai hamba-hamba-Ku yang melampaui batas, janganlah kamu berputus asa dari rahmat Allah."'
            },
            reference: 'Surah Az-Zumar 39:53'
        },
        options: [
            { label: { en: 'Learn about Prayer Times', ar: 'تعرف على مواقيت الصلاة', fr: 'En savoir plus sur les heures de prière', ur: 'نماز کے اوقات کے بارے میں جانیں', tr: 'Namaz vakitlerini öğren', id: 'Pelajari waktu shalat' }, next: 'prayer_info' },
            { label: { en: 'Start from beginning', ar: 'ابدأ من البداية', fr: 'Recommencer depuis le début', ur: 'شروع سے شروع کریں', tr: 'Baştan başla', id: 'Mulai dari awal' }, next: 'start' }
        ]
    },

    // Prayer Info
    prayer_info: {
        id: 'prayer_info',
        title: 'The Gift of Prayer',
        content: 'Prayer (Salah) is the second pillar of Islam - a direct connection with Allah five times daily: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night).',
        verse: {
            arabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا',
            translation: 'Indeed, prayer has been decreed upon the believers at specified times.',
            reference: 'Surah An-Nisa 4:103'
        },
        options: [
            { label: 'View Prayer Times', next: 'go_prayer_times' },
            { label: 'Start journey over', next: 'start' }
        ]
    },

    // Go to Prayer Times
    go_prayer_times: {
        id: 'go_prayer_times',
        title: 'Prayer Times',
        content: 'Click below to see prayer times for your location.',
        isEnd: true,
        action: 'prayer-times.html'
    },

    // ============ NEW EXPANDED SECTIONS ============

    // Common Misconceptions
    misconceptions: {
        id: 'misconceptions',
        title: {
            en: 'Common Misconceptions About Islam',
            ar: 'المفاهيم الخاطئة الشائعة عن الإسلام',
            fr: 'Idées Fausses Courantes sur l\'Islam',
            ur: 'اسلام کے بارے میں عام غلط فہمیاں',
            tr: 'İslam Hakkında Yaygın Yanlış Anlamalar',
            id: 'Kesalahpahaman Umum Tentang Islam'
        },
        content: {
            en: 'Many misunderstandings exist about Islam due to media portrayals and lack of knowledge. Let us address some common misconceptions with evidence from authentic sources.',
            ar: 'توجد العديد من المفاهيم الخاطئة عن الإسلام بسبب تصوير وسائل الإعلام ونقص المعرفة. دعونا نعالج بعض المفاهيم الخاطئة الشائعة بالأدلة من المصادر الموثوقة.',
            fr: 'De nombreux malentendus existent sur l\'Islam en raison des représentations médiatiques et du manque de connaissances. Abordons quelques idées fausses courantes avec des preuves de sources authentiques.',
            ur: 'میڈیا کی تصویر کشی اور علم کی کمی کی وجہ سے اسلام کے بارے میں بہت سی غلط فہمیاں موجود ہیں۔ آئیے مستند ذرائع سے ثبوت کے ساتھ کچھ عام غلط فہمیوں کو دور کریں۔',
            tr: 'Medya tasvirleri ve bilgi eksikliği nedeniyle İslam hakkında birçok yanlış anlama var. Otantik kaynaklardan kanıtlarla bazı yaygın yanlış anlamaları ele alalım.',
            id: 'Banyak kesalahpahaman tentang Islam karena penggambaran media dan kurangnya pengetahuan. Mari kita bahas beberapa kesalahpahaman umum dengan bukti dari sumber otentik.'
        },
        verse: {
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
            translation: {
                en: 'O you who believe, if a wicked person comes to you with news, verify it.',
                ar: 'يا أيها الذين آمنوا إن جاءكم فاسق بنبإ فتبينوا.',
                fr: 'Ô vous qui croyez, si un pervers vous apporte une nouvelle, vérifiez-la.',
                ur: 'اے ایمان والو! اگر کوئی فاسق تمہارے پاس کوئی خبر لائے تو تحقیق کر لو۔',
                tr: 'Ey iman edenler, size bir fasık bir haber getirirse onu araştırın.',
                id: 'Wahai orang-orang yang beriman, jika datang kepadamu orang fasik membawa suatu berita, maka periksalah.'
            },
            reference: 'Surah Al-Hujurat 49:6'
        },
        options: [
            { label: { en: 'Islam and violence', ar: 'الإسلام والعنف', fr: 'Islam et violence', ur: 'اسلام اور تشدد', tr: 'İslam ve şiddet', id: 'Islam dan kekerasan' }, next: 'islam_violence' },
            { label: { en: 'Women in Islam', ar: 'المرأة في الإسلام', fr: 'Les femmes en Islam', ur: 'اسلام میں خواتین', tr: 'İslam\'da kadın', id: 'Wanita dalam Islam' }, next: 'women_islam' },
            { label: { en: 'Understanding Jihad', ar: 'فهم الجهاد', fr: 'Comprendre le Jihad', ur: 'جہاد کو سمجھنا', tr: 'Cihadı anlamak', id: 'Memahami Jihad' }, next: 'jihad_explained' },
            { label: { en: 'Islam and other faiths', ar: 'الإسلام والأديان الأخرى', fr: 'Islam et autres religions', ur: 'اسلام اور دوسرے مذاہب', tr: 'İslam ve diğer dinler', id: 'Islam dan agama lain' }, next: 'islam_tolerance' }
        ]
    },

    // Islam and Violence
    islam_violence: {
        id: 'islam_violence',
        title: 'Islam and Peace',
        content: 'The word "Islam" comes from "Salam" meaning peace. The Quran clearly states that killing one innocent person is like killing all humanity. Violence is only permitted in self-defense with strict rules. Terrorism has no place in Islam.',
        verse: {
            arabic: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
            translation: 'Whoever kills a soul unless for a soul or for corruption in the land - it is as if he had slain mankind entirely.',
            reference: 'Surah Al-Ma\'idah 5:32'
        },
        options: [
            { label: 'What is Jihad really?', next: 'jihad_explained' },
            { label: 'Rules of warfare', next: 'warfare_rules' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Jihad Explained
    jihad_explained: {
        id: 'jihad_explained',
        title: 'The True Meaning of Jihad',
        content: 'Jihad means "struggle" or "striving." The greatest Jihad is the struggle against one\'s own ego and desires (Jihad an-Nafs). Military Jihad is only defensive and has strict ethical rules. The Prophet ﷺ called returning from battle "the lesser Jihad" compared to fighting one\'s ego.',
        verse: {
            arabic: 'وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ',
            translation: 'And strive for Allah with the striving due to Him.',
            reference: 'Surah Al-Hajj 22:78'
        },
        options: [
            { label: 'Types of Jihad', next: 'jihad_types' },
            { label: 'Rules of warfare', next: 'warfare_rules' },
            { label: 'Back to misconceptions', next: 'misconceptions' }
        ]
    },

    // Types of Jihad
    jihad_types: {
        id: 'jihad_types',
        title: 'The Different Types of Jihad',
        content: '1) Jihad of the Self - fighting ego, desires, and evil inclinations (greatest Jihad). 2) Jihad of Knowledge - spreading truth through education. 3) Jihad with Wealth - supporting good causes. 4) Jihad of Defense - protecting Muslim lands when attacked (with strict ethical rules).',
        verse: {
            arabic: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',
            translation: 'And those who strive for Us - We will surely guide them to Our ways.',
            reference: 'Surah Al-Ankabut 29:69'
        },
        options: [
            { label: 'Rules of warfare', next: 'warfare_rules' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Rules of Warfare
    warfare_rules: {
        id: 'warfare_rules',
        title: 'Islamic Rules of Warfare',
        content: 'When warfare becomes necessary, Islam has strict rules: No killing civilians, women, children, elderly. No destroying crops or animals. No killing religious people in their places of worship. No mutilation. No forcing religion. Treaties must be honored. These rules were revolutionary 1400 years ago.',
        verse: {
            arabic: 'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',
            translation: 'Fight in the way of Allah those who fight you but do not transgress. Indeed, Allah does not like transgressors.',
            reference: 'Surah Al-Baqarah 2:190'
        },
        options: [
            { label: 'Islam and tolerance', next: 'islam_tolerance' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Islam and Tolerance
    islam_tolerance: {
        id: 'islam_tolerance',
        title: 'Islam and Religious Tolerance',
        content: 'The Quran explicitly states "There is no compulsion in religion." Muslims lived peacefully with Christians and Jews for centuries in places like Jerusalem, Spain, and India. The Prophet ﷺ made treaties with non-Muslims and commanded Muslims to protect their rights.',
        verse: {
            arabic: 'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
            translation: 'There is no compulsion in religion. The right course has become clear from the wrong.',
            reference: 'Surah Al-Baqarah 2:256'
        },
        options: [
            { label: 'Rights of non-Muslims', next: 'non_muslim_rights' },
            { label: 'Women in Islam', next: 'women_islam' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Rights of Non-Muslims
    non_muslim_rights: {
        id: 'non_muslim_rights',
        title: 'Rights of Non-Muslims in Islam',
        content: 'Non-Muslims living in Muslim lands have protected status. Their life, property, and places of worship are protected. They can practice their religion freely. The Prophet ﷺ said: "Whoever harms a non-Muslim citizen, I will be his adversary on the Day of Judgment."',
        verse: {
            arabic: 'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',
            translation: 'Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes - from being righteous toward them and acting justly toward them.',
            reference: 'Surah Al-Mumtahanah 60:8'
        },
        options: [
            { label: 'Continue learning', next: 'islam_basics' },
            { label: 'Back to start', next: 'start' }
        ]
    },

    // Women in Islam
    women_islam: {
        id: 'women_islam',
        title: 'Women in Islam',
        content: 'Islam elevated the status of women 1400 years ago - granting them rights to education, property, inheritance, and choosing their spouse. The Prophet ﷺ said: "The best of you are those who are best to their women." Cultural practices are often confused with Islamic teachings.',
        verse: {
            arabic: 'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',
            translation: 'And women have rights similar to those over them in kindness.',
            reference: 'Surah Al-Baqarah 2:228'
        },
        options: [
            { label: 'Women\'s rights in Islam', next: 'women_rights' },
            { label: 'About Hijab', next: 'about_hijab' },
            { label: 'Famous Muslim women', next: 'famous_women' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Women's Rights
    women_rights: {
        id: 'women_rights',
        title: 'Women\'s Rights in Islam',
        content: 'Islam granted women: 1) Right to own property independently, 2) Right to inheritance, 3) Right to education, 4) Right to work, 5) Right to choose their spouse, 6) Right to divorce, 7) Right to keep their name after marriage. These rights were revolutionary in the 7th century.',
        verse: {
            arabic: 'لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ',
            translation: 'For men is a share of what the parents and close relatives leave, and for women is a share.',
            reference: 'Surah An-Nisa 4:7'
        },
        options: [
            { label: 'About Hijab', next: 'about_hijab' },
            { label: 'Famous Muslim women', next: 'famous_women' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // About Hijab
    about_hijab: {
        id: 'about_hijab',
        title: 'Understanding Hijab',
        content: 'Hijab (modest dress) is a command from Allah for believing women. It\'s about dignity, identity, and devotion to God - not oppression. Many Muslim women choose to wear it proudly. The concept of modesty also applies to men. Hijab is a spiritual choice.',
        verse: {
            arabic: 'يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ',
            translation: 'O Prophet, tell your wives and your daughters and the women of the believers to bring down over themselves their outer garments.',
            reference: 'Surah Al-Ahzab 33:59'
        },
        options: [
            { label: 'Famous Muslim women', next: 'famous_women' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Famous Muslim Women
    famous_women: {
        id: 'famous_women',
        title: 'Great Muslim Women in History',
        content: 'Islam\'s history is rich with influential women: Khadijah (RA) - first to accept Islam, successful businesswoman. Aisha (RA) - great scholar who taught thousands. Fatimah (RA) - daughter of the Prophet, leader of women in Paradise. Maryam (Mary) - mentioned by name in the Quran, a chapter named after her.',
        verse: {
            arabic: 'إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
            translation: 'Indeed, the Muslim men and Muslim women, the believing men and believing women...',
            reference: 'Surah Al-Ahzab 33:35'
        },
        options: [
            { label: 'Continue learning', next: 'islam_basics' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Divine Decree (Qadr)
    divine_decree: {
        id: 'divine_decree',
        title: 'Understanding Divine Decree (Qadr)',
        content: 'Belief in Qadr is the sixth pillar of faith. Allah knows everything that will happen, has written it, wills it, and creates it. However, humans have free will and are responsible for their choices. This balance is central to Islamic theology.',
        verse: {
            arabic: 'إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ',
            translation: 'Indeed, all things We created with predestination.',
            reference: 'Surah Al-Qamar 54:49'
        },
        options: [
            { label: 'Free will and responsibility', next: 'free_will' },
            { label: 'Why do bad things happen?', next: 'problem_evil' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Free Will
    free_will: {
        id: 'free_will',
        title: 'Free Will in Islam',
        content: 'Islam affirms both Allah\'s complete knowledge and human free will. Allah knows what you will choose, but you still make the choice. Think of it like a teacher who knows a student will fail - the teacher\'s knowledge doesn\'t cause the failure. We are tested and held accountable for our choices.',
        verse: {
            arabic: 'فَمَن شَاءَ فَلْيُؤْمِن وَمَن شَاءَ فَلْيَكْفُرْ',
            translation: 'So whoever wills - let him believe; and whoever wills - let him disbelieve.',
            reference: 'Surah Al-Kahf 18:29'
        },
        options: [
            { label: 'Why do bad things happen?', next: 'problem_evil' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Problem of Evil
    problem_evil: {
        id: 'problem_evil',
        title: 'Why Does Suffering Exist?',
        content: 'Islam teaches that this world is a test, not Paradise. Suffering serves purposes: it tests faith, expiates sins, increases reward, reminds us of Allah, and helps us grow. Paradise is eternal; this life is temporary. Allah\'s wisdom is beyond our full comprehension.',
        verse: {
            arabic: 'أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ',
            translation: 'Do people think they will be left to say, "We believe" and they will not be tried?',
            reference: 'Surah Al-Ankabut 29:2'
        },
        options: [
            { label: 'The wisdom behind trials', next: 'wisdom_trials' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Wisdom Behind Trials
    wisdom_trials: {
        id: 'wisdom_trials',
        title: 'The Wisdom Behind Trials',
        content: 'Trials in this life: 1) Distinguish true believers from false ones, 2) Erase sins when borne patiently, 3) Elevate one\'s rank in Paradise, 4) Make us turn to Allah, 5) Show us our weakness and need for Allah. The Prophet ﷺ said the greatest reward comes with the greatest trial.',
        verse: {
            arabic: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ',
            translation: 'And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits.',
            reference: 'Surah Al-Baqarah 2:155'
        },
        options: [
            { label: 'How to have patience?', next: 'about_sabr' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // About Sabr (Patience)
    about_sabr: {
        id: 'about_sabr',
        title: 'The Virtue of Patience (Sabr)',
        content: 'Sabr (patience) is mentioned over 90 times in the Quran. It means: persevering in worship, abstaining from sins, and accepting Allah\'s decree with contentment. The Prophet ﷺ said: "Patience is light." Those who are patient will be rewarded without measure.',
        verse: {
            arabic: 'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ',
            translation: 'Indeed, the patient will be given their reward without account.',
            reference: 'Surah Az-Zumar 39:10'
        },
        options: [
            { label: 'Continue learning', next: 'islam_basics' },
            { label: 'How to become Muslim?', next: 'become_muslim' }
        ]
    },

    // Additional Shia Topics - Mut'ah
    mutah_topic: {
        id: 'mutah_topic',
        title: 'Temporary Marriage (Mut\'ah)',
        content: 'Mut\'ah (temporary marriage) was permitted briefly in early Islam but was permanently prohibited by the Prophet ﷺ at Khaybar (or Mecca according to some narrations). Umar merely enforced the Prophet\'s prohibition. All four Sunni schools agree it is haram. Even Ali (RA) narrated hadith against it.',
        verse: {
            arabic: 'وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ إِلَّا عَلَىٰ أَزْوَاجِهِمْ',
            translation: 'And those who guard their private parts - except from their wives...',
            reference: 'Surah Al-Mu\'minun 23:5-6'
        },
        options: [
            { label: 'Evidence for prohibition', next: 'mutah_evidence' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Mut'ah Evidence
    mutah_evidence: {
        id: 'mutah_evidence',
        title: 'Evidence Against Mut\'ah',
        content: 'The Prophet ﷺ said: "I had permitted you Mut\'ah, but Allah has forbidden it until the Day of Judgment." (Muslim). Ali (RA) himself narrated that the Prophet ﷺ prohibited Mut\'ah. Permanent marriage protects rights of women and children; Mut\'ah does not.',
        verse: {
            arabic: 'وَأُحِلَّ لَكُم مَّا وَرَاءَ ذَٰلِكُمْ أَن تَبْتَغُوا بِأَمْوَالِكُم مُّحْصِنِينَ غَيْرَ مُسَافِحِينَ',
            translation: 'And lawful to you are all beyond these, provided that you seek them in marriage, not unlawful sexual intercourse.',
            reference: 'Surah An-Nisa 4:24'
        },
        options: [
            { label: 'Continue learning', next: 'authentic_islam' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Taqiyya Topic
    taqiyya_topic: {
        id: 'taqiyya_topic',
        title: 'Understanding Taqiyya',
        content: 'In Sunni Islam, Taqiyya (dissimulation) is only permitted in life-threatening situations - similar to eating pork to avoid starvation. Some Shia sources expanded this concept significantly. Honesty is a fundamental Islamic value; deception is only permitted to save one\'s life from persecution.',
        verse: {
            arabic: 'إِنَّمَا يَفْتَرِي الْكَذِبَ الَّذِينَ لَا يُؤْمِنُونَ بِآيَاتِ اللَّهِ',
            translation: 'Only those who do not believe in the verses of Allah fabricate falsehood.',
            reference: 'Surah An-Nahl 16:105'
        },
        options: [
            { label: 'Honesty in Islam', next: 'honesty_islam' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Honesty in Islam
    honesty_islam: {
        id: 'honesty_islam',
        title: 'The Importance of Honesty',
        content: 'The Prophet ﷺ said: "Truthfulness leads to righteousness, and righteousness leads to Paradise." He was known as Al-Sadiq Al-Amin (The Truthful, The Trustworthy) even before prophethood. Lying is one of the signs of hypocrisy.',
        verse: {
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ',
            translation: 'O you who believe, fear Allah and be with the truthful.',
            reference: 'Surah At-Tawbah 9:119'
        },
        options: [
            { label: 'Continue learning', next: 'authentic_islam' },
            { label: 'Back to start', next: 'start' }
        ]
    },

    // Sufism Introduction
    sufism_intro: {
        id: 'sufism_intro',
        title: 'Understanding Tasawwuf (Sufism)',
        content: 'Tasawwuf (Islamic spirituality) has a legitimate basis when it follows the Quran and Sunnah. The early scholars emphasized purifying the heart, fighting the ego, and increasing devotion. However, some later practices deviated into grave worship, saint veneration, and innovations not from Islam.',
        verse: {
            arabic: 'قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا',
            translation: 'He has succeeded who purifies it, and he has failed who instills it with corruption.',
            reference: 'Surah Ash-Shams 91:9-10'
        },
        options: [
            { label: 'Legitimate spirituality', next: 'legitimate_spirituality' },
            { label: 'Problematic practices', next: 'sufi_problems' },
            { label: 'Continue learning', next: 'authentic_islam' }
        ]
    },

    // Legitimate Spirituality
    legitimate_spirituality: {
        id: 'legitimate_spirituality',
        title: 'Authentic Islamic Spirituality',
        content: 'Authentic spirituality in Islam includes: dhikr (remembrance of Allah) as taught by the Prophet ﷺ, night prayers (Qiyam al-Layl), frequent fasting, reflecting on creation, controlling the tongue, and purifying intentions. This is the path of the Companions.',
        verse: {
            arabic: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ',
            translation: 'Those who believe and whose hearts find rest in the remembrance of Allah.',
            reference: 'Surah Ar-Ra\'d 13:28'
        },
        options: [
            { label: 'Continue learning', next: 'authentic_islam' },
            { label: 'Back to start', next: 'start' }
        ]
    },

    // Problematic Sufi Practices
    sufi_problems: {
        id: 'sufi_problems',
        title: 'Practices to Avoid',
        content: 'Some practices that entered Sufism but contradict Islamic teachings: praying to saints, believing in divine union (hulul), extreme asceticism, dancing/music as worship, grave veneration, and creating new dhikr formulas. We follow what the Prophet ﷺ and Companions practiced.',
        verse: {
            arabic: 'اتَّخَذُوا أَحْبَارَهُمْ وَرُهْبَانَهُمْ أَرْبَابًا مِّن دُونِ اللَّهِ',
            translation: 'They have taken their scholars and monks as lords besides Allah.',
            reference: 'Surah At-Tawbah 9:31'
        },
        options: [
            { label: 'Legitimate spirituality', next: 'legitimate_spirituality' },
            { label: 'Continue learning', next: 'authentic_islam' }
        ]
    },

    // Questions about specific Shia beliefs
    shia_specific: {
        id: 'shia_specific',
        title: 'Specific Shia Practices',
        content: 'Let us examine some specific practices and beliefs from a Quranic and Sunnah perspective. Remember, our goal is truth and unity upon the authentic teachings of Islam.',
        verse: {
            arabic: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',
            translation: 'And hold firmly to the rope of Allah all together and do not become divided.',
            reference: 'Surah Ali Imran 3:103'
        },
        options: [
            { label: 'About Mut\'ah marriage', next: 'mutah_topic' },
            { label: 'About Taqiyya', next: 'taqiyya_topic' },
            { label: 'Visiting shrines', next: 'visiting_graves' },
            { label: 'Back to main topics', next: 'shia_to_sunnah' }
        ]
    },

    // Day of Judgment
    day_judgment: {
        id: 'day_judgment',
        title: 'The Day of Judgment',
        content: 'Belief in the Last Day is the fifth pillar of faith. On that Day, all will be resurrected, their deeds presented, and eternal destinations determined. No wealth or children will help - only a sound heart. This belief gives life meaning and accountability.',
        verse: {
            arabic: 'يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ',
            translation: 'The Day when there will not benefit anyone wealth or children, but only one who comes to Allah with a sound heart.',
            reference: 'Surah Ash-Shu\'ara 26:88-89'
        },
        options: [
            { label: 'Signs of the Hour', next: 'signs_hour' },
            { label: 'Paradise and Hell', next: 'paradise_hell' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Signs of the Hour
    signs_hour: {
        id: 'signs_hour',
        title: 'Signs of the Last Day',
        content: 'The Prophet ﷺ foretold many signs that have come true: tall buildings in Arabia, widespread adultery, interest-based economics, time passing quickly, and more. Major signs include: the Dajjal (Antichrist), return of Jesus, Gog and Magog, and the sun rising from the West.',
        verse: {
            arabic: 'فَهَلْ يَنظُرُونَ إِلَّا السَّاعَةَ أَن تَأْتِيَهُم بَغْتَةً فَقَدْ جَاءَ أَشْرَاطُهَا',
            translation: 'Then do they await except that the Hour should come upon them unexpectedly? But already there have come some of its indications.',
            reference: 'Surah Muhammad 47:18'
        },
        options: [
            { label: 'Paradise and Hell', next: 'paradise_hell' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Paradise and Hell
    paradise_hell: {
        id: 'paradise_hell',
        title: 'The Eternal Abodes',
        content: 'Paradise (Jannah) is eternal bliss beyond imagination - gardens, rivers, reunion with loved ones, and most importantly, the pleasure of Allah and seeing Him. Hell (Jahannam) is punishment for disbelief and evil. Allah\'s mercy is vast - He wants us to succeed.',
        verse: {
            arabic: 'وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ',
            translation: 'And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth.',
            reference: 'Surah Ali Imran 3:133'
        },
        options: [
            { label: 'How to enter Paradise?', next: 'salvation' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Seeking Knowledge
    seeking_knowledge: {
        id: 'seeking_knowledge',
        title: 'The Importance of Knowledge',
        content: 'The first word revealed in the Quran was "Read!" Islam places tremendous emphasis on seeking knowledge. The Prophet ﷺ said: "Seeking knowledge is obligatory for every Muslim." Knowledge should lead to action and closeness to Allah.',
        verse: {
            arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
            translation: 'Read in the name of your Lord who created.',
            reference: 'Surah Al-Alaq 96:1'
        },
        options: [
            { label: 'Sources of Islamic knowledge', next: 'knowledge_sources' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Knowledge Sources
    knowledge_sources: {
        id: 'knowledge_sources',
        title: 'Sources of Islamic Knowledge',
        content: 'Authentic Islamic knowledge comes from: 1) The Quran, 2) Authentic Hadith, 3) Understanding of the Companions, 4) Consensus of scholars, 5) Sound scholarly reasoning. Beware of unqualified speakers and deviant groups. Learn from trustworthy scholars.',
        verse: {
            arabic: 'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ',
            translation: 'So ask the people of knowledge if you do not know.',
            reference: 'Surah An-Nahl 16:43'
        },
        options: [
            { label: 'About the Sunnah', next: 'about_sunnah' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Theological Deep Dive
    theological_deep: {
        id: 'theological_deep',
        title: 'Deep Theological Questions',
        content: 'Islam provides profound answers to life\'s deepest questions. Explore topics like divine decree, free will, the purpose of existence, and more. These discussions have engaged Muslim scholars for over 1400 years.',
        verse: {
            arabic: 'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',
            translation: 'Then do they not reflect upon the Quran, or are there locks upon their hearts?',
            reference: 'Surah Muhammad 47:24'
        },
        options: [
            { label: 'Divine Decree (Qadr)', next: 'divine_decree' },
            { label: 'Free will and responsibility', next: 'free_will' },
            { label: 'Why does suffering exist?', next: 'problem_evil' },
            { label: 'The Day of Judgment', next: 'day_judgment' },
            { label: 'Seeking knowledge', next: 'seeking_knowledge' },
            { label: 'Understanding Sufism', next: 'sufism_intro' }
        ]
    },

    // Shia to Sunnah specific topics
    shia_specific_detailed: {
        id: 'shia_specific_detailed',
        title: 'Examining Specific Beliefs',
        content: 'Let us examine some specific practices and beliefs with evidence from Quran and authentic Sunnah. Our approach is based on evidence, not emotions or cultural bias.',
        verse: {
            arabic: 'قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ',
            translation: 'Say, "Produce your proof if you are truthful."',
            reference: 'Surah Al-Baqarah 2:111'
        },
        options: [
            { label: 'About temporary marriage (Mut\'ah)', next: 'mutah_topic' },
            { label: 'About Taqiyya', next: 'taqiyya_topic' },
            { label: 'About visiting graves/shrines', next: 'visiting_graves' },
            { label: 'About self-flagellation (Tatbir)', next: 'self_harm' },
            { label: 'Back to Shia/Sunnah topics', next: 'shia_to_sunnah' }
        ]
    },

    // Angels in Islam
    angels_islam: {
        id: 'angels_islam',
        title: 'Belief in Angels',
        content: 'Muslims believe in angels as beings of light who worship Allah and carry out His commands. Major angels include: Jibreel (Gabriel) who brought revelation, Mikael who controls provisions, Israfil who will blow the trumpet, and the Angel of Death. Two angels record our deeds.',
        verse: {
            arabic: 'الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ',
            translation: 'Praise be to Allah, Creator of the heavens and earth, who made the angels messengers having wings.',
            reference: 'Surah Fatir 35:1'
        },
        options: [
            { label: 'Six articles of faith', next: 'six_articles' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Repentance in Islam
    tawbah_topic: {
        id: 'tawbah_topic',
        title: 'The Door of Repentance',
        content: 'In Islam, repentance (Tawbah) is always open. No sin is too great for Allah\'s forgiveness if one sincerely repents. Conditions: 1) Stop the sin, 2) Feel genuine regret, 3) Resolve not to return, 4) If the sin involved others\' rights, seek their forgiveness.',
        verse: {
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',
            translation: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
            reference: 'Surah Az-Zumar 39:53'
        },
        options: [
            { label: 'How to become Muslim?', next: 'become_muslim' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Character in Islam
    character_islam: {
        id: 'character_islam',
        title: 'Islamic Character (Akhlaq)',
        content: 'The Prophet ﷺ said: "I was only sent to perfect noble character." Islam places immense emphasis on good character: truthfulness, patience, gratitude, humility, kindness, generosity, and controlling anger. Good character is evidence of true faith.',
        verse: {
            arabic: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
            translation: 'And indeed, you are of a great moral character.',
            reference: 'Surah Al-Qalam 68:4'
        },
        options: [
            { label: 'About patience (Sabr)', next: 'about_sabr' },
            { label: 'Honesty in Islam', next: 'honesty_islam' },
            { label: 'Continue learning', next: 'islam_basics' }
        ]
    },

    // Dua (Supplication)
    dua_topic: {
        id: 'dua_topic',
        title: 'The Power of Dua',
        content: 'Dua (supplication) is the essence of worship. Allah loves when His servants call upon Him and promises to respond. The Prophet ﷺ said: "Dua is worship." You can ask Allah for anything - He is the Most Generous, closer to you than your jugular vein.',
        verse: {
            arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
            translation: 'And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.',
            reference: 'Surah Al-Baqarah 2:186'
        },
        options: [
            { label: 'Continue learning', next: 'islam_basics' },
            { label: 'Prayer times', next: 'prayer_info' }
        ]
    },

    // Ramadan
    ramadan_topic: {
        id: 'ramadan_topic',
        title: 'The Blessed Month of Ramadan',
        content: 'Ramadan is the month when the Quran was revealed. Muslims fast from dawn to sunset, abstaining from food, drink, and marital relations. It teaches self-discipline, empathy for the poor, and spiritual purification. The last ten nights contain Laylatul Qadr - better than 1000 months!',
        verse: {
            arabic: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ',
            translation: 'The month of Ramadan in which was revealed the Quran, a guidance for the people.',
            reference: 'Surah Al-Baqarah 2:185'
        },
        options: [
            { label: 'Five Pillars of Islam', next: 'islam_basics' },
            { label: 'Continue learning', next: 'start' }
        ]
    },

    // Hajj
    hajj_topic: {
        id: 'hajj_topic',
        title: 'The Pilgrimage to Mecca',
        content: 'Hajj is the fifth pillar of Islam - a once-in-a-lifetime obligation for those who are physically and financially able. Muslims from all nations gather in Mecca, dressed in simple white garments, equal before Allah. It commemorates the legacy of Ibrahim and his family.',
        verse: {
            arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
            translation: 'And Hajj to the House is a duty mankind owes to Allah, those who can find a way thereto.',
            reference: 'Surah Ali Imran 3:97'
        },
        options: [
            { label: 'About Ibrahim (Abraham)', next: 'about_ibrahim' },
            { label: 'Five Pillars of Islam', next: 'islam_basics' },
            { label: 'Continue learning', next: 'start' }
        ]
    }
};

class BeliefJourney {
    constructor() {
        this.currentNode = 'start';
        this.history = [];
        this.init();
    }

    init() {
        this.container = document.getElementById('journey-container');
        this.render();
    }

    // Get current language code
    getLang() {
        if (typeof window.langManager !== 'undefined') {
            return window.langManager.getCurrentLanguage();
        }
        return 'en';
    }

    // Get localized text from object {en: '...', ar: '...'} or return string as-is
    getLocalizedText(textObj) {
        if (typeof textObj === 'string') return textObj;
        if (typeof textObj === 'object' && textObj !== null) {
            const lang = this.getLang();
            return textObj[lang] || textObj['en'] || '';
        }
        return '';
    }

    // Get translated text with fallback
    getTranslation(key, fallback) {
        if (typeof window.langManager !== 'undefined') {
            const text = window.langManager.t(key);
            if (text && text !== key) return text;
        }
        return fallback;
    }

    render() {
        const node = journeyData[this.currentNode];
        if (!node) return;

        const progressDots = this.history.map(() => '<span class="progress-dot completed"></span>').join('') +
            '<span class="progress-dot active"></span>';

        const title = this.getLocalizedText(node.title);
        const content = this.getLocalizedText(node.content);

        let verseHtml = '';
        if (node.verse) {
            const verseTranslation = this.getLocalizedText(node.verse.translation);
            verseHtml = `
                <div class="verse">
                    <p class="arabic" style="font-family: 'Amiri', serif; font-size: 1.5rem; color: var(--primary-green);">${node.verse.arabic}</p>
                    <p style="font-style: italic; margin: 0.5rem 0;">"${verseTranslation}"</p>
                    <p style="color: var(--gold); font-weight: 600; font-size: 0.9rem;">- ${node.verse.reference}</p>
                </div>
            `;
        }

        let optionsHtml = '';
        if (node.options) {
            optionsHtml = node.options.map(opt => `
                <div class="journey-option" data-next="${opt.next}">
                    <h4>${this.getLocalizedText(opt.label)}</h4>
                </div>
            `).join('');
        }

        let actionButton = '';
        if (node.isEnd && node.action) {
            const prayerText = this.getTranslation('journeyGoPrayer', 'Go to Prayer Times');
            actionButton = `<a href="${node.action}" class="btn btn-primary" style="margin-top: 1rem;">${prayerText}</a>`;
        }

        const backText = this.getTranslation('journeyBack', 'Go Back');
        const restartText = this.getTranslation('journeyRestart', 'Start Over');

        this.container.innerHTML = `
            <div class="journey-card">
                <div class="journey-progress">
                    ${progressDots}
                </div>
                <h2>${title}</h2>
                <p>${content}</p>
                ${verseHtml}
                <div class="journey-options">
                    ${optionsHtml}
                </div>
                ${actionButton}
                <div class="journey-nav-buttons" style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    ${this.history.length > 0 ? `<button class="btn btn-secondary" id="back-btn">${backText}</button>` : ''}
                    ${this.history.length > 2 ? `<button class="btn btn-secondary" id="restart-btn">${restartText}</button>` : ''}
                </div>
            </div>
        `;

        // Bind option clicks
        this.container.querySelectorAll('.journey-option').forEach(option => {
            option.addEventListener('click', () => {
                const next = option.dataset.next;
                this.goTo(next);
            });
        });

        // Bind back button
        const backBtn = document.getElementById('back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.goBack());
        }

        // Bind restart button
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restart());
        }
    }

    goTo(nodeId) {
        if (journeyData[nodeId]) {
            this.history.push(this.currentNode);
            this.currentNode = nodeId;
            this.render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    goBack() {
        if (this.history.length > 0) {
            this.currentNode = this.history.pop();
            this.render();
        }
    }

    restart() {
        this.currentNode = 'start';
        this.history = [];
        this.render();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new BeliefJourney();
});
