import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Eat', 'work', 'sleep'];

const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', {key: index}, task))
);

ReactDOM.render(element, document.getElementById('root'));
