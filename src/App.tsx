import { FC } from 'react'
import * as styles from './App.styles'
import Button from './BasicComponents/Button'

const App: FC = () => {
  return (
    <div css={styles.appStyle}>
      <Button css={styles.createButton}>Vytvor investiciu</Button>
    </div>
  )
}

export default App
