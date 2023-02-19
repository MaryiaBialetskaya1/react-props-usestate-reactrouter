export function Birds({ birds }) {
  return (
    <div>
      {birds.map((item) => {
        const { id, image } = item;
        return (
          <div>
            <h1>{id}</h1>
            <img src={image} alt="birds" />
          </div>
        );
      })}
    </div>
  );
}
