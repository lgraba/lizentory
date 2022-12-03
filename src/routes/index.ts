import * as express from 'express'
import Lizard from '../models/lizard'
import User from '../models/user'

// ToDo: Create some sort of authentication-addition middleware
//  that updates user info accordingly upon authentication insertion points

export const register = ( app: express.Application ) => {
  const oidc = app.locals.oidc

  // Home
  app.get('/', ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    res.render('index', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Login (secured and redirects to /lizards)
  app.get('/login', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null

    // Find or create user
    if (user) {
      User.findOrCreate({
        where: {
          okta_id: user.sub,
          email: user.preferred_username
        }, defaults: {
          description: 'A brand new user! Wow'
        }
      })
    }

    res.redirect('/lizards')
  })

  // Logout
  app.get('/logout', ( req: any, res ) => {
    req.logout()
    res.redirect('/')
  })

  // Lizards GET (secured)
  app.get('/lizards', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null

    Lizard.findAll()
      .catch((error: any) => {
        console.log(`Problem getting lizards: ${error}`)
      })
      .then((lizards: typeof Lizard[]) => {
        console.log('lizards', lizards)
        res.render('lizards', { isAuthenticated: req.isAuthenticated(), user, lizards })
      })
  })

  // Lizards GET (secured)
  app.get('/lizards/:id', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null

    Lizard.findByPk(Number(req.params.id))
      .catch((error: any) => {
        console.log(`Problem getting lizard: ${error}`)
      })
      .then((lizard: typeof Lizard) => {
        console.log('lizard', lizard)
        const lizards = lizard ? [lizard] : null
        res.render('lizards', { isAuthenticated: req.isAuthenticated(), user, lizards })
      })
  })

  // Lizards POST (secured)
  app.post('/lizards', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    res.render('lizards', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Users GET
  app.get('/users/:id', async ( req, res ) => {
    User.findByPk(Number(req.params.id))
      .catch((error: any) => {
        console.log(`Problem getting user: ${error}`)
      })
      .then((user: typeof User) => {
        console.log('user', user)
        res.json({data: user})
      })
  })
}