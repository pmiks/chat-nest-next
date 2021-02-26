import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { GroupDTO, NewGroupDTO } from './chatgroup.dto';
import { UsersEntity } from 'src/users/users.entity';
import { UserDTO } from 'src/users/users.dto';

@Injectable()
export class ChatGroupService {
  constructor(
    @InjectRepository(ChatGroupEntity)
    private chatGroup: Repository<ChatGroupEntity>,
    @InjectRepository(UsersEntity) private usersEntity: Repository<UsersEntity>,
  ) {}
  async addNewGroup(uId: string[], groupName: string): Promise<GroupDTO> {
    const users = await this.usersEntity.find({
      select: ['username', 'name'],
      where: uId.map((i) => ({ id: i })),
    });
    console.log;
    const newGroup = await this.chatGroup.create({
      groupName,
      users,
    });
    await this.chatGroup.save(newGroup);
    return newGroup;
  }

  async getUsersInGroup(idGroup: string): Promise<UserDTO[] | null> {
    return await this.usersEntity.find({
      //      where: { id: idGroup },
      relations: ['chatGroup'],
    });
  }

  async getUserGroups(uId: string): Promise<GroupDTO[]> {
    return this.chatGroup.find();
  }
  async getAllGroups(): Promise<GroupDTO[]> {
    return this.chatGroup.find();
  }

  async getMyGroups(id: string): Promise<GroupDTO[]> {
    return this.chatGroup.find({
      where: { users: { id: id } },
      relations: ['users', 'chatGroup'],
    });
  }
}
