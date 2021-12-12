// types
import type { ApiUsersResponse } from 'store/api/v1/users/types'

const users = [
  {
    id: 1,
    name: 'Michael',
    email: 'michael@test.example.com',
  },
  {
    id: 2,
    name: 'James',
    email: 'james@test.example.com',
  },
]

export const usersFixture: ApiUsersResponse = {
  total: users.length,
  result: users,
}
