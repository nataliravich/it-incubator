import { css, styled } from 'styled-components';
import { MyAnimation } from '../styles/animations/Animations';

type StyledBtnPropsType = {  // объект
	color?: string     	 // ; не ставим
	fontSize?: string 	 // тк 20px в ‘  ’, то строка, иначе было бы числом 
	primary?: boolean     // или true (если передаем) или false (если не передаем)
	outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`   /*button*/
border: none;
//background-color: #fb3f78;
//background-color: ${props => props.color || '#fb3f78'};
padding: 10px 20px;
//color: snow;
//font-size: 2rem;
font-size: ${props => props.fontSize};
font-weight: bold;

&:hover {
background-color: #4053cc;
}

&:last-child {
	font-size: 6rem;
}

//outlined
${props => props.outlined && css<StyledBtnPropsType>`
border: 2px solid ${props => props.color || '#fb7f12'};
color: ${props => props.color || '#fb7f12'};
background-color: transparent;	
`}

//primary
${props => props.primary && css<StyledBtnPropsType>`
background-color:  #fb7f12;
color: ${props => props.color || 'snow'};
`}
`

/*Свой компонент-button на базе существующего */
export const SuperButton = styled(StyledBtn)`  /* в (название компоненты, на базе кот я хочу создать свою) */
border-radius: 7px;
background-color: #ffe869;
color: black;

&:hover{
animation: ${MyAnimation} 2s ease-in-out infinite;
}
/*${MyAnimation} 2s ease-in-out;*/
`

/*link в виде кнопки, вид взят от StyledBtn:
<StyledBtn as="a" href={"#"}>StyledBtnLink</StyledBtn> animation: */


/*добавили export, чтоб компонента стала видной и импорт в App.tsx*/