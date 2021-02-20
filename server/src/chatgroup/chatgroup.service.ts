import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatGroupEntity } from './chatgroup.entity';
import { GroupDTO, NewGroupDTO } from './chatgroup.dto';
import { UsersEntity } from 'src/users/users.entity';

@Injectable()
export class ChatGroupService {
  constructor(
    @InjectRepository(ChatGroupEntity)
    private chatGroup: Repository<ChatGroupEntity>,
    @InjectRepository(UsersEntity) private usersEntity: Repository<UsersEntity>,
  ) {}
  async addNewGroup(uId: string[], data: NewGroupDTO): Promise<GroupDTO> {
    const user = await this.usersEntity.find({
      select: ['username', 'name'],
      where: uId.map((i) => ({ id: i })),
    });
    console.log;
    const newGroup = await this.chatGroup.create({
      ...data,
      users: user,
    });
    await this.chatGroup.save(newGroup);
    return newGroup;
  }

  async getUserGroups(uId: string): Promise<GroupDTO[]> {
    return this.chatGroup.find();
  }
}
