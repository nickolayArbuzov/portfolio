class HireUnits extends Block{
    render(){
        let block = super.render(document.body.children[state.elems]);
        block.style.cursor = 'pointer';
        block.addEventListener('click', (e)=>{
            let unit = new Units(e.target.innerText,25,25,e.target.style.background);
            unit.render();
        })
        return block;
    }
}