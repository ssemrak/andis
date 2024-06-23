import { css } from '@emotion/react'

export const table = css`
  width: 100%;
  border-collapse: collapse;
  max-height: 500px;
  overflow: auto;
  margin: 20px 0;
`

export const row = css`
  background-color: transparent;
  cursor: pointer;
  height: 50px;
`

export const rowSelected = css`
  background-color: #ddd;
`
export const cell = css`
  border-bottom: 2px solid #fff;
`
