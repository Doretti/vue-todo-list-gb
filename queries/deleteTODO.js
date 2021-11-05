export const deleteTODO = (id) => `
mutation deleteTODO {
  deleteTODO(input: {
    id: "${id}"
  }) {
    text
    complited
    id
  }
}
`