export class KitchenBlender {
  private speed = 0;
  private filledLevel = 0;
  private readonly MAX_SPEED = 10;
  private readonly MAX_LEVEL = 100;

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(x: number): void {
    if (this.filledLevel === 0) {
      throw new Error('Cannot operate an empty blender');
    }
    if (x < 0 || x > this.MAX_SPEED) {
      throw new Error('Invalid speed');
    }
    if (x - this.speed !== 1) {
      throw new Error('Speed can only be increased / decreased by 1');
    }
    this.speed = x;
  }

  isFull(): boolean {
    return this.filledLevel === this.MAX_LEVEL;
  }

  fill(): void {
    if (this.isFull()) {
      throw new Error('Blender is already full');
    }
    this.filledLevel += 10;
  }

  empty(): void {
    this.filledLevel = 0;
  }
}
