import './App.css';
import React from 'react';
import cat from '../src/assets/images/cat-1.jpg'
import cat2x from '../src/assets/images/cat-1@2x.jpg'
import cat3x from '../src/assets/images/cat-1@3x.jpg'
import cat2 from '../src/assets/images/cat-2.jpg'
import proj1 from '../src/assets/images/proj-1.webp'
import proj2 from '../src/assets/images/proj-2.webp'
import proj3 from '../src/assets/images/proj-1.png'
import proj4 from '../src/assets/images/proj-2.png'

function App() {
	return (
		<div className="App">
			<p>Hello, Retina &#128075;</p>

			{/*<div className={'bg'}></div>*/}
			{/*<img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="cat" />*/}

			<picture>
				<source srcSet={`${proj2} 2x, ${proj1} 1x`} />
				<img src={proj3} srcSet={`${proj4} 2x`} alt="proj" />
			</picture>


		</div>
	);
}

export default App;



