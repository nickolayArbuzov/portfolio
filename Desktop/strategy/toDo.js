const width = window.innerWidth;
const height = window.innerHeight;
let blocks = [];
let now;

let state = {
    i:3,
    startTime:[],
    endTime:[],
    time:[]
};

const render = () => {

    let theme = document.createElement('div');
    theme.style.position = 'absolute';
    theme.style.left = width*0.1 + 'px';
    theme.style.top = height*0.1 + 'px';
    theme.innerText = "Введите тему: ";
    document.body.append(theme);

    let inputTheme = document.createElement('input');
    inputTheme.style.position = 'absolute';
    inputTheme.style.left = width*0.2 + 'px';
    inputTheme.style.top = height*0.1 + 'px';
    document.body.append(inputTheme);

    let lesson = document.createElement('div');
    lesson.style.position = 'absolute';
    lesson.style.left = width*0.4 + 'px';
    lesson.style.top = height*0.1 + 'px';
    lesson.innerText = "Введите урок: ";
    document.body.append(lesson);

    let inputLesson = document.createElement('input');
    inputLesson.style.position = 'absolute';
    inputLesson.style.left = width*0.5 + 'px';
    inputLesson.style.top = height*0.1 + 'px';
    document.body.append(inputLesson);

    let buttonAdd = document.createElement('button');
    buttonAdd.style.position = 'absolute';
    buttonAdd.style.left = width*0.7 + 'px';
    buttonAdd.style.top = height*0.1 + 'px';
    buttonAdd.innerText = "Добавить";
    document.body.append(buttonAdd);

    let totalTime = document.createElement('div');
    totalTime.style.position = 'absolute';
    totalTime.style.left = width*0.8 + 'px';
    totalTime.style.top = height*0.1 + 'px';
    totalTime.innerText = "Общее время: ";
    document.body.append(totalTime);

    blocks = [inputTheme, inputLesson, buttonAdd];

    return blocks;
}

const renderHeader = () => {

    let themeHeader = document.createElement('div');
    themeHeader.style.position = 'absolute';
    themeHeader.style.left = width*0.2 + 'px';
    themeHeader.style.top = height*0.2 + 'px';
    themeHeader.innerText = "ТЕМА";
    themeHeader.classList.add('h');
    document.body.append(themeHeader);

    let lessonHeader = document.createElement('div');
    lessonHeader.style.position = 'absolute';
    lessonHeader.style.left = width*0.4 + 'px';
    lessonHeader.style.top = height*0.2 + 'px';
    lessonHeader.innerText = "УРОК";
    lessonHeader.classList.add('h');
    document.body.append(lessonHeader);

    let startHeader = document.createElement('div');
    startHeader.style.position = 'absolute';
    startHeader.style.left = width*0.6 + 'px';
    startHeader.style.top = height*0.2 + 'px';
    startHeader.innerText = "Начало";
    startHeader.classList.add('h');
    document.body.append(startHeader);

    let endHeader = document.createElement('div');
    endHeader.style.position = 'absolute';
    endHeader.style.left = width*0.7 + 'px';
    endHeader.style.top = height*0.2 + 'px';
    endHeader.innerText = "Окончание";
    endHeader.classList.add('h');
    document.body.append(endHeader);
}

const deleteHeader = () => {
    for(let j = 0; j < document.body.children.length; j++){
        if (document.body.children[j].classList.contains('h')){
            document.body.children[j].remove();
            j--;
        }
    }
}

const findEl = () => {
    for(let j = 0; j < document.body.children.length; j++){
        if (document.body.children[j].classList.contains(state.i)){
            return true;
        }
    }
}

const renderTable = (a) => {

    now = new Date;
    state.endTime.push(now);

    let end = document.createElement('div');
    end.style.position = 'absolute';
    end.style.left = width*0.7 + 'px';
    end.style.top = height*0.1*a + 'px';
    if (now.getMinutes()<10){
        end.innerText = now.getHours() + ':0' + now.getMinutes();
    } else{
        end.innerText = now.getHours() + ':' + now.getMinutes();
    }
    end.classList.add(a);
    document.body.append(end);

    let theme = document.createElement('div');
    theme.style.position = 'absolute';
    theme.style.left = width*0.2 + 'px';
    theme.style.top = height*0.1*a + 'px';
    theme.innerText = blocks[0].value;
    theme.classList.add(a);
    document.body.append(theme);

    let lesson = document.createElement('div');
    lesson.style.position = 'absolute';
    lesson.style.left = width*0.4 + 'px';
    lesson.style.top = height*0.1*a + 'px';
    lesson.innerText = blocks[1].value;
    lesson.classList.add(a);
    document.body.append(lesson);

    let buttonDel = document.createElement('button');
    buttonDel.style.position = 'absolute';
    buttonDel.style.left = width*0.8 + 'px';
    buttonDel.style.top = height*0.1*a + 'px';
    buttonDel.innerText = "Удалить";
    buttonDel.classList.add(a);
    buttonDel.addEventListener('click', () => {
        for(let j = 0; j < document.body.children.length; j++){
            if (document.body.children[j].classList.contains(a)){
                document.body.children[j].remove();
                j--;
            }
        }
        state.i--;
        if (state.i == 3){
            deleteHeader();
        }
    })
    document.body.append(buttonDel);
}

render();

blocks[0].addEventListener('focus',() => {
    if(!findEl()){
        now = new Date;
        state.startTime.push(now);
        let start = document.createElement('div');
        start.style.position = 'absolute';
        start.style.left = width*0.6 + 'px';
        start.style.top = height*0.1*(state.i) + 'px';
        if (now.getMinutes()<10){
            start.innerText = now.getHours() + ':0' + now.getMinutes();
        } else{
            start.innerText = now.getHours() + ':' + now.getMinutes();
        }
        start.classList.add(state.i);
        document.body.append(start);
    }
})

blocks[2].addEventListener('click', () => {
    if (blocks[0].value && blocks[1].value){
        renderTable(state.i);
        if (state.i == 3) {
            renderHeader();
        }
        state.i++;
        blocks[0].value = '';
        blocks[1].value = '';
        blocks[0].style.borderColor = '';
        blocks[1].style.borderColor = '';
    } else{
        blocks[0].style.borderColor = 'red';
        blocks[1].style.borderColor = 'red';
    }
})
