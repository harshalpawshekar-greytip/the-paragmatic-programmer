import { KitchenBlender } from './kitchen-blender';

test('a blender cannot be operated empty', () => {
  const blender = new KitchenBlender();
  expect(() => blender.setSpeed(1)).toThrow();
});

describe('a blender can change speed at only one unit at a time', () => {
  test('x should be greater than 0', () => {
    const blender = new KitchenBlender();
    expect(() => blender.setSpeed(-1)).toThrow();
  });

  test('x should be less than or equal to 10', () => {
    const blender = new KitchenBlender();
    expect(() => blender.setSpeed(11)).toThrow();
  });

  test('x should only increase by 1', () => {
    const blender = new KitchenBlender();
    blender.fill();
    expect(() => blender.setSpeed(2)).toThrow();
  });

  test('x should only decrease by 1', () => {
    const blender = new KitchenBlender();
    blender.fill();
    blender.setSpeed(1);
    blender.setSpeed(2);
    expect(() => blender.setSpeed(0)).toThrow();
  });
});

describe('a blender can be filled', () => {
  test('only upto max limit', () => {
    const blender = new KitchenBlender();
    for (let i = 0; i < 10; i++) {
      blender.fill();
    }
    expect(() => blender.fill()).toThrow();
  })

  test('and emptied', () => {
    const blender = new KitchenBlender();
    blender.fill();
    blender.empty();
    expect(blender.getSpeed()).toBe(0);
  });
});
