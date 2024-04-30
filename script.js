let square = document.querySelector("#square")
let color = document.querySelector("#color")
let difficulty = document.querySelector("#difficulty")
let gameStartButton = document.querySelector("#gameStart")
let form1 = document.querySelector("#form1")
let time = 0;
let timeRefresh = 0;
let score = document.querySelector("#score")
let scoreInteger = 0;
let clickTimeLeft = document.querySelector("#clickTimeLeft")

function DecreaseTime()
{
    time--
     
    if (time == -1) {
        
      alert("Time's out! You've lost")
      location.reload()
    }
    clickTimeLeft.innerHTML = "Time for click left: "+ time
    score.innerHTML = "Score: "+ scoreInteger
}

square.addEventListener("click", function()
{
    time=timeRefresh
    square.style.left = getRandomArbitrary(100,600)+"px"
    square.style.top = getRandomArbitrary(100,600)+"px"
    scoreInteger++
})

gameStartButton.addEventListener("click",function(event)
{
   
if (color.options[color.selectedIndex].value == "--Choose select--" || difficulty.options[difficulty.selectedIndex].value
== "--Choose select--" )
{
    alert("Choose not a "+'`Choose select`'+" option!")
    location.reload()
}
        setInterval(DecreaseTime,1000)
        event.preventDefault()
        form1.style.display = "none";
        let diff = difficulty.options[difficulty.selectedIndex].value

    if(diff == "Easy")
    {
        timeRefresh = 5
        time=timeRefresh
        square.style.width = "50px"
        square.style.height = "50px"
    }
    else if (diff == "Normal")
    {
        timeRefresh = 3
        time=timeRefresh
        square.style.width = "30px"
        square.style.height = "30px"
    }
    else 
    {
        timeRefresh = 2
        time=timeRefresh
        square.style.width = "20px"
        square.style.height = "20px"
    }

    square.style.background = color.options[color.selectedIndex].value //поява
    form2.style.display = "block";
})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
