chrome.browserAction.onClicked.addListener(function doClick(tab) {

	chrome.tabs.getSelected(null, function(tab){
	    
	    page_url 	= tab.url;
	    
	    // see if we are on a pocket-site
	    if (page_url.toLowerCase().indexOf("http://getpocket.com/a/read/") >= 0 || (page_url.toLowerCase().indexOf("https://getpocket.com/a/read/") >= 0)) {
	    
	    	// execute content-script to grab url & title
    		chrome.tabs.executeScript(null, {file: "jquery.min.js"});
    		chrome.tabs.executeScript(null, {file: "send_links.js"});
    	
    		// add listener & wait for reply
    		chrome.extension.onMessage.addListener(
    		  function doStuff(request, sender, sendResponse) {
    		    	
    		   	chrome.extension.onMessage.removeListener(doStuff);
    		    	    	    
    	    	chrome.tabs.create({'url': request.api_url}, function(tab) {
    	      		
    	      		chrome.extension.onMessage.removeListener(doStuff);
    		      		
    		    });
    		    
    		  });
	    
	    } else {
	    
	    	console.log('looks like no pocket-page to me...');
	    
	    }
	    
	});
  
});