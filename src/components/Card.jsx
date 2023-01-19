const Card = ({ name, description, url, imgURL }) => {
  return (
    <div>
      <a href={url}>
        <div>
          <img src={imgURL} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;