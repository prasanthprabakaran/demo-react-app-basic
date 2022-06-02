import './App.css';

function App() {
  //JS starts (logic part)
  const students = [
    {
      name: "Prasanth",
      pic: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Pet1",
      pic: "https://images.unsplash.com/photo-1601613107757-fd603f3c38ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      name: "Pet2",
      pic: "https://images.unsplash.com/photo-1553597736-793625d3914b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  // const time = 30;
  // JS ends
  // JSX starts(view part)
  return (
    <div className='App'>
      {/* Components + Loop*/}
      {students.map((students)=>(
        <Message name={students.name} pic={students.pic} />
      ))}
      
      {/* {names.map((name)=> (
        <Welcome name={name} />
      ))}*/}
    </div>
  );
  // JSX ends
}

// props  - properties - pass arguments to components

export default App;

// Create Component
// function -> Component
// 1. First letter Capital
// 2. It should one JSX element

// Defined the component

function Welcome(props) {
  console.log(props);
  return(
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

function Message({pic, name}) {
  return (
  <div>
    <img className='profile-pic' src={pic} alt={name} />
    <h1>Hello, {name}</h1>
  </div>
  );
  
}

// <> </> - React fragment - Helps in styling & performance

// {} - template syntax

// JSX - Javascript XML

// win + . -> emoji