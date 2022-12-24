import sharp from 'sharp';
import path from 'path';

const resizeImage = (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  const originalPath: string = path.resolve(
    `public/assets/original/${filename}.jpg`
  );
  const thumbPath: string = path.resolve(
    `public/assets/thumb/${filename}${width}x${height}_thumb.jpg`
  );

  return sharp(originalPath)
    .resize({
      width: width,
      height: height
    })
    .toFile(thumbPath);
};

export { resizeImage };
