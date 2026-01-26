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
      "Buxgalteriya, IT, HR va marketing xizmatlarida 3+ yillik tajriba. Sizning muvaffaqiyatingiz - bizning maqsadimiz.",
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
    marketing_premium: "Premium Xizmat",

    // Achievements Section
    achievements_subtitle: "Raqamlarda",
    achievements_title: "Bizning Yutuqlarimiz",
    achievements_desc:
      "Raqamlar bizning ishimizning sifati va mijozlarimiz ishonchini aks ettiradi",
    achievements_1: "Yillik Tajriba",
    achievements_1_desc: "Uch yildan ortiq bozorda faol ishlaymiz",
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
      "3+ yil tajriba, 500+ mamnun kompaniya. Biz strategik hamkorlik va uzoq muddatli rivojlanishga yo'naltiramiz.",
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
    service_5_title: "Litsenziyaga Yordam",
    service_5_desc:
      "Biznesni ro'yxatga olish, ruxsatnoma va litsenziya olishda amaliy yordam berish.",
    service_6_title: "Energiya Audit",
    service_6_desc:
      "Energiya tejamkorligi va ekologik standartlar bo'yicha professional tahlil.",
    btn_more: "Batafsil",

    // Service Modal Features
    feature_professional: "Professional yondashuv",
    feature_professional_desc: "Malakali mutaxassislar",
    feature_professional_short: "Professional",
    feature_fast: "Tezkor xizmat",
    feature_fast_desc: "Qisqa muddatda",
    feature_fast_short: "Tezkor",
    feature_support: "24/7 Qo'llab-quvvatlash",
    feature_support_desc: "Doim aloqadamiz",
    feature_support_short: "24/7 Yordam",
    feature_guarantee: "Kafolat",
    feature_guarantee_desc: "Sifat kafolati",
    feature_guarantee_short: "Kafolat",

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
    marketing_premium: "Премиум Услуга",

    // Achievements Section
    achievements_subtitle: "В цифрах",
    achievements_title: "Наши Достижения",
    achievements_desc:
      "Цифры отражают качество нашей работы и доверие клиентов",
    achievements_1: "Лет Опыта",
    achievements_1_desc: "Более трёх лет активно работаем на рынке",
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
      "3+ лет опыта, 500+ довольных компаний. Мы ориентируемся на стратегическое партнёрство и долгосрочное развитие.",
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
    feature_professional_short: "Профессионально",
    feature_fast: "Быстрый сервис",
    feature_fast_desc: "В короткие сроки",
    feature_fast_short: "Быстро",
    feature_support: "Поддержка 24/7",
    feature_support_desc: "Всегда на связи",
    feature_support_short: "24/7 Помощь",
    feature_guarantee: "Гарантия",
    feature_guarantee_desc: "Гарантия качества",
    feature_guarantee_short: "Гарантия",

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
    marketing_premium: "Premium Service",

    // Achievements Section
    achievements_subtitle: "In Numbers",
    achievements_title: "Our Achievements",
    achievements_desc:
      "Numbers reflect the quality of our work and client trust",
    achievements_1: "Years Experience",
    achievements_1_desc: "Over three years of active work in the market",
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
      "3+ years of experience, 500+ satisfied companies. We focus on strategic partnership and long-term growth.",
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
    feature_professional_short: "Professional",
    feature_fast: "Fast Service",
    feature_fast_desc: "Quick turnaround",
    feature_fast_short: "Fast",
    feature_support: "24/7 Support",
    feature_support_desc: "Always available",
    feature_support_short: "24/7 Help",
    feature_guarantee: "Guarantee",
    feature_guarantee_desc: "Quality assured",
    feature_guarantee_short: "Guarantee",

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

  // Update placeholders for all input fields
  const placeholders = {
    registerName: { uz: "Sizning ismingiz", ru: "Ваше имя", en: "Your name" },
    loginEmail: { uz: "Email manzilingiz", ru: "Ваш email", en: "Your email" },
    loginPassword: { uz: "Parolingiz", ru: "Ваш пароль", en: "Your password" },
    registerEmail: {
      uz: "Email manzilingiz",
      ru: "Ваш email",
      en: "Your email",
    },
    registerPassword: {
      uz: "Parol kiriting",
      ru: "Введите пароль",
      en: "Enter password",
    },
    registerConfirmPassword: {
      uz: "Parolni tasdiqlang",
      ru: "Подтвердите пароль",
      en: "Confirm password",
    },
    orderPhoneNumberDesktop: {
      uz: "+998 90 123 45 67",
      ru: "+998 90 123 45 67",
      en: "+998 90 123 45 67",
    },
    orderUserDescriptionDesktop: {
      uz: "Qisqacha izoh yozing...",
      ru: "Напишите краткий комментарий...",
      en: "Write a brief description...",
    },
    orderPhoneNumberMobile: {
      uz: "+998 90 123 45 67",
      ru: "+998 90 123 45 67",
      en: "+998 90 123 45 67",
    },
    orderUserDescriptionMobile: {
      uz: "Qisqacha izoh...",
      ru: "Краткий комментарий...",
      en: "Brief description...",
    },
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

  // Reset modal scroll after language change
  if (typeof window.resetModalScroll === "function") {
    setTimeout(() => window.resetModalScroll(), 100);
  }

  // Update language dropdown display
  updateLangDropdownDisplay(lang);

  console.log("🌐 Language changed to:", lang);
}

// Language dropdown functions
function updateLangDropdownDisplay(lang) {
  const flagMap = {
    uz: { src: "https://flagcdn.com/w40/uz.png", text: "UZ" },
    ru: { src: "https://flagcdn.com/w40/ru.png", text: "RU" },
    en: { src: "https://flagcdn.com/w40/gb.png", text: "EN" },
  };

  const currentLangFlag = document.getElementById("currentLangFlag");
  const currentLangText = document.getElementById("currentLangText");

  if (currentLangFlag && flagMap[lang]) {
    currentLangFlag.src = flagMap[lang].src;
  }
  if (currentLangText && flagMap[lang]) {
    currentLangText.textContent = flagMap[lang].text;
  }
}

function toggleLangDropdown() {
  const menu = document.getElementById("langDropdownMenu");
  const btn = document.getElementById("langDropdownBtn");

  if (menu && btn) {
    if (menu.classList.contains("opacity-0")) {
      // Calculate position
      const btnRect = btn.getBoundingClientRect();
      menu.style.top = btnRect.bottom + 8 + "px";
      menu.style.left = btnRect.right - menu.offsetWidth + "px";

      menu.classList.remove("opacity-0", "invisible", "translate-y-2");
      menu.classList.add("opacity-100", "visible", "translate-y-0");
    } else {
      closeLangDropdown();
    }
  }
}

function closeLangDropdown() {
  const menu = document.getElementById("langDropdownMenu");
  if (menu) {
    menu.classList.add("opacity-0", "invisible", "translate-y-2");
    menu.classList.remove("opacity-100", "visible", "translate-y-0");
  }
}

// Mobile language dropdown functions
function toggleMobileLangDropdown() {
  const menu = document.getElementById("mobileLangDropdown");
  const btn = document.getElementById("mobileLangBtn");

  if (menu && btn) {
    if (menu.classList.contains("opacity-0")) {
      // Calculate position
      const btnRect = btn.getBoundingClientRect();
      menu.style.top = btnRect.bottom + 8 + "px";
      menu.style.left = btnRect.right - menu.offsetWidth + "px";

      menu.classList.remove("opacity-0", "invisible", "translate-y-2");
      menu.classList.add("opacity-100", "visible", "translate-y-0");
    } else {
      closeMobileLangDropdown();
    }
  }
}

function closeMobileLangDropdown() {
  const menu = document.getElementById("mobileLangDropdown");
  if (menu) {
    menu.classList.add("opacity-0", "invisible", "translate-y-2");
    menu.classList.remove("opacity-100", "visible", "translate-y-0");
  }
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

  // Move language dropdown to body for proper positioning
  const langDropdownMenu = document.getElementById("langDropdownMenu");
  if (langDropdownMenu) {
    document.body.appendChild(langDropdownMenu);
  }

  // Move mobile language dropdown to body for proper positioning
  const mobileLangDropdown = document.getElementById("mobileLangDropdown");
  if (mobileLangDropdown) {
    document.body.appendChild(mobileLangDropdown);
  }

  // New language dropdown toggle
  const langDropdownBtn = document.getElementById("langDropdownBtn");
  if (langDropdownBtn) {
    langDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangDropdown();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const langSwitcher = document.getElementById("langSwitcher");
    const langDropdownMenu = document.getElementById("langDropdownMenu");
    if (
      langSwitcher &&
      !langSwitcher.contains(e.target) &&
      langDropdownMenu &&
      !langDropdownMenu.contains(e.target)
    ) {
      closeLangDropdown();
    }

    // Close mobile lang dropdown when clicking outside
    const mobileLangSwitcher = document.getElementById("mobileLangSwitcher");
    if (mobileLangSwitcher && !mobileLangSwitcher.contains(e.target)) {
      closeMobileLangDropdown();
    }
  });

  // Close dropdown on scroll
  window.addEventListener("scroll", () => {
    closeLangDropdown();
    closeMobileLangDropdown();
  });

  // Mobile language dropdown toggle
  const mobileLangBtn = document.getElementById("mobileLangBtn");
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileLangDropdown();
    });
  }

  // Legacy: Language dropdown toggle
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
});

// Initialize plugins
gsap.registerPlugin(ScrollTrigger);

// AOS - lighter on mobile for better performance
const isMobile = window.innerWidth < 768;
AOS.init({
  duration: isMobile ? 400 : 800,
  once: true,
  offset: isMobile ? 20 : 50,
  disable: false,
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

// Hero animations - only if element exists
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  gsap.from(".hero-title", {
    duration: 2,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: "power4.out",
  });
}

// Section animations - DISABLED for better scroll performance
// ScrollTrigger causes touchpad lag, using CSS animations instead
/*
const sections = gsap.utils.toArray("section");
if (sections.length > 0) {
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
}
*/

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

// Service detailed descriptions with HTML formatting - Multi-language
const serviceDetails = {
  uz: {
    "01": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🧾</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Buxgalteriya va Moliyaviy Hisobotlar</h3>
            <p class="text-white/90 text-sm leading-relaxed">Ishonchli va professional tarzda yuritamiz. Siz biznesingizni rivojlantiring, hisob-kitobni esa bizga topshiring!</p>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-list-check text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Xizmatlarimiz</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Buxgalteriya hisobini to'liq yuritish</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Moliyaviy va soliq hisobotlari</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Kompaniyalarni ro'yxatdan o'tkazish</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Ish haqi va majburiy to'lovlar</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Masofaviy (onlayn) buxgalteriya</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Konsalting va maslahatlar</span>
            </div>
          </div>
        </div>

        <!-- Why Us Section -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Nega biz?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">👨‍💼</div>
              <p class="text-sm font-semibold text-gray-800">Tajribali mutaxassislar</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🔒</div>
              <p class="text-sm font-semibold text-gray-800">To'liq maxfiylik</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">⚡</div>
              <p class="text-sm font-semibold text-gray-800">Tezkor xizmat</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🎯</div>
              <p class="text-sm font-semibold text-gray-800">Individual yondashuv</p>
            </div>
          </div>
        </div>

        <!-- Target Audience -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-users text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Kimlar uchun?</h4>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🏢 Yangi kompaniyalar</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">📊 Kichik va o'rta biznes</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">👤 Xususiy tadbirkorlar</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🌍 Xalqaro hamkorlar</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📈 Moliyangizni professional boshqaring!</p>
          <p class="text-white/80 text-sm">Hoziroq buyurtma bering va bepul konsultatsiya oling</p>
        </div>
      </div>
    `,
    "02": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🌍</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Import–Eksport va Brokerlik</h3>
            <p class="text-white/90 text-sm leading-relaxed">Ishonchli hamkoringiz! Biz jarayonlarni soddalashtirib, biznesingiz uchun vaqt va xarajatlarni tejaymiz.</p>
          </div>
        </div>

        <!-- Services -->
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-box text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Brokerlik xizmatlarimiz</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Import–eksport hujjatlarini rasmiylashtirish</p>
                <p class="text-gray-500 text-xs">To'liq hujjat tayyorlash xizmati</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-laptop text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Tender platformalari</p>
                <p class="text-gray-500 text-xs">e-tender, new.coorporation, SPOT, xt-xarid va boshqalar</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-gavel text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Tender jarayonlarini yuritish</p>
                <p class="text-gray-500 text-xs">To'liq qo'llab-quvvatlash va maslahat</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-handshake text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Yetkazib beruvchilar bilan ishlash</p>
                <p class="text-gray-500 text-xs">Hujjatli ishlar va kelishuvlar</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-stamp text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Bojxona va ruxsatnomalar</p>
                <p class="text-gray-500 text-xs">Professional maslahatlar</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-handshake text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Nega Mag'zuna Consult?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-rocket text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Tezkor xizmat</p>
              <p class="text-gray-500 text-xs">Ishonchli va samarali</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Tajribali jamoa</p>
              <p class="text-gray-500 text-xs">Professional brokerlar</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-clock text-amber-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Vaqt tejash</p>
              <p class="text-gray-500 text-xs">Xarajatlarni optimallashtirish</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-trophy text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Yuqori natija</p>
              <p class="text-gray-500 text-xs">Tenderlarda muvaffaqiyat</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📦 Import-eksportni osonlashtiring!</p>
          <p class="text-white/80 text-sm">Hoziroq bog'laning va bepul maslahat oling</p>
        </div>
      </div>
    `,
    "03": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚀</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">IT Xizmatlari va Yechimlar</h3>
            <p class="text-white/90 text-sm leading-relaxed">Biznes jarayonlarini avtomatlashtirish, nazorat qilish va rivojlantirish uchun zamonaviy IT yechimlar taklif qilamiz!</p>
          </div>
        </div>

        <!-- Main Solutions -->
        <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-laptop-code text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Asosiy yechimlarimiz</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-users-cog text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">HRM tizimi</h5>
              <p class="text-gray-500 text-xs">Xodimlar hisobi, ish haqi va faoliyatni boshqarish</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-chart-line text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">CRM tizimi</h5>
              <p class="text-gray-500 text-xs">Mijozlar bazasi va savdo jarayonlari</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fab fa-telegram text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Telegram botlar</h5>
              <p class="text-gray-500 text-xs">Avtomatlashtirilgan muloqot</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-globe text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Veb-saytlar</h5>
              <p class="text-gray-500 text-xs">Professional va zamonaviy</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-shopping-cart text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Internet do'kon</h5>
              <p class="text-gray-500 text-xs">Onlayn savdoni yo'lga qo'yish</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-search text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">SEO optimizatsiya</h5>
              <p class="text-gray-500 text-xs">Google va Yandex'da yuqori o'rin</p>
            </div>
          </div>
        </div>

        <!-- Ready Solutions -->
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-double text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Tayyor yechimlar</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>Bog'chalar uchun</strong> — davomad, to'lovlar va ota-onalar bilan aloqa</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>HRM</strong> — ish haqi, hujjatlar va xodimlar nazorati</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>CRM</strong> — o'quv markazlari va stomatologiya uchun</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>Zakup tizimi</strong> — xaridlarni tezlashtirish</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🔧 Biznesingizni avtomatlashtiring!</p>
          <p class="text-white/80 text-sm">Rivojlanishning eng to'g'ri yo'li</p>
        </div>
      </div>
    `,
    "04": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎓</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Xodimlar Malakasini Oshirish</h3>
            <p class="text-white/90 text-sm leading-relaxed">Bugungi raqobatli bozorda kompaniya muvaffaqiyati xodimlarning bilimi va samaradorligiga bog'liq!</p>
          </div>
        </div>

        <!-- Why Important -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-star text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Malaka oshirishning asosiy foydalari</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-amber-100/50">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📚</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Kasbiy bilim va ko'nikmalarni yangilash</p>
                <p class="text-gray-500 text-xs">Zamonaviy bilimlar bilan ta'minlash</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-amber-100/50">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">🔄</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Yangi texnologiyalarga moslashish</p>
                <p class="text-gray-500 text-xs">Zamonaviy jarayonlarni o'zlashtirish</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-amber-100/50">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📈</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Ish samaradorligini oshirish</p>
                <p class="text-gray-500 text-xs">Yuqori natijalar va unumdorlik</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-amber-100/50">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">👔</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Rahbarlik ko'nikmalarini rivojlantirish</p>
                <p class="text-gray-500 text-xs">Liderlik va boshqaruv</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Training Directions -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-graduation-cap text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Asosiy yo'nalishlar</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-blue-100/50">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-chalkboard-teacher text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Ichki treninglar</p>
              <p class="text-gray-500 text-xs">Amaliy mashg'ulotlar</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-blue-100/50">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Tashqi seminarlar</p>
              <p class="text-gray-500 text-xs">Professional markazlar</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-blue-100/50">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-laptop text-purple-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Onlayn kurslar</p>
              <p class="text-gray-500 text-xs">Coursera, Udemy</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-blue-100/50">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-robot text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Raqamli ko'nikmalar</p>
              <p class="text-gray-500 text-xs">IT, AI, avtomatlashtirish</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Malakali xodim — kuchli biznes!</p>
          <p class="text-white/80 text-sm">Professional yondashuvni tanlang</p>
        </div>
      </div>
    `,
    "05": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🔹</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Litsenziya Olish Xizmati</h3>
            <p class="text-white/90 text-sm leading-relaxed">Jarayonni tez, oson va huquqiy jihatdan to'g'ri o'tkazmoqchimisiz? Biz sizning ishonchli hamkoringizmiz!</p>
          </div>
        </div>

        <!-- Service Areas -->
        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-building text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Xizmat ko'rsatadigan yo'nalishlar</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50">
              <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-xl">🏫</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">O'quv markazlari</p>
                <p class="text-gray-500 text-xs">Malaka oshirish markazlari</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50">
              <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-xl">🏢</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Xususiy maktablar</p>
                <p class="text-gray-500 text-xs">Ta'lim muassasalari</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50">
              <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-xl">🧱</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Qurilish faoliyati</p>
                <p class="text-gray-500 text-xs">Qurilish kompaniyalari</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50">
              <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-xl">📊</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Audit firmalari</p>
                <p class="text-gray-500 text-xs">Moliyaviy audit</p>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50 sm:col-span-2">
              <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-xl">🏥</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Tibbiyot va farmasevtika</p>
                <p class="text-gray-500 text-xs">Tibbiy va dori-darmon tashkilotlari</p>
              </div>
            </div>
          </div>
        </div>

        <!-- What We Do -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-circle text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Biz nima qilamiz?</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Hujjatlarni to'liq tayyorlaymiz</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-eye text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Ruxsatnoma jarayonini boshidan oxirigacha kuzatamiz</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-clock text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Litsenziyani qisqa muddatda olib beramiz</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📲 Vaqtingizni tejang!</p>
          <p class="text-white/80 text-sm">Litsenziyani professionallarga topshiring</p>
        </div>
      </div>
    `,
    "06": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">⚡</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Energiya Auditi</h3>
            <p class="text-white/90 text-sm leading-relaxed">Biznesingizning haqiqiy quvvati — xarajatlarni kamaytirish, samaradorlikni oshirish va qonuniy talablarni bajarish uchun strategik yechim!</p>
          </div>
        </div>

        <!-- Legal Basis -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-balance-scale text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Qonuniy asos</h4>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-blue-100/50">
            <p class="text-gray-700 text-sm"><strong class="text-blue-600">VMQ 690-son qaroriga muvofiq</strong> energiya auditi barcha energiya iste'molchi korxonalar uchun <span class="text-red-600 font-bold">majburiy</span> hisoblanadi.</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-chart-pie text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Nima beradi?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-3 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="text-2xl mb-2">🔍</div>
              <p class="text-sm font-semibold text-gray-800">Energiya yo'qotishlarini aniqlash</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="text-2xl mb-2">🔧</div>
              <p class="text-sm font-semibold text-gray-800">Samarasiz tizimlarni bartaraf etish</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="text-2xl mb-2">💰</div>
              <p class="text-sm font-semibold text-gray-800">Xarajatlarni keskin kamaytirish</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="text-2xl mb-2">📋</div>
              <p class="text-sm font-semibold text-gray-800">Qonunchilikka to'liq moslik</p>
            </div>
          </div>
        </div>

        <!-- Business Benefits -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Biznes uchun foyda</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-yellow-500 text-lg">⚡</span>
              <span class="text-gray-700 text-sm"><strong class="text-amber-600">30–40%</strong> gacha energiya tejaladi</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500 text-lg">💰</span>
              <span class="text-gray-700 text-sm">Xarajatlar kamayadi, <strong class="text-green-600">ROI oshadi</strong></span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-blue-500 text-lg">🏭</span>
              <span class="text-gray-700 text-sm">Barqaror va <strong class="text-blue-600">samarali ishlash</strong></span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-purple-500 text-lg">🌍</span>
              <span class="text-gray-700 text-sm"><strong class="text-purple-600">ESG va brend</strong> imiji yaxshilanadi</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-red-500 text-lg">⚖️</span>
              <span class="text-gray-700 text-sm"><strong class="text-red-600">Jarimalar xavfi</strong> kamayadi</span>
            </div>
          </div>
        </div>

        <!-- Audit Results -->
        <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-file-chart-line text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Audit natijasi</h4>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <i class="fas fa-search text-purple-500 mb-1"></i>
              <p class="text-xs font-medium text-gray-700">Aniq muammolar</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <i class="fas fa-lightbulb text-amber-500 mb-1"></i>
              <p class="text-xs font-medium text-gray-700">Texnik tavsiyalar</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <i class="fas fa-map text-blue-500 mb-1"></i>
              <p class="text-xs font-medium text-gray-700">Yo'l xaritasi</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <i class="fas fa-calculator text-green-500 mb-1"></i>
              <p class="text-xs font-medium text-gray-700">ROI hisoboti</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Energiyani foydaga aylantiring!</p>
          <p class="text-white/80 text-sm">Professional energiya auditini hoziroq buyurtma qiling</p>
        </div>
      </div>
    `,
  },
  ru: {
    "01": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🧾</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Бухгалтерия и Финансовая Отчётность</h3>
            <p class="text-white/90 text-sm leading-relaxed">Ведём надёжно и профессионально. Развивайте свой бизнес, а учёт доверьте нам!</p>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-list-check text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Наши услуги</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Полное ведение бухгалтерии</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Финансовая и налоговая отчётность</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Регистрация компаний</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Расчёт зарплаты и взносов</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Удалённая (онлайн) бухгалтерия</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Консалтинг и консультации</span>
            </div>
          </div>
        </div>

        <!-- Why Us Section -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Почему мы?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">👨‍💼</div>
              <p class="text-sm font-semibold text-gray-800">Опытные специалисты</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🔒</div>
              <p class="text-sm font-semibold text-gray-800">Полная конфиденциальность</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">⚡</div>
              <p class="text-sm font-semibold text-gray-800">Быстрый сервис</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🎯</div>
              <p class="text-sm font-semibold text-gray-800">Индивидуальный подход</p>
            </div>
          </div>
        </div>

        <!-- Target Audience -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-users text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Для кого?</h4>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🏢 Новые компании</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">📊 Малый и средний бизнес</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">👤 Частные предприниматели</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🌍 Международные партнёры</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📈 Управляйте финансами профессионально!</p>
          <p class="text-white/80 text-sm">Закажите сейчас и получите бесплатную консультацию</p>
        </div>
      </div>
    `,
    "02": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🌍</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Импорт–Экспорт и Брокерские Услуги</h3>
            <p class="text-white/90 text-sm leading-relaxed">Ваш надёжный партнёр! Мы упрощаем процессы, экономя ваше время и деньги.</p>
          </div>
        </div>

        <!-- Services -->
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-box text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Брокерские услуги</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Оформление документов импорта-экспорта</p>
                <p class="text-gray-500 text-xs">Полная подготовка документации</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-laptop text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Тендерные площадки</p>
                <p class="text-gray-500 text-xs">e-tender, new.coorporation, SPOT, xt-xarid и другие</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-gavel text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Ведение тендеров</p>
                <p class="text-gray-500 text-xs">Полное сопровождение и консультации</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-stamp text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Таможня и разрешения</p>
                <p class="text-gray-500 text-xs">Профессиональные консультации</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-handshake text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Почему Mag'zuna Consult?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-rocket text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Быстрый сервис</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Опытная команда</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-clock text-amber-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Экономия времени</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-trophy text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Высокий результат</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📦 Упростите импорт-экспорт!</p>
          <p class="text-white/80 text-sm">Свяжитесь сейчас для бесплатной консультации</p>
        </div>
      </div>
    `,
    "03": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚀</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">IT Услуги и Решения</h3>
            <p class="text-white/90 text-sm leading-relaxed">Современные IT-решения для автоматизации, контроля и развития бизнес-процессов!</p>
          </div>
        </div>

        <!-- Main Solutions -->
        <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-laptop-code text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Основные решения</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-users-cog text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">HRM система</h5>
              <p class="text-gray-500 text-xs">Учёт сотрудников и зарплаты</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-chart-line text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">CRM система</h5>
              <p class="text-gray-500 text-xs">База клиентов и продажи</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fab fa-telegram text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Telegram боты</h5>
              <p class="text-gray-500 text-xs">Автоматизация общения</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-globe text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Веб-сайты</h5>
              <p class="text-gray-500 text-xs">Профессионально и современно</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-shopping-cart text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Интернет-магазин</h5>
              <p class="text-gray-500 text-xs">Онлайн продажи</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-search text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">SEO оптимизация</h5>
              <p class="text-gray-500 text-xs">Топ в Google и Yandex</p>
            </div>
          </div>
        </div>

        <!-- Ready Solutions -->
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-double text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Готовые решения</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>Для детсадов</strong> — посещаемость, оплаты и связь с родителями</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>HRM</strong> — зарплата, документы, контроль сотрудников</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>CRM</strong> — для учебных центров и стоматологий</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🔧 Автоматизируйте свой бизнес!</p>
          <p class="text-white/80 text-sm">Правильный путь к развитию</p>
        </div>
      </div>
    `,
    "04": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎓</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Повышение Квалификации Сотрудников</h3>
            <p class="text-white/90 text-sm leading-relaxed">В условиях конкуренции успех компании зависит от знаний и эффективности сотрудников!</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-star text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Основные преимущества</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📚</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Обновление профессиональных знаний</p>
                <p class="text-gray-500 text-xs">Современные навыки и компетенции</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📈</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Повышение эффективности работы</p>
                <p class="text-gray-500 text-xs">Высокие результаты и продуктивность</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">👔</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Развитие лидерских навыков</p>
                <p class="text-gray-500 text-xs">Лидерство и управление</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Training Directions -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-graduation-cap text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Основные направления</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-chalkboard-teacher text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Внутренние тренинги</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Внешние семинары</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-laptop text-purple-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Онлайн курсы</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-robot text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Цифровые навыки</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Квалифицированный сотрудник — сильный бизнес!</p>
          <p class="text-white/80 text-sm">Выберите профессиональный подход</p>
        </div>
      </div>
    `,
    "05": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🔹</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Получение Лицензий</h3>
            <p class="text-white/90 text-sm leading-relaxed">Хотите пройти процесс быстро и юридически грамотно? Мы — ваш надёжный партнёр!</p>
          </div>
        </div>

        <!-- Service Areas -->
        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-building text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Направления услуг</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🏫</span>
              <p class="font-semibold text-gray-800 text-sm">Учебные центры</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🏢</span>
              <p class="font-semibold text-gray-800 text-sm">Частные школы</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🧱</span>
              <p class="font-semibold text-gray-800 text-sm">Строительство</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">📊</span>
              <p class="font-semibold text-gray-800 text-sm">Аудиторские фирмы</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm sm:col-span-2">
              <span class="text-xl">🏥</span>
              <p class="font-semibold text-gray-800 text-sm">Медицина и фармацевтика</p>
            </div>
          </div>
        </div>

        <!-- What We Do -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-circle text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Что мы делаем?</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Полная подготовка документов</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-eye text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Сопровождение от начала до конца</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-clock text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Получение лицензии в кратчайшие сроки</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📲 Экономьте своё время!</p>
          <p class="text-white/80 text-sm">Доверьте лицензирование профессионалам</p>
        </div>
      </div>
    `,
    "06": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">⚡</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Энергоаудит</h3>
            <p class="text-white/90 text-sm leading-relaxed">Реальная сила вашего бизнеса — стратегическое решение для снижения затрат и соответствия требованиям!</p>
          </div>
        </div>

        <!-- Legal Basis -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-balance-scale text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Правовая основа</h4>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm">
            <p class="text-gray-700 text-sm"><strong class="text-blue-600">Согласно ПКМ №690</strong> энергоаудит <span class="text-red-600 font-bold">обязателен</span> для всех энергопотребляющих предприятий.</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-chart-pie text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Что даёт?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <div class="text-2xl mb-2">🔍</div>
              <p class="text-sm font-semibold text-gray-800">Выявление потерь энергии</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <div class="text-2xl mb-2">💰</div>
              <p class="text-sm font-semibold text-gray-800">Резкое снижение затрат</p>
            </div>
          </div>
        </div>

        <!-- Business Benefits -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Выгода для бизнеса</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-yellow-500 text-lg">⚡</span>
              <span class="text-gray-700 text-sm">Экономия энергии до <strong class="text-amber-600">30–40%</strong></span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500 text-lg">💰</span>
              <span class="text-gray-700 text-sm">Снижение затрат, рост <strong class="text-green-600">ROI</strong></span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-purple-500 text-lg">🌍</span>
              <span class="text-gray-700 text-sm">Улучшение <strong class="text-purple-600">ESG и имиджа</strong> бренда</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Превратите энергию в прибыль!</p>
          <p class="text-white/80 text-sm">Закажите профессиональный энергоаудит сейчас</p>
        </div>
      </div>
    `,
  },
  en: {
    "01": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🧾</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Accounting & Financial Reporting</h3>
            <p class="text-white/90 text-sm leading-relaxed">Reliable and professional management. Focus on growing your business while we handle the accounting!</p>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-list-check text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Our Services</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Complete bookkeeping</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Financial & tax reporting</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Company registration</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Payroll & mandatory payments</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Remote (online) accounting</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-blue-100/50">
              <span class="text-green-500 text-lg">✅</span>
              <span class="text-gray-700 text-sm font-medium">Consulting & advisory</span>
            </div>
          </div>
        </div>

        <!-- Why Us Section -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Why Choose Us?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">👨‍💼</div>
              <p class="text-sm font-semibold text-gray-800">Experienced Professionals</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🔒</div>
              <p class="text-sm font-semibold text-gray-800">Full Confidentiality</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">⚡</div>
              <p class="text-sm font-semibold text-gray-800">Fast Service</p>
            </div>
            <div class="text-center p-3 bg-white rounded-xl shadow-sm">
              <div class="text-2xl mb-1">🎯</div>
              <p class="text-sm font-semibold text-gray-800">Individual Approach</p>
            </div>
          </div>
        </div>

        <!-- Target Audience -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-users text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Who Is It For?</h4>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🏢 New Companies</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">📊 Small & Medium Business</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">👤 Private Entrepreneurs</span>
            <span class="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-green-100">🌍 International Partners</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📈 Manage Your Finances Professionally!</p>
          <p class="text-white/80 text-sm">Order now and get a free consultation</p>
        </div>
      </div>
    `,
    "02": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🌍</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Import–Export & Brokerage</h3>
            <p class="text-white/90 text-sm leading-relaxed">Your reliable partner! We simplify processes, saving your time and money.</p>
          </div>
        </div>

        <!-- Services -->
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-box text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Brokerage Services</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Import-export documentation</p>
                <p class="text-gray-500 text-xs">Complete document preparation</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-laptop text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Tender platforms</p>
                <p class="text-gray-500 text-xs">e-tender, new.coorporation, SPOT, xt-xarid and more</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-gavel text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Tender management</p>
                <p class="text-gray-500 text-xs">Full support and consultation</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-indigo-100/50">
              <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fas fa-stamp text-indigo-600 text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Customs & permits</p>
                <p class="text-gray-500 text-xs">Professional consultations</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-handshake text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Why Mag'zuna Consult?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-rocket text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Fast Service</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Experienced Team</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-clock text-amber-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Time Saving</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center border border-green-100/50">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-trophy text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">High Success Rate</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📦 Simplify Your Import-Export!</p>
          <p class="text-white/80 text-sm">Contact us now for a free consultation</p>
        </div>
      </div>
    `,
    "03": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚀</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">IT Services & Solutions</h3>
            <p class="text-white/90 text-sm leading-relaxed">Modern IT solutions for automating, controlling, and developing your business processes!</p>
          </div>
        </div>

        <!-- Main Solutions -->
        <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-laptop-code text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Main Solutions</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-users-cog text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">HRM System</h5>
              <p class="text-gray-500 text-xs">Employee & payroll management</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-chart-line text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">CRM System</h5>
              <p class="text-gray-500 text-xs">Customer base & sales</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fab fa-telegram text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Telegram Bots</h5>
              <p class="text-gray-500 text-xs">Automated communication</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-globe text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">Websites</h5>
              <p class="text-gray-500 text-xs">Professional & modern</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-shopping-cart text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">E-Commerce</h5>
              <p class="text-gray-500 text-xs">Online sales setup</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-violet-100/50">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3">
                <i class="fas fa-search text-white"></i>
              </div>
              <h5 class="font-bold text-gray-800 text-sm mb-1">SEO Optimization</h5>
              <p class="text-gray-500 text-xs">Top Google & Yandex rankings</p>
            </div>
          </div>
        </div>

        <!-- Ready Solutions -->
        <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-double text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Ready Solutions</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>For Kindergartens</strong> — attendance, payments & parent communication</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>HRM</strong> — payroll, documents & employee control</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500">✅</span>
              <span class="text-gray-700 text-sm"><strong>CRM</strong> — for education centers & dental clinics</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🔧 Automate Your Business!</p>
          <p class="text-white/80 text-sm">The right path to growth</p>
        </div>
      </div>
    `,
    "04": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🎓</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Employee Training & Development</h3>
            <p class="text-white/90 text-sm leading-relaxed">In today's competitive market, company success depends on employee knowledge and efficiency!</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-star text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Key Benefits</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📚</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Update professional knowledge</p>
                <p class="text-gray-500 text-xs">Modern skills and competencies</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">📈</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Increase work efficiency</p>
                <p class="text-gray-500 text-xs">High results and productivity</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-amber-600">👔</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Develop leadership skills</p>
                <p class="text-gray-500 text-xs">Leadership and management</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Training Directions -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-graduation-cap text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Main Directions</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-chalkboard-teacher text-blue-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Internal Training</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-users text-green-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">External Seminars</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-laptop text-purple-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Online Courses</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm text-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i class="fas fa-robot text-red-600"></i>
              </div>
              <p class="font-semibold text-gray-800 text-sm">Digital Skills</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Qualified Staff = Strong Business!</p>
          <p class="text-white/80 text-sm">Choose the professional approach</p>
        </div>
      </div>
    `,
    "05": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🔹</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Licensing Services</h3>
            <p class="text-white/90 text-sm leading-relaxed">Want to complete the process quickly and legally? We are your reliable partner!</p>
          </div>
        </div>

        <!-- Service Areas -->
        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-building text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Service Areas</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🏫</span>
              <p class="font-semibold text-gray-800 text-sm">Training Centers</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🏢</span>
              <p class="font-semibold text-gray-800 text-sm">Private Schools</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">🧱</span>
              <p class="font-semibold text-gray-800 text-sm">Construction</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <span class="text-xl">📊</span>
              <p class="font-semibold text-gray-800 text-sm">Audit Firms</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm sm:col-span-2">
              <span class="text-xl">🏥</span>
              <p class="font-semibold text-gray-800 text-sm">Medical & Pharmaceutical</p>
            </div>
          </div>
        </div>

        <!-- What We Do -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-check-circle text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">What We Do?</h4>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-alt text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Complete document preparation</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-eye text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">End-to-end process support</p>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-clock text-white text-sm"></i>
              </div>
              <p class="text-gray-700 text-sm font-medium">Fast license acquisition</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">📲 Save Your Time!</p>
          <p class="text-white/80 text-sm">Trust licensing to professionals</p>
        </div>
      </div>
    `,
    "06": `
      <div class="space-y-5">
        <!-- Hero Banner -->
        <div class="relative bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-5 text-white overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">⚡</span>
              <span class="text-white/80 text-sm font-medium">Mag'zuna Consult</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Energy Audit</h3>
            <p class="text-white/90 text-sm leading-relaxed">The real power of your business — a strategic solution for reducing costs and meeting legal requirements!</p>
          </div>
        </div>

        <!-- Legal Basis -->
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-balance-scale text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Legal Basis</h4>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm">
            <p class="text-gray-700 text-sm"><strong class="text-blue-600">According to Resolution No. 690</strong>, energy audit is <span class="text-red-600 font-bold">mandatory</span> for all energy-consuming enterprises.</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-chart-pie text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">What Does It Provide?</h4>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <div class="text-2xl mb-2">🔍</div>
              <p class="text-sm font-semibold text-gray-800">Identify energy losses</p>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-center">
              <div class="text-2xl mb-2">💰</div>
              <p class="text-sm font-semibold text-gray-800">Significantly reduce costs</p>
            </div>
          </div>
        </div>

        <!-- Business Benefits -->
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-sm"></i>
            </div>
            <h4 class="font-bold text-gray-900">Business Benefits</h4>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-yellow-500 text-lg">⚡</span>
              <span class="text-gray-700 text-sm">Save up to <strong class="text-amber-600">30–40%</strong> energy</span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-green-500 text-lg">💰</span>
              <span class="text-gray-700 text-sm">Reduce costs, increase <strong class="text-green-600">ROI</strong></span>
            </div>
            <div class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <span class="text-purple-500 text-lg">🌍</span>
              <span class="text-gray-700 text-sm">Improve <strong class="text-purple-600">ESG & brand</strong> image</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-4 text-center">
          <p class="text-white font-bold text-lg mb-1">🚀 Turn Energy Into Profit!</p>
          <p class="text-white/80 text-sm">Order professional energy audit now</p>
        </div>
      </div>
    `,
  },
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

  // Get translated service title based on service number
  const serviceNum = parseInt(number, 10); // Convert '01' to 1
  const serviceKey = `service_${serviceNum}_title`;
  const translatedTitle = translations[currentLanguage]?.[serviceKey] || title;

  // Populate DESKTOP
  if (desktopElements.number)
    desktopElements.number.textContent = formattedNumber;
  if (desktopElements.titleLeft)
    desktopElements.titleLeft.textContent = translatedTitle;
  if (desktopElements.titleRight)
    desktopElements.titleRight.textContent = translatedTitle;
  if (desktopElements.image) {
    desktopElements.image.src = imageUrl;
    desktopElements.image.alt = translatedTitle;
  }
  if (desktopElements.serviceName)
    desktopElements.serviceName.value = translatedTitle;
  if (desktopElements.serviceNumber)
    desktopElements.serviceNumber.value = number;

  // Use detailed description if available (language-specific)
  const langDetails = serviceDetails[currentLanguage] || serviceDetails["uz"];
  if (desktopElements.desc) {
    if (langDetails && langDetails[formattedNumber]) {
      desktopElements.desc.innerHTML = langDetails[formattedNumber];
    } else {
      desktopElements.desc.textContent = description;
    }
  }

  // Populate MOBILE
  if (mobileElements.number)
    mobileElements.number.textContent = formattedNumber;
  if (mobileElements.title) mobileElements.title.textContent = translatedTitle;
  if (mobileElements.image) {
    mobileElements.image.src = imageUrl;
    mobileElements.image.alt = translatedTitle;
  }
  if (mobileElements.serviceName)
    mobileElements.serviceName.value = translatedTitle;
  if (mobileElements.serviceNumber) mobileElements.serviceNumber.value = number;

  // Use detailed description for mobile (language-specific)
  if (mobileElements.desc) {
    if (langDetails && langDetails[formattedNumber]) {
      mobileElements.desc.innerHTML = langDetails[formattedNumber];
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

  // CRITICAL: Kill ALL GSAP animations and disable ScrollTrigger
  if (typeof gsap !== "undefined") {
    gsap.killTweensOf("*");
  }
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  // Initialize smooth scroll for modal
  setTimeout(() => {
    if (typeof window.initModalSmoothScroll === "function") {
      window.initModalSmoothScroll();
    }
  }, 100);

  // Apply current language translations to modal
  setLanguage(currentLanguage);
}

// Close Service Modal
function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  modal.classList.add("hide");
  modal.classList.remove("show");

  // Destroy smooth scroll
  if (typeof window.destroyModalSmoothScroll === "function") {
    window.destroyModalSmoothScroll();
  }

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

// ============================================
// MODAL SCROLL - PURE NATIVE (NO JS)
// ============================================

// Empty functions for compatibility
window.initModalSmoothScroll = () => {};
window.destroyModalSmoothScroll = () => {};
window.resetModalScroll = () => {
  const modal = document.getElementById("serviceModal");
  if (modal) {
    const scrollArea = modal.querySelector(".desktop-scroll-area");
    if (scrollArea) scrollArea.scrollTop = 0;
  }
};
