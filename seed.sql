-- CAREERSAATHI Seed Script - Demo / Hackathon Dataset
-- Clearly labelled: "Demo / Hackathon Dataset (NCVET & NSDC Aligned)"

INSERT INTO parent_concerns (id, concern_key, title_en, title_hi, description_en, description_hi) VALUES
('pc-1', 'income', 'Income & Salary Growth', 'आय और वेतन वृद्धि', 'Will my child earn a sustainable monthly income?', 'क्या मेरा बच्चा टिकाऊ मासिक आय कमाएगा?'),
('pc-2', 'security', 'Job Security', 'नौकरी की सुरक्षा', 'Is this job permanent and recession-proof?', 'क्या यह नौकरी स्थायी और सुरक्षित है?'),
('pc-3', 'growth', 'Career Growth', 'करियर विकास', 'What is the 5-10 year promotion ladder?', '5-10 वर्षों में पदोन्नति का रोडमैप क्या है?'),
('pc-4', 'safety', 'Work Safety', 'कार्यस्थल सुरक्षा', 'Are protective measures & insurance provided?', 'क्या सुरक्षा उपाय और बीमा प्रदान किया जाता है?'),
('pc-5', 'higherEd', 'Higher Education Opportunity', 'उच्च शिक्षा के अवसर', 'Can my child pursue B.Voc or Degree later?', 'क्या मेरा बच्चा बाद में बी.वोक या डिग्री कर सकता है?'),
('pc-6', 'distance', 'Distance from Home', 'घर से दूरी', 'Are jobs available in home district or state?', 'क्या गृह जिले या राज्य में नौकरियां उपलब्ध हैं?'),
('pc-7', 'perception', 'Social Perception & Respect', 'सामाजिक सम्मान और प्रतिष्ठा', 'Will society respect this vocational skill?', 'क्या समाज इस कौशल का सम्मान करेगा?'),
('pc-8', 'quality', 'Training Quality', 'प्रशिक्षण की गुणवत्ता', 'Is the institute govt-certified (NCVET/NSDC)?', 'क्या संस्थान सरकारी प्रमाणित (NCVET/NSDC) है?'),
('pc-9', 'placement', 'Guaranteed Placement', 'गारंटीकृत प्लेसमेंट', 'Is job assistance provided upon completion?', 'क्या कोर्स पूरा होने पर नौकरी सहायता दी जाती है?');

INSERT INTO trades (id, title_en, title_hi, category_en, category_hi, match_baseline, eligibility_en, eligibility_hi, course_duration_en, course_duration_hi, nsqf_level, parent_safety_rating, parent_security_rating, nctv_accredited) VALUES
('solar-tech', 'Solar PV Technician & Installer', 'सोलर पीवी तकनीशियन और इंस्टॉलर', 'Clean Energy & Electrical', 'क्लीन एनर्जी और इलेक्ट्रिकल', 87, 'Class 10th / ITI Electrical', '10वीं पास / आईटीआई इलेक्ट्रिकल', '6 Months (PMKVY / NSDC)', '6 महीने (पीएमकेवीवाई / एनएसडीसी)', 4, 4.8, 4.9, TRUE),
('electrician', 'Industrial & Building Electrician', 'औद्योगिक और भवन इलेक्ट्रीशियन', 'Electrical & Maintenance', 'इलेक्ट्रिकल और रखरखाव', 84, 'Class 10th Pass', '10वीं पास', '1 Year ITI / NCVT', '1 वर्ष आईटीआई / एनसीवीटी', 4, 4.6, 4.9, TRUE),
('electronics-tech', 'Electronics & Smart Appliance Specialist', 'इलेक्ट्रॉनिक्स और स्मार्ट उपकरण विशेषज्ञ', 'Electronics & Durables', 'इलेक्ट्रॉनिक्स और टिकाऊ वस्तुएं', 79, 'Class 10th / 12th Pass', '10वीं / 12वीं पास', '6 Months (NSDC Certified)', '6 महीने (एनएसडीसी प्रमाणित)', 4, 4.7, 4.5, TRUE),
('ev-specialist', 'Automotive Technician & EV Specialist', 'ऑटोमोटिव तकनीशियन और ईवी विशेषज्ञ', 'Automotive & Mobility', 'ऑटोमोटिव और गतिशीलता', 76, 'Class 10th / ITI Motor Mechanic', '10वीं / आईटीआई मोटर मैकेनिक', '6 Months Advanced Cert', '6 महीने का एडवांस्ड सर्टिफिकेट', 5, 4.9, 4.8, TRUE),
('cnc-operator', 'CNC Machine Programmer & Operator', 'सीएनसी मशीन प्रोग्रामर और ऑपरेटर', 'Advanced Manufacturing', 'उन्नत विनिर्माण', 74, 'Class 10th / ITI Machinist', '10वीं / आईटीआई मशीनिस्ट', '1 Year (NCVT Accredited)', '1 वर्ष (एनसीवीटी मान्यता प्राप्त)', 4, 4.7, 4.8, TRUE),
('fitter', 'Mechanical Industrial Fitter', 'मैकेनिकल इंडस्ट्रियल फिटर', 'Manufacturing & Heavy Industries', 'मैन्युफैक्चरिंग और भारी उद्योग', 75, 'Class 10th Pass', '10वीं पास', '1 Year ITI Trade Cert', '1 वर्ष आईटीआई ट्रेड सर्टिफिकेट', 4, 4.5, 4.8, TRUE),
('welder', 'Advanced Arc & TIG Welder', 'एडवांस्ड आर्क और टीआईजी वेल्डर', 'Precision Metallurgy', 'सटीक धातुकर्म', 73, 'Class 8th / 10th Pass', '8वीं / 10वीं पास', '6 Months NCVET Cert', '6 महीने का एनसीवीटी सर्टिफिकेट', 3, 4.4, 4.7, TRUE),
('comp-hardware', 'Computer Hardware & Networking Technician', 'कंप्यूटर हार्डवेयर और नेटवर्किंग तकनीशियन', 'IT & Hardware Servicing', 'आईटी और हार्डवेयर सर्विसिंग', 78, 'Class 10th / 12th Pass', '10वीं / 12वीं पास', '6 Months Skill India Cert', '6 महीने का स्किल इंडिया सर्टिफिकेट', 4, 4.9, 4.6, TRUE),
('plumber', 'Modern Plumbing & Sanitation Specialist', 'आधुनिक प्लंबिंग और स्वच्छता विशेषज्ञ', 'Building & Sanitation', 'भवन और स्वच्छता', 71, 'Class 8th / 10th Pass', '8वीं / 10वीं पास', '6 Months PMKVY Cert', '6 महीने का पीएमकेवीवाई सर्टिफिकेट', 3, 4.6, 4.8, TRUE),
('beauty-wellness', 'Beauty & Wellness Care Specialist', 'ब्यूटी और वेलनेस केयर विशेषज्ञ', 'Personal Care & Wellness', 'पर्सनल केयर और वेलनेस', 77, 'Class 10th Pass', '10वीं पास', '6 Months Beauty SSC Cert', '6 महीने ब्यूटी एसएससी सर्टिफिकेट', 4, 5.0, 4.7, TRUE);

INSERT INTO earnings (id, trade_id, starting_min, starting_max, growth_5yr_min, growth_5yr_max, pf_esi_benefits) VALUES
('e-1', 'solar-tech', 18000, 24000, 45000, 70000, TRUE),
('e-2', 'electrician', 16000, 22000, 40000, 65000, TRUE),
('e-3', 'electronics-tech', 15000, 20000, 38000, 55000, TRUE),
('e-4', 'ev-specialist', 20000, 26000, 50000, 80000, TRUE),
('e-5', 'cnc-operator', 18000, 23000, 42000, 72000, TRUE),
('e-6', 'fitter', 16000, 21000, 38000, 60000, TRUE),
('e-7', 'welder', 17000, 23000, 40000, 68000, TRUE),
('e-8', 'comp-hardware', 15000, 22000, 38000, 62000, TRUE),
('e-9', 'plumber', 16000, 22000, 38000, 65000, TRUE),
('e-10', 'beauty-wellness', 14000, 20000, 35000, 60000, TRUE);

INSERT INTO placements (id, trade_id, placement_rate, verified_partners_en, verified_partners_hi, govt_scheme) VALUES
('p-1', 'solar-tech', 91, 'Tata Power Solar, Adani Green, Sterling & Wilson', 'टाटा पावर सोलर, अदाणी ग्रीन, स्टर्लिंग एंड विल्सन', 'PM Surya Ghar Yojana & PMKVY'),
('p-2', 'electrician', 89, 'Larsen & Toubro, Havells, State Electricity Boards', 'लार्सन एंड टुब्रो, हेवल्स, राज्य बिजली बोर्ड', 'National Apprenticeship Scheme (NAPS)'),
('p-3', 'electronics-tech', 85, 'Samsung, LG, Dixon Technologies, Urban Company', 'सैमसंग, एलजी, डिक्सन टेक्नोलॉजीज, अर्बन कंपनी', 'ESSCI Skill India Drive'),
('p-4', 'ev-specialist', 92, 'Ather Energy, Ola Electric, Tata Motors EV Division', 'एथर एनर्जी, ओला इलेक्ट्रिक, टाटा मोटर्स ईवी डिवीजन', 'Automotive Skills Council (ASDC)'),
('p-5', 'cnc-operator', 88, 'Bharat Forge, Godrej Aerospace, Maruti Suzuki Vendors', 'भारत फोर्ज, गोदरेज एयरोस्पेस, मारुति सुजुकी वेंडर्स', 'Central Tool Room (CTTC) Placement'),
('p-6', 'fitter', 86, 'BHEL, Ordnance Factories, Tata Steel Vendors', 'भेल, आयुध कारखाने, टाटा स्टील वेंडर्स', 'NAPS Apprenticeship Scheme'),
('p-7', 'welder', 90, 'Mazagon Dock, L&T Hydrocarbon, Rail Coach Factory', 'मझगांव डॉक, एलएंडटी हाइड्रोकार्बन, रेल कोच फैक्ट्री', 'Shipbuilding & Heavy Infra Skills'),
('p-8', 'comp-hardware', 84, 'HCL Services, Wipro Infotech, TVS Electronics', 'एचसीएल सर्विसेज, विप्रो इन्फोटेक, टीवीएस इलेक्ट्रॉनिक्स', 'IT Sector Skill Council Drive'),
('p-9', 'plumber', 87, 'Jaquar & Co, Asian Paints Beautiful Homes, NBCC', 'जैक्वार एंड कंपनी, एशियन पेंट्स, एनबीसीसी', 'Indian Plumbing Skills Council (IPSC)'),
('p-10', 'beauty-wellness', 89, 'L’Oréal India, VLCC, Urban Company Luxe, Kaya Clinic', 'लॉरियल इंडिया, वीएलसीसी, अर्बन कंपनी लक्स', 'Beauty & Wellness SSC');
