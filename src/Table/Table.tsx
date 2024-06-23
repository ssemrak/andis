import React, { FC, useEffect, useState } from 'react'
import * as styles from './Table.styles'

export type ColumnType = {
  id: string
  label: string
}

export type RowType = {
  id: string
  [key: string]: any
}

export type TableProps = {
  columns: ColumnType[]
  data: RowType[]
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const handleRowClick = (id: string) => {
    setSelectedRows(
      selectedRows?.includes(id)
        ? selectedRows.filter((r) => r !== id)
        : [...selectedRows, id],
    )
  }

  useEffect(() => {
    setSelectedRows([])
  }, [data])

  return (
    <div css={styles.table}>
      <table css={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row.id)}
              css={[
                styles.row,
                selectedRows?.includes(row.id) && styles.rowSelected,
              ]}
            >
              {columns.map((column) => (
                <td key={column.id} css={styles.cell}>
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
