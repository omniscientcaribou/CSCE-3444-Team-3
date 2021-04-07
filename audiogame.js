window.onload=function(e){
    
    //sounds to be played
    var audio1=new Audio('sounds/chicken.mp3')
    var audio2=new Audio('sounds/bird.mp3')
    var audio3=new Audio('sounds/horse.mp3')
    var audio4=new Audio('sounds/wolf.mp3')
    var audio5=new Audio('sounds/police.mp3')
    var audio6=new Audio('sounds/cow.mp3')
    var audio7=new Audio('sounds/cricket.mp3')
    var audio8=new Audio('sounds/cat.mp3')
    var audio9=new Audio('sounds/lion.mp3')
    var audio10=new Audio('sounds/robot.mp3')
    var audio11=new Audio('sounds/bell.mp3')
    var audio12=new Audio('sounds/doorbell.mp3')
    
    function cardPlayed(){
        for(const clip of clips){
            clip.classList.add("disable")
            clip.removeEventListener("click",cardPlayed);
        }
        this.classList.add("played");
        //just plays the audio and resets everything afterwards
        if(this.id=="chicken"){
            var text=document.getElementById("chickenText")
            text.classList.add("played")
            console.log(text)
            audio1.play();
            console.log("audio1 played");
            console.log(audio1.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio1.duration *1000)
        }
        //just plays the bird audio and resets everything afterwards
        else if(this.id=="bird"){
            var text=document.getElementById("birdText")
            text.classList.add("played")
            console.log(text)
            audio2.play();
            console.log("audio2 played");
            console.log(audio2.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio2.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="horse"){
            var text=document.getElementById("horseText")
            text.classList.add("played")
            console.log(text)
            audio3.play();
            console.log("audio3 played");
            console.log(audio3.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio3.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="wolf"){
            var text=document.getElementById("wolfText")
            text.classList.add("played")
            console.log(text)
            audio4.play();
            console.log("audio4 played");
            console.log(audio4.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio4.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="police"){
            var text=document.getElementById("policeText")
            text.classList.add("played")
            console.log(text)
            audio5.play();
            console.log("audio5 played");
            console.log(audio5.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio5.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="cow"){
            var text=document.getElementById("cowText")
            text.classList.add("played")
            console.log(text)
            audio6.play();
            console.log("audio6 played");
            console.log(audio6.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio6.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="cricket"){
            var text=document.getElementById("cricketText")
            text.classList.add("played")
            console.log(text)
            audio7.play();
            console.log("audio7 played");
            console.log(audio7.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio7.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="cat"){
            var text=document.getElementById("catText")
            text.classList.add("played")
            console.log(text)
            audio8.play();
            console.log("audio8 played");
            console.log(audio8.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio8.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="lion"){
            var text=document.getElementById("lionText")
            text.classList.add("played")
            console.log(text)
            audio9.play();
            console.log("audio9 played");
            console.log(audio9.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio9.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="robot"){
            var text=document.getElementById("robotText")
            text.classList.add("played")
            console.log(text)
            audio10.play();
            console.log("audio10 played");
            console.log(audio10.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio10.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="bell"){
            var text=document.getElementById("bellText")
            text.classList.add("played")
            console.log(text)
            audio11.play();
            console.log("audio11 played");
            console.log(audio11.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio11.duration *1000)
        }
        //just plays the audio and resets everything afterwards
        else if(this.id=="doorbell"){
            var text=document.getElementById("doorbellText")
            text.classList.add("played")
            console.log(text)
            audio12.play();
            console.log("audio12 played");
            console.log(audio12.duration)
            text.innerHTML="<i class='fas fa-pause-circle'></i>"
            setTimeout(function(){
                text.classList.remove("played")
                text.innerHTML="<i class='fas fa-play-circle'></i>"
                for(const clip of clips){
                    clip.classList.remove("disable")
                    clip.addEventListener("click",cardPlayed)
                }
            }, audio12.duration *1000)
        }
    }

    function leave(){

        if(document.getElementById("password").value=="Pineapple Pie"){
            window.location.href="https://google.com"
        }
        else{
            alert("Please input the correct password in order to return to normal functionality.")
        }
    }

    var leaveBut=document.getElementById("home");
    leaveBut.addEventListener("click",leave);

    var clips = document.querySelectorAll(".sound-bite");
    for(const clip of clips){
        clip.addEventListener("click",cardPlayed);
    }
}