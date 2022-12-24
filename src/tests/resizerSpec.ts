import { resizeImage } from '../../utils/resizer';

describe('Test image resizing functionality', () => {
  it('resolves successfully when image is resized', async () => {
    await expectAsync(resizeImage('bamboo', 300, 280)).toBeResolved();
  });

  it('fails when height is 0', async () => {
    try {
      await resizeImage('bamboo', 300, 0);
    } catch (err) {
      return;
    }
    throw new Error();
  });

  it('fails when width is 0', async () => {
    try {
      await resizeImage('bamboo', 0, 220);
    } catch (err) {
      return;
    }
    throw new Error();
  });

  it('fails when image does not exist', async () => {
    try {
      await resizeImage('nonExistentImage', 300, 200);
    } catch (err) {
      return;
    }
    throw new Error();
  });

});
