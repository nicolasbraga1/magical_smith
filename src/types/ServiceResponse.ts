type ServiceResponseError = {
  status: 'UNAUTHORIZED' | 'INVALID_DATA',
  data: { message: string }
};

type ServiceResponseSuccessful<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccessful<T>; 