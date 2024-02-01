const modals = document.querySelectorAll('.modal');
const linkAbout = document.querySelector('#link-about');
const about = document.querySelector('#about');
const linkProjects = document.querySelector('#link-projects');
const projects = document.querySelector('#projects');

const hideModals = () => {
	modals.forEach(e => {
		e.style.display = 'none';
	});
};

hideModals();
about.style.display = 'block';

linkAbout.addEventListener('click', () => {
	hideModals();
	about.style.display = 'block';
	window.scrollTo(0, 0);
});

linkProjects.addEventListener('click', () => {
	hideModals();
	projects.style.display = 'block';
	window.scrollTo(0, 0);
});

const main = document.querySelector(".main");
const estrela = document.querySelector(".estrela");
const x = window.innerWidth;
const y = main.offsetHeight * 1.75;
const amount = 100;
const size = 134;
const hue = 45;
const sat = 36;
const duration = 20000;
for (let i = 0; i < amount; i++) {
	let star = document.createElement("div");
	let variation = duration - duration * 0.5 + Math.floor(duration * Math.random());
	star.classList.add("estrela");
	let top = Math.floor(Math.random() * (y - size) + 50);
	let left = Math.floor(Math.random() * (x - 108));
	star.style.top = top + "px";
	star.style.left = left + "px";
	star.style.width = "72px"; // Math.random() * size + "px";
	star.style.height = Math.floor(10 + Math.random() * (size - 10)) + "px";
	let individualSat = sat - Math.floor(Math.random() * sat * 0.5);
	star.style.background = `linear-gradient(to bottom, hsl(${hue}, ${individualSat}%, 50%), hsl(${hue}, ${individualSat}%, 25%))`;
	star.style.backgroundColor = `hsl(${hue}, ${individualSat}%, 50%)`;
	main.appendChild(star);
	setTimeout(() => {
		star.style.animation = `glow ${variation}ms ease-in-out infinite`;
	},  variation / 10);
};