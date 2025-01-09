import { clearUserDetails } from "../../../redux/reducer/userSlice";
import store from "../../../redux/store";

const logout = () => {
  store.dispatch(clearUserDetails());
  window.location.href = "/login";
};

export default logout;
