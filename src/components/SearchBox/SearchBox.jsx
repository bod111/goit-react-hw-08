import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  return (
    <div className={css.inputBlock}>
      <label className={css.description}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        value={nameFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
}
