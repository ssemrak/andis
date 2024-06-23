import {
  ReactNode,
  MouseEvent,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
} from 'react'

export type InputProps = {
  className?: string
  placeholder?: string
  required?: boolean
  error?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export type TextareaProps = {
  placeholder?: string
  required?: boolean
  error?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export type ButtonProps = {
  active?: boolean
  disabled?: boolean
  children?: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (e: MouseEvent) => void
}
