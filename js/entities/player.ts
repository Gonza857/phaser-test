import Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Image {
  private target: { x: number; y: number } | null = null;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "block");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setTint(0xff3333);
    this.setDisplaySize(40, 40);

    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
  }

  setTarget(x: number, y: number) {
    this.target = { x, y };
  }

  update(): void {
    const body = this.body as Phaser.Physics.Arcade.Body;
    const speed = 240;
    body.setVelocity(0);

    if (!this.target) return;

    const dx = this.target.x - this.x;
    const dy = this.target.y - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 5) {
      const angle = Math.atan2(dy, dx);
      body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    } else {
      body.setVelocity(0, 0);
      this.target = null;
    }
  }
}
