let changeFrame = (e,x,y)=>{
    let el = findEl('Рамка');
    if(e.clientX < x){
        el.style.left = `${e.clientX}px`;
        el.style.width = `${x-e.clientX}px`;
    } else {
        el.style.left = `${x}px`;
        el.style.width = `${e.clientX-x}px`;
    }
    if(e.clientY < y){
        el.style.top = `${e.clientY}px`;
        el.style.height = `${y-e.clientY}px`;
    } else {
        el.style.top = `${y}px`;
        el.style.height = `${e.clientY-y}px`;
    }
}

findEl('Игровое поле').addEventListener('mousedown', (e)=>{
    let x = e.clientX;
    let y = e.clientY;
    let frameField = new Block('Рамка',0,0,'RGBA(0,0,0,0.1)',y,x);
    frameField.render();

    findEl('Игровое поле').addEventListener('mousemove', (e)=>{changeFrame(e,x,y)})
})

findEl('Игровое поле').addEventListener('mouseup', ()=>{
    findEl('Рамка').remove();
    findEl('Игровое поле').remove();
    let field = new Block('Игровое поле', window.innerWidth, window.innerHeight-100, 'green');
    field.altRender();
})



    
    
    