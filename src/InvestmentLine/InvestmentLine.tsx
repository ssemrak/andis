import * as styles from './InvestmentLine.styles'
import { investmentType } from '../data/data.types'

const InvestmentLine = ({ item }: { item: investmentType }) => {
  return (
    <div css={styles.tableStyle}>
      <div>{item.investmentName}</div>
      <div>{item.currentStateDescription}</div>
    </div>
  )
}

export default InvestmentLine
