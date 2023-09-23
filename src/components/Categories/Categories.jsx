import { useEffect, useState } from "react";
import Category from "./Category";



const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="mt-64 md:mt-72 lg:my-20">
           <div className="flex  justify-around">
           {
                categories.map(category=><Category key={category.id} category={category}></Category>)
            }
           </div>
        </div>
    );
};

export default Categories;