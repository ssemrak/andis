import { FC, useState } from 'react'
import { investmentType } from '../data'
import PickDefects from '../PickDefects'
import Button from '../BasicComponents/Button'
import * as styles from './Investments.styles'
import InvestmentForm from './Form/Form'

type InvestmentProps = {
  onSubmit: (item?: investmentType) => void
  selectedCount?: number
}

const Investment: FC<InvestmentProps> = ({ onSubmit, selectedCount }) => {
  const [showDefects, setShowDefects] = useState(true)
  const [selectedDefects, setSelectedDefects] = useState<string[]>([])

  return (
    <div>
      {showDefects && (
        <PickDefects
          onSubmit={(selected) => {
            setShowDefects(false)
            if (!selected) {
              onSubmit && onSubmit()
            }
            setSelectedDefects(selected ?? [])
          }}
        />
      )}

      {!showDefects && (
        <div css={styles.form}>
          <Button onClick={() => setShowDefects(true)}>
            Vratit sa k vyberu nedostatkov ({selectedDefects.length})
          </Button>

          <InvestmentForm
            onSubmit={(data) => {
              onSubmit({
                ...data,
                defectIDs: selectedDefects,
                defectsCount: selectedDefects.length,
              })
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Investment
