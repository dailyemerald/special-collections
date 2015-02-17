var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx);
var img = document.getElementById("library");
ctx.drawImage(img,10,10);

document.onmousemove = function(e) {
  console.log(e)
  if (event.pageY < 200 & event.pageX < 200) {
    queue();
  }
  else{
  	//do nothing 
  }
}