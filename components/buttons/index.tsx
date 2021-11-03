import type { NextPage } from "next";
import { Button } from "@chakra-ui/react";
import { intialState } from "../../utils/store";
import { useRecoilState } from "recoil";

const ButtonCount: NextPage = () => {
  // update store value
  const [count, setCount] = useRecoilState(intialState);
  return (
    <Button
      colorScheme="blue"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Add Count
    </Button>
  );
};

export default ButtonCount;
