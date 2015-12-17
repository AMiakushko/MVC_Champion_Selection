
var currentStage = 0;

var pickBanEnded = false;

function getCurrentStage()
{
    return currentStage;
}

function getCurrentStageName() {
    // eg: blueban1, redpick2
    var str = pickBanStages[currentStage].side + pickBanStages[currentStage].type + pickBanStages[currentStage].id;
    return str;
}

function setNextStage() {
    if (currentStage != 15) {
        currentStage = currentStage + 1;
    }
    else
    {
        pickBanEnded = true;
    }
}

function setPick(iconSource) {
    $( "#" + getCurrentStageName() ).attr({
        src: iconSource
    });
}