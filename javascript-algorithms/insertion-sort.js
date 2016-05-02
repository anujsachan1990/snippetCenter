
/*!
* insertion-sort.js
* Javascript Implementation of Insertion Sort
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
        var insertionSort = function(items) {
            var len     = items.length,value,i, j;
            for (i=0; i < len; i++) {
                value = items[i];
                for (j=i-1; j > -1 && items[j] > value; j--) {
                    items[j+1] = items[j];
                }
                items[j+1] = value;
            }
            return items;
        };

        this.initInsertionSort = function(items){
            var output = insertionSort(items);
            return output;
            //console.log(output); To View Output of Sorting
        }
    };  
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);

