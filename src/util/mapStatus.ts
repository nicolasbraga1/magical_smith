export default (status: string): number => {
  const mapStatus: Record<string, number> = {
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INVALID_DATA: 400,
  };

  return mapStatus[status];
};