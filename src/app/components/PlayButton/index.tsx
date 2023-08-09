import { styled } from "styled-components";
import { Button } from "..";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayButtonStyled = styled(Button)`
  width: 300px;
  height: 100px;
  border-radius: 20px;
  font-size: 40px;
`;

export const PlayButton = () => {
  const router = useRouter();

  return (
    <PlayButtonStyled type="primary" onClick={() => router.push("/game")}>
      <FontAwesomeIcon icon={faPlay} />
    </PlayButtonStyled>
  );
};
