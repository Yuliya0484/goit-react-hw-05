import { Link } from "react-router-dom";
import s from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div>
      <ul className={s.user_list}>
        {users.map((item) => (
          <li className={s.user_item} key={item.id}>
            <Link className={s.user_link} to={item.id.toString()}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
