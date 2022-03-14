import Card from "./Card";
import classes from "./FoodList.module.css";

function FoodList({ item, index }) {
  return (
    <>
      {item.type === "single recipe" && (
        // <li key={index} className="py-10 flex">
        //   <img
        //     className="h-100 w-100 rounded-full"
        //     src={item.display.images}
        //     alt=""
        //   />
        //   <div className="ml-12">
        //     <p className="text-sm font-medium text-gray-900">
        //       {item.display.displayName}
        //     </p>
        //     <p className="text-sm text-gray-500">
        //       {item.content.nutrition &&
        //         `Calories = ${item.content.nutrition.nutritionEstimates[0].display.value}`}
        //     </p>
        //   </div>
        // </li>

        <li key={index} className={classes.item}>
          <Card>
            <img className={classes.image} src={item.display.images} alt="" />
            <div className={classes.content}>
              <h3>{item.display.displayName}</h3>
              <p className="text-sm text-gray-500">
                {item.content.nutrition &&
                  `Calories = ${item.content.nutrition.nutritionEstimates[0].display.value}`}
              </p>
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
