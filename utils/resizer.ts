import sharp from 'sharp';
import path from 'path';

const resizeImage = (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  const originalPath: string = path.resolve(`public/assets/original/${filename}.jpg`);
  const thumbPath: string = path.resolve(`public/assets/thumb/${filename}_thumb.jpg`);

  return sharp(originalPath)
    .resize({
      width: width,
      height: height
    })
    .toFile(thumbPath);
};

//write test to pass below function and check that file thumb is saved
// resizeImage("bamboo", 200, 350);

export { resizeImage };
