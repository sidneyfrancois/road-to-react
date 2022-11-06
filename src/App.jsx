const title = "React";

const welcome = {
  greetings: "Hey",
  title: "React",
};

function getTitle(title) {
  return title;
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h2>Hello to {title}</h2>
      <h3>
        {welcome.greetings} {welcome.title}
      </h3>
      <h3>This is the title: {getTitle("new title")}</h3>

      <h4>My list: </h4>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.objectID}>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>{item.url}</span>
            </li>
          );
        })}
      </ul>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
