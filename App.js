import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent"}, [React.createElement("div", { id: "child"}, [React.createElement("h1", { id: "heading"}, "H1 Heading"), React.createElement("h2", { id: "heading"}, "H2 Heading")]), React.createElement("div", { id: "child2"}, [React.createElement("h1", { id: "heading"}, "H1 Heading"), React.createElement("h2", { id: "heading"}, "H2 Heading")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);