import '../styles/Footer.sass'
import type { JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
}

export default (props: Props) => {
  return (
    <>
      <footer class="footer">
        <small>{props.children}</small>
      </footer>
    </>
  )
}
