//arrays of objects based on schema design


//users
const users = [
    {firstName: 'ani', lastName: 'loor', username:'aniloo', password: 'secret', gender: 'female', location: 'brooklyn', education: 'art school burnout', work: 'baddest swe of all time', photos: 'https://i.ibb.co/TRSVSbD/371977734-325418556543852-2243856488041879969-n.jpg', aboutMe: 'just a baby', song:'https://open.spotify.com/track/4Iey0xwi0kJjI4hkZRj3HE?si=95623e2c659b4c63' },
    {firstName: 'hannah', lastName: 'b', username:'hannahb', password: 'nocap', gender: 'female', location: 'los angeles', education: 'smfa', work: 'developer', photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Girl_in_chibi_style.svg/1200px-Girl_in_chibi_style.svg.png', aboutMe: '<3333', song:'https://open.spotify.com/track/4bR87SmQTiNcS5gDuaF9Yl?si=18d3466978014809' },
    {firstName: 'yuji', lastName: 'choi', username:'yujichoi', password: 'iloveani', gender: 'male', location: 'queens', education: 'university at buffalo', work: 'dj extraordinare', photos: 'https://e0.pxfuel.com/wallpapers/215/40/desktop-wallpaper-anime-chibi-art-for-android-chibi-boy-thumbnail.jpg', aboutMe: 'i actually am already in love with ani, sorry',song:'https://open.spotify.com/track/1yw28y3kv8uS7ENaZkbUFt?si=e0d73cce5aa94968' },
    {firstName: 'tim', lastName: 'lee', username:'timlee', password: 'ugh', gender: 'male', location: 'brooklyn', education: 'nyu', work: 'professional know it all', photos: 'https://pbs.twimg.com/media/EYttqYIUcAAIrxX.jpg', aboutMe: 'i am the actual worst', song:'https://open.spotify.com/track/4aVEsdnZrP2borAsVin48m?si=208d651ed93e4d71' },
    {firstName: 'camilo', lastName: 'luna', username:'camiloluna', password: 'ayayay', gender: 'non-binary', location: 'albany', education: 'tufts university', work: 'consultant', photos: 'https://piratediffusion1.s3.amazonaws.com/renders2/0Ln2WK/00001-r-pro-54gt3.jpg', aboutMe: 'luv me pls', song:'https://open.spotify.com/track/7AcFCeQlTEYqdmN2n3WtFm?si=dfcdce6078f04e6d' }
]

//swipes
const swipes = [
    {user1: 1, user2: 3, isLike: true, isPass: false},
    {user1: 3, user2: 1, isLike: true, isPass: false},
    {user1: 1, user2: 4, isLike: true, isPass: false},
    {user1: 4, user2: 1, isLike: true, isPass: false},
    {user1: 1, user2: 5, isLike: true, isPass: false},
    {user1: 5, user2: 1, isLike: true, isPass: false},
    {user1: 1, user2: 2, isLike: true, isPass: false},
    {user1: 2, user2: 1, isLike: true, isPass: false},
    {user1: 5, user2: 2, isLike: false, isPass: true},
    {user1: 4, user2: 3, isLike: false, isPass: true},
]

//messages
const messages = [
    {senderId: 1, receiverId: 3, message:"hehehehe"  },
    {senderId: 1, receiverId: 4, message:"wassup"  },
    {senderId: 1, receiverId: 5, message:"hola bb"  },
    {senderId: 1, receiverId: 2, message:"q mas pues"  }
]