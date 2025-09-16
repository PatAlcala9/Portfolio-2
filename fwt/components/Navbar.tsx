import '../styles/Navbar.sass'
import Row from './Row'

interface Props {
  transparent?: boolean
  children: HTMLElement
}

export default (props: Props) => {
  return (
    <>
      <nav class="nav" role="navigation" aria-label="main navigation">
        <Row content="split">{props.children}</Row>
      </nav>
    </>
  )
}
