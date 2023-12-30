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
- try to find user
