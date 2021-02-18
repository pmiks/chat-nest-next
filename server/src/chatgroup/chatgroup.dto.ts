import { UserDTO } from 'src/users/users.dto';

export interface NewGroupDTO {
  chatGroupName: string;
  users?: string[];
}

export interface GroupDTO {
  chatGroupName: string;
  users: UserDTO[];
  id: string;
  createDate: Date;
  updateDate: Date;
}
