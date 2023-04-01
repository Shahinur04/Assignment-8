import "./App.css";
import Article from "./Components/Article/Article";
import Blog from "./Components/Blog/Blog";
import Bookmark from "./Components/Bookmark/Bookmark";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <Article></Article>
      
    </div>
  );
}

export default App;
