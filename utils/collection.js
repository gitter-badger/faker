#!/usr/bin/env node
'use strict';

/**
  * Simple collection
  * @constructor
  **/
function Collection(){
	this._items = {};
}

/**
  * Add an item to a group with key
  * @param {string|int} key
  * @param {mixed} item
  * @return {Collection}
  **/
Collection.prototype.add = function(key, item){
	if(!this._items[key]){
		this._items[key] = [];
	}
	this._items[key].push(item);
	return this;
};

/**
  * Get keys of groups
  * @return {Array}
  */
Collection.prototype.keys = function(){
	return Object.keys(this._items);
};

/**
  * List items of a group with key
  * @param {string} key
  * @param {Function} callback
  * @return {Collection}
  **/
Collection.prototype.each = function(key, callback){
	if(this._items[key]){
		this._items[key].forEach(callback);
	}
	return this;
};


module.exports.create = function(){ return new Collection(); };