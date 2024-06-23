import { ReactNode, MouseEvent } from 'react'

export type InputProps<T> = {
  className?: string
  placeholder?: string
  required?: boolean
  error?: boolean
  setValue: (val: T) => void
  type?: 'text' | 'number'
  value: T
}

export type TextareaProps = {
  placeholder?: string
  required?: boolean
  setValue: (s: string) => void
  value?: string
  maxLength?: number
}

export type ButtonProps = {
  disabled?: boolean
  children?: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (e: MouseEvent) => void
}
