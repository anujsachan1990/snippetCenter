/*!
* binary-search.js
* Javascript Implementation of Binary Search
* 
* @project   snippetCenter
* @author    SHOURYA RANKA, sranka.2310@gmail.com
*
*/

//Global Namespace = snippetCenter
var snippetCenter = window.snippetCenter || {};

(function(snippetCenter) {

    "use strict";
    var Algorithms = function() {

    	var binarySearch = function(items,value){
    		console.log("Items to sort:",items);
    		var start=0,
		        stop=items.length - 1,
		        mid=Math.floor((stop+start)/2);

		    while(items[mid] != value && start < stop){
		        if (value < items[mid]){
		            stop = mid - 1;            
		        } else if (value > items[mid]){
		            start = mid + 1;
		        }
		        mid = Math.floor((stop + start)/2);  
		    }

		    var output = (items[mid] != value) ? -1 : mid;
		    return output;
    	}

    	this.initBinarySearch = function(items,value){
    		items = items.sort();
    		var output = binarySearch(items,value);
    		if(output < 0)
		    	console.log("Element is not Found in: ",items);
		    else
		    	console.log("Element in: ",items," :found at the following position:", output + 1);
    	}
    };	
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);