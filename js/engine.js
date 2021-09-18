const height = window.innerHeight-75;
const width = window.innerWidth;

// module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

var canvas = document.getElementById('background'),
ctx = canvas.getContext('2d');

var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
	element: canvas,
	constraint: {
		render: {
			visible: false
		},
		stiffness:0.8
	}
});
Matter.World.add(engine.world, mouseConstraint);

canvas.width = width;
canvas.height = height;

// run the renderer
let bodies = [];
let render = function () {
	window.requestAnimationFrame(render);

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < bodies.length; i += 1) {
		ctx.beginPath();
		
		let vertices = bodies[i].vertices;
		ctx.moveTo(vertices[0].x, vertices[0].y);
		for (var j = 1; j < vertices.length; j += 1) {
			ctx.lineTo(vertices[j].x, vertices[j].y);
		}
		ctx.lineTo(vertices[0].x, vertices[0].y);
		ctx.fillStyle = bodies[i].fillColor;
		ctx.fill();
	}
};
render();

// create runner
var runner = Runner.create();

(function run() {
	window.requestAnimationFrame(run);
	Engine.update(engine, 1000 / 60);
})();

// throw items up
function apply_vertical_force(direction) {
	let bodies = Composite.allBodies(engine.world);
	bodies.forEach(function(body) {
		let force = Matter.Vector.create(Math.random()*0.005- 0.0025, 0.02*direction);
		Matter.Body.applyForce(body, Matter.Vector.create(body.position.x+Math.random()*20-10, body.position.y), force);
	})
}

// sets borders
let ceil = Bodies.rectangle(width/2, -10, width, 20, { isStatic: true });
let ground = Bodies.rectangle(width/2, height+10, width, 20, { isStatic: true });
let right = Bodies.rectangle(width+10, height/2, 20, height, { isStatic: true });
let left = Bodies.rectangle(-10, height/2, 20, height, { isStatic: true });
Composite.add(engine.world, [ceil, ground, right, left]);