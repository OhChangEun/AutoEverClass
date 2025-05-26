import styled from "styled-components";
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "sport",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const Category = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  margin: 0.25rem;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  background: ${({ active }) => (active ? "#1e90ff" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#495057")};
  border: 1px solid ${({ active }) => (active ? "#1e90ff" : "#ced4da")};
  box-shadow: ${({ active }) =>
    active ? "0 4px 12px rgba(30, 144, 255, 0.3)" : "none"};

  &:hover {
    background: ${({ active }) => (active ? "#1c86ee" : "#f1f3f5")};
    color: ${({ active }) => (active ? "#ffffff" : "#1e90ff")};
    border-color: #1e90ff;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoryContainer>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoryContainer>
  );
};
export default Categories;
