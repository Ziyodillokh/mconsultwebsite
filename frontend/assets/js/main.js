// API Configuration
const API_BASE_URL = "/api";

// ============================================
// MULTI-LANGUAGE TRANSLATION SYSTEM
// ============================================

const translations = {
  uz: {
    // Navigation
    nav_home: "Asosiy",
    nav_services: "Xizmatlar",
    nav_achievements: "Yutuqlar",
    nav_about: "Biz Haqimizda",
    nav_contact: "Bog'lanish",
    btn_login: "Kirish",
    btn_register: "Ro'yxatdan o'tish",

    // Hero Section
    hero_subtitle: "Professional Konsalting Xizmatlari",
    hero_title_1: "Biznesingizni",
    hero_title_2: "Yangi",
    hero_title_3: "Bosqichga",
    hero_title_4: "Olib Chiqamiz",
    hero_desc:
      "Buxgalteriya, IT, HR va marketing xizmatlarida 10+ yillik tajriba. Sizning muvaffaqiyatingiz - bizning maqsadimiz.",
    hero_btn_services: "Xizmatlarimiz",
    hero_btn_contact: "Bog'lanish",
    hero_stat_experience: "Yillik tajriba",
    hero_stat_clients: "Mamnun mijozlar",
    hero_stat_support: "Qo'llab-quvvatlash",
    hero_stat_satisfaction: "Mijozlar Mamnunligi",
    hero_satisfaction: "Mijozlar Mamnunligi",

    // Scroller
    scroller_text:
      "PROFESSIONAL KONSALTING • BIZNES YECHIMLAR • RAQAMLI TRANSFORMATSIYA •",

    // Services Section
    services_subtitle: "Nima taklif qilamiz",
    services_title: "Xizmatlarimiz",
    service_1_title: "Buxgalteriya",
    service_1_desc:
      "Soliq hisoboti, moliyaviy tahlil va buxgalteriya xizmatlari.",
    service_2_title: "Brokerlik",
    service_2_desc:
      "Investitsiya va moliyaviy bozor bo'yicha professional maslahat.",
    service_3_title: "IT Xizmatlari",
    service_3_desc:
      "Veb-sayt, mobil ilova va dasturiy ta'minot ishlab chiqish.",
    service_4_title: "HR Xizmatlari",
    service_4_desc: "Kadrlar tanlash, HR konsalting va xodimlarni boshqarish.",
    service_5_title: "Biznes Konsalting",
    service_5_desc:
      "Strategik rejalashtirish va biznes rivojlantirish xizmatlari.",
    service_6_title: "O'quv Kurslar",
    service_6_desc: "Professional rivojlanish va malaka oshirish kurslari.",

    // Marketing Section
    marketing_title: "Marketing & Sotuv",
    marketing_desc:
      "Biz biznesingizni nafaqat ko'rsatamiz, balki uni bozordagi yetakchiga aylantiramiz. Professional marketing strategiyasi bilan sotuvingizni 3x oshiring.",
    marketing_smm: "SMM strategiya",
    marketing_branding: "Brending",
    marketing_ads: "Reklama",
    marketing_btn: "Sotuvni Boshlash",

    // Achievements Section
    achievements_subtitle: "Raqamlarda",
    achievements_title: "Bizning Yutuqlarimiz",
    achievements_desc:
      "Raqamlar bizning ishimizning sifati va mijozlarimiz ishonchini aks ettiradi",
    achievements_1: "Yillik Tajriba",
    achievements_1_desc: "O'n yildan ortiq bozorda faol ishlaymiz",
    achievements_2: "Kompaniyalar",
    achievements_2_desc: "Yuzlab kompaniyalarga xizmat ko'rsatdik",
    achievements_3: "Mamnunlik",
    achievements_3_desc: "Mijozlarimizning mamnunlik darajasi",
    achievements_4: "Yordam",
    achievements_4_desc: "Har qanday vaqtda sizning xizmatingizdamiz",

    // About Section
    about_subtitle: "Afzalliklarimiz",
    about_title: "Nima Uchun",
    about_title_2: "Biz?",
    about_desc:
      "10+ yil tajriba, 500+ mamnun kompaniya. Biz strategik hamkorlik va uzoq muddatli rivojlanishga yo'naltiramiz.",
    about_1_title: "Tezkor Natija",
    about_1_desc:
      "Sizning vazifalaringizni tezda va samarali hal qilamiz. Vaqtni tejash - pul tejash.",
    about_2_title: "Premium Sifat",
    about_2_desc:
      "Har bitta loyihada eng yuqori standartni qo'llaymiz. Sifat bizning ustuvorligimiz.",
    about_3_title: "Ishonchli Hamkor",
    about_3_desc: "Uzoq muddat hamkorlik va o'zaro sodiqlik asosida ishlaymiz.",
    about_4_title: "Mutaxassis Jamoa",
    about_4_desc:
      "Har sohada o'z sohasining eng yaxshi mutaxassislari bilan ishlaymiz.",
    about_5_title: "24/7 Yordam",
    about_5_desc:
      "Har qanday vaqtda sizning xizmatingizdamiz. Tez va professional yordam.",
    about_6_title: "Sertifikatsiyalangan",
    about_6_desc: "Xalqaro standartlar va sertifikatsiya bilan ishlaymiz.",

    // Contact Section
    contact_subtitle: "Bog'lanish",
    contact_title: "Bizga",
    contact_title_2: "Murojaat",
    contact_title_3: "Qiling",
    contact_desc:
      "O'zbekistonning eng kuchli biznes mutaxassislari bilan bog'laning",
    contact_phone: "Telefon",
    contact_email: "Email",
    contact_address: "Manzil",
    contact_hours: "Ish vaqti",
    contact_cta_title: "Loyihangizni muhokama qilishga tayyormisiz?",
    contact_cta_desc: "Bepul konsultatsiya olish uchun hoziroq bog'laning.",
    contact_cta_btn: "Bepul Konsultatsiya",

    // Footer
    footer_desc:
      "O'zbekistonning yetakchi konsalting kompaniyasi. Biznesingizni rivojlantirishda ishonchli hamkoringiz.",
    footer_links: "Havolalar",
    footer_services: "Xizmatlar",
    footer_contact: "Aloqa",
    footer_copyright: "© 2026 Mag'zuna Consult. Barcha huquqlar himoyalangan.",
    footer_privacy: "Maxfiylik",
    footer_terms: "Shartlar",

    // Auth Modals
    auth_login_title: "Kirish",
    auth_register_title: "Ro'yxatdan o'tish",
    auth_email: "Email",
    auth_password: "Parol",
    auth_confirm_password: "Parolni tasdiqlang",
    auth_name: "To'liq ism",
    auth_no_account: "Akkauntingiz yo'qmi?",
    auth_have_account: "Akkauntingiz bormi?",
    auth_register_link: "Ro'yxatdan o'ting",
    auth_login_link: "Kirish",
    auth_min_chars: "Kamida 6 ta belgi",
    auth_password_mismatch: "Parollar mos kelmadi",

    // Additional service cards
    service_4_title: "Malaka Oshirish",
    service_4_desc:
      "Xodimlarni professional darajaga ko'tarish va malaka shaklantirish programmalari.",
    service_5_title: "Litsenziya Yordam",
    service_5_desc:
      "Biznesni ro'yxatga olish, ruxsatnoma va litsenziya olishda amaliy yordam berish.",
    service_6_title: "Energiya Audit",
    service_6_desc:
      "Energiya tejamkorligi va ekologik standartlar bo'yicha professional tahlil.",
    btn_more: "Batafsil",

    // Service Modal Features
    feature_professional: "Professional yondashuv",
    feature_professional_desc: "Malakali mutaxassislar",
    feature_fast: "Tezkor xizmat",
    feature_fast_desc: "Qisqa muddatda",
    feature_support: "24/7 Qo'llab-quvvatlash",
    feature_support_desc: "Doim aloqadamiz",
    feature_guarantee: "Kafolat",
    feature_guarantee_desc: "Sifat kafolati",

    // Service Modal Sections
    service_about: "Xizmat haqida",
    service_benefits: "Afzalliklar",

    // Order Form
    order_title: "Buyurtma berish",
    order_login_required: "Buyurtma berish uchun tizimga kiring",
    order_login_hint: "Hisobingizga kiring yoki ro'yxatdan o'ting",
    order_phone: "Telefon raqam",
    order_description: "Izoh",
    order_submit: "Yuborish",

    // Marketing section extra
    marketing_features:
      "Ijtimoiy tarmoqlar • Kontent yaratish • Brending • Sotuv strategiyasi",

    // CTA
    cta_title: "Birgalikda Kuchlimiz",
    cta_desc: "Bugun bizga murojaat qiling va bepul konsultatsiya oling",
    cta_btn: "Bepul Konsultatsiya",

    // Footer extra
    footer_address: "Toshkent, Chilonzor tumani",
    footer_hours: "Dush-Jum: 9:00 - 18:00",
    footer_sales: "Sotuv",
    footer_branding: "Brending",
    footer_finance: "Moliyaviy Tahlil",

    // Language selector
    lang_select: "Tilni tanlang",

    // User actions
    btn_logout: "Chiqish",
    welcome_user: "Xush kelibsiz",
    login_success: "Muvaffaqiyatli kirdingiz!",
    register_success: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
  },

  ru: {
    // Navigation
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_achievements: "Успехи",
    nav_about: "О Нас",
    nav_contact: "Контакты",
    btn_login: "Вход",
    btn_register: "Регистрация",

    // Hero Section
    hero_subtitle: "Профессиональные Консалтинговые Услуги",
    hero_title_1: "Выведем Ваш",
    hero_title_2: "Бизнес",
    hero_title_3: "На Новый",
    hero_title_4: "Уровень",
    hero_desc:
      "Более 10 лет опыта в бухгалтерии, IT, HR и маркетинге. Ваш успех - наша цель.",
    hero_btn_services: "Наши услуги",
    hero_btn_contact: "Связаться",
    hero_stat_experience: "Лет опыта",
    hero_stat_clients: "Довольных клиентов",
    hero_stat_support: "Поддержка",
    hero_stat_satisfaction: "Удовлетворённость Клиентов",
    hero_satisfaction: "Удовлетворённость Клиентов",

    // Scroller
    scroller_text:
      "ПРОФЕССИОНАЛЬНЫЙ КОНСАЛТИНГ • БИЗНЕС РЕШЕНИЯ • ЦИФРОВАЯ ТРАНСФОРМАЦИЯ •",

    // Services Section
    services_subtitle: "Что мы предлагаем",
    services_title: "Наши Услуги",
    service_1_title: "Бухгалтерия",
    service_1_desc:
      "Налоговая отчётность, финансовый анализ и бухгалтерские услуги.",
    service_2_title: "Брокерские услуги",
    service_2_desc:
      "Профессиональные консультации по инвестициям и финансовым рынкам.",
    service_3_title: "IT Услуги",
    service_3_desc:
      "Разработка веб-сайтов, мобильных приложений и программного обеспечения.",
    service_4_title: "HR Услуги",
    service_4_desc: "Подбор персонала, HR консалтинг и управление кадрами.",
    service_5_title: "Бизнес Консалтинг",
    service_5_desc: "Стратегическое планирование и услуги по развитию бизнеса.",
    service_6_title: "Обучающие Курсы",
    service_6_desc:
      "Курсы профессионального развития и повышения квалификации.",

    // Marketing Section
    marketing_title: "Маркетинг и Продажи",
    marketing_desc:
      "Мы не просто продвигаем ваш бизнес, мы делаем его лидером рынка. Увеличьте продажи в 3 раза с нашей маркетинговой стратегией.",
    marketing_smm: "SMM стратегия",
    marketing_branding: "Брендинг",
    marketing_ads: "Реклама",
    marketing_btn: "Начать продажи",

    // Achievements Section
    achievements_subtitle: "В цифрах",
    achievements_title: "Наши Достижения",
    achievements_desc:
      "Цифры отражают качество нашей работы и доверие клиентов",
    achievements_1: "Лет Опыта",
    achievements_1_desc: "Более десяти лет активно работаем на рынке",
    achievements_2: "Компаний",
    achievements_2_desc: "Оказали услуги сотням компаний",
    achievements_3: "Удовлетворённость",
    achievements_3_desc: "Уровень удовлетворённости наших клиентов",
    achievements_4: "Поддержка",
    achievements_4_desc: "Всегда готовы помочь вам в любое время",

    // About Section
    about_subtitle: "Наши преимущества",
    about_title: "Почему",
    about_title_2: "Мы?",
    about_desc:
      "10+ лет опыта, 500+ довольных компаний. Мы ориентируемся на стратегическое партнёрство и долгосрочное развитие.",
    about_1_title: "Быстрый Результат",
    about_1_desc:
      "Решаем ваши задачи быстро и эффективно. Экономия времени - экономия денег.",
    about_2_title: "Премиум Качество",
    about_2_desc:
      "Применяем высочайшие стандарты в каждом проекте. Качество - наш приоритет.",
    about_3_title: "Надёжный Партнёр",
    about_3_desc:
      "Работаем на основе долгосрочного партнёрства и взаимной лояльности.",
    about_4_title: "Команда Экспертов",
    about_4_desc: "Работаем с лучшими специалистами в каждой области.",
    about_5_title: "Поддержка 24/7",
    about_5_desc: "Всегда к вашим услугам. Быстрая и профессиональная помощь.",
    about_6_title: "Сертифицированы",
    about_6_desc: "Работаем по международным стандартам и сертификации.",

    // Contact Section
    contact_subtitle: "Контакты",
    contact_title: "Свяжитесь",
    contact_title_2: "С",
    contact_title_3: "Нами",
    contact_desc: "Свяжитесь с лучшими бизнес-специалистами Узбекистана",
    contact_phone: "Телефон",
    contact_email: "Email",
    contact_address: "Адрес",
    contact_hours: "Рабочее время",
    contact_cta_title: "Готовы обсудить ваш проект?",
    contact_cta_desc: "Свяжитесь с нами сейчас для бесплатной консультации.",
    contact_cta_btn: "Бесплатная Консультация",

    // Footer
    footer_desc:
      "Ведущая консалтинговая компания Узбекистана. Ваш надёжный партнёр в развитии бизнеса.",
    footer_links: "Ссылки",
    footer_services: "Услуги",
    footer_contact: "Контакты",
    footer_copyright: "© 2026 Mag'zuna Consult. Все права защищены.",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",

    // Auth Modals
    auth_login_title: "Вход",
    auth_register_title: "Регистрация",
    auth_email: "Email",
    auth_password: "Пароль",
    auth_confirm_password: "Подтвердите пароль",
    auth_name: "Полное имя",
    auth_no_account: "Нет аккаунта?",
    auth_have_account: "Уже есть аккаунт?",
    auth_register_link: "Зарегистрироваться",
    auth_login_link: "Войти",
    auth_min_chars: "Минимум 6 символов",
    auth_password_mismatch: "Пароли не совпадают",

    // Additional service cards
    service_4_title: "Повышение Квалификации",
    service_4_desc:
      "Программы профессионального развития и повышения квалификации сотрудников.",
    service_5_title: "Помощь с Лицензией",
    service_5_desc:
      "Практическая помощь в регистрации бизнеса, получении разрешений и лицензий.",
    service_6_title: "Энергоаудит",
    service_6_desc:
      "Профессиональный анализ энергоэффективности и экологических стандартов.",
    btn_more: "Подробнее",

    // Service Modal Features
    feature_professional: "Профессиональный подход",
    feature_professional_desc: "Квалифицированные специалисты",
    feature_fast: "Быстрый сервис",
    feature_fast_desc: "В короткие сроки",
    feature_support: "Поддержка 24/7",
    feature_support_desc: "Всегда на связи",
    feature_guarantee: "Гарантия",
    feature_guarantee_desc: "Гарантия качества",

    // Service Modal Sections
    service_about: "О услуге",
    service_benefits: "Преимущества",

    // Order Form
    order_title: "Оформить заказ",
    order_login_required: "Войдите для оформления заказа",
    order_login_hint: "Войдите в аккаунт или зарегистрируйтесь",
    order_phone: "Номер телефона",
    order_description: "Комментарий",
    order_submit: "Отправить",

    // Marketing section extra
    marketing_features:
      "Социальные сети • Создание контента • Брендинг • Стратегия продаж",

    // CTA
    cta_title: "Вместе Мы Сильнее",
    cta_desc: "Свяжитесь с нами сегодня и получите бесплатную консультацию",
    cta_btn: "Бесплатная Консультация",

    // Footer extra
    footer_address: "Ташкент, Чиланзарский район",
    footer_hours: "Пн-Пт: 9:00 - 18:00",
    footer_sales: "Продажи",
    footer_branding: "Брендинг",
    footer_finance: "Финансовый Анализ",

    // Language selector
    lang_select: "Выберите язык",

    // User actions
    btn_logout: "Выход",
    welcome_user: "Добро пожаловать",
    login_success: "Вы успешно вошли!",
    register_success: "Вы успешно зарегистрировались!",
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_achievements: "Achievements",
    nav_about: "About Us",
    nav_contact: "Contact",
    btn_login: "Login",
    btn_register: "Sign Up",

    // Hero Section
    hero_subtitle: "Professional Consulting Services",
    hero_title_1: "Take Your",
    hero_title_2: "Business",
    hero_title_3: "To The",
    hero_title_4: "Next Level",
    hero_desc:
      "Over 10 years of experience in accounting, IT, HR and marketing. Your success is our goal.",
    hero_btn_services: "Our Services",
    hero_btn_contact: "Contact Us",
    hero_stat_experience: "Years Experience",
    hero_stat_clients: "Happy Clients",
    hero_stat_support: "Support",
    hero_stat_satisfaction: "Client Satisfaction",
    hero_satisfaction: "Client Satisfaction",

    // Scroller
    scroller_text:
      "PROFESSIONAL CONSULTING • BUSINESS SOLUTIONS • DIGITAL TRANSFORMATION •",

    // Services Section
    services_subtitle: "What We Offer",
    services_title: "Our Services",
    service_1_title: "Accounting",
    service_1_desc:
      "Tax reporting, financial analysis and accounting services.",
    service_2_title: "Brokerage",
    service_2_desc: "Professional investment and financial market consulting.",
    service_3_title: "IT Services",
    service_3_desc: "Website, mobile app and software development.",
    service_4_title: "HR Services",
    service_4_desc: "Recruitment, HR consulting and personnel management.",
    service_5_title: "Business Consulting",
    service_5_desc: "Strategic planning and business development services.",
    service_6_title: "Training Courses",
    service_6_desc: "Professional development and qualification courses.",

    // Marketing Section
    marketing_title: "Marketing & Sales",
    marketing_desc:
      "We don't just promote your business, we make it a market leader. Increase your sales 3x with our professional marketing strategy.",
    marketing_smm: "SMM Strategy",
    marketing_branding: "Branding",
    marketing_ads: "Advertising",
    marketing_btn: "Start Selling",

    // Achievements Section
    achievements_subtitle: "In Numbers",
    achievements_title: "Our Achievements",
    achievements_desc:
      "Numbers reflect the quality of our work and client trust",
    achievements_1: "Years Experience",
    achievements_1_desc: "Over ten years of active work in the market",
    achievements_2: "Companies",
    achievements_2_desc: "Served hundreds of companies",
    achievements_3: "Satisfaction",
    achievements_3_desc: "Client satisfaction rate",
    achievements_4: "Support",
    achievements_4_desc: "Always ready to help you anytime",

    // About Section
    about_subtitle: "Our Advantages",
    about_title: "Why",
    about_title_2: "Us?",
    about_desc:
      "10+ years of experience, 500+ satisfied companies. We focus on strategic partnership and long-term growth.",
    about_1_title: "Fast Results",
    about_1_desc:
      "We solve your tasks quickly and efficiently. Saving time means saving money.",
    about_2_title: "Premium Quality",
    about_2_desc:
      "We apply the highest standards in every project. Quality is our priority.",
    about_3_title: "Reliable Partner",
    about_3_desc: "We work based on long-term partnership and mutual loyalty.",
    about_4_title: "Expert Team",
    about_4_desc: "We work with the best specialists in every field.",
    about_5_title: "24/7 Support",
    about_5_desc: "Always at your service. Fast and professional help.",
    about_6_title: "Certified",
    about_6_desc: "We work with international standards and certifications.",

    // Contact Section
    contact_subtitle: "Contact",
    contact_title: "Get In",
    contact_title_2: "Touch",
    contact_title_3: "With Us",
    contact_desc: "Connect with Uzbekistan's best business professionals",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_hours: "Working Hours",
    contact_cta_title: "Ready to discuss your project?",
    contact_cta_desc: "Contact us now for a free consultation.",
    contact_cta_btn: "Free Consultation",

    // Footer
    footer_desc:
      "Uzbekistan's leading consulting company. Your trusted partner in business development.",
    footer_links: "Links",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_copyright: "© 2026 Mag'zuna Consult. All rights reserved.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",

    // Auth Modals
    auth_login_title: "Login",
    auth_register_title: "Sign Up",
    auth_email: "Email",
    auth_password: "Password",
    auth_confirm_password: "Confirm Password",
    auth_name: "Full Name",
    auth_no_account: "Don't have an account?",
    auth_have_account: "Already have an account?",
    auth_register_link: "Sign up",
    auth_login_link: "Login",
    auth_min_chars: "Minimum 6 characters",
    auth_password_mismatch: "Passwords do not match",

    // Additional service cards
    service_4_title: "Training & Development",
    service_4_desc:
      "Professional development and qualification enhancement programs for employees.",
    service_5_title: "License Assistance",
    service_5_desc:
      "Practical assistance in business registration, permits and licensing.",
    service_6_title: "Energy Audit",
    service_6_desc:
      "Professional analysis of energy efficiency and environmental standards.",
    btn_more: "Learn More",

    // Service Modal Features
    feature_professional: "Professional Approach",
    feature_professional_desc: "Qualified specialists",
    feature_fast: "Fast Service",
    feature_fast_desc: "Quick turnaround",
    feature_support: "24/7 Support",
    feature_support_desc: "Always available",
    feature_guarantee: "Guarantee",
    feature_guarantee_desc: "Quality assured",

    // Service Modal Sections
    service_about: "About Service",
    service_benefits: "Benefits",

    // Order Form
    order_title: "Place Order",
    order_login_required: "Please login to place an order",
    order_login_hint: "Sign in or register to continue",
    order_phone: "Phone Number",
    order_description: "Description",
    order_submit: "Submit",

    // Marketing section extra
    marketing_features:
      "Social Media • Content Creation • Branding • Sales Strategy",

    // CTA
    cta_title: "Together We Are Stronger",
    cta_desc: "Contact us today and get a free consultation",
    cta_btn: "Free Consultation",

    // Footer extra
    footer_address: "Tashkent, Chilanzar district",
    footer_hours: "Mon-Fri: 9:00 - 18:00",
    footer_sales: "Sales",
    footer_branding: "Branding",
    footer_finance: "Financial Analysis",

    // Language selector
    lang_select: "Select Language",

    // User actions
    btn_logout: "Logout",
    welcome_user: "Welcome",
    login_success: "Successfully logged in!",
    register_success: "Successfully registered!",
  },
};

// Current language (default: Uzbek)
let currentLanguage = localStorage.getItem("language") || "uz";

// Language flag and name mappings
const langData = {
  uz: { flag: "https://flagcdn.com/w20/uz.png", name: "UZ" },
  ru: { flag: "https://flagcdn.com/w20/ru.png", name: "RU" },
  en: { flag: "https://flagcdn.com/w20/gb.png", name: "EN" },
};

// Scroller services for each language
const scrollerServices = {
  uz: [
    "Buxgalteriya",
    "Brokerlik",
    "IT Xizmatlari",
    "Malaka Oshirish",
    "Litsenziya Yordam",
    "Energiya Audit",
    "Marketing & Sotuv",
  ],
  ru: [
    "Бухгалтерия",
    "Брокерские услуги",
    "IT Услуги",
    "Повышение квалификации",
    "Помощь с лицензией",
    "Энергоаудит",
    "Маркетинг и продажи",
  ],
  en: [
    "Accounting",
    "Brokerage",
    "IT Services",
    "Training",
    "License Assistance",
    "Energy Audit",
    "Marketing & Sales",
  ],
};

// Update scroller content
function updateScrollerContent(lang) {
  const scroller = document.getElementById("scrollerContent");
  if (scroller && scrollerServices[lang]) {
    const services = scrollerServices[lang];
    let html = "";
    // Repeat 4 times for smooth infinite scroll
    for (let i = 0; i < 4; i++) {
      services.forEach((service) => {
        html += `<span>${service} •</span> `;
      });
    }
    scroller.innerHTML = html;
  }
}

// Set language function
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-lang-key
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update scroller content
  updateScrollerContent(lang);

  // Update placeholders
  const placeholders = {
    registerName: { uz: "Sizning ismingiz", ru: "Ваше имя", en: "Your name" },
  };
  Object.keys(placeholders).forEach((id) => {
    const el = document.getElementById(id);
    if (el && placeholders[id][lang]) {
      el.placeholder = placeholders[id][lang];
    }
  });

  // Update horizontal language flag buttons (desktop)
  document.querySelectorAll(".lang-flag-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Update horizontal language flag buttons (mobile)
  document.querySelectorAll(".mobile-lang-flag").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Legacy: Update old dropdown display (if exists)
  const currentFlag = document.getElementById("currentFlag");
  const currentLang = document.getElementById("currentLang");
  if (currentFlag) currentFlag.src = langData[lang].flag;
  if (currentLang) currentLang.textContent = langData[lang].name;

  // Legacy: Close old dropdown
  const dropdown = document.getElementById("langDropdown");
  if (dropdown) dropdown.classList.add("hidden");

  // Highlight active mobile lang button (in mobile menu)
  document.querySelectorAll(".mobile-lang-btn").forEach((btn) => {
    btn.classList.remove("bg-white/30");
    btn.classList.add("bg-white/10");
  });

  // Highlight active mobile navbar lang button
  document.querySelectorAll(".mobile-nav-lang-btn").forEach((btn) => {
    btn.classList.remove("border-white");
    btn.classList.add("border-white/30");
  });

  // Find and highlight the active language button in navbar
  const langMap = { uz: "uz", ru: "ru", en: "gb" };
  document.querySelectorAll(".mobile-nav-lang-btn").forEach((btn) => {
    const img = btn.querySelector("img");
    if (img && img.src.includes(langMap[lang])) {
      btn.classList.remove("border-white/30");
      btn.classList.add("border-white");
    }
  });

  console.log("🌐 Language changed to:", lang);
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set navbar spacer height dynamically
  function setNavbarSpacer() {
    const nav = document.querySelector("nav");
    const spacer = document.getElementById("navbarSpacer");
    if (nav && spacer) {
      const navHeight = nav.offsetHeight;
      spacer.style.height = navHeight - 50 + "px"; // navbar height - 15px for tighter spacing
    }
  }

  // Set on load and resize
  setNavbarSpacer();
  window.addEventListener("resize", setNavbarSpacer);

  // Set initial language
  setLanguage(currentLanguage);

  // Language dropdown toggle
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");
  const langArrow = document.getElementById("langArrow");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("hidden");
      langArrow.classList.toggle("rotate-180");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add("hidden");
        langArrow.classList.remove("rotate-180");
      }
    });
  }

  // Mobile Language dropdown toggle
  const mobileLangBtn = document.getElementById("mobileLangBtn");
  const mobileLangDropdown = document.getElementById("mobileLangDropdown");

  if (mobileLangBtn && mobileLangDropdown) {
    mobileLangBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileLangDropdown.classList.toggle("hidden");
    });

    // Close mobile dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileLangBtn.contains(e.target) &&
        !mobileLangDropdown.contains(e.target)
      ) {
        mobileLangDropdown.classList.add("hidden");
      }
    });
  }
});

// Close mobile language dropdown function
function closeMobileLangDropdown() {
  const mobileLangDropdown = document.getElementById("mobileLangDropdown");
  if (mobileLangDropdown) {
    mobileLangDropdown.classList.add("hidden");
  }
}

// Initialize plugins
gsap.registerPlugin(ScrollTrigger);

// AOS - lighter on mobile for better performance
const isMobile = window.innerWidth < 768;
AOS.init({ 
  duration: isMobile ? 400 : 800, 
  once: true, 
  offset: isMobile ? 20 : 50,
  disable: false
});

// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");

      if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        // Reset hamburger lines
        const lines = mobileMenuBtn.querySelectorAll(".hamburger-line");
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        // Animate to X
        const lines = mobileMenuBtn.querySelectorAll(".hamburger-line");
        lines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      }
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        const lines = mobileMenuBtn.querySelectorAll(".hamburger-line");
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
      });
    });
  }
});

// Check backend connection on load
async function checkBackendConnection() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (response.ok) {
      const data = await response.json();
      console.log("✅ Backend connected:", data);
    }
  } catch (error) {
    console.warn("⚠️ Backend not available at", API_BASE_URL);
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", checkBackendConnection);

// ============================================
// Authentication Modal Functions
// ============================================

function openAuthModal(type) {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (type === "login") {
    loginModal.classList.remove("hidden");
    registerModal.classList.add("hidden");
  } else if (type === "register") {
    registerModal.classList.remove("hidden");
    loginModal.classList.add("hidden");
  }
}

function closeAuthModal(type) {
  if (type === "login") {
    document.getElementById("loginModal").classList.add("hidden");
  } else if (type === "register") {
    document.getElementById("registerModal").classList.add("hidden");
  }
}

function switchAuthModal() {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (!loginModal.classList.contains("hidden")) {
    closeAuthModal("login");
    openAuthModal("register");
  } else {
    closeAuthModal("register");
    openAuthModal("login");
  }
}

// Close modal when clicking outside
document.addEventListener("click", (e) => {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (e.target === loginModal && !loginModal.classList.contains("hidden")) {
    closeAuthModal("login");
  }
  if (
    e.target === registerModal &&
    !registerModal.classList.contains("hidden")
  ) {
    closeAuthModal("register");
  }
});

// Handle Login
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const loginBtn = document.getElementById("loginBtn");
  const loginBtnText = document.getElementById("loginBtnText");
  const loginError = document.getElementById("loginError");
  const loginErrorMsg = document.getElementById("loginErrorMsg");

  // Clear previous errors
  loginError.classList.add("hidden");

  // Disable button
  loginBtn.disabled = true;
  loginBtnText.textContent = "Yuklanmoqda...";

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success message in current language
      const welcomeMsg = getTranslation("welcome_user");
      alert(`${welcomeMsg}, ${data.user.name}!`);

      // Close modal and reset form
      closeAuthModal("login");
      document.getElementById("loginForm").reset();

      // Update navbar to show logged in status
      updateNavbarForLoggedIn();
    } else {
      loginErrorMsg.textContent =
        data.message ||
        getTranslation("auth_login_error") ||
        "Login muvaffaqiyatsiz bo'ldi";
      loginError.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Login error:", error);
    const errorMsgs = {
      uz: "Server bilan aloqa o'rnatib bo'lmadi. Iltimos qayta urinib ko'ring.",
      ru: "Не удалось подключиться к серверу. Пожалуйста, попробуйте снова.",
      en: "Could not connect to server. Please try again.",
    };
    loginErrorMsg.textContent = errorMsgs[currentLanguage] || errorMsgs.uz;
    loginError.classList.remove("hidden");
  } finally {
    // Enable button
    loginBtn.disabled = false;
    loginBtnText.textContent = getTranslation("btn_login");
  }
}

// Handle Register
async function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById(
    "registerConfirmPassword",
  ).value;
  const registerBtn = document.getElementById("registerBtn");
  const registerBtnText = document.getElementById("registerBtnText");
  const registerError = document.getElementById("registerError");
  const registerErrorMsg = document.getElementById("registerErrorMsg");
  const registerSuccess = document.getElementById("registerSuccess");
  const registerSuccessMsg = document.getElementById("registerSuccessMsg");

  // Clear previous messages
  registerError.classList.add("hidden");
  registerSuccess.classList.add("hidden");

  // Check if passwords match
  if (password !== confirmPassword) {
    const mismatchMsg =
      translations[currentLanguage]?.auth_password_mismatch ||
      "Parollar mos kelmadi";
    registerErrorMsg.textContent = mismatchMsg;
    registerError.classList.remove("hidden");
    return;
  }

  // Disable button
  registerBtn.disabled = true;
  registerBtnText.textContent = "Yuklanmoqda...";

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success message in current language
      const successMsgs = {
        uz: `Xush kelibsiz, ${data.user.name}! Ro'yxatdan o'tish muvaffaqiyatli bo'ldi.`,
        ru: `Добро пожаловать, ${data.user.name}! Регистрация успешна.`,
        en: `Welcome, ${data.user.name}! Registration successful.`,
      };
      registerSuccessMsg.textContent =
        successMsgs[currentLanguage] || successMsgs.uz;
      registerSuccess.classList.remove("hidden");

      // Reset form
      document.getElementById("registerForm").reset();

      // Close modal after 2 seconds
      setTimeout(() => {
        closeAuthModal("register");
        updateNavbarForLoggedIn();
      }, 2000);
    } else {
      registerErrorMsg.textContent =
        data.message ||
        getTranslation("auth_register_error") ||
        "Ro'yxatdan o'tish muvaffaqiyatsiz bo'ldi";
      registerError.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Register error:", error);
    const errorMsgs = {
      uz: "Server bilan aloqa o'rnatib bo'lmadi. Iltimos qayta urinib ko'ring.",
      ru: "Не удалось подключиться к серверу. Пожалуйста, попробуйте снова.",
      en: "Could not connect to server. Please try again.",
    };
    registerErrorMsg.textContent = errorMsgs[currentLanguage] || errorMsgs.uz;
    registerError.classList.remove("hidden");
  } finally {
    // Enable button
    registerBtn.disabled = false;
    registerBtnText.textContent = getTranslation("auth_register_title");
  }
}

// Update navbar for logged in user
function updateNavbarForLoggedIn() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log("✅ Logged in as:", user.name);

    // Update desktop login/register buttons
    const desktopLoginBtn = document.querySelector(
      "button[onclick=\"openAuthModal('login')\"]",
    );
    const desktopRegisterBtn = document.querySelector(
      "button[onclick=\"openAuthModal('register')\"]",
    );

    if (desktopLoginBtn && desktopRegisterBtn) {
      // Replace login button with user info
      desktopLoginBtn.innerHTML = `<i class="fas fa-user mr-2"></i><span>${user.name.split(" ")[0]}</span>`;
      desktopLoginBtn.onclick = null;
      desktopLoginBtn.classList.add("cursor-default");

      // Replace register button with logout
      desktopRegisterBtn.innerHTML = `<i class="fas fa-sign-out-alt mr-2"></i><span data-lang-key="btn_logout">${getTranslation("btn_logout")}</span>`;
      desktopRegisterBtn.onclick = handleLogout;
      desktopRegisterBtn.classList.remove("bg-white", "text-red-600");
      desktopRegisterBtn.classList.add(
        "bg-red-700",
        "text-white",
        "hover:bg-red-800",
      );
    }

    // Update mobile menu buttons
    const mobileLoginBtn = document.querySelector(
      "#mobileMenu button[onclick=\"openAuthModal('login')\"]",
    );
    const mobileRegisterBtn = document.querySelector(
      "#mobileMenu button[onclick=\"openAuthModal('register')\"]",
    );

    if (mobileLoginBtn && mobileRegisterBtn) {
      mobileLoginBtn.innerHTML = `<i class="fas fa-user mr-2"></i><span>${user.name}</span>`;
      mobileLoginBtn.onclick = null;
      mobileLoginBtn.classList.add("cursor-default");

      mobileRegisterBtn.innerHTML = `<i class="fas fa-sign-out-alt mr-2"></i><span>${getTranslation("btn_logout")}</span>`;
      mobileRegisterBtn.onclick = handleLogout;
    }
  }
}

// Get translation helper
function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations["uz"][key] || key;
}

// Handle logout
function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Show logout message
  const logoutMsg = {
    uz: "Tizimdan chiqdingiz",
    ru: "Вы вышли из системы",
    en: "You have been logged out",
  };
  alert(logoutMsg[currentLanguage] || logoutMsg.uz);

  // Reload page to reset UI
  window.location.reload();
}

// Check if user is logged in on page load
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (user && token) {
    // Verify token is still valid (optional - can add API call)
    updateNavbarForLoggedIn();
  } else {
    // Clear any stale data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
});

// Hero animations
gsap.from(".hero-title", {
  duration: 2,
  y: 100,
  opacity: 0,
  stagger: 0.3,
  ease: "power4.out",
});

// Section animations
const sections = gsap.utils.toArray("section");
sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ============================================
// HERO IMAGE MOBILE SWIPE SLIDER
// ============================================

(function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slider) return;

  let currentSlide = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  const totalSlides = 4;

  function updateSlider(animate = true) {
    if (!animate) {
      slider.style.transition = "none";
    } else {
      slider.style.transition = "transform 0.3s ease-out";
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-red-600");
      } else {
        dot.classList.remove("bg-red-600");
        dot.classList.add("bg-gray-300");
      }
    });
  }

  function goToSlide(index) {
    currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
    updateSlider();
  }

  // Touch events
  slider.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      slider.style.transition = "none";
    },
    { passive: true },
  );

  slider.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      const percent = (diff / slider.offsetWidth) * 100;
      slider.style.transform = `translateX(calc(-${currentSlide * 100}% + ${percent}%))`;
    },
    { passive: true },
  );

  slider.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const diff = currentX - startX;
    const threshold = slider.offsetWidth * 0.2; // 20% threshold

    if (diff < -threshold && currentSlide < totalSlides - 1) {
      currentSlide++;
    } else if (diff > threshold && currentSlide > 0) {
      currentSlide--;
    }

    updateSlider();
    startX = 0;
    currentX = 0;
  });

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // Auto slide every 4 seconds
  let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 4000);

  // Pause auto slide on touch
  slider.addEventListener("touchstart", () => {
    clearInterval(autoSlide);
  });

  slider.addEventListener("touchend", () => {
    autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 4000);
  });
})();

// ============================================
// SERVICE MODAL & ORDER SYSTEM
// ============================================

// Service detailed descriptions with HTML formatting
const serviceDetails = {
  "01": `
    <div class="space-y-4">
      <p class="text-base sm:text-lg font-semibold text-gray-800">🧮 Biz bilan buxgalteriya tizimi tartiblashtiriladi!</p>
      <p class="text-gray-600">💸 Biz sizning buxgalteriya va hisobotlaringiz uchun sifatli va izchil xizmatlarni taklif etamiz.</p>
      
      <div class="bg-red-50 rounded-xl p-4 border border-red-100">
        <p class="font-bold text-gray-800 mb-3">Bizning buxgalteriya xizmatlar o'z ichiga oladi:</p>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Buxgalteriya hisobi yuritish</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Soliq hisoboti tayyorlash</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Tenderlarda qatnashish</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Audit</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> 1C va Didox</li>
        </ul>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <p class="font-bold text-gray-800 mb-3">🌟 Nega bizni tanlash kerak?</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li class="flex items-start gap-2"><span>💼</span> <strong>Tajribali buxgalterlar:</strong> Bizning jamoamiz ko'p yillik tajribaga ega</li>
          <li class="flex items-start gap-2"><span>💲</span> <strong>Arzon narxlar:</strong> Sifatni yo'qotmasdan raqobatbardosh narxlar</li>
          <li class="flex items-start gap-2"><span>🤝</span> <strong>Shaxsiylashtirilgan xizmat:</strong> Siz bilan alohida hamkorlik</li>
          <li class="flex items-start gap-2"><span>💻</span> <strong>Zamonaviy texnologiya:</strong> Eng so'nggi dasturlardan foydalanamiz</li>
        </ul>
      </div>
      
      <p class="text-red-600 font-semibold">📈 Moliyangizni nazorat qilishga tayyormisiz? Buyurtma bering!</p>
    </div>
  `,
  "02": `
    <div class="space-y-4">
      <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <p class="text-base sm:text-lg font-bold text-gray-800 mb-2">BROKERLIK – BU NIMA?</p>
        <p class="text-gray-600">Brokerlik — bu mijozlar nomidan moliyaviy operatsiyalarni bajarish faoliyati. Broker siz uchun aksiya, obligatsiya, valyuta, kripto, hatto birja tovarlari bilan savdo qiladi.</p>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <p class="font-bold text-gray-800 mb-3">BROKER NIMA ISH QILADI?</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Bozor holatini tahlil qiladi</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Qaysi aktivni qachon sotib olish yoki sotishni tavsiya qiladi</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Mijoz buyurtmalarini birjada bajaradi</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Risklarni kamaytirish bo'yicha maslahat beradi</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Mijozning portfelini boshqaradi</li>
        </ul>
      </div>
      
      <div class="bg-red-50 rounded-xl p-4 border border-red-100">
        <p class="font-bold text-gray-800 mb-3">BROKERLIK QANDAY ISHLAYDI?</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li>1️⃣ Siz broker platformasida akkount ochasiz</li>
          <li>2️⃣ Hisobingizga pul kiritasiz</li>
          <li>3️⃣ Broker sizga aktivlar taklif qiladi yoki siz mustaqil tanlaysiz</li>
          <li>4️⃣ Savdo buyurtmasi beriladi</li>
          <li>5️⃣ Broker uni birjada amalga oshiradi</li>
        </ul>
      </div>
      
      <p class="text-red-600 font-semibold">📲 Biz bilan bog'laning va professional yondashuvga guvoh bo'ling!</p>
    </div>
  `,
  "03": `
    <div class="space-y-4">
      <p class="text-base sm:text-lg font-bold text-gray-800">🔹 IT — kelajak kasblarining markazi</p>
      <p class="text-gray-600">IT sohasiga kirish tobora osonlashmoqda:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="bg-blue-50 rounded-xl p-3 border border-blue-100">
          <p class="font-bold text-gray-800 flex items-center gap-2"><span>💻</span> Frontend / Backend</p>
          <p class="text-gray-600 text-sm">Sayt va ilovalar yaratish</p>
        </div>
        <div class="bg-green-50 rounded-xl p-3 border border-green-100">
          <p class="font-bold text-gray-800 flex items-center gap-2"><span>📱</span> Mobil Development</p>
          <p class="text-gray-600 text-sm">Android/iOS app ishlab chiqish</p>
        </div>
        <div class="bg-purple-50 rounded-xl p-3 border border-purple-100">
          <p class="font-bold text-gray-800 flex items-center gap-2"><span>🤖</span> Sun'iy Intellekt</p>
          <p class="text-gray-600 text-sm">AI va Data Science</p>
        </div>
        <div class="bg-red-50 rounded-xl p-3 border border-red-100">
          <p class="font-bold text-gray-800 flex items-center gap-2"><span>🔐</span> Kiberxavfsizlik</p>
          <p class="text-gray-600 text-sm">Ma'lumotlarni himoyalash</p>
        </div>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <p class="text-gray-700">IT mutaxassislarining talab darajasi yil sayin ortmoqda. Eng katta afzallik — <strong>masofadan ishlash</strong> va <strong>yuqori daromad</strong> olish imkoniyati.</p>
      </div>
      
      <p class="text-red-600 font-semibold">📲 Bizning IT xizmatlarimizga buyurtma bering va professionallikning namunasiga guvoh bo'ling!</p>
    </div>
  `,
  "04": `
    <div class="space-y-4">
      <p class="text-base sm:text-lg font-bold text-gray-800">Xodimlarni malakasini oshirish xizmati</p>
      <p class="text-gray-600">Bugungi raqobat kuchli bo'lgan bozor sharoitida kompaniya muvaffaqiyati faqat texnologiya yoki investitsiyaga emas, balki xodimlarning bilim va ko'nikmalariga bevosita bog'liq.</p>
      
      <div class="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
        <p class="font-bold text-gray-800 mb-3">⭐ Malakasini oshirishning asosiy maqsadlari:</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li class="flex items-start gap-2"><span class="text-yellow-500">⭐</span> Kasbiy bilim va ko'nikmalarni yangilash</li>
          <li class="flex items-start gap-2"><span class="text-yellow-500">⭐</span> Texnologiya va jarayonlardagi o'zgarishlarga moslashish</li>
          <li class="flex items-start gap-2"><span class="text-yellow-500">⭐</span> Ish samaradorligini oshirish</li>
          <li class="flex items-start gap-2"><span class="text-yellow-500">⭐</span> Rahbarlik va boshqaruv ko'nikmalarini rivojlantirish</li>
          <li class="flex items-start gap-2"><span class="text-yellow-500">⭐</span> Xizmat sifati va mijozlar qoniqishini oshirish</li>
        </ul>
      </div>
      
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <p class="font-bold text-gray-800 mb-3">Xizmat yo'nalishlari:</p>
        <div class="space-y-3 text-sm">
          <div><strong>1. Ichki o'quv dasturlari</strong> - Kompaniya ichida treninglar</div>
          <div><strong>2. Tashqi treninglar</strong> - Seminarlar, online kurslar (Coursera, Udemy)</div>
          <div><strong>3. Raqamli kompetensiyalar</strong> - IT, AI, avtomatlashtirish</div>
        </div>
      </div>
      
      <p class="text-red-600 font-semibold">📲 Biz bilan bog'laning va professional yondashuvga guvoh bo'ling!</p>
    </div>
  `,
  "05": `
    <div class="space-y-4">
      <p class="text-base sm:text-lg font-bold text-gray-800">Litsenziya — qonuniy faoliyatning asosiy talabi</p>
      <p class="text-gray-600">Ko'p yo'nalishlarda biznes boshlash uchun maxsus ruxsat — litsenziya talab qilinadi.</p>
      
      <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <p class="font-bold text-gray-800 mb-3">Misollar:</p>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div class="flex items-center gap-2"><span>💊</span> Tibbiyot xizmatlari</div>
          <div class="flex items-center gap-2"><span>🏦</span> Moliyaviy xizmatlar</div>
          <div class="flex items-center gap-2"><span>📡</span> Telekommunikatsiya</div>
          <div class="flex items-center gap-2"><span>🛡</span> Xavfsizlik xizmatlari</div>
        </div>
      </div>
      
      <div class="bg-red-50 rounded-xl p-4 border border-red-100">
        <p class="font-bold text-gray-800 mb-3">Litsenziya olish uchun kerak:</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Tashkilot hujjatlari</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Mutaxassislar malakasi</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Texnik sharoit va talablar</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Davlat boji va ariza</li>
        </ul>
      </div>
      
      <div class="bg-green-50 rounded-xl p-4 border border-green-100">
        <p class="text-gray-700"><strong>Litsenziya biznesni ishonchli va qonuniy qiladi.</strong></p>
      </div>
      
      <p class="text-red-600 font-semibold">📲 Biz bilan bog'laning va professional yondashuvga guvoh bo'ling!</p>
    </div>
  `,
  "06": `
    <div class="space-y-4">
      <p class="text-base sm:text-lg font-bold text-gray-800">⚡ Energiya Audit Xizmati</p>
      <p class="text-gray-600">Energiya sarfini optimallashtirish va xarajatlarni 30% gacha tejash imkoniyati!</p>
      
      <div class="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
        <p class="font-bold text-gray-800 mb-3">Energiya audit nima beradi?</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Energiya sarfi tahlili</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Isrof manbalarini aniqlash</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Tejash bo'yicha tavsiyalar</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Zamonaviy yechimlar taklifi</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✅</span> Ekologik standartlarga moslik</li>
        </ul>
      </div>
      
      <div class="bg-green-50 rounded-xl p-4 border border-green-100">
        <p class="font-bold text-gray-800 mb-3">💡 Afzalliklar:</p>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li>• Elektr energiyasini 20-30% tejash</li>
          <li>• Xarajatlarni kamaytirish</li>
          <li>• Atrof-muhitni asrash</li>
          <li>• Zamonaviy uskunalar tavsiyasi</li>
        </ul>
      </div>
      
      <p class="text-red-600 font-semibold">📲 Energiya xarajatlaringizni kamaytirishga tayyormisiz? Biz bilan bog'laning!</p>
    </div>
  `,
};

// Open Service Modal
function openServiceModal(number, title, description, imageUrl) {
  // Format number with leading zero
  const formattedNumber = number.toString().padStart(2, "0");

  // DESKTOP Elements
  const desktopElements = {
    number: document.getElementById("serviceModalNumberDesktop"),
    titleLeft: document.getElementById("serviceModalTitleLeft"),
    titleRight: document.getElementById("serviceModalTitleDesktop"),
    desc: document.getElementById("serviceModalDescDesktop"),
    image: document.getElementById("serviceModalImageDesktop"),
    loginRequired: document.getElementById("orderLoginRequiredDesktop"),
    orderForm: document.getElementById("serviceOrderFormDesktop"),
    serviceName: document.getElementById("orderServiceNameDesktop"),
    serviceNumber: document.getElementById("orderServiceNumberDesktop"),
    errorEl: document.getElementById("orderFormErrorDesktop"),
    successEl: document.getElementById("orderFormSuccessDesktop"),
  };

  // MOBILE Elements
  const mobileElements = {
    number: document.getElementById("serviceModalNumberMobile"),
    title: document.getElementById("serviceModalTitleMobile"),
    desc: document.getElementById("serviceModalDescMobile"),
    image: document.getElementById("serviceModalImageMobile"),
    loginRequired: document.getElementById("orderLoginRequiredMobile"),
    orderForm: document.getElementById("serviceOrderFormMobile"),
    serviceName: document.getElementById("orderServiceNameMobile"),
    serviceNumber: document.getElementById("orderServiceNumberMobile"),
    errorEl: document.getElementById("orderFormErrorMobile"),
    successEl: document.getElementById("orderFormSuccessMobile"),
  };

  // Populate DESKTOP
  if (desktopElements.number)
    desktopElements.number.textContent = formattedNumber;
  if (desktopElements.titleLeft) desktopElements.titleLeft.textContent = title;
  if (desktopElements.titleRight)
    desktopElements.titleRight.textContent = title;
  if (desktopElements.image) {
    desktopElements.image.src = imageUrl;
    desktopElements.image.alt = title;
  }
  if (desktopElements.serviceName) desktopElements.serviceName.value = title;
  if (desktopElements.serviceNumber)
    desktopElements.serviceNumber.value = number;

  // Use detailed description if available
  if (desktopElements.desc) {
    if (serviceDetails[number]) {
      desktopElements.desc.innerHTML = serviceDetails[number];
    } else {
      desktopElements.desc.textContent = description;
    }
  }

  // Populate MOBILE
  if (mobileElements.number)
    mobileElements.number.textContent = formattedNumber;
  if (mobileElements.title) mobileElements.title.textContent = title;
  if (mobileElements.image) {
    mobileElements.image.src = imageUrl;
    mobileElements.image.alt = title;
  }
  if (mobileElements.serviceName) mobileElements.serviceName.value = title;
  if (mobileElements.serviceNumber) mobileElements.serviceNumber.value = number;

  // Use detailed description for mobile
  if (mobileElements.desc) {
    if (serviceDetails[number]) {
      mobileElements.desc.innerHTML = serviceDetails[number];
    } else {
      mobileElements.desc.textContent = description;
    }
  }

  // Check if user is logged in
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    // Show order forms, hide login required
    if (desktopElements.loginRequired)
      desktopElements.loginRequired.classList.add("hidden");
    if (desktopElements.orderForm) {
      desktopElements.orderForm.classList.remove("hidden");
      desktopElements.orderForm.reset();
    }
    if (desktopElements.errorEl)
      desktopElements.errorEl.classList.add("hidden");
    if (desktopElements.successEl)
      desktopElements.successEl.classList.add("hidden");

    if (mobileElements.loginRequired)
      mobileElements.loginRequired.classList.add("hidden");
    if (mobileElements.orderForm) {
      mobileElements.orderForm.classList.remove("hidden");
      mobileElements.orderForm.reset();
    }
    if (mobileElements.errorEl) mobileElements.errorEl.classList.add("hidden");
    if (mobileElements.successEl)
      mobileElements.successEl.classList.add("hidden");
  } else {
    // Show login required, hide order forms
    if (desktopElements.loginRequired)
      desktopElements.loginRequired.classList.remove("hidden");
    if (desktopElements.orderForm)
      desktopElements.orderForm.classList.add("hidden");

    if (mobileElements.loginRequired)
      mobileElements.loginRequired.classList.remove("hidden");
    if (mobileElements.orderForm)
      mobileElements.orderForm.classList.add("hidden");
  }

  const modal = document.getElementById("serviceModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex", "show");
  document.body.style.overflow = "hidden";
  
  // Apply current language translations to modal
  setLanguage(currentLanguage);
}

// Close Service Modal
function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  modal.classList.add("hide");
  modal.classList.remove("show");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex", "hide");
    document.body.style.overflow = "";
  }, 300);
}

// Submit Order - Desktop
async function submitOrder(event) {
  event.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    closeServiceModal();
    openAuthModal("login");
    return;
  }

  const serviceName = document.getElementById("orderServiceNameDesktop").value;
  const serviceNumber = document.getElementById(
    "orderServiceNumberDesktop",
  ).value;
  const phoneNumber = document.getElementById("orderPhoneNumberDesktop").value;
  const description = document.getElementById(
    "orderUserDescriptionDesktop",
  ).value;

  const errorEl = document.getElementById("orderFormErrorDesktop");
  const successEl = document.getElementById("orderFormSuccessDesktop");
  const submitBtn = document.getElementById("orderSubmitBtnDesktop");

  // Validate
  if (!phoneNumber || !description) {
    errorEl.textContent = "Barcha maydonlarni to'ldiring";
    errorEl.classList.remove("hidden");
    return;
  }

  // Disable button
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';

  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        serviceName,
        serviceNumber,
        phoneNumber,
        description,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Xatolik yuz berdi");
    }

    // Success
    errorEl.classList.add("hidden");
    successEl.textContent =
      "Zakazingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.";
    successEl.classList.remove("hidden");

    // Reset form
    document.getElementById("serviceOrderFormDesktop").reset();

    // Close modal after 3 seconds
    setTimeout(() => {
      closeServiceModal();
    }, 3000);
  } catch (error) {
    errorEl.textContent = error.message;
    errorEl.classList.remove("hidden");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<i class="fas fa-paper-plane"></i> <span data-lang-key="order_submit">Yuborish</span>';
  }
}

// Submit Order - Mobile
async function submitOrderMobile(event) {
  event.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    closeServiceModal();
    openAuthModal("login");
    return;
  }

  const serviceName = document.getElementById("orderServiceNameMobile").value;
  const serviceNumber = document.getElementById(
    "orderServiceNumberMobile",
  ).value;
  const phoneNumber = document.getElementById("orderPhoneNumberMobile").value;
  const description = document.getElementById(
    "orderUserDescriptionMobile",
  ).value;

  const errorEl = document.getElementById("orderFormErrorMobile");
  const successEl = document.getElementById("orderFormSuccessMobile");
  const submitBtn = document.getElementById("orderSubmitBtnMobile");

  // Validate
  if (!phoneNumber || !description) {
    errorEl.textContent = "Barcha maydonlarni to'ldiring";
    errorEl.classList.remove("hidden");
    return;
  }

  // Disable button
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';

  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        serviceName,
        serviceNumber,
        phoneNumber,
        description,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Xatolik yuz berdi");
    }

    // Success
    errorEl.classList.add("hidden");
    successEl.textContent =
      "Zakazingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.";
    successEl.classList.remove("hidden");

    // Reset form
    document.getElementById("serviceOrderFormMobile").reset();

    // Close modal after 3 seconds
    setTimeout(() => {
      closeServiceModal();
    }, 3000);
  } catch (error) {
    errorEl.textContent = error.message;
    errorEl.classList.remove("hidden");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<i class="fas fa-paper-plane"></i> <span data-lang-key="order_submit">Yuborish</span>';
  }
}

// Close modal on outside click
document.addEventListener("DOMContentLoaded", () => {
  const serviceModal = document.getElementById("serviceModal");
  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const serviceModal = document.getElementById("serviceModal");
    if (serviceModal && !serviceModal.classList.contains("hidden")) {
      closeServiceModal();
    }
  }
});
