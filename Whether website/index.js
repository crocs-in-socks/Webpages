let age = prompt("what is your age?");
alert("You said that your age is " + age);
age = Number.parseInt(age);


function canDrive(age)
{
    if(age > 18)
    alert("you can drive");
    else
    alert("you can't drive");
}

let again = true;

while(again)
{
    canDrive(age);
    again = confirm("Do you want to see the prompt again?");
}
