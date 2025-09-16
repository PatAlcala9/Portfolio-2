import '../styles/Box.sass'
import { type JSXElement, createMemo } from 'solid-js'

interface Props {
  thickness: number
  color?: string
  children: JSXElement
  curved?: boolean
}

export default (props: Props) => {
  const boxClass = createMemo(() => (props.curved ? 'curvedbox' : 'box'))

  return (
    <section class={boxClass()} style={{ border: `${props.thickness}px solid ${props.color || 'white'}` }}>
      {props.children}
    </section>
  )
}
