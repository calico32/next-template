import { Spinner, SpinnerSize } from '@blueprintjs/core'
import styles from '../styles/util.module.scss'
import Wrapper from './Wrapper'

const Loading = (): JSX.Element => {
  return (
    <Wrapper className={`flex items-center justify-center ${styles.loading}`}>
      <Spinner size={SpinnerSize.LARGE} />
    </Wrapper>
  )
}

export default Loading
