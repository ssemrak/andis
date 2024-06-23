import { investmentType, data, voltageType } from '../data'
import Button from '../BasicComponents/Button'
import { useState } from 'react'
import Filter, { FilterValueType } from '../Filter'
import Defects from '../Defects'

type PropsType = {
  item?: investmentType
  onSubmit: (item?: investmentType) => void
}

const CreateInvestmentPage = ({ item: itemProp, onSubmit }: PropsType) => {
  const [item, setItem] = useState<Partial<investmentType>>(itemProp ?? {})
  const [filter, setFilter] = useState<FilterValueType>({})

  return (
    <div>
      <h1>Vytvorenie investicnej poziadavky</h1>
      <Filter onChange={(newFilter) => setFilter(newFilter ?? {})} />

      <Defects filter={filter} />
      <Button onClick={() => onSubmit()}>Cancel</Button>
    </div>
  )
}

export default CreateInvestmentPage
