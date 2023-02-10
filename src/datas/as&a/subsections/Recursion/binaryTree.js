export const binaryTree = {
    name: 'Insertion Sort',
    definations:[
        {
            name: 'Search item in binary tree',
            pseudocode:"",
            code:"def searchBinaryTree(root, searchItem):\n" +
                "    if (a[root][1] == searchItem):\n" +
                "        return root\n" +
                "    elif (a[root][0]== -1 and a[root][2]== -1):\n" +
                "        return -1\n" +
                "    else:\n" +
                "        if (searchItem < a[root][1]):\n" +
                "            return searchBinaryTree(a[root][0], searchItem)\n" +
                "        else:\n" +
                "            return searchBinaryTree(a[root][2], searchItem)\n" +
                "\n" +
                "a = [ [1, 27, 2], [4, 19, 6], [-1, 36, 3], [-1, 42, 5], [-1, 16, 7], [8, 89, -1], [-1, 21, -1], [-1, 17, 9], [-1, 55, -1] ]\n" +
                "\n" +
                "n = int(input(\"Please enter search item: \"))\n" +
                "f = searchBinaryTree(0, n)\n" +
                "if (f != -1):\n" +
                "    print(\"Item found index:\", f)\n" +
                "else:\n" +
                "    print(\"Not found\")\n"
        }
    ]
}
