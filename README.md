# ToDo-APP - lab 31 10/31/2022

A web application that involves us refactoring another teams code, modularize code and use [Mantine](https://mantine.dev/) to style. This app will use react Context. Context provides a means of passing state down the component tree through a Provider/Consumer relationship.

[phase1]()
<!-- [phase2]()
[phase3]()
[phase4]() -->

## Setup

- npx create-react-app todo-app
- remove/replace src folder in basic react app 
- bring in demo code
- npm i  <!-- bring in demo code/src folder -->
- push to github
  - git remote add origin <https://github.com/Junyoungson808/todo-app.git>

## Technical Requirements

Implement the React context API for defining settings across the entire application.

````
Create a context for managing application display settings and provide this at the application level.
Display or Hide completed items (boolean).
Number of items to display per screen (number).
Default sort field (string).
Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
Consume and utilize context values throughout your components
Show a maximum of a certain number of items per screen in the <List /> component
Use the Mantine Pagination component to let the users navigate a long list of items
Hide completed items in the list (the ability to show will be added in a later lab)
````

## ![UML](./todo.png)
