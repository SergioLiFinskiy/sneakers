import React from "react";

function CardOfMenu({ img, title, onClickCard, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(true);
  const [isLike, setIsLike] = React.useState(true);

  const onClickPlus = () => {
    onPlus({ img, title, price });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="card">
      <img
        src={isLike ? "../icons/ic_like.svg" : "../icons/ic_like_2.svg"}
        className="favourite"
        onClick={onClickLike}
        alt="ic_like"
      />
      <div className="sneakers">
        <img src={img} className="sneakers-img" />
        <div className="sneakers-description">{title}</div>
      </div>
      <div className="coast">
        <div>
          <h4>ЦЕНА:</h4>
          <p>{price}</p>
        </div>
        <button onClick={onClickCard}>
          <img
            src={
              isAdded ? "../icons/ic_plus.svg" : "../icons/ic_galochka_2.svg"
            }
            className="favourite"
            onClick={onClickPlus}
            alt="ic_plus"
          />
        </button>
      </div>
    </div>
  );
}
export default CardOfMenu;
