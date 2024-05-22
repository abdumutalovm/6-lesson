import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { getToken } from "./components/utilits";
import { create } from "./redux/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getToken()
      .then(res => {
        dispatch(create(res));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home></Home>
            </Layout>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes></Likes>
            </Layout>
          }
        ></Route>
        <Route
          path="/playlist/:id"
          element={
            <Layout>
              <Musics></Musics>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
