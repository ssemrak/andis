import { investmentType } from '../../data'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as styles from '../Investments.styles'
import Input from '../../BasicComponents/Input'
import Textarea from '../../BasicComponents/Textarea'
import Button from '../../BasicComponents/Button'

type FormProps = {
  onSubmit: (data?: investmentType) => void
}

const InvestmentForm: FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<investmentType>()

  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Názov investicie:
        <Input
          error={!!errors.investmentName}
          {...register('investmentName', { required: true })}
        />
        {errors.investmentName && <div css={styles.error}>povinne pole</div>}
      </label>
      <label>
        Skupina:
        <Input {...register('planningGroup')} />
      </label>
      <label>
        Mesto:
        <Input {...register('municipality')} />
      </label>
      <label>
        Status:
        <Textarea
          error={!!errors.currentStateDescription}
          {...register('currentStateDescription', { required: true })}
        />
        {errors.currentStateDescription && (
          <div css={styles.error}>povinne pole</div>
        )}
      </label>
      <label>
        Navrhovane riesenie:
        <Textarea
          error={!!errors.proposedSolution}
          {...register('proposedSolution', { required: true })}
        />
        {errors.proposedSolution && <div css={styles.error}>povinne pole</div>}
      </label>
      <div css={styles.buttons}>
        <Button type="submit">Vytvorit</Button>
        <Button onClick={() => onSubmit && onSubmit()}>Zrusit</Button>
      </div>
    </form>
  )
}
export default InvestmentForm
