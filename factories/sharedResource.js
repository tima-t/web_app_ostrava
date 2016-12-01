"use strict";
worldApp.factory('SharedResource', function() {
   var elements={};
   return {
    setElement : function(key, value){
        elements[key] = value;
    },
    getElement : function(key){
        return elements[key];
    },
    getAll : function(){
        return elements;
    },
    removeElement : function(key){
        if(elements[key]){
            delete elements[key];
        }
    }
   } 
});