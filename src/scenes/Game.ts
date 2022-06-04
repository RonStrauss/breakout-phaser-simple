import Phaser from "phaser";

export default class Game extends Phaser.Scene {
	private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
	private player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

	constructor() {
		super("GameScene");
	}

	preload() {
		this.load.image("paddle", "./assets/Paddle.png");
	}

	create() {
		this.player = this.physics.add.image(400, 570, "paddle");

		// const bricks = this.add.group()

		this.cursor = this.input.keyboard.createCursorKeys();
		this.player.setCollideWorldBounds(true);
	}

	update() {
		if (this.cursor.right.isDown) {
			if (typeof this.player.x == "number") this.player.x += 6;
		}
		if (this.cursor.left.isDown) {
			if (typeof this.player.x == "number") this.player.x -= 6;
		}
	}
}
