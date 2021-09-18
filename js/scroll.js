const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
    smooth: true,
	tablet: { smooth: true },
	smartphone: { smooth: true }
});

let lastMove = lastY = 0;
scroll.on('scroll', (e) => {
	let delta = e.scroll.y - lastY;
	lastY += delta;
	let currentDate = new Date().getTime();
	if(lastMove < currentDate - 100) {
		lastMove = new Date().getTime();
		if(delta > 0) {
			apply_vertical_force(Math.max(-2,-0.1*delta));
		} else {
			apply_vertical_force(Math.min(2,-0.1*delta));
		}
	}
});

scroll.on('call', (obj) => {
	if(obj === 'pazuru-title') {
		
	}
});