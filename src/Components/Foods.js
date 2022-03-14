import useFetch from "react-fetch-hook";
import FoodList from "./FoodList";
import classes from "./Foods.module.css";

const Foods = () => {
  const { isLoading, data, error } = useFetch(
    "https://yummly2.p.rapidapi.com/feeds/list?limit=10&start=0",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yummly2.p.rapidapi.com",
        "x-rapidapi-key": "607f8f232bmsh90b8fc6a8a3d93ap104d97jsnb6025bb03d7a",
      },
    }
  );

  return (
    <div>
      {isLoading && <h3>Data is Loading</h3>}
      {error && <h3>There is some issue with fetching Data</h3>}
      {/* <ul className="divide-y divide-gray-200"> */}
      <ul className={classes.list}>
        {data &&
          data.feed.map((item, index) => (
            <FoodList item={item} index={index}></FoodList>
          ))}
      </ul>
    </div>
  );
};

export default Foods;
