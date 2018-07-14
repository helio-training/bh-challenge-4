// TODO Challenge 4
import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function login(userHandle) {
  // Complete the query to retrieve the user data based on username
  const query = sql`select * from passhash where user_handle = ${userHandle};`

  const userAuths = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle,
    passhash: row.passhash
  }))

  return userAuths[0]
}
