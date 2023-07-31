import { Application, SCALE_MODES, Sprite, settings } from 'pixi.js'

export const WIDTH = 640;
export const HEIGHT = 480;

//escalar pixels sin aaliasing / blur
settings.ROUND_PIXELS = true;  //(redondear x las dudas)
settings.SCALE_MODE = SCALE_MODES.LINEAR;  // Pixi 6
// BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;  // Pixi 7

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xECE9DA,
	width: WIDTH,
	height: HEIGHT
});

// adaptar tamaño lienzo a ventana
window.addEventListener("resize", ()=>{
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX,scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);
	
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px"; //marginHorizontal.toString()  para convertir a string
	app.view.style.marginTop = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));