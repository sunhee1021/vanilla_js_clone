const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDOList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



let toDos = [];

function deleteToDo(event){
    const btn = event.target;  //어떤 버튼이 삭제하려고 눌렀는지 모르니까 target을 써줘야해
    const li = btn.parentNode;
    toDOList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); //새로고침해도 삭제된게 다시 안생기게
                            //array안에 있는 모든 toDos를 통함                                  
    toDos = cleanToDos;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}                                //자바스크립트 object 를 string 으로 바꿔준다는것

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText=text; //text = submit function 에서 온 값 
    li.appendChild(span);
    li.appendChild(delBtn); //span을 li안에 넣고 버튼을 li에 넣을거임
    li.id = newId;
    toDOList.appendChild(li); //마지막으로 li를 ul에 넣는거임
   
    const toDoObj = {
        text: text,
        id: newId
    };
    
    toDos.push(toDoObj);
    saveToDos();  //push 한후에 호출, 그전에 부르면 아무것도 저장할게 없지
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //로컬스토리지에는 string 값만 저장될수 있어
    //그냥 넣으면 object object 라고 나옴
    if(loadedToDos !== null){  //이 form은 언제나 showing 일것이기때문에 else가 필요가 없네
        const parsedToDos = JSON.parse(loadedToDos); //toDos를 가져온 후, 가져온 것을 js object로 변환해줄것임
        parsedToDos.forEach(function(toDo){
         paintToDo(toDo.text);
        });
        
    }
    
}

function init(){
    loadToDos(); //뭔가를 실행해야 하는데 그건 로컬스토리지에서 올거임
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
