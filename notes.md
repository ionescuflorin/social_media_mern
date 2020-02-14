## Dependencies used: npm i
- express
   *Main backend framework*

- express-validator 
   *So when when we make our post request to our API if there's fields that need to be there that aren't. It'll raise an error.*

- bcryptjs 
   *Password encryption*

- config
   *Global variables*

- gravatar
    *Profile avatars*  

- mongoose
    *A layer which we can interact with the database*

- request 
    *A small module that will allow us to make recall http requests to another API. And the reason were installing this is for get hub repositories.We want our profiles to be able to have GitHub repositories listed on them.So we're going to make that request from our backend so that we can hide our API key and stuff like that and we can just return the repositories.*

## Dev Dependencies used: npm i -D
- nodemon
    *Hot reloader*
- concurrently
    *Run our backend and frontend at the same time*

### In order to interact with our database we need to create a model for each of our resources.
- to create a model we need to create a schema