// get original URL of article
var page_url 	= $('.original a').attr("href");

// get title of article
var page_title = $('.reader_head h1').text();

// generate url for buffer-api
api_url = "http://bufferapp.com/add/?url=" + encodeURIComponent(page_url) + "&text=" + encodeURIComponent(page_title) + "&placement=toolbar";

// send to background-js		
chrome.extension.sendMessage({'api_url':api_url}, function(response) {
	// stuff			
});
