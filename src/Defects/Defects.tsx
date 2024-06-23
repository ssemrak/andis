import Table, { ColumnType, RowType } from '../Table/Table'
import { data } from '../data'
import find from 'lodash/find'
import { FilterValueType } from '../Filter'

const Defects = ({ filter }: { filter: FilterValueType }) => {
  const cols: ColumnType[] = [{ id: 'defectID', label: 'ID' }]

  /** Not effective at FE, use sql joins in Backend instead */
  const mergedData: RowType[] = data.defects.map((defect) => {
    const defectType = find(data.defectTypes, {
      defectTypeIdentifier: defect.defectTypeIdentifier,
    })
    const voltageLevel = defectType
      ? find(data.voltageLevels, {
          voltageLevelIdentifier: defectType.voltageLevelIdentifier,
        })
      : {}
    const technicalObject = find(data.technicalObjects, {
      technicalObjectID: defect.technicalObjectID,
    })
    const technicalObjectType = technicalObject
      ? find(data.technicalObjectTypes, {
          technicalObjectTypeIdentifier:
            technicalObject.technicalObjectTypeIdentifier,
        })
      : {}
    return {
      id: defect.defectID,
      ...defect,
      ...defectType,
      ...voltageLevel,
      ...technicalObject,
      ...technicalObjectType,
    }
  })

  return (
    <Table
      columns={cols}
      data={mergedData.filter((obj) =>
        Object.keys(filter).every((key) => obj[key] === filter[key]),
      )}
    />
  )
}

export default Defects
