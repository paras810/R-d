

let date = document.getElementById('date')
let time = document.getElementById('time')

let dt = new Date();

const cDt = () => {
    cDay = dt.getDay() + 1;
    cMnth = dt.getMonth() + 1;
    cYear = dt.getFullYear();
    let showDate = `${cDay}/${cMnth}/${cYear}`
    return showDate
}
// date.innerHTML= dt.toDateString()
date.innerHTML = cDt()
setInterval(() => {
    timeAudio =  new Audio('./timer_3,2,1,0(128k) Ringtone.mp3')
    newDate = new Date()
    hr = newDate.getHours()
    hr = hr <10 ? "0" + hr: hr
    min = newDate.getMinutes()
    min = min <10 ? "0" + min :min
    sec = newDate.getSeconds()
    sec = sec <10 ? "0" + sec : sec
    am_pm = hr>=12 ? " Day" : " Night"

    showTime =` ${hr}:${min}:${sec}${am_pm}`
    time.innerHTML = showTime
    // console.log(hr ,":"  ,min,":" +sec+ " "+am_pm);
    // timeAudio.play()
    // timeAudio.pause()

    //  showTime =  newDate.toLocaleTimeString()
    // time.innerHTML = showTime
    // console.log(showTime);
}, 1000);

//  random no between 1-100

const rNo = ()=>{
   a= 0 ;
   b = 100 ;
let r0_100 = Math.ceil( a + (b - a) * Math.random())
r0_100 = r0_100<10 ? '0'+r0_100 : r0_100
let RandomNo = document.getElementById('RandomNo')
RandomNo.innerHTML = r0_100

}




