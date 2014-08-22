'use strict';

/**
 * Simple collection
 * @constructor
 **/
function Collection(){
	this._items = {};
}


/**
 * Init a group with key
 * @param {string|int} key
 * @return {Collection}
 **/
Collection.prototype.init = function(key){
	this._items[key] = [];
	return this;
};

/**
 * Confirm the group with key inited
 * @param {string|int} key
 * @return {boolean}
 **/
Collection.prototype.inited = function(key){
	return !!this._items[key];
};

/**
 * Add an item to a group with key
 * @param {string|int} key
 * @param {*} item
 * @return {Collection}
 **/
Collection.prototype.add = function(key, item){
	if(!this.inited(key)){
		this.init(key);
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
	if(this.inited(key)){
		this._items[key].forEach(callback);
	}
	return this;
};

/**
 * Group with key of the Collection
 * @param {Collection} mount
 * @param {string|int} key
 * @constructor
 **/
function CollectionGroup(key, mount){
	this._mount = mount;
	if(!this._mount.inited(key)){
		this._mount.init(key);
		this._key = key;
	}
	this._items = this._mount._items[key];
}

/**
 * Add an item to the group
 * @param {*} item
 * @return {CollectionGroup}
 **/
CollectionGroup.prototype.add = function(item){
	this._mount.add(this._key, item);
	return this;
};

/**
 * Add a group with key of this Collection
 * @param {string|int} key
 * @return {CollectionGroup}
 **/
Collection.prototype.create = function(key){
	return new CollectionGroup(key, this);
};

module.exports.create = function(){ return new Collection(); };