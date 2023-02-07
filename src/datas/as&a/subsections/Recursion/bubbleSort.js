export const bubbleSort = {
  name: "Bubble sort",
  definations: [
    {
      pseudocode:
        "FUNCTION bubbleSort(array)\n" +
        "    count <- 0\n" +
        "    size <- LENGTH(array) - 1\n" +
        "    FOR i <- 0 TO size\n" +
        "        IF array[i] > array[i + 1]\n" +
        "            THEN\n" +
        "                temp <- array[i]\n" +
        "                array[i] <- array[i + 1]\n" +
        "                array[i + 1] <- temp\n" +
        "                count <- counter + 1\n" +
        "        ENDIF\n" +
        "    NEXT i\n" +
        "    IF count = 0\n" +
        "        THEN\n" +
        "            RETURN array\n" +
        "        ELSE\n" +
        "            RETURN bubbleSort(array)\n" +
        "        \n" +
        "arr <- [1,5,2,7,3]\n" +
        "s <- bubbleSort(arr)\n" +
        "OUTPUR s",
      code:
        "def bubbleSort(array):\n" +
        "    count = 0\n" +
        "    for i in range(len(array)-1):\n" +
        "        if array[i] > array[i + 1]:\n" +
        "            array[i],array[i + 1] = array[i + 1],array[i]\n" +
        "            count += 1\n" +
        "    if count == 0:\n" +
        "        return array\n" +
        "    else:\n" +
        "        return bubbleSort(array)\n" +
        "        \n" +
        "arr = [1,5,2,7,3]\n" +
        "print(bubbleSort(arr))",
    },
  ],
};
