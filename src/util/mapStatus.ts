import { ServiceResponseErrorType, ServiceResponseSuccessType } from '../types/ServiceResponse';

function mapStatusHTTP(
  type: ServiceResponseErrorType | ServiceResponseSuccessType,
): number {
  const statusHTTPMap: Record<ServiceResponseErrorType | ServiceResponseSuccessType, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    CREATED: 202,
  };

  return statusHTTPMap[type] || 500;
}

export default mapStatusHTTP;