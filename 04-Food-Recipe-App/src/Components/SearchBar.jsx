import React, { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";
import { Link } from "react-router";

export default function SearchBar() {
  const { Food, setFood, setFoodList, FoodList } = useContext(MyContext);
  const handleSubmit = () => {
    setFoodList([...FoodList, Food]);
    setFood("")
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setFood(e.target.value);
            }}
            placeholder="Enter Food Items"
            value={Food}
          />
          <input type="submit" onClick={handleSubmit} value={"Add"} />
        </div>

        <div>
          <ul>
            {FoodList.map((value)=>{
            return(
              <li>{value}</li>
            )
          })}
          </ul>
        </div>
        <Link to={"/FoodRecipe"}>Recipe</Link>
      </div>
    </>
  );
}
