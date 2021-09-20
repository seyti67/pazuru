const categories = [
	{title:'Accueil', path:''},
	{title:'Jouer', path:''},
	{title:'Créer', path:''}
]

function init_navbar() {
	let menu = '<ul id="navlist">';
	categories.forEach(category => {
		menu += `<li><a href="${category.path}">${category.title}</a></li>`;
	});
	menu += '</ul>';
	
	let colorfullBoxes = '';
	let darkboxes = '';
	for(let i = 0; i < 16; i++) {
		let degree = Math.floor(Math.random()*360);
		colorfullBoxes += `<span style="background-color:hsl(${degree}, 70%, 70%);"></span>`;
		darkboxes += '<span style="background-color:#333"></span>';
	}
	const colorButtons = `<div id="color-modes" onclick="toggle_color_mode();"><button id="dark-button">${darkboxes}</button><button id="colorfull-button">${colorfullBoxes}</button></div>`;
	const navbar = `<nav>${menu}${colorButtons}</nav>`;
	document.getElementById('header').innerHTML = navbar;
};
init_navbar();