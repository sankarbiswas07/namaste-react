
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

const heading1 = React.createElement("h1", {
  id: "title" //this is props object which is the properties of a dom
}, "Heading 1")

const heading2 = React.createElement("h2", {
  id: "description" //this is props object which is the properties of a dom
}, "Heading 2")

const heading = React.createElement("div", {
  id: "some", //this is props object which is the properties of a dom
  name: "some name"
}, [heading1, heading2])



{/* <div class="header">
<h1>Namaste React</h1>
<ul>
  <li>About us</li>
  <li>course</li>
  <li>help</li>
</ul>
</div> */}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)