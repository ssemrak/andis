import { FC } from 'react'
import * as styles from './BasicComponent.styles'
import { TextareaProps } from './BasicComponent.types'

const Textarea: FC<TextareaProps> = (props) => {
  return (
    <textarea
      css={[styles.input, styles.textarea]}
      placeholder="Description"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      maxLength={props.maxLength}
    />
  )
}

export default Textarea
