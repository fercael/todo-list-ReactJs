import { ITask } from "../interfaces/task"


export const generateTask = (list : Array<ITask>, text: string): {} => {
  return {
    id: list.length + 1,
    text: text,
    status: false
  }
}