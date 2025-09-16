import '../styles/Link.sass'

interface Props {
  to: string
  children?: any
}

export default (props: Props) => {
  return (
    <>
      <a href={props.to} aria-label={`Go to ${props.to}`} data-astro-prefetch>
        {props.children}
      </a>
    </>
  )
}
