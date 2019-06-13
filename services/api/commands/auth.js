// TODO Challenge 4 complete the command (business logic below)
import { login } from '../repositories/auth'
import { fetchUserByEmail } from '../repositories/user'

export async function authinticateLogin(email, password) {

  // Double check that the user provided you with an email and password...if not throw an error

  // Get the user info from the db from the provided email
  // Get the password info stored by the db, by using the user handle id from above

  // Check to see if the password provided by the user matches the one we have stored
  // if not throw an error, otherwise return that data.
}
