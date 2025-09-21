import Phaser from "phaser";
import {COLORES} from "../../config";

export default class HudScene extends Phaser.Scene {
    constructor() {
        super({ key: "HudScene" });
    }

    create() {
        const hudBox = this.add.rectangle(0, 0, 1200, 60);
        hudBox.setOrigin(0, 0);
        hudBox.setScrollFactor(0);
        hudBox.setStrokeStyle(4, COLORES.ROJO);

        const miniBox1 = this.add.rectangle(0, 0, 400, 60, COLORES.TRANSPARENTE, 0.6);
        miniBox1.setOrigin(0, 0);
        miniBox1.setScrollFactor(0);
        miniBox1.setStrokeStyle(4, COLORES.ROJO);

        const miniBox2 = this.add.rectangle(400, 0, 400, 60, COLORES.TRANSPARENTE, 0.6);
        miniBox2.setOrigin(0, 0);
        miniBox2.setScrollFactor(0);
        miniBox2.setStrokeStyle(4, COLORES.ROJO);

        const miniBox3 = this.add.rectangle(800, 0, 400, 60, COLORES.TRANSPARENTE, 0.6);
        miniBox3.setOrigin(0, 0);
        miniBox3.setScrollFactor(0);
        miniBox3.setStrokeStyle(4, COLORES.ROJO);

        const hudText = this.add.text(600, 35, "HUD ACTIVO", {
            fontSize: "32px",
            color: "#ff0000",
            fontStyle: "bold"
        });
        hudText.setOrigin(0.5, 0.5);   // centrar texto dentro de la caja
        hudText.setScrollFactor(0);
    }
}
