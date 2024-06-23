import { FC, forwardRef } from 'react'
import * as styles from './BasicComponent.styles'
import { TextareaProps } from './BasicComponent.types'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => (
    <textarea
      ref={ref}
      css={[styles.input, styles.textarea, props.error && styles.inputError]}
      {...props}
    />
  ),
)

export default Textarea
