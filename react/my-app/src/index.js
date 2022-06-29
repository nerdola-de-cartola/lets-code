import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/functional-component/Hello';
import Fapp from './components/functional-component/Fapp';
// import App from './components/object-components/App';
// import App2 from './components/object-components/App2';
// import App3 from './components/object-components/App3';
// import App4 from './components/object-components/App4';
// import App5 from './components/object-components/App5';
// import {List, Item} from './components/object-components/List';
// import Form from './components/object-components/Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App>
    </App> */}

    {/* <App2 title='Hello World'>
      Today is gonna be a great day
    </App2> */}

    {/* <App2 title='Hello Again'>
      Tomorrow is gonna be a better day
    </App2> */}

    {/* <App3>
    </App3> */}

    {/* <App4>
    </App4> */}

    {/* <App5>
    </App5> */}

    {/* <List>
      Text
      <Item key={999} id={999} complete={false}>
        Teste1
      </Item>
      <Item key={998} id={998} complete={true}>
        Teste2
      </Item>
    </List> */}

    {/* <Form>
    </Form> */}

    {/* <Hello text='Hello World!'>
      <h2>Hello again!</h2>
    </Hello> */}

    <Fapp>
    </Fapp>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
