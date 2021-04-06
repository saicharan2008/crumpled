class ground{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			'restitition':0,
			'friction':0,
			'density':1

			}
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.width = width;
		this.height = height;
 		World.add(world, this.body);

	}
	display(){
			rectMode(CENTER);
			fill(255);
			rect(this.body.position.x,this.body.position.y,this.w, this.h);
}
}