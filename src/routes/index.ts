import * as express from 'express'

export const register = ( app: express.Application ) => {
  const oidc = app.locals.oidc

  // Home
  app.get('/', ( req: any, res ) => {
    const user = req.userContext ? req.userContext.userinfo : null
    res.render('index', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Login (secured and redirects to /lizards)
  app.get('/login', oidc.ensureAuthenticated(), ( req, res ) => {
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
    res.render('lizards', { isAuthenticated: req.isAuthenticated(), user })
  })

  // Hello!
  app.get('/hello/:name', ( req, res ) => {
    const name = req.params.name
    res.send(`Hello, ${name}}!!`)
  })
}