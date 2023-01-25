import binarysearch from "../../../../assets/images/binarySearch.gif";

export const binarySearch = {
  name: "Binary",
  definations: [
    {
      name: "Binary search",
      defination: (
        <>
          If you want to look up a word in a dictionary, you are unlikely to
          start searching for the word from the beginning of the dictionary.
          Suppose you are looking for the word ‘quicksort’. You look at the
          middle entry of the dictionary (approximately) and find the word
          ‘magnetic’. ‘quicksort’ comes after ‘magnetic’, so you look in the
          second half of the dictionary. Again, you look at the entry in the
          middle of this second half of the dictionary (approximately) and find
          the word ‘report’. ‘quicksort’ comes before ‘report’, so you look in
          the third quarter. You can keep looking at the middle entry of the
          part which must contain your word, until you find the word. If the
          word does not exist in the dictionary, you will have no entries in the
          dictionary left to find the middle of.
          <br />
          This method is known as a <b>binary search</b>. It is a standard
          method.
        </>
      ),
    },

    {
      defination: (
        <>
          Agar siz lug‘atdan biror so‘z qidirmoqchi bo‘lsangiz, so‘zni lug‘at
          boshidan boshlab qidirishni boshlashingiz dargumon. Aytaylik, siz
          "quicksort" so'zini qidiryapsiz. Siz lug'atning o'rta yozuviga
          qaraysiz (taxminan) va "magnetic" so'zini topasiz. "quicksort"
          "magnetic" dan keyin keladi, shuning uchun siz lug'atning ikkinchi
          yarmiga qaraysiz. Shunga qaramay, siz lug'atning ikkinchi yarmining
          o'rtasida joylashgan yozuvga qaraysiz (taxminan) va "report" so'zini
          topasiz. "quicksort" "report" dan oldin keladi, shuning uchun siz
          uchinchi chorakka qaraysiz. Siz so'zni topmaguningizcha, so'zni o'z
          ichiga olishi kerak bo'lgan qismning o'rta qismiga qarashingiz mumkin.
          Agar so'z lug'atda mavjud bo'lmasa, o'rtasini topish uchun lug'atda
          hech qanday yozuv qolmaydi. <br /> Ushbu usul <b>binary search</b>{" "}
          sifatida tanilgan. Bu standart usul.
        </>
      ),
      language: "uzb",
      image: {
        name: binarysearch,
        alt: "Loop",
        width: "600px",
      },
    },

    {
      pseudocode:
        "FUNCTION binary_search( search_item) \n" +
        "    found <- False\n" +
        "    first <- 0\n" +
        "    last <- LEN(items) - 1\n" +
        "\n" +
        "    WHILE first <= last DO\n" +
        "        midpoint <- (first + last) DIV 2\n" +
        "        IF items[midpoint] = search_item THEN \n" +
        "            RETURN midpoint\n" +
        "        ELSEIF items[midpoint] < search_item THEN\n" +
        "            first <- midpoint + 1\n" +
        "        ELSE\n" +
        "            last <- midpoint - 1\n" +
        "        ENDIF\n" +
        "    ENDWHILE\n" +
        "    \n" +
        "    RETURN -1\n" +
        "    \n" +
        "ENDFUNCTION\n" +
        "\n" +
        "DECLARE: items[1, 3, 5, 7, 11, 13, 17, 19, 23, 27, 31, 37, 41, 43, 47, 53, 59] OF INTEGER\n" +
        "index <- binary_search( search_item) \n" +
        "IF (index <> -1)\n" +
        "    THEN\n" +
        "        OUTPUT index\n" +
        "ELSE\n" +
        "    OUTPUT 'not found'",
      code:
        "def binary_search(search_item):\n" +
        "  \n" +
        "    found = False\n" +
        "    first = 0\n" +
        "    last = len(items) - 1\n" +
        "    \n" +
        "    while first <= last:\n" +
        "        midpoint = (first + last) // 2\n" +
        "        print( first,midpoint, last)\n" +
        "        if items[midpoint] == search_item:\n" +
        '            print("salom")\n' +
        "            return midpoint    \n" +
        "        elif items[midpoint] < search_item:\n" +
        "            first = midpoint + 1\n" +
        "        else:\n" +
        "            last = midpoint - 1\n" +
        "            \n" +
        "    return -1\n" +
        "    \n" +
        "items = [1, 3, 5, 7, 11, 13, 17, 19, 23, 27, 31, 37, 41, 43, 47, 53, 59]\n" +
        "\n" +
        "index = binary_search(19)\n" +
        "if (index != -1):\n" +
        "    print(index)\n" +
        "else:\n" +
        "    print('not found')",
    },

    {
      defination: (
        <>
          <b>1. </b> A 1D array Data of type integer contains 200 elements. Each
          element has a unique value.
          <br /> An algorithm is required to search for the largest value and
          output it.
          <br /> Describe the steps that the algorithm should perform.
          <br /> Do not include pseudocode statements in your answer.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>2. </b> Page 131. Task 12
        </>
      ),
    },
      {
          defination: (
              <>
                  <b>3(9608-21-M-41). </b> Page 186. Task 5
              </>
          ),
      },
      {
          defination: (
              <>
                  <b>3(9608-16-O-41). </b> Page 1142. Task 3
              </>
          ),
      },
  ],
};
