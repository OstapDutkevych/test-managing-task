import {StateTaskEnum, Task} from "../../models/task.models";

export const TASKS: Task[] = [
  {
    id: '1',
    name: 'radio button',
    description: 'create radio button',
    createdAt: new Date(),
    modifiedAt: new Date(),
    state: StateTaskEnum.queue,
    assignedUserId: '2'
  },
  {
    id: '2',
    name: 'checkbox button',
    description: 'create checkbox button',
    createdAt: new Date(),
    modifiedAt: new Date(),
    state: StateTaskEnum.queue,
    assignedUserId: '1'
  },
  {
    id: '3',
    name: 'button',
    description: 'create button',
    createdAt: new Date(),
    modifiedAt: new Date(),
    state: StateTaskEnum.queue,
    assignedUserId: '4'
  },
  {
    id: '4',
    name: 'input',
    description: 'create input',
    createdAt: new Date(),
    modifiedAt: new Date(),
    state: StateTaskEnum.queue,
    assignedUserId: '3'
  },
];
