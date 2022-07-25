//for(let i = 1; i <= 5; i++){
    //console.log(i);
//}


// count like loop
function consoleNumber(i){
    if(i > 5){//
        return;
    }
    console.log(i);
    consoleNumber(++i);//kono ekta function k function er vitor theke cl korle seta k recurtion bole
}
consoleNumber(1);