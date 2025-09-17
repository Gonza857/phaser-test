import Phaser from "phaser";

export class Wall extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, w: number, h: number) {
    super(scene, x, y, "block");

    // Agregar a la escena
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Configuración visual
    this.setTint(0x25476a);
    this.setOrigin(0, 0);
    this.setDisplaySize(w, h);

    // Volver el body estático
    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setImmovable(true);
    body.moves = false;
  }
}
