import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { IoArrowBack } from "react-icons/io5";

import { Container, Wrapper } from "./styles";
import { colors } from "@/styles/GlobalStyles";
import LogoutButton from "../LogoutButton";

const TopBar: React.FC = () => {
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  return (
    <Wrapper>
      <Container>
        <button
          onClick={() => {
            router.push({ pathname: "/dashboard", query: router.query });
          }}
        >
          <IoArrowBack color={colors.grey50} size={26} />
        </button>
        <LogoutButton />
      </Container>
    </Wrapper>
  );
};

export default TopBar;
