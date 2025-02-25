'use strict';
var conFig = {
	youTubeApiKey : 'nope',
	
	contextMenu : {
		"title": "Watch Next",
		"contexts": ["link"],
		"targetUrlPatterns": [
			"https://*.youtube.com/watch*",
			"http://*.youtube.com/watch*",
			"https://*.youtu.be/*",
			"http://*.youtu.be/*"
		],
		"id": "watchNext",
	},

	setIcon : function () {
		var count = JSON.parse(localStorage.watchNextPlaylist).length + '',
			col, 
			icon;
		if (count === '0') {
			count = '';
		}
		if (JSON.parse(localStorage.getItem('watchNext'))){
			//green badge
			col = '#9c6';
			//green play icon
			icon = 'icons/icon32.png';
		} else {
			//grey badge
			col = '#999';
			//red X icon
			icon = 'icons/icon_disabled_32.png'
		}
		chrome.browserAction.setBadgeBackgroundColor({color: col});
		chrome.browserAction.setBadgeText({text: count});
		chrome.browserAction.setIcon({path: icon});


	},

	//checks if the localStorage is initialised, do so if not
	startLS: function() {
		if (!localStorage.hasOwnProperty('watchNextPlaylist')){
			localStorage.watchNextPlaylist = '[]';
		}
		if (!localStorage.hasOwnProperty('watchNext')){
			localStorage.watchNext = 'true';
		}
	},

	//shortcut for the normalization of array-like elements
	DOMtoArray: function(DOM){
		return Array.prototype.slice.call(DOM);
	},

	//shortcut for creating DOM elements with class
	insert: function(tag, clas){
		var html = document.createElement(tag);
		if (clas){
			html.className = clas;	
		}
		return html;
	}
};