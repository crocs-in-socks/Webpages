let inpBoxes = document.querySelectorAll('.inp');
let digitBoxes = document.querySelectorAll('.digitBox')
console.log(digitBoxes)

let timerBox = document.querySelector('.timerBox');

timerBox.addEventListener('keypress', startTimer);

function startTimer(ev)
{
    if(ev.key == 'Enter')
    {
        let hours = Number(inpBoxes[0].value);
        let minutes = Number(inpBoxes[1].value);
        let seconds = Number(inpBoxes[2].value);
        
        if(seconds > 59)
        {
            minutes += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }
        if(minutes > 59)
        {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }

        let counter = setInterval(()=>{
            digitBoxes[0].innerHTML = hours;
            digitBoxes[1].innerHTML = minutes;
            digitBoxes[2].innerHTML = seconds;

            if(hours == 0 && minutes == 0 && seconds == 0)
                clearInterval(counter)
            if(seconds == 0)
            {
                minutes--;
                seconds = 60;
            }
            if(minutes == 0 && seconds == 0)
            {
                hours--;
                minutes = 60;
            }
            seconds --;
            
            }, 1000)
    }
}