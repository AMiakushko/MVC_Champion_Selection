/* EXAMPLE
$("document").ready(function() {
	$("#search_field").keyup(function() {
		var terms = $(this).val().toLowerCase();
		if (!terms) {
			$(".option").show();
		} else {
			$(".option").hide().filter(function() {
				return ($(this).children(".title").text().toLowerCase().indexOf(terms) > -1) || ($(this).children(".description").text().toLowerCase().indexOf(terms) > -1);
			}).show();
		}
	});
});
*/

$(document).ready(function () {
    var targetValue = "";
    $("#search_field").keyup(function () {
        targetValue = "." + $(this).val().toLowerCase();
        if ((targetValue != ".button") && (targetValue != ".")) {
            $(".button").hide();
            $(targetValue).show();
        } else if (targetValue == ".") {
            $(".button").show();
        }
    });
});