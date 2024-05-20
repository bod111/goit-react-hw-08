import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <p>
      Please return to
      <Link to="/"> home page</Link>
    </p>
  );
}
