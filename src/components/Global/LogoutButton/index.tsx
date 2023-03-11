import { useCookies } from "react-cookie";
import { IoLogOutOutline } from "react-icons/io5";

import { colors } from "@/styles/GlobalStyles";

const LogoutButton: React.FC = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  return (
    <button
      onClick={() => {
        removeCookie("token");
        window.location.reload();
      }}
    >
      <abbr title="Sair">
        <IoLogOutOutline color={colors.grey50} size={30} />
      </abbr>
    </button>
  );
};

export default LogoutButton;
