// Configuration Constants
export const MAX_SELECTION = 13;
export const LOCAL_STORAGE_KEY = 'music-besties-data';

// Era Names in Chronological Order
export const eraNamesInOrder = [
  'Taylor Swift',
  'Fearless',
  'Speak Now',
  'Red',
  '1989',
  'Reputation',
  'Lover',
  'Folklore',
  'Evermore',
  'Midnights'
];

// Era Emojis
export const eraEmojis = {
  'eras': '🌟',
  'taylor-swift': '🤠',
  'fearless': '💛',
  'speak-now': '💜',
  'red': '❤️',
  '1989': '🌊',
  'reputation': '🐍',
  'lover': '💖',
  'folklore': '🌲',
  'evermore': '🍂',
  'midnights': '✨'
};

// Song Emojis - We're not adding emojis for each individual song to keep it simple
// This is a placeholder that can be expanded later if needed
export const songEmojis = {};

// Eras with Songs
export const erasWithSongs = [
  {
    id: 'taylor-swift',
    name: 'Taylor Swift',
    emoji: '🤠',
    songs: [
      'Tim McGraw',
      'Picture to Burn',
      'Teardrops on My Guitar',
      'A Place in This World',
      'Cold as You',
      'The Outside',
      'Tied Together with a Smile',
      'Stay Beautiful',
      'Should\'ve Said No',
      'Mary\'s Song (Oh My My My)',
      'Our Song',
      'I\'m Only Me When I\'m with You',
      'Invisible',
      'A Perfectly Good Heart'
    ]
  },
  {
    id: 'fearless',
    name: 'Fearless',
    emoji: '💛',
    songs: [
      'Fearless',
      'Fifteen',
      'Love Story',
      'Hey Stephen',
      'White Horse',
      'You Belong with Me',
      'Breathe',
      'Tell Me Why',
      'You\'re Not Sorry',
      'The Way I Loved You',
      'Forever & Always',
      'The Best Day',
      'Change',
      'Jump Then Fall',
      'Untouchable',
      'Come In with the Rain',
      'Superstar',
      'The Other Side of the Door',
      'Today Was a Fairytale',
      'You All Over Me',
      'Mr. Perfectly Fine',
      'We Were Happy',
      'That\'s When',
      'Don\'t You',
      'Bye Bye Baby'
    ]
  },
  {
    id: 'speak-now',
    name: 'Speak Now',
    emoji: '💜',
    songs: [
      'Mine',
      'Sparks Fly',
      'Back to December',
      'Speak Now',
      'Dear John',
      'Mean',
      'The Story of Us',
      'Never Grow Up',
      'Enchanted',
      'Better Than Revenge',
      'Innocent',
      'Haunted',
      'Last Kiss',
      'Long Live',
      'Ours',
      'Superman',
      'Electric Touch',
      'When Emma Falls in Love',
      'I Can See You',
      'Castles Crumbling',
      'Foolish One',
      'Timeless'
    ]
  },
  {
    id: 'red',
    name: 'Red',
    emoji: '❤️',
    songs: [
      'State of Grace',
      'Red',
      'Treacherous',
      'I Knew You Were Trouble',
      'All Too Well',
      '22',
      'I Almost Do',
      'We Are Never Ever Getting Back Together',
      'Stay Stay Stay',
      'The Last Time',
      'Holy Ground',
      'Sad Beautiful Tragic',
      'The Lucky One',
      'Everything Has Changed',
      'Starlight',
      'Begin Again',
      'The Moment I Knew',
      'Come Back... Be Here',
      'Girl at Home',
      'Ronan',
      'Better Man',
      'Nothing New',
      'Babe',
      'Message In A Bottle',
      'I Bet You Think About Me',
      'Forever Winter',
      'Run',
      'The Very First Night',
      'All Too Well (10 Minute Version)'
    ]
  },
  {
    id: '1989',
    name: '1989',
    emoji: '🌊',
    songs: [
      'Welcome to New York',
      'Blank Space',
      'Style',
      'Out of the Woods',
      'All You Had to Do Was Stay',
      'Shake It Off',
      'I Wish You Would',
      'Bad Blood',
      'Wildest Dreams',
      'How You Get the Girl',
      'This Love',
      'I Know Places',
      'Clean',
      'Wonderland',
      'You Are in Love',
      'New Romantics',
      'Sweeter Than Fiction',
      'Is It Over Now?',
      'Say Don\'t Go',
      'Now That We Don\'t Talk',
      'Suburban Legends',
      'Slut!'
    ]
  },
  {
    id: 'reputation',
    name: 'Reputation',
    emoji: '🐍',
    songs: [
      '...Ready for It?',
      'End Game',
      'I Did Something Bad',
      'Don\'t Blame Me',
      'Delicate',
      'Look What You Made Me Do',
      'So It Goes...',
      'Gorgeous',
      'Getaway Car',
      'King of My Heart',
      'Dancing with Our Hands Tied',
      'Dress',
      'This Is Why We Can\'t Have Nice Things',
      'Call It What You Want',
      'New Year\'s Day'
    ]
  },
  {
    id: 'lover',
    name: 'Lover',
    emoji: '💖',
    songs: [
      'I Forgot That You Existed',
      'Cruel Summer',
      'Lover',
      'The Man',
      'The Archer',
      'I Think He Knows',
      'Miss Americana & the Heartbreak Prince',
      'Paper Rings',
      'Cornelia Street',
      'Death by a Thousand Cuts',
      'London Boy',
      'Soon You\'ll Get Better',
      'False God',
      'You Need to Calm Down',
      'Afterglow',
      'ME!',
      'It\'s Nice to Have a Friend',
      'Daylight',
      'All of the Girls You Loved Before'
    ]
  },
  {
    id: 'folklore',
    name: 'Folklore',
    emoji: '🌲',
    songs: [
      'The 1',
      'Cardigan',
      'The Last Great American Dynasty',
      'Exile',
      'My Tears Ricochet',
      'Mirrorball',
      'Seven',
      'August',
      'This Is Me Trying',
      'Illicit Affairs',
      'Invisible String',
      'Mad Woman',
      'Epiphany',
      'Betty',
      'Peace',
      'Hoax',
      'The Lakes'
    ]
  },
  {
    id: 'evermore',
    name: 'Evermore',
    emoji: '🍂',
    songs: [
      'Willow',
      'Champagne Problems',
      'Gold Rush',
      '\'Tis the Damn Season',
      'Tolerate It',
      'No Body, No Crime',
      'Happiness',
      'Dorothea',
      'Coney Island',
      'Ivy',
      'Cowboy like Me',
      'Long Story Short',
      'Marjorie',
      'Closure',
      'Evermore',
      'Right Where You Left Me',
      'It\'s Time to Go'
    ]
  },
  {
    id: 'midnights',
    name: 'Midnights',
    emoji: '✨',
    songs: [
      'Lavender Haze',
      'Maroon',
      'Anti-Hero',
      'Snow on the Beach',
      'You\'re on Your Own, Kid',
      'Midnight Rain',
      'Question...?',
      'Vigilante Shit',
      'Bejeweled',
      'Labyrinth',
      'Karma',
      'Sweet Nothing',
      'Mastermind',
      'The Great War',
      'Bigger Than the Whole Sky',
      'Paris',
      'High Infidelity',
      'Glitch',
      'Would\'ve, Could\'ve, Should\'ve',
      'Dear Reader',
      'Hits Different',
      'You\'re Losing Me'
    ]
  }
];

// Original Song Lists (for reference)
export const originalSongLists = {
  'taylor-swift': erasWithSongs.find(era => era.id === 'taylor-swift').songs,
  'fearless': erasWithSongs.find(era => era.id === 'fearless').songs,
  'speak-now': erasWithSongs.find(era => era.id === 'speak-now').songs,
  'red': erasWithSongs.find(era => era.id === 'red').songs,
  '1989': erasWithSongs.find(era => era.id === '1989').songs,
  'reputation': erasWithSongs.find(era => era.id === 'reputation').songs,
  'lover': erasWithSongs.find(era => era.id === 'lover').songs,
  'folklore': erasWithSongs.find(era => era.id === 'folklore').songs,
  'evermore': erasWithSongs.find(era => era.id === 'evermore').songs,
  'midnights': erasWithSongs.find(era => era.id === 'midnights').songs
};
