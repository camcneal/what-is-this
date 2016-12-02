// Problem 1
console.log(this);
// this is: Window object (global)
// because... default value

// // Problem 2
var obj1 = {
 myName: 'obj1',
 this: this
};
console.log(obj1.this);
// // this is: global object (window)
// // because... its still default and not inside of a function

// // Problem 3
var obj2 = {
 myName: 'obj2',
 child: {
     myName: 'obj2.child',
     this: this
 }
};
console.log(obj2.child.this);
// // this is: global object (window)
// // because... not inside a function

// // Problem 4
function returnThis(aParameter) {
 console.log('the argument was: ', aParameter)
 return this;
}
console.log(returnThis('This is fun!'));
// // this is: global object
// // because... still not in a  function, not an constructor

// // Problem 5
console.log(new returnThis('This is fun!'));
// // this is: instance of 'returnThis' and is its contstructor object
// // because... not inside of a function

// // Problem 6
var obj3 = {
 myName: 'obj3',
 thisFn: returnThis
}
console.log(obj3.thisFn('this is Fun'));
// // this is: object 3
// // because... context of the object changed making it obj 3.

// // Problem 7
var obj4 = {
 myName: 'obj4',
 child: {
     myName: 'obj4.child',
     thisFn: returnThis
 }
}
console.log(obj4.child.thisFn('this is fun!'));
// // this is: obj4.child
// // because...

// // Problem 8
console.log(returnThis.call(this, 'how does call work?'));
// // this is: global window obj
// // because...

// // Problem 9
console.log(returnThis.apply(this, ['how does apply work?']));
// // this is: global
// // because...

// // Problem 10
console.log(returnThis.apply(obj1, ['how does apply work?']));
// // this is: obj 1
// // because...

// // Problem 11
console.log(returnThis.call(obj2, ['how does call work?']));
// // this is: obj 2
// // because...

// // Problem 12
var newReturnThis1 = returnThis.bind(this, 'how does bind work?');
console.log(newReturnThis1());
// // this is: global window obj
// // because...

// // Problem 13
var newReturnThis2 = returnThis.bind(null, 'how does bind work?');
console.log(newReturnThis2());
// // this is: window global obj
// // because... because its not a function

// // Problem 14
var newReturnThis3 = returnThis.bind(obj4, 'how does bind work?');
console.log(newReturnThis3());
// // this is: obj4.child
// // because...

// // Problem 15
document.getElementById('button').addEventListener('click', function(e) {
 console.log(this);
});
// // this is:
// // because...

// // Problem 16
$('#button').on('click', function(e) {
 console.log(this);
});
// // this is:
// // because...

// // Problem 17
// $.ajax({
//  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
//  success: function() {
//      console.log(this);
//  }
// })
// // this is:
// // because...
