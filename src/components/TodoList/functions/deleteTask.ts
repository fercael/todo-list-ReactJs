import { ITask } from "../interfaces/task"


export const deleteTask = (list : Array<ITask>, id: number): void => {
  list.splice(id, 1)
};