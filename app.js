// Times ==================================
let morningImg = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/brunswickcountync/IMG_9938_sunrise_coffee_8094e073-cefc-4914-aac4-e2decedc074f.jpg';

let afternoonImg = 'https://www.chamanexperience.com/wp-content/uploads/2020/01/fotografi%CC%81a-de-paisaje-1024x683.jpg';

let eveningImg = "https://cdn.pixabay.com/photo/2018/05/11/11/53/landscape-3390360_960_720.jpg";

let nightImg = "https://kids.jotdown.es/wp-content/uploads/2019/01/dog-647528_960_720.jpg";


function Clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // let a = prompt('klk bajo a maga');
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let clockTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').innerHTML = clockTime;

    // changing the img 
    let img = '';

    if (hours <= 12) {
        img = morningImg;
    }

    if (hours >= 12 && hours < 16) {
        img = afternoonImg;
    }

    if (hours >= 16 && hour < 19) {
        img = eveningImg;
    }

    if (hours >= 19) {
        img = nightImg;
    }

    document.getElementById('imgWeather').src = img;
    setTimeout(Clock, 1000)
}

try {
    var geiName = prompt("Who are you")
    geiName = geiName.toLowerCase();
    if (geiName == "juan") {
        alert('lol pleyer. Okno, Me pase. \n Pito lover. Ah no, es lo mismo, aaaaaa')
    }
    if (geiName == "benjamin") {
        alert('bueje e fan de etabuol')
    }
    if (geiName =="odalismer") {
        alert('Care culo \n llabo que yota')
    }
    if (geiName == "Rayfel") {
        alert('un nub')
    }
    if (geiName == "aldo") {
        alert('bes fren gei, cuidao si me lo chup*')
    }
    if (geiName == "samir") {
        alert('coraniviru')
    }
    if (geiName == "ivan") {
        alert('SIMP!!!!!!!!!!!')
    }
    if (geiName == "jeyson", "yeison", "jason") {
        alert('pito lover pero e gente')
    }
    if (geiName == "brigitte") {
        alert('briyi')
    }
    if (geiName == "Fernando") {
        alert('simp pito lover')
    }
    if (geiName == "ivan") {
        alert('pito lover')
    }
} catch {
    alert('pa que lo cancela, no e opsional')
}

document.cookie = geiName;
Clock()


