function display(id){  
    var traget=document.getElementById(id);   //获取id为id的元素
    if(traget.style.display=="none" ){   //如果元素的style.display为none
        document.getElementById('lb').style.display = "none"; // 隐藏
        document.body.style.overflow='hidden' //隐藏滚动条禁止滚动
        traget.style.display="";   //显示
    }else{  
        document.body.style.overflow='visible' //恢复滚动条
        traget.style.display="none";   //隐藏
  }  
} 
window.onresize = function() {  
    if (document.documentElement.clientWidth > 1040) { // 如果屏幕宽度大于1040px
        document.getElementById('bl').style.display = " none"; // 隐藏
    }else{
        document.getElementById('bl').style.display = "none"; // 隐藏

    }
}

