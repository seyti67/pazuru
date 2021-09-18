let whitespace = 50;
let objects = [];
let surface = width * height;
for (var i = 0; i < Math.pow(surface/4000, .7); i++) {
	let figure = Math.floor(3+Math.random()*5);
	let x = whitespace + Math.floor(Math.random()*(width - 2*whitespace));
	let y = whitespace + Math.floor(Math.random()*(height - 2*whitespace));
	if(figure === 7) {
		objects.push(Bodies.circle(x, y, 35));
	} else {
		objects.push(Bodies.polygon(x, y, figure, 40));
	}
	Matter.Body.setMass(objects[i], 1);
	let degree = Math.floor(Math.random()*360);
	objects[i].fillColor = `hsl(${degree}, 70%, 88%)`;
}

// add all of the bodies to the world
Composite.add(engine.world, objects);
bodies = Composite.allBodies(engine.world);

function resize(){
	document.querySelector(':root').style.setProperty('--full-height', window.innerHeight-75+'px');
}
resize();

window.addEventListener('resize', resize);
apply_vertical_force(-2);