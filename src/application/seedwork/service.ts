import {
  ApplicationServiceRequest,
  ApplicationServiceResponse,
} from './service.dto';

export interface ApplicationService<
  TRequest extends ApplicationServiceRequest,
  TResponse extends ApplicationServiceResponse,
> {
  handle(request: TRequest): TResponse;
}
