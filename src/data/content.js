export const SITE_CONTENT = {
  brand: {
    doctorName: 'Dr. William Makis',
    highlightedLastName: 'Makis',
    logo: '/placeholders/avatar-placeholder.svg',
    tagline: 'Leading the way in advanced cancer diagnostics and personalized oncology care.',
  },
  contact: {
    email: 'contact@makisweb.org',
    telegramHandle: '@drmakis',
    telegramUrl: 'https://t.me/drmakis',
    addressLines: ['Dr. William Makis Cancer Center', '1234 Medical Drive, Suite 500', 'Boston, MA 02115'],
    phone: '1-800-WILLIAM-MAKIS',
  },
  hero: {
    badge: 'Leading Cancer Research Expert',
    title: 'Advanced Cancer Diagnostics & Care',
    description:
      'Pioneering personalized oncology treatments with cutting-edge diagnostic technologies and evidence-based protocols.',
    ctaPrimary: 'Schedule Consultation',
    ctaSecondary: 'Achievements',
    backgroundImage: '/placeholders/hero-placeholder.svg',
    stats: [
      {
        label: 'Patients Treated',
        value: '15,000+',
      },
      {
        label: 'Years Experience',
        value: '25+',
      },
      {
        label: 'Success Rate',
        value: '98%',
      },
      {
        label: 'Research Publications',
        value: '500+',
      },
    ],
  },
  categorySection: {
    kicker: 'Shop by Category',
    description: 'Explore our comprehensive wellness solutions',
    cards: [
      {
        id: 'supplements',
        icon: 'pill',
        title: 'Supplements',
        description: 'Premium vitamins and natural supplements',
        cta: 'Explore Products',
        image: '/placeholders/card-placeholder.svg',
      },
      {
        id: 'protocols',
        icon: 'document',
        title: 'Protocols',
        description: 'Comprehensive wellness programs',
        cta: 'View Protocols',
        image: '/placeholders/card-placeholder.svg',
      },
      {
        id: 'consultations',
        icon: 'chat',
        title: 'Consultations',
        description: 'Personalized expert guidance',
        cta: 'Book Now',
        image: '/placeholders/card-placeholder.svg',
      },
    ],
  },
  expertiseSection: {
    kicker: 'OUR EXPERTISE',
    title: 'Comprehensive Cancer Care Across All Specialties',
    description:
      'Our multidisciplinary team brings together world-class specialists to provide integrated, personalized treatment plans.',
    items: [
      {
        id: 'precision-diagnostics',
        icon: 'microscope',
        title: 'Precision Diagnostics',
        description:
          'Advanced molecular testing and imaging technologies for accurate cancer detection and staging.',
      },
      {
        id: 'genomic-medicine',
        icon: 'dna',
        title: 'Genomic Medicine',
        description:
          'Comprehensive genetic profiling to identify targeted treatment options and hereditary risk factors.',
      },
      {
        id: 'cardio-oncology',
        icon: 'heart',
        title: 'Cardio-Oncology',
        description:
          'Specialized care addressing the cardiovascular impacts of cancer treatments.',
      },
      {
        id: 'neuro-oncology',
        icon: 'brain',
        title: 'Neuro-Oncology',
        description:
          'Expert treatment of brain and nervous system cancers with minimally invasive approaches.',
      },
      {
        id: 'immunotherapy',
        icon: 'syringe',
        title: 'Immunotherapy',
        description:
          "Cutting-edge immunological treatments that harness your body's natural defenses.",
      },
      {
        id: 'integrative-care',
        icon: 'stethoscope',
        title: 'Integrative Care',
        description:
          'Holistic approach combining conventional medicine with supportive therapies.',
      },
    ],
  },
  treatmentProtocolsSection: {
    kicker: 'TREATMENT PROTOCOLS',
    title: 'Specialized Cancer Treatment Programs',
    description:
      'Evidence-based protocols tailored to each cancer type, ensuring optimal outcomes through personalized care.',
  },
  programs: [
    {
      id: 'breast-cancer',
      badge: 'Most Requested',
      title: 'Breast Cancer',
      subtitle: 'Comprehensive Treatment',
      excerpt:
        'Personalized treatment plans including surgery, radiation, chemotherapy, and hormonal therapy.',
      duration: '60 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '94%', label: 'Success Rate' },
        { value: '6-12 months', label: 'Avg Duration' },
        { value: '2,500+', label: 'Patients Helped' },
      ],
      about:
        'Our breast cancer program offers a comprehensive, multidisciplinary approach combining the latest surgical techniques, targeted radiation therapy, and personalized chemotherapy regimens. We specialize in both early-stage and advanced breast cancer treatment.',
      treatments: [
        'Targeted Therapy',
        'Immunotherapy',
        'Precision Radiation',
        'Hormonal Therapy',
        'Lumpectomy Support',
        'Oncoplastic Surgery Pathway',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'lung-cancer',
      badge: 'Innovative',
      title: 'Lung Cancer',
      subtitle: 'Advanced Therapies',
      excerpt:
        'Minimally invasive procedures and targeted therapies for all stages of lung cancer.',
      duration: '45 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '87%', label: 'Success Rate' },
        { value: '8-14 months', label: 'Avg Duration' },
        { value: '1,800+', label: 'Patients Helped' },
      ],
      about:
        'Our lung cancer program utilizes cutting-edge diagnostic imaging, minimally invasive surgical techniques, and the latest targeted therapies. We offer comprehensive screening programs for early detection and personalized treatment plans.',
      treatments: [
        'Advanced Bronchoscopy',
        'VATS Surgery',
        'Targeted Therapy',
        'Immunotherapy',
        'SBRT Radiation',
        'Liquid Biopsy Monitoring',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'colorectal-cancer',
      badge: 'Prevention Focus',
      title: 'Colorectal Cancer',
      subtitle: 'Screening & Treatment',
      excerpt:
        'Early detection programs and comprehensive treatment options for colorectal cancers.',
      duration: '30 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '91%', label: 'Success Rate' },
        { value: '6-9 months', label: 'Avg Duration' },
        { value: '1,650+', label: 'Patients Helped' },
      ],
      about:
        'Our colorectal cancer program emphasizes prevention through advanced screening and early detection. When treatment is needed, we offer minimally invasive surgical options and personalized chemotherapy protocols with excellent outcomes.',
      treatments: [
        'Advanced Colonoscopy',
        'Laparoscopic Surgery',
        'Robotic Resection',
        'FOLFOX/FOLFIRI Chemotherapy',
        'Targeted Therapy',
        'Liver Metastasis Treatment',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'prostate-cancer',
      badge: 'High Success Rate',
      title: 'Prostate Cancer',
      subtitle: 'Precision Medicine',
      excerpt:
        'Advanced diagnostic tools and treatment options preserving quality of life.',
      duration: '45 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '96%', label: 'Success Rate' },
        { value: '3-8 months', label: 'Avg Duration' },
        { value: '2,100+', label: 'Patients Helped' },
      ],
      about:
        'Our prostate cancer program focuses on precision diagnostics and treatment options that preserve quality of life. We offer active surveillance for low-risk cases and advanced surgical and radiation options for more aggressive disease.',
      treatments: [
        'MRI-Fusion Biopsy',
        'Active Surveillance',
        'Robotic Prostatectomy',
        'SBRT Radiation',
        'Hormone Therapy',
        'PSMA-Targeted Therapy',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'skin-cancer',
      badge: 'Expert Care',
      title: 'Skin Cancer',
      subtitle: 'Melanoma Specialists',
      excerpt:
        'Comprehensive melanoma and skin oncology protocols with precision diagnostics.',
      duration: '30 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '93%', label: 'Success Rate' },
        { value: '2-6 months', label: 'Avg Duration' },
        { value: '3,200+', label: 'Patients Helped' },
      ],
      about:
        'Our dermatologic oncology team specializes in all types of skin cancer, from basal cell carcinoma to advanced melanoma. We offer advanced diagnostic techniques, Mohs surgery, and breakthrough immunotherapy treatments.',
      treatments: [
        'Dermoscopy Screening',
        'Mohs Surgery',
        'Wide Local Excision',
        'Sentinel Node Biopsy',
        'Immunotherapy (PD-1)',
        'Targeted Therapy (BRAF)',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'blood-cancers',
      badge: 'Research-Driven',
      title: 'Blood Cancers',
      subtitle: 'Hematology Oncology',
      excerpt:
        'Specialized care for leukemia, lymphoma, and multiple myeloma with clinical trials.',
      duration: '60 minutes',
      consultationType: 'Video Call',
      stats: [
        { value: '85%', label: 'Success Rate' },
        { value: '12-24 months', label: 'Avg Duration' },
        { value: '1,400+', label: 'Patients Helped' },
      ],
      about:
        'Our hematologic oncology program offers specialized treatment for all blood cancers including leukemia, lymphoma, and multiple myeloma. We are at the forefront of CAR-T cell therapy and offer numerous clinical trial opportunities.',
      treatments: [
        'Chemotherapy Protocols',
        'CAR-T Cell Therapy',
        'Stem Cell Transplant',
        'Targeted Therapy',
        'Immunotherapy',
        'Clinical Trials',
      ],
      price: 500,
      image: '/placeholders/card-placeholder.svg',
    },
  ],
  processSection: {
    kicker: 'OUR PROCESS',
    title: 'Your Journey to Recovery',
    description:
      'A structured, compassionate approach to cancer care that puts you at the center of every decision.',
    steps: [
      {
        number: '01',
        title: 'Initial Consultation',
        description:
          'Comprehensive evaluation of your medical history, symptoms, and concerns with our specialist team.',
        bullets: ['Medical History Review', 'Physical Examination', 'Symptom Assessment'],
      },
      {
        number: '02',
        title: 'Diagnostic Testing',
        description:
          'Advanced imaging, laboratory tests, and biopsies to accurately diagnose and stage your condition.',
        bullets: ['Molecular Testing', 'Advanced Imaging', 'Pathology Review'],
      },
      {
        number: '03',
        title: 'Treatment Planning',
        description:
          'Our tumor board develops a personalized treatment plan based on your specific diagnosis and needs.',
        bullets: ['Multidisciplinary Review', 'Personalized Protocol', 'Clinical Trials'],
      },
      {
        number: '04',
        title: 'Ongoing Care',
        description:
          'Continuous monitoring, support services, and follow-up care throughout your treatment journey.',
        bullets: ['Progress Monitoring', 'Supportive Care', 'Survivorship Planning'],
      },
    ],
  },
  productsSection: {
    kicker: 'Cancer Support Products',
    description:
      'Premium supplements specifically selected for cancer support and wellness',
  },
  products: [
    {
      id: 'cbd-oil',
      name: 'CBD Oil',
      shortDescription: 'Cannabidiol oil for wellness support...',
      description:
        'Premium full-spectrum CBD oil extracted from organically grown hemp. Our CBD oil is third-party tested for purity and potency, providing natural support for overall wellness, stress relief, and sleep quality.',
      reviews: 203,
      rating: 5,
      price: 175,
      benefits: [
        'Promotes relaxation',
        'Supports healthy sleep',
        'Natural anti-inflammatory',
        'Non-psychoactive formula',
      ],
      dosage:
        'Start with 0.5ml (25mg CBD) once daily. May increase to 1ml twice daily as needed.',
      ingredients: 'Full-spectrum hemp extract, MCT coconut oil, natural terpenes',
      size: '30ml bottle (1500mg CBD)',
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'curcumin',
      name: 'Curcumin 600-1500mg',
      shortDescription: 'Curcumin high-dose supplement for inflammation balance...',
      description:
        'High-potency curcumin supplement with enhanced bioavailability. Curcumin is the active compound in turmeric, extensively researched for its powerful anti-inflammatory and antioxidant properties.',
      reviews: 167,
      rating: 5,
      price: 155,
      benefits: [
        'Powerful anti-inflammatory',
        'Antioxidant protection',
        'Joint health support',
        'Cellular health optimization',
      ],
      dosage:
        'Take 2 capsules daily with meals. For enhanced absorption, take with black pepper or fatty foods.',
      ingredients: 'Curcumin extract (95% curcuminoids), BioPerine black pepper extract, vegetable capsule',
      size: '180 capsules (3 month supply)',
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'fenbendazole',
      name: 'Fenbendazole',
      shortDescription: 'Complementary support being researched worldwide...',
      description:
        'Pharmaceutical-grade fenbendazole capsules. This compound has gained attention in integrative health circles and is currently being researched worldwide for its potential cellular health benefits.',
      reviews: 127,
      rating: 5,
      price: 250,
      benefits: [
        'Research-backed compound',
        'Cellular health support',
        'High purity formulation',
        'Consistent dosing',
      ],
      dosage:
        'Consult with your healthcare provider for personalized dosing recommendations. Common protocols vary.',
      ingredients: 'Fenbendazole 222mg, microcrystalline cellulose, vegetable capsule',
      size: '30 capsules per bottle',
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'ivermectin',
      name: 'Ivermectin Support (3mg & 12mg)',
      shortDescription: 'Off-label use under investigation for supportive properties...',
      description:
        'Pharmaceutical-grade ivermectin tablets available in 3mg and 12mg strengths. This Nobel Prize-winning compound is being investigated in various research studies for potential supportive health applications.',
      reviews: 89,
      rating: 5,
      price: 250,
      benefits: [
        'Nobel Prize-winning compound',
        'Multiple dosage options',
        'Pharmaceutical grade',
        'Research-supported',
      ],
      dosage:
        'Consult with your healthcare provider. Dosing varies based on individual needs and intended use.',
      ingredients:
        'Ivermectin (3mg or 12mg), lactose monohydrate, microcrystalline cellulose',
      size: '10 tablets per blister pack',
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'artemisinin',
      name: 'Artemisinin Extract',
      shortDescription: 'Sweet wormwood extract with active research compounds...',
      description:
        'Pure artemisinin extracted from Artemisia annua (sweet wormwood). This compound has been recognized with the Nobel Prize for its medicinal applications and continues to be actively researched for cellular health benefits.',
      reviews: 156,
      rating: 5,
      price: 260,
      benefits: [
        'Nobel Prize recognized',
        'Powerful cellular support',
        'Natural plant extract',
        'Active research compound',
      ],
      dosage:
        'Take 1-2 capsules on an empty stomach. Cycle usage: 2 weeks on, 1 week off recommended.',
      ingredients: 'Artemisinin extract 500mg, rice flour, vegetable capsule',
      size: '60 capsules per bottle',
      image: '/placeholders/card-placeholder.svg',
    },
    {
      id: 'methylene-blue',
      name: 'Methylene Blue',
      shortDescription: 'Investigated for cellular and mitochondrial function support...',
      description:
        'USP-grade methylene blue solution for precise dosing. This compound has a long history in medicine and is currently being researched for its potential benefits in supporting mitochondrial function and cellular energy production.',
      reviews: 73,
      rating: 5,
      price: 250,
      benefits: [
        'Mitochondrial support',
        'Cognitive enhancement research',
        'Cellular energy optimization',
        'USP pharmaceutical grade',
      ],
      dosage:
        'Start with 1-2 drops (0.5-1mg) in water. May gradually increase. Do not exceed recommended amounts.',
      ingredients: 'Methylene blue USP 1% solution, purified water',
      size: '10ml dropper bottle (10mg/ml)',
      image: '/placeholders/card-placeholder.svg',
    },
  ],
  educationalSection: {
    kicker: 'EDUCATIONAL CONTENT',
    title: 'Watch Dr. William Makis in Action',
    description:
      'Discover his approach to integrative medicine through real insights and patient stories.',
    featuredVideo: {
      tag: 'Featured',
      duration: '12:45',
      views: '24.5K views',
      image: '/placeholders/video-placeholder.svg',
    },
    galleryKicker: 'VIDEO GALLERY',
    galleryTitle: 'Featured YouTube Videos',
    galleryDescription:
      'Watch Dr. William Makis share his expertise on various health topics and medical discussions.',
    videos: [
      {
        id: 'video-1',
        title: 'Dr. Makis on Cancer Research',
        description: 'Insights on breakthrough cancer research and treatment approaches.',
        image: '/placeholders/video-placeholder.svg',
      },
      {
        id: 'video-2',
        title: 'Understanding Modern Medicine',
        description: 'A deep dive into integrative medicine and patient care.',
        image: '/placeholders/video-placeholder.svg',
      },
      {
        id: 'video-3',
        title: 'Health & Wellness Discussion',
        description: 'Dr. Makis discusses important health topics and prevention strategies.',
        image: '/placeholders/video-placeholder.svg',
      },
    ],
  },
  certificationsSection: {
    pill: 'Credentials',
    title: 'Professional Certifications',
    description:
      'Recognized qualifications and medical certifications from world-renowned institutions',
    certifications: [
      {
        id: 'mdcm',
        title: 'Doctor of Medicine & Master of Surgery (MDCM)',
        institution: 'McGill University',
        year: '2005',
        status: 'Verified',
        description:
          "Doctorem Medicinae et Chirurgiae Magistrum - The highest medical degree awarded by McGill University, one of Canada's most prestigious medical schools.",
        image: '/placeholders/certificate-placeholder.svg',
      },
    ],
  },
  testimonialsSection: {
    kicker: 'TESTIMONIALS',
    title: 'Stories of Hope & Recovery',
    description:
      'Hear from patients who have experienced the Dr. William Makis difference in their cancer journey.',
    testimonials: [
      {
        id: 'jennifer-martinez',
        quote:
          'The team at Dr. William Makis gave me hope when I needed it most. Their personalized approach to my treatment made all the difference in my recovery journey.',
        name: 'Jennifer Martinez',
        role: 'Breast Cancer Survivor',
        avatar: '/placeholders/avatar-placeholder.svg',
      },
      {
        id: 'linda-davis',
        quote:
          'From diagnosis to treatment, every step was handled with such care and professionalism. The innovative therapies here truly saved my life.',
        name: 'Linda Davis',
        role: 'Lung Cancer Patient',
        avatar: '/placeholders/avatar-placeholder.svg',
      },
      {
        id: 'leo-thompson',
        quote:
          'The support I received went beyond medical care. The whole team treated me like family and ensured I was comfortable throughout my treatment.',
        name: 'Leo Thompson',
        role: 'Colorectal Cancer Survivor',
        avatar: '/placeholders/avatar-placeholder.svg',
      },
      {
        id: 'michael-johnson',
        quote:
          'Dr. Makis and his team are exceptional. Their expertise and compassion made a difficult time much more manageable. Forever grateful.',
        name: 'Michael Johnson',
        role: 'Prostate Cancer Survivor',
        avatar: '/placeholders/avatar-placeholder.svg',
      },
    ],
  },
  publicationsSection: {
    kicker: 'RESEARCH & PUBLICATIONS',
    title: 'Advancing Cancer Research Through Innovation',
    description:
      'Our team actively contributes to the global body of oncology research, publishing groundbreaking studies in prestigious medical journals.',
    stats: [
      { value: '500+', label: 'Published Papers' },
      { value: '15K+', label: 'Total Citations' },
    ],
    items: [
      {
        id: 'pub-1',
        title: 'Advances in Immunotherapy for Metastatic Breast Cancer',
        tag: 'Research Paper',
        source: 'Nature Medicine',
        year: '2024',
        citations: '156 citations',
      },
      {
        id: 'pub-2',
        title: 'Precision Medicine Approaches in Non-Small Cell Lung Cancer',
        tag: 'Clinical Study',
        source: 'The Lancet Oncology',
        year: '2024',
        citations: '203 citations',
      },
      {
        id: 'pub-3',
        title: 'Novel Biomarkers for Early Detection of Colorectal Cancer',
        tag: 'Research Paper',
        source: 'JAMA Oncology',
        year: '2023',
        citations: '289 citations',
      },
      {
        id: 'pub-4',
        title: 'AI-Driven Diagnostic Tools in Oncology Practice',
        tag: 'Review Article',
        source: 'New England Journal of Medicine',
        year: '2023',
        citations: '412 citations',
      },
    ],
  },
  recoveryCtaSection: {
    title: 'Take the First Step Toward Your Recovery',
    description:
      'Schedule a consultation with our expert oncology team today. Early detection and personalized care can make all the difference.',
    primaryButton: 'Book Appointment',
    secondaryButton: 'Message on Telegram',
  },
  footer: {
    services: ['Cancer Diagnostics', 'Treatment Programs', 'Clinical Trials', 'Second Opinions'],
    resources: ['Patient Portal', 'Research Publications', 'Insurance & Billing', 'FAQs'],
    about: ['Our Team', 'Facilities', 'Careers', 'Contact Us'],
    legal: ['Privacy Policy', 'Terms of Service', 'HIPAA Compliance'],
    copyright: '© 2026 Dr. William Makis. All rights reserved.',
    phone: '1-800-WILLIAM-MAKIS',
    todo: 'TODO_COPY_SUPPORT_HOURS',
  },
  supplementsPage: {
    hero: {
      title: "Supplements",
      subtitle: "Premium vitamins and natural supplements for your wellness journey."
    },
    filters: ["All Products", "In Stock", "Featured", "Out of Stock"],
    productCount: "19 Products"
  },
  supplements: [
    {
      id: 'fenbendazole',
      name: 'Fenbendazole',
      shortDescription: 'Complementary support being researched worldwide...',
      description: 'Pharmaceutical-grade fenbendazole capsules. This compound has gained attention in integrative health circles and is currently being researched worldwide for its potential cellular health benefits.',
      reviews: 127,
      rating: 4.5,
      price: 250,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'artemisinin',
      name: 'Artemisinin Extract',
      shortDescription: 'Sweet wormwood extract with active research compounds...',
      description: 'Pure artemisinin extracted from Artemisia annua (sweet wormwood). This compound has been recognized with the Nobel Prize for its medicinal applications and continues to be actively researched for cellular health benefits.',
      reviews: 156,
      rating: 4.5,
      price: 260,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'zeolite',
      name: 'Zeolite Binder',
      shortDescription: 'Natural mineral supplement for detoxification support...',
      description: 'Premium zeolite supplement designed to support natural detoxification processes. Zeolite is a naturally occurring mineral with unique properties that may help support overall wellness.',
      reviews: 98,
      rating: 4.5,
      price: 180,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'ivermectin-3mg',
      name: 'Ivermectin 3mg',
      shortDescription: 'Pharmaceutical grade tablets for supportive care...',
      description: 'Pharmaceutical-grade ivermectin tablets in 3mg strength. This Nobel Prize-winning compound is being investigated in various research studies for potential supportive health applications.',
      reviews: 89,
      rating: 4.5,
      price: 250,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'ivermectin-6mg',
      name: 'Ivermectin 6mg',
      shortDescription: 'Higher strength pharmaceutical grade tablets...',
      description: 'Pharmaceutical-grade ivermectin tablets in 6mg strength. This Nobel Prize-winning compound is being investigated in various research studies for potential supportive health applications.',
      reviews: 76,
      rating: 4.5,
      price: 270,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'vitamin-e',
      name: 'Vitamin E 600-800mg',
      shortDescription: 'High potency vitamin E supplement...',
      description: 'High-potency vitamin E supplement providing 600-800mg per serving. Vitamin E is a powerful antioxidant that supports overall wellness and cellular health.',
      reviews: 201,
      rating: 4.5,
      price: 120,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'methylene-blue',
      name: 'Methylene Blue',
      shortDescription: 'Investigated for cellular and mitochondrial function support...',
      description: 'USP-grade methylene blue solution for precise dosing. This compound has a long history in medicine and is currently being researched for its potential benefits in supporting mitochondrial function and cellular energy production.',
      reviews: 73,
      rating: 4.5,
      price: 250,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    },
    {
      id: 'hydroxychloroquine',
      name: 'Hydroxychloroquine 400mg',
      shortDescription: 'Pharmaceutical grade tablets for research purposes...',
      description: 'Pharmaceutical-grade hydroxychloroquine tablets in 400mg strength. This compound has been used for various medical applications and continues to be the subject of ongoing research.',
      reviews: 54,
      rating: 4.5,
      price: 280,
      inStock: true,
      image: '/placeholders/card-placeholder.svg'
    }
  ],
  misc: {
    placeOrderNote: 'By placing this order, you agree to our terms and conditions.',
    noPaymentMethods: 'No payment methods available. Please contact support.',
    cartShippingText: 'Shipping and taxes calculated at checkout',
    cartTypeLabel: 'Protocol',
    todoHeaderCopy: 'TODO_COPY_MENU_DROPDOWN_BEHAVIOR_LABEL',
  },
}

export const DEFAULT_PROTOCOL_PRICE = 500
