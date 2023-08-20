import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= 300) return <Text>{children}</Text>;
  const summary = children.substring(0, limit) + "...";
  return (
    <Text>
      {!expended ? summary : children}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpended(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
