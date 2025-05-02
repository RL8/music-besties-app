// Configuration Constants
const MAX_SELECTION = 3;
const LOCAL_STORAGE_KEY = 'musicBestiesRankingsV3';
const COMMENT_MAX_LENGTH = 140;
const RATING_DESCRIPTIONS = { 
    0: '', 
    1: 'Still deciding', 
    2: 'Skip', 
    3: 'Tolerate it', 
    4: 'Love it', 
    5: 'All time fave' 
};

// Music Data
const erasWithSongs = [
    { id: 'debut', name: 'Debut', emoji: '💚', songs: ['Tim McGraw', 'Teardrops On My Guitar', 'Our Song', 'Picture to Burn', 'Should\'ve Said No'] },
    { id: 'fearless', name: 'Fearless', emoji: '💛', songs: ['Fearless', 'Fifteen', 'Love Story', 'You Belong With Me', 'White Horse'] },
    { id: 'speaknow', name: 'Speak Now', emoji: '💜', songs: ['Mine', 'Sparks Fly', 'Back To December', 'Mean', 'The Story of Us', 'Enchanted', 'Long Live'] },
    { id: 'red', name: 'Red', emoji: '❤️', songs: ['State of Grace', 'Red', 'I Knew You Were Trouble', 'All Too Well', '22', 'We Are Never Ever Getting Back Together', 'All Too Well (10 Min)'] },
    { id: '1989', name: '1989', emoji: '🩵', songs: ['Welcome to New York', 'Blank Space', 'Style', 'Out Of The Woods', 'Shake It Off', 'Bad Blood', 'Wildest Dreams', 'New Romantics'] },
    { id: 'reputation', name: 'Reputation', emoji: '🖤', songs: ['...Ready for It?', 'End Game', 'Delicate', 'Look What You Made Me Do', 'Getaway Car', 'Call It What You Want'] },
    { id: 'lover', name: 'Lover', emoji: '🩷', songs: ['Cruel Summer', 'Lover', 'The Man', 'You Need To Calm Down', 'ME!', 'Paper Rings', 'Cornelia Street'] },
    { id: 'folklore', name: 'folklore', emoji: '🩶', songs: ['the 1', 'cardigan', 'the last great american dynasty', 'exile', 'my tears ricochet', 'mirrorball', 'seven', 'august', 'this is me trying', 'illicit affairs', 'invisible string', 'mad woman', 'epiphany', 'betty', 'peace', 'hoax', 'the lakes'] },
    { id: 'evermore', name: 'evermore', emoji: '🧡', songs: ['willow', 'champagne problems', 'gold rush', '\'tis the damn season', 'tolerate it', 'no body, no crime', 'happiness', 'dorothea', 'coney island', 'ivy', 'cowboy like me', 'long story short', 'marjorie', 'closure', 'evermore', 'right where you left me', 'it\'s time to go'] },
    { id: 'midnights', name: 'Midnights', emoji: '💙', songs: ['Lavender Haze', 'Maroon', 'Anti-Hero', 'Snow On The Beach', 'You\'re On Your Own, Kid', 'Midnight Rain', 'Question...?', 'Vigilante Shit', 'Bejeweled', 'Labyrinth', 'Karma', 'Sweet Nothing', 'Mastermind', 'The Great War', 'Bigger Than The Whole Sky', 'Paris', 'High Infidelity', 'Glitch', 'Would\'ve, Could\'ve, Should\'ve', 'Dear Reader', 'Hits Different', 'You\'re Losing Me'] },
    { id: 'ttpd', name: 'TTPD', emoji: '🤍', songs: ['Fortnight', 'The Tortured Poets Department', 'My Boy Only Breaks His Favorite Toys', 'Down Bad', 'So Long, London', 'But Daddy I Love Him', 'Fresh Out The Slammer', 'Florida!!!', 'Guilty as Sin?', 'Who\'s Afraid of Little Old Me?', 'I Can Fix Him (No Really I Can)', 'loml', 'I Can Do It With a Broken Heart', 'The Smallest Man Who Ever Lived', 'The Alchemy', 'Clara Bow', 'The Black Dog', 'imgonnagetyouback', 'The Albatross', 'Chloe or Sam or Sophia or Marcus', 'How Did It End?', 'So High School', 'I Hate It Here', 'thanK you aIMee', 'I Look in People\'s Windows', 'The Prophecy', 'Cassandra', 'Peter', 'The Bolter', 'Robin', 'The Manuscript'] }
];

// Derived Data
const eraNamesInOrder = erasWithSongs.map(era => era.name);
const originalSongLists = erasWithSongs.reduce((acc, era) => {
    acc[era.id] = era.songs;
    return acc;
}, {});

// Emoji Mapping
const eraEmojis = erasWithSongs.reduce((acc, era) => {
    acc[era.id] = era.emoji;
    acc[era.name] = era.emoji;
    return acc;
}, {});
eraEmojis['eras'] = '✨';
