import bubleSort from "../../../../assets/images/bubbleSort.gif";

export const bubbleSort = {
  name: "Bubble sort",
  definations: [
    {
      name: "Bubble",
      defination: (
        <>
          <b>The bubble sort</b> algorithm works by repeatedly going through a
          list of items, comparing consecutive pairs of items and swapping the
          items if they are in the wrong order. The algorithm is called bubble
          sort because when sorting a list from lowest to highest value, the
          highest values are moved up the list, which some people imagine as
          bubbles in a fizzy drink rising to the top.
        </>
      ),
    },
    {
      language: "uzb",
      defination: (
        <>
          <b>Bubble sort</b> algoritmi elementlar roʻyxatini qayta va qayta
          koʻrib chiqish, ularning ketma-ket juftlarini solishtirish va agar
          ular notoʻgʻri tartibda boʻlsa, ularni almashtirish orqali ishlaydi.
          Bu algoritmida roʻyxatni o'sish tartibida saralashda eng katta
          qiymatlar roʻyxatning yuqorisiga koʻchiriladi, baʼzi odamlar buni
          gazli ichimlik ichidagi pufakchalar tepaga koʻtarilgandek tasavvur
          qilishadi shuning uchun bu algoritm <b>bubble sort</b> deb ataladi.
          <br />
        </>
      ),
      image: {
        name: bubleSort,
        alt: "Task1",
        width: "400px",
      },
    },
    {
      name: "Bubble sort  - for loop",
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
      name: "Bubble sort -  while and for loops",
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
      name: "Tasks",
      defination: (
        <>
          {" "}
          <b>1.</b>
          Bir o‘lchovli n ta elementi bor a massiv berilgan. Uning elementlarini
          kamayish tartibida tartiblang. Qo‘yish usuli: a1 va a2 larni
          taqqoslang. Zaruriyat bo‘lsa qiymatlarni almashtiring so‘ngra a3 ni
          chapdagisini qiymati bilan zarur bo‘lsa almashtiring va hokazo.
          Ularning tartiblari saqlab qolinsin va bu jarayon qolganlari uchun ham
          davom ettirilsin(2 dan n gacha). Qayta ishlangandan so‘ng massiv chop
          etilsin
        </>
      ),
    },
    {
      defination: (
        <>
          <b>2.</b> Quyida <b>bubble sort</b> pseudocode algoritmi to'plamdagi
          ma'lumotlarni kamayish tartibida tartiblaydi. Ushbu pseudokodda 5 ta
          to'liq bo'lmagan qatorlar bor. <br />
          <ul className="pl-7 list-disc">
            <li> pseudokodning 5 ta to'liq bo'lmagan qatorini to'ldiring</li>
            <li> bubleSort() protsedurasi uchun dastur kodini yozing. </li>
          </ul>
        </>
      ),
      pseudocode:
        "PROCEDURE bubbleSort()\n" +
        "    DECLARE temp : INTEGER\n" +
        "    FOR x <- 0 to …………………………………\n" +
        "        FOR y <- 0 to …………………………………\n" +
        "            IF theArray[y] ………………………………… theArray[y + 1] \n" +
        "                THEN\n" +
        "                     temp <- theArray[y]\n" +
        "                     theArray[y] …………………………………\n" +
        "                     theArray[y + 1] …………………………………\n" +
        "            ENDIF\n" +
        "        NEXT y\n" +
        "    NEXT x\n" +
        " ENDPROCEDURE",
    },
    {
      defination: (
        <>
          <b>3. </b>
          A bubble sort algorithm is used to sort an integer array, List. This
          algorithm can process arrays of different lengths.
          <br />
          Write pseudocode to complete the bubble sort algorithm shown.
        </>
      ),
      pseudocode:
        "FOR Outer ..... TO 0 STEP - 1\n" +
        "    FOR Inner 0 TO (.....................)\n" +
        "        IF ......... > ...........\n" +
        "            THEN\n" +
        "                Temp .................................\n" +
        "                List[Inner] ..........................\n" +
        "                List[Inner + 1] .........................\n" +
        "        ENDIF\n" +
        "    ENDFOR \n" +
        "ENDFOR ",
    },
    {
      defination: (
        <>
          <ul className="pl-7 list-disc">
            <li>State the order of the sorted array</li>
            <li>
              State which line of the algorithm you would change to sort the
              array into the opposite order
            </li>
            <li>
              Use pseudocode to write an alternative version of this bubble sort
              algorithm that will exit the algorithm when the list is fully
              sorted.
            </li>
          </ul>
        </>
      ),
    },

    {
      defination: <> <b>4.</b> Page 96. Task 7</>,
    },
    {
      defination: <><b>5.</b> Page 112. Task 7</>,
    },
    {
      defination: <><b>6.</b> Page 158. Task 1</>,
    },
    {
      defination: <><b>7.</b> Page 182. Task 1</>,
    },
    {
      defination: <><b>8.</b> Page 254. Task 5</>,
    },
    {
      defination: <><b>9.</b> Page 294. Task 5</>,
    },
    {
      defination: <><b>10.</b> Page 314. Task 8</>,
    },
    {
      defination: <><b>11.</b> Page 347. Task 2</>,
    },
    {
      defination: <><b>12.</b> Page 428. Task 5</>,
    },
  ],
};
