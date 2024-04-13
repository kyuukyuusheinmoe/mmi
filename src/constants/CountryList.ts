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
            content: `Vietnam မှာလဲ အမကိုယ်တိုင် ပညာရေး နယ်ပယ်ထဲက မို့ 
            US သွားဖို့ Visa မရတဲ့ သူတွေ နိုင်ငံ ကြီး တွေ သွားဖို့ ထက် Budget အသင့်အတင့်နဲ့ ဘွဲ့ရ ဖို့ အတွက် 2nd Option အနေနဲ့ ရွေးတက်လို့ရအောင် ရေးပေးတာ ပါ 
            
            Ranking ကောင်းပြီး Program Structure ကောင်းတဲ့ ကျောင်းတွေ ကို ပြောပြပေးပါ့မယ် 
            USA, UK, Australia, Netherland စတဲ့ Transfer program နဲ့ တက်လို့ ရတဲ့ ကျောင်းတွေ ရှိပါတယ်
            ဒါမှ မဟုတ် ဘူး Bachelor ကို လေးနှစ်လုံး Vietnam မှာ တက်ချင်တယ် ဆိုလဲ ရပါတယ် 
            
            **Transfer program ဆိုတာ ဘာလဲ 
            2+2 program or 3+1 program တွေ ရှိပါတယ်
            ဥပမာ Vietnam မှာ နှစ်နှစ်တက်ပြီး US မှာ နှစ်နှစ်ဆက်တက်တာမျိုး 
            Vietnam မှာ သုံးနှစ်တက်ပြီး UK မှာ တစ်နှစ်တက်တာ မျိုး
            ဒါကလဲ ကိုယ်ယူထားတဲ့ Major ကိုယ်ရွေးတဲ့ ကျောင်း ပေါ် မူတည်ပြီး နိုင်ငံ ရွေးလို့ ရပါတယ်
            
            ကျောင်း တွေ မှာ Vietnamese + English ရောသင်တဲ့ Major ရွေးလို့ ရသလို 
            English only နဲ့ သင်တဲ့ Major လဲ ရွေးလို့ ရပါတယ်
            Vietnam Language program အတွက် တက်မယ် ဆို ကျောင်းတွေမှာ 4 လ 6 လ တနှစ် စတဲ့ ကျောင်းပေါ် မူတည်ပြီး အမျိုး မျိုး ရှိပါတယ် 
            ဒါကတော့ ကိုယ်က စဥ်းစားရမှာပေါ့ နော် ကျောင်းတက်ရင်း အလုပ်လုပ်ချင်တဲ့ သူ ဆို Vietnam program တက်တာ က မမှားဘူး ပေါ့ 
            
            1. Ton Duc Thang University
            2. Vietnam National University
            3. RMIT 
            4 American University Vietnam 
            5. British University Vietnam
            
            School Fee တနှစ် စာ ပျမ်းမျှ ခြင်း USD 14,000 ဝန်းကျင် ရှိပါတယ်
            Requirement တွေ က English test IELTS 5.0 လက်ခံတဲ့ ကျောင်း ရှိသလို 6.0 လက်ခံတဲ့ ကျောင်း တွေလဲ ရှိပါတယ် တချို့ ကျောင်း တွေက သူတို့ ကျောင်းရဲ့ English test ကို ဖြေလို့ ရပါတယ် 
            
            ဘာ Major တက်လို့ ရလဲကို ကျောင်းတကျောင်း စီ Website မှာရှာလို့ ရပါတယ် 
            
            Germany မှာ ကျောင်းတက်မယ် ဆိုရင် တောင် ရေရှည်မှာ English Language တခုတည်း မလုံလောက်လို့ German စကားက တတ်ကိုတတ်ရပါတယ် 
            Vietnam မှာ ကျောင်းတက်ပြီး အလုပ်လုပ်ချင်တဲ့ သူတွေ အတွက် Vietnam စကားက လိုကို လိုအပ်ပါတယ် 
            
            Education အတွက် အမနဲ့ Consulting လုပ်ချင်တယ် ဆိုရင် 
            Comment က Page မှာ သွားပြီး Register လုပ်ထားလို့ ရပါတယ်
            ပညာရေးနဲ့ သက်ဆိုင်တာ ဆို အဲ့ Page မှာ မေးလို့ ရပါတယ် 
            ကျောင်းသားတယောက် ချင်းစီ ကို သေချာ Consulting လုပ်ပေးပါ့မယ် 
            ပညာရေး ကို အားပေးတဲ့သူမို့ ပညာရေးလမ်းကြောင်းနဲ့ ပတ်သက်တာ မှန်သမျှတတ်နိုင်သလောက်  ကူညီပေးပါ့မယ်`,
          },
        ],
      },
      immigration: {
        ref: [
          'https://yangon.thaiembassy.org/en/page/do-i-need-a-visa?menu=5d7d27c515e39c2e64001ff4',
        ],
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
