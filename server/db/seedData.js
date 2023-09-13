//arrays of objects based on schema design


//users
const users = [
    { first_name: 'ani', last_name: 'loor', username: 'aniloo', password: 'secret', gender: 'female', location: 'brooklyn', education: 'art school burnout', work: 'baddest swe of all time', photos: 'https://i.ibb.co/TRSVSbD/371977734-325418556543852-2243856488041879969-n.jpg', about_me: 'just a baby', song: 'https://open.spotify.com/track/4Iey0xwi0kJjI4hkZRj3HE?si=95623e2c659b4c63' },
    { first_name: 'hannah', last_name: 'b', username: 'hannahb', password: 'nocap', gender: 'female', location: 'los angeles', education: 'smfa', work: 'developer', photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Girl_in_chibi_style.svg/1200px-Girl_in_chibi_style.svg.png', about_me: '<3333', song: 'https://open.spotify.com/track/4bR87SmQTiNcS5gDuaF9Yl?si=18d3466978014809' },
    { first_name: 'yuji', last_name: 'choi', username: 'yujichoi', password: 'iloveani', gender: 'male', location: 'queens', education: 'university at buffalo', work: 'dj extraordinare', photos: 'https://e0.pxfuel.com/wallpapers/215/40/desktop-wallpaper-anime-chibi-art-for-android-chibi-boy-thumbnail.jpg', about_me: 'i actually am already in love with ani, sorry', song: 'https://open.spotify.com/track/1yw28y3kv8uS7ENaZkbUFt?si=e0d73cce5aa94968' },
    { first_name: 'tim', last_name: 'lee', username: 'timlee', password: 'ugh', gender: 'male', location: 'brooklyn', education: 'nyu', work: 'professional know it all', photos: 'https://pbs.twimg.com/media/EYttqYIUcAAIrxX.jpg', about_me: 'i am the actual worst', song: 'https://open.spotify.com/track/4aVEsdnZrP2borAsVin48m?si=208d651ed93e4d71' },
    { first_name: 'camilo', last_name: 'luna', username: 'camiloluna', password: 'ayayay', gender: 'non binary', location: 'albany', education: 'tufts university', work: 'consultant', photos: 'https://piratediffusion1.s3.amazonaws.com/renders2/0Ln2WK/00001-r-pro-54gt3.jpg', about_me: 'luv me pls', song: 'https://open.spotify.com/track/7AcFCeQlTEYqdmN2n3WtFm?si=dfcdce6078f04e6d' },
    { first_name: 'Alex', last_name: 'Martinez', username: 'AdventureSeeker87', password: 'Wanderlust123', gender: 'female', location: 'los angeles', education: 'USC', work: 'Travel Blogger', photos: 'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-a-chibi-girl.jpg', about_me: "Travel enthusiast and storyteller. Always up for a new adventure. Let's explore the world together!", song: 'https://open.spotify.com/track/7tO1Wl8TvDj9zDSfwCNWkI?si=3452718c1b784c21' },
    { first_name: 'Ryan', last_name: 'Johnson', username: 'MusicLuvr24', password: 'Melody123', gender: 'male', location: 'austin, tx', education: 'Berklee College of Music', work: 'Music Producer', photos: 'https://ih1.redbubble.net/image.688340722.3890/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg', about_me: 'Passionate about melodies and rhythms. Searching for harmony in music and in life.', song: 'https://open.spotify.com/track/2u1ioR9wjR4FqSPLPoeQvb?si=39015a9bc06a4bf6' },
    { first_name: 'Maya', last_name: 'Patel', username: 'CuriousSoul', password: 'Explore456', gender: 'non binary', location: 'seattle, wa', education: 'Harvard', work: 'Reasearch Scientist', photos: 'https://randomuser.me/api/portraits/lego/3.jpg', about_me: 'Delving into the mysteries of the cosmos. Looking for someone to ponder the universe with.', song: 'https://open.spotify.com/track/3ddVWjVzJ5ISlehcBuBpaA?si=2bcc027b8f2744b7' },
    { first_name: 'Lauren', last_name: 'Miller', username: 'artisticdreamer', password: 'canvas789', gender: 'female', location: 'ny, ny', education: 'MIT', work: 'Gallery Curator', photos: 'https://randomuser.me/api/portraits/women/4.jpg', about_me: 'Immersed in the world of art. Seeking inspiration and a palette of new experiences.', song: 'https://open.spotify.com/track/1Smk0zNcvcCi9kM4yqZnX5?si=62dd4f3e385e4a82' },
    { first_name: 'Jordan', last_name: 'Williams', username: 'Techgeek21', password: 'codemaster67', gender: 'male', location: 'san fransisco', education: 'Georgia Tech', work: 'SWE', photos: 'https://randomuser.me/api/portraits/men/5.jpg', about_me: 'lets debug lifes mysteries tg', song: 'https://open.spotify.com/track/4kpx4wMn5AGVY5gVN3XbB8?si=3375e02be17d41c9' },
    { first_name: 'mia', last_name: 'thompson', username: 'bookworm88', password: 'readmore999', gender: 'trans woman', location: 'boston, ma', education: 'Simons College', work: 'Librarian', photos: 'https://randomuser.me/api/portraits/women/6.jpg', about_me: 'Lost in the pages of books. Seeking someone to share stories beyond the written word.', song: 'https://open.spotify.com/track/3Zejnhenzq754Q02TJ2dpZ?si=0b459e84a95346ea' },
    { first_name: 'Chris', last_name: 'Ramirez', username: 'Foodie90', password: 'tastebug78', gender: 'male', location: 'Chicago, IL', education: 'CIA', work: 'Food Critic', photos: 'https://randomuser.me/api/portraits/lego/7.jpg', about_me: ' Savoring life through taste. Lets embark on a culinary journey together.', song: 'https://open.spotify.com/track/0y7Xf4d6snUqmMFrCTD3ql?si=58ab170308c04049' },
    { first_name: 'ethan', last_name: 'scott', username: 'naturesmyhomie', password: 'takeahike', gender: 'non binary', location: 'Denver, CO', education: 'NYU', work: 'Park Ranger', photos: 'https://randomuser.me/api/portraits/men/8.jpg', about_me: 'lets go on an adventure', song: 'https://open.spotify.com/track/40aG6sP7TMy3x1J1zGW8su?si=9061198c33964c65' },
    { first_name: 'sophia', last_name: 'lee', username: 'mindfultraveler', password: 'weout89', gender: 'female', location: 'Honolulu, HI', education: 'NYU', work: 'Mindfulness Coach', photos: 'https://randomuser.me/api/portraits/women/9.jpg', about_me: 'wassup', song: 'https://open.spotify.com/track/2YsSQIQjeMbqk7RLTQg7u9?si=b7c27221255748eb' },
    { first_name: 'Liam', last_name: 'Turner', username: 'StarGazer67', password: 'nebula123', gender: 'non binary', location: 'Portland, OR', education: 'MIT', work: 'Planetarium Educator', photos: 'https://randomuser.me/api/portraits/men/10.jpg', about_me: 'lost among the stars', song: 'https://open.spotify.com/track/3oX2umsP57XAnLkaOnIAhy?si=128109f8590c4b77' }
]

//swipes
const swipes = [
    { user1: 1, user2: 3, is_like: true, is_pass: false },
    { user1: 3, user2: 1, is_like: true, is_pass: false },
    { user1: 1, user2: 4, is_like: true, is_pass: false },
    { user1: 4, user2: 1, is_like: true, is_pass: false },
    { user1: 1, user2: 5, is_like: true, is_pass: false },
    { user1: 5, user2: 1, is_like: true, is_pass: false },
    { user1: 1, user2: 2, is_like: true, is_pass: false },
    { user1: 2, user2: 1, is_like: true, is_pass: false },
    { user1: 5, user2: 2, is_like: false, is_pass: true },
    { user1: 4, user2: 3, is_like: false, is_pass: true },
    { user1: 1, user2: 6, is_like: true, is_pass: false },
    { user1: 1, user2: 7, is_like: true, is_pass: false },
    { user1: 1, user2: 8, is_like: true, is_pass: false },
    { user1: 1, user2: 9, is_like: true, is_pass: false },
    { user1: 1, user2: 10, is_like: true, is_pass: false },
    { user1: 1, user2: 11, is_like: true, is_pass: false },
    { user1: 1, user2: 12, is_like: true, is_pass: false },
    { user1: 1, user2: 13, is_like: true, is_pass: false },
    { user1: 6, user2: 1, is_like: true, is_pass: false },
    { user1: 7, user2: 1, is_like: true, is_pass: false },
    { user1: 8, user2: 1, is_like: true, is_pass: false },
    { user1: 9, user2: 1, is_like: true, is_pass: false },
    { user1: 10, user2: 1, is_like: true, is_pass: false },
    { user1: 11, user2: 1, is_like: true, is_pass: false },
    { user1: 12, user2: 1, is_like: true, is_pass: false },
    { user1: 13, user2: 1, is_like: true, is_pass: false }
]

//messages

const messages = [
    { sender_id: 3, receiver_id: 1, thread_id: 1, message_content: "hehehehe" },
    { sender_id: 4, receiver_id: 1, thread_id: 2, message_content: "wassup" },
    { sender_id: 5, receiver_id: 1, thread_id: 3, message_content: "hola bb" },
    { sender_id: 2, receiver_id: 1, thread_id: 4, message_content: "q mas pues" },
    { sender_id: 6, receiver_id: 1, thread_id: 5, message_content: "Hey there!" },
    { sender_id: 7, receiver_id: 1, thread_id: 7, message_content: "Good morning!" },
    { sender_id: 8, receiver_id: 1, thread_id: 8, message_content: "How's it going?" },
    { sender_id: 9, receiver_id: 1, thread_id: 9, message_content: "Bonjour!" },
    { sender_id: 10, receiver_id: 1, thread_id: 10, message_content: "Greetings!" },
    { sender_id: 1, receiver_id: 2, thread_id: 4, message_content: "hiiiii" }
]

module.exports = { users, swipes, messages };