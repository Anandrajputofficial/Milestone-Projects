const image = document.getElementById('image');
let x = 0;
let y = 0;

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			y -= 10;
			break;
		case 'ArrowDown':
			y += 10;
			break;
		case 'ArrowLeft':
			x -= 10;
			break;
		case 'ArrowRight':
			x += 10;
			break;
		default:
			break;
	}

	image.style.transform = `translate(${x}px, ${y}px)`;
});
