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
