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
    let cur = base;
    let previousLeft = cur;
    let previousRight = cur;
    let nextLeft = 0;
    let nextRight = 0;
    let loop = true;
    while(loop){
    if(!cur) return null;
      
      if(baza < cur.data){
        previousLeft = cur;
        previousRight = undefined;
        cur = cur.left;
        if(cur === null) {
          nextLeft = null;
          nextRight = null;
        } else {
          nextLeft = cur.left;
          nextRight = cur.right;
        }
      } else if (baza > cur.data) {
        previousRight = cur;
        previousLeft = undefined;
        cur = cur.right;
        if(cur === null) {
          nextLeft = null;
          nextRight = null;
        } else {
          nextLeft = cur.left;
          nextRight = cur.right;
        }
      } else {
        if((previousLeft == previousRight) && (nextLeft == nextRight) && (cur !== this.base)){
          cur = cur.right;
          return cur;
        }
        if((nextLeft === null) && (nextRight === null)){
          previousLeft === undefined ? previousRight.right = null : previousLeft.left = null;
          return 3;
        }
        
        if(nextLeft === null){
          previousRight.right = cur.right;
          return 1;
        }
        if(nextRight === null){ 
          previousLeft.left = cur.left;
          return 2;
        }

        cur.data = this.minRoot(cur.right);
        cur.right = this.removeRoot(cur.right, cur.data);
        return cur;
      }
    }
  }

  remove(data) {
    if(!this.base) return null;
    this.removeRoot(this.base, data);
    return this.base;
  }

  min(){
    if(!this.base) return null;
    let cur = this.base;
    let baza = cur.data;
    let minimum = cur.data;
    let loop = true;
    while(loop){
      if(cur.left === null) return minimum;
      if(baza == minimum) {
        cur = cur.left;
        baza = cur.data;
      }
      if(baza < minimum){
        cur = cur.left;
        minimum = cur.data;
      }
    }
  }

  max(){
    if(!this.base) return null;
    let cur = this.base;
    let baza = cur.data;
    let maximum = cur.data;
    let loop = true;
    while(loop){
      if(cur.right === null) return maximum;
      if(baza == maximum) {
        cur = cur.right;
        baza = cur.data;
      }
      if(baza > maximum){
        cur = cur.right;
        maximum = cur.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};