/*!
* binary-search-tree.js
* Javascript Implementation of Binary Search Tree
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

    	var BSTree = function(items){
    		this._root = null;
    	};
    	BSTree.prototype = {
		    constructor: BSTree,
		    add: function (value){
		        var node = { 
		                value: value, 
		                left: null,
		                right: null 
		            },
		            current;
		        if (this._root === null){
		            this._root = node;
		        } else {
		            current = this._root;
		            
		            while(true){
		                if (value < current.value){
		                    if (current.left === null){
		                        current.left = node;
		                        break;
		                    } else {                    
		                        current = current.left;
		                    }
		                } else if (value > current.value){
		                    if (current.right === null){
		                        current.right = node;
		                        break;
		                    } else {                    
		                        current = current.right;
		                    }       
		                } else {
		                    break;
		                }
		            }        
		        }
		    },
		    remove: function(value){
		        var found= false,parent=null,current = this._root,childCount,rep,repParent;
		        while(!found && current){      
		            if (value < current.value){
		                parent = current;
		                current = current.left;
		            } else if (value > current.value){
		                parent = current;
		                current = current.right;
		            } else {
		                found = true;
		            }
		        };
		        if (found){
		            childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
		            if (current === this._root){
		                switch(childCount){
		                    case 0:
		                        this._root = null;
		                        break;
		                    case 1:
		                        this._root = (current.right === null ? current.left : current.right);
		                        break;
		                    case 2:
		                        rep = this._root.left;
		                        while (rep.right !== null){
		                            repParent = rep;
		                            rep = rep.right;
		                        }
		                        if (repParent !== null){
		                            repParent.right = rep.left;
		                            rep.right = this._root.right;
		                            rep.left = this._root.left;
		                        } else {
		                            rep.right = this._root.right;
		                        }
		                        this._root = rep;
		                }        
		            } else {       
		                switch (childCount){
		                    case 0:
		                        if (current.value < parent.value){
		                            parent.left = null;
		                        } else {
		                            parent.right = null;
		                        }
		                        break;
		                    case 1:
		                        if (current.value < parent.value){
		                            parent.left = (current.left === null ? current.right : current.left);
		                        } else {
		                            parent.right = (current.left === null ? current.right : current.left);
		                        }
		                        break;    
		                    case 2:
		                        rep = current.left;
		                        repParent = current;
		                        while(rep.right !== null){
		                            repParent = rep;
		                            rep = rep.right;                            
		                        }                    
		                        repParent.right = rep.left;
		                        rep.right = current.right;
		                        rep.left = current.left;
		                        
		                        if (current.value < parent.value){
		                            parent.left = rep;
		                        } else {
		                            parent.right = rep;
		                        }                        
		                }
		            
		            } 
		        }
		        
		    },
		    displayValue: function(node){
		    	console.log(node.value);
		    },
		    displayNode: function(node){
		    	console.log(node);
		    },
		    traverse: function(displayProcessName){
		        function inOrder(node){
		            if (node){
		                if (node.left !== null){
		                    inOrder(node.left);
		                }            
		                displayProcessName.call(this, node);
		                if (node.right !== null){
		                    inOrder(node.right);
		                }
		            }        
		        }
		        inOrder(this._root);    
		    }
		};
    	this.initBSTree = function(items){
    		return new BSTree();
    	};
    };	
    snippetCenter.algorithms = new Algorithms();
})(snippetCenter);
