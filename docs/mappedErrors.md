# mapErrors

src/routes/auth.ts

```ts
const mapErrors = (errors: Object[]) => {
  // let mappedErrors: any = {};
  //     errors.forEach((e: any) => {
  //       const key = e.property;
  //       const value = Object.entries(e.constraints)[0][1];
  //       mappedErrors[key] = value;
  //     });
  
  return errors.reduce((prev:any, err:any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1]
    return prev
  }, {})
}
```

```ts
errors = {
  email: 'Must be a valid email address',
  username: 'Must be at least 3 characters long' 
}
```
