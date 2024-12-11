import Item from "./components/Item";
import "./App.css";
import List from "./components/List";
import {products} from './data/products';

export default function App() {
  const tab = ["toto","Ndiaye",20];
  // const nom = tab[0];
  // const prenom = tab[1];
  // const age = tab[2];
  // const [nom,prenom,age] = tab;
  // const myObj = {
  //   nom: "toto",
  //   prenom: "Ndiaye",
  //   age: 20,
  // }
  // const {nom} = myObj;
  // console.log(`My nam is ${nom} ${prenom} and im ${age}`);
  return (
    <div className="App">
      <List>
        {
          products.map(prod => (
            <Item product={prod} />
          ))
        }
      </List>
    </div>
  )
}
