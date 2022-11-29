import axios from "axios";
import appConfig from "../../../config/appConfig";
import { getUpdatedList } from "./save";

export default (users, user, setUsers) => {
  axios.delete(`${appConfig.baseUrl}/${user.id}`).then((resp) => {
    const list = getUpdatedList(users, user, false);
    setUsers({ ...users, list });
  });
};
