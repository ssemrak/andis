import React, { FC } from 'react'
import * as styles from './Table.styles'

export type ColumnType = {
  id: string
  label: string
}

export type RowType = {
  [key: string]: any
}

export type TableProps = {
  columns: ColumnType[]
  data: RowType[]
  onSelectionChanged?: (selectedIds: string[]) => void
  onRowClick?: (id: string) => void
  selectedRows?: string[]
}

const Table: FC<TableProps> = ({
  columns,
  data,
  onSelectionChanged,
  onRowClick,
  selectedRows,
}) => {
  const handleRowClick = (id: string) => {
    const newSelection = selectedRows?.includes(id)
      ? selectedRows.filter((r) => r !== id)
      : [...(selectedRows ?? []), id]
    onSelectionChanged && onSelectionChanged(newSelection)
    onRowClick && onRowClick(id)
  }

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
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(row.id)}
              css={[
                styles.row,
                (onSelectionChanged || onRowClick) && styles.pointer,
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
