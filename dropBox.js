class DropBox{

constructor(x,y,width,height){

 this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})  
  World.add(world,this.body)  
  this.w = width
this.h = height
}
display(){
push()
fill("red")
 rectMode(CENTER)   
rect(this.body.position.x,this.body.position.y,this.w,this.h)
pop()
}



}