import { Injectable } from '@nestjs/common';
import { ApplicationService } from 'src/application/seedwork/service';
import {
  SampleFindAllRequest,
  SampleFindAllResponse,
} from './sample-find-all.dto';

@Injectable()
export class SampleFindAllService
  implements ApplicationService<SampleFindAllRequest, SampleFindAllResponse>
{
  private readonly USERS = [
    {
      id: 1,
      name: 'name 1',
    },
    {
      id: 2,
      name: 'name 2',
    },
    {
      id: 3,
      name: 'name 3',
    },
  ];

  handle(request: SampleFindAllRequest): SampleFindAllResponse {
    let users = this.USERS.filter((user) => user.name === request.userName);
    if (request.userId) {
      users = users.filter((user) => user.id === request.userId);
    }

    return {
      users: users.map((user) => {
        return {
          userName: user.name,
          userId: user.id,
        };
      }),
    };
  }
}
