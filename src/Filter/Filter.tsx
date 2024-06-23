import { data, defectTypesType, objectTypesType, voltageType } from '../data'
import ButtonTile from '../BasicComponents/ButtonTile'
import { useEffect, useState } from 'react'
import * as styles from './Filter.styles'
import { row } from './Filter.styles'
import Button from '../BasicComponents/Button'

export type FilterValueType = {
  voltageLevelIdentifier?: voltageType
  technicalObjectTypeIdentifier?: objectTypesType
  defectTypeIdentifier?: defectTypesType
}

export type FilterProps = {
  onChange?: (item?: FilterValueType) => void
}

const Filter = (props: FilterProps) => {
  const [filter, setFilter] = useState<FilterValueType>({})
  const [show, setShow] = useState(true)

  const setFilterValue = (value: string, filterKey: string) => {
    const newFilter = {
      ...filter,
    }
    if (newFilter[filterKey] === value) {
      delete newFilter[filterKey]
    } else {
      newFilter[filterKey] = value
    }
    setFilter(newFilter)
    props.onChange && props.onChange(newFilter)
  }

  return (
    <div css={styles.relative}>
      <div css={styles.expandButton}>
        <Button onClick={() => setShow(!show)}>
          {show ? 'Skryt' : 'Rozbalit'}
        </Button>
      </div>
      <div css={!show && styles.filterRowsHidden}>
        <div css={styles.row}>
          <div css={styles.label}>Voltage level</div>
          <div css={[row, styles.rowValues]}>
            {data.voltageLevels.map((level) => (
              <ButtonTile
                key={level.voltageLevelName}
                name={level.voltageLevelName}
                onClick={() => {
                  setFilterValue(
                    level.voltageLevelIdentifier,
                    'voltageLevelIdentifier',
                  )
                }}
                active={
                  filter.voltageLevelIdentifier === level.voltageLevelIdentifier
                }
              />
            ))}
          </div>
        </div>
        <div css={styles.row}>
          <div css={styles.label}>Object type</div>
          <div css={[row, styles.rowValues]}>
            {data.technicalObjectTypes
              .filter((obj) =>
                filter.voltageLevelIdentifier
                  ? obj.voltageLevelIdentifier === filter.voltageLevelIdentifier
                  : true,
              )
              .map((objectType, index) => (
                <ButtonTile
                  key={`${objectType.technicalObjectTypeIdentifier}+${
                    objectType.voltageLevelIdentifier
                  }-${index}`}
                  name={
                    objectType.technicalObjectTypeName +
                    ' ' +
                    objectType.voltageLevelIdentifier
                  }
                  onClick={() => {
                    setFilterValue(
                      objectType.technicalObjectTypeIdentifier,
                      'technicalObjectTypeIdentifier',
                    )
                  }}
                  active={
                    filter.technicalObjectTypeIdentifier ===
                    objectType.technicalObjectTypeIdentifier
                  }
                />
              ))}
          </div>
        </div>
        <div css={styles.row}>
          <div css={styles.label}>Defect type</div>
          <div css={[row, styles.rowValues]}>
            {data.defectTypes
              .filter((obj) =>
                filter.voltageLevelIdentifier
                  ? obj.voltageLevelIdentifier === filter.voltageLevelIdentifier
                  : true,
              )
              .map((defectType, index) => (
                <ButtonTile
                  key={`${defectType.defectTypeIdentifier}+${
                    defectType.voltageLevelIdentifier
                  }-${index}`}
                  name={
                    defectType.defectTypeName +
                    ' ' +
                    defectType.voltageLevelIdentifier
                  }
                  onClick={() => {
                    setFilterValue(
                      defectType.defectTypeIdentifier,
                      'defectTypeIdentifier',
                    )
                  }}
                  active={
                    filter.defectTypeIdentifier ===
                    defectType.defectTypeIdentifier
                  }
                />
              ))}
          </div>
        </div>
      </div>
      <div css={[styles.filterValues, !show && styles.filterValuesOnTop]}>
        {Object.keys(filter).map((filterKey) => (
          <Button
            active={true}
            key={filterKey}
            onClick={() => setFilterValue(filter[filterKey], filterKey)}
          >
            {filter[filterKey]}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Filter
