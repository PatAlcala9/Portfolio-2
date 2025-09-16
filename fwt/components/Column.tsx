import '../styles/Column.sass'
import type { JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
  content?: 'top' | 'center' | 'right' | 'split' | 'spaced'
  gap?: number
}

export default (props: Props) => {
  return (
    <>
      <section class={`column-${props.content || 'center'}`} style={`gap: ${props.gap}rem`}>
        {props.children}
      </section>
    </>
  )
}
