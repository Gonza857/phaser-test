import Phaser from "phaser";
import { GAME_CONFIG } from "../config";
import { GameScene } from "../js/scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_CONFIG.width,
  height: GAME_CONFIG.height,
  backgroundColor: "#2d2d2d",
  physics: { default: "arcade", arcade: { debug: false } },
  scene: [GameScene]
};

new Phaser.Game(config);
