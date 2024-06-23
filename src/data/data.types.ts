import data from './ZADANIE_DATA.json'

export type investmentType = (typeof data.investmentRequests)[0]

const voltageLevels = [
  ...data.voltageLevels.map((item) => item.voltageLevelIdentifier),
] as const

const objectTypes = [
  ...data.technicalObjectTypes.map(
    (item) => item.technicalObjectTypeIdentifier,
  ),
] as const

const defectTypes = [
  ...data.defectTypes.map((item) => item.defectTypeIdentifier),
] as const

export type voltageType = (typeof voltageLevels)[number]
export type objectTypesType = (typeof objectTypes)[number]
export type defectTypesType = (typeof defectTypes)[number]
