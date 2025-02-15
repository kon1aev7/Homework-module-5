import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
// import Aim from "./NestedRoutes/Aim";
import Company from "./NestedRoutes/Company";
import Team from "./NestedRoutes/Team";
// import Users from "../pages/Users";
// import UserDetails from "../pages/UserDetails";
// import UserPosts from "./NestedRoutes/UserPosts";
import { lazy, Suspense } from "react";

const Aim = lazy(() => import("./NestedRoutes/Aim"));
const Users = lazy(() => import("../pages/Users"));
const UserDetails = lazy(() => import("../pages/UserDetails"));
const UserPosts = lazy(() => import("./NestedRoutes/UserPosts"));

const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* localhost/about/aim */}
          {/* localhost/about/company */}
          {/* localhost/about/team */}
          <Route path="/about" element={<About />}>
            <Route path="aim" element={<Aim />} />
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>

          <Route path="/users" element={<Users />} />

          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="info" element={<h2>Info about user</h2>} />
            <Route path="posts" element={<UserPosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
