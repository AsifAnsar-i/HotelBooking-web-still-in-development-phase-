import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useAppContext } from "./contexts/AppContext";
import AddHotel from "./pages/AddHotel";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      {isLoggedIn && (
        <>
          <Route
            path="/add-hotel"
            element={
              <Layout>
                <AddHotel />
              </Layout>
            }
          />
        </>
      )}
      <Route path="*" element={<Layout>Not Found</Layout>} />
    </Routes>
  );
};

export default App;
