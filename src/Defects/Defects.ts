import { ColumnType, RowType } from '../Table'
import { data } from '../data'
import find from 'lodash/find'

/** Not effective at FE, use sql joins in Backend instead */
export const defectsFullData: RowType[] = data.defects.map((defect) => {
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

export const defectColumns: ColumnType[] = [
  { id: 'defectID', label: 'ID' },
  { id: 'defectTypeName', label: 'Typ nedostatku' },
  { id: 'technicalObjectName', label: 'Nazov objektu' },
  { id: 'technicalObjectTypeName', label: 'Typ objektu' },
  { id: 'voltageLevelName', label: 'Napatovy level' },
  { id: 'defectState', label: 'Stav' },
]
