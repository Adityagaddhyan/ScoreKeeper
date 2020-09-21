var button1=document.getElementById("bp1");
var button2=document.getElementById("bp2");
var score1=document.getElementsByClassName("score")[0];
var score2=document.getElementsByClassName("score")[1];
var win=parseInt(prompt("What is the winning score?"));
var toWin1=document.getElementById("towin1");
var toWin2=document.getElementById("towin2");
var toWin=document.getElementById("winscore");
var scorebox=document.getElementsByClassName("container")[0];
var winner=document.getElementById("winner");
var gameover=false;
toWin1.textContent=toWin2.textContent=toWin.textContent=win;
button1.addEventListener("click",function(){
    if(gameover==false){
        var temp=parseInt(score1.textContent);
        console.log(temp);

        temp=temp+1;
        score1.textContent=temp;
        toWin1.textContent=parseInt(toWin1.textContent)-1;
    }
    if(toWin1.textContent==0){
        scorebox.style.display='none';
        gameover=true;
        winner.textContent="Player 1";  
    }

    

});
button2.addEventListener("click",function(){
        if(gameover==false){
        var temp=parseInt(score2.textContent);
        console.log(toWin2.textContent==win);
    
        temp=temp+1;
        score2.textContent=temp;
        toWin2.textContent=parseInt(toWin2.textContent)-1;
        
    }
    if(toWin2.textContent==0){
        scorebox.style.display='none';
        gameover=true;
        winner.textContent="Player 1";  


    }


});
