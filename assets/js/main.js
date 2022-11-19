const toggleMenu = () => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};

const preLoader = () => {
    let preloader = document.querySelector('#preloader');
    let opacity = 1;
    let timer = setInterval(() => {
        if (opacity <= 0.1) {
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
                <li class="socials">
                    <a ${
                      path === 'aboutme'
                        ? 'class="active pointer" style="padding: 5px 14px;"'
                        : 'class="pointer"'
                    }>About Me</a>
                    <ul class="dropdown">
                        <a href="./aboutme.html"><li>All of me</li></a>
                        <a href="https://github.com/bestzige" target="_blank"><li>Github</li></a>
                    </ul>
                </li>
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

const fetchData = () => {
    fetch('./watchara.json?v=' + new Date().getTime())
        .then(response => response.json())
        .then(({ diaries, users, emotions }) => {
            localStorage.setItem('diaries', JSON.stringify(diaries));
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('emotions', JSON.stringify(emotions));
        })
        .catch(error => {
            console.error(error);
        });
};

fetchData();

const splitPath = () => {
    let url = window.location.href;
    let path = url.split('/').pop();
    path = path.split('.html')[0];
    return path;
};

const globalDiaries = JSON.parse(localStorage.getItem('diaries'));
const globalUsers = JSON.parse(localStorage.getItem('users'));
const globalEmotions = JSON.parse(localStorage.getItem('emotions'));

const getUsers = () => {
    return globalUsers;
};

const getDiaries = () => {
    return globalDiaries;
};

const getEmotions = () => {
    return globalEmotions;
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