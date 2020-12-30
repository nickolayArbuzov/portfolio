class Units extends Block{
    render(){
        let block = super.render();
        block.style.cursor = 'pointer';
        block.addEventListener('click', (e)=>{
            if(state.barack.select) {
                findEl('Казарма').style.border = '';  
                state.barack.select = false;   
                document.body.children[state.elems].style.left = `${screenWidth}px`;
            }
            if(e.target.style.border){
                e.target.style.border = '';
                document.body.children[state.elems+1].style.left = `${screenWidth}px`;
            }
            else {
                e.target.style.border = `${2}px solid yellow`;
                document.body.children[state.elems+1].style.left = `${screenWidth-200}px`;
            }
        })
        return block;
    }
}