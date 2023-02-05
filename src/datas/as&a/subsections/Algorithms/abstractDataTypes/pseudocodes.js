import linkedList from "../../../../../assets/images/emptyLinkedList.png";
import addLinkedList1 from "../../../../../assets/images/addLinkedList1.png";
import addLinkedList2 from "../../../../../assets/images/addLindedList2.png";
import binaryTree from "../../../../../assets/images/binaryTree1.png";
export const pseudocodes = {
  name: "Pseudocodes",
  definations: [
    {
      name: "Linear search with a for loop",
      pseudocode:
        "FUNCTION linearSearch(array, l, n):\n" +
        "    FOR i <- 0 TO l\n" +
        "        IF (array[i] = n)\n" +
        "            THEN \n" +
        "                RETURN i\n" +
        "        ENDIF\n" +
        "    NEXT i\n" +
        "    RETURN -1\n" +
        "    \n" +
        "DECLARE: array [5, 8, 1, 2, 13, 7,  9, 10, 11, 6] OF INTEGER\n" +
        "INPUT n\n" +
        "lengthArray <- LENGTH(array)\n" +
        "result <- linearSearch(array, lengthArray, n)\n" +
        "IF (result = -1)\n" +
        "    THEN\n" +
        '        OUTPUT "Son mavjud emas"\n' +
        "    ELSE\n" +
        '        OUTPUT "Son mavjud, indeksi: ", result\n' +
        "ENDIF",
    },
    {
      name: "Linear search with repeat until",
      pseudocode:
        "DECLARE myList : ARRAY[0:8] OF INTEGER \n" +
        "DECLARE upperBound : INTEGER\n" +
        "DECLARE lowerBound : INTEGER\n" +
        "DECLARE index : INTEGER\n" +
        "DECLARE item : INTEGER \n" +
        "DECLARE found : BOOLEAN \n" +
        "upperBound ← 8 \n" +
        "lowerBound ← 0\n" +
        'OUTPUT "Please enter item to be found" \n' +
        "INPUT item\n" +
        "found ← FALSE\n" +
        "index ← lowerBound\n" +
        "REPEAT\n" +
        "    IF item = myList[index]\n" +
        "        THEN\n" +
        "            found ← TRUE\n" +
        "    ENDIF\n" +
        "    index ← index + 1\n" +
        "UNTIL (found = TRUE) OR (index > upperBound) \n" +
        "IF found\n" +
        "    THEN\n" +
        '        OUTPUT "Item found"\n' +
        "    ELSE\n" +
        '        OUTPUT "Item not found"\n' +
        "ENDIF",
    },
    {
      name: "Binary Search with while",
      pseudocode:
        "FUNCTION binary_search( search_item) \n" +
        "    found <- False\n" +
        "    first <- 0\n" +
        "    last <- LEN(items) - 1\n" +
        "    WHILE first <= last DO\n" +
        "        midpoint <- (first + last) DIV 2\n" +
        "        IF items[midpoint] = search_item \n" +
        "            THEN \n" +
        "                RETURN midpoint\n" +
        "            ELSE\n" +
        "                IF items[midpoint] < search_item \n" +
        "                    THEN\n" +
        "                        first <- midpoint + 1\n" +
        "                    ELSE\n" +
        "                        last <- midpoint - 1\n" +
        "                ENDIF\n" +
        "        ENDIF\n" +
        "    ENDWHILE\n" +
        "    RETURN -1\n" +
        "ENDFUNCTION\n" +
        "\n" +
        "DECLARE: items[1, 3, 5, 7, 11, 13, 17, 19, 23, 27, 31, 37, 41, 43, 47, 53, 59] OF INTEGER\n" +
        "index <- binary_search( search_item) \n" +
        "IF (index <> -1)\n" +
        "    THEN\n" +
        "        OUTPUT index\n" +
        "    ELSE\n" +
        "        OUTPUT 'not found'\n" +
        "ENDIF",
    },
    {
      name: "Binary Search with repaeat",
      pseudocode:
        "DECLARE myList : ARRAY[0:9] OF INTEGER \n" +
        "DECLARE upperBound : INTEGER\n" +
        "DECLARE lowerBound : INTEGER\n" +
        "DECLARE index : INTEGER\n" +
        "DECLARE item : INTEGER \n" +
        "DECLARE found : BOOLEAN \n" +
        "upperBound ← 9 \n" +
        "lowerBound ← 0\n" +
        'OUTPUT "Please enter item to be found" \n' +
        "INPUT item\n" +
        "found ← FALSE\n" +
        "REPEAT\n" +
        "    index ← INT ( (upperBound + lowerBound) / 2 ) \n" +
        "    IF item = myList[index]\n" +
        "        THEN\n" +
        "            found ← TRUE\n" +
        "    ENDIF\n" +
        "    IF item > myList[index]\n" +
        "        THEN\n" +
        "            lowerBound ← index + 1 \n" +
        "    ENDIF\n" +
        "    IF item < myList[index] \n" +
        "        THEN\n" +
        "            upperBound ← index - 1 \n" +
        "    ENDIF\n" +
        "UNTIL (found = TRUE) OR (lowerBound = upperBound) \n" +
        "IF found\n" +
        "    THEN\n" +
        '        OUTPUT "Item found"\n' +
        "    ELSE\n" +
        '        OUTPUT "Item not found"\n' +
        "ENDIF",
    },
    {
      name: "Bubble sort with a for loop",
      pseudocode:
        "PROCEDURE bubble_sort_version_for(items)\n" +
        "    num_items <- LEN(items)\n" +
        "  \n" +
        "    FOR pass_num <- 1 TO num_items DO\n" +
        "    \tFOR index <- 0 TO num_items - pass_num - 1  \n" +
        "            IF (items[index] > items[index + 1]) \n" +
        "                THEN\n" +
        "                \ttemp <- items[index]\n" +
        "                \titems[index] <- items[index + 1]\n" +
        "                \titems[index + 1] <- temp \n" +
        "            ENDIF\n" +
        "      \tNEXT index\n" +
        "    NEXT pass_num\n" +
        "ENDPROCEDURE\n" +
        "\n" +
        "DECLARE: items [29, 10, 14, 37, 14, 2, 17, 41, 32, 5] OF INTEGER\n" +
        "bubble_sort_version_for(items)\n" +
        "OUTPUT items",
    },
    {
      name: "Bubble sort with a repeat until",
      pseudocode:
        "PROCEDURE bubble_sort_version_repeatUntil(items)\n" +
        "    upperBound ← LENGTH(items)\n" +
        "    lowerBound ← 0\n" +
        "    top ← upperBound \n" +
        "    REPEAT\n" +
        "        FOR index ←  lowerBound TO top - 1\n" +
        "            Swap ← FALSE\n" +
        "            IF items[index] > items[index + 1] \n" +
        "                THEN\n" +
        "                    temp ← items[index] \n" +
        "                    items[index] ← items[index + 1]\n" +
        "                    items[index + 1] ← temp\n" +
        "                    swap ← TRUE\n" +
        "            ENDIF \n" +
        "        NEXT index\n" +
        "        top ← top -1\n" +
        "    UNTIL (NOT swap) OR (top = 0)\n" +
        "ENDPROCEDURE\n" +
        "\n" +
        "DECLARE: items [29, 10, 14, 37, 14, 2, 17, 41, 32, 5] OF INTEGER\n" +
        "bubble_sort_version_repeatUntil(items)\n" +
        "OUTPUT items",
    },
    {
      name: "Bubble sort with a while loop",
      pseudocode:
        "PROCEDURE bubble_sort_version_while_and_for(items)\n" +
        "    num_items = LEN(items)\n" +
        "    swapped = True\n" +
        "    pass_num = 1\n" +
        "\n" +
        "    WHILE swapped == True\n" +
        "        swapped = False\n" +
        "    \tFOR index = 0 TO num_items - 1 - pass_num  \n" +
        "            IF items[index] > items[index + 1] THEN\n" +
        "            \ttemp = items[index]\n" +
        "            \titems[index] = items[index + 1]\n" +
        "            \titems[index + 1] = temp\n" +
        "                swapped = True\n" +
        "            ENDIF\n" +
        "\tNEXT index\n" +
        "        pass_num = pass_num + 1\n" +
        "    ENDWHILE\n" +
        "ENDPROCEDURE \n" +
        "\n" +
        "items = [29, 10, 14, 37, 14, 2, 17, 41, 32, 5]\n" +
        "bubble_sort_version_while_and_for(items)\n" +
        "OUTPUT items",
    },

    {
      name: "Insertion sort",
      pseudocode:
        "PROCEDURE insertion_sort()\n" +
        "    num_items <- LEN(items)\n" +
        "    FOR index <- 1 TO num_items - 1    \n" +
        "        item_to_insert <- items[index]\n" +
        "        position <- index - 1\n" +
        "        WHILE position >= 0 AND items[position] > item_to_insert\n" +
        "            items[position + 1] <- items[position]\n" +
        "            position <- position - 1\n" +
        "        ENDWHILE\n" +
        "        items[position + 1] <- item_to_insert  \n" +
        "     NEXT index    \n" +
        "ENDPROCEDURE\n" +
        " \n" +
        "DECLARE: item[3, 44, 38, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48] OF INTEGER\n" +
        "insertion_sort()\n" +
        "OUTPUT items",
    },
    {
      name: "Creata new empty Linked list",
      pseudocode:
        "DECLARE mylinkedList ARRAY[0:11] OF INTEGER\n" +
        "DECLARE myLinkedListPointers ARRAY[0:11] OF INTEGER\n" +
        "DECLARE startPointer : INTEGER\n" +
        "DECLARE heapStartPointer : INTEGER\n" +
        "DECLARE index : INTEGER\n" +
        "heapStartPointer ← 0\n" +
        "startPointer ← -1 \n" +
        "FOR index ← 0 TO 11\n" +
        "    myLinkedListPointers[index] ← index + 1 \n" +
        "NEXT index\n" +
        "myLinkedListPointers[11] ← -1",
      image: {
        name: linkedList,
        alt: "LinkedList",
        width: "400px",
      },
    },
    {
      name: "Find item in LinkedList",
      pseudocode:
        "FUNCTION find(itemSearch): \n" +
        "    found <- False\n" +
        "    itemPointer <- startPointer\n" +
        "    WHILE itemPointer <> nullPointer AND NOT found DO\n" +
        "        IF myLinkedList[itemPointer] = itemSearch\n" +
        "            THEN\n" +
        "                found <- True\n" +
        "            ELSE:\n" +
        "                itemPointer <- myLinkedListPointers[itemPointer]\n" +
        "        ENDIF\n" +
        "    ENDWHILE\n" +
        "    RETURN itemPointer\n" +
        "    \n" +
        "myLinkedList = [27, 19, 36, 42, 16, None, None, None, None, None, None, None] \n" +
        "myLinkedListPointers = [-1, 0, 1, 2, 3 ,6 ,7 ,8 ,9 ,10 ,11, -1]\n" +
        "startPointer <- 4\n" +
        "nullPointer <- -1\n" +
        'OUTPUT "Please enter item to be found "\n' +
        "INPUT item\n" +
        "result <- find(item) \n" +
        "IF result <> -1:\n" +
        '    OUTPUT "Item found" \n' +
        "ELSE:\n" +
        '    OUTPUT "Item not found"',
    },

    {
      name: "Inserting items into a linked list",
      pseudocode:
        "PROCEDURE linkedListAdd(itemAdd)\n" +
        "    IF heapStartPointer = nullPointer\n" +
        "        THEN\n" +
        '            OUTPUT "Linked list full"\n' +
        "    ELSE\n" +
        "        tempPointer ← startPointer /\n" +
        "        startPointer ← heapStartPointer  \n" +
        "        heapStartPointer ← myLinkedListPointers[heapStartPointer]\n" +
        "        myLinkedList[startPointer] ← itemAdd\n" +
        "        myLinkedListPointers[startPointer] ← tempPointer\n" +
        "    ENDIF \n" +
        "ENDPROCEDURE",
      image: {
        name: addLinkedList1,
        alt: "LinkedList",
        width: "400px",
      },
    },
    {
      image: {
        name: addLinkedList2,
        alt: "LinkedList",
        width: "400px",
      },
    },
    {
      name: "Deleting items from a linked list",
      pseudocode:
        "PROCEDURE linkedListDelete(itemDelete)\n" +
        "    IF startPointer = nullPointer\n" +
        "        THEN\n" +
        '            OUTPUT "Linked list empty"\n' +
        "        ELSE\n" +
        "            index ← startPointer\n" +
        "        WHILE myLinkedList[index] <> itemDelete AND\n" +
        "        (index <> nullPointer) DO\n" +
        "            oldIndex ← index\n" +
        "            index ← myLinkedListPointers[index]\n" +
        "        ENDWHILE\n" +
        "        IF index = nullPointer\n" +
        "            THEN\n" +
        '                OUTPUT "Item ", itemDelete, " not found"\n' +
        "            ELSE\n" +
        "                tempPointer ← myLinkedListPointers[index]\n" +
        "                myLinkedListPointers[index] ← heapStartPointer\n" +
        "                heapStartPointer ← index\n" +
        "                myLinkedListPointers[oldIndex] ← tempPointer\n" +
        "        ENDIF \n" +
        "    ENDIF\n" +
        "ENDPROCEDURE",
    },
    {
      name: "Create a new binary tree",
      pseudocode:
        "CONSTANT NullPointer = –1\n" +
        "TYPE TreeNode\n" +
        "    DECLARE Data : STRING\n" +
        "    DECLARE LeftPointer : INTEGER \n" +
        "    DECLARE RightPointer : INTEGER\n" +
        "ENDTYPE\n" +
        "DECLARE RootPointer : INTEGER\n" +
        "DECLARE FreePtr : INTEGER\n" +
        "DECLARE Tree : ARRAY[0 : 6] OF TreeNode \n" +
        "PROCEDURE InitialiseTree\n" +
        "    RootPointer ← NullPointer\n" +
        "    FreePtr ← 0 \n" +
        "    FOR Index ← 0 TO 5 \n" +
        "        Tree[Index].LeftPointer ← Index + 1 \n" +
        "    NEXT Index\n" +
        "    Tree[6].LeftPointer ← NullPointer\n" +
        "ENDPROCEDURE",
      image: {
        name: binaryTree,
        alt: "binary",
        width: "500px",
      },
    },
    {
      name: "Finding an item in a binary tree",
      pseudocode:
        "DECLARE rootPointer : INTEGER \n" +
        "DECLARE itemPointer : INTEGER \n" +
        "DECLARE itemSearch : INTEGER \n" +
        "CONSTANT nullPointer ←  -1 \n" +
        "rootPointer ← 0\n" +
        "FUNCTION find(itemSearch)\n" +
        "    itemPointer ← rootPointer\n" +
        "    WHILE myTree[itemPointer].item <> itemSearch AND\n" +
        "    (itemPointer <> nullPointer) DO\n" +
        "        IF myTree[itemPointer].item > itemSearch\n" +
        "            THEN\n" +
        "                itemPointer ← myTree[itemPointer].leftPointer\n" +
        "            ELSE\n" +
        "                itemPointer ← myTree[itemPointer].rightPointer\n" +
        "        ENDIF \n" +
        "    ENDWHILE\n" +
        "    RETURN itemPointer\n" +
        "ENDFUNCTION",
    },
    {
      name: "Inserting items into a binary tree",
      pseudocode:
        "PROCEDURE nodeAdd(itemAdd)\n" +
        "    IF nextFreePointer = nullPointer\n" +
        "        THEN\n" +
        '            OUTPUT "No nodes free"\n' +
        "        ELSE\n" +
        "            itemAddPointer ← nextFreePointer\n" +
        "            nextFreePointer ← myTree[nextFreePointer].leftPointer\n" +
        "            itemPointer ← rootPointer\n" +
        "            IF itemPointer = nullPointer\n" +
        "                THEN\n" +
        "                    rootPointer ← itemAddPointer\n" +
        "                ELSE\n" +
        "                    WHILE (itemPointer <> nullPointer) DO\n" +
        "                        oldPointer ← itemPointer\n" +
        "                        IF myTree[itemPointer].item > itemAdd\n" +
        "                            THEN\n" +
        "                                leftBranch ← TRUE\n" +
        "                                itemPointer ← myTree[itemPointer].leftPointer\n" +
        "                            ELSE \n" +
        "                                leftBranch ← FALSE\n" +
        "                                itemPointer ← myTree[itemPointer].rightPointer\n" +
        "                        ENDIF \n" +
        "                    ENDWHILE\n" +
        "                    IF leftBranch\n" +
        "                        THEN \n" +
        "                            myTree[oldPointer].leftPointer ← itemAddPointer \n" +
        "                        ELSE\n" +
        "                            myTree[oldPointer].rightPointer ← itemAddPointer \n" +
        "                    ENDIF\n" +
        "            ENDIF\n" +
        "        myTree[itemAddPointer].leftPointer ← nullPointer\n" +
        "        myTree[itemAddPointer].rightPointer ← nullPointer\n" +
        "        myTree[itemAddPointer].item ← itemAdd\n" +
        "    ENDIF \n" +
        "ENDPROCEDURE",
    },


  ],
};
