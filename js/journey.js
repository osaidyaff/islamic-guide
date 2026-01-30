// Islamic Guidance - Expanded Belief Journey / Decision Tree
// With comprehensive paths including guidance for Shia Muslims to Sunnah

const journeyData = {
    // Starting point
    start: {
        id: 'start',
        title: 'Welcome, Seeker of Truth',
        content: 'This journey is designed to help you explore and understand Islam based on where you are in your spiritual path. Answer honestly, and we will guide you with wisdom, evidence, and respect.',
        verse: {
            arabic: 'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',
            translation: 'Invite to the way of your Lord with wisdom and good instruction.',
            reference: 'Surah An-Nahl 16:125'
        },
        options: [
            { label: 'I believe in God/Creator', next: 'believes_god' },
            { label: 'I\'m unsure about God\'s existence', next: 'unsure_god' },
            { label: 'I don\'t believe in God', next: 'atheist_start' },
            { label: 'I\'m already Muslim', next: 'muslim_path' },
            { label: 'I follow another religion', next: 'other_religion' },
            { label: 'Address misconceptions about Islam', next: 'misconceptions' }
        ]
    },

    // Muslim Path - New Branch
    muslim_path: {
        id: 'muslim_path',
        title: 'Welcome, Fellow Muslim',
        content: 'Alhamdulillah! Whether you\'re seeking to strengthen your faith, learn more about your deen, or have questions about different groups within Islam, this journey will help you.',
        verse: {
            arabic: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',
            translation: 'And hold firmly to the rope of Allah all together and do not become divided.',
            reference: 'Surah Ali Imran 3:103'
        },
        options: [
            { label: 'I want to strengthen my practice', next: 'strengthen_practice' },
            { label: 'I have questions about Sunni/Shia differences', next: 'sunni_shia_intro' },
            { label: 'I\'m Shia and curious about Sunnah', next: 'shia_to_sunnah' },
            { label: 'I want to understand authentic Islam', next: 'authentic_islam' },
            { label: 'Questions about innovation (Bid\'ah)', next: 'bidah_intro' },
            { label: 'Deep theological questions', next: 'theological_deep' }
        ]
    },

    // Strengthen Practice
    strengthen_practice: {
        id: 'strengthen_practice',
        title: 'Strengthening Your Islam',
        content: 'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it." Strengthening your Islam starts with knowledge, consistent worship, and following the Sunnah of the Prophet ﷺ.',
        verse: {
            arabic: 'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا',
            translation: 'And whatever the Messenger has given you - take; and what he has forbidden you - refrain from.',
            reference: 'Surah Al-Hashr 59:7'
        },
        options: [
            { label: 'Learn about the Five Pillars', next: 'islam_basics' },
            { label: 'Understand the importance of Sunnah', next: 'about_sunnah' },
            { label: 'Learn about the Companions', next: 'about_sahaba' },
            { label: 'Avoid innovations in religion', next: 'bidah_intro' }
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
        title: 'You Believe in a Creator',
        content: 'That\'s wonderful! Belief in One God is the foundation of Islam. Muslims believe in the same God worshipped by Abraham, Moses, and Jesus - called "Allah" in Arabic (which simply means "The God").',
        verse: {
            arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
            translation: 'Say: He is Allah, the One.',
            reference: 'Surah Al-Ikhlas 112:1'
        },
        options: [
            { label: 'I believe God sends prophets to guide humanity', next: 'believes_prophets' },
            { label: 'I\'m not sure about prophets', next: 'learn_prophets' },
            { label: 'What makes Islam different?', next: 'islam_unique' },
            { label: 'What is the purpose of life?', next: 'purpose_of_life' }
        ]
    },

    // Purpose of Life
    purpose_of_life: {
        id: 'purpose_of_life',
        title: 'Why Are We Here?',
        content: 'Islam answers the fundamental question of existence clearly: We were created to know and worship Allah. This worship isn\'t just prayer - it\'s living a life of purpose, gratitude, justice, and preparation for the eternal life to come.',
        verse: {
            arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
            translation: 'And I did not create the jinn and mankind except to worship Me.',
            reference: 'Surah Adh-Dhariyat 51:56'
        },
        options: [
            { label: 'What happens after death?', next: 'afterlife' },
            { label: 'How do we worship?', next: 'islam_basics' },
            { label: 'Tell me about prophets', next: 'believes_prophets' }
        ]
    },

    // Afterlife
    afterlife: {
        id: 'afterlife',
        title: 'The Life After Death',
        content: 'Islam teaches that this life is a test. After death, we will be resurrected and held accountable for our deeds. Those who believed and did good will enter Paradise - eternal bliss. Those who rejected truth and did evil face punishment. But Allah\'s mercy is vast.',
        verse: {
            arabic: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',
            translation: 'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.',
            reference: 'Surah Ali Imran 3:185'
        },
        options: [
            { label: 'How do I prepare for it?', next: 'islam_basics' },
            { label: 'How does one achieve salvation?', next: 'salvation' },
            { label: 'Continue learning', next: 'believes_prophets' }
        ]
    },

    // Branch: Believes in Prophets
    believes_prophets: {
        id: 'believes_prophets',
        title: 'Prophets: God\'s Messengers',
        content: 'Muslims believe in ALL prophets sent by God - including Adam, Noah, Abraham, Moses, and Jesus (peace be upon them all). We believe Muhammad ﷺ is the final prophet, sent with the complete and preserved message.',
        verse: {
            arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ',
            translation: 'The Messenger has believed in what was revealed to him from his Lord, and so have the believers.',
            reference: 'Surah Al-Baqarah 2:285'
        },
        options: [
            { label: 'Tell me about Prophet Muhammad ﷺ', next: 'about_muhammad' },
            { label: 'What about Jesus in Islam?', next: 'jesus_islam' },
            { label: 'Why is Muhammad the final prophet?', next: 'final_prophet' },
            { label: 'What about Abraham?', next: 'about_ibrahim' }
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
        title: 'Questioning God\'s Existence',
        content: 'It\'s okay to have questions - Islam encourages sincere inquiry. Let\'s think together: Everything that begins to exist has a cause. The universe began to exist. Therefore, the universe has a cause. This cause must be uncaused, timeless, and powerful.',
        verse: {
            arabic: 'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ',
            translation: 'Do they not look at the camels - how they are created?',
            reference: 'Surah Al-Ghashiyah 88:17'
        },
        options: [
            { label: 'Tell me more about evidence for God', next: 'evidence_god' },
            { label: 'What about science and Islam?', next: 'science_islam' },
            { label: 'The design argument', next: 'design_argument' },
            { label: 'I\'m starting to believe, what\'s next?', next: 'believes_god' }
        ]
    },

    // Design Argument
    design_argument: {
        id: 'design_argument',
        title: 'The Design in Creation',
        content: 'Look at the human body: 37 trillion cells working in harmony, eyes more complex than any camera, a brain with 86 billion neurons. Look at the universe: precisely balanced forces, Earth perfectly positioned for life. Does this look like random chance or intelligent design?',
        verse: {
            arabic: 'وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ',
            translation: 'And within yourselves. Will you not then see?',
            reference: 'Surah Adh-Dhariyat 51:21'
        },
        options: [
            { label: 'More evidence', next: 'evidence_god' },
            { label: 'I\'m convinced', next: 'believes_god' },
            { label: 'Science and Islam?', next: 'science_islam' }
        ]
    },

    // Evidence for God
    evidence_god: {
        id: 'evidence_god',
        title: 'Evidence for a Creator',
        content: 'Consider: 1) The Fine-Tuning: The universe\'s constants are precisely calibrated for life. 2) DNA\'s Information: Complex coded information requires an intelligent source. 3) Consciousness: Material cannot produce immaterial consciousness. 4) The Quran: Contains knowledge impossible for a 7th-century man.',
        verse: {
            arabic: 'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',
            translation: 'We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.',
            reference: 'Surah Fussilat 41:53'
        },
        options: [
            { label: 'What about science and Islam?', next: 'science_islam' },
            { label: 'I\'m convinced, tell me more about Islam', next: 'believes_god' },
            { label: 'What does the Quran say?', next: 'about_quran' }
        ]
    },

    // Science and Islam
    science_islam: {
        id: 'science_islam',
        title: 'Science and Islam',
        content: 'Islam and science are not in conflict. The Islamic Golden Age led world scientific advancement. The Quran contains statements about embryology, the Big Bang, expanding universe, and water cycle that align with modern science - remarkable for a 7th century book.',
        verse: {
            arabic: 'أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا',
            translation: 'Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them?',
            reference: 'Surah Al-Anbiya 21:30'
        },
        options: [
            { label: 'More scientific miracles', next: 'quran_science' },
            { label: 'Tell me about the Quran', next: 'about_quran' },
            { label: 'I want to learn Islam basics', next: 'islam_basics' }
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
        title: 'For the Thoughtful Skeptic',
        content: 'We respect your position and welcome honest dialogue. Let\'s explore together: The existence of objective morality, consciousness, the origin of the universe, and the remarkable precision of life all point toward something beyond the material.',
        verse: {
            arabic: 'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',
            translation: 'Were they created by nothing, or were they the creators [of themselves]?',
            reference: 'Surah At-Tur 52:35'
        },
        options: [
            { label: 'Show me evidence for God', next: 'evidence_god' },
            { label: 'What about science?', next: 'science_islam' },
            { label: 'What does Islam teach about morality?', next: 'morality' },
            { label: 'The design argument', next: 'design_argument' }
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
        title: 'Exploring Truth Together',
        content: 'We respect all sincere seekers of truth. Islam teaches that God sent prophets to all nations throughout history. Let us share what unites us and respectfully discuss our differences.',
        verse: {
            arabic: 'قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ',
            translation: 'Say, "O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah."',
            reference: 'Surah Ali Imran 3:64'
        },
        options: [
            { label: 'I\'m Christian', next: 'christian_path' },
            { label: 'I\'m Jewish', next: 'jewish_path' },
            { label: 'I\'m Hindu', next: 'hindu_path' },
            { label: 'I\'m Buddhist', next: 'buddhist_path' },
            { label: 'I follow another path', next: 'other_path' }
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
        title: 'The Basics of Islam',
        content: 'Islam rests on Five Pillars: 1) Shahada - Declaration of faith, 2) Salah - Five daily prayers, 3) Zakat - Charity, 4) Sawm - Fasting in Ramadan, 5) Hajj - Pilgrimage to Mecca.',
        verse: {
            arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
            translation: 'This day I have perfected for you your religion and completed My favor upon you.',
            reference: 'Surah Al-Ma\'idah 5:3'
        },
        options: [
            { label: 'Tell me about the Six Articles of Faith', next: 'six_articles' },
            { label: 'What is Sunnah?', next: 'about_sunnah' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // Six Articles of Faith
    six_articles: {
        id: 'six_articles',
        title: 'Six Articles of Faith',
        content: 'Muslims believe in: 1) Allah - The One True God, 2) Angels, 3) Divine Books including Quran, 4) Prophets from Adam to Muhammad ﷺ, 5) Day of Judgment, 6) Divine Decree.',
        verse: {
            arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ',
            translation: 'The Messenger believed in what was revealed to him from his Lord, and so have the believers.',
            reference: 'Surah Al-Baqarah 2:285'
        },
        options: [
            { label: 'What is Sunnah?', next: 'about_sunnah' },
            { label: 'How do I become Muslim?', next: 'become_muslim' }
        ]
    },

    // About Sunnah
    about_sunnah: {
        id: 'about_sunnah',
        title: 'The Sunnah (Prophetic Way)',
        content: 'The Sunnah refers to the teachings and practices of Prophet Muhammad ﷺ. It\'s the practical example of how to live Islam. Following the Sunnah is essential because the Prophet ﷺ was the best interpreter of the Quran.',
        verse: {
            arabic: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
            translation: 'There has certainly been for you in the Messenger of Allah an excellent pattern.',
            reference: 'Surah Al-Ahzab 33:21'
        },
        options: [
            { label: 'I\'m ready to become Muslim', next: 'become_muslim' },
            { label: 'I want to explore more', next: 'start' }
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
        title: 'Embracing Islam',
        content: 'To become Muslim, sincerely declare the Shahada: "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasul Allah" (I bear witness there is no god but Allah, and Muhammad is His messenger). After this, gradually learn prayer, Quran, and good character.',
        verse: {
            arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
            translation: 'I bear witness that there is no god but Allah, and Muhammad is the Messenger of Allah.',
            reference: 'The Shahada'
        },
        options: [
            { label: 'What are the next steps?', next: 'next_steps' },
            { label: 'I want to explore more first', next: 'start' }
        ]
    },

    // Next Steps
    next_steps: {
        id: 'next_steps',
        title: 'Your New Beginning',
        content: 'After Shahada: 1) Take a purifying bath (Ghusl), 2) Learn to pray, 3) Read Quran with translation, 4) Connect with local Muslims/mosque, 5) Learn gradually. All previous sins are forgiven - you\'re like a newborn!',
        verse: {
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
            translation: 'Say, "O My servants who have transgressed, do not despair of the mercy of Allah."',
            reference: 'Surah Az-Zumar 39:53'
        },
        options: [
            { label: 'Learn about Prayer Times', next: 'prayer_info' },
            { label: 'Start from beginning', next: 'start' }
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
        title: 'Common Misconceptions About Islam',
        content: 'Many misunderstandings exist about Islam due to media portrayals and lack of knowledge. Let us address some common misconceptions with evidence from authentic sources.',
        verse: {
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
            translation: 'O you who believe, if a wicked person comes to you with news, verify it.',
            reference: 'Surah Al-Hujurat 49:6'
        },
        options: [
            { label: 'Islam and violence', next: 'islam_violence' },
            { label: 'Women in Islam', next: 'women_islam' },
            { label: 'Understanding Jihad', next: 'jihad_explained' },
            { label: 'Islam and other faiths', next: 'islam_tolerance' }
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

    // Get translated text with fallback
    getTranslation(key, fallback) {
        if (typeof window.langManager !== 'undefined') {
            const text = window.langManager.get(key);
            if (text && text !== key) return text;
        }
        return fallback;
    }

    render() {
        const node = journeyData[this.currentNode];
        if (!node) return;

        const progressDots = this.history.map(() => '<span class="progress-dot completed"></span>').join('') +
            '<span class="progress-dot active"></span>';

        let verseHtml = '';
        if (node.verse) {
            verseHtml = `
                <div class="verse">
                    <p class="arabic" style="font-family: 'Amiri', serif; font-size: 1.5rem; color: var(--primary-green);">${node.verse.arabic}</p>
                    <p style="font-style: italic; margin: 0.5rem 0;">"${node.verse.translation}"</p>
                    <p style="color: var(--gold); font-weight: 600; font-size: 0.9rem;">- ${node.verse.reference}</p>
                </div>
            `;
        }

        let optionsHtml = '';
        if (node.options) {
            optionsHtml = node.options.map(opt => `
                <div class="journey-option" data-next="${opt.next}">
                    <h4>${opt.label}</h4>
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
                <h2>${node.title}</h2>
                <p>${node.content}</p>
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
