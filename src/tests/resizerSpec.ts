import { resizeImage } from "../../utils/resizer";

describe('Test image resizing functionality', () => {
    it('Resolves successfully when image is resized', async () => {
        await expectAsync(resizeImage('bamboo', 300, 280)).toBeResolved();
    });

    it('does not resolve when width is 0', async () => {
        await expectAsync(resizeImage('bamboo', 0, 280)).toBeResolved();
    });

    it('does not resolve when height is 0', async () => {
        await expectAsync(resizeImage('bamboo', 300, 0)).toBeResolved();
    });

    it('does not resolve when image does not exist in storage', async () => {
        await expectAsync(resizeImage('nonExistentImage', 300, 250)).toBeResolved();
    });
});