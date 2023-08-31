//arrays of objects based on schema design


//users
const users = [
    {firstName: 'ani', lastName: 'loor', username:'aniloo', password: 'secret', gender: 'female', location: 'brooklyn', education: 'art school burnout', work: 'baddest swe of all time', photos: 'https://i.ibb.co/TRSVSbD/371977734-325418556543852-2243856488041879969-n.jpg', aboutMe: 'just a baby', song:'https://open.spotify.com/track/4Iey0xwi0kJjI4hkZRj3HE?si=95623e2c659b4c63' },
    {firstName: 'hannah', lastName: 'b', username:'hannahb', password: 'nocap', gender: 'female', location: 'los angeles', education: 'smfa', work: 'developer', photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Girl_in_chibi_style.svg/1200px-Girl_in_chibi_style.svg.png', aboutMe: '<3333', song:'https://open.spotify.com/track/4bR87SmQTiNcS5gDuaF9Yl?si=18d3466978014809' },
    {firstName: 'yuji', lastName: 'choi', username:'yujichoi', password: 'iloveani', gender: 'male', location: 'queens', education: 'university at buffalo', work: 'dj extraordinare', photos: 'https://e0.pxfuel.com/wallpapers/215/40/desktop-wallpaper-anime-chibi-art-for-android-chibi-boy-thumbnail.jpg', aboutMe: 'i actually am already in love with ani, sorry',song:'https://open.spotify.com/track/1yw28y3kv8uS7ENaZkbUFt?si=e0d73cce5aa94968' },
    {firstName: 'tim', lastName: 'lee', username:'timlee', password: 'ugh', gender: 'male', location: 'brooklyn', education: 'nyu', work: 'professional know it all', photos: 'https://pbs.twimg.com/media/EYttqYIUcAAIrxX.jpg', aboutMe: 'i am the actual worst', song:'https://open.spotify.com/track/4aVEsdnZrP2borAsVin48m?si=208d651ed93e4d71' },
    {firstName: 'camilo', lastName: 'luna', username:'camiloluna', password: 'ayayay', gender: 'non binary', location: 'albany', education: 'tufts university', work: 'consultant', photos: 'https://piratediffusion1.s3.amazonaws.com/renders2/0Ln2WK/00001-r-pro-54gt3.jpg', aboutMe: 'luv me pls', song:'https://open.spotify.com/track/7AcFCeQlTEYqdmN2n3WtFm?si=dfcdce6078f04e6d' },
    {firstName: 'Alex', lastName:'Martinez', username:'AdventureSeeker87', password:'Wanderlust123', gender:'female', location:'los angeles', education:'USC', work:'Travel Blogger', photos: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-chibi-girl.jpg', aboutMe:"Travel enthusiast and storyteller. Always up for a new adventure. Let's explore the world together!", song:'https://open.spotify.com/track/7tO1Wl8TvDj9zDSfwCNWkI?si=3452718c1b784c21'},
    {firstName:'Ryan', lastName:'Johnson', username:'MusicLuvr24', password:'Melody123', gender:'male', location:'austin, tx', education:'Berklee College of Music', work:'Music Producer', photos:'https://ih1.redbubble.net/image.688340722.3890/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg', aboutMe:'Passionate about melodies and rhythms. Searching for harmony in music and in life.', song:'https://open.spotify.com/track/2u1ioR9wjR4FqSPLPoeQvb?si=39015a9bc06a4bf6'},
    {firstName: 'Maya', lastName:'Patel', username:'CuriousSoul', password:'Explore456', gender:'non binary', location:'seattle, wa', education:'Harvard', work:'Reasearch Scientist', photos:'https://randomuser.me/api/portraits/lego/3.jpg', aboutMe:'Delving into the mysteries of the cosmos. Looking for someone to ponder the universe with.', song:'https://open.spotify.com/track/3ddVWjVzJ5ISlehcBuBpaA?si=2bcc027b8f2744b7'},
    {firstName:'Lauren', lastName:'Miller', username:'artisticdreamer', password:'canvas789', gender:'female', location:'ny, ny', education:'MIT', work:'Gallery Curator', photos:'https://randomuser.me/api/portraits/women/4.jpg', aboutMe:'Immersed in the world of art. Seeking inspiration and a palette of new experiences.', song:'https://open.spotify.com/track/1Smk0zNcvcCi9kM4yqZnX5?si=62dd4f3e385e4a82'},
    {firstName: 'Jordan', lastName:'Williams', username:'Techgeek21', password:'codemaster67', gender:'male', location: 'san fransisco', education:'Georgia Tech', work:'SWE', photos:'https://randomuser.me/api/portraits/men/5.jpg', aboutMe:'lets debug lifes mysteries tg', song:'https://open.spotify.com/track/4kpx4wMn5AGVY5gVN3XbB8?si=3375e02be17d41c9'},
    {firstName:'mia', lastName:'thompson', username:'bookworm88', password:'readmore999', gender:'trans woman', location:'boston, ma', education:'Simons College', work:'Librarian', photos:'https://randomuser.me/api/portraits/women/6.jpg', aboutMe:'Lost in the pages of books. Seeking someone to share stories beyond the written word.', song:'https://open.spotify.com/track/3Zejnhenzq754Q02TJ2dpZ?si=0b459e84a95346ea'},
    {firstName:'Chris', lastName:'Ramirez', username:'Foodie90', password:'tastebug78', gender:'male', location:'Chicago, IL', education:'CIA', work:'Food Critic', photos:'https://randomuser.me/api/portraits/lego/7.jpg', aboutMe:' Savoring life through taste. Lets embark on a culinary journey together.', song:'https://open.spotify.com/track/0y7Xf4d6snUqmMFrCTD3ql?si=58ab170308c04049'},
    {firstName:'ethan', lastName:'scott', username:'naturesmyhomie', password:'takeahike', gender:'non binary', location:'Denver, CO', education:'NYU', work:'Park Ranger', photos:'https://randomuser.me/api/portraits/men/8.jpg', aboutMe:'lets go on an adventure', song:'https://open.spotify.com/track/40aG6sP7TMy3x1J1zGW8su?si=9061198c33964c65'},
    {firstName:'sophia', lastName:'lee', username:'mindfultraveler', password:'weout89', gender:'female', location:'Honolulu, HI', education:'NYU', work:'Mindfulness Coach', photos:'https://randomuser.me/api/portraits/women/9.jpg', aboutMe:'wassup', song:'https://open.spotify.com/track/2YsSQIQjeMbqk7RLTQg7u9?si=b7c27221255748eb'},
    {firstName:'Liam', lastName:'Turner', username:'StarGazer67', password:'nebula123', gender:'non binary', location:'Portland, OR', education: 'MIT', work:'Planetarium Educator', photos:'https://randomuser.me/api/portraits/men/10.jpg', aboutMe:'lost among the stars', song:'https://open.spotify.com/track/3oX2umsP57XAnLkaOnIAhy?si=128109f8590c4b77'}
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
    {user1: 4, user2: 3, isLike: false, isPass: true}
]

//messages
const messages = [
    {senderId: 1, receiverId: 3, message_content:"hehehehe"  },
    {senderId: 1, receiverId: 4, message_content:"wassup"  },
    {senderId: 1, receiverId: 5, message_content:"hola bb"  },
    {senderId: 1, receiverId: 2, message_content:"q mas pues"  }
]

module.exports = { users, swipes, messages };