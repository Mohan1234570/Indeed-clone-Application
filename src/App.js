
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from "./routes/route";
import AllPosts from "./pages/AllPosts";
import SearchBar from "./pages/SearchBar";
import ProfilePage from "./pages/ProfilePage";
import JobsPage from "./pages/JobsPage";
import ReviewsPage from "./pages/ReviewsPage";
import HelpPage from "./pages/HelpPage";
import LogoutPage from "./pages/LogoutPage";
import Landing from "./pages/Landing";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
     <Router>
       <Routes>
         <Route path={routhPath.landing} element={<Landing />} />
         <Route element={<PrivateRoute />}>
         <Route path={routhPath.home} element={<Home />} />
         <Route path={routhPath.create} element={<CreatePost />} />
         <Route path={routhPath.posts} element={<AllPosts />} />
         <Route path={routhPath.search} element={<SearchBar />} />
         <Route path={routhPath.profile} element={<ProfilePage />} />
         <Route path={routhPath.myjobs} element={<JobsPage />} />
         <Route path={routhPath.reviews} element={<ReviewsPage />} />
         <Route path={routhPath.help} element={<HelpPage />} />
         <Route path={routhPath.logout} element={<LogoutPage />} />
         </Route>
         
       </Routes>
     </Router>
  );
}

export default App;
