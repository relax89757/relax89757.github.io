window.onload=function(){
    var banner=document.querySelector(".banner"),
        slideshow=document.querySelector(".slideshow"),
        point=document.querySelector(".point").getElementsByTagName("span"),
        btn=document.querySelector(".btn"),
        leftbtn=document.querySelector(".leftbtn"),
        rightbtn=document.querySelector(".rightbtn"),
        productList=document.querySelector(".product-list ul"),
        siderlist=document.querySelector(".siderlist"),
        index=1,
        timer=null;
        
        
        function showpoint(){
            for (var i = 0; i < point.length; i++) {
                point[i].className='';
            }
            point[index-1].className="on";
        }  


        function animate(offset){
            var newLeft=parseInt(slideshow.style.left)+offset;
            slideshow.style.left=newLeft+'rem';

            if(newLeft<-206){
                slideshow.style.left=-14+'rem';
            }
            if(newLeft>-14){
                slideshow.style.left=-206+'rem';
            }
        }

        function play(){
            
            timer=setInterval(function(){
                rightbtn.onclick();
            },3000);
        }
        function stop(){
            
            clearInterval(timer);
        }

       leftbtn.onclick=function(){
            if(index==1){
                index=3;
            }else{index-=1;}
            
            showpoint();
            animate(96);
        }

        rightbtn.onclick=function(){
            if(index==3){
                index=1;
            }else{index+=1;}
            
            showpoint();
            animate(-96);
        }

        for (var i = 0; i < point.length; i++) {
            point[i].onclick=function(){
                if(this.className=="on"){
                    return;
                }
                var myindex=parseInt(this.getAttribute('index'));
                var offset=-96*(myindex-index);
                animate(offset);
                index=myindex;
                showpoint();
            }
        }

        slideshow.onmouseover=stop;
        
        slideshow.onmouseout=play;

        banner.onmouseover = function(e){    
            if( !e ) e = window.event;  
            var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement;  
            //relatedTarget,鼠标来自哪个元素
            while( reltg && reltg != this ) reltg = reltg.parentNode;  
            if( reltg != this ){  
                     
            siderlist.style.display="block";
            }  
        }
        banner.onmouseout = function(e){    
            if( !e ) e = window.event;    
            var reltg = e.relatedTarget ? e.relatedTarget : e.toElement;    
            while( reltg && reltg != this ) reltg = reltg.parentNode;    
            if( reltg != this ){    
                     
            siderlist.style.display="none";
            }  
        }  

        play();


        

//为ul添加事件代理        
    productList.onmouseover=function showmask(e){
            if(e.target&&e.target.nodeName.toUpperCase()=='IMG'){

            var mask=e.target.parentNode.getElementsByTagName('span')[0];
            mask.style.display='block';
              }
        }
    productList.onmouseout=function hidemask(e){
            if(e.target&&e.target.nodeName.toUpperCase()=='IMG'){

            var mask=e.target.parentNode.getElementsByTagName('span')[0];
            mask.style.display='none';
              }
        }

           
}   
