import { Box, MultiSelect } from "@mantine/core";
import React, { useEffect, useState } from "react";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];
const MultiselectTry = () => {
  const [value, setValue] = useState<string[]>([]);

  const [updateValue, setUpdateValue] = useState<string[]>([]);

  function transformValue() {
    const transformedValues = [value[0], `+${value.length - 1}`];
    console.log(transformedValues);

    return transformedValues;
  }


  return (
    <Box w={"250px"}>
      <MultiSelect value={transformValue()} onChange={setValue} data={data} />
    </Box>
  );
};

export default MultiselectTry;
