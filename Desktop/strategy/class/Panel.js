class Panel extends Block{
    render(){
        let block = super.render();
        block.style.transitionProperty = 'left';
        block.style.transitionDuration = `${1}s`;
        return block;
    }
}