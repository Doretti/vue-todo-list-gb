export const switchStatus = (id, status) => `
mutation switchStatus {
  updateTODO(input: {
    id: "${+id}",
    complited: ${Boolean(status)}
  }) {
    text
    complited
    id
  }
}
`