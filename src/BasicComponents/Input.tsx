import { FC, forwardRef } from 'react'
import * as styles from './BasicComponent.styles'
import { InputProps } from './BasicComponent.types'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    className={props.className}
    css={[styles.input, props.error && styles.inputError]}
    {...props}
  />
))

export default Input
