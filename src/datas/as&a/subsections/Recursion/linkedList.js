export const linkedList = {
  name: "Insertion Sort",
  definations: [
    {
      name: "Search item in linked list",
      pseudocode:
        "FUNCTION searchLinkedList(searchingItem, pointer)\n" +
        "    IF (linkedList[pointer] = searchingItem OR pointer = -1)\n" +
        "        THEN\n" +
        "            RETURN pointer\n" +
        "        ELSE\n" +
        "            RETURN searchLinkedList(searchingItem, linkedListPointers[pointer])\n" +
        "    ENDIF\n" +
        "\n" +
        "linkedList <- [6, 7, 3, 9, 2, 4, 1, 0, 5, 8]\n" +
        "linkedListPointers <- [1, 9, 5, -1, 2, 8, 4, 6, 0, 3]\n" +
        "headPointer <- 7\n" +
        "pointer <- headPointer\n" +
        'OUTPUT "Enter a searching number "\n' +
        "INPUT searchingItem\n" +
        "index <- searchLinkedList(searchingItem, pointer)\n" +
        "OUTPUT index",
      code:
        "def searchLinkedList(searchingItem, pointer):\n" +
        "    if (linkedList[pointer] == searchingItem or pointer == -1):\n" +
        "        return pointer\n" +
        "    else:\n" +
        "        return searchLinkedList(searchingItem, linkedListPointers[pointer])\n" +
        "\n" +
        "linkedList = [6, 7, 3, 9, 2, 4, 1, 0, 5, 8]\n" +
        "linkedListPointers = [1, 9, 5, -1, 2, 8, 4, 6, 0, 3]\n" +
        "headPointer = 7\n" +
        "pointer = headPointer\n" +
        'searchingItem = int(input("Enter a searching number ")) \n' +
        "index = searchLinkedList(searchingItem, pointer)\n" +
        "print(index)",
    },
  ],
};
