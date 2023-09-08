# Deployment

Source: https://create-react-app.dev/docs/deployment/#firebase

## Steps

1. `npm install -g firebase-tools` (or `sudo npm install -g firebase-tools`)
2. `firebase login`
3. `firebase init`
4. Choose -> Hosting: Configure and deploy Firebase Hosting sites
5. Choose existing project (if failed, run `firebase login --reauth`)
6. Public directory ? -> build
7. Configure as a single-page app ? -> y
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

9. `npm run build`
10. `npm run deploy`
