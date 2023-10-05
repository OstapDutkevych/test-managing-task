export interface Task {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  modifiedAt?: Date;
  state: 'in-queue' | 'in-progress' | 'done';
  assignedUserId?: string | null;
}

export interface TaskFormAdd {
  name: string;
  description: string;
}


export enum StateTaskEnum {
  queue = 'in-queue',
  progress = 'in-progress',
  done = 'done'
}
