import sharp from 'sharp'

interface Props {
  src: string
  size?: number
}

const convertImage = async (props: Props) => {
  const avifOutputPath = `fwt/images/${props.src.split('.').slice(0, -1).join('.')}.avif`
  const webpOutputPath = `fwt/images/${props.src.split('.').slice(0, -1).join('.')}.webp`

  const avifBuffer = await sharp(`src/assets/images/${props.src}`).avif({ quality: 60 }).resize(props.size).toBuffer()
  await sharp(avifBuffer).toFile(avifOutputPath)

  const webpBuffer = await sharp(`src/assets/images/${props.src}`).webp({ quality: 75 }).resize(props.size).toBuffer()
  await sharp(webpBuffer).toFile(webpOutputPath)
}

export default (props: Props) => {
  convertImage(props)
}
