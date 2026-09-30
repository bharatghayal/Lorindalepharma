import { StatItem, HighlightCard, ValueCard, ServiceCard, ProductItem, PartnerItem, TeamMember, OfficeLocation } from "./types";

export const STATS_DATA: StatItem[] = [
  {
    number: "120",
    suffix: "+",
    label: {
      en: "Healthcare Products",
      mm: "ဆေးဝါးနှင့် ကျန်းမာရေး ထုတ်ကုန်များ"
    }
  },
  {
    number: "100",
    suffix: "%",
    label: {
      en: "FDA Compliance Rate",
      mm: "FDA စည်းကမ်းလိုက်နာမှုနှုန်း"
    }
  },
  {
    number: "2019",
    suffix: "",
    label: {
      en: "Year Established",
      mm: "စတင် တည်ထောင်သည့်နှစ်"
    }
  },
  {
    number: "15",
    suffix: "k+",
    label: {
      en: "HCPs Engaged",
      mm: "ကျန်းမာရေး ပညာရှင်များနှင့် ပူးပေါင်းဆောင်ရွက်မှု"
    }
  }
];

export const HIGHLIGHTS_DATA: HighlightCard[] = [
  {
    title: {
      en: "Nationwide Distribution",
      mm: "တစ်နိုင်ငံလုံး ဖြန့်ဖြူးမှုစနစ်"
    },
    description: {
      en: "Complete logistical coverage across Myanmar from our Yangon headquarters, ensuring safe and timely cold-chain delivery.",
      mm: "ရန်ကုန်ရုံးချုပ်မှတစ်ဆင့် မြန်မာနိုင်ငံတစ်ဝှမ်းသို့ အချိန်မီနှင့် ဘေးကင်းလုံခြုံသော အအေးလမ်းကြောင်းဖြင့် ဆေးဝါးဖြန့်ဖြူးပေးနေပါသည်။"
    }
  },
  {
    title: {
      en: "Regulatory Expertise",
      mm: "စည်းမျဉ်းစည်းကမ်း ကျွမ်းကျင်မှု"
    },
    description: {
      en: "Expert regulatory affairs division navigating complex FDA guidelines for fast, systematic, and compliant registrations.",
      mm: "မြန်မာနိုင်ငံ FDA လမ်းညွှန်ချက်များနှင့်အညီ လျင်မြန်စနစ်တကျနှင့် တရားဝင် မှတ်ပုံတင်နိုင်ရန် ကျွမ်းကျင်စွာ ဆောင်ရွက်ပေးပါသည်။"
    }
  },
  {
    title: {
      en: "Healthcare Innovation",
      mm: "ကျန်းမာရေး ဆန်းသစ်တီထွင်မှု"
    },
    description: {
      en: "Pioneering the introduction of advanced collagen wound care solutions and top-tier nephrology treatments in Myanmar.",
      mm: "မြန်မာနိုင်ငံတွင် အဆင့်မြင့် ကော်လဂျင် အနာဂရုစိုက်မှုစနစ်နှင့် ကျောက်ကပ်ရောဂါ ကုသမှုနည်းပညာအသစ်များကို ဦးဆောင် မိတ်ဆက်ပေးလျက်ရှိပါသည်။"
    }
  },
  {
    title: {
      en: "Strategic International Partnerships",
      mm: "နိုင်ငံတကာ မဟာဗျူဟာမြောက် ပူးပေါင်းဆောင်ရွက်မှု"
    },
    description: {
      en: "Partnering with trusted, WHO-GMP certified manufacturers worldwide to bring globally recognized brands to Myanmar.",
      mm: "ကမ္ဘာတစ်ဝှမ်းရှိ ယုံကြည်စိတ်ချရသော WHO-GMP အသိအမှတ်ပြု ဆေးဝါးထုတ်လုပ်သူများနှင့် ချိတ်ဆက်ကာ အရည်အသွေးမြင့် ကုန်ပစ္စည်းများကို တင်သွင်းပါသည်။"
    }
  }
];

export const CORE_VALUES_DATA: ValueCard[] = [
  {
    title: { en: "Innovation", mm: "ဆန်းသစ်တီထွင်မှု" },
    description: {
      en: "Continuously introducing advanced healthcare solutions that improve patient outcomes across Myanmar.",
      mm: "လူနာများ၏ ကျန်းမာရေးကို ပိုမိုကောင်းမွန်စေမည့် ခေတ်မီ ဆေးဝါးနှင့် ကျန်းမာရေး ဖြေရှင်းချက်များကို စဥ်ဆက်မပြတ် မိတ်ဆက်ပေးခြင်း။"
    },
    iconName: "Sparkles",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: { en: "Quality", mm: "အရည်အသွေး" },
    description: {
      en: "Maintaining the highest international standards across our entire product portfolio, services, and operations.",
      mm: "ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုများနှင့် လုပ်ငန်းလည်ပတ်မှုအားလုံးတွင် အဆင့်မြင့် နိုင်ငံတကာ စံချိန်စံညွှန်းများကို ထိန်းသိမ်းခြင်း။"
    },
    iconName: "ShieldCheck",
    color: "from-teal-500 to-emerald-500"
  },
  {
    title: { en: "Integrity", mm: "ရိုးသားဖြောင့်မတ်မှု" },
    description: {
      en: "Building lasting trust through absolute transparency, ethics, and professional accountability.",
      mm: "ပွင့်လင်းမြင်သာမှု၊ ကျင့်ဝတ်စံနှုန်းများနှင့် တာဝန်ယူမှုအပြည့်ဖြင့် ရေရှည် ယုံကြည်မှုကို တည်ဆောက်ခြင်း။"
    },
    iconName: "FileCheck",
    color: "from-blue-600 to-sky-500"
  },
  {
    title: { en: "Respect", mm: "အပြန်အလှန် လေးစားမှု" },
    description: {
      en: "Valuing patients, healthcare professionals, regional partners, and our diverse workspace community.",
      mm: "လူနာများ၊ ကျန်းမာရေး ပညာရှင်များ၊ မိတ်ဖက်အဖွဲ့အစည်းများနှင့် ဝန်ထမ်းများအားလုံး၏ တန်ဖိုးကို လေးစားတန်ဖိုးထားခြင်း။"
    },
    iconName: "Heart",
    color: "from-rose-500 to-pink-500"
  },
  {
    title: { en: "Teamwork", mm: "စုပေါင်းစွမ်းအား" },
    description: {
      en: "Working collaboratively to achieve excellence, synergy, and sustainable growth across our entire network.",
      mm: "အဖွဲ့အစည်းတစ်ခုလုံး တိုးတက်ရန်နှင့် ထူးချွန်သော ဝန်ဆောင်မှုများ ပေးနိုင်ရန် ညီညွတ်စွာ လက်တွဲဆောင်ရွက်ခြင်း။"
    },
    iconName: "Users",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: { en: "Leadership", mm: "ဦးဆောင်မှု" },
    description: {
      en: "Driving positive regulatory, clinical, and logistical change within Myanmar's rapidly evolving healthcare sector.",
      mm: "မြန်မာနိုင်ငံ၏ လျင်မြန်စွာ ပြောင်းလဲနေသော ကျန်းမာရေးကဏ္ဍတွင် စံပြဖြစ်စေမည့် အပြုသဘောဆောင်သော ဦးဆောင်မှုများကို ပြုလုပ်ခြင်း။"
    },
    iconName: "Award",
    color: "from-indigo-600 to-purple-600"
  }
];

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: "regulatory",
    title: { en: "Regulatory Affairs & Registration", mm: "မှတ်ပုံတင်ခြင်းနှင့် စည်းမျဉ်းရေးရာ ဝန်ဆောင်မှု" },
    description: {
      en: "Expert navigation of Myanmar FDA guidelines for efficient, systematic registration and market entry compliance.",
      mm: "မြန်မာနိုင်ငံ FDA လမ်းညွှန်ချက်များနှင့်အညီ စနစ်တကျ မှတ်ပုံတင်ခြင်းနှင့် စျေးကွက်ဝင်ရောက်နိုင်မှု စည်းကမ်းချက်များကို စေ့စပ်သေချာစွာ လုပ်ဆောင်ပေးခြင်း။"
    },
    details: {
      en: [
        "Full dossier preparation and submission in CTD format.",
        "Regulatory strategy formulation for pharmaceutical and medical devices.",
        "Liaising directly with Ministry of Health and Myanmar FDA authorities.",
        "Post-marketing surveillance and license renewals management.",
        "Compliance checks for food supplements, pharma cosmetics, and dental devices."
      ],
      mm: [
        "CTD ပုံစံဖြင့် စာရွက်စာတမ်းအပြည့်အစုံ ပြင်ဆင်တင်ပြပေးခြင်း။",
        "ဆေးဝါးနှင့် ဆေးဘက်ဆိုင်ရာပစ္စည်းများအတွက် စည်းမျဉ်းမဟာဗျူဟာရေးဆွဲခြင်း။",
        "ကျန်းမာရေးဝန်ကြီးဌာနနှင့် မြန်မာနိုင်ငံ FDA တို့နှင့် တိုက်ရိုက်ဆက်သွယ်ဆောင်ရွက်ခြင်း။",
        "စျေးကွက်တင်ပြီးနောက် စောင့်ကြည့်စစ်ဆေးမှုနှင့် လိုင်စင်သက်တမ်းတိုးခြင်း လုပ်ငန်းများ။",
        "အာဟာရဖြည့်စွက်စာ၊ ဆေးဝါးအလှကုန်နှင့် သွားဘက်ဆိုင်ရာပစ္စည်းများအတွက် စည်းကမ်းစစ်ဆေးခြင်း။"
      ]
    },
    iconName: "FileSpreadsheet"
  },
  {
    id: "importation",
    title: { en: "Importation & Supply Chain", mm: "တင်သွင်းခြင်းနှင့် ထောက်ပံ့ပို့ဆောင်ရေး" },
    description: {
      en: "Licensed pharmaceutical importer with full regulatory approvals, FDA-approved and GMP-compliant warehousing, and temperature-controlled logistics connecting healthcare providers nationwide.",
      mm: "တရားဝင် စည်းမျဉ်းစည်းကမ်းဆိုင်ရာ ခွင့်ပြုချက်အပြည့်အစုံဖြင့် ဆေးဝါးတင်သွင်းခြင်း၊ FDA နှင့် GMP စံချိန်မီ ဂိုဒေါင်များတွင် သိုလှောင်ခြင်းနှင့် တစ်နိုင်ငံလုံးသို့ အပူချိန်ထိန်း ဖြန့်ဖြူးခြင်း။"
    },
    details: {
      en: [
        "Licensed pharmaceutical importer with full regulatory approvals.",
        "FDA‑approved and GMP‑compliant warehouse facilities for safe storage.",
        "Temperature‑controlled logistics ensuring product stability during transit.",
        "Secure inventory management with real‑time tracking and audit trails.",
        "Validated packaging and dispatch protocols to maintain product integrity.",
        "Regulatory compliance across multiple jurisdictions.",
        "Efficient distribution network connecting hospitals, pharmacies, and healthcare providers.",
        "Dedicated quality assurance team monitoring every stage of supply movement."
      ],
      mm: [
        "တရားဝင် စည်းမျဉ်းစည်းကမ်းဆိုင်ရာ ခွင့်ပြုချက်အပြည့်အစုံဖြင့် ဆေးဝါးတင်သွင်းခွင့်လိုင်စင် ရရှိထားခြင်း။",
        "ဘေးကင်းလုံခြုံစွာ သိုလှောင်နိုင်ရန် FDA အသိအမှတ်ပြုနှင့် GMP စံချိန်စံညွှန်းပြည့်မီသော ဂိုဒေါင်များ။",
        "သယ်ယူပို့ဆောင်စဉ်အတွင်း ဆေးဝါးများ အရည်အသွေးမပျက်စေရန် အပူချိန်ထိန်း ထောက်ပံ့ပို့ဆောင်ရေးစနစ်။",
        "အချိန်နှင့်တပြေးညီ ခြေရာခံစနစ်နှင့် စာရင်းစစ်ဆေးမှုများပါဝင်သော လုံခြုံသည့် ကုန်ပစ္စည်းစီမံခန့်ခွဲမှု။",
        "ဆေးဝါးအရည်အသွေး မပြောင်းလဲစေရန် တိကျစွာစစ်ဆေးထားသော ထုပ်ပိုးခြင်းနှင့် ဖြန့်ဝေခြင်းစနစ်။",
        "သက်ဆိုင်ရာ စည်းမျဉ်းစည်းကမ်းနှင့် ဥပဒေရေးရာများကို တိကျစွာ လိုက်နာဆောင်ရွက်ခြင်း။",
        "ဆေးရုံများ၊ ဆေးဆိုင်များနှင့် ကျန်းမာရေးစောင့်ရှောက်မှုပေးသူများကို ချိတ်ဆက်ပေးသော ထိရောက်သည့် ဖြန့်ဖြူးရေးကွန်ရက်။",
        "ထောက်ပံ့ပို့ဆောင်မှု အဆင့်တိုင်းကို စဉ်ဆက်မပြတ် စောင့်ကြည့်စစ်ဆေးသည့် သီးသန့် အရည်အသွေးအာမခံအဖွဲ့။"
      ]
    },
    iconName: "Truck"
  },
  {
    id: "marketing",
    title: { en: "Sales & Marketing Division", mm: "အရောင်းနှင့် စျေးကွက်မြှင့်တင်ရေး" },
    description: {
      en: "Dynamic scientific brand development and strategic HCP engagement programs that optimize medical awareness.",
      mm: "ဆရာဝန်များနှင့် ကျန်းမာရေးပညာရှင်များသို့ ဆေးဝါးဆိုင်ရာ အချက်အလက်များနှင့် ဗဟုသုတများကို ထိရောက်စွာ မျှဝေမြှင့်တင်ပေးခြင်း။"
    },
    details: {
      en: [
        "Evidence-based medical detailing to physicians, clinics, and major hospitals.",
        "Organization of Continuing Medical Education (CME) seminars and expert workshops.",
        "Comprehensive market research and pharmaceutical product positioning.",
        "Multichannel digital marketing and scientific brand development.",
        "Strategic relationship building with nationwide key opinion leaders (KOLs)."
      ],
      mm: [
        "ဆရာဝန်များ၊ ဆေးခန်းများနှင့် ဆေးရုံကြီးများသို့ အထောက်အထားအခြေပြု ဆေးဘက်ဆိုင်ရာ ရှင်းလင်းတင်ပြခြင်း။",
        "အဆက်မပြတ် ဆေးဘက်ဆိုင်ရာ ပညာပေး (CME) ဆွေးနွေးပွဲများနှင့် ဝေါ့ရှော့ပ်များ ကျင်းပခြင်း။",
        "စျေးကွက်သုတေသန ပြုလုပ်ခြင်းနှင့် ဆေးဝါးထုတ်ကုန်များကို စျေးကွက်နေရာချခြင်း။",
        "ခေတ်မီ ဆေးဘက်ဆိုင်ရာ ဒီဂျစ်တယ် စျေးကွက်မြှင့်တင်ရေး လုပ်ဆောင်ခြင်း။"
      ]
    },
    iconName: "TrendingUp"
  },
  {
    id: "training",
    title: { en: "Training & Clinical Development", mm: "သင်တန်းနှင့် ဆေးဘက်ဆိုင်ရာ ဖွံ့ဖြိုးတိုးတက်ရေး" },
    description: {
      en: "Continuous investment in employee expertise, scientific competence, and medical expert-led workshops.",
      mm: "ဝန်ထမ်းများ၏ ဆေးဝါးပညာရပ်ဆိုင်ရာ ကျွမ်းကျင်မှုနှင့် အရည်အသွေးများကို စဥ်ဆက်မပြတ် လေ့ကျင့်သင်ကြား မြှင့်တင်ပေးခြင်း။"
    },
    details: {
      en: [
        "Ongoing scientific training modules for field forces.",
        "Interactive workshops facilitated by local and international medical experts.",
        "Soft skills, leadership tracks, and modern medical compliance education.",
        "Joint research awareness with healthcare institutions on product efficacy.",
        "Collaborative scientific symposiums on advanced clinical wound care and nephrology."
      ],
      mm: [
        "အရောင်းကိုယ်စားလှယ်များအတွက် အဆက်မပြတ် ဆေးဝါးဗဟုသုတ သင်တန်းများ ပေးခြင်း။",
        "ပြည်တွင်းပြည်ပ ကျန်းမာရေး ကျွမ်းကျင်ပညာရှင်များ ဦးဆောင်သော အပြန်အလှန်ဆွေးနွေးမှု ဝေါ့ရှော့ပ်များ။",
        "ဆက်ဆံရေးစွမ်းရည်၊ ခေါင်းဆောင်မှုနှင့် ဆေးဝါးကျင့်ဝတ် လိုက်နာမှုဆိုင်ရာ ပညာပေးခြင်း။",
        "ဆေးဘက်ဆိုင်ရာ အဆင့်မြင့် အနာစောင့်ရှောက်မှုနှင့် ကျောက်ကပ်ရောဂါ ကုသမှုဆိုင်ရာ သိပ္ပံနည်းကျ စာတမ်းဖတ်ပွဲများ။"
      ]
    },
    iconName: "GraduationCap"
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "nano-silver-collagen",
    name: {
      en: "Nano Crystalline Silver in Collagen Base",
      mm: "Nano Crystalline Silver in Collagen Base (ငွေနန်နိုပါဝင်သော ကော်လဂျင် အနာကျက်ဆေး)"
    },
    category: "Advanced Wound Care",
    description: {
      en: "Advanced antimicrobial wound dressing combining nanocrystalline silver with a bioactive collagen base to accelerate tissue repair, prevent infection, and promote rapid healing in acute and chronic wounds.",
      mm: "ငွေနန်နို (Nano Crystalline Silver) နှင့် ဇီဝကော်လဂျင်တို့ကို ပေါင်းစပ်ထားပြီး နာတာရှည်အနာများ၊ မီးလောင်ဒဏ်ရာများနှင့် ခွဲစိတ်အနာများတွင် ပိုးမွှားများကို ကာကွယ်ကာ တစ်ရှူးအသစ်များ လျင်မြန်စွာ ဖြစ်ပေါ်စေသော အဆင့်မြင့် အနာကျက်ဆေး။"
    },
    specifications: {
      en: [
        "Active Formulation: Nano Crystalline Silver in Bioactive Collagen Base",
        "Indications: Non-healing diabetic ulcers, 1st & 2nd degree burns, pressure sores, surgical wounds",
        "Antimicrobial Action: Sustained broad-spectrum antimicrobial barrier",
        "Usage: Apply directly to cleaned wound bed under medical supervision",
        "Storage: Store in a cool, dry place"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - ဇီဝကော်လဂျင်အခြေခံ ငွေနန်နိုပိုးသတ်ပစ္စည်း (Nano Crystalline Silver)",
        "အညွှန်း - ဆီးချိုအနာ၊ မီးလောင်ဒဏ်ရာ၊ ဖိမိသောအနာနှင့် ခွဲစိတ်ဒဏ်ရာများအတွက်",
        "အာနိသင် - ဘက်တီးရီးယားပိုးမွှားများကို ရေရှည်ကာကွယ်ပေးပြီး အနာကျက်မြန်စေခြင်း",
        "သုံးစွဲပုံ - ဆေးဘက်ဆိုင်ရာ ညွှန်ကြားချက်အတိုင်း အနာပေါ်သို့ တိုက်ရိုက်အသုံးပြုရန်",
        "သိုလှောင်ပုံ - အေးမြခြောက်သွေ့သော နေရာတွင် သိမ်းဆည်းရန်"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/15-nRHHNzxdJAOnsgMkRzqjiVx2uwmxkj",
    badge: {
      en: "Antimicrobial Collagen",
      mm: "ငွေနန်နိုကော်လဂျင်"
    }
  },
  {
    id: "tacmedi-1",
    name: {
      en: "Tacmedi 1 (Tacrolimus Capsules USP 1mg)",
      mm: "Tacmedi 1 (ကိုယ်ခံအားထိန်းညှိ ကျောက်ကပ်အစားထိုးကုသမှုဆေး ၁ မီလီဂရမ်)"
    },
    category: "Nephrology Products",
    description: {
      en: "Highly effective immunosuppressant therapy formulated with Tacrolimus USP (1mg), vital for the prophylaxis of organ rejection in patients receiving allogeneic kidney, liver, or heart transplants.",
      mm: "ကျောက်ကပ်၊ အသည်း သို့မဟုတ် နှလုံး အစားထိုးကုသမှုခံယူထားသော လူနာများတွင် ကိုယ်ခံအားစနစ်မှ အင်္ဂါသစ်ကို ငြင်းပယ်ခြင်းမရှိစေရန် တားဆီးပေးသော ထိရောက်မှုမြင့်မားသည့် ကိုယ်ခံအားထိန်းညှိဆေးဝါး။"
    },
    specifications: {
      en: [
        "Active Ingredient: Tacrolimus USP 1 mg",
        "Indications: Prophylaxis of organ rejection in kidney, liver, or heart transplant recipients",
        "Usage: Administered twice daily as prescribed by specialist",
        "Packaging: 3 x 10 Capsules per box",
        "Storage: Store in dry place below 25°C, protect from light"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Tacrolimus USP ၁ မီလီဂရမ်",
        "အညွှန်း - အစားထိုးကျောက်ကပ်၊ အသည်း သို့မဟုတ် နှလုံး ငြင်းပယ်ခြင်းကို ကာကွယ်ရန်",
        "သုံးစွဲပုံ - အထူးကုဆရာဝန် ညွှန်ကြားချက်အတိုင်း တိကျစွာ သုံးစွဲရန်",
        "ထုပ်ပိုးပုံ - ဆေးတောင့် ၃၀ ပါရှိသော ဘူး"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1Uf1WitOtakrftYahssiE_GyKlJ1ldaaV",
    badge: {
      en: "Transplant Essential",
      mm: "အဓိကအစားထိုးကုဆေး"
    }
  },
  {
    id: "collofiber",
    name: {
      en: "Collofiber (Type-I Collagen Particles)",
      mm: "Collofiber (အမျိုးအစား ၁ ကော်လဂျင် အနာကျက်မှုန့်)"
    },
    category: "Advanced Wound Care",
    description: {
      en: "Advanced sterile Type-I collagen particles that maintain a moist wound environment, recruit healing cells, and accelerate tissue regeneration in non-healing wounds, ulcers, and burns.",
      mm: "နာတာရှည်မကျက်သောအနာများ၊ ဆီးချိုအနာများ၊ ဖိမိသောအနာများနှင့် မီးလောင်ဒဏ်ရာများတွင် တစ်ရှူးအသစ်များ အမြန်ဆုံးပြန်လည်ဖြစ်ထွန်းစေရန် လုပ်ဆောင်ပေးသော ပိုးသတ်ပြီးသား အမျိုးအစား ၁ ကော်လဂျင်အမှုန့်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Sterile Pure Type-I Collagen Particles",
        "Indications: Diabetic ulcers, pressure sores, venous ulcers, deep wounds, donor sites",
        "Usage: Apply directly to clean wound bed as directed",
        "Packaging: 5 ml vials x 18 per pack",
        "Storage: Store in cool dry place, do not freeze"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - ပိုးသတ်ပြီးသား သန့်စင်သော အမျိုးအစား ၁ ကော်လဂျင်အမှုန့်",
        "အညွှန်း - ဆီးချိုအနာ၊ ဖိမိသောအနာ၊ သွေးပြန်ကြောပိတ်အနာနှင့် ခွဲစိတ်အနာနက်များ",
        "သုံးစွဲပုံ - ဒဏ်ရာကို သန့်စင်ပြီးနောက် တိုက်ရိုက်ဖြန်းပေးရန်",
        "ထုပ်ပိုးပုံ - ၅ မီလီလီတာ ဖန်ပြွန်ဘူး ၁၈ ဘူး"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/16b4zRn7zZCc8L7ZC73oHVoVtE2oxum27",
    badge: {
      en: "Tissue Regeneration",
      mm: "တစ်ရှူးပြန်လည်ဖြစ်ပေါ်စေခြင်း"
    }
  },
  {
    id: "tacmedi-05",
    name: {
      en: "Tacmedi 0.5 (Tacrolimus Capsules USP 0.5mg)",
      mm: "Tacmedi 0.5 (ကိုယ်ခံအားထိန်းညှိ ကျောက်ကပ်အစားထိုးကုသမှုဆေး ၀.၅ မီလီဂရမ်)"
    },
    category: "Nephrology Products",
    description: {
      en: "Low-dose immunosuppressant formulated with Tacrolimus USP (0.5mg), designed for precise maintenance dosing and individual patient titration in post-transplant care.",
      mm: "ကျောက်ကပ်၊ အသည်း သို့မဟုတ် နှလုံး အစားထိုးကုသမှုအပြီး ဆေးပမာဏကို အတိအကျ ချိန်ညှိထိန်းသိမ်းရန်အတွက် ထုတ်လုပ်ထားသော အစွမ်းထက် ကိုယ်ခံအားထိန်းညှိဆေးဝါး (၀.၅ မီလီဂရမ်)။"
    },
    specifications: {
      en: [
        "Active Ingredient: Tacrolimus USP 0.5 mg",
        "Indications: Precise dose titration and maintenance therapy for transplant recipients",
        "Usage: Dose adjusted based on blood trough levels",
        "Packaging: 3 x 10 Capsules per box",
        "Storage: Store below 25°C, protect from moisture"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Tacrolimus USP ၀.၅ မီလီဂရမ်",
        "အညွှန်း - ဆေးပမာဏအနုစိတ် ချိန်ညှိရန်နှင့် ရေရှည်ထိန်းသိမ်းကုသရန်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားသည့်အတိုင်း သွေးတွင်းဆေးပမာဏ တိုင်းတာ၍ သုံးစွဲရန်",
        "ထုပ်ပိုးပုံ - ဆေးတောင့် ၃၀ ပါရှိသော ဘူး"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1gM7VVk-wCEWwcb8XbbRnl5tKo5zCH1xa",
    badge: {
      en: "Precision Titration",
      mm: "တိကျသောဆေးပမာဏ"
    }
  },
  {
    id: "moclate",
    name: {
      en: "Moclate (Mycophenolate Mofetil Tablets USP 500 mg)",
      mm: "Moclate (Mycophenolate Mofetil ဆေးပြား ၅၀၀ မီလီဂရမ်)"
    },
    category: "Nephrology Products",
    description: {
      en: "Moclate is an immunosuppressive therapy formulated with Mycophenolate Mofetil USP (500 mg), indicated for the prophylaxis of organ rejection in patients undergoing renal, cardiac, or hepatic transplants.",
      mm: "ကျောက်ကပ်၊ နှလုံး သို့မဟုတ် အသည်း အစားထိုးကုသမှုခံယူထားသော လူနာများတွင် အင်္ဂါရပ်ငြင်းပယ်ခြင်းမှ ကာကွယ်ရန်အတွက် အသုံးပြုသော အဆင့်မြင့် ကိုယ်ခံအားထိန်းညှိဆေးပြား (၅၀၀ မီလီဂရမ်) ဖြစ်ပါသည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Mycophenolate Mofetil USP 500 mg",
        "Form: Film-Coated Tablets",
        "Indications: Prophylaxis of organ rejection in allogeneic renal, cardiac, or hepatic transplants",
        "Usage: To be used in combination with cyclosporine and corticosteroids as prescribed",
        "Packaging: 5 x 10 Tablets per box (50 tablets)",
        "Storage: Store below 25°C in a dry place, protect from light"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Mycophenolate Mofetil USP ၅၀၀ မီလီဂရမ်",
        "ဆေးဝါးပုံစံ - ဆေးပြား (Film-Coated Tablets)",
        "အညွှန်း - အစားထိုးကျောက်ကပ်၊ နှလုံး သို့မဟုတ် အသည်း ငြင်းပယ်ခြင်းကို ကာကွယ်ရန်",
        "သုံးစွဲပုံ - အထူးကုဆရာဝန် ညွှန်ကြားချက်အတိုင်း သုံးစွဲရန်",
        "ထုပ်ပိုးပုံ - ဆေးပြား ၅၀ (၅ ကတ် x ၁၀ ပြား)",
        "သိုလှောင်ပုံ - အပူချိန် ၂၅ ဒီဂရီအောက် ခြောက်သွေ့သောအေးမြသောနေရာတွင် ထားပါ"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/119cw1SQ2pwqsSU2xplNZNcS2b23bxQ6R",
    badge: {
      en: "Critical Transplant Care",
      mm: "အဆင့်မြင့်ဆေးဝါး"
    }
  },
  {
    id: "diabamet-500",
    name: {
      en: "Diabamet-500 (Vildagliptin & Metformin Hydrochloride Tablets)",
      mm: "Diabamet-500 (ဒိုင်ယာဘာမက်-၅၀၀ ဆီးချိုထိန်းဆေး)"
    },
    category: "Nephrology Products",
    description: {
      en: "Diabamet-500 is a dual-action oral antihyperglycemic medication formulated to effectively manage type 2 diabetes mellitus. It combines Vildagliptin and Metformin to improve glycemic control in patients.",
      mm: "Diabamet-500 သည် အမျိုးအစား (၂) ဆီးချိုရောဂါကို ထိရောက်စွာ ကုသပေးနိုင်သည့် ဆီးချိုထိန်းဆေးဖြစ်သည်။ ၎င်းသည် သွေးတွင်းသကြားဓာတ်ကို ထိန်းညှိရန်အတွက် Vildagliptin နှင့် Metformin တို့ကို ပေါင်းစပ်ထားသည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Vildagliptin & Metformin Hydrochloride 500mg",
        "Indications: Management of Type 2 Diabetes Mellitus",
        "Usage: As directed by a physician",
        "Packaging: 10 x 10 Tablets (100 tablets total)",
        "Storage: Store in a cool, dry place away from light"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Vildagliptin နှင့် Metformin Hydrochloride 500mg",
        "အညွှန်း - အမျိုးအစား (၂) ဆီးချိုရောဂါ ကုသရန်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးရန်",
        "ထုပ်ပိုးပုံ - ဆေးပြား ၁၀၀ (၁၀ ချပ် x ၁၀ ပြား)"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1U002Ornz5jvP0MtjCSer0YY8JRZTPXPJ",
    badge: {
      en: "Glycemic Control",
      mm: "သွေးချိုထိန်းဆေး"
    }
  },
  {
    id: "synfovir-300",
    name: {
      en: "Synfovir-300 (Tenofovir Disoproxil Fumarate 300mg)",
      mm: "Synfovir-300 (တီနိုဖိုဗာ ဘီပိုးနှင့် ဗိုင်းရပ်စ်တားဆေး ၃၀၀ မီလီဂရမ်)"
    },
    category: "Nephrology Products",
    description: {
      en: "Synfovir-300 contains Tenofovir Disoproxil Fumarate, primarily indicated for the treatment of chronic hepatitis B and as part of antiretroviral therapy for HIV-1 infection.",
      mm: "Synfovir-300 သည် နာတာရှည် အသည်းရောင် အသားဝါ ဘီပိုး (Hepatitis B) နှင့် HIV-1 ရောဂါကုသမှုအတွက် အသုံးပြုသော တီနိုဖိုဗာ (Tenofovir) ပါဝင်သည့် ဆေးဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Tenofovir Disoproxil Fumarate 300mg",
        "Indications: Chronic Hepatitis B, HIV-1 infection",
        "Usage: To be used strictly under physician supervision",
        "Packaging: 3 x 10 tablets (30 tablets total)",
        "Storage: Store in a cool, dry place away from direct sunlight"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Tenofovir Disoproxil Fumarate 300mg",
        "အညွှန်း - နာတာရှည် အသည်းရောင် အသားဝါ ဘီပိုး (Hepatitis B) နှင့် HIV-1 ရောဂါကုသရန်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးရန်",
        "ထုပ်ပိုးပုံ - ဆေးပြား ၃၀ ပါဝင် (၁၀ ပြားစီ ၃ ကဒ်)"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1JqDKp0MMWM2cqX_cYhw2jmL1WXdCP6h1",
    badge: {
      en: "Antiviral Therapy",
      mm: "ဗိုင်းရပ်စ်တားဆေး"
    }
  },
  {
    id: "blisulfect-cream",
    name: {
      en: "Blisulfect Cream (Silver Sulfadiazine & Chlorhexidine Gluconate)",
      mm: "Blisulfect Cream (အပူလောင်နှင့် အနာလိမ်းခရင်မ်)"
    },
    category: "Advanced Wound Care",
    description: {
      en: "Blisulfect Cream is a topical therapeutic agent formulated to treat and prevent infections in severe burns, cuts, abrasions, scalds, and sunburn blisters.",
      mm: "Blisulfect Cream သည် ပြင်းထန်သော အပူလောင်ခြင်း၊ ဖြတ်ရှခြင်း၊ ပွန်းပဲ့ခြင်းနှင့် နေလောင်ခြင်းတို့တွင် ပိုးဝင်ခြင်းကို ကုသကာကွယ်ပေးသည့် အသားအရေလိမ်းဆေးဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Silver Sulfadiazine 1% w/w, Chlorhexidine Gluconate 0.15% w/w",
        "Indications: Severe burn infections, cuts, abrasions, scalds, and sunburn blisters.",
        "Usage: To be used only under Medical Supervision.",
        "Packaging: 20 g tube",
        "Storage: Store below 30°C."
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Silver Sulfadiazine 1% w/w နှင့် Chlorhexidine Gluconate 0.15% w/w",
        "အညွှန်း - အပူလောင်ခြင်း၊ ပြတ်ရှခြင်း၊ ပွန်းပဲ့ခြင်းနှင့် နေလောင်ခြင်းများအတွက် အသုံးပြုရန်။",
        "သုံးစွဲပုံ - ဆရာဝန်၏ ညွှန်ကြားချက်အတိုင်းသာ အသုံးပြုပါ။",
        "ထုပ်ပိုးပုံ - ၂၀ ဂရမ်ပါဝင်သော ဆေးပြွန်"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/18bwpr9Z5lJGqYHcyWct-r4hrFsGm1kb5",
    badge: {
      en: "Antimicrobial Burn Relief",
      mm: "ပိုးသတ်ဆေးနှင့် အရေပြားကုသမှု"
    }
  },
  {
    id: "renolate-s-360",
    name: {
      en: "Renolate-S 360 (Mycophenolate Sodium 360mg)",
      mm: "Renolate-S 360 (Mycophenolate Sodium ၃၆၀ မီလီဂရမ်)"
    },
    category: "Nephrology Products",
    description: {
      en: "Renolate-S is an immunosuppressant medication commonly used to prevent organ rejection in kidney transplant patients.",
      mm: "Renolate-S သည် ကျောက်ကပ်အစားထိုးလူနာများတွင် ကိုယ်တွင်းအင်္ဂါပယ်ချမှုကို ကာကွယ်ရန်အတွက် အသုံးပြုသော ကိုယ်ခံအားနှိမ်ဆေးတစ်မျိုးဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Mycophenolate Sodium 360mg",
        "Indications: Prophylaxis of organ rejection in adult patients receiving allogeneic renal transplants.",
        "Usage: To be taken orally as directed by a physician.",
        "Packaging: 10 x 10 Tablets (100 tablets total)",
        "Storage: Store in a cool, dry place below 30°C."
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Mycophenolate Sodium 360mg",
        "အညွှန်း - ကျောက်ကပ်အစားထိုးလူနာများတွင် ကိုယ်တွင်းအင်္ဂါပယ်ချမှုကို ကာကွယ်ရန်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးရန်",
        "ထုပ်ပိုးပုံ - ၁၀ ပြားပါ ၁၀ ကတ် (စုစုပေါင်း ၁၀၀ ပြား)"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1tyQWJ3zaPmYSVykd1ca5wM3UfGdJCq1K",
    badge: {
      en: "Immunosuppressant",
      mm: "ကိုယ်ခံအားနှိမ်ဆေး"
    }
  },
  {
    id: "pip-injection-4-5g",
    name: {
      en: "PIP 4.5g (Piperacillin & Tazobactam for Injection USP 4.5g)",
      mm: "PIP 4.5g (Piperacillin & Tazobactam for Injection USP ၄.၅ ဂရမ်)"
    },
    category: "Antibiotics",
    description: {
      en: "PIP is a sterile powder for injection comprising a combination of Piperacillin and Tazobactam, designed for intravenous use to treat various bacterial infections.",
      mm: "PIP သည် ပိုးဝင်ခြင်းအမျိုးမျိုးကို ကုသရန်အတွက် Piperacillin နှင့် Tazobactam ပေါင်းစပ်ပါဝင်သော အကြောဆေးဖြစ်ပြီး သွေးကြောအတွင်းသို့ ထိုးသွင်းအသုံးပြုရသည့် ပိုးသတ်ဆေးဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Piperacillin 3.375g and Tazobactam 1.125g",
        "Indications: For intravenous use in the treatment of serious bacterial infections",
        "Usage: To be dissolved with 20 ml of Sterile Diluent before administration",
        "Packaging: Combipack of 1 vial and 20 ml diluent",
        "Storage: Store at a temperature not exceeding 30°C. Protect from light and moisture"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Piperacillin 3.375g နှင့် Tazobactam 1.125g",
        "အညွှန်း - ပြင်းထန်သော ဘက်တီးရီးယားပိုးဝင်ခြင်းများကို ကုသရန်",
        "သုံးစွဲပုံ - ဆေးဗူးအတွင်းရှိ ပေါင်ဒါမှုန့်ကို ပူးတွဲပါ 20ml အရည်ဖြင့် ဖျော်စပ်ပြီး အကြောဆေးအဖြစ် ထိုးသွင်းရမည်",
        "ထုပ်ပိုးပုံ - ဆေးဗူး (၁) ဗူးနှင့် ဖျော်စပ်ရမည့် အရည် (၂၀) မီလီလီတာ ပါဝင်သော Combipack"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1NyvDCP82hThKYJW5KCffRCXPoNmSYvNQ",
    badge: {
      en: "Broad-Spectrum Antibiotic",
      mm: "ကျယ်ပြန့်သော ပိုးသတ်ဆေး"
    }
  },
  {
    id: "remycin-250",
    name: {
      en: "Remycin 250 (Azithromycin Tablets USP 250mg)",
      mm: "Remycin 250 (ရီမိုင်စင် အက်ဇစ်သရိုမိုင်စင် ၂၅၀ မီလီဂရမ်)"
    },
    category: "Antibiotics",
    description: {
      en: "Remycin 250 is a broad-spectrum macrolide antibiotic used to treat various bacterial infections, including respiratory tract infections and skin conditions.",
      mm: "Remycin 250 သည် အသက်ရှူလမ်းကြောင်းဆိုင်ရာပိုးဝင်ခြင်းနှင့် အရေပြားရောဂါပိုးဝင်ခြင်းအပါအဝင် ဘက်တီးရီးယားပိုးဝင်ရောဂါအမျိုးမျိုးကို ကုသပေးနိုင်သော ပဋိဇီဝဆေးဝါးဖြစ်ပါသည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Azithromycin USP 250 mg",
        "Indications: Bacterial respiratory tract infections, skin and soft tissue infections",
        "Usage: Take orally as directed by a healthcare professional",
        "Packaging: 1 blister pack containing 6 tablets",
        "Storage: Store in a cool, dry place below 30°C, away from direct sunlight"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - အက်ဇစ်သရိုမိုင်စင် (Azithromycin) ၂၅၀ မီလီဂရမ်",
        "အညွှန်း - အသက်ရှူလမ်းကြောင်းနှင့် အရေပြားပိုးဝင်ခြင်းများကို ကုသရန်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားချက်အတိုင်း ပါးစပ်မှသောက်သုံးရန်",
        "ထုပ်ပိုးပုံ - ဆေးပြား ၆ ပြားပါဝင်သော တစ်ကတ်"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1XEYmVWjTjSNPJ6YvV-p6E-UU1b4U7hd5",
    badge: {
      en: "Broad-spectrum Antibacterial",
      mm: "ပိုးသတ်ဆေး"
    }
  },
  {
    id: "remycin-500",
    name: {
      en: "Remycin 500 (Azithromycin Tablets USP 500mg)",
      mm: "Remycin 500 (ရီမိုင်စင် အက်ဇစ်သရိုမိုင်စင် ၅၀၀ မီလီဂရမ်)"
    },
    category: "Antibiotics",
    description: {
      en: "Remycin 500 is a broad-spectrum macrolide antibiotic used for the treatment of various bacterial infections including respiratory tract and skin infections.",
      mm: "Remycin 500 သည် အသက်ရှူလမ်းကြောင်းနှင့် အရေပြား ပိုးဝင်ခြင်းများအပါအဝင် ဘက်တီးရီးယားပိုးမွှားများကြောင့်ဖြစ်သော ရောဂါများကို ကုသရန်အတွက် အသုံးပြုသည့် ပဋိဇီဝဆေးတစ်မျိုးဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Azithromycin 500mg",
        "Indications: Bacterial respiratory tract infections, skin and soft tissue infections, and certain sexually transmitted infections.",
        "Usage: To be taken orally as prescribed by a physician.",
        "Packaging: 1 x 3 Tablets",
        "Storage: Store in a cool, dry place away from direct sunlight."
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - အက်ဇစ်သရိုမိုင်စင် ၅၀၀ မီလီဂရမ်",
        "အညွှန်း - အသက်ရှူလမ်းကြောင်းပိုးဝင်ခြင်း၊ အရေပြားနှင့် ပျော့ပျောင်းသောတစ်ရှူးများ ပိုးဝင်ခြင်းများကို ကုသရန်။",
        "သုံးစွဲပုံ - ဆရာဝန်၏ညွှန်ကြားချက်အတိုင်း ပါးစပ်မှသောက်သုံးရန်။",
        "ထုပ်ပိုးပုံ - ဆေးပြား ၃ ပြားပါ တစ်ကတ် (၁x၃)"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1AFozGCsgDBOYP9Ys5JEvU7FQI1IlnbNO",
    badge: {
      en: "Broad-Spectrum Antibiotic",
      mm: "ပိုးသတ်ဆေး"
    }
  },
  {
    id: "frrotil-500",
    name: {
      en: "Frrotil 500 (Cefuroxime Axetil Tablets USP 500mg)",
      mm: "Frrotil 500 (ဖရိုတီးလ် ပိုးသတ်ဆေး ၅၀၀ မီလီဂရမ်)"
    },
    category: "Antibiotics",
    description: {
      en: "Frrotil is a potent second-generation cephalosporin antibiotic used to treat a wide range of bacterial infections. It effectively inhibits bacterial cell wall synthesis to combat various respiratory, skin, and urinary tract infections.",
      mm: "Frrotil 500 သည် ဘက်တီးရီးယားပိုးဝင်ခြင်းအမျိုးမျိုးကို ကုသပေးနိုင်သော ဒုတိယမျိုးဆက် cephalosporin ပဋိဇီဝဆေးတစ်မျိုးဖြစ်သည်။ ၎င်းသည် ဘက်တီးရီးယားဆဲလ်နံရံများ ပေါက်ပွားမှုကို တားဆီးပေးခြင်းဖြင့် အသက်ရှူလမ်းကြောင်း၊ အရေပြားနှင့် ဆီးလမ်းကြောင်းဆိုင်ရာ ပိုးဝင်ခြင်းများကို ထိရောက်စွာ ကုသပေးသည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: Cefuroxime Axetil 500 mg",
        "Indications: Respiratory tract infections, skin infections, urinary tract infections, and Lyme disease",
        "Usage: Take exactly as prescribed by your healthcare provider, typically with food",
        "Packaging: 10 tablets per box",
        "Storage: Store in a cool, dry place below 30°C, away from direct sunlight"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - Cefuroxime Axetil ၅၀၀ မီလီဂရမ်",
        "အညွှန်း - အသက်ရှူလမ်းကြောင်းပိုးဝင်ခြင်း၊ အရေပြားပိုးဝင်ခြင်း၊ ဆီးလမ်းကြောင်းပိုးဝင်ခြင်းနှင့် Lyme ရောဂါများအတွက်",
        "သုံးစွဲပုံ - ဆရာဝန်ညွှန်ကြားချက်အတိုင်း အစားအစာနှင့်အတူ သောက်သုံးရန်",
        "ထုပ်ပိုးပုံ - တစ်ဘူးလျှင် ဆေးပြား (၁၀) ပြားပါဝင်သည်"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1r29LGlvXUMIPIiFo4Ypn61ZBbAx2xOqz",
    badge: {
      en: "Broad-Spectrum Antibiotic",
      mm: "ကျယ်ပြန့်သော ပိုးသတ်စွမ်းအား"
    }
  },
  {
    id: "blimuca-200",
    name: {
      en: "Blimuca 200 (N-Acetylcysteine Powder 200mg)",
      mm: "Blimuca 200 (ချွဲပျော်ဆေး အမှုန့် ၂၀၀ မီလီဂရမ်)"
    },
    category: "Antibiotics",
    description: {
      en: "Blimuca 200 is a mucolytic agent formulated as a powder for oral solution, designed to effectively thin mucus and aid in respiratory relief.",
      mm: "Blimuca 200 သည် အသက်ရှူလမ်းကြောင်းဆိုင်ရာ အမြှေးအချွဲများကို ပျော်ဝင်စေရန်နှင့် အသက်ရှူရလွယ်ကူစေရန်အတွက် သောက်သုံးနိုင်သော အမှုန့်ဆေးအမျိုးအစားဖြစ်သည်။"
    },
    specifications: {
      en: [
        "Active Ingredient: N-Acetylcysteine 200 mg",
        "Indications: Respiratory disorders with excessive mucus",
        "Usage: Dissolve sachet content in water as directed",
        "Packaging: 2 sachets x 1 g per box",
        "Storage: Store below 30°C in a dry place"
      ],
      mm: [
        "ပါဝင်ပစ္စည်း - N-Acetylcysteine 200 mg",
        "အညွှန်း - ချွဲသလိပ်ကျပ်ခြင်းနှင့် အသက်ရှူလမ်းကြောင်းဆိုင်ရာ ပြဿနာများအတွက်",
        "သုံးစွဲပုံ - ဆေးအိတ်ကို ရေတွင်ဖျော်၍ သောက်သုံးပါ",
        "ထုပ်ပိုးပုံ - တစ်ဘူးလျှင် ဆေးအိတ် ၂ ခုပါဝင်သည်"
      ]
    },
    image: "https://lh3.googleusercontent.com/d/1400RPySWEk7ntMBlncA4ux1IQqvrduxe",
    badge: {
      en: "Mucolytic Agent",
      mm: "ချွဲပျော်ဆေး"
    }
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  { name: "CuraLife Global", logo: "https://lh3.googleusercontent.com/d/1SOKsd4P2l4CjrYmkBINfHMScIyMVhjOF", country: "United Kingdom" },
  { name: "AstraBio Labs", logo: "https://lh3.googleusercontent.com/d/1iT-Sc018cJmfy6ykMb_945XrGshY1dwB", country: "Germany" },
  { name: "SinoHealth Tech", logo: "https://lh3.googleusercontent.com/d/1GUhlOMm9nmyrRA4SHsEMFLBuIwK9oWNB", country: "Singapore" },
  { name: "Seoul Pharma Inc", logo: "https://lh3.googleusercontent.com/d/19_v54HqopPScDlI_6fQQHI9Z90L6oIOJ", country: "South Korea" },
  { name: "MedIndia Formulations", logo: "https://lh3.googleusercontent.com/d/1fAD2WM4qojlcIw9VADmqyyw-CYqWwWPT", country: "India" },
  { name: "Venezia Aesthetics", logo: "https://lh3.googleusercontent.com/d/13gHZXoSFJXdWycx5cOjm2nl9dpvOWZuJ", country: "Italy" },
  { name: "BioGenix Healthcare", logo: "https://lh3.googleusercontent.com/d/1u4f7QKYx4K1ZtZcPEQHKVToSGdzTuCTP", country: "Switzerland" },
  { name: "Apex Lifesciences", logo: "https://lh3.googleusercontent.com/d/1yVXiYW23l-EZxai94PEy1GcFEQkf-lqE", country: "United States" },
  { name: "Veridian Diagnostics", logo: "https://lh3.googleusercontent.com/d/1m9I9FJlOVILJVK5ofauh8FS_ydQSWbwo", country: "Canada" },
  { name: "Integra Biotech", logo: "https://lh3.googleusercontent.com/d/1Gz-b37P2z4fZzI5UaqG7k45c2ZJI-FQn", country: "Australia" },
  { name: "Synapse Pharma", logo: "https://lh3.googleusercontent.com/d/1OTAmg3kHASxdNdDmOwXEMgiPrGBSCxCJ", country: "France" },
  { name: "Helix Formulations", logo: "https://lh3.googleusercontent.com/d/1L8h_w7iQA05dfnzA5t-5sXEcoFLxa1aW", country: "Japan" }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: { en: "Dr. Kyaw Myint Tun", mm: "ဒေါက်တာကျော်မြင့်ထွန်း" },
    role: { en: "Managing Director & Founder", mm: "မန်နေးဂျင်းဒါရိုက်တာနှင့် တည်ထောင်သူ" },
    department: "leadership",
    bio: {
      en: "Over 22 years of executive clinical and healthcare administration experience in both regional and local pharmaceutical landscapes.",
      mm: "ပြည်တွင်းပြည်ပ ကျန်းမာရေးနှင့် ဆေးဝါးစီမံခန့်ခွဲမှုကဏ္ဍတွင် ၂၂ နှစ်ကျော် အတွေ့အကြုံရှိသော အမှုဆောင်ညွှန်ကြားရေးမှူး ဖြစ်ပါသည်။"
    },
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: { en: "Daw Hnin Shwe Yi", mm: "ဒေါ်နှင်းရွှေရည်" },
    role: { en: "Head of Regulatory Affairs", mm: "စည်းမျဉ်းနှင့် စာရွက်စာတမ်းရေးရာ အကြီးအကဲ" },
    department: "regulatory",
    bio: {
      en: "Expert on Myanmar FDA procedures, successfully steering registration for more than 400 healthcare, medical, and supplement dossiers.",
      mm: "မြန်မာနိုင်ငံ FDA မှတ်ပုံတင်ခြင်းဆိုင်ရာ စာရွက်စာတမ်း ၄၀၀ ကျော်ကို အောင်မြင်စွာ တင်သွင်းဆောင်ရွက်ပေးခဲ့သူ ကျွမ်းကျင်သူ ဖြစ်ပါသည်။"
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: { en: "U Aung Kyaw San", mm: "ဦးအောင်ကျော်ဆန်း" },
    role: { en: "Director of National Distribution", mm: "တစ်နိုင်ငံလုံး ဖြန့်ဖြူးရေးလုပ်ငန်း ဒါရိုက်တာ" },
    department: "leadership",
    bio: {
      en: "Overseeing systematic temperature-controlled warehousing, logistics routes, and cold chain validity checks across all states.",
      mm: "တစ်နိုင်ငံလုံးအတိုင်းအတာဖြင့် အပူချိန်ထိန်း ဂိုဒေါင်များ၊ သယ်ယူပို့ဆောင်ရေးနှင့် ထောက်ပံ့ပို့ဆောင်ရေး လုပ်ငန်းများကို ကြီးကြပ်ကွပ်ကဲသူ ဖြစ်ပါသည်။"
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: { en: "Dr. Sandar Win", mm: "ဒေါက်တာစန္ဒာဝင်း" },
    role: { en: "Medical Marketing Manager", mm: "ဆေးဘက်ဆိုင်ရာ စျေးကွက်မန်နေဂျာ" },
    department: "marketing",
    bio: {
      en: "Driving professional clinical detailing, Continuing Medical Education, and strategic HCP alliance operations.",
      mm: "ဆေးဘက်ဆိုင်ရာ အရောင်းအချက်အလက်များနှင့် အာဟာရပညာရပ်ဆိုင်ရာ ပညာပေး ဆွေးနွေးပွဲများကို အဓိက ကြီးကြပ်ဆောင်ရွက်ပေးနေသူ ဖြစ်ပါသည်။"
    },
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400"
  }
];

export const CONTACT_OFFICES: OfficeLocation[] = [
  {
    city: { en: "Yangon Headquarters", mm: "ရန်ကုန်ရုံးချုပ်" },
    address: {
      en: "No. 452, Pyay Road, Kamayut Township, Yangon, Myanmar",
      mm: "အမှတ် ၄၅၂၊ ပြည်လမ်း၊ ကမာရွတ်မြို့နယ်၊ ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ။"
    },
    phone: ["+95 9952160179"],
    email: "info@lorindalepharma.com"
  }
];
