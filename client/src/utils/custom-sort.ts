type CustomSortOptions = {
  data: any[] | undefined
  sortBy: string[]
  sortField: string
}

function customSort({ data, sortBy, sortField }: CustomSortOptions) {
  const sortByObject: Record<string, number> = sortBy.reduce(
    (acc, curr, index) => ({ ...acc, [curr]: index }),
    {},
  )
  return data?.sort(
    (a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]],
  )
}

export default customSort
