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
      id: 1,
      name: "Salad",
      calories: 100,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      quantity: 0,
    },
    {
      id: 2,
      name: "Pizza",
      calories: 500,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
      quantity: 0,
    },
  ];
  const [data, setData] = useState(data_obj);

  const addItemHandler = (item) => {
    // check the given id is already present in data object set or not
    const updatedData = data.map((eachobj) => {
      return item.id === eachobj.id
        ? { ...eachobj, quantity: eachobj.quantity + 1 }
        : eachobj;
    });

    setData((prev) => updatedData);
  };

  return (
    <div>
      <ul className={classes.list}>
        {data &&
          data.map((item) => (
            <FoodList item={item} addItem={addItemHandler}></FoodList>
          ))}
      </ul>
    </div>
  );
};

export default Foods;
