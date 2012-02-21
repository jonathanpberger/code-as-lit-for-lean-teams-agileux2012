if (window.top !== window.self) window.top.location.replace(window.self.location.href);

/*

This is a very handy function written by Simon Willison:
http://simon.incutio.com/archive/2004/05/26/addLoadEvent

It allows you to queue up a whole series of events to be triggered when the document loads.

If you simply use window.onload = func, then you run the risk of overwriting existing functions that are supposed to run when the onload event is triggered.

*/

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}


/*

insertAfter is something that should really be part of the DOM.
It works just like insertBefore:
the first argument is the new element you've created,
the second argument is where you want it to go.

*/

function insertAfter(newelement,existingelement) {
	var parentelement = existingelement.parentNode;
	if (parentelement.lastChild == existingelement) {
		return parentelement.appendChild(newelement);
	} else {
		return parentelement.insertBefore(newelement,existingelement.nextSibling);

	}
}

/*global ActiveXObject, XMLHttpRequest, document, window */

function doAjax() {
	
	var prepareLinks = function(containerId,service) {

		if (!document.getElementById) { return; }
		if (!document.getElementById(containerId)) { return; }

		var lnks = document.getElementById(containerId).getElementsByTagName("a");

		var xhr = new Ajax();
		xhr.url = service;

		for (var i=0; i<lnks.length; i++) {

			var thelink = lnks[i];

			if (thelink.getAttribute("href").indexOf("?") > -1 ) {

				thelink.ajaxHandler = xhr;

				thelink.onclick = function() {

					var query = this.getAttribute("href").split("?")[1].split("#");

					this.ajaxHandler.data = query[0];
					this.ajaxHandler.canvas = document.getElementById(query[1]);
					this.ajaxHandler.loading = function() {
						displayLoading(document.getElementById(query[1]));
					};
					this.ajaxHandler.callback = function() {
						document.highlightElement(document.getElementById(query[1]));
						doAjax();
					};

					return (!this.ajaxHandler.start());

				};
			}

			thelink = null;	// Clean up for IE

		}
	};

	prepareLinks("flickr","/includes/services/flickr/search.php");

}

addLoadEvent(doAjax);

function Ajax() {

	var url,canvas,data,loading,callback,request;

	this.start = function() {

		url			= this.url;
		canvas		= this.canvas;
		data		= this.data;
		loading		= this.loading;
		callback	= this.callback;
		request		= getHTTPObject();

		if (!request || !url) {
			return false;
		} else {
			initiateRequest();
			return true;
		}
	};

	var getHTTPObject = function() {
		var xmlhttp = false;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					xmlhttp = false;
				}
			}
		}
		return xmlhttp;
	};

	var initiateRequest = function() {
		if (loading) {
			loading();
		}
		loadData();
	};

	var loadData = function() {
		request.onreadystatechange = completeRequest;
		if (data) {
			request.open("POST", url, true);
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			request.send(data);
		} else {
			request.open("GET", url, true);
			request.send(null);
		}
	};

	var completeRequest = function() {
		if (request.readyState == 4) {
			if (request.status == 200 || request.status == 304) {
				if (canvas) {
					canvas.innerHTML = request.responseText;
				}
			} else {
				if (canvas) {
					canvas.innerHTML = request.statusText;
				}
			}
			if (callback) {
				callback();
			}
		}
	};

}

function displayLoading(element) {
	document.emptyElement(element);
	var content = document.createElement("img");
	content.setAttribute("src","/images/progressbar.gif");
	content.setAttribute("alt","Loading...");
	element.appendChild(content);
}

document.emptyElement = function(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.lastChild);
	}
};

document.highlightElement = function(element) {
	var steps = ["spotless","gleaming","shiny","bright","faded","dull","dirty","done"];
	var originalClass = element.className;
	var cycle = 0;
	var fade = function() {
		if (element.fading) {
			clearTimeout(element.fading);
		}
		if (steps[cycle]) {
			element.className = originalClass+" "+steps[cycle];
			cycle++;
			var repeat = function() {
				fade();
			};
			element.fading = setTimeout(repeat,100);
		} else {
			element.className = originalClass;
		}	
	};
	fade();
};

function submitSkin() {

	if (!document.getElementById || !document.getElementById('skin')) {
		return;
	}
	if (document.getElementById('submitskin')) {
		document.getElementById('skin').parentNode.removeChild(document.getElementById('submitskin'));
		document.getElementById('skin').onchange = function() {
			document.forms['skinselection'].submit();
		};
	}

}

addLoadEvent(submitSkin);
