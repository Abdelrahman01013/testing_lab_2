import { PiPipe } from './pi.pipe';

describe('PiPipe', () => {
  const pipe = new PiPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('multiplay by 5', () => {
    const value = pipe.transform(5)
    expect(value).toEqual(25);
  });
});
