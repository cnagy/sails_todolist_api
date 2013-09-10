# Sails Todolist API

Simple Todolist API for mobile devices. Includes device registration and of course the Todolist management :)

## Project Setup

Just clone and lift the Sails:

`git clone https://github.com/cnagy/sails_todolist_api.git`

`cd sails_todolist_api`

`npm install`

`sails lift`

## Documentation

### Device registration (REST)

GET 	/client/me
_Returns the registered device data._
>Required header params:
>`x-api-token`

POST 	/client
_Registers a new device._
>Required body params:
>`token`

PUT 	/client
_Updates the registered device._
>Required header params:
>`x-api-token`
>Required body params:
>`token`

## License

Sails Todolist API is distributed under Mozilla Public License, Version 2.0