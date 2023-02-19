export function People({ propName }) {
  return (
    <div className="App">
      {propName.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>
              {id} - {name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
