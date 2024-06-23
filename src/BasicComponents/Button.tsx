import { FC } from 'react'
import * as styles from './BasicComponent.styles'
import { ButtonProps } from './BasicComponent.types'

const Button: FC<ButtonProps> = (props) => (
  <button
    css={styles.button}
    className={props.className}
    type={props.type}
    disabled={props.disabled ?? undefined}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default Button
