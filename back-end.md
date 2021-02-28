# Back-end

Before continuing, make sure you've done all the [installations](https://github.com/TristanB12/postApp_workshop/blob/master/Installations.md) (at least the back-end ones)

## Step 01 - Call sign up endpoint

The first thing you need to understand is how to make a request from front-end to get the informations you want. The back has already an endpoint to sign up an user.

To make request, you can use the [axios](https://github.com/imcvampire/vue-axios) module.

Open the `front/src/views/SignupPage.vue` file and implement the `signup` method:
  - use axios module with a **post** method (**post** is used to send datas to back whereas **get** is used to only get datas)
  - the URL you must call is http://localhost:8081/auth/signup
  - send all the inputs in the body of the request
  - if needed use F12 in the web app to debug
 
## Step 02 - Login endpoint

Now that you've learned how to make a request, you will learn how to create a server with APIs and databases.

We'll use mongoose to communicate with our database and Express to build the server's APIs. You can check [this](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb) great course understand how it works.

Go into the `back/app.js` file and create a new **post** endpoint:
  - it should match `/auth/login`
  - it receives two parameters: username and password
  - it check if the password matchs with the user's one
  - it send back the user if the password is good else it send a error message

Use the **User** model wich is already created (it is defined in `back/models.User.js`).
You can inspire you from [this](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466533-verifiez-les-informations-didentification-dun-utilisateur#/id/r-6466510) part of the course. Look how the **findOne** method is used.

## Step 03 - Create post endpoint

In this step you will learn how to create a new model like the User one.

Create a new file called **Post.js** in `back/models/`.
Look how the User model is defined to create the Post model.

It should contains the following elements: 
  - `content`: the string entered by the user
  - `infos` wich contains:
      - `date`: the string of the post's date
      - `user`: the string of the username
      - `nb_likes`: the number of likes of the post

Once done, add a new **post** endpoint in `back/app.js`:
  - it should match `/post/add`
  - it receives two parameters: user and content
  - it add a new Post initialized with the parameters, `nb_likes` to 0 and `date` at current date
  - 
You can get current date by importing `Date` from `./modules/date` and calling the `Date.getCurrentDate()` method.

Look at the [save](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466398-enregistrez-et-recuperez-des-donnees#/id/r-6466369) method.


## Step 03 - Get posts endpoint

Now you start to understand how to build your server. For this last step use all what you've learned in this workshop.

You will need to create a **get** endpoint wich must match `/post/`.
It just return all the posts af the database.
Don't be affraid to search on internet.
