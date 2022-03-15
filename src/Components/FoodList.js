import Card from "./Card";
import classes from "./FoodList.module.css";

function FoodList({ addItem, item }) {
  //console.log(item);
  const addQuantityHandler = () => {
    return addItem(item);
  };
  return (
    <li key={item.id} className={classes.item}>
      <Card>
        <img className={classes.image} src={item.image} alt="" />
        <div className={classes.content}>
          <h3>{item.name}</h3>
          <p className="text-sm text-gray-500">
            {`Calories = ${item.calories}`}
          </p>
          <p>{`--------------------------------`}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={addQuantityHandler}>+</button>
          <span>{item.quantity}</span>
          <button>-</button>
        </div>
      </Card>
    </li>
  );
}

export default FoodList;
