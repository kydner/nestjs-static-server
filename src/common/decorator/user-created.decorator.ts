import { createParamDecorator } from '@nestjs/common';
export const UserCreated = createParamDecorator((data, req) => {
  return req.user;
});
