const modals = document.querySelectorAll('.modal');
const linkAbout = document.querySelector('#link-about');
const about = document.querySelector('#about');
const linkProjects = document.querySelector('#link-projects');
const projects = document.querySelector('#projects');
const linkTerms = document.querySelector('#link-terms');
const terms = document.querySelector('#terms');

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

linkTerms.addEventListener('click', () => {
	hideModals();
	terms.style.display = 'block';
	window.scrollTo(0, 0);
});