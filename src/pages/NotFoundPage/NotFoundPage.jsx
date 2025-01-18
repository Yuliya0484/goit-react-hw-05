import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.notfoundtitle}>404 - Page Not Found</h1>
      <p className={s.notfoundtext}>
        Ooops! The page you're looking for doesn't find!
      </p>
      <Link to="/" className={s.notfoundlink}>
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
