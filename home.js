// const dis = document.getElementById("num");
// dis.addEventListener("click",function (){
//     // document.getElementById("display").innerHTML = dis.innerHTML;
//     console.log(document.getElementById("num"));
// });


// document.getElementById("num").addEventListener("onclick",fun);

function fun(num){
    // let scrn = document.getElementById("display").innerHTML;
    // var n = toString(num);
    document.getElementById("display").innerHTML += num;
    console.log(document.getElementById("display").innerHTML);
}

function operation(op){
    if(op == "mul"){
        document.getElementById("display").innerHTML += '*';
        console.log(document.getElementById("display").innerHTML);
    }
    if(op == "sub"){
        document.getElementById("display").innerHTML += '-';
        console.log(document.getElementById("display").innerHTML);
    }
    if(op == "div"){
        document.getElementById("display").innerHTML += '/';
        console.log(document.getElementById("display").innerHTML);
    }
    if(op == "add"){
        document.getElementById("display").innerHTML += '+';
        console.log(document.getElementById("display").innerHTML);
    }
    if(op == "dot"){
        document.getElementById("display").innerHTML += '.';
        console.log(document.getElementById("display").innerHTML);
    }
}

function op(){
    let ans =  eval(document.getElementById("display").innerHTML)
    // console.log(ans);
    document.getElementById("display").innerHTML = ans;
}

function clr(){
    document.getElementById("display").innerHTML = " ";
}