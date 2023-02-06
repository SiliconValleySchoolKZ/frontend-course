import Content from "./components/Content";
import Fruits from "./components/Fruits";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const info = {
    name: "Джон",
    age: "22",
    gender: "мужчина",
    phrase: "Я изучаю реакт",
    fruits: ["яблоко", "банан", "апельсин", "груша"],
  };
  return (
    <div>
      <Header name={info.name} />
      <Content age={info.age} gender={info.gender} />
      <Total info={info} />
      <Fruits favFruits={info.fruits} />
    </div>
  );
};

export default App;
