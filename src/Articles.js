import React, { useState } from "react";
import _ from "lodash";

const Articles = React.memo(function Articles(props) {
  const [checkedList, setCheckedList] = useState([]);
  console.log("Articles rendered");
  return (
    <div style={{ overflow: "hidden" }}>
      {props.articles.map((a) => (
        <div key={a.id}>
          <input
            type="checkbox"
            onClick={() =>
              _.find(checkedList, (c) => c === a.id)
                ? setCheckedList((l) => [_.filter(l, (id) => id !== a.id)])
                : setCheckedList((l) => [a.id, ...l])
            }
          />
          <a href={a.webUrl}>{a.webTitle}</a>
        </div>
      ))}
      <button
        onClick={() => {
          props.removeArticles(checkedList);
          setCheckedList([]);
        }}
      >
        Ta bort valda
      </button>
    </div>
  );
});
export default Articles;
