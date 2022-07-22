# Lizentory

A simple lizard-leasing inventory for the leading lizard-leasers of the world!

## Description

This is a TS Express-based API application meant for exploration and learning.

## Getting started

```
> cp local.env .env
> cp local.okta.env .okta.env
```
Fill out your environment variables in these two files. You can sign up for an [Okta developer account](https://www.okta.com/developer/signup).

```
> npm run dev
```
And then navigate to http://localhost:8080 !

## ToDo

1. Database Configuration (PostgreSQL)
2. Implement POST /lizards endpoint
3. Auto-documentation (Swagger?)
4. Dockerize + docker-compose.yml
5. Get rid of EJS in favor of VueJS because EJS sucks
