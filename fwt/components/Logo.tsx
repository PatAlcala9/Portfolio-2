import webpPath from '../images/logo.webp'
import avifPath from '../images/logo.avif'

interface Props {
  size?: number
  alt?: string
}

export default (props: Props) => {
  return (
    <>
      <picture>
        <source srcset={avifPath.src} type="image/avif" />
        <source srcset={webpPath.src} type="image/webp" />
        <img width={props.size} height="auto" decoding="async" loading="lazy" alt="logo" />
      </picture>
    </>
  )
}
