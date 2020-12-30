findEl = (name) => {
    for (let i=0; i<document.body.children.length; i++){
        if (document.body.children[i].innerText == name){
            return document.body.children[i];
        }
    }
    return document.body;
}


