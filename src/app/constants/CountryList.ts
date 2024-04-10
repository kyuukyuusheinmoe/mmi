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
          'https://www.renthub.in.th/',
          'https://www.airbnb.com/thailand/stays',
        ],
        suggestions: [
          {
            key: 'popular',
            reasons: ['near to markets', 'near to hospitals'],
          },
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
  vn: {
    name: 'Vietnam',
    categories: {
      accomodation: {
        refs: [
          'https://www.renthub.in.th/',
          'https://www.airbnb.com/thailand/stays',
        ],
        suggestions: [
          {
            key: 'popular',
            reasons: ['near to markets', 'near to hospitals'],
          },
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
