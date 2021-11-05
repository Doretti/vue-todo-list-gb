export const findTODOs = `
query getTodo {
  findTODOS {
    items {
      text
      complited
      id
    }
  }
}

`