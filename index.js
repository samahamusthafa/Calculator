let array=[]
let flag=false
function buttonClick(val){
    if(flag){

        document.getElementById("screen").value=val
        flag=false
    }else{
        document.getElementById("screen").value+=val

    }
    

}
function operatorClick(val){

    array.push(document.getElementById("screen").value+val)
    document.getElementById("screen").value=val
    flag=true
}
function clearDisplay(){
    document.getElementById("screen").value=""
    array=[]
}
function equalClick(){
    var text=array.join("")+document.getElementById("screen").value;
    var result=eval(text)
    document.getElementById("screen").value=result
    array=[]
    
}