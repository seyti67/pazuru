let darkMode = false;
function toggle_color_mode() {
	darkMode = !darkMode;
	if(!darkMode) {
		document.body.className = 'colorfull';
		render = function () {
			var bodies = Composite.allBodies(engine.world);
		
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
	} else {
		document.body.className = 'dark';
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#555';
		render = function () {
			var bodies = Composite.allBodies(engine.world);
		
			window.requestAnimationFrame(render);
		
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		
			ctx.beginPath();
			for (var i = 0; i < bodies.length; i += 1) {
				let vertices = bodies[i].vertices;
				ctx.moveTo(vertices[0].x, vertices[0].y);
				for (var j = 1; j < vertices.length; j += 1) {
					ctx.lineTo(vertices[j].x, vertices[j].y);
				}
				ctx.lineTo(vertices[0].x, vertices[0].y);
			}
			ctx.stroke();
		};
	}
}