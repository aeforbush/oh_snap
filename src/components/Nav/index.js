import React from "react";

function Nav() {
  const categories = [
    { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects" },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature" },
  ];
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => categorySelected()}>About Me</a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => categorySelected()}>Contact</span>
          </li>
          {categories.map((category) => (
            // whenever mapping over anything in JSX you must have a key which is often an "id"
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
