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
