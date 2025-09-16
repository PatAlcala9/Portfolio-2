import sharp from 'sharp'

interface Props {
  size?: number
}

const convertLogo = async (props: Props) => {
  const inputSrc = 'src/assets/images/logo.png'
  const webpImage = 'fwt/images/logo.webp'
  const avifImage = 'fwt/images/logo.avif'

  const avifBuffer = await sharp(inputSrc).avif({ quality: 60 }).resize(props.size).toBuffer()
  await sharp(avifBuffer).toFile(avifImage)

  const webpBuffer = await sharp(inputSrc).webp({ quality: 75 }).resize(props.size).toBuffer()
  await sharp(webpBuffer).toFile(webpImage)
}

export default (props: Props) => {
  convertLogo(props)
}
