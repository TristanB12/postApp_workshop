# Front-end

Before continuing, make sure you've done all the [installations](https://github.com/TristanB12/postApp_workshop/blob/master/Installations.md) (at least the front-end ones)

## Step 01 - Login page

Create a `HeaderBar.vue` file into `/front/src/components/`. If you type `vb` in this file you should see this:

![plot](https://github.com/TristanB12/postApp_workshop/blob/master/asides/images/vuevb.png)

Then, just press enter and you have the template code of a vue component. If it doesn't work, you can copy/past the code from [this](https://github.com/TristanB12/postApp_workshop/blob/master/asides/content/TemplateCode.vue) file.

In this `HeaderBar` componenent, you can add HTML between `<template>` tags, CSS between `<style>` tags and Javascript between `<script>` tags.

Now you can write HTML and CSS to have this nice header bar (don't forget to [import](https://vuejs.org/v2/guide/components-registration.html#Local-Registration-in-a-Module-System) your `HeaderBar` component into your App.vue file):

![plot](https://github.com/TristanB12/postApp_workshop/blob/master/asides/images/headerbar.png)

When this header bar is done you can create a `LoginPage.vue` file into `/front/src/views/`. Open the `front/src/router/index.js` file and add a new route with:
  - a `/login` path
  - a name of your choice
  - a component linked to this route (the `LoginPage` one)
You can look at [this](https://router.vuejs.org/guide/#html) page to understand what is a vue route.
Now you `LoginPage` view is displayed right under the `HeaderBar` so you can write HTML and CSS code to have this result:

![plot](https://github.com/TristanB12/postApp_workshop/blob/master/asides/images/login%20page.png)


## Step 02 - Events and states

In your `App.vue` file, add the following [datas](https://v3.vuejs.org/guide/data-methods.html#data-properties):
  - `is_logged` wich is false by default
  - `username` initialized to an empty string
 
 When the user clicks on `Login` button we want to set `is_logged` to true and `username` to the string entered by the user.
 
 To get this result you have to get the username thank to the [v-model](https://vuejs.org/v2/guide/forms.html) keyword.
 
 Then you will need to use [v-on](https://vuejs.org/v2/guide/events.html) to get the **click** event and [$emit](https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event) to send the username string.
 
 now we want the header bar to display differently whether the user is logged in or not.

if he is not, the bar will display as in step one. Otherwise it should display "Hello {username}!" instead of `login` and `sign up` as in the following example:

![plot](https://github.com/TristanB12/postApp_workshop/blob/master/asides/images/headerbarloggedin.png)

In order to finish this step you will need to look [how to pass data to child component](https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props), [how to display data](https://vuejs.org/v2/guide/syntax.html) and finally [display element depending on a condition](https://vuejs.org/v2/guide/conditional.html#v-if).
