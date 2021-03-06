# VSB-React-Portfolio
Using React to create an updated portfolio of my work.
My task was to create a portfolio using my new React skills, which will help set me apart from other developers whose portfolios don’t use the latest technologies. 
## Live App
https://vbproglobyte.github.io/React-Portfolio/

## Tech

    - GitHub pages
    - React
    - npm
    - node

## Installation
    
    -- npm i
    -- npm i gh-pages

## Usage - and prep
### Add Homepage to package.json

First we need to open the `package.json` file for the client and add an entry called `homepage`. The value of `homepage` should have `{username}` as your GitHub username, and `{repo-name}` as the name of the GitHub repository you created: 

```
https://{username}.github.io/{repo-name}
```

Your updated `package.json` should look something like this:

```text
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://myusername.github.io/my-app",
```

### Install gh-pages and Add Deploy Scripts

To publish your app, you need to install the `gh-pages` npm package. Additionally, you'll need to add a few more scripts to `package.json`. Start by simply adding the `gh-pages` dependency:

```sh
npm i gh-pages
```
**Note:** You will see another package manager called `yarn` suggested by `create-react-app`. `yarn` is very similar to `npm`, but for the sake of consistency we will stick with `npm`.

Now lets add the `predeploy` and `deploy` scripts to `package.json`. 

```text
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

### Launch with React
    - Predeploy [ npm run predeploy ]
    - Deploy [ npm run deploy ]
### Launch Locally
    - npm start

## Check Project Settings

Go to the GitHub project settings by clicking the link shown in the following image:

![image](https://user-images.githubusercontent.com/83515305/150202639-4b039e9a-e2ef-40d1-800b-14f91f6c0250.png)


Check that your source branch is `gh-pages`, as shown in the following image:
**Note:** Keep in mind that your page may take a minute or two to deploy. At first, the notification will appear in a blue color while being published.

Finally, let's refresh the page to make sure that the page has been published. This notification will appear in green, as shown in the following image:

![image](https://user-images.githubusercontent.com/83515305/150202777-15ad10fe-5cb9-4641-81e1-9a2b161b490b.png)


Click on the URL to check that everything looks good.

## REF

![screencapture-vbproglobyte-github-io-React-Portfolio-2022-01-19-13_39_41](https://user-images.githubusercontent.com/83515305/150202054-fd0add05-09ea-47a0-847b-dd27a02f6174.png)


### npm package and node_modules issues 
https://stackoverflow.com/questions/37888057/npm-init-doesnt-create-package-json#:~:text=This%20is%20because%20it%20overwrites%20the%20existing%20package.json,init%2A%2A%20it%20works%20fine%20and%20create%20package.json%20file.

https://stackoverflow.com/questions/21250849/npm-install-doesnt-create-node-modules-directory

### react
https://create-react-app.dev/docs/deployment/#github-pages

https://reactjs.org/

https://create-react-app.dev/docs/code-splitting/

https://create-react-app.dev/docs/deployment/

### Credits 
thank you to MrTofuuu for helping with merge and deploy issues!
