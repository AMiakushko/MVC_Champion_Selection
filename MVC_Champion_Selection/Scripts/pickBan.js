var stages = ["blueBan1", "redBan1" , "blueBan2" , 
    "redBan2", "blueBan3", "redBan3",  "bluePick1",
"redPick1", "redPick2", "bluePick2", "bluePick3", 
"redPick3", "redPick4", "bluePick4", "bluePick5", "redPick5"];

var currentStage = 0;

//$(document).ready(resetPickBan());

//function resetPickBan()
//{
//    currentStage = 0;

//}

function getCurrentStage()
{
    return currentStage;
}

function getCurrentStageName()
{
    return stages[currentStage];
}

function setNextStage()
{
    currentStage = currentStage + 1;
}