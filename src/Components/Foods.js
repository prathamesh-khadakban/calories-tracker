import useFetch from "react-fetch-hook";
import FoodList from "./FoodList";
import classes from "./Foods.module.css";
import { useState } from "react";

const Foods = () => {
  // Food API Call
  // const { isLoading, data, error } = useFetch(
  //   "https://yummly2.p.rapidapi.com/feeds/list?limit=10&start=0",
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "yummly2.p.rapidapi.com",
  //       "x-rapidapi-key": "607f8f232bmsh90b8fc6a8a3d93ap104d97jsnb6025bb03d7a",
  //     },
  //   }
  // );

  //instead of api creating our own object and use unspash images
  const data_obj = [
    {
      id: 0,
      name: "Salad",
      calories: 100,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      quantity: 0,
      totalCalories: 0,
    },
    {
      id: 1,
      name: "Pizza",
      calories: 500,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
      quantity: 0,
      totalCalories: 0,
    },
  ];
  const [data, setData] = useState(data_obj);

  const addItemHandler = (item) => {
    // Code refactoring by apply array destrcturing with spread operator
    // for edit object
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
      totalCalories: (item.quantity + 1) * item.calories,
    };
    const newData = [...data];
    newData[item.id] = updatedItem;
    setData(() => newData);
  };

  const finalCaloriesCount = data.reduce((total, item) => {
    return total + item.totalCalories;
  }, 0);

  //console.log(finalCaloriesCount);

  return (
    <div>
      <h2>{`Final Calories intake = ${finalCaloriesCount}`}</h2>
      <ul className={classes.list}>
        {data &&
          data.map((item) => (
            <FoodList
              key={item.id}
              item={item}
              addItem={addItemHandler}
            ></FoodList>
          ))}
      </ul>
    </div>
  );
};

export default Foods;
