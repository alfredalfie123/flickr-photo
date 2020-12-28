export const queryString = (params: any) =>
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
