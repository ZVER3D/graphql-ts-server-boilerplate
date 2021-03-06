import { Middleware } from '../types/graphql-utils';

export const isAuthenticated: Middleware = async (resolver, parent, args, context, info) => {
  if (!context.req.session || !context.req.session.userId) {
    return null;
  }
  return resolver(parent, args, context, info);
};
