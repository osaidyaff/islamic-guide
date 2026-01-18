// Islamic Guidance - Comprehensive Hadith Library

const hadithCollection = [
    // FAITH & BELIEF
    {
        id: 1,
        category: 'faith',
        arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        english: 'Actions are judged by intentions, and every person will be rewarded according to their intention.',
        narrator: 'Umar ibn Al-Khattab (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 1, Hadith 1',
        hadithNumber: 1,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Revelation'
    },
    {
        id: 2,
        category: 'faith',
        arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        english: 'None of you truly believes until he loves for his brother what he loves for himself.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 2, Hadith 13',
        hadithNumber: 13,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 3,
        category: 'faith',
        arabic: 'الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلاَةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ',
        english: 'Islam is to testify that there is no god but Allah and Muhammad is the Messenger of Allah, to establish prayer, to pay Zakat, to fast Ramadan, and to perform Hajj to the House if you are able.',
        narrator: 'Umar ibn Al-Khattab (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 1',
        hadithNumber: 8,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 4,
        category: 'faith',
        arabic: 'الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ',
        english: 'Faith has over seventy branches. The highest is to declare there is no god but Allah. The lowest is to remove something harmful from the road. And modesty is a branch of faith.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 58',
        hadithNumber: 35,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 5,
        category: 'faith',
        arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        english: 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 31',
        hadithNumber: 6018,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // CHARACTER & MANNERS
    {
        id: 6,
        category: 'character',
        arabic: 'خَيْرُكُمْ أَحْسَنُكُمْ أَخْلَاقًا',
        english: 'The best among you are those who have the best manners and character.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 61, Hadith 23',
        hadithNumber: 3559,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Virtues'
    },
    {
        id: 7,
        category: 'character',
        arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
        english: 'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 141',
        hadithNumber: 6114,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 8,
        category: 'character',
        arabic: 'يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا',
        english: 'Make things easy and do not make them difficult, cheer people up and do not drive them away.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 3, Hadith 13',
        hadithNumber: 69,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Knowledge'
    },
    {
        id: 9,
        category: 'character',
        arabic: 'مَنْ لَا يَرْحَمُ لَا يُرْحَمُ',
        english: 'He who does not show mercy will not be shown mercy.',
        narrator: 'Jarir ibn Abdullah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 42',
        hadithNumber: 6013,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 10,
        category: 'character',
        arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
        english: 'Your smile to your brother is a charity.',
        narrator: 'Abu Dharr (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 36',
        hadithNumber: 1956,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 11,
        category: 'character',
        arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
        english: 'A good word is charity.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 34',
        hadithNumber: 6021,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 12,
        category: 'character',
        arabic: 'إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ',
        english: 'Indeed, Allah is gentle and loves gentleness in all matters.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 82',
        hadithNumber: 6024,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // WORSHIP
    {
        id: 13,
        category: 'worship',
        arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ',
        english: 'Cleanliness is half of faith.',
        narrator: 'Abu Malik Al-Ashari (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 2, Hadith 1',
        hadithNumber: 223,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Purification'
    },
    {
        id: 14,
        category: 'worship',
        arabic: 'الصَّلَاةُ عِمَادُ الدِّينِ',
        english: 'Prayer is the pillar of the religion.',
        narrator: 'Umar ibn Al-Khattab (may Allah be pleased with him)',
        source: 'Musnad Ahmad',
        reference: 'Hadith 22428',
        hadithNumber: 22428,
        grading: 'Hasan (Good)',
        chapter: 'Book of Prayer'
    },
    {
        id: 15,
        category: 'worship',
        arabic: 'مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلَّا مَلَكَانِ يَنْزِلَانِ فَيَقُولُ أَحَدُهُمَا اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا وَيَقُولُ الْآخَرُ اللَّهُمَّ أَعْطِ مُمْسِكًا تَلَفًا',
        english: 'There is no day upon which the servants wake except that two angels descend. One says: O Allah, give to the one who spends a replacement. The other says: O Allah, give to the one who withholds destruction.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 24, Hadith 27',
        hadithNumber: 1442,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Zakat'
    },
    {
        id: 16,
        category: 'worship',
        arabic: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        english: 'Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 30, Hadith 6',
        hadithNumber: 1901,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Fasting'
    },
    {
        id: 17,
        category: 'worship',
        arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
        english: 'Supplication (Dua) is worship.',
        narrator: 'An-Numan ibn Bashir (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 45, Hadith 1',
        hadithNumber: 3247,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Supplications'
    },
    {
        id: 18,
        category: 'worship',
        arabic: 'أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ',
        english: 'The closest a servant is to his Lord is when he is in prostration, so increase your supplications.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 4, Hadith 215',
        hadithNumber: 482,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Prayer'
    },

    // FAMILY & RELATIONS
    {
        id: 19,
        category: 'family',
        arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي',
        english: 'The best of you is the one who is best to his family, and I am the best of you to my family.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 46, Hadith 3',
        hadithNumber: 3895,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Virtues'
    },
    {
        id: 20,
        category: 'family',
        arabic: 'الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ',
        english: 'Paradise lies under the feet of mothers.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sunan An-Nasai',
        reference: 'Book 25, Hadith 20',
        hadithNumber: 3104,
        grading: 'Hasan (Good)',
        chapter: 'Book of Jihad'
    },
    {
        id: 21,
        category: 'family',
        arabic: 'مَنْ كَانَتْ لَهُ ثَلَاثُ بَنَاتٍ فَصَبَرَ عَلَيْهِنَّ وَأَطْعَمَهُنَّ وَسَقَاهُنَّ وَكَسَاهُنَّ مِنْ جِدَتِهِ كُنَّ لَهُ حِجَابًا مِنَ النَّارِ',
        english: 'Whoever has three daughters and is patient with them, feeds them, gives them drink, and clothes them from his wealth, they will be a shield for him from the Fire.',
        narrator: 'Uqbah ibn Amir (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 33, Hadith 13',
        hadithNumber: 3669,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Etiquette'
    },
    {
        id: 22,
        category: 'family',
        arabic: 'لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا',
        english: 'He is not one of us who does not show mercy to our young ones and respect to our elders.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 15',
        hadithNumber: 1919,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 23,
        category: 'family',
        arabic: 'مَنْ وَصَلَ رَحِمَهُ وَصَلَهُ اللَّهُ، وَمَنْ قَطَعَهَا قَطَعَهُ اللَّهُ',
        english: 'Whoever maintains family ties, Allah will maintain ties with him. Whoever severs family ties, Allah will sever ties with him.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 16',
        hadithNumber: 5988,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // SOCIETY & JUSTICE
    {
        id: 24,
        category: 'society',
        arabic: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ',
        english: 'A Muslim is the brother of another Muslim. He does not wrong him nor does he forsake him.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 46, Hadith 3',
        hadithNumber: 2442,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Oppression'
    },
    {
        id: 25,
        category: 'society',
        arabic: 'انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا',
        english: 'Help your brother whether he is an oppressor or is being oppressed. If he is the oppressor, stop him from oppressing - that is helping him.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 46, Hadith 4',
        hadithNumber: 2444,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Oppression'
    },
    {
        id: 26,
        category: 'society',
        arabic: 'اتَّقُوا الظُّلْمَ فَإِنَّ الظُّلْمَ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ',
        english: 'Beware of oppression, for oppression will be darkness on the Day of Resurrection.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 32, Hadith 62',
        hadithNumber: 2578,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 27,
        category: 'society',
        arabic: 'لَا ضَرَرَ وَلَا ضِرَارَ',
        english: 'There should be no harm and no reciprocal harm.',
        narrator: 'Abu Said Al-Khudri (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 13, Hadith 27',
        hadithNumber: 2340,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Rulings'
    },
    {
        id: 28,
        category: 'society',
        arabic: 'مَنْ غَشَّنَا فَلَيْسَ مِنَّا',
        english: 'Whoever cheats us is not one of us.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 182',
        hadithNumber: 102,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },

    // KNOWLEDGE & LEARNING
    {
        id: 29,
        category: 'knowledge',
        arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        english: 'Seeking knowledge is an obligation upon every Muslim.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 1, Hadith 224',
        hadithNumber: 224,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Knowledge'
    },
    {
        id: 30,
        category: 'knowledge',
        arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
        english: 'Whoever travels a path seeking knowledge, Allah will make easy for him a path to Paradise.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 35, Hadith 10',
        hadithNumber: 2699,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Remembrance'
    },
    {
        id: 31,
        category: 'knowledge',
        arabic: 'بَلِّغُوا عَنِّي وَلَوْ آيَةً',
        english: 'Convey from me, even if it is one verse.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 60, Hadith 50',
        hadithNumber: 3461,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Prophets'
    },
    {
        id: 32,
        category: 'knowledge',
        arabic: 'الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ فَحَيْثُ وَجَدَهَا فَهُوَ أَحَقُّ بِهَا',
        english: 'Wisdom is the lost property of the believer; wherever he finds it, he has more right to it.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 39, Hadith 19',
        hadithNumber: 2687,
        grading: 'Hasan (Good)',
        chapter: 'Book of Knowledge'
    },

    // DAILY LIFE
    {
        id: 33,
        category: 'daily',
        arabic: 'إِذَا أَكَلَ أَحَدُكُمْ فَلْيَأْكُلْ بِيَمِينِهِ وَإِذَا شَرِبَ فَلْيَشْرَبْ بِيَمِينِهِ',
        english: 'When any of you eats, let him eat with his right hand, and when he drinks, let him drink with his right hand.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 36, Hadith 104',
        hadithNumber: 2020,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Drinks'
    },
    {
        id: 34,
        category: 'daily',
        arabic: 'مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ',
        english: 'No human being fills a container worse than his stomach.',
        narrator: 'Al-Miqdam ibn Madikarib (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 36, Hadith 58',
        hadithNumber: 2380,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Asceticism'
    },
    {
        id: 35,
        category: 'daily',
        arabic: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
        english: 'Indeed, Allah loves that when one of you does a deed, he does it with excellence.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Al-Bayhaqi in Shuab Al-Iman',
        reference: 'Hadith 4929',
        hadithNumber: 4929,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Work'
    },
    {
        id: 36,
        category: 'daily',
        arabic: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى',
        english: 'The upper hand (giving) is better than the lower hand (receiving).',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 24, Hadith 54',
        hadithNumber: 1427,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Zakat'
    },

    // HEREAFTER
    {
        id: 37,
        category: 'hereafter',
        arabic: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',
        english: 'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.',
        narrator: 'From the Quran (3:185)',
        source: 'Al-Quran',
        reference: 'Surah Ali Imran 3:185',
        hadithNumber: 0,
        grading: 'Quranic Verse',
        chapter: 'Book of Remembrance of Death'
    },
    {
        id: 38,
        category: 'hereafter',
        arabic: 'أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ يَعْنِي الْمَوْتَ',
        english: 'Frequently remember the destroyer of pleasures - meaning death.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 36, Hadith 4',
        hadithNumber: 2307,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Asceticism'
    },
    {
        id: 39,
        category: 'hereafter',
        arabic: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ',
        english: 'The world is a prison for the believer and a paradise for the disbeliever.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 53, Hadith 1',
        hadithNumber: 2956,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Asceticism'
    },
    {
        id: 40,
        category: 'hereafter',
        arabic: 'مَنْ أَحَبَّ لِقَاءَ اللَّهِ أَحَبَّ اللَّهُ لِقَاءَهُ',
        english: 'Whoever loves to meet Allah, Allah loves to meet him.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 81, Hadith 41',
        hadithNumber: 6507,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Heart Softening'
    },
    {
        id: 41,
        category: 'hereafter',
        arabic: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
        english: 'Indeed, Allah does not look at your appearance or wealth, but He looks at your hearts and deeds.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 32, Hadith 33',
        hadithNumber: 2564,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },

    // Additional important hadiths
    {
        id: 42,
        category: 'faith',
        arabic: 'الدِّينُ النَّصِيحَةُ',
        english: 'The religion is sincerity and sincere advice.',
        narrator: 'Tamim Ad-Dari (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 95',
        hadithNumber: 55,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 43,
        category: 'character',
        arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
        english: 'I was sent to perfect good character.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Musnad Ahmad',
        reference: 'Hadith 8939',
        hadithNumber: 8939,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Character'
    },
    {
        id: 44,
        category: 'worship',
        arabic: 'مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        english: 'Whoever stands in prayer on the Night of Decree out of faith and seeking reward, his previous sins will be forgiven.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 32, Hadith 1',
        hadithNumber: 1901,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Night Prayer'
    },
    {
        id: 45,
        category: 'society',
        arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        english: 'A Muslim is one from whose tongue and hand other Muslims are safe.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 2, Hadith 9',
        hadithNumber: 10,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },

    // ============ EXPANDED HADITH COLLECTION ============

    // MORE FAITH & BELIEF
    {
        id: 46,
        category: 'faith',
        arabic: 'الإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
        english: 'Ihsan (excellence) is to worship Allah as if you see Him, and if you cannot see Him, then He sees you.',
        narrator: 'Umar ibn Al-Khattab (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 2, Hadith 50',
        hadithNumber: 50,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith (Hadith Jibreel)'
    },
    {
        id: 47,
        category: 'faith',
        arabic: 'ذَاقَ طَعْمَ الإِيمَانِ مَنْ رَضِيَ بِاللَّهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ رَسُولاً',
        english: 'He has tasted the sweetness of faith who is content with Allah as Lord, Islam as religion, and Muhammad as Messenger.',
        narrator: 'Abbas ibn Abdul-Muttalib (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 56',
        hadithNumber: 34,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 48,
        category: 'faith',
        arabic: 'آيَةُ الْمُنَافِقِ ثَلاَثٌ إِذَا حَدَّثَ كَذَبَ وَإِذَا وَعَدَ أَخْلَفَ وَإِذَا اؤْتُمِنَ خَانَ',
        english: 'The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 2, Hadith 32',
        hadithNumber: 33,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 49,
        category: 'faith',
        arabic: 'مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ وَكَفَرَ بِمَا يُعْبَدُ مِنْ دُونِ اللَّهِ حَرُمَ مَالُهُ وَدَمُهُ',
        english: 'Whoever says La ilaha illallah and rejects what is worshipped besides Allah, his property and blood become sacred.',
        narrator: 'Abu Malik Al-Ashari (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 37',
        hadithNumber: 23,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 50,
        category: 'faith',
        arabic: 'لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ',
        english: 'No one who has an atom\'s weight of arrogance in his heart will enter Paradise.',
        narrator: 'Abdullah ibn Masud (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 164',
        hadithNumber: 91,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },

    // MORE CHARACTER & MANNERS
    {
        id: 51,
        category: 'character',
        arabic: 'الْمُؤْمِنُ الَّذِي يُخَالِطُ النَّاسَ وَيَصْبِرُ عَلَى أَذَاهُمْ أَعْظَمُ أَجْرًا مِنَ الَّذِي لاَ يُخَالِطُ النَّاسَ وَلاَ يَصْبِرُ عَلَى أَذَاهُمْ',
        english: 'The believer who mixes with people and is patient with their harm has greater reward than the one who does not mix with them.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 37, Hadith 4032',
        hadithNumber: 4032,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Tribulations'
    },
    {
        id: 52,
        category: 'character',
        arabic: 'إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلاَقًا',
        english: 'The dearest and closest of you to me on the Day of Resurrection will be those with the best character.',
        narrator: 'Jabir ibn Abdullah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 62',
        hadithNumber: 2018,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 53,
        category: 'character',
        arabic: 'إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ',
        english: 'Beware of suspicion, for suspicion is the most untruthful of speech.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 92',
        hadithNumber: 6064,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 54,
        category: 'character',
        arabic: 'لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلاَ اللَّعَّانِ وَلاَ الْفَاحِشِ وَلاَ الْبَذِيءِ',
        english: 'A believer is not one who taunts, curses, is vulgar, or indecent.',
        narrator: 'Abdullah ibn Masud (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 50',
        hadithNumber: 1977,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 55,
        category: 'character',
        arabic: 'مَنْ كَظَمَ غَيْظًا وَهُوَ قَادِرٌ عَلَى أَنْ يُنْفِذَهُ دَعَاهُ اللَّهُ عَزَّ وَجَلَّ عَلَى رُؤُوسِ الْخَلاَئِقِ',
        english: 'Whoever suppresses his anger when he is able to act on it, Allah will call him before all creation on the Day of Resurrection.',
        narrator: 'Muadh ibn Anas (may Allah be pleased with him)',
        source: 'Sunan Abu Dawud',
        reference: 'Book 43, Hadith 4777',
        hadithNumber: 4777,
        grading: 'Hasan (Good)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 56,
        category: 'character',
        arabic: 'الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ',
        english: 'Modesty brings nothing but good.',
        narrator: 'Imran ibn Husain (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 139',
        hadithNumber: 6117,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 57,
        category: 'character',
        arabic: 'الصِّدْقُ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
        english: 'Truthfulness leads to righteousness, and righteousness leads to Paradise.',
        narrator: 'Abdullah ibn Masud (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 69',
        hadithNumber: 6094,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // MORE WORSHIP
    {
        id: 58,
        category: 'worship',
        arabic: 'بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلاَةِ',
        english: 'Between a person and disbelief and polytheism is the abandonment of prayer.',
        narrator: 'Jabir ibn Abdullah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 1, Hadith 146',
        hadithNumber: 82,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Faith'
    },
    {
        id: 59,
        category: 'worship',
        arabic: 'أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللَّهِ الْمُحَرَّمُ وَأَفْضَلُ الصَّلاَةِ بَعْدَ الْفَرِيضَةِ صَلاَةُ اللَّيْلِ',
        english: 'The best fasting after Ramadan is the month of Muharram, and the best prayer after the obligatory is the night prayer.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 13, Hadith 211',
        hadithNumber: 1163,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Fasting'
    },
    {
        id: 60,
        category: 'worship',
        arabic: 'مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ',
        english: 'Whoever performs ablution well, his sins will depart from his body.',
        narrator: 'Uthman ibn Affan (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 2, Hadith 32',
        hadithNumber: 245,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Purification'
    },
    {
        id: 61,
        category: 'worship',
        arabic: 'مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهِنَّ أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الأَيَّامِ الْعَشْرِ',
        english: 'There are no days in which righteous deeds are more beloved to Allah than these ten days (of Dhul Hijjah).',
        narrator: 'Abdullah ibn Abbas (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 13, Hadith 11',
        hadithNumber: 969,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Two Eids'
    },
    {
        id: 62,
        category: 'worship',
        arabic: 'صَوْمُ يَوْمِ عَرَفَةَ أَحْتَسِبُ عَلَى اللَّهِ أَنْ يُكَفِّرَ السَّنَةَ الَّتِي قَبْلَهُ وَالسَّنَةَ الَّتِي بَعْدَهُ',
        english: 'Fasting on the Day of Arafah, I hope from Allah that it will expiate the sins of the previous year and the following year.',
        narrator: 'Abu Qatadah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 13, Hadith 196',
        hadithNumber: 1162,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Fasting'
    },
    {
        id: 63,
        category: 'worship',
        arabic: 'رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا',
        english: 'The two rakah of Fajr are better than the world and everything in it.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Sahih Muslim',
        reference: 'Book 6, Hadith 96',
        hadithNumber: 725,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Travelers\' Prayers'
    },
    {
        id: 64,
        category: 'worship',
        arabic: 'مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ',
        english: 'Whoever performs Hajj without obscenity or evil, he returns like the day his mother gave birth to him.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 25, Hadith 4',
        hadithNumber: 1521,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Hajj'
    },

    // MORE FAMILY & RELATIONS
    {
        id: 65,
        category: 'family',
        arabic: 'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
        english: 'When a person dies, his deeds are cut off except from three: ongoing charity, knowledge that benefits, or a righteous child who prays for him.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 25, Hadith 20',
        hadithNumber: 1631,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Wills'
    },
    {
        id: 66,
        category: 'family',
        arabic: 'رَضَا اللَّهِ فِي رَضَا الْوَالِدَيْنِ وَسَخَطُ اللَّهِ فِي سَخَطِ الْوَالِدَيْنِ',
        english: 'The pleasure of Allah is in the pleasure of the parents, and the displeasure of Allah is in the displeasure of the parents.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 2',
        hadithNumber: 1899,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 67,
        category: 'family',
        arabic: 'مَنْ عَالَ جَارِيَتَيْنِ حَتَّى تَبْلُغَا جَاءَ يَوْمَ الْقِيَامَةِ أَنَا وَهُوَ كَهَاتَيْنِ',
        english: 'Whoever raises two girls until they reach maturity, he and I will come on the Day of Resurrection like this (together).',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 45, Hadith 66',
        hadithNumber: 2631,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 68,
        category: 'family',
        arabic: 'اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا فَإِنَّهُنَّ خُلِقْنَ مِنْ ضِلَعٍ',
        english: 'Treat women kindly, for they were created from a rib.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 60, Hadith 1',
        hadithNumber: 3331,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Creation'
    },
    {
        id: 69,
        category: 'family',
        arabic: 'مَنْ أَرَادَ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ',
        english: 'Whoever wishes for his provision to be increased and his life extended, let him maintain family ties.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 14',
        hadithNumber: 5986,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // MORE SOCIETY & JUSTICE
    {
        id: 70,
        category: 'society',
        arabic: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ',
        english: 'The believers in their mutual love, mercy, and compassion are like one body; if one part suffers, the whole body responds.',
        narrator: 'An-Numan ibn Bashir (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 40',
        hadithNumber: 6011,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 71,
        category: 'society',
        arabic: 'مَنْ أَشَارَ إِلَى أَخِيهِ بِحَدِيدَةٍ فَإِنَّ الْمَلاَئِكَةَ تَلْعَنُهُ',
        english: 'Whoever points at his brother with an iron weapon, the angels curse him.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 45, Hadith 124',
        hadithNumber: 2616,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 72,
        category: 'society',
        arabic: 'لاَ تَحَاسَدُوا وَلاَ تَنَاجَشُوا وَلاَ تَبَاغَضُوا وَلاَ تَدَابَرُوا',
        english: 'Do not envy one another, do not inflate prices artificially, do not hate one another, do not turn away from one another.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 45, Hadith 32',
        hadithNumber: 2564,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },
    {
        id: 73,
        category: 'society',
        arabic: 'لاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثِ لَيَالٍ',
        english: 'It is not permissible for a Muslim to shun his brother for more than three nights.',
        narrator: 'Abu Ayyub Al-Ansari (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 91',
        hadithNumber: 6065,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },
    {
        id: 74,
        category: 'society',
        arabic: 'كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ',
        english: 'Each of you is a shepherd and each of you is responsible for his flock.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 11, Hadith 11',
        hadithNumber: 893,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Friday'
    },
    {
        id: 75,
        category: 'society',
        arabic: 'مَنْ فَرَّجَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا فَرَّجَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
        english: 'Whoever relieves a believer of distress in this world, Allah will relieve him of distress on the Day of Resurrection.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 35, Hadith 10',
        hadithNumber: 2699,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Remembrance'
    },

    // MORE KNOWLEDGE & LEARNING
    {
        id: 76,
        category: 'knowledge',
        arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
        english: 'The best of you are those who learn the Quran and teach it.',
        narrator: 'Uthman ibn Affan (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 66, Hadith 21',
        hadithNumber: 5027,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Virtues of Quran'
    },
    {
        id: 77,
        category: 'knowledge',
        arabic: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
        english: 'When Allah wishes good for someone, He grants him understanding in religion.',
        narrator: 'Muawiyah ibn Abi Sufyan (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 3, Hadith 10',
        hadithNumber: 71,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Knowledge'
    },
    {
        id: 78,
        category: 'knowledge',
        arabic: 'إِنَّ اللَّهَ لاَ يَقْبِضُ الْعِلْمَ انْتِزَاعًا يَنْتَزِعُهُ مِنَ الْعِبَادِ وَلَكِنْ يَقْبِضُ الْعِلْمَ بِقَبْضِ الْعُلَمَاءِ',
        english: 'Allah does not take away knowledge by snatching it from people, but He takes it by taking away the scholars.',
        narrator: 'Abdullah ibn Amr (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 3, Hadith 34',
        hadithNumber: 100,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Knowledge'
    },
    {
        id: 79,
        category: 'knowledge',
        arabic: 'الدَّالُّ عَلَى الْخَيْرِ كَفَاعِلِهِ',
        english: 'The one who guides to good is like the one who does it.',
        narrator: 'Anas ibn Malik (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 41, Hadith 2',
        hadithNumber: 2670,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Knowledge'
    },

    // MORE DAILY LIFE
    {
        id: 80,
        category: 'daily',
        arabic: 'مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا',
        english: 'Whoever wakes up safe in his dwelling, healthy in his body, with his day\'s provision, it is as if he has the entire world.',
        narrator: 'Ubaidullah ibn Mihsan (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 36, Hadith 34',
        hadithNumber: 2346,
        grading: 'Hasan (Good)',
        chapter: 'Book of Asceticism'
    },
    {
        id: 81,
        category: 'daily',
        arabic: 'احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجِزْ',
        english: 'Strive for what benefits you, seek help from Allah, and do not be helpless.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 33, Hadith 34',
        hadithNumber: 2664,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Destiny'
    },
    {
        id: 82,
        category: 'daily',
        arabic: 'اتَّقُوا اللَّهَ وَأَجْمِلُوا فِي الطَّلَبِ',
        english: 'Fear Allah and be moderate in seeking (provision).',
        narrator: 'Jabir ibn Abdullah (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 12, Hadith 2144',
        hadithNumber: 2144,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Trade'
    },
    {
        id: 83,
        category: 'daily',
        arabic: 'ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ',
        english: 'Be detached from the world and Allah will love you. Be detached from what people have and people will love you.',
        narrator: 'Sahl ibn Saad (may Allah be pleased with him)',
        source: 'Sunan Ibn Majah',
        reference: 'Book 37, Hadith 4102',
        hadithNumber: 4102,
        grading: 'Hasan (Good)',
        chapter: 'Book of Asceticism'
    },
    {
        id: 84,
        category: 'daily',
        arabic: 'قَالَ اللَّهُ تَعَالَى يَا ابْنَ آدَمَ تَفَرَّغْ لِعِبَادَتِي أَمْلأْ صَدْرَكَ غِنًى وَأَسُدَّ فَقْرَكَ',
        english: 'Allah says: O son of Adam, free yourself for My worship, I will fill your chest with richness and remove your poverty.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 36, Hadith 36',
        hadithNumber: 2466,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Asceticism'
    },

    // MORE HEREAFTER
    {
        id: 85,
        category: 'hereafter',
        arabic: 'اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ',
        english: 'Guard yourselves against the Fire, even if only with half a date.',
        narrator: 'Adi ibn Hatim (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 24, Hadith 9',
        hadithNumber: 1417,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Zakat'
    },
    {
        id: 86,
        category: 'hereafter',
        arabic: 'حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ وَحُفَّتِ النَّارُ بِالشَّهَوَاتِ',
        english: 'Paradise is surrounded by hardships, and the Fire is surrounded by desires.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 51, Hadith 1',
        hadithNumber: 2822,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Paradise'
    },
    {
        id: 87,
        category: 'hereafter',
        arabic: 'كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',
        english: 'Be in the world as if you were a stranger or a traveler.',
        narrator: 'Abdullah ibn Umar (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 81, Hadith 3',
        hadithNumber: 6416,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Heart Softening'
    },
    {
        id: 88,
        category: 'hereafter',
        arabic: 'لَوْ يَعْلَمُ الْمُؤْمِنُ مَا عِنْدَ اللَّهِ مِنَ الْعُقُوبَةِ مَا طَمِعَ بِجَنَّتِهِ أَحَدٌ وَلَوْ يَعْلَمُ الْكَافِرُ مَا عِنْدَ اللَّهِ مِنَ الرَّحْمَةِ مَا قَنَطَ مِنْ جَنَّتِهِ أَحَدٌ',
        english: 'If the believer knew what punishment Allah has, no one would hope for His Paradise. And if the disbeliever knew the mercy Allah has, no one would despair of His Paradise.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 49, Hadith 23',
        hadithNumber: 2755,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Repentance'
    },
    {
        id: 89,
        category: 'hereafter',
        arabic: 'مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حُزْنٍ وَلاَ أَذًى وَلاَ غَمٍّ إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ',
        english: 'No fatigue, illness, anxiety, sorrow, harm, or distress befalls a Muslim but that Allah expiates some of his sins thereby.',
        narrator: 'Abu Said Al-Khudri (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 75, Hadith 1',
        hadithNumber: 5641,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Patients'
    },
    {
        id: 90,
        category: 'hereafter',
        arabic: 'عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لأَحَدٍ إِلاَّ لِلْمُؤْمِنِ',
        english: 'How wonderful is the affair of the believer! All his affairs are good, and that is not for anyone except the believer.',
        narrator: 'Suhaib (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 53, Hadith 17',
        hadithNumber: 2999,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Asceticism'
    },

    // COMPANIONS OF THE PROPHET
    {
        id: 91,
        category: 'faith',
        arabic: 'لاَ تَسُبُّوا أَصْحَابِي فَوَالَّذِي نَفْسِي بِيَدِهِ لَوْ أَنْفَقَ أَحَدُكُمْ مِثْلَ أُحُدٍ ذَهَبًا مَا بَلَغَ مُدَّ أَحَدِهِمْ وَلاَ نَصِيفَهُ',
        english: 'Do not curse my companions. By Him in whose hand is my soul, if one of you spent gold equal to Uhud, it would not equal a handful of theirs.',
        narrator: 'Abu Said Al-Khudri (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 62, Hadith 5',
        hadithNumber: 3673,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Companions'
    },
    {
        id: 92,
        category: 'faith',
        arabic: 'خَيْرُ النَّاسِ قَرْنِي ثُمَّ الَّذِينَ يَلُونَهُمْ ثُمَّ الَّذِينَ يَلُونَهُمْ',
        english: 'The best of people are my generation, then those who follow them, then those who follow them.',
        narrator: 'Abdullah ibn Masud (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 62, Hadith 2',
        hadithNumber: 3651,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Companions'
    },

    // REMEMBRANCE OF ALLAH (DHIKR)
    {
        id: 93,
        category: 'worship',
        arabic: 'مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ',
        english: 'The example of one who remembers his Lord and one who does not is like the living and the dead.',
        narrator: 'Abu Musa Al-Ashari (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 80, Hadith 1',
        hadithNumber: 6407,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Invocations'
    },
    {
        id: 94,
        category: 'worship',
        arabic: 'كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
        english: 'Two words are light on the tongue, heavy on the scales, beloved to the Most Merciful: SubhanAllahi wa bihamdihi, SubhanAllahil Azeem.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 80, Hadith 21',
        hadithNumber: 6406,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Invocations'
    },
    {
        id: 95,
        category: 'worship',
        arabic: 'أَحَبُّ الْكَلاَمِ إِلَى اللَّهِ أَرْبَعٌ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ',
        english: 'The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, and Allahu Akbar.',
        narrator: 'Samurah ibn Jundub (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 35, Hadith 14',
        hadithNumber: 2137,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Remembrance'
    },

    // GRATITUDE
    {
        id: 96,
        category: 'character',
        arabic: 'مَنْ لاَ يَشْكُرِ النَّاسَ لاَ يَشْكُرِ اللَّهَ',
        english: 'He who does not thank people does not thank Allah.',
        narrator: 'Abu Hurairah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 27, Hadith 87',
        hadithNumber: 1954,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Righteousness'
    },

    // NEIGHBORS
    {
        id: 97,
        category: 'society',
        arabic: 'مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ',
        english: 'Jibreel kept advising me about neighbors until I thought he would make them heirs.',
        narrator: 'Aisha (may Allah be pleased with her)',
        source: 'Sahih Al-Bukhari',
        reference: 'Book 78, Hadith 28',
        hadithNumber: 6014,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Good Manners'
    },

    // DUAS AND SUPPLICATIONS
    {
        id: 98,
        category: 'worship',
        arabic: 'أَفْضَلُ الدُّعَاءِ الْحَمْدُ لِلَّهِ وَأَفْضَلُ الذِّكْرِ لاَ إِلَهَ إِلاَّ اللَّهُ',
        english: 'The best supplication is Alhamdulillah, and the best remembrance is La ilaha illallah.',
        narrator: 'Jabir ibn Abdullah (may Allah be pleased with him)',
        source: 'Jami At-Tirmidhi',
        reference: 'Book 45, Hadith 15',
        hadithNumber: 3383,
        grading: 'Hasan (Good)',
        chapter: 'Book of Supplications'
    },

    // REPENTANCE
    {
        id: 99,
        category: 'faith',
        arabic: 'اللَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ سَقَطَ عَلَى بَعِيرِهِ وَقَدْ أَضَلَّهُ فِي أَرْضِ فَلاَةٍ',
        english: 'Allah is more pleased with the repentance of His servant than one of you who finds his lost camel in a desert.',
        narrator: 'Abdullah ibn Masud (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 49, Hadith 1',
        hadithNumber: 2744,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Repentance'
    },
    {
        id: 100,
        category: 'faith',
        arabic: 'إِنَّ اللَّهَ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ وَيَبْسُطُ يَدَهُ بِالنَّهَارِ لِيَتُوبَ مُسِيءُ اللَّيْلِ',
        english: 'Allah extends His hand at night so that the sinner of the day may repent, and He extends His hand by day so that the sinner of the night may repent.',
        narrator: 'Abu Musa Al-Ashari (may Allah be pleased with him)',
        source: 'Sahih Muslim',
        reference: 'Book 49, Hadith 12',
        hadithNumber: 2759,
        grading: 'Sahih (Authentic)',
        chapter: 'Book of Repentance'
    }
];

// Hadith Library Class
class HadithLibrary {
    constructor() {
        this.hadiths = hadithCollection;
        this.filteredHadiths = [...this.hadiths];
        this.currentPage = 1;
        this.perPage = 10;

        this.init();
    }

    init() {
        this.container = document.getElementById('hadith-container');
        this.searchInput = document.getElementById('hadith-search');
        this.categoryFilter = document.getElementById('category-filter');
        this.resultsCount = document.getElementById('results-count');

        this.bindEvents();
        this.render();
    }

    bindEvents() {
        this.searchInput?.addEventListener('input', () => this.filterHadiths());
        this.categoryFilter?.addEventListener('change', () => this.filterHadiths());
    }

    filterHadiths() {
        const searchTerm = this.searchInput?.value?.toLowerCase() || '';
        const category = this.categoryFilter?.value || '';

        this.filteredHadiths = this.hadiths.filter(hadith => {
            const matchesSearch = !searchTerm ||
                hadith.english.toLowerCase().includes(searchTerm) ||
                hadith.arabic.includes(searchTerm) ||
                hadith.narrator.toLowerCase().includes(searchTerm) ||
                hadith.source.toLowerCase().includes(searchTerm);

            const matchesCategory = !category || hadith.category === category;

            return matchesSearch && matchesCategory;
        });

        this.currentPage = 1;
        this.render();
    }

    render() {
        if (!this.container) return;

        if (this.resultsCount) {
            this.resultsCount.textContent = `${this.filteredHadiths.length} hadith found`;
        }

        if (this.filteredHadiths.length === 0) {
            this.container.innerHTML = `
                <div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-light);">
                    <p>No hadith found matching your search.</p>
                </div>
            `;
            return;
        }

        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        const pageHadiths = this.filteredHadiths.slice(start, end);

        let html = '';
        pageHadiths.forEach(hadith => {
            html += this.renderHadith(hadith);
        });

        // Pagination
        const totalPages = Math.ceil(this.filteredHadiths.length / this.perPage);
        if (totalPages > 1) {
            html += `<div class="pagination" style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem;">`;
            for (let i = 1; i <= totalPages; i++) {
                const active = i === this.currentPage ? 'btn-primary' : 'btn-secondary';
                html += `<button class="btn ${active} page-btn" data-page="${i}" style="padding: 0.5rem 1rem;">${i}</button>`;
            }
            html += `</div>`;
        }

        this.container.innerHTML = html;

        // Bind pagination clicks
        this.container.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentPage = parseInt(btn.dataset.page);
                this.render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    renderHadith(hadith) {
        const categoryLabels = {
            faith: 'Faith & Belief',
            worship: 'Worship',
            character: 'Character & Manners',
            family: 'Family & Relations',
            society: 'Society & Justice',
            knowledge: 'Knowledge & Learning',
            daily: 'Daily Life',
            hereafter: 'Hereafter'
        };

        return `
            <div class="hadith-card" style="background: var(--white); border-radius: 16px; padding: 2rem; margin-bottom: 1.5rem; box-shadow: var(--shadow);">
                <div class="hadith-category" style="display: inline-block; background: var(--primary-green); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; margin-bottom: 1rem;">
                    ${categoryLabels[hadith.category] || hadith.category}
                </div>

                <p class="hadith-arabic" style="font-family: 'Amiri', serif; font-size: 1.5rem; color: var(--primary-green); text-align: right; direction: rtl; line-height: 2; margin-bottom: 1rem; padding: 1rem; background: var(--cream); border-radius: 8px;">
                    ${hadith.arabic}
                </p>

                <p class="hadith-english" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; font-style: italic;">
                    "${hadith.english}"
                </p>

                <div class="hadith-reference" style="background: var(--cream); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                    <p style="margin-bottom: 0.5rem;"><strong>Narrator:</strong> ${hadith.narrator}</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Source:</strong> ${hadith.source}</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Reference:</strong> ${hadith.reference}</p>
                    <p style="margin-bottom: 0;"><strong>Grading:</strong> <span style="color: var(--primary-green); font-weight: 600;">${hadith.grading}</span></p>
                </div>
            </div>
        `;
    }

    getRandomHadith() {
        return this.hadiths[Math.floor(Math.random() * this.hadiths.length)];
    }
}

// Export for use in other files
window.HadithLibrary = HadithLibrary;
window.hadithCollection = hadithCollection;

// Get random hadith with reference (updated version)
function getRandomHadithWithRef() {
    const hadith = hadithCollection[Math.floor(Math.random() * hadithCollection.length)];
    return hadith;
}

window.getRandomHadithWithRef = getRandomHadithWithRef;
