# Lizentory

A simple lizard-leasing inventory for the leading lizard-leasers of the world!

## Description

This is a TS Express-based API application meant for exploration and learning.

## Getting started

```
> docker compose up
```
This will start up the web and postgres services. Go ahead and navigate to http://localhost:8080 !

This application utilizes Okta authentication. You can sign up for an [Okta developer account](https://www.okta.com/developer/signup).

## ToDo

1. Create lizards model
2. Implement /lizards endpoints
3. Auto-documentation (Swagger?)
4. Get rid of EJS in favor of VueJS because EJS sucks
5. Utilize TS for migrations, seeds, base knexfile?
6. Figure out models/index.ts importing and exporting pattern
7. Remove all requires and replace with importants? es6 recommended linting pattern
