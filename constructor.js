function className(x, y, z){
  this.x=x;
  this.y=y;
  this.z=z;
}
className.prototype.methodName = function(){
  this.x;
}

var someClass= new className(1,2,3);
console.log(someClass.x);
