// Write your code in this file!
function scuberGreetingForFeet(dist){
  let txt='';
  if(dist <=400)
  {
    txt="This one is on me!";
  }
  elseif(dist>2000 && dist <=2500)
  {
    txt='I will gladly take your thirty bucks.';
  }
  else
  {
    txt='No can do.';
  }
  return txt;
};
function ternaryCheckCity(destn)
{
  destn==='NYC'? "Ok, sounds good." : "No go.";
};
function switchOnCharmFromTip(tip){
  switch tip
  {
    case "generous":
      msg="Thank you so much.";
      break;
    case  "not as generous";
      msg="Thank you.";
      break;
    default:
      msg="Bye.";
      break;
    }
  return msg;
};
