
function findSpeed(){
    possibleItems = document.getElementsByTagName('li');
    for(i = 0; i < possibleItems.length; i ++){
        if(possibleItems[i].getAttribute("data-speed")==="2")
            return possibleItems[i];
    }
}

function playVideo(){
    speed = findSpeed();
    setTimeout(()=>{speed.click()}, 1500)
    video = document.getElementsByTagName('video')[0];
    next = document.getElementsByClassName('next')[0]
    video.onended = function (){
        setTimeout(() => {
             next.click()
             setTimeout(()=>{choose()}, 1500)
         }, 1000)
    }
}

function noVideo(){

    next = document.getElementsByClassName('next')[0]
    setTimeout(() => {
            next.click()
            setTimeout(()=>{choose()}, 1500) 
        }, 1000)

}

function choose(){
    video = document.getElementsByTagName('video')[0];
    if(video && !video.onended){
        playVideo();
    }else{
        noVideo();
    }
}

choose()