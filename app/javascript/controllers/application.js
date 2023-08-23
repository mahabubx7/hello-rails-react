import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return (<h1>Hello World!</h1>);
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );
