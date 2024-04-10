export const countries = [
  { label: 'thailand', code: 'th' },
  { label: 'vietnam', code: 'vn' },
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
      residentialStatus: {
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
      residentialStatus: {
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
};
