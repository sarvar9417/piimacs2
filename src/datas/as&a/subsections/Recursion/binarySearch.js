export const binarySearch = {
  name: "Binary Search",
  definations: [
    {
      pseudocode:
        "FUNCTION binarySearch(searchItem, low, high):\n" +
        "    IF (high >= low)\n" +
        "        THEN\n" +
        "            mid <- (high+low) DIV 2\n" +
        "            IF (array[mid] = searchItem) \n" +
        "                THEN\n" +
        "                    RETURN mid\n" +
        "            ENDIF\n" +
        "            IF (searchItem < array[mid]) \n" +
        "                THEN\n" +
        "                    RETURN binarySearch(searchItem, low, mid - 1)\n" +
        "                ELSE\n" +
        "                    RETURN binarySearch(searchItem, mid + 1, high)\n" +
        "            ENDIF\n" +
        "        ELSE\n" +
        "            RETURN -1\n" +
        "    ENDIF\n" +
        "\n" +
        "array <- [1, 3, 4, 6, 7, 9, 12, 15, 16, 19]    \n" +
        "high <- LENGTH(array) - 1\n" +
        "INPUT searchItem\n" +
        "f <- binarySearch(searchItem, 0, high)\n" +
        "OUTPUT f",
      code:
        "def binarySearch(searchItem, low, high):\n" +
        "    if (high >= low):\n" +
        "        mid = (high+low) // 2\n" +
        "        if (array[mid] == searchItem):\n" +
        "            return mid\n" +
        "        elif (searchItem < array[mid]):\n" +
        "            return binarySearch(searchItem, low, mid - 1)\n" +
        "        else:\n" +
        "            return binarySearch(searchItem, mid + 1, high)\n" +
        "    else:\n" +
        "        return -1\n" +
        "\n" +
        "array = [1, 3, 4, 6, 7, 9, 12, 15, 16, 19]    \n" +
        "high = len(array) - 1\n" +
        "searchItem = int(input('Please enter number: '))\n" +
        "f = binarySearch(searchItem, 0, high)\n" +
        "print(f)",
    },
  ],
};
