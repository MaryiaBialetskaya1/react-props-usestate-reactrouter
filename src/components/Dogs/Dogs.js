export function Dogs({ dogs }) {
  return (
    <div>
      <h1>DOGS</h1>
      {dogs.map((item) => {
        const { id, image } = item;
        return (
          <div key={id}>
            <h1>{id}</h1>
            <img src={image} alt="dogs" />
          </div>
        );
      })}
    </div>
  );
}
