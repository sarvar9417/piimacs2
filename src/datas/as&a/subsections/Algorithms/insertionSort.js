import insertionsort from "../../../../assets/images/insertionSort.gif";

export const insertionSort = {
  name: "Insertion sort",
  definations: [
    {
      defination: (
        <>
          <b>The insertion sort</b> algorithm works by building up a sorted
          sublist in the first part of the original list, while the remaining
          part of the list remains unsorted.
          <br />
          <br />
          At the start of the algorithm, the sorted sublist contains just a
          single item (the first item in the list). All of the other items
          belong to the unsorted sublist. The algorithm goes through the
          unsorted sublist, item by item. As each item is examined, it is moved
          into the correct position (in ascending or descending order) in the
          sorted sublist. This progresses until the final item is correctly
          inserted and the list is sorted.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Insertion sort</b> algoritmi asl ro'yxatning bir qismida
          tartiblangan ro'yxatni yaratish orqali ishlaydi, qolgan qismi esa
          saralanmagan bo'lib qoladi.
          <br />
          <br />
          Algoritmning boshida tartiblangan ro'yxat faqat bitta elementni
          (ro'yxatdagi birinchi element) o'z ichiga oladi. Boshqa barcha
          elementlar tartiblanmagan ro'yxatga tegishli. Algoritm band bo'yicha
          tartiblanmagan ro'yxat bo'ylab o'tadi. Har bir element ko'rib
          chiqilayotganda, u tartiblangan ro'yxatda to'g'ri joyga (o'sish yoki
          kamayish tartibida) ko'chiriladi. Bu oxirgi element to'g'ri
          kiritilguncha va ro'yxat tartiblashtirilguncha davom etadi.
        </>
      ),

      image: {
        name: insertionsort,
        alt: "Task1",
        width: "400px",
      },
      language: "uzb",
    },

    {
      pseudocode:
        "PROCEDURE insertion_sort()\n" +
        "    num_items <- LEN(items)\n" +
        "\n" +
        "    FOR index <- 1 TO num_items - 1    \n" +
        "        item_to_insert <- items[index]\n" +
        "        position <- index - 1\n" +
        "        \n" +
        "        WHILE position >= 0 AND items[position] > item_to_insert\n" +
        "            items[position + 1] <- items[position]\n" +
        "            position <- position - 1\n" +
        "        ENDWHILE\n" +
        "        items[position + 1] <- item_to_insert  \n" +
        "     NEXT index    \n" +
        "ENDPROCEDURE\n" +
        " \n" +
        "DECLARE: item[3, 44, 38, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48] OF INTEGER\n" +
        " \n" +
        "insertion_sort()\n" +
        "OUTPUT items",

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
      name: "Tasks",
      defination: (
        <>
          <b>1. </b>The following procedure performs an insertion sort on the
          global array TheArray that has 10 elements.
          <br /> Complete the pseudocode for the procedure InsertionSort().
        </>
      ),
    },

    {
      defination: (
        <>
          Quyidagi protsedura 10 ta elementdan iborat TheArray global massivida
          insertion sortni amalga oshiradi.
          <br /> InsertionSort() protsedurasi uchun psevdokodni to'ldiring hamda ushbu pseudocode uchun dastur yozing.
        </>
      ),
      pseudocode:
        "PROCEDURE InsertionSort()\n" +
        "     DECLARE Count : INTEGER\n" +
        "     DECLARE Counter : INTEGER\n" +
        "     DECLARE Temp : INTEGER\n" +
        "     Count <- ............................................\n" +
        "     WHILE Count < 10\n" +
        "         Temp <- TheArray[Count]\n" +
        "         Counter Count .................................................\n" +
        "         WHILE ....................... >= 0 AND TheArray[Counter] > ...................................\n" +
        "             TheArray[Counter + 1] <-  TheArray[Counter]\n" +
        "             Counter <- Counter - 1\n" +
        "         ENDWHILE\n" +
        "         TheArray[.............................] <- Temp\n" +
        "         Count <- Count + 1\n" +
        "     ENDWHILE\n" +
        "ENDPROCEDURE",
    },

    {
      defination: (
        <>
          <b>2.</b>
          The club stored scores in a 1D array. This allows the club to sort the
          scores.
          <br />
          The following is a sorting algorithm in pseudocode.
        </>
      ),
      pseudocode:
        "NumberOfScores ← 5\n" +
        "FOR Item ← 1 TO NumberOfScores – 1\n" +
        "    InsertScore ← ArrayData[Item]\n" +
        "    Index ← Item – 1\n" +
        "    WHILE (ArrayData[Index] > InsertScore) AND (Index >= 0)\n" +
        "        ArrayData[Index + 1] ← ArrayData[Index]\n" +
        "        Index ← Index – 1\n" +
        "    ENDWHILE\n" +
        "    ArrayData[Index + 1] ← InsertScore\n" +
        "ENDFOR",
    },

    {
      defination: (
        <>
          <ul className="pl-7 list-disc">
            <li>Give the name of this algorithm.</li>
            <li>State the name of one other sorting algorithm.</li>
            <li>
              Complete a dry run of the algorithm using the following trace
              table.
            </li>
          </ul>

          <table className="w-full border text-center">
            <thead>
              <tr>
                <th
                  className="border border-neutral-400 text-center"
                  rowSpan={2}
                >
                  Item
                </th>
                <th
                  className="border border-neutral-400 text-center"
                  rowSpan={2}
                >
                  NumberOfScores{" "}
                </th>
                <th
                  className="border border-neutral-400 text-center"
                  rowSpan={2}
                >
                  InsertScore
                </th>
                <th
                  className="border border-neutral-400 text-center"
                  rowSpan={2}
                >
                  Index
                </th>
                <th
                  className="border border-neutral-400 text-center"
                  colSpan={5}
                >
                  ArrayData
                </th>
              </tr>
              <tr>
                <th className="border border-neutral-400 text">99</th>
                <th className="border border-neutral-400 text">125</th>
                <th className="border border-neutral-400 text">121</th>
                <th className="border border-neutral-400 text">109</th>
                <th className="border border-neutral-400 text">115</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-400 text-center py-4"></td>
                <td className="border border-neutral-400 text-center py-4"></td>
                <td className="border border-neutral-400 text-center py-4"></td>
                <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
              <tr>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
                  <td className="border border-neutral-400 text-center py-4"></td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
  ],
};
