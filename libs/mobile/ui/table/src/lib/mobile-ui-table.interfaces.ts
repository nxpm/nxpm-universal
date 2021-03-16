const ucFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export class MobileUiTableColumn {
  id?: string
  label?: (item: any) => string
  className?: string
  header?: string
  headerClassName?: string
}

export class MobileUiTable {
  static column(
    id: string,
    config: Omit<MobileUiTableColumn, 'id'> = { label: (item) => item[id] },
  ): MobileUiTableColumn {
    const defaultCell = (item) => item[id]
    return {
      id,
      ...config,
      label: config.label || defaultCell,
      header: config.header || ucFirst(id),
      headerClassName: config.headerClassName || 'text-left',
    }
  }
}
