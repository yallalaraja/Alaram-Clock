const currentTime = document.querySelector("h1");
const select = document.querySelectorAll("select");

for(let i=12;i>0;i--){
    i = i<10 ? "0" + i :i;
    let option = `option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i=59;i>0;i--){
    i = i<10 ? "0" + i :i;
    let option = `option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i=2;i>0;i--){
    let time = i == 1 ? "AM" : "PM"
    let option = `option value="${time}">${time}</option>`;
    select[2].firstElementChild.insertAdjacentHTML("afterend",option);
}


setInterval(()=>{
    //get hours,mins,secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    time = "AM";

    if(h>=12){
        h = h-12;
        time = "PM";
    }
    h = h == 0 ?h = 12 :h;

    h=h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${time}`;
},1000);
