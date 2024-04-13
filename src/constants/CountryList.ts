export const countries = [
  { label: 'thailand', code: 'th' },
  { label: 'vietnam', code: 'vn' },
  { label: 'cambodia', code: 'kh' },
];

export const countryMapper: { [key: string]: any } = {
  th: {
    name: 'Thailand',
    categories: {
      accomodation: {
        refs: [
          { label: 'RentHub', url: 'https://www.renthub.in.th/' },
          { label: 'AirBnb', url: 'https://www.airbnb.com/thailand/stays' },
        ],
        suggestions: [
          {
            author: 'Chuue Chuue',
            address: 'Thailand',
            header: `Bangkok မှာ University တက်ချင်တဲ့ ဆိုတဲ့ သူတွေ အတွက်`,
            content: ``,
          },
        ],
        checkPoints: [
          'Check electricity and water bills that could be quite expensive when landloard define it rather than the goverment rate',
        ],
      },
      food: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'fresh'],
          },
        ],
      },
      health: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'good service'],
          },
        ],
      },
      immigration: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', '2 months stay'],
            messages: [],
          },
        ],
      },
    },
  },
  vn: {
    name: 'Vietnam',
    categories: {
      accomodation: {
        refs: [
          { label: 'RentHub', url: 'https://www.renthub.in.th/' },
          { label: 'AirBnb', url: 'https://www.airbnb.com/thailand/stays' },
        ],
        suggestions: ['', ''],
        checkPoints: [
          'Check electricity and water bills that could be quite expensive when landloard define it rather than the goverment rate',
        ],
      },
      food: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'fresh'],
          },
        ],
      },
      health: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'good service'],
          },
        ],
      },
      education: {
        suggestions: [
          {
            author: 'Chuue Chuue',
            address: 'Vietnam',
            header: `Vietnam မှာ University တက်ချင်တဲ့ ဆိုတဲ့ သူတွေ အတွက်`,
            content: `Vietnam မှာ Bachelor ကို လေးနှစ်လုံး Vietnam မှာ တက်ရတဲ့ ကျောင်းတွေ ရှိသလို

            ***USA, UK, Australia, Netherland*** စတဲ့ ***Transfer program*** နဲ့ တက်လို့ ရတဲ့ ကျောင်းတွေလည်း ရှိပါတယ်
            
            ***Transfer program***  မှာ
            
            2+2 program or 3+1 program တွေ ရှိပါတယ်
            
            ဥပမာ Vietnam မှာ နှစ်နှစ်တက်ပြီး US မှာ နှစ်နှစ်ဆက်တက်တာ
            
            Vietnam မှာ သုံးနှစ်တက်ပြီး UK မှာ တစ်နှစ်တက်တာ မျိုးတွေ
            
            ဒါကလဲ ကိုယ်ရွေးတဲ့ ကျောင်း နဲ့ Major  ပေါ် မူတည်ပြီး နိုင်ငံ ရွေးလို့ ရပါတယ်
            
            ကျောင်း တွေ မှာ Vietnamese + English ရောသင်တဲ့ Major ရွေးလို့ ရသလို English only နဲ့ သင်တဲ့ Major လဲ ရွေးလို့ ရပါတယ်
            
            Vietnam Language program အတွက် တက်မယ် ဆို ကျောင်းတွေမှာ 4 လ 6 လ တနှစ် စတဲ့ ကျောင်းပေါ် မူတည်ပြီး အမျိုး မျိုး ရှိပါတယ်
            
            ကျောင်းတက်ရင်း အလုပ်လုပ်ချင်တဲ့ သူ ဆို Vietnam program တက်တာ က မမှားဘူး ပေါ့
            
            1. [Ton Duc Thang University](https://www.tdtu.edu.vn/en)
            
            2. [Vietnam National University](https://vnu.edu.vn/eng/)
            
            3. [RMIT](https://www.rmit.edu.au/)
            
            4. [American University Vietnam](https://auv.edu.vn/)
            
            5. [British University Vietnam](https://www.buv.edu.vn/en/)
            
            School Fee တနှစ် စာ ပျမ်းမျှ ခြင်း USD 14,000 ဝန်းကျင် ရှိပါတယ်
            
            Requirement တွေ က English test IELTS 5.0 လက်ခံတဲ့ ကျောင်း ရှိသလို 6.0 လက်ခံတဲ့ ကျောင်း တွေလဲ ရှိပါတယ် တချို့ ကျောင်း တွေက သူတို့ ကျောင်းရဲ့ English test ကို ဖြေလို့ ရပါတယ်
            
            Major တွေကို ကျောင်း Website မှာရှာလို့ ရပါတယ်
            `,
          },
        ],
        checkpoints: [
              `Vietnam မှာ ကျောင်းတက်ပြီး အလုပ်လုပ်ချင်တဲ့ သူတွေ အတွက် Vietnam စကား လိုအပ်ပါတယ်`
        ]
      },
      immigration: {
        ref: [
          'https://yangon.thaiembassy.org/en/page/do-i-need-a-visa?menu=5d7d27c515e39c2e64001ff4',
        ],
        suggestions: [
          {
            author: 'Chuue Chuue',
            address: 'Vietnam',
            header: 'Vietnam E visa ?',
            content: `***Q*** Vietnam မှာ E visa လျှောက်ရင် ဘာစာရွက်စာတမ်းတွေ လိုမလဲ ?

            ***A*** လက်ရှိ Policy အရ ဘာမှ မလိုပါဘူး**
          
            Form မှာ Personal Infomation သေချာ ဖြည့်ပြီး Passport ဓာတ်ပုံ နဲ့ Passport ရှေ့ခြမ်းပဲ လိုပါတယ် ပြီးတော့ Visa 	ကြေး USD 50 ရယ် ပဲ လိုပါတယ်
          
          ***Q*** Single Entry or Multiple Entry ဘာကွာလဲ
          
          ***A*** Single Entry ဆိုတာ Visa လျှောက်ပြီး ရင် တခြားနိုင်ငံ အဝင်အထွက် လုပ်မရပဲ ပြန်ဝင်ချင်ရင် Visa ထပ်လျှောက်ရပါတယ်
          
            Multiple Entry ကျ 3 လအတွင်း ကြိုက်တဲ့ နိုင်ငံ အဝင်အထွက် လုပ်လို့ ရပါတယ်
          
            Vietnam ပြန်ဝင်ရင်လဲ Visa မလိုပါဘူး ( 3 လအတွင်း နော်)
          
            ဒါပေမဲ့ Single Entry နဲ့ 3 လလျှောက်ရင် Visa ပေးကြတာ များပါတယ် ( ဘာလို့ ဆို ပိုက်ဆံလိုချင်လို့ပါ)
          
          ***Q***  E visa ကို Vietnam ရောက်မှ လျှောက်လို့ ရလား
          
          ***A*** မရပါဘူး နိုင်ငံ တွင်း နေရင်း Visa Extention မရပါ
          
            လျှောက်ချင်ရင် Cambodia Border or Laos Border ကို ဆိုင်ကယ် or ကားနဲ့ အထွက်ပြပြီး နိုင်ငံ ပြန်ဝင် ရပါတယ်
          
            အဲ့တော့ မလာခင်ထဲက 50 USD နဲ့ E visa လျှောက်ထားရင် အာရုံ နောက် သက်သာပါတယ်
            
          ***Q*** E VISA လျှောက်တာ ဘယ်လောက် ဆို Visa ရလဲ
          
          ***A*** ရုံးဖွင့်ရက် 3 ရက် အတွင်း Visa ကျပါတယ် ***Sat Sun အလုပ်မလုပ်ကြပါ**
          
          ***Q***  Border ဖြတ် ဖို့ ကား ရှိလား

          ***A*** Vietnam to Cambodia
          Vietnam to Laos ပြေးဆွဲ နေတဲ့ Express ကားတွေ ရှိပါတယ်
              
              
          ***Q*** USD 50 အတွက် ဘာနဲ့ ပေးလို့ ရလဲ
         
          ***A*** Visa card နဲ့ ပေးလို့ ရပါတယ် (အခုထိတော့)
          
          ***Q***  မြန်မာ ပြည်က ထွက်ရင် E visa လျှောက်ထားတာ ပြရမလား
          
          ***A***  ပြစရာ မလိုပါဘူး ဒီဘက် Vietnam လေဆိပ် ရောက်မှ အဲ့ စာရွက် ထုတ်ပြပါ
          
          ***Q*** အပြန် လက်မှတ် ဘယ်လောက် ခွာဖြတ် ရမလဲ
          
          ***A*** ထွက်ပြီး ပြန်ဖို့ စိတ်ကူး မရှိရင် တပတ် ဆယ်ရက်လောက်ပဲ လက်မှတ် ကို ခွာဖြတ် ပါ
          အပြန်လက်မှတ်ကတော့ ဆုံးပေါ့
          
            
          ***Q*** Vietnam ဝင်ရင် Hotel Booking ပြရမလား
          
          ***A*** ပြစရာ မလိုပါဘူး ဘယ်နေရာ နေမလဲ ဆိုတာ တော့ တိတိကျကျ ပြောတတ်ဖို့ လိုပါတယ်
          
          ***Q*** E visa လျှောက်ဖို့  ??
          
          ***A*** [Link](https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu)`,
          },
        ],
      },
    },
  },
  kh: {
    name: 'Vietnam',
    categories: {
      accomodation: {
        refs: [
          { label: 'RentHub', url: 'https://www.renthub.in.th/' },
          { label: 'AirBnb', url: 'https://www.airbnb.com/thailand/stays' },
        ],
        suggestions: ['', ''],
        checkPoints: [
          'Check electricity and water bills that could be quite expensive when landloard define it rather than the goverment rate',
        ],
      },
      food: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'fresh'],
          },
        ],
      },
      health: {
        suggestions: [
          {
            key: 'popular',
            reasons: ['cheap', 'good service'],
          },
        ],
      },
      education: { suggestions: [] },
      immigration: {
        ref: [
          'https://yangon.thaiembassy.org/en/page/do-i-need-a-visa?menu=5d7d27c515e39c2e64001ff4',
        ],
        suggestions: [
          {
            author: 'Burmese House',
            address: 'Cambodia',
            header: `Page မှာ အမေးများဆုံးမေးခွန်းမလို့ ဒီကနေပဲဖြေပေးလိုက်မယ်နော်`,
            content: `Cambodia Work Permit / Visa လုပ်ဖို့ဘာစာရွက်စာတမ်းတွေလိုအပ်မလဲ ၊ ဘယ်လိုလျှောက်ရမလဲ ၊ ဘယ်လောက်ကုန်မလဲ ဆိုတာ သိရဖို့အဆုံးထိဖတ်ကြည့်လိုက်ပါနော်......

            Cambodia မှာ ၃လ၊ ၆လ၊ ၁နှစ် visa လျှောက်ဖို့ဆိုရင် 
            ***ပထမဆုံးအနေနဲ့ Cambodia ကိုလာခဲ့တဲ့ Visaက EB Visa ဖြစ်ဖို့လိုအပ်ပါတယ် 
            
            *** ဒုတိယအနေနဲ့ကတော့ Work Permit မဖြစ်မနေလုပ်ရပါမယ်
            
            🔸🔸🔸ခြွင်းချက်အနေနဲ့ကတော့ EB Visa နဲ့လာတဲ့သူတွေက 3လ Visa Extension ကို work permit မလိုပဲ တစ်ကြိမ်သတ်တမ်းတိုးပြီးနေလို့ရပါတယ် သတ်တမ်းကုန်ပြီးဆိုရင် Cambodia ကနေအထွက်ပြရပါတယ် နောက်တစ်ကြိမ်သတမ်းတိုးဖို့ဆိုရင် အဲ့ဒီလူတွေအတွက်က မဖြစ်မနေ work permit လုပ်ရပါပြီ။ 
            
            Note - EB Visa ကို  Cambodia လေဆိပ်မှာ Immigration မဖြတ်ခင် $50 ပေးပြီး  EB Visa တုံးထုခိုင်းလို့ရပါတယ် ( တစ်ချို့လဲမရကြပါဘူး ဘာကြောင့်လဲမသိပါ ) လေဆိပ်မှာ EB Visaမရခဲ့ဘူးဆို ဗီယနမ်ကို အထွက်ပြပြီး ပြန်အဝင်မှာ EB Visaတုံး ထုခိုင်းလို့ရပါပြီ $50 ကျပါမယ်
            
            ***ရည်ရှည်နေမယ့်သူတွေအတွက်ကတော့ work permit သေချာပေါက် လုပ်ရပါမယ်။
            
            🔸🔸🔸အလုပ်မရှိလဲသူတွေအတွက်လဲ ဘာစာရွက်စာတမ်းမှ မလိုပဲ Self - Employ Work permit လျှောက်လို့ရပါတယ်။
            
            ***Work Permit ရှိပြီဆို ၃လ ၊ ၆လ၊ ၁၂လ စသည်ဖြင့် သတမ်းတိုးပြီးနေလို့ရပါပြီ၊ တစ်ခြားစာရွက်စာတမ်းမရှိလဲ ရပါတယ်။
            
            🔸🔸🔸Cambodia Work Permit သတ်တမ်းက 1 Jan ကနေ 31 Dec အထိ ပါ။
            
            *** Dependant Visa ကတော့ အရင်တုန်းကလို လွယ်လွယ်နဲ့ မရတော့ပါဘူး စာရွက်စာတမ်းအကုန်ပြရပါမယ် လက်ထပ်စာချုပ် နိုတြိကအစ......
            
            Note - Dependent visaလျှောက်ဖို့အတွက် work permit တော့မလိုပါ။
            
            *** Student Visa လျှောက်ဖို့အတွက် မိမိသားသမီးတွေ လက်ရှိတက်နေတဲ့ ကျောင်းကနေ လိုအပ်တဲ့စာရွက်သာတမ်းတောင်းပြီးလျှောက်လို့ရပါတယ်။`,
          },
        ],
      },
    },
  },
};
