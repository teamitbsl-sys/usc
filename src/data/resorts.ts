export interface Resort {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  altitude: string;
  description: string[];
  highlights: string[];
  activities: string[];
  heroImage: string;
}

export interface Country {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
}

export const countries: Country[] = [
  {
    slug: 'austria',
    name: 'Austria',
    description: 'From the legendary slopes of Kitzbuhel to the exclusive enclave of Lech, Austria\'s Alpine summer offers pristine hiking, cycling, and mountain wellness in some of Europe\'s most celebrated resorts.',
    heroImage: 'https://www.alpsinluxury.com/media/resorts/austria/austria-summer-hero.jpg',
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    description: 'Switzerland sets the standard for Alpine luxury. Verbier, Zermatt, Gstaad, and Crans Montana each offer a distinct character -- united by breathtaking scenery, immaculate infrastructure, and an unrivalled quality of life.',
    heroImage: 'https://www.alpsinluxury.com/media/resorts/switzerland/switzerland-summer-hero.jpg',
  },
  {
    slug: 'italy',
    name: 'Italy',
    description: 'Cervinia sits at the foot of the Matterhorn on the Italian side, offering dramatic mountain scenery, exceptional gastronomy, and a warmth of welcome that only Italy can provide.',
    heroImage: 'https://www.alpsinluxury.com/media/resorts/italy/italy-summer-hero.jpg',
  },
];

export const resorts: Resort[] = [
  {
    slug: 'kitzbuhel',
    name: 'Kitzbuhel',
    country: 'Austria',
    countrySlug: 'austria',
    altitude: '762m',
    description: [
      'Kitzbuhel is one of the most storied names in the Alps -- a medieval market town that has retained its charm while becoming one of Austria\'s most sought-after summer destinations. Sitting at 762 metres, it is surrounded by 1,000 kilometres of signed hiking and cycling trails, with the dramatic Hahnenkamm ridge rising directly above the town.',
      'In summer, Kitzbuhel trades its ski crowds for a more discerning visitor: those who come for long mountain days, excellent restaurants, and the pleasures of a town that has been welcoming guests with great distinction for over a century.',
    ],
    highlights: [
      '1,000km of hiking and cycling trails',
      'Medieval town centre with excellent restaurants',
      'Hahnenkamm cable car with panoramic views',
      'Golf, tennis, and water sports nearby',
      'Superb summer festivals and events',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Golf', 'Tennis', 'Swimming', 'Paragliding', 'Horse Riding'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/kitzbuhel/kitzbuhel-summer-hero.jpg',
  },
  {
    slug: 'lech',
    name: 'Lech',
    country: 'Austria',
    countrySlug: 'austria',
    altitude: '1,450m',
    description: [
      'Lech am Arlberg is widely regarded as Austria\'s most exclusive resort -- a place where discretion, quality, and natural beauty come together in extraordinary measure. At 1,450 metres in the Arlberg region, it draws a loyal following of guests who return year after year for its car-free village centre, first-class hospitality, and magnificent mountain landscape.',
      'In summer, the surrounding Arlberg mountains reveal a world of wildflower meadows, crystalline mountain lakes, and trails that range from gentle valley walks to challenging ridge routes. The Lech Card provides access to cable cars, summer activities, and discounts throughout the resort, making exploration effortless.',
    ],
    highlights: [
      'Austria\'s most exclusive Alpine resort',
      'Car-free village centre',
      'Wildflower meadows and mountain lakes',
      'Lech Card for activities and cable cars',
      'Outstanding Alpine restaurants and wellness',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Via Ferrata', 'Swimming', 'Yoga', 'Paragliding', 'Rock Climbing', 'Golf'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/lech/lech-summer-hero.jpg',
  },
  {
    slug: 'verbier',
    name: 'Verbier',
    country: 'Switzerland',
    countrySlug: 'switzerland',
    altitude: '1,500m',
    description: [
      'Verbier sits at 1,500 metres in the Swiss canton of Valais, surrounded by the most dramatic mountain scenery in the Alps. Known in winter for its legendary off-piste terrain, in summer it transforms into an equally exhilarating destination -- with world-class trail running, mountain biking, and hiking routes reaching into the high peaks above.',
      'The resort is home to the annual Verbier Festival, one of Europe\'s most celebrated classical music events, alongside an active calendar of outdoor events throughout July and August. Its restaurants, bars, and social scene give it an energy that few Alpine summer resorts can match.',
    ],
    highlights: [
      'World-class trail running and mountain biking',
      'Annual Verbier Festival of classical music',
      'Dramatic high-Alpine scenery to 3,330m',
      'Excellent restaurants and vibrant social scene',
      'Mont Fort cable car with glacier views',
    ],
    activities: ['Hiking', 'Trail Running', 'Mountain Biking', 'Paragliding', 'Via Ferrata', 'Golf', 'Tennis', 'Swimming'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/verbier/verbier-summer-hero.jpg',
  },
  {
    slug: 'zermatt',
    name: 'Zermatt',
    country: 'Switzerland',
    countrySlug: 'switzerland',
    altitude: '1,620m',
    description: [
      'Zermatt is, quite simply, one of the world\'s great mountain destinations. Car-free and set at 1,620 metres beneath the iconic Matterhorn, it offers a combination of dramatic natural beauty, superb infrastructure, and Swiss precision that is impossible to replicate elsewhere.',
      'In summer, the Klein Matterhorn cable car reaches 3,883 metres -- the highest cable car station in the Alps -- giving access to year-round glacial skiing as well as extraordinary high-mountain hiking. The town itself is a pleasure to explore, with excellent restaurants, boutiques, and a warmth of character that reflects centuries of welcoming visitors from around the world.',
    ],
    highlights: [
      'Iconic Matterhorn views from every angle',
      'Car-free village with excellent restaurants',
      'Klein Matterhorn at 3,883m -- highest in the Alps',
      'Year-round glacial skiing available',
      '400km of summer hiking trails',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Glacier Skiing', 'Climbing', 'Paragliding', 'Swimming', 'Tennis'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/zermatt/zermatt-summer-hero.jpg',
  },
  {
    slug: 'crans-montana',
    name: 'Crans Montana',
    country: 'Switzerland',
    countrySlug: 'switzerland',
    altitude: '1,500m',
    description: [
      'Crans Montana enjoys one of the sunniest positions in the Swiss Alps, spread across a south-facing plateau at 1,500 metres above the Rhone Valley with sweeping views towards the Valais peaks. Its combination of reliable sunshine, wide open spaces, and a relaxed, sophisticated atmosphere makes it a natural choice for a summer Alpine retreat.',
      'The resort is home to one of Switzerland\'s finest golf courses -- the Golf Club Crans-sur-Sierre, host to the European Masters -- alongside excellent hiking, mountain biking, and the beautiful Lac de Chermignon for swimming and water sports.',
    ],
    highlights: [
      'One of the sunniest plateaus in the Swiss Alps',
      'Home to Golf Club Crans-sur-Sierre (European Masters venue)',
      'Lac de Chermignon for swimming and watersports',
      'Sweeping views across the Rhone Valley',
      'Relaxed, sophisticated resort atmosphere',
    ],
    activities: ['Golf', 'Hiking', 'Mountain Biking', 'Swimming', 'Tennis', 'Paragliding', 'Yoga'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/crans-montana/crans-montana-summer-hero.jpg',
  },
  {
    slug: 'gstaad',
    name: 'Gstaad',
    country: 'Switzerland',
    countrySlug: 'switzerland',
    altitude: '1,050m',
    description: [
      'Gstaad is Switzerland\'s most glamorous resort -- a byword for understated luxury, discretion, and Alpine style. Set in the Bernese Oberland at 1,050 metres, its famous promenade, heritage hotels, and exclusive boutiques attract a loyal international clientele year after year.',
      'In summer, the surrounding Saanenland region offers beautiful cycling routes, hiking trails through flower-filled meadows, and access to the Glacier 3000 for year-round mountain experiences. The Gstaad Menuhin Festival and the Dorf Festival bring world-class music and culture to the mountains each July and August.',
    ],
    highlights: [
      'Switzerland\'s most glamorous and discreet resort',
      'Famous promenade with heritage hotels and boutiques',
      'Gstaad Menuhin Festival in July and August',
      'Glacier 3000 for year-round mountain experiences',
      'Beautiful cycling and hiking throughout Saanenland',
    ],
    activities: ['Hiking', 'Cycling', 'Golf', 'Tennis', 'Horse Riding', 'Paragliding', 'Glacier 3000'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/gstaad/gstaad-summer-hero.jpg',
  },
  {
    slug: 'cervinia',
    name: 'Cervinia',
    country: 'Italy',
    countrySlug: 'italy',
    altitude: '2,050m',
    description: [
      'Cervinia sits at 2,050 metres in the Aosta Valley on the Italian face of the Matterhorn -- one of the highest and most dramatic resort positions in the Alps. Its altitude ensures cool, clear mountain air throughout the summer, while the surrounding scenery of glaciers, rocky peaks, and wildflower meadows is truly spectacular.',
      'The resort is linked by cable car to Zermatt on the Swiss side, making it possible to enjoy two of the Alps\' great mountain destinations in a single trip. Italian warmth, exceptional cuisine, and a relaxed pace of life complete a picture that is quite unlike anywhere else in the Alps.',
    ],
    highlights: [
      'Highest major resort in the Italian Alps at 2,050m',
      'Dramatic Matterhorn views on the Italian side',
      'Cable car link to Zermatt, Switzerland',
      'Outstanding Italian cuisine and warm hospitality',
      'Cool mountain air throughout the summer months',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Glacier Skiing', 'Via Ferrata', 'Paragliding', 'Swimming', 'Tennis'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/cervinia/cervinia-summer-hero.jpg',
  },
];

export function getResortBySlug(slug: string): Resort | undefined {
  return resorts.find(r => r.slug === slug);
}

export function getResortsByCountry(countrySlug: string): Resort[] {
  return resorts.filter(r => r.countrySlug === countrySlug);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}
