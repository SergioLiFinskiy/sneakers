import React from "react";
import axios from "axios";
import CardOfMenu from "./components/CardOfMenu";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [likes, setLikes] = React.useState();
  const [searchValue, setSearchValue] = React.useState("");
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch("https://66296a5e67df268010a0b271.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios
      .get("https://66296a5e67df268010a0b271.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://66296a5e67df268010a0b271.mockapi.io/card")
      .then((res) => {
        setCardItems(res.data);
      });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://66296a5e67df268010a0b271.mockapi.io/card", obj);
    setCardItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66296a5e67df268010a0b271.mockapi.io/card/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  };

  //for control input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cardOpened ? (
        <Drawer
          items={cardItems}
          onClose={() => setCardOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}

      <Header onClickCart={() => setCardOpened(true)} />

      <section>
        <div className="slider">
          <img src="../img/img_slider_1.png" alt="" srcset="" />
        </div>
      </section>
      <section>
        <div className="head-catalog">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кросовки"}
          </h1>
          <div className="search">
            <img src="../icons/ic_lypa.svg" alt="ic_lypa" srcset="" />
            <input
              onChange={onChangeSearchInput}
              type="text"
              placeholder="Поиск..."
              value={searchValue ? searchValue : ""}
            />
          </div>
        </div>
        <div className="catalog">
          {items
            // .filter((item) => item.title.includes({ searchValue }))
            .map((obj, index) => (
              <CardOfMenu
                key={index}
                title={obj.name}
                price={obj.price}
                img={obj.img}
                onClickCard={() => console.log(obj)}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
