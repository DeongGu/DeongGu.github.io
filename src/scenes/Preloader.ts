import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {}

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");
    this.load.spritesheet("dg", "dg.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    this.load.spritesheet("npc", "npc.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    this.load.spritesheet("hello", "hello.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.
    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
  }
}