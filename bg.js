const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);


}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;

}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();

/*
리스트
ol은 순서가 있는 태그다. 그안의 항목들을 나열 할 때는 li를 쓴다.
ul은 순서가 없는 태그다. 그안의 항목들을 나열 할 때는 li를 쓴다.
JavaScript에서 html의 태그를 만들 때 쓰는 건 createElement()이다.
그리고 부모element안에 넣는 함수는 childElement이다.
JavaScript는 localstorage에 있는 모든 데이터를 string으로 저장하려 한다.
JSON은 자바스크립트Object를 String으로 바꾸어 줄 수도 있고(JSON.stringify()),
String을 Object로 변환해줄 수도 있다(JSON.parse()).
forEach()라는 함수는 기본적으로 배열에서 함수를 실행시키는 함수인데 각자의 원소하나씩을 인자로 다룬다.
filter()는 array의 모든 아이템을 통해 함수를 실행하고 그리고 true인 아이템들만 가지고 새로운 array를 만든다.이 함수의 또 다른 특징은 초기화를 해주어야된다는 것이다. 안쓰니까 되지 않았다.


*/