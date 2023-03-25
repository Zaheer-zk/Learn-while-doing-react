// // <h1>Hello World, from React
// const header = React.createElement('h1', {}, 'Hello World, from React');

//<div><h1>Heading 1</h1><h2>Heading 2</h2></div>
const heading1 = React.createElement(
  'h1',
  {
    id: 'heading1',
  },
  'Heading 1'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
  },
  'Heading 2'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(header);
root.render(container);
