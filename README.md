Explain folder structure

```bash
src
├── App.tsx: #create config route in here
├── apis: #contatin api call and type of response data.
│   ├── types
│   │   └── user.ts
│   └── user.ts
├── components: #reused component in whole app
│   ├── CommonButton
│   │   ├── common-button.scss
│   │   └── index.tsx
│   └── CommonInput
│       ├── common-input.scss
│       └── index.tsx
├── constants: #constant variables in our app. Don\'t hard code :D 
├── context: #Context for our app. (useContext)
├── guards #Guard for our application
│   └── AuthGuard.tsx
├── helpers #utility function.
│   ├── axiosClient.ts
│   ├── dateUtils.ts
│   └── i18n.ts
├── hooks # reused hooks
├── index.scss #global scss
├── index.tsx 
├── locales #config mutil language
│   ├── en.json
│   └── vi.json
├── pages #our page :)
│   ├── Admin 
│   │   ├── UserManagement
│   │   │   └── index.tsx
│   │   └── components #if need to create a huge page can separate to multi component
│   ├── Auth
│   │   ├── Login
│   │   │   └── index.tsx
│   │   └── Signup
│   │       └── index.tsx
│   └── Home
│       └── index.tsx
├── redux # for redux only. Can replace for any statemanagement library
├── scss
│   └── variables.scss # variable scss
```
