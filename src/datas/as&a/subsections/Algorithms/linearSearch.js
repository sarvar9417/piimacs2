import linearSearch1 from "../../../../assets/images/linearSearch.png";
import linearSearch2 from "../../../../assets/images/linearsearch2.svg";
import linearSearch3 from "../../../../assets/images/linearsearch3.svg";
import linearSearch4 from "../../../../assets/images/linearsearchiitr.gif";

export const linearSearch = {
  name: "Linear",
  definations: [
    {
      name: "Linear search",
      defination: (
        <>
          The only methodical way to find a specific item in an <b>unordered</b>{" "}
          list of items or a sequence of data is to look at every item in the
          list, one after another, and check if it is what you are looking for.
          The algorithm for this process is called <b>linear search</b>, because
          it involves starting from the beginning of the list and checking one
          item at a time to see if it’s the right one.
          <br />
          <br />
          For example, suppose that you have seven playing cards placed face
          down and arranged randomly. Notice that the first card is 'Card 0' and
          the last one 'Card 6'. This is done on purpose because in computer
          science the first position in a list or array is position 0.
          <br />
          <br />
          You are searching through the cards for the four of spades. How would
          you do that using the linear search? You would have to check the cards
          one by one until you find the card you are looking for or you don't
          find it at all.
        </>
      ),
    },

    {
      defination: (
        <>
          <b>Tartiblanmagan</b> elementlar roʻyxati yoki maʼlumotlar
          ketma-ketligidan maʼlum bir elementni topishning yagona usuli bu
          roʻyxatdagi har bir elementni birin-ketin koʻrib chiqish va u siz
          izlayotgan narsa ekanligini tekshirishdir. Ushbu jarayonning algoritmi{" "}
          <b>linear search</b> deb ataladi, chunki u ro'yxatning boshidan
          boshlab har bitta elementni to'g'ri yoki yo'qligini tekshirib chiqadi.
          <br />
          <br />
          Misol uchun, sizda teskari qo'yilgan va tasodifiy joylashtirilgan
          ettita o'yin kartasi bor, deylik. E'tibor bering, birinchi karta "Card
          0" va oxirgisi "Card 6". Kompyuterda har doim sanoq boshi 0
          bo'lganligi uchun birinchi karta 0 bilan raqamlanadi.
          <br />
          <br />
          Siz kartalar ichidan 4 qarg'ani qidiryapsiz. Buni <b>
            binary search
          </b>{" "}
          yordamida qanday amalga oshirasiz? <br />
          Siz qidirayotgan kartani topmaguningizcha yoki umuman topa
          olmaguningizcha, kartalarni birma-bir tekshirishingiz kerak bo'ladi.
        </>
      ),
      language: "uzb",
    },

    {
      defination: (
        <>
          <b>Figure 1</b> shows that you check the first card (Card 0). It is
          not the four of spades so you go to the next card.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>1-qadamda</b> siz birinchi karta(Card 0)ni tekshirishingiz
          ko'rsatilgan . Bu 4 qarg'a emas, shuning uchun siz keyingi kartaga
          o'tasiz.
        </>
      ),
      language: "uzb",
      image: {
        name: linearSearch1,
        alt: "Loop",
        width: "600px",
      },
    },
    {
      defination: (
        <>
          <b>Figure 2</b> shows that you check the second card (Card 1). It is
          not the four of spades so you go to the next card.
        </>
      ),
    },

    {
      defination: (
        <>
          <b>2-qadamda</b> siz ikkinchi karta(Card 1)ni tekshirishingiz
          ko'rsatilgan. Bu ham 4 qarg'a emas, shuning uchun siz keyingi kartaga
          o'tasiz.
        </>
      ),
      language: "uzb",
      image: {
        name: linearSearch2,
        alt: "Loop",
        width: "600px",
      },
    },
    {
      defination: (
        <>
          <b>Figure 3</b> shows that you check the third card (Card 2). It is
          the four of spades! You have found the card that you are looking for
          so you stop searching.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>3-qadamda</b> siz uchunchi karta(Card 2)ni tekshirishingiz
          ko'rsatilgan. Bu 4 qarg'a. Siz izlayotgan kartani topdingiz, shuning
          uchun qidirishni to'xtatasiz.
        </>
      ),
      language: "uzb",
      image: {
        name: linearSearch3,
        alt: "Loop",
        width: "600px",
      },
    },
    {
      defination: (
        <>
          Notice that if the four of spades wasn't one of the seven cards you
          were checking, you would have to check all seven cards to confirm that
          it's not there.
        </>
      ),
    },

    {
      defination: (
        <>
          Diqqat! Agar 4 qarg'a siz tekshirayotgan ettita kartadan biri
          bo'lmasa, u erda yo'qligini tasdiqlash uchun barcha ettita kartani
          tekshirishingiz kerak bo'lar edi.
        </>
      ),
      language: "uzb",
    },

    {
      name: "Tasks",
      defination: (
        <>
          1. [5, 8, 1, 2, 13, 7, 9, 10, 11, 6] to'plam ichida kiritilgan n soni
          mavjud yoki mavjud emasligini topish algoritmi uchun pseudocode hamda
          dastur tuzing.
        </>
      ),
      image: {
        name: linearSearch4,
        alt: "Task1",
        width: "400px",
      },
      pseudocode:
        "FUNCTION linearSearch(array, l, n):\n" +
        "    FOR i <- 0 TO l DO:\n" +
        "        IF (array[i] = n)\n" +
        "            THEN \n" +
        "                RETURN i\n" +
        "        ENDIF\n" +
        "    NEXT i\n" +
        "    RETURN -1\n" +
        "\n" +
        "\n" +
        "DECLARE: array [5, 8, 1, 2, 13, 7,  9, 10, 11, 6] OF INTEGER\n" +
        "INPUT n\n" +
        "lengthArray <- LENGTH(array)\n" +
        "result <- linearSearch(array, lengthArray, n)\n" +
        "IF (result = -1)\n" +
        "    THEN\n" +
        '        OUTPUT "Son mavjud emas"\n' +
        "ELSE\n" +
        '    OUTPUT "Son mavjud, indeksi: ", result\n' +
        "ENDIF",
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
      defination: (
        <>
          2. A function, linearSearch(), takes an integer as a parameter and
          performs a linear search on arrayData to find the parameter value. It
          returns True if it was found and False if it was not found.
          <br />
          Write program code for the function linearSearch().
          <br />
          <br />
          LinearSearch() funksiyasi parametr sifatida butun sonni oladi va
          parametr qiymatini topish uchun arrayData da chiziqli qidiruvni amalga
          oshiradi. Agar topilsa True, topilmasa False qaytaradi.
          <br />
          Ushbu linearSearch() funksiyasi uchun dastur kodini yozing.
        </>
      ),
      code:
        "def linearSearch(searchValue):\n" +
        "    for x in range(0, 10):\n" +
        "        if (arrayData[x] == searchValue):\n" +
        "            return True\n" +
        "    return False \n" +
        " \n" +
        "arrayData = [10, 5, 6, 7, 1, 12, 13, 15, 21, 8]\n" +
        'searchValue = int(input("Enter the number to search for"))\n' +
        "returnValue = linearSearch(searchValue)\n" +
        "if returnValue == True:\n" +
        '    print("It was found")\n' +
        "else:\n" +
        '    print("It was not found")',
    },
      {
          defination: (
              <>
                  <b>3.</b> Page 131. Task 12
              </>
          ),
      },
      {
          defination: (
              <>
                  <b>4.</b> Page 346. Task 2
              </>
          ),
      },
  ],
};
