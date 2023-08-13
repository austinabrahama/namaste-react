import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const Heading = () => {
//     return <h1>Hi Austin</h1>;
// };

const Heading = () => <h1>Hi Austin</h1>;

const Content = () => {
    return (
        <div>
            <Heading />
            <h1>What are you doing?</h1>
        </div>
    );
};

root.render(<Content />);