import { Test, TestingModule } from '@nestjs/testing';
import { SampleFindAllService } from './sample-find-all.service';

describe('SampleFindAllService', () => {
  let service: SampleFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleFindAllService],
    }).compile();

    service = module.get<SampleFindAllService>(SampleFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
