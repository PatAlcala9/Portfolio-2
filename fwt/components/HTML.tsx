import '../styles/HTML.sass'
import { type JSXElement, Show } from 'solid-js'
import background1 from '../images/background.avif'
import background2 from '../images/background.webp'

interface Props {
  title: string
  name: string
  description: string
  children: JSXElement
  font?: 'roboto' | 'inter' | 'montserrat' | 'open-sans' | 'public-sans'
  preloadBackground?: boolean
}

export default (props: Props) => {
  return (
    <>
      <html lang="en">
        <head>
          <base href="/" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="name" content={props.name} />
          <meta name="description" content={props.description} />
          <meta name="title" property="og:title" content={props.name} />
          <meta property="og:description" content={props.description} />
          <meta property="og:type" content="website" />
          <link rel="icon" type="image/svg+xml" href="/favicon.png" />
          <Show when={props.font}>
            <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          </Show>
          <Show when={props.preloadBackground}>
            <link rel="preload" href={background1.src} as="image" type="image/svg+xml" />
            <link rel="preload" href={background2.src} as="image" type="image/svg+xml" />
          </Show>

          <title>{props.title}</title>
        </head>

        <body class={props.font}>{props.children}</body>
      </html>
    </>
  )
}
