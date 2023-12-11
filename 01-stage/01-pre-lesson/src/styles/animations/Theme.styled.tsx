export const myTheme = {
	colors: {
		primary: "lightgreen",   //  называем переменные по логике (главный и 2ой по значимости цвет)
		secondary: "pink",  //тк это объект, то все значения строки или числа
		grey: {
			dark: "#e3c5c5",  //если нужны виды определенного цвета
			light: "#646161"
		}
	},            // здесь ставится ,


	media: {
		tablet: "screen and (max-width: 768px) and (max-width: 577px)",  //планшет
		mobile: "screen and (max-width: 576px)"  // мобильники
	}
}