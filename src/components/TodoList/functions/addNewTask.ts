export  const addNewTask = (list: {id: number, text: string, status: boolean}[], id: number, text: string, status: boolean) => {
  list.push({
    id,
    text,
    status,
  })
}