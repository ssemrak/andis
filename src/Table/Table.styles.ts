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
  height: 50px;
`

export const pointer = css`
  cursor: pointer;
`

export const rowSelected = css`
  background-color: #ddd;
`
export const cell = css`
  padding: 4px 10px;
  border-bottom: 2px solid #fff;
`
