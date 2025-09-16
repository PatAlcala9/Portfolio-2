import sharp from 'sharp'

const convertBackground = async () => {
  const inputSrc = 'src/assets/images/background.png'
  const webpOutput = 'fwt/images/background.webp'
  const avifOutput = 'fwt/images/background.avif'

  const avifBuffer = await sharp(inputSrc).avif({ quality: 60 }).resize(1920).toBuffer()
  await sharp(avifBuffer).toFile(avifOutput)

  const webpBuffer = await sharp(inputSrc).webp({ quality: 75 }).resize(1920).toBuffer()
  await sharp(webpBuffer).toFile(webpOutput)
}

export default () => {
  convertBackground()
}
