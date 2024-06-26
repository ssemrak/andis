import { css } from '@emotion/react'

export const row = css`
  display: flex;
  gap: 10px;
  width: 900px;
`

export const relative = css`
  position: relative;
  margin-top: 30px;
`

export const expandButton = css`
  position: absolute;
  top: -20px;
  left: 0;
`

export const filterRows = css`
  max-height: 500px;
  overflow: hidden;
  transition: all 800ms ease;
`

export const filterRowsHidden = css`
  max-height: 0;
  overflow: hidden;
`

export const filterValues = css`
  gap: 10px;
  display: flex;
  margin-top: 20px;
`

export const filterValuesOnTop = css`
  margin-top: 50px;
`

export const rowValues = css`
  overflow-x: auto;
  padding: 10px;
`

export const label = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  flex: 1 0 auto;
`
