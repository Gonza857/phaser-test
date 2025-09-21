import Phaser from "phaser";
import HudScene from "./HudScene";

export default class GameScene extends Phaser.Scene {
    // Rectangle con body arcade
    private player!: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super({ key: "GameScene" });
    }

    preload() {
        this.load.tilemapTiledJSON("mapa", "../../public/assets/mapa/lomejor.tmj");
        this.load.image("tilesArboles", "../../public/assets/mapa/assets_spritesheet_v2_free.png");
        this.load.image("tilesPiso", "../../public/assets/mapa/water_and_island_tiles_v2.png");
    }

    create() {
        const map = this.make.tilemap({ key: "mapa" });

        const arbolTileset = map.addTilesetImage("assets_spritesheet_v2_free", "tilesArboles");
        const pisoTileset = map.addTilesetImage("water_and_island_tiles_v2", "tilesPiso");

        map.createLayer("piso", pisoTileset!, 0, 0);
        map.createLayer("bordes-agua", pisoTileset!, 0, 0);
        map.createLayer("arboles", arbolTileset!, 0, 0);
        map.createLayer("arboles2", arbolTileset!, 0, 0);
        map.createLayer("puente", arbolTileset!, 0, 0);

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        // --- Box de fondo ---
        const boxWidth = 200;
        const boxHeight = 160;
        const box = this.add.graphics();
        box.fillStyle(0x222222, 1); // fyondo oscuro
        box.fillRect(centerX - boxWidth/2, centerY - boxHeight/2, boxWidth, boxHeight);
        box.lineStyle(3, 0x119f00); // borde blanco estilo pixel
        box.strokeRect(centerX - boxWidth/2, centerY - boxHeight/2, boxWidth, boxHeight);

        // --- Opciones del menú ---
        const menuOptions = [
            { text: 'JUGAR', color: '#119f00' },
            { text: 'OPCIONES', color: '#119f00' },
            { text: 'SALIR', color: '#119f00' }
        ];

        const spacing = 40; // espacio vertical entre opciones
        menuOptions.forEach((item, index) => {
            const menuItem = this.add.text(centerX, centerY - 40 + index * spacing, item.text, {
                font: '20px Courier', // fuente pixel style
                fill: item.color,
                stroke: '#000000',
                strokeThickness: 2
            }).setOrigin(0.5);

            menuItem.setInteractive({ useHandCursor: true });

            menuItem.on('pointerdown', () => console.log(`${item.text} clickeado`));

            menuItem.on('pointerover', () => menuItem.setStyle({ fill: '#ffffff' }));
            menuItem.on('pointerout', () => menuItem.setStyle({ fill: item.color }));
        });

        this.game.scene.add('HudScene', HudScene);

    }


    update() {
        // const speed = 300;
        // this.player.body.setVelocity(0);
        //
        // if (this.cursors.left?.isDown) {
        //     this.player.body.setVelocityX(-speed);
        // } else if (this.cursors.right?.isDown) {
        //     this.player.body.setVelocityX(speed);
        // }
        //
        // if (this.cursors.up?.isDown) {
        //     this.player.body.setVelocityY(-speed);
        // } else if (this.cursors.down?.isDown) {
        //     this.player.body.setVelocityY(speed);
        // }
    }
}
