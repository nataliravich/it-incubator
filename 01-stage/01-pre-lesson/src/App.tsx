import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import { SuperButton } from './components/Button.styled';
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/animations/Theme.styled';


function App() {
	return (
		<div className="App">
			<Menu>
				<ul>
					<li><a href="">menu item 1</a></li>
					<li><a href="">menu item 2</a></li>
					<li><a href="">menu item 3</a></li>
				</ul>
			</Menu>

			<Box>
				<StyledBtn color="red" fontSize={"50px"}>StyledBtn</StyledBtn>
				<StyledBtn color={myTheme.colors.primary} primary>StyledBtn</StyledBtn>
				<StyledBtn color={myTheme.colors.secondary} outlined>StyledBtn</StyledBtn>
				<SuperButton>SuperButton</SuperButton>
				<StyledBtn as="a" href={"#"}>StyledBtnLink</StyledBtn>
				<StyledBtn as={Link} href={"#"}>styled.a</StyledBtn>
			</Box>


		</div >
	);
}

export default App;


/*Обертка, кот читается как <div>, она остается в App, тк она сама часть App*/
const Box = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

button {
	cursor: pointer;
}

${Link} {
	cursor: zoom-in;
}

@media ${myTheme.media.tablet} {   /*адаптив */
	flex-direction: column;
}
`


