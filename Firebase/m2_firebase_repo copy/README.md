# Firebase-React

React Demo Using Firebase

## Table of Content

- [Firebase-react](#firebase-react)
  - [Table of Content](#table-of-content)
  - [Deployment](#deployment)
  - [Environment Setup](#environment-setup)

## Deployment

Source: https://create-react-app.dev/docs/deployment/#firebase

### Steps

1. `npm install -g firebase-tools` (or `sudo npm install -g firebase-tools`)
2. `firebase login`
3. `firebase init`
4. Choose -> Hosting: Configure and deploy Firebase Hosting sites
5. Choose existing project (if failed, run `firebase login --reauth`)
6. Public directory ? -> build
7. Configure as a single-page app ? -> y
   Set up automatic builds and deploys with GitHub? -> N
8. Add the below in the firebase.json

   ```{
   "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
   }
   ```

   Exmaple available [here](https://github.com/liam-rocket/rca-demo/blob/main/Firebase/m2_firebase_repo%20copy/firebase.json).

9. `npm run build`
10. `firebase deploy`

## useContext Reading Order

## Code Structure (default)

Below is the setup of the useContext example in codebase:

```bash
│
├── /src
│   ├── /api
│   │   └── /authentication
│   │       └── index.js
│   │
│   ├── /contexts
│   │   └── authContext.jsx
│   │
│   └── /hooks
│       └── useAuth.ts
│
├── index.js
└── App.js
```

The entry point of the context is set in index.js - that is where the main main react component is usually mounted/rendered onto your “root” element(which you mark in your html).

“App” is what people tend to call the file which contains the main logic of your file, or in React case, the main component, the one that represents your entire application/web-site. “App.js” would usually refer to just that, your main component, aka, your React app.

Because the AuthProvider wraps App in index.js, everything under / inside <App /> will have access to the context.

```bash
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
```
