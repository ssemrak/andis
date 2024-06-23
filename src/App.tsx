import { FC, useState } from 'react'
import * as styles from './App.styles'
import Button from './BasicComponents/Button'
import data from './data/ZADANIE_DATA.json'
import { investmentType } from './data'
import Table from './Table'
import Investment from './Investment'

const App: FC = () => {
  const [createProcess, setCreateProcess] = useState(false)
  const [createdInvestments, setCreatedInvestments] = useState<
    investmentType[]
  >([])

  return (
    <div css={styles.appStyle}>
      {!createProcess && (
        <div css={styles.contentStyle}>
          <h2>Zoznam investicii</h2>
          <Table
            columns={[
              { id: 'investmentRequestID', label: 'ID' },
              { id: 'investmentName', label: 'Nazov investicie' },
              { id: 'planningGroup', label: 'Skupina' },
              { id: 'municipality', label: 'Mesto' },
              { id: 'currentStateDescription', label: 'Status' },
              { id: 'defectsCount', label: 'Pocet objektov' },
            ]}
            data={[
              ...createdInvestments,
              ...data.investmentRequests.map((obj) => ({
                ...obj,
                defectsCount: obj.defectIDs.length,
              })),
            ]}
          />
          <Button
            css={styles.createButton}
            onClick={() => setCreateProcess(true)}
          >
            Vytvor investiciu
          </Button>
        </div>
      )}
      {createProcess && (
        <Investment
          onSubmit={(investment) => {
            investment &&
              setCreatedInvestments([investment, ...createdInvestments])
            setCreateProcess(false)
          }}
        />
      )}
    </div>
  )
}

export default App
