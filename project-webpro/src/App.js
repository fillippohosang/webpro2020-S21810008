import "./App.css";
import Card from "./Components/Card";
import {person} from './Components/Card';

function App() {
  return (
    <>
      {person.map((item) =>{
        return(
          <Card
            name={item.name}
            institution={item.institution}
            address={item.address}
            phone={item.phone}
          />
        );
      })}
    </>
  );
}
export default App;
