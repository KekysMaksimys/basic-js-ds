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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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