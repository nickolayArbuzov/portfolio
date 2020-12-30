let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight-100;

let state = {
    barack : {
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        select: false,
    },
    elems: 10,
    units: [],
    peasent: 0,
    warrior: 0
};

let field = new Block('Игровое поле', screenWidth, screenHeight, 'green');
field.render();

let barack = new Barack('Казарма',200,200,'gray',200,200);
barack.render();

let hirePanel = new Panel('Нанять',200,screenHeight,'gray',0,screenWidth);
hirePanel.render();

let unitChars = new Panel('Вы выбрали',200,screenHeight,'darkgray',0,screenWidth);
unitChars.render();

let buttonHirePeasent = new HireUnits('Крестьянин',50,50,'black',100,75);
buttonHirePeasent.render();

let buttonHireWarrior = new HireUnits('Воин',50,50,'red',200,75);
buttonHireWarrior.render();


let findPlace = () => {
    for (let x=state.barack.left+state.barack.width; x<screenWidth; x+=25){
        for (let y=state.barack.top+state.barack.height; y<screenHeight; y+=25){
            for (let i=0; i<state.units.length; i++){
                if(x==state.units.x && y==state.units.y){
                    continue;
                }
                else{
                    return x, y;
                }
            }
        }
    }
}

