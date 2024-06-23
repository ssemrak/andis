import { investmentType } from '../data/data.types'
import Button from '../BasicComponents/Button'

const CreateInvestmentPage = ({
  onSubmit,
}: {
  onSubmit: (item?: investmentType) => void
}) => {
  return (
    <div>
      <h1>Vytvorenie investicnej poziadavky</h1>
      <Button onClick={() => onSubmit()}>Cancel</Button>
    </div>
  )
}
export default CreateInvestmentPage
