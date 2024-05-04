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
          {id: 1, name: 'RentHub', imageUrl: "/assets/thai/accomodation/renthub.png", description: ' A popular real estate platform with millions and brokers', tags: ['Real Estate'], source: 'https://www.renthub.in.th/' },
          {id: 2, name: 'AirBnb', imageUrl: "/assets/thai/accomodation/airbnb.png", description: ' A popular real estate platform with millions and brokers', tags: ['Real Estate'], source: 'https://www.airbnb.com/thailand/stays' },
          {id: 3, name: 'PropertyScout', imageUrl: "/assets/thai/accomodation/ppScout.svg", description: ' A popular real estate platform with millions and brokers', tags: ['Real Estate'], source: 'https://www.airbnb.com/thailand/stays' },
        
        ],
        suggestions: [
        ],
        checkPoints: {en: [
          'Electricity and water bills that could be quite expensive when landloard define it rather than the goverment rate',
          'Location should be near to the BTS or MRT, if not you may use the transit that can cost more than renting a better location '
        ], 
        my: [
          'အိမ်ငှားလျှင် လျှပ်စစ်မီးမီတာဘေလ် နှင့်ရေ မီတာဘေလ်သည် အိမ်ရှင်သတ်မှတ် ထားသောနှုန်းများ က အစိုးရသတ်မှတ်ချက်သောစျေး ထက် ပိုနိုင်သောကြောင့်စျေးနှုန်များကိုသေချာစွာမေးမြန်းသင့်ပါတယ်။ ',
          'အိမ်တည် ရှိသောနေရာ သည် BTS, MRT စသော ရထားဘူတာများနှင့်  လမ်းလျှောက်နိုင်သော အကွာ ထက်ဝေးနေပါက ဘူတာသို့သွားရန် ဆိုင်ကယ် (သို့) တုတ်တုတ်ငှားရမ်းလျှင် နေထိုင်စရိတ်သည် သတ်မှတ်ထားသောနှုန်းထက် ပိုမြင့်နိုင်ပါတယ်။ '
        ]},
      },
      education: {
        suggestions: [
          {
            author: 'Travel Masters',
            address: 'Thailand',
            header: `ဘန်ကောက်နဲ့ ချင်းမိုင်မှာ ကျောင်းတက်မယ်ဆိုရင်`,
            content: `***1.*** Language School, University Language Program Class နဲ့ စာမကျက်ချင်တဲ့ သူတွေကတော့ Self- defence School (ကိုယ်ခံပညာကျောင်း) တွေ တက်လို့ရပါတယ်။

            ***2.*** အပေါ်ကကျောင်းအားလုံးက ဘာ အောင်လက်မှတ်မှ ပြစရာမလိုဘဲ ကျောင်း ED Visa နဲ့ (၁၂ လ) တချို့ကျောင်းတွေက (၁၅ လ) ရပါတယ်။
           
            ***3.*** ထိုင်းမှာ TR Visa နဲ့နေရင်း ED Visa ရဖို့ ကျောင်းက စာရင်းသွင်းတာ (၂၁)ရက် ကနေ (၂ လ) ကျောင်းကအချိန်ယူပါတယ်။ 
            
            ***4.*** စာရင်းသွင်းပြီးလို့ Immigration မှာ တုံးထုပြီး တာနဲ့ ကျောင်းသားအဖြစ် (၁၂ လ) (သို့) (၁၅ လ) အေးအေးဆေးဆေး နေလို့ရပါတယ်။ 
            
            ***5.*** ဘဏ်ကဒ်ဖွင့်ဖို့ ကျောင်းတွေကနေ စီစဉ်ပေးပါတယ်။
            
            ***6.***  ပထမဆုံးအကြိမ် ED Visa နဲ့ (၂၀၀၀), (၂) လ တစ်ကြိမ် (၁၉၀၀) နဲ့ Immigration ရုံးမှာ တုံးထုရပါတယ်။ တုံးထုဖို့အတွက် ကျောင်းက ထောက်ခံစာတွေ စီစဉ်ပေးပါလိမ့်မယ်။
            
            ***7.***  (၂ လ) တကြိမ် မသွားချင် မထုချင်ရင် North university of Chiang Mai မှာ တက်လို့ရပါတယ်။
           
            ***8.***  ကုန်ကျစရိတ်က လက်ခံတဲ့ကျောင်းအပေါ်မူတည်ပြီး တစ်နှစ်ကို ဘတ် ၄၅၀၀၀ ကနေ ၅၈၀၀၀ ဘတ် ထိ ရှိပါတယ် ။`,
          },
        ],
        refs: [
          {id: 1, name: 'Travel Masters', imageUrl: "/assets/thai/visa/travelmasters.jpg", description: ' A popular real estate platform with millions and brokers', tags: ['Education'], source: 'https://www.facebook.com/profile.php?id=100064029276063&mibextid=ZbWKwL' },
        ],
      },
      immigration: {
        official_announcements: [{
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Tourist Visa (TR)`,
            details: {
              required_documents: `**1.** Original passport with at least six months of remaining validity and blank visa pages.

              **2.** Both original bank statement and original bank book with at least 2 million kyats or equivalent amount.
              
              (Only those who are under 18 years old, parents or guardian’s bank statements are acceptable. We will
              
              consider with original household registration, original ID cards and original birth certificate)
              
              **3.** Present the completed and signed “Visa Application Form”
              
              **4.** A reservation of round-trip flight ticket (over 14 days)
              
              **5.** Present hotel reservation, applicants must have the proof of booking over 14 days OR for lease
              agreement, the agreement had to be signed from both sides and had to attached ID of the owner of the property and deed of the property OR for the owner of the condominium they have to present the proof of ownership of that condominium.
                  
                  _**The consular officer reserves the right to request additional documents as deemed necessary**_`,
              visa_fee: `40 USD (single entry)
              
                    200 USD (multiple entries)`,
              visa_validity: `3 months  (Duration of stay in Thailand is 60 days from the date of arrival and the visa validity is 3 months from the date of issue.)
              
              6 months (multiple entries)`,
              visa_period: `Upon arrival, travelers with a TR visa will be permitted to stay in Thailand for 60 days maximum. Those who wish to stay longer or change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Center B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 (or at [http://www.immigration.go.th](http://www.immigration.go.th/)). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.

              `,
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `ခရီးသွား ဗီဇာ`,
            details: {
              required_documents: `၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိသော နိုင်ငံကူး လက်မှတ် နှင့် ဗီဇာရိုက်နှိပ် ရန် စာရွက်လွတ် များ ကျန်ရှိရမည် ။

                         ၂။ အနည်းဆုံး  မြန်မာကျပ်ငွေ သိန်း (၂၀) နှင့် ညီမျှသော ပမာဏရှိသည့် ဘဏ် စာရင်း နှင့် မူရင်း ဘဏ်စာအုပ်။
              (အသက် ၁၈ နှစ်အောက်  ရှိသောလျှောက်ထားသူများ သည် အုပ်ထိန်းသူ ပိုင်ဆိုင်သော ဘဏ်စာရင်း နှင့် ဘဏ်စာအုပ်သုံး၍လျှောက်ထားခွင့်ရှိသည်။ ထိုအချက်လက်များကို မူရင်းသန်း ေခါင်စာရင်း ၊ မှတ်ပုံတင်နှင့်မွေးစာရင်း တို့နှင့် စစ်ဆေးပီးလျှောက်ထားခွင့် သုံးသပ်ပါမည်။)
                  
              ၃။  သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီးရန်။
              
              ၄။ အသွား အပြန်လေယာဉ် လက်မှတ် (အပြန်လက်မှတ် သည် အသွားလက်မှတ်နှင့် ၁၄ရက်ထက်ပိုသောရက်တွင် ဖြစ်ရပါမည်)

              ၅။ နေထိုင်ရန် အတွက် ဟိုတယ် ဘွတ်ကင် (သို့မဟုတ်) လက်မှတ်ထိုးပီးထားသော အိမ်စာချုပ်(၁၄ ရက်ထက်ပို၍ စီစဉ်ထားရန်)၊ အိမ်ပိုင်ရှင် အဖြစ်လက်မှတ်ထိုးသူသည် ပိုင်ဆိုင်မှုအပြည့်စုံပြနိုင်သော သူဖြစ်ရပါမည်။
              
              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်းများ တောင်းခံပိုင်ခွင့်ရှိသည်။**_`,
              visa_fee: `အမေရိကန်ဒေါ်လာ ၄၀ (ဝင်ခွင့် တစ်ကြိမ်)

              အမေရိကန်ဒေါ်လာ ၂၀၀ (ဝင်ခွင့် တစ်ကြိမ်ထပ်ပို၍)`,
              visa_validity: `၃ လ။ (ထိုင်းနိုင်ငံတွင်နေထိုင်ရန်ကြာချိန်သည် ဆိုက်ရောက်သည့်နေ့မှရက်ပေါင်း ၆၀ ဖြစ်ပြီး၊ ဗီဇာသက်တမ်းသည် ထုတ်ပေးသည့်နေ့မှ ၃လအတွင်း သွားရောက်ခွင့်ရှိသည်။)
              
              ၆ လ။ (တစ်ကြိမ်ထက်ပိုသော ဝင်ခွင့်များအတွက်)`,
              visa_period: `ဆိုက်ရောက် သောနေ့ပေါ်မူတည်၍ TR ဗီဇာဖြင့် ခရီးသွားများကို ထိုင်းနိုင်ငံတွင် ရက်၆၀ အများဆုံးနေထိုင်ခွင့်ပြုမည်ဖြစ်သည်။ ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/) ။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`,
            
            }
          }
        },
        {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Non-Immigrant ED Visa`,
            details: {
              required_documents: `**1.** Passport or travel document with validity no less than 6 months  

              **2.**  Visa application form completely filled out and signed  
              
              **3.** Recent 3.5 cm x 4.5 cm photograph of the applicant  

              **4. Letter of Acceptance/Confirmation** from the school, university, training institution, or company in Thailand which must be typed in the school/company’s letterhead signed by an authorized person and a copy of school license or business registration. Copies of documents must be signed by an authorized person and affixed the seal.
              
              **5. For those who wish to study at elementary schools, high schools, and vocational institutions in Thailand** are required to submit a letter of certificate from related educational authorities of the Ministry of Education e.g. Provincial Education Office, Office of the Private Education Commission EXCEPT those who wish to study at international schools.  
              
              **6. For those who wish to study at university in Thailand** are required to submit police/criminal record from hosting country. 
              
              **7.** In case of an internship, a letter from the university in which the applicant is enrolled  
              
              **8.** Dependents of students (under 20 years of age) who have enrolled for a full-time, long-term educational course in Thailand are eligible to apply for a single-entry Non-Immigrant O visa. Required documents are the same as those required for a Non-Immigrant ED visa, plus proof of relationship (such as marriage certificate, birth certificate).
              
              _**The consular officer reserves the right to request additional documents as deemed necessary**_`,
              visa_fee: `80 USD `,
              visa_validity: `3 months`,
              visa_period: `Travelers coming to Thailand with this type of visa will be permitted to stay in the Kingdom for a period not exceeding 90 days. Holders of this type of visa are entitled to stay in Thailand for a maximum period of 90 days. They may apply for an extension of stay at the Office of the Immigration Bureau and may be granted such extension for one year from the date of their first entry into Thailand.`,
              visa_extension: `Those who wish to stay longer or may wish to change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Complex Building B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 or [http://www.immigration.go.th](http://www.immigration.go.th/). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.`
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `ပညာသင်များအတွက် ဗီဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိသော နိုင်ငံကူး လက်မှတ် (သို့မဟုတ်) ခရီးသွား အထောက်အထား ။

              ၂။ သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံ ဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီး ရန်။
              
              ၃။ မကြာမီက ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ ထိုင်းနိုင်ငံရှိ ကျောင်း၊ တက္ကသိုလ်၊ သင်တန်းကျောင်း၊ ကုမ္ပဏီ စသည်တို့မှ လက်ခံစာ (သို့မဟုတ်) အတည်ပြုစာ များ နှင့် ၎င်းတို့တွင် ကျောင်း၊ ကုမ္မဏီ တံဆိပ်၊ သက်ဆိုင်ရာ လူကြီး၏ လက်မှတ်၊ ကျောင်းလိုင်စင်၊ များပါရှိရပါမည်။ စာရွက်စာတမ်း မိတ္တူ များဖြစ်ပါက လည်း သက်ဆိုင် ရာ တာဝန်ရှိသူများ ၏ လက်မှတ်နှင့် စည်းတံဆိပ် များ ပါရှိမည်။
              
              ၅။ ထိုင်းနိုင်ငံရှိ မူလတန်းကျောင်းများ၊ အထက်တန်းကျောင်းများနှင့် အသက်မွေးဝမ်းကျောင်းကျောင်းများတွင် ပညာသင်ကြားလိုသူများသည် ပညာရေးဝန်ကြီးဌာန၏ သက်ဆိုင်ရာ ပညာရေးအာဏာပိုင်များထံမှ  ေထာက်ခံစာ ကို တင်ပြရမည်။ ဥပမာ ပြည်နယ်ပညာရေးမှူးရုံး၊ ပုဂ္ဂလိကပညာရေးကော်မရှင်ရုံး (နိုင်ငံတကာကျောင်းသားများမှ လွဲ၍)
              
              
              ၆။ တက္ကသိုလ်များတွင် ပညာသင်သူများ အတွက် အိမ်ရှင်နိုင်ငံမှ ရဲ/မှုခင်းမှတ်တမ်း များတင်သွင်း ရန် လိုအပ်သည်။
              
              ၇။ အလုပ်သင်များသည် တက်ရောက်မည့်ကျောင်း မှ စာရွက်စာတမ်းမျာ တင်သွင်းရမည်။
              
              ၈။ အသက် ၂၀ အောက် ကျောင်းသားများ ၏ အုပ်ထိန်းသူများသည် ဝင်ခွင့်တကြိမ်ရှိသော Non-Immigrant O ဗီဇာလျှောက်ထားခွင့် ရှိသည်။  အုပ်ထိန်းသူများ ဗီဇာေလျှာက်ထား ရာတွင်ကျောင်းသား များအတွက် လိုအပ်သော စာရွက်စာ တမ်းများနှင့် အတူ ေတာ်စပ်မှု အ ထောက်အထားများ (လက်ထပ်စာချုပ် (သို့) မွေးစာရင်း)  ေပါင်း၍ တင်ပြရမည်။

              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်းများ တောင်းခံပိုင်ခွင့်ရှိသည်။**_`,
              visa_fee: `အမေရိကန်ဒေါ်လာ ၈၀`,
              visa_validity: `၃ လ`,
              visa_period: `ဤဗီဇာအမျိုးအစားကို ကိုင်ဆောင်ထားသူများသည် ထိုင်းနိုင်ငံတွင် ရက်ပေါင်း ၉၀ အတွင်း အများဆုံးနေထိုင်ခွင့်ရှိသည်။ ၎င်းတို့သည် လူဝင်မှုကြီးကြပ်ရေး ဗျူရိုရုံးတွင် နေထိုင်ခွင့် သက်တမ်းတိုးရန် လျှောက်ထားနိုင်ပြီး ထိုင်းနိုင်ငံသို့ ပထမဆုံး ဝင်ရောက်သည့်နေ့မှစ၍ တစ်နှစ်အထိ သက်တမ်းတိုးခွင့် ရနိုင်သည်။`,
              visa_extension: `ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/)  တွင် ခွင့်ပြုချက် လျှောက်ထားရမည်။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`
            }
          }
        },
        {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Non-Immigrant B Visa`,
            details: {
              required_documents: `**1.** Passport or travel document with validity not less than 6 months
              
              **2.** Visa application form completely filled out and signed 
              
              **3.** Recent 3.5 cm x 4.5 cm photograph of the applicant

              **4.** Financial statement, including Bank statement or book bank 
              
              **5.** Business related documents as follows: 

              **_Employment in Thailand_**  
              
              **-** A letter from the employer in Thailand, requesting the Royal Thai Embassy to issue appropriate visa for the applicant, indicating details of employment, including position, salary and length of contract. And a copy of Thai ID of the person signing the letter.  

              **-** A work permit or an approval letter from the Department of Employment regarding the “WP3” form submitted on behalf of the applicant by the employer (Japanese nationals are exempted in accordance with JTEPA),  
  
              **-** Evidence of the applicant’s professional qualifications and work experience  
  
              **-** A work permit of the applicant’s previous employment or its certified copy (**compulsory for an applicant who had worked in Thailand**)  

              **-** Copy of corporate documents e.g. 1) List of shareholders 2) Business registration and business license 3) Details of business operations 4) List of foreign employees, nationalities and positions 5) Address of the company 6) Balance sheet, statement of Income Tax and Business Tax (Por Ngor Dor 50 and Por Ngor Dor 30) of the latest year 7) Alien income tax return (Por Ngor Dor 91) and 8) Value-added tax registration (Por Por 20). _These documents must be signed by an authorized person and stamped with a company’s seal. A copy of Thai ID of the authorized person must also be submitted.
             
              _**Teaching in Thailand**_

              **-** A letter from the institution/school signed by an authorized person and stamped with the institution/school’s seal, requesting the Royal Thai Embassy to issue appropriate visa for the applicant. And a copy of Thai ID of the person signing the letter.
              
              **-** A letter of approval from the relevant government agency, e.g. the Office of the Private Education Commission or the Office of the Basic Education Commission  

              **-**  A letter of acceptance from the institution/school or a signed employment contract  
             
              **-** A police certificate or a criminal record clearance issued by authorities of the applicant’s country of nationality or residence (issued within three months prior to the date of visa application and should be notarized by an authorized body or a diplomatic or consular mission)  
             
              **-** Evidence of professional qualifications and work experience  
              
              **-** A copy of institution/school license or registration (private school/institution)  
              
              **-** A copy of institution/school appointment of its director (private school/institution)

              _**Professional sport player**_ 

              **-** Approval by the Ministry of Foreign Affairs of Thailand is required prior to submitting a visa application.  

              **-** Evidence of previous overseas employment in English and certified by the Ministry of Foreign Affairs of the applicant’s country of residence or relevant authorities
              
              _**Training or internship**_ 
              
              **-** A letter from the sponsoring company/organization in Thailand, requesting the Royal Thai Embassy to issue appropriate visa for the applicant, indicating details of training or internship, including duration, scope of training/internship and payment (if any). And a copy of Thai ID of the person signing the letter.  
              
              **-** Copy of corporate documents (See above)  
              
              **-**  If the training or internship is part of an academic curriculum, a letter from the applicant’s university/academic institution confirming the requirement and requesting the Royal Thai Embassy to issue appropriate visa for the applicant. In this case, the applicant will be issued with **Non-Immigrant “ED”** visa.
              
              _**Conducting business or attending a conference**_  
              
              **Documents from Thai side** 
              
              **-** Documents from host company/organization in Thailand  
              
              **-** An invitation letter, stating the applicant’s purpose of visit and duration of stay in Thailand. And a copy of Thai ID of the person signing the letter.  
              
              **-** Company/organization’s registration documents

              **Documents from Myanmar side**  
              
              **-** A letter from the current employer, confirming the applicant’s current position, salary, purpose of visit, and duration of stay in Thailand. And a copy of ID of the person signing the letter.  
              
              **-** Company/organization’s registration documents  
              
              **-** In case of a business owner, a letter of intent financial statements and evidence of business ownership

              **_Consular Officer reserves the right to request addition documents or interview as_** **_necessary._**
              `,
              visa_fee: `40 USD (single entry)
              
                    200 USD (multiple entries)`,
              visa_validity: `3 months  (Duration of stay in Thailand is 60 days from the date of arrival and the visa validity is 3 months from the date of issue.)
              
                    6 months (multiple entries)`,
              visa_period: `Travelers coming to Thailand with this type of visa will be permitted to stay in the Kingdom for a period not exceeding 90 days. Holders of this type of visa are entitled to stay in Thailand for a maximum period of 90 days. They may apply for an extension of stay at the Office of the Immigration Bureau and may be granted such extension for one year from the date of their first entry into Thailand.`,
              visa_extension: `Those who wish to stay longer or may wish to change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Complex Building B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 or [http://www.immigration.go.th](http://www.immigration.go.th/). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.`
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `စီးပွားရေး (သို့) အလုပ်လုပ်ကိုင် မည့်သူအတွက် ဗီဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိေသာ နိုင်ငံကူး လက်မှတ် (သို့မဟုတ်) ခရီးသွား အ ေထာက်အထား ။

              ၂။ သတ်မှတ် ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံ ဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီး ရန်။
              
              ၃။ မကြာမီ က ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ ဘဏ်စာရင်း နှင့် ဘဏ်စာအုပ်
              
              ၅။ အောက်ပါဖော်ပြထားသော လုပ်ငန်းဆိုင်ရာ စာရွက်စာတမ်းများ:

              **_ထိုင်းနိုင်ငံတွင် အလုပ်လုပ်ကိုင်ခွင့် ရှိသူများအတွက်_**  

              **-** ထိုင်းနိုင်ငံရှိ အလုပ်ရှင်ထံမှ ရာထူး၊ လစာနှင့် စာချုပ်သက်တမ်း အပါအဝင် အလုပ်အကိုင် အသေးစိတ်ဖော်ပြချက် တို့ပါဝင်သော အလုပ် ခေါ်စာ အသေးစိတ်။ အလုပ် ခန့်အပ်သူ ဘက်မှ လက်မှတ် ရေးထိုးသူ၏ ထိုင်း ID မိတ္တူ၊

              **-** အလုပ်ပါမစ် သို့မဟုတ် အလုပ်ရှင်က လျှောက်ထားသူကိုယ်စား တင်ပြသော "WP3" ဖောင်နှင့် ပတ်သက်၍ အလုပ်ခန့်ထားရေးဌာနမှ ခွင့်ပြုချက်စာ။ 

              **-** လျှောက်ထားသူ၏ ပရော်ဖက်ရှင်နယ် အရည်အချင်းနှင့် လုပ်ငန်းအတွေ့အကြုံ အထောက်အထား

              **-** လျှောက်ထားသူ၏ယခင်အလုပ်လုပ်ကိုင်ခွင့် သို့မဟုတ် ၎င်း၏ထောက်ခံချက်မိတ္တူ (**ထိုင်းနိုင်ငံတွင် အလုပ်လုပ်ဖူးသော လျှောက်ထားသူအတွက် မဖြစ်မနေ တင်ပြရန်**)
              
              **-** ကုမ္ပဏီစာရွက်စာတမ်းမိတ္တူ ဥပမာ။ 1) အစုရှယ်ယာရှင်များစာရင်း 2) လုပ်ငန်းမှတ်ပုံတင်ခြင်းနှင့် လုပ်ငန်းလိုင်စင် 3) လုပ်ငန်းလည်ပတ်မှုအသေးစိတ် 4) နိုင်ငံခြားဝန်ထမ်းများစာရင်း 5) ကုမ္ပဏီ၏လိပ်စာ 6) စာရင်းရှင်းတမ်း၊ ဝင်ငွေခွန်နှင့် လုပ်ငန်းခွန်ထုတ်ပြန်ချက် (Por Ngor Dor၊ နောက်ဆုံးနှစ်၏ 50 နှင့် Por Ngor Dor 30) 7) နိုင်ငံခြားဝင်ငွေခွန် ပြန်လည်ပေးအပ်ခြင်း (Por Ngor Dor 91) နှင့် 8) တန်ဖိုးမြှင့်အခွန်မှတ်ပုံတင်ခြင်း (Por 20)။ _ ဤစာရွက်စာတမ်းများကို အခွင့်အာဏာရှိသူမှ လက်မှတ်ရေးထိုးပြီး ကုမ္ပဏီတံဆိပ်တုံးထုရပါမည်။ လုပ်ပိုင်ခွင့်ရှိသူ၏ ထိုင်း ID မိတ္တူကိုလည်း တင်ပြရမည်။
              
              _**ထိုင်းနိုင်ငံတွင် ပညာသင်ကြားပေးသူများအတွက်**_

              **-** တာဝန်ရှိသူမှ လက်မှတ်  ရေးထိုးထားသော အဖွဲ့အစည်း/ကျောင်း၏ တံဆိပ် ပါ ထောက်ခံစာတစ်စောင်။ လက်မှတ် ရေးထိုးသူ၏ ထိုင်း ID မိတ္တူ၊
              
              **-** သက်ဆိုင်ရာ အစိုးရဌာန မှ ခွင့်ပြုချက် စာ။ ဥပမာ ပုဂ္ဂလိကပညာရေးကော်မရှင်ရုံး သို့မဟုတ် အခြေခံပညာရေးကော်မရှင်ရုံး။

              **-**  အဖွဲ့အစည်း/ကျောင်းမှ လက်ခံစာ သို့မဟုတ် လက်မှတ်ရေးထိုးထားသော အလုပ်အကိုင်စာချုပ်။
             
              **-** လျှောက်ထားသူ၏ နေထိုင်ရာ အာဏာပိုင်များမှ ထုတ်ပေးသော ရဲစခန်းထောက်ခံစာ သို့မဟုတ် ပြစ်မှုကင်းစင် ေကြာင်းထောက်ခံစာ (ဗီဇာလျှောက်ထားသည့်နေ့မတိုင်မီ သုံးလအတွင်း ထုတ်ပေးပြီး တရားဝင်ခွင့်ပြုထားသော အဖွဲ့အစည်း သို့မဟုတ် သံတမန် သို့မဟုတ် ကောင်စစ်ဝန်ရုံးမှ အသိအမှတ်ပြုခံရပီးဖြစ်ရမည်)
             
              **-** ပရော်ဖက်ရှင်နယ် အရည်အချင်းနှင့် လုပ်ငန်းအတွေ့အကြုံ အထောက်အထားများ။

              **-** အဖွဲ့အစည်း/ကျောင်းလိုင်စင် (ကိုယ်ပိုင်ကျောင်း/အင်စတီကျူးရှင်း)။
              
              **-** ပုဂ္ဂလိကကျောင်း/အင်စတီကျူးရှင်း၏ ဒါရိုက်တာ ခန့်အပ်မှုဆိုင်ရာ စာရွက်စာတမ်းမိတ္တူ။

              _**ပရော်ဖက်ရှင်နယ်အားကစားကစားသမားများအတွက်**_ 

              **-** ဗီဇာ မလျှောက်ထားမီ ထိုင်းနိုင်ငံ နိုင်ငံခြားရေး ဝန်ကြီးဌာန မှ ခွင့်ပြုစာ ရယူထားရမည်။
              
              **-** နိုင်ငံခြားတွင် ဝင်ရောက်ကစားခဲ့သော အထောက်အထား နှင့် အမိနိုင်ငံ၏ နိုင်ငံခြားရေး ဝန်ကြီးဌာန (သို့မဟုတ်) သက်ဆိုင်ရာ အာဏာပိုင်များထံမှ ခွင့်ပြုစာ။


              _**သင်တန်း သို့မဟုတ် အလုပ်သင်များအတွက်**_ 

              **-** စီစဉ်ကျင်းပသောထိုင်းနိုင်ငံရှိ ကုမ္ပဏီ/အဖွဲ့အစည်းမှ အကြောင်းအရာ၊ အချိန်၊  ငွေပေးချေမှု (ပါဝင်ပါက) စသည့်အသေးစိတ် များနှင့် တာဝန်ရှိသူ လက်မှတ် တို့ပါဝင်သော ဖိတ်ခေါ်စာ (သို့မဟုတ်) စာရွက်စာတမ်း၊ လက်မှတ်ရေးထိုးသူ၏ ထိုင်း ID မိတ္တူ။ 
              
              **-** အစီစဉ် ကျင်းပသော ကုမ္ပဏီ၏ စာရွက်စာတမ်းမိတ္တူ ဥပမာ။ 1) အစုရှယ်ယာရှင်များစာရင်း 2) လုပ်ငန်းမှတ်ပုံတင်ခြင်းနှင့် လုပ်ငန်းလိုင်စင် 3) လုပ်ငန်းလည်ပတ်မှုအသေးစိတ် 4) နိုင်ငံခြားဝန်ထမ်းများစာရင်း 5) ကုမ္ပဏီ၏လိပ်စာ 6) စာရင်းရှင်းတမ်း၊ ဝင်ငွေခွန်နှင့် လုပ်ငန်းခွန်ထုတ်ပြန်ချက် (Por Ngor Dor၊ နောက်ဆုံးနှစ်၏ 50 နှင့် Por Ngor Dor 30) 7) နိုင်ငံခြားဝင်ငွေခွန် ပြန်လည်ပေးအပ်ခြင်း (Por Ngor Dor 91) နှင့် 8) တန်ဖိုးမြှင့်အခွန်မှတ်ပုံတင်ခြင်း (Por 20)။ _ ဤစာရွက်စာတမ်းများကို အခွင့်အာဏာရှိသူမှ လက်မှတ်ရေးထိုးပြီး ကုမ္ပဏီတံဆိပ်တုံးထုရပါမည်။ လုပ်ပိုင်ခွင့်ရှိသူ၏ ထိုင်း ID မိတ္တူကိုလည်း တင်ပြရမည်။
              
              **-**  ပညာရေးအဖွဲ့အစည်း များကကျင်းပသော အစီစဉ် ဖြစ်ပါက ၎င်း အဖွဲ့အစည်း၏ စာရွက်စာတမ်း များနှင့်တကွ  လျှောက်ထားလျှင် သင့်လျော်ရာ ဗီဇာ ဖြစ်သော ပညာသင်များအတွက် ဗီဇာ (**Non-Immigrant “ED”**) ထုတ်ပေးမည်ဖြစ်သည်။
              
              
              _**စီးပွားရေးလုပ်ခြင်း သို့မဟုတ် ညီလာခံတက်မည့်သူများအတွက်**_

              **ထိုင်းဘက်မှ လိုအပ်သော စာရွက်စာတမ်းများ** 
              
              **-** ထိုင်းနိုင်ငံရှိ ကုမ္ပဏီ/အဖွဲ့အစည်းထံမှ စာရွက်စာတမ်းများ  
              
              **-** လျှောက်ထားသူ၏ ခရီးစဉ်ရည်ရွယ်ချက်နှင့် ထိုင်းနိုင်ငံတွင် နေထိုင်သည့်ကြာချိန်တို့ကို ဖော်ပြထားသည့် လက်မှတ်ရေးထိုးထားပီး ဖိတ်စာတစ်စောင်။ လက်မှတ် ရေးထိုးသူ၏ ထိုင်း ID မိတ္တူ၊ 
              
              **-** ကုမ္ပဏီ/အဖွဲ့အစည်း၏ မှတ်ပုံတင်စာရွက်စာတမ်းများ

              **မြန်မာဘက်မှ လိုအပ်သော စာရွက်စာတမ်းများ**  
              
              **-** လက်ရှိအလုပ်ခန့်အပ်ထားသော အဖွဲ့စည်းမှ လက်ရှိ ရာထူး၊ လုပ်ခလစာ၊ သွားရောက်ရမည့် ရည်ရွယ်ချက်၊  ထိုင်းနိုင်ငံတွင် နေထိုင်မည့် ကြာချိန်ကာလ၊ စသည့်အချက်လက်များနှင့် တာဝန်ရှိသူလက်မှတ် ပါဝင်သည့် စာရွက်စာတမ်း။ လက်မှတ်ရေးထိုးသူ၏ အထောက်ထား ID။
              
              **-** ကုမ္ပဏီ/အဖွဲ့အစည်း၏ မှတ်ပုံတင်စာရွက်စာတမ်းများ  
              
              **-** စီးပွားရေးလုပ်ငန်းရှင် ဖြစ်ပါက ဘဏ္ဍာရေးရှင်းတမ်းများနှင့် လုပ်ငန်းပိုင်ဆိုင်မှုဆိုင်ရာ အထောက်အထားများ။

              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်း (သို့မဟုတ်) အင်တာဗျူးများ တောင်းဆိုပိုင်ခွင့်ရှိသည်။**_`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၄၀ (ဝင်ခွင့် တစ်ကြိမ်)

              အမေရိကန်ဒေါ်လာ ၂၀၀ (ဝင်ခွင့် တစ်ကြိမ်ထပ်ပို၍)`,
              visa_validity: `၃ လ။ (ဝင်ခွင့် တစ်ကြိမ် အတွက်)
              
              ၆ လ။ (တစ်ကြိမ်ထက် ပိုသော ဝင်ခွင့် များအတွက်)`,
              visa_period: `ဤဗီဇာအမျိုးအစားကို ကိုင်ဆောင်ထားသူများသည် ထိုင်းနိုင်ငံတွင် ရက်ပေါင်း ၉၀ အတွင်း အများဆုံးနေထိုင်ခွင့်ရှိသည်။ ၎င်းတို့သည် လူဝင်မှုကြီးကြပ်ရေး ဗျူရိုရုံးတွင် နေထိုင်ခွင့် သက်တမ်းတိုးရန် လျှောက်ထားနိုင်ပြီး ထိုင်းနိုင်ငံသို့ ပထမဆုံး ဝင်ရောက်သည့်နေ့မှစ၍ တစ်နှစ်အထိ သက်တမ်းတိုးခွင့် ရနိုင်သည်။`,
              visa_extension: `ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/) တွင် ခွင့်ပြုချက် လျှောက်ထားရမည်။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`
            }
          }
        },
        {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Transit Visa`,
            details: {
              required_documents: `**1.** passport or travel document of which validity is no less than 6 months  
              
              **2.** visa application form completely filled in  
              
              **3.** 2 recent color photos (3.5x4.5 cm)  
              
              **4.** visa issued by the country of destination (except traveling to own country)  
              
              **5.** Air ticket (if required by Consular officer)`,
              visa_fee: `35 USD (single entry)`,
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `သွားရောက်မည့်နိုင်ငံသို့ မရောက်မီ ထိုင်းနိုင်ငံတွင် ခေတ္တသွားရောက်လည်ပတ်ခွင့် ဗီဲဲဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိသော နိုင်ငံကူး လက်မှတ် (သို့မဟုတ်) ခရီးသွား  အထောက်အထား ။

              ၂။ သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီးရန်။
              
              ၃။ မကြာမီက ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ သွားရောက်မည့်နိုင်ငံမှ ထုတ်ပေးထားသော ဗီဇာ။

              ၅။ အသွားအပြန်လေယာဉ်လက်မှတ် (တာဝန်ရှိသူမှ တောင်းခံပါက)`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၃၅ (ဝင်ခွင့် တစ်ကြိမ်)`,
            }
          }
        }, {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Medical Tourist Visa`,
            details: {
              required_documents: `**1.** Passport or travel document with validity not less than 6 months  
              
              **2.** Visa application form completely filled out and signed  
              
              **3.** Recent 3.5 cm x 4.5 cm photograph of the applicant  
              
              **4.** Copy of the Confirmation Letter or Affidavit of Support with a stamp from the Ministry of Public Health of Thailand  
              
              **5.** Evidence of adequate finance for the entire duration of stay in Thailand (at least 1,000 USD per person)`,
              visa_fee: `40 USD (single entry)`,
              visa_period: `Upon arrival, travelers with a MT visa will be permitted to stay in Thailand for 60 days maximum. Those who wish to stay longer or change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Center B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 (or at [http://www.immigration.go.th](http://www.immigration.go.th/)). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.`
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `ကျန်းမာရေး ပြသလိုသူများအတွက် ခရီးသွားဗီဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး၆လရှိသော နိုင်ငံကူးလက်မှတ် (သို့မဟုတ်) ခရီးသွား  အထောက်အထား ။

              ၂။ သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီးရန်။
              
              ၃။ မကြာမီက ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ ထိုင်းနိုင်ငံ ပြည်သူ့ကျန်းမာရေး ဝန်ကြီးဌာနမှ တံဆိပ်ခေါင်းဖြင့် ထောက်ခံကြောင်း အတည်ပြုလွှာ သို့မဟုတ် ထောက်ခံချက် အထောက်အထား မိတ္တူ

              ၅။ ထိုင်းနိုင်ငံတွင်နေထိုင်သည့်ကာလတစ်ခုလုံးအတွက် လုံလောက်သောငွေကြေးအထောက်အထား (လူတစ်ဦးလျှင် အနည်းဆုံး အမေရိကန် ဒေါ်လာ ၁ ထောင်)`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၄၀ (ဝင်ခွင့် တစ်ကြိမ်)`,
              visa_period: `ဆိုက်ရောက် သောနေ့ပေါ်မူတည်၍ MT ဗီဇာဖြင့် ခရီးသွားများကို ထိုင်းတွင် ရက် 60 အများဆုံးနေထိုင်ခွင့်ပြုမည်ဖြစ်သည်။ ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/) ။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`,
            }
          }
        }, {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Non-Immigrant O Visa (Family Members/Dependents)`,
            details: {
              required_documents: `**1.** Passport or travel document with validity no less than 6 months  
              
              **2.** Visa application form completely filled out and signed  
              
              **3.** Recent 3.5 cm x 4.5 cm photograph of the applicant  
              
              **4.** Company or school’s guarantee letter addressed to the Royal Thai Embassy, Phnom Penh, stating that the applicant is the spouse or family member of those working or studying in Thailand  
              
              **5.** Copy of passport pages of those working or studying in Thailand. The passport pages should include the personal data page and Thai visa page.  
              
              **6.** Copy of Thai work permit or student ID card  
              
              **7.** Copy of marriage certificate (for spouse)  
              
              **8.** Copy of birth certificate(for parents)  
              
              **9.** Company’s recent business certificate and relevant documents to confirm that the company is still active  
              
              **10.** In case the spouse is working with a company under BOI promotion, the original letter from BOI for grant of dependent’s visa  
              
              **11.** Applicant’s evidence of adequate finance
              
              **_The consular officer reserves the right to require additional documents as deemed necessary._**`,

              visa_fee: `80 USD (single entry)
              
                200 USD (multiple entries)`,
              visa_validity: `3 months`,
              visa_period: `Travelers coming to Thailand with this type of visa will be permitted to stay in the Kingdom for a period not exceeding 90 days.`,
              visa_extension: `Those who wish to stay longer or may wish to change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Complex Building B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 or [http://www.immigration.go.th](http://www.immigration.go.th/). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.`

            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `မိသားစုဝင်များ/မှီခိုသူများ ဗီဲဲဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိသော နိုင်ငံကူး လက်မှတ် (သို့မဟုတ်) ခရီးသွား  အထောက်အထား ။

              ၂။ သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီးရန်။
              
              ၃။ မကြာမီက ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ ထိုင်းနိုင်ငံမှ ကုမ္ပဏီ သို့မဟုတ် ကျောင်းကထုတ်ပေးထားသော အိမ်ထောင်ဖက် (သို့မဟုတ်) မိသားစုဝင်ဖြစ်ကြောင်း ထောက်ခံစာ။
              
              ၅။ ထိုင်းနိုင်ငံတွင် အလုပ်လုပ်နေသူ (သို့မဟုတ်) ပညာသင်ကြားနေသူ ၏ နိုင်ငံကူးလက်မှတ်မိတ္တူ (ကိုယ်ရေးကိုယ်တာအချက်အလက် ပါဝင်သော စာမျက်နှာနှင့် ဗီဇာ စာမျက်နှာ)
              
              ၆။ အလုပ်ပါမစ် သို့မဟုတ် ကျောင်းသားမှတ်ပုံတင်ကတ်မိတ္တူ
              
              ၇။  လက်ထပ်စာချုပ်မိတ္တူ (အိမ်ထောင်ဘက် အတွက်)

              ၈။ မွေးစာရင်း မိတ္တူ (မိဘများအတွက်)
              
              ၉။  ကုမ္ပဏီ၏ လတ်တလော လုပ်ငန်းလက်မှတ်နှင့် သက်ဆိုင်ရာစာရွက်စာတမ်းများ နှင့် ကုမ္ပဏီသည် လုပ်ငန်းဆောင်ရွက်ဆဲဖြစ်ကြောင်း အတည်ပြုရန်
              
              ၁၀။ အိမ်ထောင်ဖက်သည် BOI ပရိုမိုးရှင်းအောက်မှ ကုမ္ပဏီတစ်ခုနှင့် အလုပ်လုပ်နေလျှင် ဗီဇာအတွက် BOI မှ ထောက်ခံစာ မူရင်း။
              
              ၁၁။ လျှောက်ထားသူ၏ လုံလောက်သော ငွေကြေးဆိုင်ရာ အထောက်အထား
              
              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်းများ တောင်းဆိုပိုင်ခွင့်ရှိသည်။**_`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၈၀ (ဝင်ခွင့် တစ်ကြိမ်)

              အမေရိကန်ဒေါ်လာ ၂၀၀ (ဝင်ခွင့် တစ်ကြိမ်ထပ်ပို၍)`,
              visa_validity: `၃ လ။`,
              visa_period: `ဤဗီဇာအမျိုးအစားကို ကိုင်ဆောင်ထားသူများသည် ထိုင်းနိုင်ငံတွင် ရက်ပေါင်း ၉၀ အတွင်း အများဆုံးနေထိုင်ခွင့်ရှိသည်။`,
              visa_extension: `ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/)  တွင် ခွင့်ပြုချက် လျှောက်ထားရမည်။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`
            }
          }
        },
        {
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Non-Immigrant O Visa (Thai Family)`,
            details: {
              required_documents: `**1.** Passport or travel document with validity no less than 6 months  
              
              **2.** Visa application form completely filled out and signed  
              
              **3.** Recent 3.5 cm x 4.5 cm photograph of the applicant  
              
              **4.** Copy of marriage certificate, passport, and identity card of the applicant’s Thai spouse or copy of birth certificate of the applicant’s Thai child, and passport and identity card of the child
              
              **5.** Letter from the Applicant’s Thai spouse
              
              **6.** Bank statement
              
              **_The consular officer reserves the right to require additional documents or an interview with the applicant, as deemed necessary._**`,

              visa_fee: `80 USD (single entry)
              
                200 USD (multiple entries)`,
              visa_validity: `3 months (single entry)
              1 year (multiple entry)`,
              visa_period: `Travelers coming to Thailand with this type of visa will be permitted to stay in the Kingdom for a period not exceeding 90 days.`,
              visa_extension: `Those who wish to stay longer or may wish to change their type of visa must apply for permission at the Office of Immigration Bureau located at Government Complex Building B, Chaengwattana Soi 7, Laksi, Bangkok 10210, Tel 0-2141-9889 or [http://www.immigration.go.th](http://www.immigration.go.th/). The extension of stay as well as the change of certain types of visas is solely at the discretion of the immigration officer.`
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `ထိုင်းနိုင်ငံသားနှင့် တော်စပ်သူ မိသားစုဝင်များ ဗီဲဲဇာ`,
            details: {
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၆ လရှိသော နိုင်ငံကူး လက်မှတ် (သို့မဟုတ်) ခရီးသွား  အထောက်အထား ။

              ၂။ သတ်မှတ်ထားသော ဗီဇာလျှောက်လွှာ အပြည့်အစုံဖြည့်ပီးရန် နှင့် လက်မှတ်ထိုးပီးရန်။
              
              ၃။ မကြာမီက ရိုက်ထားသော ၃.၅ x ၄.၅ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ။ 

              ၄။ အိမ်ထောင်ဘက် ၏ လက်ထက်စာချုပ်၊ နိုင်ငံကူးလက်မှတ်၊ မှတ်ပုံတင် (သို့မဟုတ်) ID မိတ္တူ, ကလေး များအတွက် လျှောက်ထားပါက မွေးစာရင်း၊ နိုင်ငံကူးလက်မှတ်နှင့် မှတ်ပုံတင် (သို့မဟုတ်) ID မိတ္တူ။

              ၅။ ထိုင်းနိုင်ငံသား အိမ်ထောင်ဖက် ၏ဖိတ်ခေါ်စာ
              
              ၆။ ဘဏ်စာရင်း

              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်း (သို့မဟုတ်) အင်တာဗျူးများ တောင်းဆိုပိုင်ခွင့်ရှိသည်။**_`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၈၀ (ဝင်ခွင့် တစ်ကြိမ်)

              အမေရိကန်ဒေါ်လာ ၂၀၀ (ဝင်ခွင့် တစ်ကြိမ်ထပ်ပို၍)`,
              visa_validity: `၃ လ။ (ဝင်ခွင့် တစ်ကြိမ် အတွက်)
              
              တစ်နှစ်။ (တစ်ကြိမ်ထက် ပိုသော ဝင်ခွင့် များအတွက်)`,
              visa_period: `ဤဗီဇာအမျိုးအစားကို ကိုင်ဆောင်ထားသူများသည် ထိုင်းနိုင်ငံတွင် ရက်ပေါင်း ၉၀ အတွင်း အများဆုံးနေထိုင်ခွင့်ရှိသည်။`,
              visa_extension: `ရက်ရှည်နေထိုင်လိုသူများ သို့မဟုတ် ဗီဇာအမျိုးအစားပြောင်းလဲလိုသူများသည် အစိုးရဌာန တည်ရှိရာ အမှတ် B၊ Chaengwattana Soi 7၊ Laksi၊ Bangkok 10210၊ ဖုန်း 0-2141-9889 (သို့မဟုတ်) [http://www.immigration.go.th](http://www.immigration.go.th/)  တွင် ခွင့်ပြုချက် လျှောက်ထားရမည်။ နေထိုင်ခွင့်သက်တမ်းတိုးခြင်းနှင့် အချို့သောဗီဇာအမျိုးအစားများ အပြောင်းအလဲသည် လူဝင်မှုကြီးကြပ်ရေးအရာရှိ၏ ဆုံးဖြတ်ချက်အရသာဖြစ်သည်။`
            }
          }
        },{
          en: {
            author: 'Royal Thai Embassy',
            address: `Yangon, Myanmar`,
            header: `Non-Immigrant Visa O-A (Long Stay)`,
            details: {
              eligibility: `
              **-** Applicant must be at least 50 years of age (on the day of application submission).
              
              **-** Applicant must not be prohibited from entering Thailand as provided by the Immigration Act B.E. 2522 (1979).
              
              **-** Applicant must have no criminal record in Thailand and in the country of his/her nationality or residence.
              
              **-** Applicant must have the nationality of or permanent resident status in the country where his/her application is submitted.
              
              **-** Applicant must not have prohibitive diseases, i.e. Leprosy, Tuberculosis, drug addiction, Elephantiasis, third phase of Syphilis), as indicated in the Ministerial Regulation No. 14 B.E. 2535 (1992).
              `,
              required_documents: `
              **-** Passport that is valid for at least 18 months and contains at least 1 completely empty visa page
              
              **-** 3 copies of completed visa application forms
              
              **-** 3 photos (4 cm x 6 cm) of the applicant taken within the past six months
              
              **-** 3 copies of personal data form or CV
              
              **-** 3 copies of bank statement showing a deposit of the amount equal to and not less than 800,000 Baht, or an income certificate (an original copy) with a monthly income of not less than 65,000 Baht, or a deposit account plus a monthly income totaling not less than 800,000 Baht.
              
              **-** In the case of submitting a bank statement, 3 original copies of a letter of guarantee from the bank are required.
              
              **-** 3 copies of a letter of verification issued from the country of his/her nationality or permanent residence stating that the applicant has no criminal record (verification shall be valid for no more than three months and should be notarized by notary organs or the applicant’s diplomatic or consular mission).
              
              **-** 3 copies of medical certificate issued from the country where the application is submitted, showing no prohibitive diseases (Leprosy, Tuberculosis, Drug Addiction, Elephantiasis, and Third Step of Syphilis), as indicated in the Ministerial Regulation No.14 B.E. 2535 (1992) (certificate shall be valid for no more than three months and should be notarized by notary organs or the applicant’s diplomatic or consular mission).
              
              **_The consular officer reserves the right to require additional documents or an interview with the applicant, as deemed necessary._**`,

              visa_fee: `200 USD (multiple entries)`,
              recommendations: `
              **-** Upon arrival, the holder of this type of visa will be permitted to stay in Thailand for 1 year from the date of first entry.
              
              **-** At the end of the 90-day stay, the foreigner must report to the immigration officer in his/her residence area and report again every 90 days during his/her stay in Thailand. The foreigner may report to the police station if there is no immigration office in his or her residence area.
              
              **-** Foreigner may report to the competent authority by post and should provide the following:
              
              **-** A report form (Tor Mor 47)
              
              **-** A copy of passport pages showing the foreigner’s photo, personal details, and the latest arrival visa stamp
              
              **-** A copy of the previous receipt of acknowledgment
              
              **-** A self-addressed envelope with postage affixed
              Such documents must be sent to the Immigration Division 1, 120 Moo 3, Government Center B, Chaengwattana Soi 7, Laksi, Bangkok 10210 and must be submitted 7 days before the end of every 90-day period. A receipt of acknowledgment will be given and should be used for future correspondence.
              
              **-** Foreigner who wishes to extend his/her stay shall submit a request for extension of stay at the Office of the Immigration Bureau with documented evidence of money transfer or a deposit account in Thailand or an income certificate showing an amount of no less than 800,000 Baht, or an income certificate plus a deposit account showing a total amount of no less than 800,000 Baht. A one-year extension of stay may be granted at the discretion of the immigration officer to the foreigner as long as he/she meets the above requirements.
              `
            }
          },
          my: {
            author: 'ထိုင်းသံရုံး',
            address: `ရန်ကုန်, မြန်မာ`,
            header: `ထိုင်းနိုင်ငံတွင် ကြာရှည် နေထိုင်သူများ ဗီဲဲဇာ`,
            details: {
              eligibility: `**-** လျှောက်ထားသူသည် အနည်းဆုံး အသက် 50 နှစ်ပြည့်ပီးဖြစ်ရမည် (လျှောက်လွှာတင်သည့်နေ့တွင်)
              
              **-** လူဝင်မှုကြီးကြပ်ရေးဥပဒေ B.E, 2522 (1979) တွင် ပြဋ္ဌာန်းထားသည့်အတိုင်း လျှောက်ထားသူသည် ထိုင်းနိုင်ငံအတွင်းသို့ ဝင်ရောက်ခြင်း ခွင့်မပြုထားသောသူ မဖြစ်ရ။
              
              **-** လျှောက်ထားသူသည် ထိုင်းနိုင်ငံ သို့မဟုတ် နေထိုင်သည့်နိုင်ငံ၌ ရာဇ၀တ်မှုဆိုင်ရာ မှတ်တမ်းမရှိစေရ။

              **-** လျှောက်ထားသူသည် လျှောက်လွှာတင်သွင်းသည့်နိုင်ငံ၌ နိုင်ငံသား သို့မဟုတ် အမြဲတမ်းနေထိုင်သူဖြစ်ရမည်။

              **-**  လျှောက်ထားသူတွင် တားမြစ်ထားသောရောဂါများဖြစ်သည့် အနာကြီးရောဂါ၊ တီဘီရောဂါ၊ ဆေးစွဲခြင်း၊ ဆင်ခြေထောက်ရောဂါ၊ ဆစ်ဖလစ် တတိယအဆင့်) စသော ဥပဒေ အမှတ် 14 B.E, ၂၅၃၅ (၁၉၉၂) တွင်ဖော်ပြထားသည့် တားမြစ်ထားသောရောဂါများ မရှိရပါ။`,
              required_documents: `
              ၁။ သက်တမ်း အနည်းဆုံး ၁၈ လရှိသော နိုင်ငံကူး လက်မှတ် နှင့် ဗီဇာရိုက်နှိပ်ရန် စာရွက်လွတ် ကျန်ရှိရမည်။

              ၂။ အချက်အလက် အပြည့်အစုံဖြည့်ထားသော ဗီဇာလျှောက်လွှာ မိတ္တူ ၃ စုံ။
              
              ၃။ လွန်ခဲ့သော ၆လအတွင်းက ရိုက်ထားသော ၄ x ၆ စင်တီမီတာ အရွယ်အစားရှိ ဓာတ်ပုံ ၃ ပုံ။ 

              ၄။ ကိုယ်ရေးကိုယ်တာအချက်အလက်ဖောင် သို့မဟုတ် CV မိတ္တူ ၃ စုံ။

              ၅။ ဘတ်ငွေ ၈၀၀,၀၀၀ ထက်မနည်းသော အပ်ငွေပမာဏ ရှိကြောင်း ပြသနိုင်သော ငွေကြေးစာရင်းရှင်းတမ်း သို့မဟုတ် လစဉ်ဝင်ငွေ ၆၅,၀၀၀ ဘတ်ထက်မနည်းသောဝင်ငွေတို့ ပြသနိုင်သော အထောက်အထား သို့မဟုတ် ဘဏ်စာရင်းနှင့် ဝင်ငွေအထောက်အထား နှစ်ခုပေါင်း ဘတ်ငွေ ၈၀,၀၀၀ အောက်မနည်းသော ပမာဏ ပြသနိုင်သော အထောက်အထားများ ။
              
              ၆။ ဘဏ်စာရင်း ပြသရာတွင် ဘဏ်မှအာမခံစာ မိတ္တူ ၃ စုံ ပြသရမည်။

              ၇။ မူရင်းနေထိုင်သော နိုင်ငံ သို့မဟုတ် အမြဲတမ်း နေထိုင်ခွင့်ရှိသော နိုင်ငံ မှ ပြစ်မှု ကင်းစင်ကြောင်း အတည်ပြုချက် မိတ္တူ ၃ စုံ (အတည်ပြုချက်သည် သုံးလထက်မပိုသော သက်တမ်းရှိရန်နှင့်  ဥပဒေအရာရှိ၏ လက်မှတ် ပါရှိသော နိုတြီဖြစ်ရမည်)။ 

              ၈။ လျှောက်ထားသည့်နိုင်ငံ၏ ဝန်ကြီးဌာနမှ ထုတ်ပြန်ထားသည့်  စည်းမျဉ်းအမှတ် ၁၄ B.E, 2535 (1992) တွင် ဖော်ပြထားသည့် တားမြစ်ထားသော ရောဂါများ (အနာကြီး၊ တီဘီ၊ ဆေးစွဲ၊ ဆင်ခြေထောက်နှင့် ဆစ်ဖလစ် တတိယအဆင့်) ကင်းစင်ကြောင်း ဆေးလက်မှတ်မိတ္တူ ၃ စောင် (အတည်ပြုချက်သည် သုံးလထက်မပိုသော သက်တမ်းရှိရန်နှင့်  ဥပဒေအရာရှိ၏ လက်မှတ် ပါရှိသော နိုတြီဖြစ်ရမည်)။

              _**တာဝန် ရှိသူသည် လိုအပ်ပါက နောက်ထပ်စာရွက်စာတမ်း (သို့မဟုတ်) အင်တာဗျူးများ တောင်းဆိုပိုင်ခွင့်ရှိသည်။**_`,

              visa_fee: `အမေရိကန်ဒေါ်လာ ၂၀၀ (ဝင်ခွင့် တစ်ကြိမ်ထပ်ပို၍)`,
              recommendations: `**-** ဗီဇာ ကိုင်ဆောင်ထားသူသည် ပထမဆုံးဝင်ရောက်သည့်နေ့မှစပြီး ထိုင်းနိုင်ငံတွင် ၁ နှစ်နေထိုင်ခွင့်ရရှိမည်ဖြစ်သည်။
              
              **-** ရက် ၉၀ သက်တမ်းကုန်ဆုံးချိန်တွင် နိုင်ငံခြားသားသည် ၎င်း၏နေထိုင်ရာနေရာရှိ လူဝင်မှုကြီးကြပ်ရေးအရာရှိထံ အကြောင်းကြားပြီး ထိုင်းနိုင်ငံတွင်နေထိုင်စဉ် ရက်ပေါင်း ၉၀ လျှင် တစ်ကြိမ် ထပ်မံတိုင်ကြားရမည်ဖြစ်သည်။ နေထိုင်ရာအနီးတွင် လူဝင်မှုကြီးကြပ်ရေး မရှိပါက ရဲစခန်းသို့ တိုင်ကြားနိုင်ပါသည်။.
              
              **-** နိုင်ငံခြားသားသည် အာဏာပိုင်များထံ အကြောင်းကြားရာတွင် စာတိုက်မှတဆင့် ပေးပို့ရန်လိုအပ်သော စာတမ်းများမှာ :
              
              *၁။* အစီရင်ခံစာ (Tor Mor 47)
              
              *၂။* နိုင်ငံကူးလက်မှတ်၏ ဓာတ်ပုံ၊ ကိုယ်ရေးကိုယ်တာ အချက်လက်များပါဝင်သော စာမျက်နှာ၊ ဗီဇာ တံဆိပ်ခေါင်း ရိုက်နှိပ်ထားသော စာမျက်နှာ မိတ္တူ။
              
              *၃။* ယခင်လျှောက်ထားစဉ်က လက်ခံစာ မိတ္တူ။

              **-** ဖော်ပြပါ စာရွက်စာတမ်းများကို လူဝင်မှုကြီးကြပ်ရေးရုံးဌာနခွဲ အမှတ် ၁၊ 120 Moo 3, Government Center B, Chaengwattana Soi 7, Laksi, Bangkok 10210 တွင် ခွင့်ပြုရက် ၉၀ မကုန်မီ ၇ ရက် မတိုင်ခင်တွင် ပေးပို့ပီးဖြစ်ရပါမည်။ လက်ခံရရှိကြောင်း ပြေစာကို နောင်လိုအပ်လျှင် အသုံးပြုနိုင်ရန် သိမ်းထား ရမည်။
              
              **-** လိပ်မူ၊ တံဆိပ် ခေါင်းပါသော စာအိပ်။
              
              **-** Foreigner who wishes to extend his/her stay shall submit a request for extension of stay at the Office of the Immigration Bureau with documented evidence of money transfer or a deposit account in Thailand or an income certificate showing an amount of no less than 800,000 Baht, or an income certificate plus a deposit account showing a total amount of no less than 800,000 Baht. A one-year extension of stay may be granted at the discretion of the immigration officer to the foreigner as long as he/she meets the above requirements.
              
              **-** နေထိုင်ခွင့် သက်တမ်းတိုး လျှောက်ထားလိုသူများသည် ငွေလွှဲထားသော စာရွက်စာတမ်း သို့မဟုတ် ထိုင်းနိုင်ငံရှိအပ်ငွေအကောင့် သို့မဟုတ် ပမာဏ ထိုင်းဘက်ငွေ ၈ သိန်းအောက်မနည်းသော ဝင်ငွေထောက်ခံစာ သို့မဟုတ် ဝင်ငွေထောက်ခံစာ နှင့် အပ်ငွေအကောင့် နှစ်ခုပါပေါင်းဘက်၈သိန်း ပမာဏ ပြပေးရမည်။ ဖော်ပြပါ လိုအပ်ချက်များနှင့် ပြည့်စုံသော လျှောက်ထားသူများကို တစ်နှစ်နေထိုင်ခွင့် ကို တိုးပေးမည်ဖြစ်သည်။
              `,
            }
          }
        },],
        suggestions: [
          {
            author: 'BizHub Myanmar',
            address: `Thailand`,
            header: `Thailand Visa လိုတိုရှင်း`,
            content: `***Q*** ထိုင်းမှာ condo နဲ့ Landed House တွေဝယ်ရင် နေထိုင်ခွင့်ရလား

            ***A*** မရပါ ။ ထိုင်းနိုင်ငံတွင် Property ဝယ်ယူလျှင် အမြဲတမ်းနေထိုင်ခွင့် တန်းမပေးပါ။
            
            သို့သော်နေထိုင်ခွင့် ဗီဇာ အမျိူးအမျိူးရှိပြီး အခြားနိုင်ငံများထက် လွယ်ကူစွာလျောက်နိုင်ပါတယ်။ သင့်တော်ရာအောက် ပါ Visa များ ကို ချိန်ပြီးလျောက်ထားနိုင်ပါတယ်။
            
            **1. Tourist Visa - ထိုင်း နိုင်ငံတွင် ခရီးသွားလာသူတို့ အတွက်နေထိုင်ခွင့်  (၂-၃ လ)**
            
            သံရုံးမှ (၃) လသက်တမ်းဗီဇာကို လျောက်လာလို့ရပါတယ်။ ဗီဇာသက်တမ်း (၃)လ မှာ (၂)လ အပြည့်နေထိုင်ခွင့်ရပြီး ကျန်တဲ့ (၁)လကို ထိုင်း လဝက ရုံးမှာ သက်တမ်းတိုးခ ဘတ် (၁,၉၀၀)ပေးပြီး သက်တမ်း အလွယ်တကူ ပြန်တိုးနိုင်ပါတယ်။
            

            **2. Education Visa - ထိုင်းနိုင်ငံတွင် ပညာသင်ကြားသူတို့အတွက်နေထိုင်ခွင့်** 
            
            အသက် မရွေး အလွယ် ဆုံး အနေနဲ့ ထိုင်းမှာ အရင်ဆုံး ကြာကြာနေရဖို့ ဒီဗီဇာအမျိူးအစားက အသင့်တော်ဆုံးဖြစ်ပါတယ်။ ထိုင်းမှာ ထိုင်း/အင်္ဂလိပ်/တရုတ်/ကိုရီးယား/ ဂျပန် စတဲ့ ဘာသာစကား တစ်မျိုးမျိုးကို သင်နေရုံနဲ့ ရရှိနိုင်ပါတယ်။ မိမိအပ်မယ့် ဘာသာစကားကျောင်းပေါ်မူတည်ပြီး နိုင်ငံခြားသားကျောင်းသားဦးရေ မပြည့်မချင်းအပ်နှံနိုင်ပြီး Education Visa နဲ့နေထိုင်လို့ရပါတယ်။  ***ဒီဗီဇာက နိုင်ငံအဝင်အထွက် ခဏခဏ လုပ်လို့တော့ မလွယ်ပါ။*** အထွက် Re Entry visa လေဆိပ်မှာ လုပ်ဖို့ မမေ့ပါနဲ့ မဟုတ်ရင် ပြန်ဝင် ရင် အတော်လေး အရစ်ခံရတတ်ပါတယ်။ အရစ်မခံချင်ဘူး နိုင်ငံပြင်ပသွားလိုက်ပြန်လိုက်လုပ်ချင်ရင်တော့ တက္ကသိုလ်တစ်ခုခုမှာ ပညာသင်ကြားပြီး University Visa ကိုင်ထားလိုက်ရုံပါ။
            
            
            **3. Work and Business Visa - ထိုင်းနိုင်ငံတွင် စီးပွားေရးလုပ်ကိုင်သူတို့အတွက်နေထိုင်ခွင့်**
            
            အလုပ်တရားဝင် လာလုပ်တဲ့ ဗီဇာအမျိုးအစားဖြစ်ပြီး ဒီအမျိုးအစားထဲမှာ Non-Immigrant B Visa, M Visa (for media), IB Visa (for investor), BA Visa (for investor) ဆိုပြီး အစားစားရှိသေးသလို တင်ပြရတဲ့ အချက်အလက်နဲ့ ရင်းနှီးမြှုပ်နှံမှုပမာဏပေါ်မူတည်ပြီး ကွာခြားပါတယ်။ Business Visa အတွက် ကုမ္ပဏီဖွင့်၊ ဆိုင်ဖွင့်ပြီးတော့လည်း ရယူနိုင်ပါသေးတယ်။ လုပ်ငန်းတစ်ခု ဖြစ်လာပြီဆိုရင်တော့ လိုအပ်တဲ့ စာရင်းရှင်းတမ်း၊ အခွန်အခ ကိစ္စအပါအဝင် ထိုင်းလူမျိုး ရာခိုင်နှုန်းတစ်ဝက်ကျော်ပိုင်ဆိုင်မှုပါမှ ဖြစ်တာကြောင့် ထိုင်းလူမျိုးအမည်ခံခတွေကိုပါ ထည့်သွင်းတွက်ချက်ပြီး ပြင်ဆင်ထားရတော့မှာ ဖြစ်ပါတယ်။
            
            **4. Retirement Visa - ပင်စင် အနားယူ သူတို့အတွက်နေထိုင်ခွင့်**
            
            အသက် ၅၀ အထက်ရှိသူများကတော့ Retirement Visa ကိုလျောက်ထားနိုင်ပါတယ်။ ဒီဗီဇာက ဘဏ်မှာ ဘတ်ငွေ ၈ သိန်းပြတာဖြစ်ဖြစ် လစဉ် ဒေါ်လာ ၃၀၀၀ အောက်ထစ် ပင်စင်ရကြောင်းပြနိုင်ရင် ဖြစ်ဖြစ် အလွယ်တကူလျှောက်ထားနိုင်တာမျိုးပါပဲ။ ပထမ စလျှောက်တဲ့နှစ်မှာ ၁၅ လ သက်တမ်းအထိ နေထိုင်ခွင့်ရပြီး နောက်ပိုင်းနှစ်တွေမှာတော့ ၁၂ လ ဆီ သက်တမ်းတိုး နေထိုင်လို့ရပါတယ်။ ဒီ Visa နဲ့ အလုပ် လုပ်ခွင့် မရှိပါ ၊ လုပ်ရင် အရစ်ခံရနိုင်ပါတယ်။ အခွန်သက်သာခွင့်ရလို့ ။ ဒီ visa နဲ့နေပြီး investment လုပ်တဲ့ အဖြူတွေ အများကြီးပါ။
            
            **5. Guardian Visa - အုပ်ထိန်းသူတို့ အတွက်နေထိုင်ခွင့်**
            
            ကျောင်းတက်အရွယ်ကလေးရှိတဲ့ မိဘတွေ လျှောက်ထားနိုင်တဲ့ ဗီဇာ အမျိုးအစားဖြစ်ပါတယ်။ ကလေးတစ်ဦးလျင် မိဘတစ်ဦးသာလျောက်ထားခွင့်ရှိတာမို့ မိသားစုလိုက်ပြောင်းရွှေ့နေထိုင်မယ်ဆိုရင် ကလေး (၂) ဦးစလုံးကို ကျောင်းထားနိုင်မှ အဖေရော၊ အမေရော အဆင်ပြေမှာဖြစ်ပါတယ်။
            
            **6. Marriage/Spouse Visa - လက်ထပ်/အိမ်ထောင်နေထိုင်ခွင့်**
            
            ထိုင်းနိုင်ငံသားနဲ့ လက်ထပ်ပြီး ဒီဗီဇာကို ရယူနိုင်ပါတယ်။ ဟိုးအရင်ကနေ ခုထိလည်း ဟန်ဆောင်လက်ထပ်တဲ့ဝန်ဆောင်မှုလုပ်ပေးနေသူတွေ ရှိနေဆဲဖြစ်ပါတယ်။ ဆိုးချက်ကတော့ ကိုယ့်အပေါ် မသမာသူ၊ ငွေညှစ်နိုင်သူတွေနဲ့ ကြုံဆုံနိုင်ချေ များတာပါပဲ။ အားသာချက်ကတော့ အလုပ်ပါ တရားဝင် လုပ်နိုင်တာပါပဲ။ မိန်းခလေး အနေနဲ့ ထိုင်း အမျိုးသားကို ယူ မယ် ဆို တော်တော်အဆင်ပြေပင်မယ့်။ အမျိုးသား တယောက် ထိုင်းအမျိုးသမီးတယောက် ယူပြီး နေမယ် ဆို အရစ် ခံ၊ အခက်အခဲ ရှိပါတယ်၊ ဟန်ဆောင်တွေ များလို့ပါ။
            
            **7. Elite Visa**
            
            ဒီဗီဇာကတော့ဘောစိ ဗီဇာ ပါ။ ထိုင်းမှာ ၅ နှစ်ကနေ နှစ် ၂၀ အထိ ကိုယ်ရွေးချယ်မှုအပေါ်မူတည်ပြီး နေထိုင်နိုင်ပါတယ်။ အဲ့ဒါအပြင် ဒီဗီဇာကိုင်ထားရင် အစိုးရက ကိုယ့်အတွက် ဒီလို အပိုဆောင်း​ဝန်ဆောင်မှုတွေပါ ထပ်ပေးပါသေးတယ်။
            
            ▪️လေဆိပ်အကြိုအပို့ဝန်ဆောင်မှု
            
            ▪️ဂေါက်ကလပ်အသင်းဝင်ခွင့်
            
            ▪️ပထမတန်းစားတည်းခိုနေထိုင်စရာနေရာများ
            
            ▪️ကျန်းမာရေးစောင့်ရှောက်မှုအကျိုးခံစားခွင့်များ
            
            ▪️လူဝင်မှုစစ်ဆေးရေးမှာ ဦးစားပေးဆက်ဆံမှု
            
            ဒါတွေပါ ခံစားရနိုင်ပါတယ်။
            
            ဒီဗီဇာ မှာ Gold, Platinum, Diamond နဲ့ Reserve ဆိုပြီး ၄ မျိုးရှိပါတယ်။ ဈေးနှုန်းအားဖြင့် ဘတ် ၉ သိန်း၊ ၁၅ သိန်း၊ ၂၅ သိန်း နဲ့ သိန်း ၅၀ ဆိုပြီး အသီးသီးရှိပါတယ်။ အရင် ကတော့ ဘတ် တသိန်းဆို ရပါ တယ် ၊ အခု မှ ပိုတောင်းတာပါ။
            
            Long term Investment Visa -ရေရှည်နေထိုင်ခွင့်
            ထိုင်းနိုင်ငံတွင် USD 500,000 နှင့်ညီမျှသည့် Real Estate တွင်ရင်းနှီးမြှုပ်နှံ၍ (သို့မဟုတ်)၊ ထိုင်းအစိုးရမှ တရားဝင်
            
            ရောင်းချသည့် Bond များတွင် ဝယ်ယူထားမှု သက်တမ်း (၅) နှစ်ကျော်ရှိသည့်အထောက်အထား ပြ၍ မိသားစုလိုက် (၁၀) နှစ် သက်တမ်းရှည်ဗီဇာကိုလျောက်ထားနိုင်သည်။
            
            ပထမဦးစွာ (၅) နှစ်ရရှိမည်ဖြစ်ပြီး ဒုတိယအကြိမ် နောက် (၅) နှစ်ကိုထက်မံ လျောက်ထားရပါမည်။ (၂) နှစ်အတွင်း အခွန်ဆောင်ထားသော ကိုယ်ပိုင်ဝင်ငွေ USD 80,000 ရှိသည့်အထောက်အထား၊ USD 100,000 ထက်မနည်းသော ပမာဏအားထိုင်းဘဏ်တွင် ၁၂ လကြာထည့်ထားသည့် အထောက်အထားများကို ပြသပေးရမည်၊ US 1million ပမာဏရှိသည့် ပိုင်ဆိုင်မှုတခုခုကို ပြသပေးရမည်ဖြစ်ပြီး ဗီဇာကျသည်မကျသည်ကိုတော့ အာမခံထားခြင်းမရှိဘဲ အစိုးရ၏ ဆုံးဖြတ်ချက်နှင့်သာသက်ဆိုင်သည်ဟုဆိုထားသည်။
            
            **8. Smart Visa**
            
            ဒီဗီဇာအမျိုးအစားက ၂၀၁၈ ခုနှစ်မှာ အတည်ပြုပြငှာန်းခဲ့တယ့် ဗီဇာဖြစ်ပါတယ်။ ကျွမ်းကျင်အဆင့်တွေ၊ အရည်အချင်းရှိသူတွေ၊ ရင်းနှီးမြှုပ်နှံသူတွေ ကို ထုတ်ပေးတဲ့ဗီဇာဖြစ်ပါတယ်။ မိသားစုပါ ခေါ်နေခွင့်ရှိတဲ့ ဗီဇာဖြစ်ပါတယ်။ အောက်ဖော်ပြကဏ္ဍတွေထဲက ဆိုရင် လျှောက်ထားလို့ရနိုင်ပါတယ်။
            
            * Next-Generation Automotive
            
            * Smart Electronics
            
            * Affluent, Medical and Wellness Tourism
            
            * Agriculture and Biotechnology
            
            * Food for the Future
            
            * Automation and Robotics
            
            * Aviation and Logistics
            
            * Biofuels and Biochemicals
            
            * Digital
            
            * Medical Hub
            
            * Alternative Dispute Resolution
            
            * Human Resource Development in Science and Technology
            
            * Environmental Management and Renewable Energy`,
          },
          {
            author: 'Bangkok Connection',
            address: `Thailand`,
            header: `ဘာကြောင့်ပြန်လွှတ်ခံရတာပါလဲ ?`,
            content: `
            ၂လဗီဇာ TR60 / 14 Days Free ဗီဇာများဟာ အလည်အပတ် ဗီဇာ ၊ Tourist Visa သာဖြစ်ပြီး ၊ လည်မယ် ၊ ပတ်မယ် ၊ Shopping ထွက်မယ်ဆိုတဲ့ ဗီဇာအမျိုးအစားဖြစ်ပါတယ် ။ ကျွန်တော်တို့နိုင်ငံရဲ့အခြေအနေအရ 90% ဟာ ၀င်လာပြီဆိုရင် အခြေချဖို့ဆိုတဲ့ ရည်ရွယ်ချက်ရှိနေတယ်ဆိုတာ သိရှိထားပြီးသားဖြစ်တဲ့ Immigration Officer များအတွက် စစ်ဆေးမေးမြန်းခြင်းပြုလုပ်ကာ ပြန်လွှတ်ခြင်းကိုပြုလုပ်တာဟာ ကိုယ့်ရဲ့ ရည်ရွယ်ချက်ဟာ သူတို့ရဲ့ ဗီဇာခွင့်ပြုချက်နဲ့ မကိုက်ညီမှုကြောင့်ဖြစ်ပါတယ်။
            
            **ဘယ်လိုဆောင်ရွက်ရမလဲ ?**
            Tourist Visa သို့မဟုတ် Visa Free နဲ့လာတာဖြစ်တဲ့အတွက် Tourist ကဲ့သို့ အစီအစဉ်အားလုံးရှိထားရပါမယ်ခင်ဗျာ ၊ Hotel Booking , Return Ticket , Show Money နဲ့ မေးမြန်းခံရချိန်ဖြစ်ပါက Travel Plan ကိုသေချာနားလည်အောင်ရှင်းပြနိုင်ခဲ့ပါက Long Term Visa တစ်ခုခုမရှိထားခဲ့ရင် ၁၀၀% ၀င်ခွင့်ရရှိမှာဖြစ်ပါတယ်။
            
            စစ်ဆေးမေးမြန်းခံရခြင်းဟာ လာရောက်သူများရဲ့ 10% ခန့်သာကံဆိုးချိန်မှာ ကြုံတွေ့ရတာကြောင့် လူတိုင်းစစ်ဆေးခံရတယ်လို့မဆိုလိုပါဘူးခင်ဗျာ ။ အများစုဟာ အဆင်ပြေပြေ၀င်ရောက်နိုင်လျက်ရှိနေပါတယ်။
            
            Immigration Pass ဟာလူတိုင်းအတွက်မလိုအပ်တာကြောင့် ကိုယ်တိုင်ဖြေရှင်းနိုင်ရန် ဖော်ပြပေးလိုက်ရပါတယ်ခင်ဗျာ ။ အားလုံးပဲအဆင်ပြေကြပါစေကြောင်း ဆုတောင်းပေးလျက်ရှိပါတယ်။
            
            **မြန်မာပြည်လေဆိပ်လိုအပ်ချက်များ**
            
            ၁၊ မှတ်ပုံတင်
            
            ၂၊ Passport
            
            ၃၊ အသွားလက်မှတ်
            
            ၄၊ အပြန်လက်မှတ် (Booking / Confirmed)
            
            ၅၊ Hotel Booking
            
              
            
            **ထိုင်းလေဆိပ်လိုအပ်ချက်များ**
            
            ၁၊ Passport
            
            ၂၊ Hotel Booking (Confirmed)
            
            အိမ်စာချုပ်ဖြစ်ပါက လတို စာချုပ်များသာပြသလို့ကောင်းပါသည် ။
            
            ၃၊ Return Ticket (Confirmed) တို့လိုအပ်မည်ဖြစ်ပါတယ် ။`
          }
        ],
        refs: [
          {id: 1, name: 'BizHub Myanmar', imageUrl: "/assets/thai/visa/bizhub.jpg", description: ' A popular real estate platform with millions and brokers', tags: ['Visa'], source: 'https://www.facebook.com/bizhub.mm?mibextid=ZbWKwL' },
          {id: 2, name: 'Bangkok Connection', imageUrl: "/assets/thai/visa/bkkConnection.jpg", description: ' A popular real estate platform with millions and brokers', tags: ['Visa'], source: 'https://www.facebook.com/bkkairportconnection?mibextid=ZbWKwL' },
        ],
      }, 
        food: {
          refs: [
            {id: 1, name: 'Khaing Khaing Kyaw Thailand', imageUrl: "/assets/thai/food/kkkyaw.jpg", description: ' A well known Myanmar Food Restaurant', tags: ['Myanmar Food', 'Bangkok'], source: 'https://www.facebook.com/KhaingKhaingKyawThailand?mibextid=ZbWKwL' },
            {id: 2, name: 'Kitchen Mandaly', imageUrl: "/assets/thai/food/kitchenMdy.jpg", description: ' A well known Myanmar Food Restaurant', tags: ['Myanmar Food', 'Chiang Mai'], source: 'https://www.facebook.com/profile.php?id=100070085703740&mibextid=ZbWKwL' },
          
          ],
      }
    },
  },
  vn: {
    name: 'Vietnam',
    categories: {
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
        checkPoints: {en: [
              `The ones who want to work while attending university need Vietnamese Language.`
        ], my: [
          `ဗီယက်နမ် မှာ ကျောင်းတက်ပြီး အလုပ်လုပ်ချင်တဲ့ သူတွေ အတွက် Vietnam စကား လိုအပ်ပါတယ်`
    ]}
      },
      immigration: {
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
    name: 'Cambodia',
    categories: {
      immigration: {
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
