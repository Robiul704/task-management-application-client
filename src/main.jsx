
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./Components/UpdateTask";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
  {
    path:'/task/:id',
    element:<UpdateTask></UpdateTask>,
    loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
  }
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);