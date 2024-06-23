import { css } from '@emotion/react'

export const createButton = css`
  width: fit-content;
  margin: auto;
`

export const appStyle = css`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin: auto;

  h2 {
    font-weight: 500;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
