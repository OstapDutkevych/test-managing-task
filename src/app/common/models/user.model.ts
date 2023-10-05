export interface User {
  id: string;
  name: string | null;
  assignedTaskId?: string | null;
}

export interface UserFormAdd {
  name: string;
}
