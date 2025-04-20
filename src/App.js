
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from "./routes/route";
import AllPosts from "./pages/AllPosts";
import SearchBar from "./pages/SearchBar";


function App() {
  return (
     <Router>
       <Routes>
         <Route path={routhPath.home} element={<Home />} />
         <Route path={routhPath.create} element={<CreatePost />} />
         <Route path={routhPath.posts} element={<AllPosts />} />
         <Route path={routhPath.search} element={<SearchBar />} />
       </Routes>
     </Router>
  );
}

export default App;
