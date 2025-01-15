import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Aim from "./components/NestedRouted/Aim";
import Company from "./components/NestedRouted/Company";
import Team from "./components/NestedRouted/Team";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./components/NestedRouted/UserPosts";
import PostsDetails from "./components/NestedRouted/PostsDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route
            index
            element={
              <h3>
                Click on the top links to see more information about our company
              </h3>
            }
          />
          <Route path="aim" element={<Aim />} />
          <Route path="team" element={<Team />} />
          <Route path="company" element={<Company />} />
        </Route>

        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="posts" element={<UserPosts />}>
            <Route path="postId" element={<PostsDetails />} />
          </Route>
          <Route path="info" element={<h3>Some info</h3>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
