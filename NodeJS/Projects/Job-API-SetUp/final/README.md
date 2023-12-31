#### Project SetUp

In order to spin up the Project, in the create .env with these two variables, with your own values.

MONGO_URL
JWT_SECRET

after that run this command

```bash
npm install && npm start
```

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register Routes

- Validate - name, email, password - with mongoose
- Hash password (with bcrypjs)
- save User
- Generate token
- Send Response With Token

#### Mongoose Errors

- Validation Error
- Duplicate Error

#### Login Route

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Password
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors (if user can not provide info.)
- Duplicate (Email)
- Cast Error

#### Security

- helmet (Most popular Package for secure transaction)
- cors (cross origin resource sharing | mechanism )
- xss-clean (sensitized the user input )
- express-rate-limit 
