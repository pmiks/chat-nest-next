import { Test, TestingModule } from '@nestjs/testing';
import { ChatgroupController } from './chatgroup.controller';

describe('ChatgroupController', () => {
  let controller: ChatgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatgroupController],
    }).compile();

    controller = module.get<ChatgroupController>(ChatgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
