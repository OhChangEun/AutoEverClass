import { useState } from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = () => {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => {
    setCategory(category);
  };
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};
export default NewsPage;
