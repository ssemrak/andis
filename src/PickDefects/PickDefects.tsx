import Button from '../BasicComponents/Button'
import { useEffect, useState } from 'react'
import Filter, { FilterValueType } from '../Filter'
import * as styles from '../App.styles'
import Table from '../Table'
import { defectColumns, defectsFullData } from '../Defects'

type PropsType = {
  onSubmit: (items?: string[]) => void
}

const PickDefects = ({ onSubmit }: PropsType) => {
  const [filter, setFilter] = useState<FilterValueType>({})
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [data, setData] = useState(defectsFullData)

  useEffect(() => {
    const newData = defectsFullData.filter((obj) =>
      Object.keys(filter).every((key) => obj[key] === filter[key]),
    )
    const newSelection: string[] = []
    setData(newData)
    newData.forEach((obj) => {
      if (selectedRows.includes(obj.id)) {
        newSelection.push(obj.id)
      }
    })
    setSelectedRows(newSelection)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <div>
      <h2>Vyber nedostatkov</h2>
      <Filter onChange={(newFilter) => setFilter(newFilter ?? {})} />
      <Table
        data={data}
        columns={defectColumns}
        onSelectionChanged={(ids) => setSelectedRows(ids)}
        selectedRows={selectedRows}
      />

      <div css={styles.buttons}>
        <Button
          disabled={selectedRows.length < 1}
          onClick={() => onSubmit(selectedRows)}
        >
          Potvrdit vybrane ({selectedRows.length})
        </Button>
        <Button onClick={() => onSubmit()}>Zrusit</Button>
      </div>
    </div>
  )
}

export default PickDefects
