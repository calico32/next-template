import { HTMLDivProps } from '@blueprintjs/core'

interface WrapperProps extends HTMLDivProps {
  page?: boolean
  childClassName?: string
}

const Wrapper = ({
  children,
  className,
  page,
  childClassName,
  ...props
}: WrapperProps): JSX.Element => {
  return (
    <div className={`max-w-[800px] mx-auto ${className ?? ''}`} {...props}>
      <div className={`${childClassName ?? ''} ${page ? 'mx-4 mt-5' : 'mx-4'}`}>{children}</div>
    </div>
  )
}

export default Wrapper
