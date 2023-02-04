import linkedList from "../../../../../assets/images/emptyLinkedList.png";
import addLinkedList1 from "../../../../../assets/images/addLinkedList1.png";
import addLinkedList2 from "../../../../../assets/images/addLindedList2.png";

export const codes = {
  name: "Codes",
  definations: [
    {
      name: "Linear search with a for loop",
      code:
        "def linearSearch(array, l, n):\n" +
        "    for i in range(0, l):\n" +
        "        if (array[i] == n):\n" +
        "            return i\n" +
        "    return -1\n" +
        "\n" +
        "\n" +
        "array = [5, 8, 1, 2, 13, 7,  9, 10, 11, 6]\n" +
        "n = int(input('n = '))\n" +
        "lengthArray = len(array)\n" +
        "result = linearSearch(array, lengthArray, n)\n" +
        "if(result == -1):\n" +
        '    print("Son mavjud emas")\n' +
        "else:\n" +
        '    print("Son mavjud, indeksi: ", result)',
    },

    {
      name: "Binary Search",
      code:
        "def binary_search(search_item):\n" +
        " \n" +
        "    first = 0\n" +
        "    last = len(items) - 1\n" +
        "    while first <= last :\n" +
        "        midpoint = (first + last) // 2\n" +
        "        if items[midpoint] == search_item:\n" +
        "            return midpoint    \n" +
        "        elif items[midpoint] < search_item:\n" +
        "            first = midpoint + 1\n" +
        "        else:\n" +
        "            last = midpoint - 1\n" +
        "            \n" +
        "    return -1\n" +
        "    \n" +
        "items = [1, 3, 5, 7, 11, 13, 17, 19, 23, 27, 31, 37, 41, 43, 47, 53, 59]\n" +
        "s = int(input('n = '))\n" +
        "index = binary_search(s)\n" +
        "if (index != -1):\n" +
        "    print(index)\n" +
        "else:\n" +
        "    print('not found')",
    },
    {
      name: "Bubble sort with for loops",
      code:
        "def bubble_sort_version_for():\n" +
        "    num_items = len(items)\n" +
        "\n" +
        "    for pass_num in range(1, num_items):\n" +
        "        for index in range(0, num_items - pass_num):\n" +
        "            if items[index] > items[index + 1]:\n" +
        "                temp = items[index]\n" +
        "                items[index] = items[index + 1]\n" +
        "                items[index + 1] = temp\n" +
        "                \n" +
        "\n" +
        "items = [29, 10, 14, 37, 14, 2, 17, 41, 32, 5]\n" +
        "bubble_sort_version_for()\n" +
        "print(items)",
    },
    {
      name: "Bubble sort with while and for loops",
      code:
        "def bubble_sort_version_while_and_for():\n" +
        "    num_items = len(items)\n" +
        "    swapped = True\n" +
        "    pass_num = 1\n" +
        "\n" +
        "    while swapped == True:\n" +
        "        swapped = False\n" +
        "        for index in range(0, num_items - pass_num):\n" +
        "            if items[index] > items[index + 1]:\n" +
        "                temp = items[index]\n" +
        "                items[index] = items[index + 1]\n" +
        "                items[index + 1] = temp\n" +
        "                swapped = True\n" +
        "        pass_num = pass_num + 1\n" +
        "    \n" +
        "items = [29, 10, 14, 37, 14, 2, 17, 41, 32, 5]\n" +
        "bubble_sort_version_while_and_for()\n" +
        "print(items)",
    },
    {
      name: "Insertion sort",
      code:
        "def insertion_sort():\n" +
        "    num_items = len(items)\n" +
        "    \n" +
        "    for index in range(1, num_items):\n" +
        "        item_to_insert = items[index]\n" +
        "        position = index - 1\n" +
        "        while position >= 0 and items[position] > item_to_insert:\n" +
        "            items[position + 1] = items[position]\n" +
        "            position = position - 1\n" +
        "        items[position + 1] = item_to_insert\n" +
        "    \n" +
        "items = [3, 44, 38, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]\n" +
        "insertion_sort()\n" +
        "print(items)",
    },

    {
      name: "Create new Linked List",
      code:
        "myLinkedList = ['' for i in range(12)]\n" +
        "myLinkedListPointers = [index for index in range(11)]\n" +
        "myLinkedListPointers  = -1\n" +
        "startPointer = -1\n" +
        "heapStartPointer = 0\n" +
        "myLinkedListPointers[11] = -1 \n",
      image: {
        name: linkedList,
        alt: "LinkedList",
        width: "400px",
      },
    },
    {
      name: "Find item in Linked List",
      code:
        "def find(itemSearch): \n" +
        "    found = False\n" +
        "    itemPointer = startPointer\n" +
        "    while itemPointer != nullPointer and not found:\n" +
        "        if myLinkedList[itemPointer] == itemSearch: \n" +
        "            found = True\n" +
        "        else:\n" +
        "            itemPointer = myLinkedListPointers[itemPointer]\n" +
        "    return itemPointer\n" +
        "    \n" +
        "myLinkedList = [27, 19, 36, 42, 16, None, None, None, None, None, None, None] \n" +
        "myLinkedListPointers = [-1, 0, 1, 2, 3 ,6 ,7 ,8 ,9 ,10 ,11, -1]\n" +
        "startPointer = 4\n" +
        "nullPointer = -1\n" +
        'item = int(input("Please enter item to be found ")) \n' +
        "result = find(item) \n" +
        "if result != -1:\n" +
        '    print("Item found") \n' +
        "else:\n" +
        '    print("Item not found")',
    },
    {
      name: "Inserting items into a linked list",
      code:
        "def linkedListAdd(itemAdd):\n" +
        "    global startPointer\n" +
        "    if heapStartPointer == nullPointer:\n" +
        '        print("Linked List full") \n' +
        "    else:\n" +
        "        tempPointer = startPointer\n" +
        "        startPointer = heapStartPointer\n" +
        "        heapStartPointer = myLinkedListPointers[heapStartPointer]\n" +
        "        myLinkedList[startPointer] = itemAdd\n" +
        "        myLinkedListPointers[startPointer] = tempPointer",
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
      code:
        "def linkedListDelete(itemDelete):\n" +
        "    global startPointer, heapStartPointer \n" +
        "    if startPointer == nullPointer:\n" +
        '        print("Linked List empty") \n' +
        "    else:\n" +
        "        index = startPointer\n" +
        "        while myLinkedList[index] != itemDelete and index != nullPointer:\n" +
        "            oldindex = index\n" +
        "            index = myLinkedListPointers[index] \n" +
        "        if index == nullPointer:\n" +
        '            print("Item ", itemDelete, " not found") \n' +
        "        else:\n" +
        "            myLinkedList[index] = None\n" +
        "            tempPointer = myLinkedListPointers[index]\n" +
        "            myLinkedListPointers[index] = heapStartPointer\n" +
        "            heapStartPointer = index\n" +
        "            myLinkedListPointers[oldindex] = tempPointer",
    },
    {
      name: "Create a new binary tree",

    }
  ],
};
