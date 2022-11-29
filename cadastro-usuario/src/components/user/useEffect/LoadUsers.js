import axios from "axios";
import { useContext, useEffect } from "react";
import appConfig from "../../../config/appConfig";
import { UsersContext } from "../context/UsersContext";

const LoadUsers = (props) => {
  const { users, setUsers } = useContext(UsersContext);
  useEffect(() => {
    axios(appConfig.baseUrl).then((resp) => {
      setUsers({ ...users, list: resp.data });
    });
  }, []);
};
export default LoadUsers;
