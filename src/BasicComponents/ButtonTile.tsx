import Button from './Button'
import { tile } from './BasicComponent.styles'

const ButtonTile = ({ active, name, onClick }) => (
  <Button active={active} css={tile} onClick={onClick}>
    {name}
  </Button>
)

export default ButtonTile
