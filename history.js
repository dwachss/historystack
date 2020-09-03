// Implements the History interface for use with things other than browser history. I don't know why they won't let us use 
'use strict';

function History (inititalstate){
	this._length = 1;
	this._index = 1;
	this._states = [undefined, inititalstate]; // easiest on the math to use 1-index array
}

History.prototype = {
	back() { return this.go(-1) },
	forward() {return this.go(1) },
	go(n) {
		this._index += n;
		if (this._index < 1 ) this._index = 1;
		if (this._index > this._length ) this._index = this._length;
		return this.state;
	},
	pushState(state) {
		this._length = ++this._index;
		return this.replaceState(state);
	},
	replaceState (state) { return this._states[this._index] = state },
	get length() { return this._length },
	get state() { return this._states[this._index] },
	// not part of the interface but useful nonetheless
	get atStart() { return this._index == 1 },
	get atEnd() { return this._index == this._length }
}

