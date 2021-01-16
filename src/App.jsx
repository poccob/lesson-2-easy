import data from './data.json';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Карточки для второго урока, задание №1 (простое)</h1>
      <div className="container">
        <div className="row">
          {
            data.map((obj) => (
              <Card key={obj.image} title={obj.title} imageUrl={obj.image} description={obj.description} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
