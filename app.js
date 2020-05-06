window.addEventListener('load',()=>{
    const bgKeys = document.querySelectorAll(".bg-key");
    const bgSound = document.querySelectorAll(".bg-sound");
    const smSound = document.querySelectorAll(".sm-sound");
    const smKeys = document.querySelectorAll(".sm-key");

    window.addEventListener("keypress",(event)=>{
        if(event.shiftKey) {
            try{
                document.querySelector(`#${event.key}`).classList.add('pressed');
                let smSound = document.querySelector(`#${event.key} .sm-sound`);
                smSound.currentTime = 0;
                smSound.play();
            }catch(err){
                console.log("No key match");
            }
        }else{
            try{
                document.querySelector(`#${event.key}`).classList.add('pressed');
                let bgSound = document.querySelector(`#${event.key} .bg-sound`)
                bgSound.currentTime = 0;
                bgSound.play();
            }catch(err){
                console.log("No key match");
            }
        }
    });
    window.addEventListener("keyup",(event)=>{
        try{
            document.querySelector(`#${event.key}`).classList.remove('pressed');
        }catch(err){
            console.log("No key match");
        }
    });
    bgKeys.forEach((bgKey,index) => {
        bgKey.addEventListener("click",()=>{
            bgSound[index].currentTime = 0;
            bgSound[index].play();
        });
    });

    smKeys.forEach((smKey,index) => {
        smKey.addEventListener("click",(event)=>{
            event.stopPropagation();
            smSound[index].currentTime = 0;
            smSound[index].play();
        });
    });

})




// style="left:3.3%;"
// style="left:7.5%;"
// style="left:16.35%;"
// style="left:20.8%;"
// style="left:25.3%;"
// style="left:34%;"
// style="left:38.35%;"
// style="left:47.2%;"
// style="left:51.4%;"
// style="left:64.7%;"
// style="left:69.1%;"
// style="left:77.9%;"
// style="left:82.3%;"
// style="left:86.7%;"
// style="left:56.1%;"