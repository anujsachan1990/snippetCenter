/*!
* linked-list.js
* Javascript Implementation of LinkedList
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

    	var LinkedList = function(){
    		this.length = 0;
    		this.head = null;
    	}
    	LinkedList.prototype = {
		    addItem: function (data){
		        var newNode = { 
		                data: data, 
		                next: null 
		            },
		            current;
		        if (this.head === null){
		            this.head = newNode;
		        } else {
		            current = this.head;
		            while(current.next){
		                current = current.next;
		            }
		            current.next = newNode;            
		        }
		        this.length++;
		    },
		    getItem: function(index){
		        if (index > -1 && index < this.length){
		            var current = this.head,
		                i = 0;
		            while(i++ < index){
		                current = current.next;            
		            }
		            return current.data;
		        } else {
		            return null;
		        }
		    },
		    removeItem: function(index){
		        if (index > -1 && index < this.length){
		           var current = this.head,
		                previous,
		                i = 0;
		            if (index === 0){
		                this.head = current.next;
		            } else {
		                while(i++ < index){
		                    previous = current;
		                    current = current.next;            
		                }
		                previous.next = current.next;
		            }
		            this.length--;
		            return current.data;            
		        
		        } else {
		            return null;
		        }
		    },
		    lengthOfLinkedList: function(){
		        return this.length;
		    },
		    convertToArray: function(){
		        var result = [],
		            current = this.head;        
		        while(current){
		            result.push(current.data);
		            current = current.next;
		        }        
		        return result;
		    }
		};


    	this.initLinkedList = function(){
    		return new LinkedList();
    	}
    };	
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);