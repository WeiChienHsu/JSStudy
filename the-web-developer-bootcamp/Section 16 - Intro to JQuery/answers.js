// 1. Correctly include jQuery
// line 6 on local ./*html

// 2. select all divs and give them a purple background
$("div").css("background", "purple");

// 3. select divs with class "highlight" and make them 200px wide
$('div.highlight').css('width', '200px');

// 4. select the div with id "third" and give it an orange border
$('div#third').css('border', '2px solid orange');

// 5. Select the first div only and change font color to pink
$('div:nth-of-type(1)').css('color', 'pink');
$("div:nth-child(1)").css("color", "pink");
