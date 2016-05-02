/*!
* selection-sort.js
* Javascript Implementation of Selection Sort
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

        var selectionSort = function(items){
            var len = items.length, min, i, j;
            for (i=0; i < len; i++){
                min = i;
                for (j=i+1; j < len; j++){
                    if (items[j] < items[min]){
                        min = j;
                    }
                }
                if (i != min){
                    swap(items, i, min);
                }
            }
            return items;
        }

        this.initSelectionSort = function(items){
            var output = selectionSort(items);
            return output;
            //console.log(output); To View Output of Sort
        }
    };  
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);