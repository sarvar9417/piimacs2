export const linearSearch = {
  name: "Linear Search",
  definations: [
    {
      name: "Linear Search",
      pseudocode:
        "FUNCTION linearSearch(searchItem, index):\n" +
        "    found <- False\n" +
        "    IF a[index] = searchItem \n" +
        "        THEN\n" +
        "            found <- True\n" +
        "    ENDIF\n" +
        "    IF (found OR index == maxSize)\n" +
        "        THEN \n" +
        "            RETURN found\n" +
        "        ELSE\n" +
        "            RETURN linearSearch(searchItem, index + 1)\n" +
        "    ENDIF\n" +
        "\n" +
        "a <- [12, 33, 45, 57, 67, 90, 867, 745, 435, 32, 34, 124, 56, 688]    \n" +
        "maxSize <- LENGTH(a) - 1\n" +
        "INPUT searchItem \n" +
        "f <- linearSearch(searchItem, 0)\n" +
        "OUTPUT f",
      code:
        "def linearSearch(searchItem, index):\n" +
        "    found = False\n" +
        "    if a[index] == searchItem:\n" +
        "        found = True\n" +
        "    if (found or index == maxSize):\n" +
        "        return found\n" +
        "    else:\n" +
        "        return linearSearch(searchItem, index + 1)\n" +
        "\n" +
        "a = [12, 33, 45, 57, 67, 90, 867, 745, 435, 32, 34, 124, 56, 688]    \n" +
        "maxSize = len(a) - 1\n" +
        "searchItem = int(input('Please enter number: '))\n" +
        "f = linearSearch(searchItem, 0)\n" +
        "print(f)",
    },
  ],
};
