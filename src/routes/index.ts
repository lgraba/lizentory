import * as express from 'express'
import { createUser } from '../models/user'

// ToDo: Create some sort of authentication-addition middleware
//  that updates user info accordingly upon authentication insertion points

export const register = ( app: express.Application ) => {
  const oidc = app.locals.oidc

  // Home
  app.get('/', ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    if (user) {
      createUser(user)
    }
    res.render('index', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Login (secured and redirects to /lizards)
  app.get('/login', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    if (user) {
      createUser(user)
    }
    res.redirect('/lizards')
  })

  // Logout
  app.get('/logout', ( req: any, res ) => {
    req.logout()
    res.redirect('/')
  })

  // Lizards (secured)
  app.get('/lizards', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    if (user) {
      createUser(user)
    }
    res.render('lizards', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Lizards POST (secured)
  app.post('/lizards', oidc.ensureAuthenticated(), ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    if (user) {
      createUser(user)
    }
    res.render('lizards', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Hello!
  app.get('/hello/:name', ( req, res ) => {
    const name = req.params.name
    res.send(`Hello, ${name}}!!`)
  })
}