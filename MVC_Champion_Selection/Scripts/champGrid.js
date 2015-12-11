// DO THE THING!
// Aka generate grid of champion buttons
$(document).ready(function(){
	generateChampGrid();
});

//
// Generates grid of champions from Riot API data.
// TODO: maybe pass api key, locale and server as parameters. 
// Also maybe extra way to specify where append all that jazz. (See makeGridElement for details)
//
function generateChampGrid() {
    
    // URL for Riot API. Data is pulled for EUW server. API key already embedded into url.
    var ChampionCDN = "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image,tags&api_key=aee08906-954c-4ae8-822e-b753f6e2f180";
	
    // Get data on champions from static Riot API (TM). Remember that it is an asyncronous call.
    $.ajax({
        url: ChampionCDN,
        type: 'GET',
        dataType: 'json',
	})
	
	// After data is recieved
    .done(function (champions) {
		
        // Iterate through json collection and generate list of champion keys
        // This way i don't need to think about making my own sort implementation
        var champKeyList = [];
        var i = 0;
        $.each(champions.data, function (key, value) {
            champKeyList[i] = value.key;
            i++;
        });

        // Workaround for silly rito naming ONE champion key not with champion name which would mess sorting order

        // Temporarily replace key with champion name for sorting purposes
        champKeyList[champKeyList.indexOf("MonkeyKing")] = "Wukong";

        // Sorting list of champion keys
        champKeyList.sort();

        // Replace key back to its sorted position
        champKeyList[champKeyList.indexOf("Wukong")] = "MonkeyKing";

        // Generate grid from sorted key list
        $.each(champKeyList, function (index, value) {
            makeGridElement(champions.data[champKeyList[index]], champions.version);
        });

	});
}

//
// assembles and appends element of champion grid
// Arguments:
// champion - object of champions collection from RIOT champions API
// version - version of champions collection for CDN folder purposes
//
// Elements are appended to element with class ".champion-list"
//
function makeGridElement(champion, version) {
    var imgLink =
    "http://ddragon.leagueoflegends.com/cdn/" +
    version +
    "/img/champion/" +
    champion.image.full;
	
    // Make image html element
    var $iconElement = $("<img>", {
        "class": "icon",
        "src": imgLink,
        "height": champion.image.h,
        "width": champion.image.w,
        "alt": champion.key
	});
	
    // Make champion container
    var $gridElement = $("<li></li>", {
        "class": "button" + " " +
		champion.name.toLowerCase() + " " +
		champion.key.toLowerCase() + " " +
		champion.tags[0].toLowerCase() +
        // When second tag is abscent, add nothing
		((champion.tags[1] == undefined) ? "" : " " + champion.tags[1]).toLowerCase(),
		// Explanation is in function description
		click: buttonClick
	});
	
    // Make title for champion
    var $titleElement = $("<p></p>").text(champion.name);
	
    // Assemble element
    $gridElement.append($iconElement);
    $gridElement.append($titleElement);
	
    // Try to append all that jazz to the page body
    $(".champion-list").append($gridElement);
}

// This event is fired when button in grid is clicked.
// Since the buttons are added asynchronously, event handler should be added same way.
function buttonClick() {
	$( this ).toggleClass( "banned" );
}