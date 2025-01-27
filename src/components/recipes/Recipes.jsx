import { useEffect, useState } from "react"
import MainButton from "../mainButton/MainButton"
import axios from "axios"
function Recipes() {
  const [recipes,setRecipes]=useState([])
  const getRecipes = async () => {
    try {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast");
      const limitedRecipes = data.meals.slice(0, 3)
      setRecipes(limitedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  useEffect(()=>{
    getRecipes()
},[])
  return (
    <section className='pt-5'>
      <h2 className='font-sen font-extrabold text-5xl md:text-8xl lg:text-[9rem] leading-[0.96] text-main uppercase mt-[3.625rem] mb-[3.125rem] text-center'>recipes</h2>
      <div className="w-[63.006%] mx-auto mb-[3.125rem]">
        <div className="grid grid-cols-12 gap-[1.375rem]">
            {recipes.map((recipe,index)=>(<div key={index} className="item col-span-6 md:col-span-4 bg-white border border-main rounded-[1.875rem]">
                <img src={recipe.strMealThumb} className="w-full h-[17.8125rem] rounded-[1.875rem]"  alt={recipe.strMeal} />
                <div className="px-[1.875rem] my-[2.3125rem]">
                <h4 className="text-main font-extrabold">{recipe.strMeal}</h4>
                <p className="text-[0.875rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, eos deserunt, veritatis est facilis sint sed non fugiat aperiam cupiditate nemo officia, saepe excepturi molestias dicta sapiente? Eius, perspiciatis ipsam.</p>
                </div>
            </div>))}
          
           
        </div>
      </div>
      <div className="flex items-center justify-center mb-[3.125rem] text-white">
      <MainButton content={"CONTACT US"}/>
      </div>
    </section>
  )
}

export default Recipes
