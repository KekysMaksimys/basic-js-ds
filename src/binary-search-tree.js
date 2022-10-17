const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (){
    this.base = null;
  }
  root() {
    return this.base;
    // throw new NotImplementedError('Not implemented');
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.base){
      this.base = newNode;
      return;
    }

    let current = this.base;
    while(current){
      if (data === current.data) return undefined;
      if(newNode.data < current.data){
        if(!current.left){
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if(!current.right){
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    if(!this.base) return null;
    let cur = this.base;
    let loop = true;
    while(loop){
      if(!cur) return false;
      if(data === cur.data) return true;
      if(data < cur.data){
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    } 
  }

  find(data) {
    if(!this.base) return null;
    let cur = this.base;
    let loop = true;
    while(loop){
      if(!cur) return null;
      if(data === cur.data) return cur;
      if(data < cur.data){
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    } 
  }

  minRoot(base){
    let prev = 0;
    while(base !== null){
      prev = base;
      base = base.left;
      if(base === null) return prev.data;
    }
    return prev.data;
  }

  removeRoot(base, baza){
    if (base === null) {
      return;
    }
   if (baza < base.data) {
      base.left = this.removeRoot(base.left, baza);
      return base;
   } else if (baza > base.data) {
      base.right = this.removeRoot(base.right, baza);
      return base;
   } else {
      if (base.left === null && base.right === null) {
         base = null;
         return base;
      }
      if (base.left === null) return base.right;
      if (base.right === null) return base.left;

      let cur = this.minRoot(base.right);
      base.data = cur;

      base.right = this.removeRoot(base.right, cur);
      return base;
    }
  }

  remove(data) {
    if(!this.base) return null;
    this.removeRoot(this.base, data);
    return this.base;
  }

  min(){
    if(!this.base) return null;
    let prev = 0;
    let base = this.base
    while(base !== null){
      prev = base;
      base = base.left;
      if(base === null) return prev.data;
    }
    return prev.data;
  }

  max(){
    if(!this.base) return null;
    let prev = 0;
    let base = this.base;
    while(base !== null){
      prev = base;
      base = base.right;
      if(base === null) return prev.data;
    }
    return prev.data;
  }
}

module.exports = {
  BinarySearchTree
};