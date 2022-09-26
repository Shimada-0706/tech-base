var display = document.getElementById("display");

//数字を入力。ディスプレイが初期値の0なら更新、そうでないなら文字列として追加。
function copy(btn){
    if(display.value == '0'){
        display.value = btn;
    }else if(display.value == '-0'){
        display.value = '-' + btn;
    }else{
        display.value += btn;
    }
}

//Cのボタン。初期値に戻す。
function update(){
    display.value = '0';
}

//演算機能。連続で演算ボタンを押したら、最後に押した演算に変える。
function sym(btn){
    if(display.value.slice(-1) == '+'||display.value.slice(-1) == '-'||display.value.slice(-1) == '×'||display.value.slice(-1) == '÷'){
        display.value = display.value.replace(display.value.slice(-1), btn);
    }else{
        display.value += btn;
    }
}

//=のボタン。÷0があったらエラーを出す。ディスプレイ上では"×"と"÷"の表示になるようにする。
function calc(){
    if(display.value.indexOf('÷0') !== -1){
        display.value = "error";
    }else {
        display.value = eval(display.value.replaceAll('×', '*').replaceAll('÷', '/'));
    }
}

//小数点.のボタン。小数点を2回以上打てないようにする。
function priod(){
    if(display.value.indexOf('.') !== -1){
        display.value += '';
    }else{
        display.value += '.';
    }
}

//±のボタン
function plusminus(){
    if(display.value.slice(-1) == '+'||display.value.slice(-1) == '-'||display.value.slice(-1) == '×'||display.value.slice(-1) == '÷'){
        display.value = display.value + '-'
    }else if(display.value > 0){
        display.value = '-' + display.value;
    }else if(display.value == '0'){
        display.value = '-0';
    }else if(display.value == '-0'){
        display.value = '0';
    }else {
        display.value = display.value.replace('-', '');
    }
}

//%ボタン
function percent(){
    display.value = Number(display.value)*0.01;
}


