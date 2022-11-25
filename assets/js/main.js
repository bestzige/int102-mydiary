const globalUsers = [
    { id: 1, name: 'BestZige', avatar: 'assets/images/bestzige.png' },
    { id: 2, name: 'PairZige', avatar: 'assets/images/pairzige.png' },
    { id: 3, name: 'Dad', avatar: 'assets/images/dad.png' },
    { id: 4, name: 'Mom', avatar: 'assets/images/mom.png' },
    { id: 5, name: 'Others', avatar: 'assets/images/other.png' }
];
const globalEmotions = [
    { id: 1, emoji: '😀' },
    { id: 2, emoji: '🥲' },
    { id: 3, emoji: '🤣' },
    { id: 4, emoji: '😂' },
    { id: 5, emoji: '🙃' },
    { id: 6, emoji: '🥰' },
    { id: 7, emoji: '😋' },
    { id: 8, emoji: '😉' },
    { id: 9, emoji: '🤑' },
    { id: 10, emoji: '😔' }
];
const globalDiaries = [{
        id: 1,
        title: 'First date at Huahin.',
        description: "May 8th is the morning of the first day to go to Hua Hin with family. We wake up early to leave. The father had the idea to find a restaurant to eat at on the way. So we stopped by the famous food market in Phetchaburi town. After finishing the meal, I went to my house in Hua Hin. Prepare to go to a relative's wedding held at the military camp. It's a very big wedding ceremony. Just some delicious food, and I had a little booze with my father. When I got home, a family party was held at home until midnight, and then we went to bed. Prepare for the next morning.",
        image: 'assets/images/diary/1.jpg',
        diary_date: '2022-05-08 06:00:00',
        updated_at: '2022-11-22 11:00:00',
        user_id: 1,
        emotion: 6,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }]
    },
    {
        id: 2,
        title: 'New student at KMUTT on the beach.',
        description: "I'm still in Hua Hin as of May 15th. And today is the announcement of my girlfriend's university entrance exam results. She got a very unsatisfactory college degree. making her sad So my family thought that I would take her on a trip. At 1 PM, we drove to the beach cafe in Hua Hin. We ordered a glass of water to drink. On this trip, my sister and aunt came along. Make it more fun. We took pictures together until almost 8:00 p.m. So drive on to the barracks. There is a secret restaurant by the sea. quite a few people and delicious food We drank until about four o'clock and drove home. Watch late-night movies together and go to bed.",
        image: 'assets/images/diary/2.jpg',
        diary_date: '2022-05-15 08:30:35',
        updated_at: '2022-11-22 11:45:50',
        user_id: 1,
        emotion: 1,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }, { user_id: 5 }]
    },
    {
        id: 3,
        title: 'Try to go Phetchabun',
        description: "On June 4th, I was in Phetchabun with my father's family and friends. In the morning, since we wake up, we cook and clean up the house of our friend's father. When we finished cleaning, we left the house. to visit Wat Pha Son Kaew Along the way, there are many beautiful cafes. So we stopped together to take pictures and see the view on the mountain. and continue the journey. We went to find a tent with air conditioning. By the Mekong River, it was very beautiful when we finished packing the tents. Then go to Chiang Khan Market to eat and walk around the night market. The view along the Mekong River is very beautiful. when everyone is full Then go back to the accommodations to sit and talk in front of the tent. Have fun until midnight. and went to bed.",
        image: 'assets/images/diary/3.jpg',
        diary_date: '2022-06-04 03:20:14',
        updated_at: '2022-11-22 17:45:25',
        user_id: 1,
        emotion: 6,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }, { user_id: 5 }]
    },
    {
        id: 4,
        title: 'Eat for life at Phetchabun',
        description: "On June 5th, we woke up early to enjoy the cool weather and see the fog. After having breakfast, we go back to sleep at the tent. I woke up again at 10:30 AM. Get ready to go to a cafe near the accommodation; the cafe is very beautiful, there are many photo angles to choose from, and there are delicious cakes and drinking water. We took pictures for each other and continued our journey. We went to a temple to pay homage to the Buddha and ate at a famous restaurant in Phetchabun. When the evening falls, there is a family party. We sing karaoke at my father's friend's house and eat together. At about 1 pm, we went to Bangkok.",
        image: 'assets/images/diary/4.jpg',
        diary_date: '2022-06-05 07:00:09',
        updated_at: '2022-11-22 17:47:32',
        user_id: 1,
        emotion: 7,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }, { user_id: 5 }]
    },
    {
        id: 5,
        title: 'Gamer Duo late night',
        description: "I went to Rayong with my girlfriend. We went for 3 days and 2 nights because I had an appointment with the dentist in Rayong. We leave early in the morning to get on the bus at 8 o'clock and arrive in Rayong around 11:30 a.m. When will I be home? We slept until 1 p.m. because we were tired from the car ride. When we woke up, we rode our motorcycles out to get our teeth done. and went to Laem Thong. Print documents on university scholarships. and go to the sea in the evening, buy food, and eat by the sea. In the evening, we returned home. took a shower, played games together, and went to bed.",
        image: 'assets/images/diary/5.jpg',
        diary_date: '2022-08-20 06:22:00',
        updated_at: '2022-11-22 17:52:43',
        user_id: 1,
        emotion: 9,
        relations: [{ user_id: 2 }]
    },
    {
        id: 6,
        title: 'Microsoft meeting by Born2Dev',
        description: "Sunday, September 25th, was the day I participated in the Born to Develop event as I was selected. I wake up early and leave by bike for about 20 minutes to reach the CP tower. I exchanged the card to enter the building. The elevator in the building is very fast. make me tinnitus And when I arrived at the event, I found that not many people had come because the downstairs was having a little issue. So my girlfriend and I went to have coffee and snacks. saw view from the high floor It's a very beautiful view. Bangkok is very wide. When it was time to start the activity, I went to set up a computer to do work shop. While he taught coding, there would be questions and prizes. I got everything And there will be a random number assigned when entering the event to determine who receives a shirt. I also got a shirt. At the end of the event, I went to Central to find McDonald's food and take BTS back home.",
        image: 'assets/images/diary/6.jpg',
        diary_date: '2022-09-25 10:30:20',
        updated_at: '2022-11-23 22:13:21',
        user_id: 1,
        emotion: 3,
        relations: [{ user_id: 2 }]
    },
    {
        id: 7,
        title: 'Kaeng Krachan Player',
        description: "October 15th is the day I went to Kaeng Krachan with my family. We drive out of Bangkok at 10 o'clock and stop for lunch at the car accommodations. and continue on to Kaeng Krachan because it is winter and the air is very good. The resort is almost full. We found a resort that is very beautiful, but the price is quite high. So we started to stress about where to stay. And father saw the resort on the opposite side. When he inquired, there was enough room left for two families. made us decide to stay here. We went to 7-11 to buy water and snacks. Order food from the resort to sit and eat. I entered the room before because I was tired. But when I lie on the phone until 5 o'clock, I'm hungry again. So I invited my girlfriend and father to go to 7-11. At that time, my mother was very drunk. So take a shower before going to bed. I sat down to eat at 7-11 for a while, packed up, and went to bed.",
        image: 'assets/images/diary/7.jpg',
        diary_date: '2022-10-15 10:30:20',
        updated_at: '2022-11-23 22:14:36',
        user_id: 1,
        emotion: 5,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }, { user_id: 5 }]
    },
    {
        id: 8,
        title: 'Goldfish Lover at Ratchaburi',
        description: "16 October The day my family had to return from Kaeng Krachan It makes us think that we will travel through Ratchaburi. So we woke up early to have breakfast. and sit and watch the view and waterfall in the morning. When everyone showers, they begin to go out to eat. At first, we saw a restaurant on the Internet that looked delicious. But when entering the shop, it's quite scary. So we find another restaurant to eat at. And we have a restaurant along the road. We ate and talked until we ran out of food. So we said goodbye to my father's friend's family because we were going in different directions. And we continue to drive to a very big goldfish farm. We've seen this farm on YouTube. Me and my mom really like goldfish. So it takes a very long time to see the goldfish. And we got two goldfish, which were very cute, and we went back to Bangkok. to release the fish into the fish pond and relax.",
        image: 'assets/images/diary/8.jpg',
        diary_date: '2022-10-16 07:35:32',
        updated_at: '2022-11-23 22:16:06',
        user_id: 1,
        emotion: 5,
        relations: [{ user_id: 2 }, { user_id: 3 }]
    },
    {
        id: 9,
        title: 'Go to Pathom Chedi',
        description: "November 13th, the day before I saw Wat Pathom Chedi on Tik Tok, made me want to go so much. So I invited my family and my girlfriend to go together the next day. We wake up early to cook and have breakfast together. And when they finished eating, everyone came to lie down and rest and started to be too lazy to go outside the house. But when Father got up to take a shower, everyone started to get up, take a shower, and start to feel refreshed again. We leave for Chatuchak Market first. to buy fish  We bought 11 fish. We arrived in Nakhon Pathom at 4 o'clock, almost 5 o'clock. But I can only eat small things because there are so many people. So I went out to eat a meal near the house. very tasty food When I got home, I took a shower. I continued my diary project and went to bed.",
        image: 'assets/images/diary/9.jpg',
        diary_date: '2022-11-13 15:21:47',
        updated_at: '2022-11-23 22:18:18',
        user_id: 1,
        emotion: 7,
        relations: [{ user_id: 2 }, { user_id: 3 }]
    },
    {
        id: 10,
        title: 'BestZige at Uthai Thani',
        description: "November 18th was the day Grandma came to visit us at home. It made us think of taking Grandma to pay homage to the Buddha image in Uthai Thani. We leave when it's almost dark. So find a restaurant to eat at first. It is a famous restaurant in Uthai, and we find a resort nearby. But the resorts are full. So we have to sleep outside the city. At first, when I saw the price, I thought it had to be a room that wasn't pretty. but when we arrived, the room was very beautiful and had a swimming pool. My family and I were swimming in the pool, but Grandma went to take a shower because her legs weren't good. When Grandma finished taking a bath, Mom and Dad went to take a bath, and I continued to take a bath. and went to bed because they were tired from swimming and wanted to wake up early. Eat the breakfast provided by the hotel. Lap went to pay homage to the Buddha image at Wat Tha Sung and went to eat papaya salad at the restaurant that her mother suggested, but the restaurant waited for a very long time. make your father angry. But the fresh avocado juice is delicious. After eating, we went to the floating market in Ayutthaya. got a lot of snacks And when I get home, I take a shower and continue my project. Get something to eat and go to bed.",
        image: 'assets/images/diary/10.jpg',
        diary_date: '2022-11-18 06:02:32',
        updated_at: '2022-11-23 22:19:54',
        user_id: 1,
        emotion: 4,
        relations: [{ user_id: 2 }, { user_id: 3 }, { user_id: 4 }, { user_id: 5 }]
    }
];

const toggleMenu = () => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};

const preLoader = () => {
    let preloader = document.querySelector('#preloader');
    let opacity = 1;
    let timer = setInterval(() => {
        if (opacity <= 0.5) {
            clearInterval(timer);
            preloader.remove();
        }
        preloader.style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 100);
};

const loadNavbar = () => {
    let navbar = document.querySelector('.navbar');
    const path = splitPath();
    navbar.innerHTML = `
        <div class="logo">Diary</div>
        <ul>
            <button class="hamburger" onclick="toggleMenu()">&#9776;</button>
            <div class="menu">
                <a href="./" ${
                  path === 'index' || path === '' ? 'class="active"' : ''
                }><li>Home</li></a>
                <a href="./aboutme.html" ${
                  path === 'aboutme' ? 'class="active"' : ''
                }><li>AboutMe</li></a>
                <a href="./summarize.html" ${
                  path === 'summarize' ? 'class="active"' : ''
                }><li>Summarize</li></a>
            </div>
        </ul>
        `;
};

const loadFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML = `
        <p>Thank you and welcome to visited my diary website!</p>
    `;
};

const splitPath = () => {
    let url = window.location.href;
    let path = url.split('/').pop();
    path = path.split('.html')[0];
    return path;
};

const getUsers = () => {
    return globalUsers.sort((a, b) => {
        return a.id - b.id;
    });
};

const getDiaries = (page, limit) => {
    globalDiaries.sort((a, b) => {
        return new Date(b.diary_date) - new Date(a.diary_date);
    });

    if (page === undefined || limit === undefined) {
        return globalDiaries;
    }

    let result = [];
    let start = (page - 1) * limit;
    let end = start + limit;

    for (let i = start; i < end; i++) {
        if (globalDiaries[i] !== undefined) {
            result.push(globalDiaries[i]);
        }
    }

    return result;
};

const getEmotions = () => {
    return globalEmotions.sort((a, b) => a.id - b.id);
};

const getDiariesByUser = user_id => {
    let result = globalDiaries.filter(
        diary => diary.user_id === parseInt(user_id)
    );

    return result === undefined ? [] : result;
};

const getUser = id => {
    let result = globalUsers.find(user => user.id === parseInt(id));

    return result === undefined ? {} : result;
};

const getDiary = id => {
    let result = globalDiaries.find(diary => diary.id === parseInt(id));

    return result === undefined ? {} : result;
};

const getEmotion = id => {
    let result = globalEmotions.find(emotion => emotion.id === parseInt(id));

    return result === undefined ? '😃' : result;
};

/* Utils Section */
const timeAgo = time => {
    switch (typeof time) {
        case 'number':
            break;
        case 'string':
            time = +new Date(time);
            break;
        case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    var time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute from now'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour from now'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
        token = 'ago',
        list_choice = 1;

    if (seconds == 0) {
        return 'Just now';
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    var i = 0,
        format;
    while ((format = time_formats[i++]))
        if (seconds < format[0]) {
            if (typeof format[2] == 'string') return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return time;
};