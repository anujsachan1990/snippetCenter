/*!
* bubble-sort.js
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

        var swap = function(items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        }

        var bubbleSort = function(items){
            var len = items.length, i, j;
            for (i=len-1; i >= 0; i--){
                for (j=len-i; j >= 0; j--){
                    if (items[j] < items[j-1]){
                        swap(items, j, j-1);
                    }
                }
                // console.log(items);   
                // This can be used to view change in array per iteration.
            }
            return items;
        }

        this.initBubbleSort = function(items){
            var output = bubbleSort(items);
                return output;
                //console.log(output);
        }
    };  
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);