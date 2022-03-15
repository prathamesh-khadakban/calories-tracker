import Card from "./Card";
import classes from "./FoodList.module.css";

function FoodList({ item, index }) {
  console.log(item);
  return (
    <>
      {item.type === "single recipe" && (
        <li key={index} className={classes.item}>
          <Card>
            <img className={classes.image} src={item.display.images} alt="" />
            <div className={classes.content}>
              <h3>{item.display.displayName}</h3>
              <p className="text-sm text-gray-500">
                {item.content.nutrition.nutritionEstimates.length > 0
                  ? `Calories = ${item.content.nutrition.nutritionEstimates[0].display.value}`
                  : `Calories = 100`}
              </p>
              <p>{`--------------------------------`}</p>
            </div>
            <div className={classes.actions}>
              <button>+</button>
              <button>-</button>
            </div>
          </Card>
        </li>
      )}
    </>
  );
}

export default FoodList;
