import '../styles/Background.sass'
import { Show, createSignal } from 'solid-js'
import fs from 'fs'
import webpPath from '../images/background.webp'
import avifPath from '../images/background.avif'
import noBackground from '../images/no-background.webp'

interface Props {
  image?: boolean
  color?: string
}

let [imageLoaded, setImageLoaded] = createSignal(false)

const checkBackground = () => {
  if (!fs.existsSync(avifPath.src) && !fs.existsSync(webpPath.src)) {
    setImageLoaded(true)
  } else {
    setImageLoaded(false)
  }
}

export default (props: Props) => {
  checkBackground()

  return (
    <>
      <Show when={props.image}>
        <Show when={imageLoaded()}>
          <picture class="fullscreen">
            <source srcset={avifPath.src} type="image/avif" />
            <source srcset={webpPath.src} type="image/webp" />
            <source srcset={noBackground.src} type="image/webp" />
            <img width="1920" height="auto" decoding="async" loading="lazy" alt="An image background" />
          </picture>
        </Show>
        <Show when={!imageLoaded()}>
          <picture class="fullscreen">
            <source srcset={noBackground.src} type="image/webp" />
            <img width="1920" height="auto" decoding="async" loading="lazy" alt="An alternative background if found no image background" />
          </picture>
        </Show>
      </Show>

      <Show when={!props.image}>
        <div style={{ background: props.color }} class="fullscreen" />
      </Show>
    </>
  )
}
