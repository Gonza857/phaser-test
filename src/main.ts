import Phaser from "phaser";
import GameScene from "../js/scenes/GameScene";
import HudScene from "../js/scenes/HudScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1536,
  height: 1408,
  backgroundColor: "#2d2d2d",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { debug: false }
  },
  scene: [GameScene, HudScene] // solo arrancamos con el juego
};

new Phaser.Game(config);
