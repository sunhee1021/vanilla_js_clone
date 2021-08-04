const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}`:seconds
    }`;

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();

//head 에 소스넣어주기
//<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
//label에 class 줘야함



////////////////////////////////////////////////////////////////
const clicked_class = "clicked"
functino handleClick(){
    const hasClass = title.classList.toggle(clicked_class);
}
////////////////////////////////////////////////////////////////
var toggle = false; // false 기본값이 24시간

btn.addEventListener('click',function(){
    //클릭할때마다 현재toggle 상태 변경
    toggle = !toggle;

    if(toggle === true){
        //버튼(toggle)을 클릭하면 12시간형식으로 바뀌고
        localStorage.toggled != 
        //true로 된 값이 localStorage에 저장되게 설정
    }else{
        localStorage
        //기본값(24시간)으로 바뀌고
        //false(기본값)으로 된 값이
        //localStorage에 저장되게 설정

    }
});

function time12(getTime){ //12시간 버전
    var currentTime = getTime;
    var checktime = currentTime.substring(0,2);
    var intTime = parseInt(getTime); // int형으로 변환
    
    }

    function time24(getTime){ //24시간 버전
        var currentTime = getTime;
        var checktime = currentTime.substring(0,2);
        var intTime = parseInt(getTime); // int형으로 변환
        
        }
}

