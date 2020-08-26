import React from "react";

function Article() {
  return <div>Article</div>;
}

// This gets called on every request
export async function getServerSideProps({ params, query }) {
  console.log("params: ", params);
  console.log("query: ", query);
  return { props: {} };
}

export default Article;