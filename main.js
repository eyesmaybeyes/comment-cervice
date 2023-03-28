'use strict';
const button = document.querySelector(".btn");

button.onclick = function () {
    checkSpam(),
        sendImg(),
        changeUserName(),
        getDate();
};

function checkSpam() {
    const comment = document.getElementById('comments').value;
    let changedComment = comment.replace(/viagra|xxx/gi, '***');
    console.log(changedComment);
    document.getElementById('chatComment').textContent = changedComment;
}

function sendImg() {
    const imgLink = document.getElementById('link').value;
    const chatImage = document.getElementById('chatImage');
    const imgArray = ['https://abrakadabra.fun/uploads/posts/2022-03/1646406414_4-abrakadabra-fun-p-ikonki-dlya-diskorda-anime-9.jpg',
        'https://img.freepik.com/premium-vector/anime-manga-avatar-schoolgirl_146706-382.jpg?w=2000',
        'https://img.pikbest.com/png-images/qiantu/cute-bear-girl-anime-avatar-illustration_2529739.png!bwr800',
        'https://pngicon.ru/file/uploads/anime-girls.png',
        'https://otkritkis.com/wp-content/uploads/2022/06/rovzi.jpg'];
    let newImage = Math.floor(Math.random() * imgArray.length);
    if (imgLink == '') {
        chatImage.src = imgArray[newImage];
    } else {
        chatImage.src = imgLink;
    }
}

function getDate() {
    let a = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = days[a.getDay()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = day + ', ' + date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min + ':' + sec;
    document.getElementById('chatDate').textContent = time;

    console.log(time)
}

document.querySelector('#yes').addEventListener('click', function () {
    this.form.querySelector('#no').disabled = this.checked

})
document.querySelector('#no').addEventListener('click', function () {
    this.form.querySelector('#yes').disabled = this.checked
})


function changeUserName() {
    let userName = document.getElementById('fullName').value;
    const checkboxYes = document.getElementById('yes');
    const checkboxNo = document.getElementById('no');
    function getNewUserName() {
        document.getElementById('chatUserName').textContent = 'Username';
    }
    if (userName == '') {
        getNewUserName();
    }
    else if (checkboxYes.checked == true && checkboxNo.checked == false) {
        let withoutSpace = userName.trim();
        let fullName = withoutSpace.split(/[\s,]+/);
        let correctName = [];
        correctName = fullName.map(function (elem) {
            return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
        });
        let fullCorrectUserName = correctName.join(' ');
        console.log(fullCorrectUserName);
        document.getElementById('chatUserName').textContent = fullCorrectUserName;
    }
    else {
        getNewUserName();
    }
}