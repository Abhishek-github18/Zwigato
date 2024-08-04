import ItemCategoryList from "./ItemCategoryList";
const ItemCategory = ({ item, show, setshowIndex }) => {

    const handleClick = () => {
        setshowIndex();
    }
  
  return (
    <div>
      <div
        className="cursor-pointer"
        key={item.card.card.title}
        onClick={handleClick}
      >
        <div className="border-b-2 border-gray-300 flex justify-between my-8" >
          <h1 className="" >{item.card.card.title} </h1>
          <span>🔽</span>
        </div>
        {/* list of each category */}
        {show && (
          <ItemCategoryList
            key={item.card.card.title}
            list={item.card.card.itemCards}
          />
        )}
      </div>
    </div>
  );
};

export default ItemCategory;
