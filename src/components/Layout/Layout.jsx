import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
// import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
