import { Container, Text, TextStyle } from "pixi.js";

export class TextScene extends Container {
    constructor(){
        super();

        const tStyle = new TextStyle({
            fontFamily: "Aller",
            fontSize: 40,
            fontStyle: "italic",
            lineJoin: "bevel",
            stroke: "#c85bfb",
            strokeThickness: 10
        });
        const t = new Text("Hola Mundo!", tStyle);
        
        this.addChild(t);

    }
}