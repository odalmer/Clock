// Times ==================================
let morningImg = 'https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2Fshutterstock_264132746.jpg';
let afternoonImg = 'https://www.wftv.com/resizer/9JyCTLwoMHR1cr2vnWFTXUMYAdk=/1200x675/cloudfront-us-east-1.images.arcpublishing.com/cmg/HH2OXXRTC5HZDHVMTWPJ32KJRQ.jpg';
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
        console.log("ok");
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

    if (hours >= 12) {
        img = nightImg;
    }

    document.getElementById('imgWeather').src = img;
    setTimeout(Clock, 1000)
}

Clock()
alert("welcome to my watch. The image updates according to the time you see it")

