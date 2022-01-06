function process(){
    for(let i=1;i<=81;i++){
        let box = document.getElementById(`box${i}`);
        if(box.value == ''){
            box.value = 0;
        }
        else if(box.value != '0'){
            box.style.backgroundColor = 'black';
            box.style.color = 'yellow';
            box.style.fontWeight = 'bolder';
        }
    }
}