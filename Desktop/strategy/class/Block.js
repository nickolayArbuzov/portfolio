class Block {
    constructor(value,width,height,background='gray',top=0,left=0){
        this.top = top;
        this.left = left;
        this.value = value;
        this.width = width;
        this.height = height;
        this.background = background;
    }

    render(where=document.body) {
        let block = document.createElement('div');
        block.style.position = 'absolute';
        block.style.top = `${this.top}px`;
        block.style.left = `${this.left}px`;
        block.innerText = this.value;
        block.style.width = `${this.width}px`;
        block.style.height = `${this.height}px`;
        block.style.background = this.background;
        block.style.boxSizing = 'border-box';
        block.style.userSelect = 'none';
        if (this.background == 'black'){
            block.style.color = 'white';
        }
        where.append(block);
        return block;
    }

    altRender(where=document.body.children[7]) {
        let block = document.createElement('div');
        block.style.position = 'absolute';
        block.style.top = `${this.top}px`;
        block.style.left = `${this.left}px`;
        block.innerText = this.value;
        block.style.width = `${this.width}px`;
        block.style.height = `${this.height}px`;
        block.style.background = this.background;
        block.style.boxSizing = 'border-box';
        block.style.userSelect = 'none';
        if (this.background == 'black'){
            block.style.color = 'white';
        }
        where.after(block);
        return block;
    }

}

