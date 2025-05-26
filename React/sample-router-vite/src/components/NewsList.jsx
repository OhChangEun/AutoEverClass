import { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const Spinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
    <svg
      width="48"
      height="48"
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#22b8cf"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2 2)" strokeWidth="4">
          <circle strokeOpacity=".3" cx="19" cy="19" r="19" />
          <path d="M38 19c0-10.493-8.507-19-19-19">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 19 19"
              to="360 19 19"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </div>
);

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    witdh: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = (props) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query =
          props.category === "all" ? "all" : `category=${props.category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&${query}&apiKey=018bfd57305d4fc4913245f0f875381b`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.category]);

  if (loading) {
    return <Spinner />;
  }
  if (!articles) return null;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
