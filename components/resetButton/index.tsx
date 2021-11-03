import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import { intialState } from "../../utils/store";
import { useResetRecoilState } from "recoil";

const ButtonReset: NextPage = () => {
  // reset default store values
  const resetStateHandler = useResetRecoilState(intialState);

  return (
    <Button colorScheme="red" onClick={() => resetStateHandler()}>
      Reset Button
    </Button>
  );
};

export default ButtonReset;
