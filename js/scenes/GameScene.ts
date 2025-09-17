import Phaser from "phaser";
import { GAME_CONFIG } from "../../config";

export class GameScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

  constructor() {
    super("GameScene");
  }

  preload(): void {
    this.load.image("floor", GAME_CONFIG.floorUrl);
  }

  create(): void {
    // Piso
    this.add
      .tileSprite(0, 0, GAME_CONFIG.worldWidth, GAME_CONFIG.worldHeight, "floor")
      .setOrigin(0);

    // Jugador (cuadrado rojo)
    this.player = this.add
      .rectangle(100, 100, 50, 50, 0xff0000)
      .setOrigin(0.5) as typeof this.player;
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);

    // Mundo y cámara
    this.physics.world.setBounds(0, 0, GAME_CONFIG.worldWidth, GAME_CONFIG.worldHeight);
    this.cameras.main.setBounds(0, 0, GAME_CONFIG.worldWidth, GAME_CONFIG.worldHeight);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
  }

  update(): void {
    const pointer = this.input.activePointer; // posición actual del mouse/touch
    const worldX = pointer.worldX;
    const worldY = pointer.worldY;

    const dx = worldX - this.player.x;
    const dy = worldY - this.player.y;
    const dist = Math.hypot(dx, dy);

    const speed = 250;
    const body = this.player.body as Phaser.Physics.Arcade.Body;

    if (dist > 5) {
      const angle = Math.atan2(dy, dx);
      body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    } else {
      body.setVelocity(0, 0);
    }
  }
}
