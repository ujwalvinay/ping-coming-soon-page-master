const buttons = document.getElementById("Notify-btn");
const input = document.getElementById("inputbox");
const redlabel = document.getElementById("redlabel");

// Button color changing

buttons.addEventListener("click", function()
{
  var textValue = input.value;
  
  ValidateEmail(textValue); 
  
  
  setTimeout(function()
  {
    buttons.style.background = "hsl(223, 87%, 63%)";
  }, 300)
  buttons.style.background = "hsl(223, 100%, 88%)";
  
  
});

// Email Validation

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    redlabel.textContent = "";
    document.querySelector("input").style.border= "1px solid black";
    return (true)
  }
    redlabel.textContent = "Please provide a valid email address";
    document.querySelector("input").style.border= "1px solid red";
    redlabel.style.color = "red";
    return (false)
}