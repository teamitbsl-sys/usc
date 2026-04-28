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
    slug: 'france',
    name: 'France',
    description: 'The French Alps offer an unmatched breadth of summer experiences — from the dramatic granite peaks above Chamonix to the flower-filled pastures of Megeve, Meribel, Morzine, and St Martin de Belleville.',
    heroImage: 'https://www.alpsinluxury.com/media/resorts/france/france-summer-hero.jpg',
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
    description: 'From Cervinia beneath the Matterhorn to the Dolomite grandeur of Cortina d\'Ampezzo, Italy\'s Alpine resorts combine dramatic mountain scenery with exceptional gastronomy and a warmth of welcome that is uniquely Italian.',
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
    slug: 'leogang',
    name: 'Leogang',
    country: 'Austria',
    countrySlug: 'austria',
    altitude: '800m',
    description: [
      'Leogang is a quietly exceptional Austrian village set at 800 metres in the Salzburg region, forming part of the vast Saalbach-Hinterglemm-Leogang ski area in winter. In summer it sheds the ski crowds entirely, revealing a landscape of green Alpine meadows, forested hillsides, and mountain trails that stretch in every direction.',
      'The resort has become a magnet for mountain bikers, with a world-class bike park and trail network that attracts riders from across Europe. For those seeking a more gentle pace, the valley walks, outdoor swimming, and farm-to-table dining make Leogang one of Austria\'s most rewarding summer escapes.',
    ],
    highlights: [
      'World-class mountain bike park and trail network',
      'Quiet, authentic Austrian village atmosphere',
      'Access to the vast Saalbach-Hinterglemm area',
      'Outstanding farm-to-table cuisine',
      'Excellent hiking through unspoilt meadows and forest',
    ],
    activities: ['Mountain Biking', 'Hiking', 'Swimming', 'Yoga', 'Paragliding', 'Golf'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/leogang/leogang-summer-hero.jpg',
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
    slug: 'st-anton',
    name: 'St Anton',
    country: 'Austria',
    countrySlug: 'austria',
    altitude: '1,304m',
    description: [
      'St Anton am Arlberg sits at 1,304 metres in the heart of the Arlberg region -- widely regarded as the birthplace of Alpine skiing -- but in summer it reveals a very different character. The surrounding mountains burst into colour with wildflower meadows, and over 250 kilometres of marked hiking trails fan out in every direction.',
      'The village itself is lively and welcoming, with excellent restaurants, wellness facilities, and a summer programme that includes guided hikes, mountain festivals, and outdoor concerts. The Arlberg Card provides access to cable cars and activities throughout the summer months.',
    ],
    highlights: [
      'Over 250km of marked summer hiking trails',
      'Arlberg Card for cable cars and summer activities',
      'Lively village with excellent restaurants and wellness',
      'Annual summer music festivals and outdoor events',
      'Gateway to the broader Arlberg mountain region',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Via Ferrata', 'Paragliding', 'Tennis', 'Swimming', 'Golf'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/st-anton/st-anton-summer-hero.jpg',
  },
  {
    slug: 'chamonix',
    name: 'Chamonix',
    country: 'France',
    countrySlug: 'france',
    altitude: '1,035m',
    description: [
      'Chamonix is arguably the world\'s most famous mountain town -- a place where the sheer drama of the Alps is impossible to ignore. Set at 1,035 metres beneath the soaring granite needles of the Mont Blanc massif, it has attracted adventurers, alpinists, and mountain lovers since the eighteenth century.',
      'In summer, the Aiguille du Midi cable car rises to 3,842 metres, giving access to one of the great mountain panoramas on earth. Below, the valley trails, glacier walks, and via ferrata routes offer something for every level of ambition. The town itself buzzes with excellent restaurants, an international crowd, and a palpable sense of adventure.',
    ],
    highlights: [
      'Mont Blanc massif -- the highest peak in the Alps at 4,808m',
      'Aiguille du Midi cable car to 3,842m',
      'World-class hiking, climbing, and via ferrata',
      'Vibrant town with excellent international restaurants',
      'Gateway to the Mer de Glace glacier',
    ],
    activities: ['Hiking', 'Trail Running', 'Via Ferrata', 'Climbing', 'Mountain Biking', 'Paragliding', 'Glacier Walking'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/chamonix/chamonix-summer-hero.jpg',
  },
  {
    slug: 'megeve',
    name: 'Megeve',
    country: 'France',
    countrySlug: 'france',
    altitude: '1,113m',
    description: [
      'Megeve is the jewel of the French Alps -- a resort of extraordinary refinement that was created in the 1920s as an alternative to St Moritz and has never looked back. Its cobbled streets, luxury boutiques, Michelin-starred restaurants, and Baroque church make it as much a destination for culture and gastronomy as for mountain pursuits.',
      'In summer, the Mont d\'Arbois plateau and surrounding summits offer beautiful hiking and cycling with exceptional views of the Mont Blanc massif. The resort\'s golf courses, polo club, and wellness facilities mean there is no shortage of ways to fill a summer day in considerable style.',
    ],
    highlights: [
      'One of France\'s most elegant and refined mountain resorts',
      'Views of the Mont Blanc massif from the plateau',
      'Michelin-starred dining and luxury boutiques',
      'Golf, polo, tennis, and wellness facilities',
      'Beautiful cobbled village with a Baroque church',
    ],
    activities: ['Hiking', 'Cycling', 'Golf', 'Polo', 'Tennis', 'Horse Riding', 'Paragliding', 'Mountain Biking'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/megeve/megeve-summer-hero.jpg',
  },
  {
    slug: 'meribel',
    name: 'Meribel',
    country: 'France',
    countrySlug: 'france',
    altitude: '1,450m',
    description: [
      'Meribel sits at the heart of the Three Valleys -- the largest linked ski area in the world -- and in summer it becomes a centre for hiking, cycling, and mountain wellness of the highest quality. At 1,450 metres, it enjoys a commanding position with views across to the neighbouring summits of Courchevel and Val Thorens.',
      'The resort was designed with careful attention to architectural harmony; its chalet-style buildings and car-friendly layout give it a pleasingly human scale. In summer, the Olympic Centre, golf course, and extensive trail network provide the backbone of an active but unhurried mountain holiday.',
    ],
    highlights: [
      'Heart of the Three Valleys with panoramic mountain views',
      'Olympic Centre with swimming, tennis, and sport facilities',
      'Golf course at altitude',
      'Extensive summer hiking and cycling trail network',
      'Charming resort designed in traditional chalet style',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Golf', 'Tennis', 'Swimming', 'Paragliding', 'Horse Riding'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/meribel/meribel-summer-hero.jpg',
  },
  {
    slug: 'morzine',
    name: 'Morzine',
    country: 'France',
    countrySlug: 'france',
    altitude: '1,000m',
    description: [
      'Morzine is one of the most appealing summer destinations in the French Alps -- a genuine mountain village at 1,000 metres that has retained its authentic character while building an impressive reputation for outdoor pursuits. Its location in the Portes du Soleil, straddling the French-Swiss border, gives access to an extraordinary breadth of terrain.',
      'The Morzine mountain bike park has become one of the best in the Alps, attracting riders from across Europe. But the resort also excels at more gentle summer pleasures: the lake at Les Prodains, the forest trails, the waterfalls of the Gorges du Pont du Diable, and a thriving restaurant scene that reflects the village\'s warmth and confidence.',
    ],
    highlights: [
      'One of the finest mountain bike destinations in the Alps',
      'Authentic French village with a thriving restaurant scene',
      'Gorges du Pont du Diable -- spectacular natural gorge',
      'Access to the Portes du Soleil cross-border trail network',
      'Lake swimming and outdoor activities throughout summer',
    ],
    activities: ['Mountain Biking', 'Hiking', 'Swimming', 'Via Ferrata', 'Paragliding', 'Tennis', 'Golf'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/morzine/morzine-summer-hero.jpg',
  },
  {
    slug: 'st-martin-de-belleville',
    name: 'St Martin de Belleville',
    country: 'France',
    countrySlug: 'france',
    altitude: '1,450m',
    description: [
      'St Martin de Belleville is a hidden gem of the French Alps -- a medieval Savoyard village that sat undiscovered at 1,450 metres while its neighbours built ski lifts and hotels. That restraint has become its greatest asset: the village retains a profound authenticity, with a seventeenth-century Baroque church, traditional stone buildings, and a pace of life that feels genuinely unhurried.',
      'The village sits within the Three Valleys ski area, and in summer its trails connect directly to the high ridges shared with Meribel and Val Thorens. Yet it is the village itself -- its outstanding restaurants, its wildflower meadows, and its unpretentious warmth -- that makes St Martin so memorable.',
    ],
    highlights: [
      'Authentic medieval Savoyard village with Baroque church',
      'Among the finest restaurants in the French Alps',
      'Access to Three Valleys summer trail network',
      'Wildflower meadows and unspoilt mountain scenery',
      'One of the best-kept secrets in the Alps',
    ],
    activities: ['Hiking', 'Mountain Biking', 'Paragliding', 'Tennis', 'Swimming', 'Yoga'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/st-martin-de-belleville/st-martin-summer-hero.jpg',
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
  {
    slug: 'cortina',
    name: 'Cortina d\'Ampezzo',
    country: 'Italy',
    countrySlug: 'italy',
    altitude: '1,224m',
    description: [
      'Cortina d\'Ampezzo is the queen of the Dolomites -- Italy\'s most glamorous mountain resort and one of the most visually spectacular settings in all the Alps. Set at 1,224 metres in a broad sunny valley surrounded by the soaring rose-tinted spires of the Dolomite peaks, it has been attracting an international elite since the Belle Époque.',
      'In summer, the Dolomites reveal themselves in their full glory: via ferrata routes scale dramatic cliff faces, cable cars climb to high-altitude panoramas, and cycling routes wind through some of the most iconic mountain scenery in Europe. The town itself is a pleasure of Italian elegance -- excellent restaurants, luxury boutiques, and a social life that carries effortlessly from the mountains into the evening.',
    ],
    highlights: [
      'Most glamorous resort in the Dolomites',
      'Iconic rose-tinted Dolomite spires all around',
      'World-class via ferrata on dramatic cliff faces',
      'Excellent Italian cuisine and luxury boutiques',
      'Cable cars to high-altitude Dolomite panoramas',
    ],
    activities: ['Hiking', 'Via Ferrata', 'Mountain Biking', 'Cycling', 'Climbing', 'Paragliding', 'Tennis', 'Golf'],
    heroImage: 'https://www.alpsinluxury.com/media/resorts/cortina/cortina-summer-hero.jpg',
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
