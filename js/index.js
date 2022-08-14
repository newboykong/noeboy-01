function validateForm(){
    var x=document.forms["myForm"]["fname"].value
    if(x==null||x==""){
        alert("必需填写");
    }
    else if(x=="王志远"){
        window.open("../html/index02.html")
    }
    else{
        alert("你写错了");
    }
}
