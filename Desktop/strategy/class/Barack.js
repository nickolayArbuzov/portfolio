class Barack extends Block{
    render(){
        let block = super.render();
        block.style.cursor = 'pointer';
        block.addEventListener('click', (e)=>{
            if(state.barack.select) {
                e.target.style.border = '';  
                state.barack.select = false;
                document.body.children[state.elems].style.left = `${screenWidth}px`;
            }
            else {
                findEl('Крестьянин').style.border = '';  
                findEl('Воин').style.border = '';  
                e.target.style.border = `${2}px solid yellow`;
                state.barack.select = true;
                document.body.children[state.elems].style.left = `${screenWidth-200}px`;
                document.body.children[state.elems+1].style.left = `${screenWidth}px`;
            }
        })
        return block;
    }
}