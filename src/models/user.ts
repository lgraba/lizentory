import { Knex } from 'knex'

// tslint:disable-next-line:no-var-requires
const connection = require('../database/knexfile')
// tslint:disable-next-line:no-var-requires
const pg: Knex = require('knex')(connection)

interface User {
  id: number,
  okta_id: string,
  email: string,
  description: string,
  created_at: Date,
  updated_at: Date
}

export const createUser = ( userInfo: any )  => {
  const oktaId = userInfo.sub

  // Get user based on okta_id
  pg<User>('users').where('okta_id', oktaId).first()
    .then( ( user ) => {

      if (user) {
        return user
      } else {
        // Not found; Create new user record
        pg<User>('users').insert({
          okta_id: userInfo.sub,
          email: userInfo.preferred_username,
          description: null,
          created_at: new Date()
        }).then( ( result ) => {
          return result
        })
      }

    }).catch( ( e ) => {
      // ToDo: Implement logging
      console.log('Error: ', e)
    })
}