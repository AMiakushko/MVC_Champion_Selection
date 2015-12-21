
var currentStage = 0;

var pickBanEnded = false;

function getCurrentStage() {
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
        
        // Remove previous selections
        $(".selectedBan").removeClass("selectedBan");
        $(".selectedPlayer").removeClass("selectedPlayer");

        // Set current item as selected with appropriate style depending on ban or pick
        if (currentStage < 6) {
            $("#" + getCurrentStageName()).parent().addClass("selectedBan");
        }
        else {
            $("#" + getCurrentStageName()).parent().addClass("selectedPlayer");
        }

    }
    else {
        pickBanEnded = true;
    }
}

function setPick(iconSource) {
    //$( "#" + getCurrentStageName() ).attr({
    //    src: iconSource
    //});

    var $currentElement = $("#" + getCurrentStageName());

    $currentElement.fadeOut(300, function () {
        $currentElement.attr("src", iconSource);
        $currentElement.fadeIn(300);
    });

}

function resetPicksBans() {

    //.fadeTo( "slow" , 0.5, function() {
    //    // Animation complete.
    //}

    $(".playericon").fadeOut(300, function () {
        $(".playericon").attr({
            src: "/img/VizObscure.png"
        });
        $(".playericon").fadeIn(300);
    });


    //$(".playericon").attr({
    //    src: "/img/VizObscure.png"
    //});

    $(".playericon").parent().removeClass("selectedPlayer");
    $(".playericon").parent().removeClass("selectedBan");

    $(".banned").removeClass("banned");

    currentStage = 0;

    pickBanEnded = false;

    $("#blueban1").parent().addClass("selectedBan");

    // window.alert("reset invoked");
}

$(document).ready(function () {
    $("#blueban1").parent().addClass("selectedBan");
})