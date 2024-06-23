import { forwardRef } from 'react'
import * as styles from './BasicComponent.styles'
import { TextareaProps } from './BasicComponent.types'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...restProps }, ref) => (
    <textarea
      ref={ref}
      css={[styles.input, styles.textarea, error && styles.inputError]}
      {...restProps}
    />
  ),
)

export default Textarea
