const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React.
The setup
When getting started with React, you should use the simplest setup possible: an HTML file which imports the React and the ReactDOM libraries using script tags.

The Virtual DOM

The Virtual DOM is the heart of React. It allows developers to write presentation logic in one place, and also allows React to optimize changes to the browser DOM. In terms of MVC, think of the browser DOM as the view, the Virtual DOM as the model, and React as the controller.

Having presentation logic in one place frees developers from having to keep track of data and update HTML manually. When your component needs to update, it’s simply re-rendered and React handles updating the DOM.

Properties and State

Because of the Virtual DOM, you don’t need to subscribe to events manually. Instead, properties are passed down to child components, and when they change, your component is re-rendered. Components also have internal state, and when this changes, your component is also re-rendered.

In this sense, components are reactive, meaning they respond to property and state changes without any manual setup. Code ends up being more declarative, simpler to test, and less error prone.

One-Way Data Bindings

React limits interaction between components by only allowing you to set properties of other child components. You pass callback functions to child components to listen to changes, and then the parent component updates it’s state, and is re-rendered along with its children.

In this sense, it is similar to views and controllers. The main difference is the hierarchy and that individual callbacks are passed to children, instead of the controller or an interface or proxy. This allows the component to have no interface dependencies.
            
            
            `,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. 
            
           1. First create a directory for your new application and navigate into it:
           2.Use the npm init command to create a package.json file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is index.js). For now, just accept the defaults:
           3.Now install Express in the myapp directory and save it in the dependencies list of your package.json file.
           4.npm install express
           5.To use the Express library you call the require() function in your index.js file to include it in your application. Create this file now, in the root of the "myapp" application directory.
            
            
            
            `,
        ]
    },       
];

export default articles;