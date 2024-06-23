import { forwardRef } from 'react'
import * as styles from './BasicComponent.styles'
import { InputProps } from './BasicComponent.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...restProps }, ref) => (
    <input
      ref={ref}
      className={className}
      css={[styles.input, error && styles.inputError]}
      {...restProps}
    />
  ),
)

export default Input
