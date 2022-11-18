import InputWithLabel from "./components/Search";
import List from "./components/List";
import { useEffect, useState } from "react";

// custom hook to keep the component's state in sync with the browser's local storage
const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const initialStories = [
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

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState("search", "");
  const [stories, setStories] = useState(initialStories);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.toLocaleLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My hacker stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
        onDelete={deleteFromStories}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

export default App;
