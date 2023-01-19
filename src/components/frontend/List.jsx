import Card from "../Card.jsx";

const List = ({ items }) => {
  return (
    <div>
      {items.map(({ name, imgURL, id, description, experience }) => (
      <Card name={name} imgURL={imgURL} description={description} key={id} />
      ))}
    </div>
  );
};

export default List;
