import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [clicked, setClicked] = useState(null);

  const buttons = [
    { name: "ボスボタン", color: "red.400", hoverColor: "red.600" },
    { name: "はげましボタン", color: "green.400", hoverColor: "green.600" },
    { name: "帰宅ボタン", color: "blue.400", hoverColor: "blue.600" },
    { name: "たばこボタン", color: "yellow.400", hoverColor: "yellow.600" },
    { name: "トイレボタン", color: "purple.400", hoverColor: "purple.600" },
  ];

  const handleClick = (name) => {
    setClicked(name);
    setTimeout(() => {
      setClicked(null);
    }, 500);
  };

  return (
    <VStack spacing={4}>
      {buttons.map((button) => (
        <Button key={button.name} colorScheme={button.color.split(".")[0]} bg={clicked === button.name ? button.hoverColor : button.color} onClick={() => handleClick(button.name)} size="lg" width="200px">
          {button.name}
        </Button>
      ))}
    </VStack>
  );
};

export default Index;
