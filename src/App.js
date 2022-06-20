import React from 'react';

import './App.css';
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
        <h1>Buttons</h1>
        <h4>By Ismael El hassouni</h4>
        <div className='buttons'>
          <p>{"<Button />"}</p>
          <Button >Default</Button>
        </div>
        <div className='buttons'>
          <p>{"<Button variant= 'outline' />"}</p>
          <Button variant={"outline"}>Default</Button>
        </div>
        <div className='buttons'>
        <p>{"<Button variant= 'text' />"}</p>
          <Button variant={"text"}>Default</Button>
        </div>
        <div className='buttons'>
        <p>{"<Button disableShadow />"}</p>
          <Button shadow={"disableShadow"}>Default</Button>
        </div>
        <div className='container'>
          <div className='buttons'>
            <p>{"<Button disabled />"}</p>
            <Button disabled={"disable"}>Default</Button>
          </div>
          <div className='buttons'>
            <p>{"<Button variant= 'text' disabled />"}</p>
            <Button variant="text" disabled={"disable"}>Default</Button>
          </div>
        </div>
        <div className='container'>
          <div className='buttons'>
            <p>{"<Button size= 'sm' />"}</p>
            <Button size={"sm"}>Default</Button>
          </div>
          <div className='buttons'>
            <p>{"<Button size= 'md' />"}</p>
            <Button size={"md"}>Default</Button>
          </div>
          <div className='buttons'>
            <p>{"<Button size= 'lg' />"}</p>
            <Button size={"lg"}>Default</Button>
          </div>
        </div>
        <div className='container'>
          <div className='buttons'>
          <p>{"<Button color= 'default' />"}</p>
            <Button color={"default"}>Default</Button>
          </div>
          <div className='buttons'>
          <p>{"<Button color= 'primary' />"}</p>
            <Button color={"primary"}>Default</Button>
          </div>
          <div className='buttons'>
          <p>{"<Button color= 'secondary' />"}</p>
            <Button color={"secondary"}>Secondary</Button>
          </div>
          <div className='buttons'>
          <p>{"<Button color= 'danger' />"}</p>
            <Button color={"danger"}>Danger</Button>
          </div>        
        </div>
    </div>
  );
}

export default App;
