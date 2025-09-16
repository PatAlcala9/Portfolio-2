import '../styles/Row.sass'
import { Show, type JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
  content?: 'left' | 'center' | 'right' | 'split' | 'spaced' | 'even'
  gap?: number
}

export default (props: Props) => {
  return (
    <>
      <Show when={props.gap}>
        <section class={`row-${props.content || 'center'}`} style={`gap: ${props.gap}rem`}>
          {props.children}
        </section>
      </Show>

      <Show when={!props.gap}>
        <section class={`row-${props.content || 'center'}`}>{props.children}</section>
      </Show>
    </>
  )
}
