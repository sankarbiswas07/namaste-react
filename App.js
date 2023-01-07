
/**
 * Parcel:
 * HMR- Hot module Replacement 
 * HMR works with File watcher Algorithm - written in C++
 * Parcel is bundling, minifying and cleaning the code(removing console)
 * Parcel optimize project inside image also
 * CACHING while development. not in production
 * Compatible with older version of browser
 * HTTPS  on dev = npx parcel index.html --https
 * PORT management
 * Consistent Hashing Algorithm
 * ZERO Config
 * 
 * 
 * Transitive Dependencies.
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {
//   id: "title" //this is props object which is the properties of a dom
// }, "Heading 1")

// const heading2 = React.createElement("h2", {
//   id: "description" //this is props object which is the properties of a dom
// }, "Heading 2")

// const heading = React.createElement("div", {
//   id: "some", //this is props object which is the properties of a dom
//   name: "some name"
// }, [heading1, heading2])

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
)

const HeaderComponent = () => (
  <div>
    <Title />
    <h2>Namaste react foundation component</h2>
    <h2> this is h2 tag</h2>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(<HeaderComponent />)