import './App.css';
import React from 'react';
import cat from '../src/assets/images/cat-1.jpg'
import cat2x from '../src/assets/images/cat-1@2x.jpg'
import cat3x from '../src/assets/images/cat-1@3x.jpg'
import cat2 from '../src/assets/images/cat-2.jpg'


function App() {
	return (
		<div className="App">
			<p>Hello, Retina &#128075;</p>

			{/*<div className={'bg'}></div>*/}
			<img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="cat" />

		</div>
	);
}

export default App;



