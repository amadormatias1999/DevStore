import React, { useState } from "react";
import { ButtonGroup, Button, IconButton, Divider } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ onAdd }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(counter);
  };

  return (
    <>
      <ButtonGroup size="md" isAttached variant="outline">
        <IconButton onClick={decrement} icon={<MinusIcon />} />
        <Button>{counter}</Button>
        <IconButton onClick={increment} icon={<AddIcon />} />
      </ButtonGroup>
      <Divider />
      <ButtonGroup>
        <Button className="btn-a" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
