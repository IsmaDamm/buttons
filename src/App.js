import React from 'react';

import './App.css';
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
        <h1>Buttons</h1>
        <div className='container'></div>
          <div className='buttons'>
          <p>{"<Button />"}</p>
            <Button >Default</Button>
            <p>{"<Hover & Focus />"}</p>
            <Button variant={"outline"}>Default</Button>
          </div>
          <Button variant={"text"}>Default</Button>
          <Button shadow={"disableShadow"}>Default</Button>
          <Button disabled={"disable"}>Default</Button>
          <Button variant="text" disabled={"disable"}>Default</Button>
          <Button color={"default"}>Default</Button>
          <Button color={"primary"}>Default</Button>
          <Button color={"secondary"}>Default</Button>
          <Button color={"danger"}>Default</Button>
          <Button size={"sm"}>Default</Button>
          <Button size={"md"}>Default</Button>
          <Button size={"lg"}>Default</Button>
    </div>
  );
}

export default App;
