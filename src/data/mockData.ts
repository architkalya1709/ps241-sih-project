import type { Career, Counsellor, ChatMessage, JobOpportunity } from '../types';

export const CAREERS_LIST: Career[] = [
  {
    id: 'solar-tech',
    titleEn: 'Solar PV Technician & Installer',
    titleHi: 'सोलर पीवी तकनीशियन और इंस्टॉलर',
    matchScore: 87,
    whyMatchEn: 'Matches Student interest in Green Energy & Parent demand for high Job Security & Govt Subsidy growth.',
    whyMatchHi: 'छात्र की हरित ऊर्जा रुचि और माता-पिता की उच्च नौकरी सुरक्षा और सरकारी सब्सिडी वृद्धि की मांग से मेल खाता है।',
    categoryEn: 'Clean Energy & Electrical',
    categoryHi: 'क्लीन एनर्जी और इलेक्ट्रिकल',
    requiredEducationEn: 'Class 10th / ITI Electrical or Wireman',
    requiredEducationHi: '10वीं पास / आईटीआई इलेक्ट्रिकल या वायरमैन',
    courseDurationEn: '6 Months (PMKVY / NSDC Certified)',
    courseDurationHi: '6 महीने (पीएमकेवीवाई / एनएसडीसी प्रमाणित)',
    keySkillsEn: ['Solar Rooftop Assembly', 'Inverter Wiring', 'Grid Connectivity', 'Electrical Safety', 'Maintenance'],
    keySkillsHi: ['सोलर रूफटॉप असेंबली', 'इन्वर्टर वायरिंग', 'ग्रिड कनेक्टिविटी', 'इलेक्ट्रिकल सुरक्षा', 'रखरखाव'],
    jobRolesEn: ['Solar Installation Technician', 'Plant Maintenance Specialist', 'Rooftop Solar Supervisor', 'Solar Entrepreneur'],
    jobRolesHi: ['सोलर इंस्टॉलेशन टेक्नीशियन', 'प्लांट मेंटेनेंस स्पेशलिस्ट', 'रूफटॉप सोलर सुपरवाइजर', 'सोलर उद्यमी'],
    startingSalaryEn: '₹18,000 - ₹24,000 / month',
    startingSalaryHi: '₹18,000 - ₹24,000 / माह',
    growthSalaryEn: '₹45,000 - ₹70,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹45,000 - ₹70,000 / माह (5 वर्ष अनुभव)',
    placementRate: 91,
    placementVerificationEn: 'Verified by Sector Skill Council for Green Jobs & Tata Power / Adani Solar Hire Partners',
    placementVerificationHi: 'ग्रीन जॉब्स सेक्टर स्किल काउंसिल और टाटा पावर / अदाणी सोलर पार्टनर्स द्वारा सत्यापित',
    careerGrowthEn: [
      'Apprentice Technician (Year 0)',
      'Certified Solar Installer (Year 1-2)',
      'Solar Project Site Supervisor (Year 3-4)',
      'Solar EPC Contractor / Independent Service Owner (Year 5+)'
    ],
    careerGrowthHi: [
      'प्रशिक्षु तकनीशियन (वर्ष 0)',
      'प्रमाणित सोलर इंस्टॉलर (वर्ष 1-2)',
      'सोलर प्रोजेक्ट साइट सुपरवाइजर (वर्ष 3-4)',
      'सोलर ईपीसी ठेकेदार / स्वतंत्र सेवा मालिक (वर्ष 5+)'
    ],
    furtherEducationEn: 'B.Voc in Renewable Energy Management / Advance Diploma in Solar Power Technology',
    furtherEducationHi: 'नवीकरणीय ऊर्जा प्रबंधन में बी.वोक / सोलर पावर टेक्नोलॉजी में एडवांस डिप्लोमा',
    trainingPathwayEn: 'Government ITI & PMKVY Training Kendras with 100% Practical Labs',
    trainingPathwayHi: 'सरकारी आईटीआई और पीएमकेवीवाई प्रशिक्षण केंद्र (100% प्रैक्टिकल लैब के साथ)',
    parentSafetyRating: 4.8,
    parentSecurityRating: 4.9,
    nctvAccredited: true
  },
  {
    id: 'electrician',
    titleEn: 'Industrial & Building Electrician',
    titleHi: 'औद्योगिक और भवन इलेक्ट्रीशियन',
    matchScore: 84,
    whyMatchEn: 'Extremely high demand in every district with steady evergreen local income & govt contract eligibility.',
    whyMatchHi: 'हर जिले में अत्यधिक मांग, लगातार स्थानीय आय और सरकारी ठेका पात्रता।',
    categoryEn: 'Electrical Engineering & Maintenance',
    categoryHi: 'इलेक्ट्रिकल इंजीनियरिंग और रखरखाव',
    requiredEducationEn: 'Class 10th Pass (Science & Math stream preferred)',
    requiredEducationHi: '10वीं पास (विज्ञान और गणित विषय अधिमान्य)',
    courseDurationEn: '1 Year ITI / NCVT Trade Certificate',
    courseDurationHi: '1 वर्ष आईटीआई / एनसीवीटी ट्रेड सर्टिफिकेट',
    keySkillsEn: ['Three-Phase Wiring', 'Control Panel Assembly', 'Transformer Testing', 'PLC Basics', 'Domestic Wiring'],
    keySkillsHi: ['थ्री-फेस वायरिंग', 'कंट्रोल पैनल असेंबली', 'ट्रांसफॉर्मर टेस्टिंग', 'पीएलसी बुनियादी बातें', 'घरेलू वायरिंग'],
    jobRolesEn: ['Industrial Electrician', 'Substation Operator', 'Building Maintenance Manager', 'Licensed Electrical Contractor'],
    jobRolesHi: ['औद्योगिक इलेक्ट्रीशियन', 'सबस्टेशन ऑपरेटर', 'भवन रखरखाव प्रबंधक', 'लाइसेंस प्राप्त इलेक्ट्रिकल ठेकेदार'],
    startingSalaryEn: '₹16,000 - ₹22,000 / month',
    startingSalaryHi: '₹16,000 - ₹22,000 / माह',
    growthSalaryEn: '₹40,000 - ₹65,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹40,000 - ₹65,000 / माह (5 वर्ष अनुभव)',
    placementRate: 89,
    placementVerificationEn: 'State Electricity Boards, Larsen & Toubro, Havells, Railways Contracting Partners',
    placementVerificationHi: 'राज्य बिजली बोर्ड, लार्सन एंड टुब्रो, हेवल्स, रेलवे ठेका पार्टनर्स',
    careerGrowthEn: [
      'Junior Wireman (Year 0)',
      'Licensed Supervisor (Year 2)',
      'Chief Maintenance Technician (Year 4)',
      'Govt Class-A Electrical Contractor (Year 6+)'
    ],
    careerGrowthHi: [
      'जूनियर वायरमैन (वर्ष 0)',
      'लाइसेंस प्राप्त सुपरवाइजर (वर्ष 2)',
      'मुख्य रखरखाव तकनीशियन (वर्ष 4)',
      'सरकारी क्लास-ए इलेक्ट्रिकल ठेकेदार (वर्ष 6+)'
    ],
    furtherEducationEn: 'Diploma in Electrical Engineering (Lateral Entry to 2nd Year)',
    furtherEducationHi: 'इलेक्ट्रिकल इंजीनियरिंग में डिप्लोमा (द्वितीय वर्ष में सीधे प्रवेश)',
    trainingPathwayEn: 'Government & Private ITIs with State Wireman License Exam Training',
    trainingPathwayHi: 'सरकारी और निजी आईटीआई (राज्य वायरमैन परीक्षा प्रशिक्षण के साथ)',
    parentSafetyRating: 4.6,
    parentSecurityRating: 4.9,
    nctvAccredited: true
  },
  {
    id: 'electronics-tech',
    titleEn: 'Electronics & Smart Appliance Service Specialist',
    titleHi: 'इलेक्ट्रॉनिक्स और स्मार्ट उपकरण सेवा विशेषज्ञ',
    matchScore: 79,
    whyMatchEn: 'High growth in semi-urban areas driven by smart TV, smartphone & IoT home appliance boom.',
    whyMatchHi: 'स्मार्ट टीवी, स्मार्टफोन और आईओटी होम अप्लायंस की बढ़ती मांग से अर्ध-शहरी क्षेत्रों में तेजी से विकास।',
    categoryEn: 'Electronics & Consumer Durables',
    categoryHi: 'इलेक्ट्रॉनिक्स और उपभोक्ता टिकाऊ वस्तुएं',
    requiredEducationEn: 'Class 10th / 12th Pass',
    requiredEducationHi: '10वीं / 12वीं पास',
    courseDurationEn: '6 Months (NSDC / ESSCI Certified)',
    courseDurationHi: '6 महीने (एनएसडीसी / ईएसएससीआई प्रमाणित)',
    keySkillsEn: ['PCB Soldering & Repair', 'SMD Component Diagnostics', 'Microcontroller Testing', 'AC/Inverter Servicing'],
    keySkillsHi: ['पीसीबी सोल्डरिंग और मरम्मत', 'एसएमडी घटकों की जांच', 'माइक्रोकंट्रोलर परीक्षण', 'एसी/इन्वर्टर सर्विसिंग'],
    jobRolesEn: ['Field Service Engineer', 'Service Center Lead', 'Quality Inspector', 'Authorized Service Franchise Owner'],
    jobRolesHi: ['फील्ड सर्विस इंजीनियर', 'सर्विस सेंटर लीड', 'गुणवत्ता निरीक्षक', 'अधिकृत सर्विस फ्रैंचाइजी मालिक'],
    startingSalaryEn: '₹15,000 - ₹20,000 / month',
    startingSalaryHi: '₹15,000 - ₹20,000 / माह',
    growthSalaryEn: '₹38,000 - ₹55,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹38,000 - ₹55,000 / माह (5 वर्ष अनुभव)',
    placementRate: 85,
    placementVerificationEn: 'Samsung, LG, Voltas, Dixon Technologies & Urban Company Authorized Partners',
    placementVerificationHi: 'सैमसंग, एलजी, वोल्टास, डिक्सन टेक्नोलॉजीज और अर्बन कंपनी अधिकृत पार्टनर्स',
    careerGrowthEn: [
      'Trainee Service Engineer (Year 0)',
      'Senior Service Specialist (Year 2)',
      'Regional Service Center Manager (Year 4)',
      'Electronics Enterprise Owner (Year 5+)'
    ],
    careerGrowthHi: [
      'प्रशिक्षु सेवा इंजीनियर (वर्ष 0)',
      'वरिष्ठ सेवा विशेषज्ञ (वर्ष 2)',
      'क्षेत्रीय सर्विस सेंटर प्रबंधक (वर्ष 4)',
      'इलेक्ट्रॉनिक्स उद्यम मालिक (वर्ष 5+)'
    ],
    furtherEducationEn: 'B.Voc in Industrial Electronics & IoT Maintenance',
    furtherEducationHi: 'इंडस्ट्रियल इलेक्ट्रॉनिक्स और आईओटी में बी.वोक',
    trainingPathwayEn: 'Skill India Training Hubs & Electronics Sector Skills Labs',
    trainingPathwayHi: 'स्किल इंडिया ट्रेनिंग हब और इलेक्ट्रॉनिक्स सेक्टर स्किल्स लैब',
    parentSafetyRating: 4.7,
    parentSecurityRating: 4.5,
    nctvAccredited: true
  },
  {
    id: 'ev-specialist',
    titleEn: 'Electric Vehicle (EV) Powertrain & Battery Specialist',
    titleHi: 'इलेक्ट्रिक वाहन (EV) पावरट्रेन और बैटरी विशेषज्ञ',
    matchScore: 76,
    whyMatchEn: 'Futuristic high-paying trade with rapid hiring in 2W/3W EV manufacturing plants & charging hubs.',
    whyMatchHi: 'भविष्यवादी उच्च वेतन वाला व्यापार, 2W/3W ईवी विनिर्माण संयंत्रों और चार्जिंग हब में तेजी से भर्ती।',
    categoryEn: 'Automotive & Future Mobility',
    categoryHi: 'ऑटोमोटिव और भविष्य की गतिशीलता',
    requiredEducationEn: 'Class 10th / 12th (Science) / ITI Motor Mechanic',
    requiredEducationHi: '10वीं / 12वीं (विज्ञान) / आईटीआई मोटर मैकेनिक',
    courseDurationEn: '6 Months Advanced Certificate',
    courseDurationHi: '6 महीने का एडवांस्ड सर्टिफिकेट',
    keySkillsEn: ['Lithium Battery Diagnostics', 'BMS Calibration', 'EV Controller Repair', 'High-Voltage Safety Protocols'],
    keySkillsHi: ['लिथियम बैटरी डायग्नोस्टिक्स', 'बीएमएस कैलिब्रेशन', 'ईवी कंट्रोलर मरम्मत', 'हाई-वोल्टेज सुरक्षा प्रोटोकॉल'],
    jobRolesEn: ['EV Service Specialist', 'Battery Testing Technician', 'EV Fleet Maintenance Supervisor', 'Charging Station Manager'],
    jobRolesHi: ['ईवी सर्विस विशेषज्ञ', 'बैटरी टेस्टिंग तकनीशियन', 'ईवी बेड़ा रखरखाव सुपरवाइजर', 'चार्जिंग स्टेशन मैनेजर'],
    startingSalaryEn: '₹20,000 - ₹26,000 / month',
    startingSalaryHi: '₹20,000 - ₹26,000 / माह',
    growthSalaryEn: '₹50,000 - ₹80,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹50,000 - ₹80,000 / माह (5 वर्ष अनुभव)',
    placementRate: 92,
    placementVerificationEn: 'Ather Energy, Ola Electric, Tata Motors EV Division, TVS Motors Placement Drives',
    placementVerificationHi: 'एथर एनर्जी, ओला इलेक्ट्रिक, टाटा मोटर्स ईवी डिवीजन, टीवीएस मोटर स्थान प्लेसमेंट ड्राइव',
    careerGrowthEn: [
      'EV Battery Technician (Year 0)',
      'Powertrain Diagnostic Lead (Year 2)',
      'EV Fleet Maintenance Manager (Year 4)',
      'EV Service Dealership Owner (Year 6+)'
    ],
    careerGrowthHi: [
      'ईवी बैटरी तकनीशियन (वर्ष 0)',
      'पावरट्रेन डायग्नोस्टिक लीड (वर्ष 2)',
      'ईवी बेड़ा रखरखाव प्रबंधक (वर्ष 4)',
      'ईवी सर्विस डीलरशिप मालिक (वर्ष 6+)'
    ],
    furtherEducationEn: 'B.Voc in Automobile Technology & EV Engineering',
    furtherEducationHi: 'ऑटोमोबाइल प्रौद्योगिकी और ईवी इंजीनियरिंग में बी.वोक',
    trainingPathwayEn: 'Automotive Skills Development Council (ASDC) CoE Labs',
    trainingPathwayHi: 'ऑटोमोटिव स्किल्स डेवलपमेंट काउंसिल (ASDC) उत्कृष्टता केंद्र लैब',
    parentSafetyRating: 4.9,
    parentSecurityRating: 4.8,
    nctvAccredited: true
  },
  {
    id: 'cnc-operator',
    titleEn: 'CNC Machine Programmer & Operator',
    titleHi: 'सीएनसी मशीन प्रोग्रामर और ऑपरेटर',
    matchScore: 74,
    whyMatchEn: 'High precision industrial manufacturing job with clean shopfloor conditions and high overseas/export plant demand.',
    whyMatchHi: 'स्वच्छ वर्कशॉप वातावरण के साथ उच्च परिशुद्धता औद्योगिक निर्माण कार्य और विदेशों में मांग।',
    categoryEn: 'Advanced Manufacturing & Precision',
    categoryHi: 'उन्नत विनिर्माण और सटीकता',
    requiredEducationEn: 'Class 10th / 12th Pass or ITI Turner / Machinist',
    requiredEducationHi: '10वीं / 12वीं पास या आईटीआई टर्नर / मशीनिस्ट',
    courseDurationEn: '6 Months to 1 Year (NCVT Accredited)',
    courseDurationHi: '6 महीने से 1 वर्ष (एनसीवीटी मान्यता प्राप्त)',
    keySkillsEn: ['G-Code & M-Code Programming', 'AutoCAD Blueprint Reading', 'Micrometer Precision Measurement', 'CNC Lathe Operation'],
    keySkillsHi: ['जी-कोड और एम-कोड प्रोग्रामिंग', 'ऑटोकैड ब्लूप्रिंट पढ़ना', 'माइक्रीमिटर परिशुद्धता माप', 'सीएनसी लेथ संचालन'],
    jobRolesEn: ['CNC Operator', 'CAM Programmer', 'Quality Tooling Technician', 'Machine Shop Floor Supervisor'],
    jobRolesHi: ['सीएनसी ऑपरेटर', 'कैम प्रोग्रामर', 'गुणवत्ता टूलिंग तकनीशियन', 'मशीन शॉप फ्लोर सुपरवाइजर'],
    startingSalaryEn: '₹18,000 - ₹23,000 / month',
    startingSalaryHi: '₹18,000 - ₹23,000 / माह',
    growthSalaryEn: '₹42,000 - ₹72,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹42,000 - ₹72,000 / माह (5 वर्ष अनुभव)',
    placementRate: 88,
    placementVerificationEn: 'Bharat Forge, Maruti Suzuki Vendors, Godrej Aerospace, Defense Ordnance Factories',
    placementVerificationHi: 'भारत फोर्ज, मारुति सुजुकी वेंडर्स, गोदरेज एयरोस्पेस, रक्षा आयुध कारखाने',
    careerGrowthEn: [
      'Junior CNC Operator (Year 0)',
      'Precision CAM Programmer (Year 2)',
      'Tool Room In-charge (Year 4)',
      'Manufacturing Plant Operations Manager (Year 7+)'
    ],
    careerGrowthHi: [
      'जूनियर सीएनसी ऑपरेटर (वर्ष 0)',
      'परिशुद्धता कैम प्रोग्रामर (वर्ष 2)',
      'टूल रूम प्रभारी (वर्ष 4)',
      'मैन्युफैक्चरिंग प्लांट ऑपरेशंस मैनेजर (वर्ष 7+)'
    ],
    furtherEducationEn: 'Diploma in Mechanical Production Engineering (Lateral Entry)',
    furtherEducationHi: 'मैकेनिकल प्रोडक्शन इंजीनियरिंग में डिप्लोमा',
    trainingPathwayEn: 'Central Tool Room & Training Centre (CTTC) Government Centers',
    trainingPathwayHi: 'सेंट्रल टूल रूम एंड ट्रेनिंग सेंटर (CTTC) सरकारी केंद्र',
    parentSafetyRating: 4.7,
    parentSecurityRating: 4.8,
    nctvAccredited: true
  },
  {
    id: 'healthcare-assistant',
    titleEn: 'Emergency & General Healthcare Assistant (GDA)',
    titleHi: 'इमरजेंसी और जनरल हेल्थकेयर असिस्टेंट (जीडीए)',
    matchScore: 72,
    whyMatchEn: 'Very high social respect, job security in government/private hospitals, and strong overseas nursing pathway.',
    whyMatchHi: 'अत्यधिक सामाजिक सम्मान, सरकारी/निजी अस्पतालों में स्थायी नौकरी सुरक्षा और विदेश जाने के अवसर।',
    categoryEn: 'Healthcare & Paramedical',
    categoryHi: 'स्वास्थ्य सेवा और पैरामेडिकल',
    requiredEducationEn: 'Class 10th / 12th Pass (Any stream)',
    requiredEducationHi: '10वीं / 12वीं पास (किसी भी वर्ग में)',
    courseDurationEn: '6 Months to 1 Year (Healthcare SSC Certified)',
    courseDurationHi: '6 महीने से 1 वर्ष (हेल्थकेयर एसएससी प्रमाणित)',
    keySkillsEn: ['Patient Care & Vital Monitoring', 'First Aid & CPR', 'Medical Documentation', 'Infection Control Protocols'],
    keySkillsHi: ['मरीज की देखभाल और वाइटल चेकिंग', 'प्राथमिक चिकित्सा और सीपीआर', 'मेडिकल दस्तावेजीकरण', 'संक्रमण नियंत्रण प्रोटोकॉल'],
    jobRolesEn: ['General Duty Assistant (GDA)', 'Home Healthcare Specialist', 'Clinic Manager', 'Hospital Ward Coordinator'],
    jobRolesHi: ['जनरल ड्यूटी असिस्टेंट (जीडीए)', 'होम हेल्थकेयर विशेषज्ञ', 'क्लिनिक मैनेजर', 'अस्पताल वार्ड समन्वयक'],
    startingSalaryEn: '₹16,000 - ₹22,000 / month',
    startingSalaryHi: '₹16,000 - ₹22,000 / माह',
    growthSalaryEn: '₹38,000 - ₹60,000 / month (5 Yrs Exp)',
    growthSalaryHi: '₹38,000 - ₹60,000 / माह (5 वर्ष अनुभव)',
    placementRate: 94,
    placementVerificationEn: 'Apollo Hospitals, Max Healthcare, Fortis, Govt District Hospital Contracts',
    placementVerificationHi: 'अपोलो हॉस्पिटल्स, मैक्स हेल्थकेयर, फोर्टिस, सरकारी जिला अस्पताल अनुबंध',
    careerGrowthEn: [
      'Junior GDA (Year 0)',
      'Senior Patient Care Coordinator (Year 2)',
      'ICU Paramedical Technician (Year 4)',
      'Hospital Operations Officer (Year 6+)'
    ],
    careerGrowthHi: [
      'जूनियर जीडीए (वर्ष 0)',
      'वरिष्ठ मरीज देखभाल समन्वयक (वर्ष 2)',
      'आईसीयू पैरामेडिकल तकनीशियन (वर्ष 4)',
      'अस्पताल संचालन अधिकारी (वर्ष 6+)'
    ],
    furtherEducationEn: 'General Nursing & Midwifery (GNM) / B.Sc Nursing / B.Voc Paramedical Technology',
    furtherEducationHi: 'जनरल नर्सिंग एंड मिडवाइफरी (जीएनएम) / बी.एससी नर्सिंग / बी.वोक',
    trainingPathwayEn: 'National Skill Development Corporation Healthcare Sector Skills Academy',
    trainingPathwayHi: 'राष्ट्रीय कौशल विकास निगम स्वास्थ्य सेवा क्षेत्र कौशल अकादमी',
    parentSafetyRating: 5.0,
    parentSecurityRating: 4.9,
    nctvAccredited: true
  }
];

export const COUNSELLORS_LIST: Counsellor[] = [
  {
    id: 'c-1',
    name: 'Dr. Sunita Sharma',
    titleEn: 'Senior Vocational Guidance Expert & Former ITI Principal',
    titleHi: 'वरिष्ठ वोकेशनल मार्गदर्शन विशेषज्ञ एवं पूर्व आईटीआई प्राचार्या',
    experienceEn: '14+ Years in Vocational Counselling & NSDC Guidance',
    experienceHi: '14+ वर्षों का वोकेशनल परामर्श और एनएसडीसी मार्गदर्शन',
    languages: ['Hindi', 'English', 'Bhojpuri'],
    rating: 4.9,
    sessionsCount: 3420,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    specialtiesEn: ['Parent Security Concerns', 'Solar & Electrical Trades', 'Govt Apprenticeship Schemes'],
    specialtiesHi: ['अभिभावक सुरक्षा चिंताएं', 'सोलर और इलेक्ट्रिकल ट्रेड', 'सरकारी अप्रेंटिसशिप योजनाएं']
  },
  {
    id: 'c-2',
    name: 'Rajesh Kumar Verma',
    titleEn: 'Skill India Master Trainer & Industrial Placement Officer',
    titleHi: 'स्किल इंडिया मास्टर ट्रेनर एवं औद्योगिक प्लेसमेंट अधिकारी',
    experienceEn: '11+ Years in Manufacturing & Vocational Placement',
    experienceHi: '11+ वर्षों का मैन्युफैक्चरिंग और वोकेशनल प्लेसमेंट अनुभव',
    languages: ['Hindi', 'English', 'Maithili'],
    rating: 4.8,
    sessionsCount: 2890,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    specialtiesEn: ['CNC & EV Careers', 'Salary Growth Roadmaps', 'Higher Studies via B.Voc'],
    specialtiesHi: ['सीएनसी और ईवी करियर', 'वेतन वृद्धि रोडमैप', 'बी.वोक के माध्यम से उच्च शिक्षा']
  },
  {
    id: 'c-3',
    name: 'Priya Mukherjee',
    titleEn: 'Family Career Therapist & Youth Counsellor',
    titleHi: 'फैमिली करियर थेरेपिस्ट एवं युवा परामर्शदाता',
    experienceEn: '9+ Years in Student-Parent Conflict Resolution',
    experienceHi: '9+ वर्षों का छात्र-अभिभावक संवाद परामर्श अनुभव',
    languages: ['English', 'Hindi', 'Bengali'],
    rating: 4.9,
    sessionsCount: 2150,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    specialtiesEn: ['Social Perception & Respect', 'Girl Students in Technical Trades', 'Safety Assurance'],
    specialtiesHi: ['सामाजिक सम्मान और धारणा', 'तकनीकी ट्रेडों में छात्राएं', 'सुरक्षा आश्वासन']
  }
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'ai',
    senderLabelEn: 'CareerSaathi AI Counsellor',
    senderLabelHi: 'करियरसाथी एआई काउंसलर',
    textEn: 'Namaste Rahul & Verma ji! Welcome to CareerSaathi. I see Rahul is interested in Solar Energy, while Verma ji (Father) is primarily concerned about Job Security and Long-term Salary. Let’s resolve this together with verified Skill India data.',
    textHi: 'नमस्ते राहुल और वर्मा जी! करियरसाथी में आपका स्वागत है। मैं देख सकती हूँ कि राहुल सोलर एनर्जी में रुचि रखते हैं, जबकि वर्मा जी (पिताजी) मुख्य रूप से नौकरी की सुरक्षा और दीर्घकालिक वेतन को लेकर चिंतित हैं। आइए सत्यापित आंकड़ों के साथ मिलकर इसका समाधान करें।',
    timestamp: '10:00 AM'
  },
  {
    id: 'm2',
    sender: 'parent',
    senderLabelEn: 'Verma ji (Father)',
    senderLabelHi: 'वर्मा जी (पिताजी)',
    textEn: 'My main concern is whether Solar Technician is a temporary job or will it give my son a stable monthly income and government recognition?',
    textHi: 'मेरी मुख्य चिंता यह है कि क्या सोलर तकनीशियन एक अस्थायी नौकरी है या इससे मेरे बेटे को एक स्थिर मासिक आय और सरकारी मान्यता मिलेगी?',
    timestamp: '10:01 AM'
  },
  {
    id: 'm3',
    sender: 'ai',
    senderLabelEn: 'CareerSaathi AI Counsellor',
    senderLabelHi: 'करियरसाथी एआई काउंसलर',
    textEn: 'Verma ji, that is a very valid parent question! Solar Technicians undergo NCVET/NSDC certified training under PM Surya Ghar Yojana. The starting salary is ₹18,000 - ₹24,000/month in verified companies like Tata Power & Adani Solar. After 3 years, with site supervisor certification, earnings rise to ₹45,000+/month. It is a 100% formal, permanent industry with govt-backed contracts.',
    textHi: 'वर्मा जी, यह माता-पिता का बहुत ही सही सवाल है! सोलर तकनीशियन पीएम सूर्य घर योजना के तहत एनसीवीटी/एनएसडीसी प्रमाणित प्रशिक्षण लेते हैं। टाटा पावर और अदाणी सोलर जैसी सत्यापित कंपनियों में शुरुआती वेतन ₹18,000 - ₹24,000/माह है। 3 साल बाद साइट सुपरवाइजर सर्टिफिकेशन के साथ कमाई ₹45,000+/माह तक बढ़ जाती है।',
    timestamp: '10:02 AM',
    actionButtons: [
      { labelEn: 'View Solar Tech Details', labelHi: 'सोलर टेक विवरण देखें', targetScreen: 'career-detail' },
      { labelEn: 'See 5-Year Salary Growth', labelHi: '5-वर्षीय वेतन वृद्धि देखें', targetScreen: 'skill-roadmap' },
      { labelEn: 'Talk to Human Counsellor', labelHi: 'मानव काउंसलर से बात करें', targetScreen: 'human-counsellor' }
    ]
  },
  {
    id: 'm4',
    sender: 'student',
    senderLabelEn: 'Rahul (Student)',
    senderLabelHi: 'राहुल (छात्र)',
    textEn: 'Can I also study further for B.Voc degree while working as a Solar Technician?',
    textHi: 'क्या मैं सोलर तकनीशियन के रूप में काम करते हुए बी.वोक डिग्री की पढ़ाई भी आगे जारी रख सकता हूँ?',
    timestamp: '10:03 AM'
  },
  {
    id: 'm5',
    sender: 'ai',
    senderLabelEn: 'CareerSaathi AI Counsellor',
    senderLabelHi: 'करियरसाथी एआई काउंसलर',
    textEn: 'Yes Rahul! Under the National Credit Framework (NCrF), ITI & Skill certification credits can be transferred to a 3-Year B.Voc (Renewable Energy) degree in government universities while you gain practical work experience.',
    textHi: 'हाँ राहुल! राष्ट्रीय क्रेडिट फ्रेमवर्क (NCrF) के तहत, ITI और स्किल सर्टिफिकेशन के क्रेडिट को सरकारी विश्वविद्यालयों में 3-वर्षीय B.Voc (अक्षय ऊर्जा) डिग्री में स्थानांतरित किया जा सकता है।',
    timestamp: '10:04 AM',
    actionButtons: [
      { labelEn: 'Show Skill Roadmap', labelHi: 'स्किल रोडमैप देखें', targetScreen: 'skill-roadmap' },
      { labelEn: 'Compare with Electrician', labelHi: 'इलेक्ट्रीशियन से तुलना करें', targetScreen: 'career-comparison' }
    ]
  }
];

export const SOLAR_ROADMAP_STEPS = [
  {
    phase: 'Phase 1',
    titleEn: 'Foundation & Basic Electricals',
    titleHi: 'फाउंडेशन और बुनियादी इलेक्ट्रिकल',
    subtitleEn: 'Class 10th Completion + Basic Wiring Concepts',
    subtitleHi: '10वीं पास + बेसिक वायरिंग अवधारणाएं',
    durationEn: 'Months 1 - 2',
    durationHi: 'माह 1 - 2',
    skillsAcquiredEn: ['AC/DC Currents', 'Circuit Safety', 'Multimeter Handling', 'Tools Operation'],
    skillsAcquiredHi: ['एसी/डीसी करंट', 'सर्किट सुरक्षा', 'मल्टीमीटर संचालन', 'उपकरण उपयोग'],
    certifyingBodyEn: 'PMKVY Foundation Centre',
    certifyingBodyHi: 'पीएमकेवीवाई फाउंडेशन सेंटर',
    status: 'completed' as const
  },
  {
    phase: 'Phase 2',
    titleEn: 'Vocational Solar Training',
    titleHi: 'वोकेशनल सोलर प्रशिक्षण',
    subtitleEn: 'Hands-on Rooftop Assembly & Inverter Integration',
    subtitleHi: 'प्रैक्टिकल रूफटॉप असेंबली और इन्वर्टर इंटीग्रेशन',
    durationEn: 'Months 3 - 6',
    durationHi: 'माह 3 - 6',
    skillsAcquiredEn: ['Panel Mounting', 'Solar Inverter Wiring', 'Battery Storage Setup', 'Grid Synchronization'],
    skillsAcquiredHi: ['पैनल माउंटिंग', 'सोलर इन्वर्टर वायरिंग', 'बैटरी स्टोरेज सेटअप', 'ग्रिड सिंक्रोनाइज़ेशन'],
    certifyingBodyEn: 'Skill Council for Green Jobs (SCGJ)',
    certifyingBodyHi: 'ग्रीन जॉब्स कौशल परिषद',
    status: 'in-progress' as const
  },
  {
    phase: 'Phase 3',
    titleEn: 'National Skill Certification & Internship',
    titleHi: 'राष्ट्रीय कौशल प्रमाणन और इंटर्नशिप',
    subtitleEn: 'Paid Apprenticeship at Authorized Solar EPC Partner',
    subtitleHi: 'अधिकृत सोलर ईपीसी पार्टनर में सशुल्क प्रशिक्षुता',
    durationEn: 'Months 7 - 12',
    durationHi: 'माह 7 - 12',
    skillsAcquiredEn: ['Site Inspection', 'Fault Diagnosis', 'Client Handover Safety'],
    skillsAcquiredHi: ['साइट निरीक्षण', 'दोष निदान', 'क्लाइंट सुरक्षा नियम'],
    salaryMilestoneEn: 'Stipend: ₹12,000 - ₹15,000 / month',
    salaryMilestoneHi: 'स्टाइपेंड: ₹12,000 - ₹15,000 / माह',
    certifyingBodyEn: 'NCVET & NAPS (Nat. Apprenticeship Scheme)',
    certifyingBodyHi: 'एनसीवीटी और एनएपीएस (राष्ट्रीय अप्रेंटिसशिप योजना)',
    status: 'upcoming' as const
  },
  {
    phase: 'Phase 4',
    titleEn: 'Entry-Level Job Placement',
    titleHi: 'प्रारंभिक स्तर की नौकरी प्लेसमेंट',
    subtitleEn: 'Joined Tata Power Solar / Regional EPC Firm',
    subtitleHi: 'टाटा पावर सोलर / क्षेत्रीय ईपीसी फर्म में नियुक्ति',
    durationEn: 'Year 1 - 2',
    durationHi: 'वर्ष 1 - 2',
    skillsAcquiredEn: ['Commercial Solar Systems', 'High-Voltage Safety', 'Maintenance Audit'],
    skillsAcquiredHi: ['वाणिज्यिक सोलर प्रणाली', 'उच्च वोल्टेज सुरक्षा', 'रखरखाव ऑडिट'],
    salaryMilestoneEn: 'Salary: ₹18,000 - ₹24,000 / month',
    salaryMilestoneHi: 'वेतन: ₹18,000 - ₹24,000 / माह',
    certifyingBodyEn: 'Verified Sector Hire Partner',
    certifyingBodyHi: 'सत्यापित सेक्टर हायर पार्टनर',
    status: 'upcoming' as const
  },
  {
    phase: 'Phase 5',
    titleEn: 'Advanced Skills & Lateral B.Voc Degree',
    titleHi: 'उन्नत कौशल और पार्श्व B.Voc डिग्री',
    subtitleEn: 'Specialized Microgrid & Automated Monitoring',
    subtitleHi: 'विशेषीकृत माइक्रोग्रिड और स्वचालित निगरानी',
    durationEn: 'Year 3 - 4',
    durationHi: 'वर्ष 3 - 4',
    skillsAcquiredEn: ['SCADA Solar Monitoring', 'Industrial Solar Design', 'Project Estimates'],
    skillsAcquiredHi: ['SCADA सोलर मॉनिटरिंग', 'औद्योगिक सोलर डिजाइन', 'प्रोजेक्ट प्राक्कलन'],
    salaryMilestoneEn: 'Salary: ₹35,000 - ₹48,000 / month',
    salaryMilestoneHi: 'वेतन: ₹35,000 - ₹48,000 / माह',
    certifyingBodyEn: 'University B.Voc Degree (NCrF Aligned)',
    certifyingBodyHi: 'विश्वविद्यालय बी.वोक डिग्री (NCrF संरेखित)',
    status: 'upcoming' as const
  },
  {
    phase: 'Phase 6',
    titleEn: 'Senior Supervisor / Solar Enterprise Owner',
    titleHi: 'वरिष्ठ पर्यवेक्षक / सोलर उद्यम मालिक',
    subtitleEn: 'Managing District Solar Projects or Own Agency',
    subtitleHi: 'जिला सोलर परियोजनाओं या अपनी एजेंसी का प्रबंधन',
    durationEn: 'Year 5+',
    durationHi: 'वर्ष 5+',
    skillsAcquiredEn: ['Team Leadership', 'PM Surya Ghar Franchise Management', 'Financial Planning'],
    skillsAcquiredHi: ['टीम नेतृत्व', 'पीएम सूर्य घर फ्रेंचाइजी प्रबंधन', 'वित्तीय नियोजन'],
    salaryMilestoneEn: 'Income: ₹60,000 - ₹1,000,000+ / month',
    salaryMilestoneHi: 'आय: ₹60,000 - ₹1,00,000+ / माह',
    certifyingBodyEn: 'PM Mudra Loan Eligible & Class-A Govt Contractor',
    certifyingBodyHi: 'पीएम मुद्रा ऋण पात्र और वर्ग-ए सरकारी ठेकेदार',
    status: 'upcoming' as const
  }
];

export const PARENT_CONCERNS_LIST = [
  { id: 'income', icon: '💰', titleEn: 'Income & Salary Growth', titleHi: 'आय और वेतन वृद्धि', descEn: 'Will my child earn a sustainable monthly income?', descHi: 'क्या मेरा बच्चा टिकाऊ मासिक आय कमाएगा?' },
  { id: 'security', icon: '💼', titleEn: 'Job Security', titleHi: 'नौकरी की सुरक्षा', descEn: 'Is this job permanent and recession-proof?', descHi: 'क्या यह नौकरी स्थायी और सुरक्षित है?' },
  { id: 'growth', icon: '📈', titleEn: 'Career Growth', titleHi: 'करियर विकास', descEn: 'What is the 5-10 year promotion ladder?', descHi: '5-10 वर्षों में पदोन्नति का रोडमैप क्या है?' },
  { id: 'safety', icon: '🛡', titleEn: 'Work Safety', titleHi: 'कार्यस्थल सुरक्षा', descEn: 'Are protective measures & insurance provided?', descHi: 'क्या सुरक्षा उपाय और बीमा प्रदान किया जाता है?' },
  { id: 'higherEd', icon: '🎓', titleEn: 'Higher Education Opportunity', titleHi: 'उच्च शिक्षा के अवसर', descEn: 'Can my child pursue B.Voc or Degree later?', descHi: 'क्या मेरा बच्चा बाद में बी.वोक या डिग्री कर सकता है?' },
  { id: 'distance', icon: '🏠', titleEn: 'Distance from Home', titleHi: 'घर से दूरी', descEn: 'Are jobs available in home district or state?', descHi: 'क्या गृह जिले या राज्य में नौकरियां उपलब्ध हैं?' },
  { id: 'perception', icon: '👥', titleEn: 'Social Perception & Respect', titleHi: 'सामाजिक सम्मान और प्रतिष्ठा', descEn: 'Will society respect this vocational skill?', descHi: 'क्या समाज इस कौशल का सम्मान करेगा?' },
  { id: 'quality', icon: '🏫', titleEn: 'Training Quality', titleHi: 'प्रशिक्षण की गुणवत्ता', descEn: 'Is the institute govt-certified (NCVET/NSDC)?', descHi: 'क्या संस्थान सरकारी प्रमाणित (NCVET/NSDC) है?' },
  { id: 'placement', icon: '📋', titleEn: 'Guaranteed Placement', titleHi: 'गारंटीकृत प्लेसमेंट', descEn: 'Is job assistance provided upon completion?', descHi: 'क्या कोर्स पूरा होने पर नौकरी सहायता दी जाती है?' }
];

export const ADMIN_STATS_DATA = {
  totalUsers: 148520,
  parentParticipationRate: 86.4,
  counsellingSessions: 412900,
  humanEscalationRate: 3.8,
  avgDecisionTimeDays: 2.9,
  parentConcernsBreakdown: [
    { nameEn: 'Job Security', nameHi: 'नौकरी की सुरक्षा', value: 38, color: '#171717' },
    { nameEn: 'Starting Income', nameHi: 'शुरुआती आय', value: 26, color: '#404040' },
    { nameEn: 'Social Respect', nameHi: 'सामाजिक सम्मान', value: 16, color: '#737373' },
    { nameEn: 'Safety & Health', nameHi: 'सुरक्षा और स्वास्थ्य', value: 12, color: '#a3a3a3' },
    { nameEn: 'Higher Education', nameHi: 'उच्च शिक्षा', value: 8, color: '#d4d4d4' }
  ],
  topTradesRequested: [
    { tradeEn: 'Solar PV Technician', tradeHi: 'सोलर पीवी तकनीशियन', percentage: 32 },
    { tradeEn: 'Building & Industrial Electrician', tradeHi: 'इलेक्ट्रिशियन', percentage: 28 },
    { tradeEn: 'EV Battery & Powertrain', tradeHi: 'ईवी बैटरी एवं पावरट्रेन', percentage: 18 },
    { tradeEn: 'CNC Machine Programmer', tradeHi: 'सीएनसी प्रोग्रामर', percentage: 12 },
    { tradeEn: 'Healthcare GDA Assistant', tradeHi: 'हेल्थकेयर असिस्टेंट', percentage: 10 }
  ],
  regionalDistribution: [
    { stateEn: 'Uttar Pradesh', count: 42300 },
    { stateEn: 'Bihar', count: 35100 },
    { stateEn: 'Madhya Pradesh', count: 24800 },
    { stateEn: 'Rajasthan', count: 19400 },
    { stateEn: 'Maharashtra', count: 14200 },
    { stateEn: 'Others (PAN India)', count: 12720 }
  ]
};

export const MOCK_JOBS: JobOpportunity[] = [
  {
    id: 'job-101',
    titleEn: 'Senior Rooftop Solar Technician',
    titleHi: 'वरिष्ठ रूफटॉप सोलर तकनीशियन',
    companyName: 'Tata Power Renewable Energy',
    locationEn: 'Patna, Bihar / Home District',
    locationHi: 'पटना, बिहार / गृह जिला',
    type: 'Full-time' as const,
    salaryRangeEn: '₹22,000 - ₹28,000 / month',
    salaryRangeHi: '₹22,000 - ₹28,000 / माह',
    eligibilityEn: 'Class 10th / ITI Electrical + 6-mo Solar Cert',
    eligibilityHi: '10वीं / आईटीआई इलेक्ट्रिकल + 6-महीने का सोलर सर्टिफिकेट',
    skills: ['Solar PV Wiring', 'Inverter Testing', 'Safety Audit', 'Grid Assembly'],
    descriptionEn: 'Lead rooftop solar installations under PM Surya Ghar Muft Bijli Yojana. Conduct site inspection, assemble PV panels, and interface with DISCOM grid meters.',
    descriptionHi: 'पीएम सूर्य घर मुफ्त बिजली योजना के तहत रूफटॉप सोलर इंस्टॉलेशन का नेतृत्व करें। साइट निरीक्षण, पीवी पैनल असेंबली और डिस्कॉम ग्रिड मीटर के साथ इंटरफेस करें।',
    postedDate: '2 days ago',
    appliedStatus: 'Applied' as const
  },
  {
    id: 'job-102',
    titleEn: 'Industrial Automation & CNC Operator',
    titleHi: 'औद्योगिक स्वचालन और सीएनसी ऑपरेटर',
    companyName: 'Schneider Electric India',
    locationEn: 'Lucknow, Uttar Pradesh',
    locationHi: 'लखनऊ, उत्तर प्रदेश',
    type: 'Full-time' as const,
    salaryRangeEn: '₹24,000 - ₹32,000 / month',
    salaryRangeHi: '₹24,000 - ₹32,000 / माह',
    eligibilityEn: 'Class 10th / ITI Fitter or Machining',
    eligibilityHi: '10वीं / आईटीआई फिटर या मशीनिंग',
    skills: ['G-Code & M-Code', 'CNC Lathe', 'Precision Measurement', 'Quality Check'],
    descriptionEn: 'Operate automated CNC machines for precision component manufacturing. Execute quality control specs and maintain NCVET safety compliance.',
    descriptionHi: 'सटीक घटक निर्माण के लिए स्वचालित सीएनसी मशीनें संचालित करें। गुणवत्ता नियंत्रण विनिर्देशों को निष्पादित करें और एनसीवीटी सुरक्षा अनुपालन बनाए रखें।',
    postedDate: '1 day ago',
    isBookmarked: true
  },
  {
    id: 'job-103',
    titleEn: 'EV Powertrain Maintenance Apprentice',
    titleHi: 'ईवी पावरट्रेन रखरखाव प्रशिक्षु',
    companyName: 'Tata Motors EV Service',
    locationEn: 'Bhopal, Madhya Pradesh',
    locationHi: 'भोपाल, मध्य प्रदेश',
    type: 'Apprenticeship' as const,
    salaryRangeEn: '₹14,000 - ₹18,000 / month (Stipend)',
    salaryRangeHi: '₹14,000 - ₹18,000 / माह (वजीफा)',
    eligibilityEn: 'Class 10th Passed / Motor Mechanic ITI',
    eligibilityHi: '10वीं पास / मोटर मैकेनिक आईटीआई',
    skills: ['Li-Ion Diagnostics', 'BMS Wiring', 'High Voltage Safety'],
    descriptionEn: 'NAPS certified apprenticeship program for Electric Vehicle battery pack diagnostics, thermal management system maintenance, and motor overhaul.',
    descriptionHi: 'इलेक्ट्रिक वाहन बैटरी पैक डायग्नोस्टिक्स, थर्मल प्रबंधन प्रणाली रखरखाव, और मोटर ओवरहाल के लिए NAPS प्रमाणित प्रशिक्षुता कार्यक्रम।',
    postedDate: '3 days ago'
  },
  {
    id: 'job-104',
    titleEn: 'Building Electrical System Supervisor',
    titleHi: 'भवन विद्युत प्रणाली पर्यवेक्षक',
    companyName: 'L&T Construction',
    locationEn: 'Jaipur, Rajasthan',
    locationHi: 'जयपुर, राजस्थान',
    type: 'Full-time' as const,
    salaryRangeEn: '₹25,000 - ₹35,000 / month',
    salaryRangeHi: '₹25,000 - ₹35,000 / माह',
    eligibilityEn: 'ITI Wireman / Electrician + 2 Yrs Exp',
    eligibilityHi: 'आईटीआई वायरमैन / इलेक्ट्रीशियन + 2 वर्ष अनुभव',
    skills: ['Three-Phase Wiring', 'Transformer Setup', 'CAD Blueprint Reading'],
    descriptionEn: 'Supervise commercial real estate electrical installations, distribution board wiring, grounding, and lightning protection systems.',
    descriptionHi: 'वाणिज्यिक अचल संपत्ति विद्युत प्रतिष्ठानों, वितरण बोर्ड वायरिंग, ग्राउंडिंग और बिजली सुरक्षा प्रणालियों का निरीक्षण करें।',
    postedDate: '5 days ago',
    isBookmarked: true
  },
  {
    id: 'job-105',
    titleEn: 'Hardware & Network Support Specialist Internship',
    titleHi: 'हार्डवेयर और नेटवर्क सपोर्ट स्पेशलिस्ट इंटर्नशिप',
    companyName: 'HCL Tech Services Kendra',
    locationEn: 'Ranchi, Jharkhand',
    locationHi: 'रांची, झारखंड',
    type: 'Internship' as const,
    salaryRangeEn: '₹12,000 - ₹16,000 / month',
    salaryRangeHi: '₹12,000 - ₹16,000 / माह',
    eligibilityEn: 'Class 10th / Hardware Technician Cert',
    eligibilityHi: '10वीं / हार्डवेयर तकनीशियन प्रमाण पत्र',
    skills: ['Router Config', 'CCTV Biometric Setup', 'PC Troubleshooting'],
    descriptionEn: 'Hands-on practical internship servicing district IT infrastructure, LAN cabling, hardware troubleshooting, and biometric installation.',
    descriptionHi: 'जिला आईटी इंफ्रास्ट्रक्चर, लैन केबलिंग, हार्डवेयर समस्या निवारण और बायोमेट्रिक इंस्टॉलेशन की सेवाएं देने वाली व्यावहारिक इंटर्नशिप।',
    postedDate: 'Just now'
  }
];

export const DEFAULT_RESUME_DATA = {
  fullName: 'Rahul Verma',
  email: 'rahul.verma@careersaathi.in',
  phone: '+91 98765 43210',
  location: 'Patna, Bihar',
  summary: 'Dedicated and NCVET-certified Solar PV Technician with hands-on expertise in solar panel wiring, inverter diagnostics, and electrical safety standards.',
  education: [
    { degree: 'NCVET Trade Certificate in Solar Technology', institution: 'Government ITI Patna Main Kendra', year: '2025', score: '84%' },
    { degree: 'Class 10th (Secondary School)', institution: 'BSEB Board High School, Patna', year: '2024', score: '72%' }
  ],
  skills: [
    'Solar Panel Assembly',
    'DC Electrical Wiring',
    'Inverter Diagnostics',
    'Grid Connection & Metering',
    'Workplace Safety & First Aid',
    'Blueprint Reading'
  ],
  workExperience: [
    {
      title: 'Solar Installation Apprentice',
      company: 'Tata Power Solar Skill Kendra',
      duration: 'Jul 2025 - Dec 2025',
      description: 'Completed 6-month NAPS apprenticeship involving 40+ rooftop solar installations under PM Surya Ghar Muft Bijli Yojana.'
    }
  ],
  projects: [
    {
      title: '5kW Off-Grid Solar Power Setup',
      techStack: 'PV Panels, Charge Controller, Inverter, Battery Bank',
      description: 'Designed and assembled a 5kW off-grid solar system powering a local rural health center.'
    }
  ],
  certifications: [
    { title: 'National Trade Certificate (NTC)', issuer: 'NCVET / Skill India Mission', year: '2025' },
    { title: 'Electrical Safety & High Voltage Clearance', issuer: 'Green Jobs Sector Skill Council', year: '2025' }
  ]
};
