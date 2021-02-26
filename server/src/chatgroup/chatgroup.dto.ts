import { UserDTO } from 'src/users/users.dto';

export interface NewGroupDTO {
  groupName: string;
  users?: string[];
}

export interface GroupDTO {
  groupName: string;
  users: UserDTO[];
  id: string;
  createDate: Date;
  updateDate: Date;
}
