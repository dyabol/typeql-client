import gql from 'graphql-tag';

export const addUserRoleMutation = gql`
  mutation AddUserRole($userId: ID!, $role: String!) {
    createUserMeta(data: { userId: $userId, value: $role, key: "role" }) {
      id
    }
  }
`;
