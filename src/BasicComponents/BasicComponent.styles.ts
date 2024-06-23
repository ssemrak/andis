import { css } from '@emotion/react'

export const input = css`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  transition: border-color 0.3s;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
  }
`

export const inputError = css`
  border-color: #ff5555;

  &:focus {
    border-color: #ff5555;
  }
`

export const textarea = css`
  resize: vertical;
`

/** Modified Google button */
export const button = css`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 12px;
  border-style: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition:
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  &:not(:disabled):hover {
    background: #f6f9fe;
    color: #174ea6;
  }

  &:active {
    box-shadow:
      0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
    border: 2px solid #4285f4;
  }

  &:focus {
    outline: none;
  }

  &:not(:disabled) {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 2px 3px 0,
      rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
  }

  &:not(:disabled):focus {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):active {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 4px 4px 0,
      rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`

export const active = css`
  box-shadow:
    0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  border: 2px solid #4285f4;
`

export const tile = css`
  height: 100px;
  width: 120px;
  flex: 0 0 auto;
  flex-wrap: wrap;
  word-wrap: break-word;
  overflow: hidden;
`

export const activeTile = css`
  box-shadow:
    0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  border: 2px solid #4285f4;
`
