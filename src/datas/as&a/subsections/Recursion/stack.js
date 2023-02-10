export const stack = {
    name: 'Search item in stack',
    definations:[
        {
            pseudocode:"",
            code:"def searchStack(topPointer, searchItem):\n" +
                "    if (topPointer == -1):\n" +
                "        return topPointer\n" +
                "    elif (a[topPointer] == searchItem ):\n" +
                "        return topPointer\n" +
                "    else:\n" +
                "        a.pop()\n" +
                "        return searchStack(topPointer - 1, searchItem)\n" +
                "        \n" +
                "a = [1, 9, 8,  6, 3]\n" +
                "topPointer = 4\n" +
                "n = int(input(\"Please enter search item: \"))\n" +
                "f = searchStack(topPointer, n)\n" +
                "if f == -1:\n" +
                "    print(\"Item not found\")\n" +
                "else:\n" +
                "    print(\"Item index\", f)"
        }
    ]
}
