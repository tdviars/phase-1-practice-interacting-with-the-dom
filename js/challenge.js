let count = 0;
let intervalID;
let timerText = document.getElementById("counter");
let buttons = document.getElementsByTagName("button");
let paused = document.getElementById("pause");
let pause = document.getElementById("pause");
let buttonsArray = [];
let add = document.getElementById("plus");
let counter = document.querySelector("counter");
let minus = document.getElementById("minus")


function startCount() {
    counter.innerhtml = count++
}

function replacePause(){
    pause.textContent = "resume"
}

pause.addEventListener("click", function(){
    if (pause==false){
        clearInterval(intervalID);
        buttonsArray.forEach(button => {
            disableButton(button)
        })
        replacePause()
    }

    if (pause)
    {
        console.log("you are resuming!")
        intervalID = setInterval(startCount, 1000);
        replacePause()
        buttonsArray.forEach(button=>{
            enableButton(button)
        })
            for(let i=0;i<buttons.length;i++){
            if (buttons[i].id /= "pause"){
                buttonsArray.append(buttons[i])
            }
        }
    }

    pause = !pause;

})

function disableButton(button){
    button.setAttribue("disabled", true);
};

function enableButton(button){
    button.removeAttribute("diabled");
};


function replacePause(){
    if (!paused){
    pause.textContent = "resume"}

    if (paused){
        paused.textContent = "pause";
    }
}

add.addEventListener("click", () => {
    counter.innerHTML = count++;
})
    