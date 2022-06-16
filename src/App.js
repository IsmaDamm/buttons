import React from 'react';

import './App.css';
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button >Default</Button>
      <Button variant={"outline"}>Default</Button>
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
      </header>
    </div>
  );
}

export default App;
