export const queue = {
    name: 'Search item in queue',
    definations:[
        {
            pseudocode:"",
            code:"def searchQueue(startPointer, searchItem):\n" +
                "    if (startPointer == len(a)):\n" +
                "        return -1\n" +
                "    elif (a[startPointer] == searchItem ):\n" +
                "        return startPointer\n" +
                "    else:\n" +
                "        a[startPointer] = ''\n" +
                "        return searchQueue(startPointer + 1, searchItem)\n" +
                "        \n" +
                "a = [1, 9, 8,  6, 3]\n" +
                "startPointer = 0\n" +
                "n = int(input(\"Please enter search item: \"))\n" +
                "f = searchQueue(startPointer, n)\n" +
                "if f == -1:\n" +
                "    print(\"Item not found\")\n" +
                "else:\n" +
                "    print(\"Item index\", f)",
        }
    ]
}
