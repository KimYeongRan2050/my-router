import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
/* existing imports */
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
/* previous imports */
import ErrorPage from "./error-page";
/* existing imports */
/* existing code */
import Contact, {
  loader as contactLoader,
} from "./routes/contact";
/* existing code */
import EditContact, {
  action as editAction,
} from "./routes/edit";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },      
    ],    
  },  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
