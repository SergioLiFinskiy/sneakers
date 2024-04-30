import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="owerlay">
      <div className="drawer">
        <button className="drawerHead">
          <h2>Корзина</h2>
          <img
            onClick={onClose}
            src="../icons/ic_close.svg"
            className="favourite"
            alt="ic_close"
          />
        </button>

        {items.length > 0 ? (
          <div>
            <div className="drawer-items">
              {items.map((obj, index) => (
                <div className="cartItem">
                  <div className="sneakers">
                    <img src={obj.img} className="sneakers-img" />
                  </div>
                  <div className="coast">
                    <div className="sneakers-description">{obj.title}</div>
                    <div>
                      <p>{obj.price}</p>
                    </div>
                  </div>
                  <div className="ic_close">
                    <img
                      src="../icons/ic_close.svg"
                      className="favourite"
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <ul className="cardTotalBlock">
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 000 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b> 1075 руб.</b>
              </li>
            </ul>
            <button className="btn-cart">
              <div className="btn-text">Оформить заказ</div>
              <img src="../icons/ic_arrow.svg" alt="ic_arrow" srcset="" />
            </button>
          </div>
        ) : (
          <div className="basket">
            <img src="../img/img_basket.png" alt="ic_arrow" srcset="" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="btn-cart">
              <div className="btn-text">Вернуться назад</div>
              <img src="../icons/ic_arrow.svg" alt="ic_arrow" srcset="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
