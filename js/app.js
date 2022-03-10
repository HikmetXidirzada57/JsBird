var bird=document.querySelector(".bird");
var birdEgg=document.querySelector(".bird-egg");
var birdBasket=document.querySelector(".bird-basket")
var leftRightMove=0;    
var say=20;
setInterval(() => {
var rnd=Math.floor(Math.random()*(window.outerWidth-birdBasket.offsetWidth));
   birdBasket.style.left=rnd+'px'
}, 4000);

window.addEventListener("keyup",function(e){
    if(e.keyCode==39){
        if(window.outerWidth-bird.offsetWidth>leftRightMove+150){
            leftRightMove+=150;
            bird.style.left=leftRightMove+"px"
            bird.classList.remove("bird-active")
        }
        
    }else if(e.keyCode==37){
        if(leftRightMove>0){
            leftRightMove-=150;
            bird.style.left=leftRightMove+"px"
            bird.classList.add("bird-active")
    
        }
        
    }
    else if(e.keyCode==13){
        birdEgg.style.animation="1.5s birdAni forwards";
        say+=15;
       var basketLeft= PxParse(birdBasket.style.left)
       var birdLeft= PxParse(bird.style.left)
        if(birdLeft>=(basketLeft-birdBasket.offsetWidth) && birdLeft<=basketLeft){
            console.log("düz")
            setTimeout(() => {
                var newBeg=birdEgg.cloneNode(true);
                newBeg.style.left=say+"px";
    
                console.log(newBeg)
                birdBasket.appendChild(newBeg)
                birdEgg.style="display:none";
                birdEgg.style.animation="none";
                
            }, 1800);
            setTimeout(() => {
                birdEgg.style="display:block";
                bird.appendChild(newBeg);
                
            }, 2000);
        }
        else{
            // var brokenEgg=document.createElement("div")
            // brokenEgg.className="broken-egg";
            // var brokeImg=document.createElement("img")
            // brokeImg.src="../img/brkImg.gif";
            // brokenEgg.appendChild(brokeImg);
            
            setTimeout(() => {
                birdEgg.querySelector("img").src="../img/brkImg.gif";
            birdEgg.querySelector("img").style.width="100px"
            birdEgg.classList.add("broke-img");
            }, 1200);

        }

    }
})

function PxParse(pxs){
    return Number(pxs.slice(0,pxs.length-2))
}