import { FC, useState } from 'react'
import * as styles from './App.styles'
import Button from './BasicComponents/Button'
import data from './data/ZADANIE_DATA.json'
import InvestmentLine from './InvestmentLine'
import CreateInvestmentPage from './CreateInvestment'
import { investmentType } from './data/data.types'

const App: FC = () => {
  const [createProcess, setCreateProcess] = useState(false)
  const [createdInvestments, setCreatedInvestments] = useState<
    investmentType[]
  >([])

  return (
    <div css={styles.appStyle}>
      {!createProcess && (
        <div css={styles.contentStyle}>
          {data.investmentRequests.map((requestItem) => (
            <InvestmentLine item={requestItem} />
          ))}
          {createdInvestments.map((requestItem) => (
            <InvestmentLine item={requestItem} />
          ))}
          <Button
            css={styles.createButton}
            onClick={() => setCreateProcess(true)}
          >
            Vytvor investiciu
          </Button>
        </div>
      )}
      {createProcess && (
        <CreateInvestmentPage
          onSubmit={(investment) => {
            investment &&
              setCreatedInvestments([...createdInvestments, investment])
            setCreateProcess(false)
          }}
        />
      )}
    </div>
  )
}

export default App
