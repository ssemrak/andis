import { css } from '@emotion/react'

export const createButton = css`
  width: fit-content;
  margin: 20px auto;
`

export const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 100px;
`

export const appStyle = css`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin: auto;
  justify-content: center;

  h2 {
    font-weight: 500;
  }
`

export const buttons = css`
  display: flex;
  gap: 14px;
`

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
