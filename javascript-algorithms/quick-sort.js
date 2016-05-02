/*!
* quick-sort.js
* Javascript Implementation of Quick Sort
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
        
        var swap = function (items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        };

        var partitionArray = function(items, left, right) {
            var pivot   = items[Math.floor((right + left) / 2)], i= left,j=right;    
            while (i <= j) {
                while (items[i] < pivot) {
                    i++;
                }
                while (items[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    swap(items, i, j);
                    i++;
                    j--;
                }
            }
            return i;
        };

        var quickSort = function(items, left, right) {
            var index;
            if (items.length > 1) {
                left = typeof left != "number" ? 0 : left;
                right = typeof right != "number" ? items.length - 1 : right;
                index = partitionArray(items, left, right);
                if (left < index - 1) {
                    quickSort(items, left, index - 1);
                }
                if (index < right) {
                    quickSort(items, index, right);
                }
            }
            return items;
        };

        this.initQuickSort = function(items){
            var output = quickSort(items);
            return output;
            //console.log(output); To View Output of Sorting
        }
    };  
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);

