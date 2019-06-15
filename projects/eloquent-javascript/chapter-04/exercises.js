////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let arr = [];
  
  if (start === end) {
    return arr;
  } else if (step === undefined) {
    step = 1;
  }
  
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let arr = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let obj = null;
  
  for (let i = array.length - 1; i >= 0; i--) {
    obj = {value: array[i], rest: obj};
  }
  
  return obj;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj) {
  let arr = [];
  
  for (let node = obj; node; node = node.rest) {
    arr.push(node.value);
  }
  
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, obj) {
  return {value: element, rest: obj};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(obj, num) {
  if (!obj) {
    return undefined;
  } else if (num === 0) {
    return obj.value;
  } else {
    return nth(obj.rest, num - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  } else if (val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") {
    return false;
  } else if (Object.keys(val1).length != Object.keys(val2).length) {
    return false;
  } 
  
  let key1 = Object.keys(val1), key2 = Object.keys(val2);
  for (let key of key1) {
    if (!key2.includes(key) || !deepEqual(val1[key], val2[key])) {
      return false;
    }
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
