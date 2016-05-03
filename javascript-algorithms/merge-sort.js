/*!
* merge-sort.js
* Javascript Implementation of Merge Sort
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
    	var merge = function(left,right){
    		var result = [];
		    while (left.length > 0 && right.length > 0){
		        if (left[0] < right[0]){
		            result.push(left.shift());
		        } else {
		            result.push(right.shift());
		        }
		    }
		    result = result.concat(left).concat(right);
		    left.splice(0, left.length);
		    right.splice(0, right.length);	    
		    return result;
    	}
    	var mergeSort = function(items){
    		if (items.length < 2) {
		        return items;
		    }
		    var mergeArray = [],i,len;	        
		    for (i=0, len=items.length; i < len; i++){
		        mergeArray.push([items[i]]);
		    }
		    mergeArray.push([]);
		    for (var idx=len; idx > 1; idx = Math.floor((idx+1)/2)){
		        for (var j=0,k=0; k < idx; j++, k+=2){
		            mergeArray[j] = merge(mergeArray[k], mergeArray[k+1]);
		        }
		        mergeArray[j] = [];
		    }
		    return mergeArray[0];
    	};

    	this.initMergeSort = function(items){
    		return mergeSort(items);
    		//console.log(output); To View Output of Sorting
    	};
    };	
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);