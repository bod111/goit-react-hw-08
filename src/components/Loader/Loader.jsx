import css from "./Loader.module.css";
import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.container}>
      <p>Please wait a moment</p>
      <Hearts
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
