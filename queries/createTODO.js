export const createTODO = (text) => `
mutation addTodo {
  createTODO(input: { text: "${text}", complited: false }) {
    text
    complited
    id
  }
}
`