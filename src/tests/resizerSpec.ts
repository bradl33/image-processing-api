import { resizeImage } from '../../utils/resizer';

describe('Test image resizing functionality', () => {
  it('Resolves successfully when image is resized', async () => {
    await expectAsync(resizeImage('bamboo', 300, 280)).toBeResolved();
  });
});
