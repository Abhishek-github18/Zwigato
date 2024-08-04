import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import { Outlet } from "react-router-dom";
import Menu from "./src/components/Menu";
import Error from "./src/components/Error";
import UserContext from "./src/utils/Usercontext";
import appStore from './src/utils/appStore';
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  const data = useContext(UserContext);

  useEffect(() => {
    // some api call to fetch the username
    const data = {
      name: "Abhishek",
    };
    setUserName(data.name);
  }, []);

  return (
<Provider store ={appStore}>
    <UserContext.Provider
    value = {{...data, loggedUser: userName, setUserName}}
    >
      <div>
        <Header />

        {/* </> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },{
        path: "cart",
        element: <Cart />
      },
      {
        path: "grocery",
        element: (
          <Suspense
            fallback={<h1>Grocery is loading..... Wait for some more time</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
