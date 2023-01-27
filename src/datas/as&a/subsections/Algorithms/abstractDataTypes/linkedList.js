import linked from "../../../../../assets/images/linked-list.png";
export const linkedList = {
  name: "Linked list",
  definations: [
    {
      defination: (
        <>
          Linked list — bu tugunlardan ya’ni Node’lardan iborat chiziqli tuzilma
          bo’lib, har bir node o’zida elementni va keyingi (ba’zan oldingi ham)
          node adresini ko’rsatuvchi ko’rsatkichni (pointerni) saqlaydi.
          <br />
          <br />
          Dastlabki Node head deb ataladi. Head’dan keyingi node’lar o’zidan
          oldingi node’ning pointeri’ga bog’langan bo’ladi. Demak biz dastlabki
          node, ya’ni head’ni bilgan holda, pointerlar yordamida keyingi
          node’larga o’tib kerakli elementni topamiz. Array’da index nomerini
          bilib, darhol arr[index] bilan elementni o’qib olgan bo’lsak, Linked
          listda o’sha elementga borish uchun ungacha bo’lgan barcha
          elementlardan o’tib kelish kerak.
          <br />
          <br />
        </>
      ),

      image: {
        name: linked,
        alt: "Loop",
        width: "600px",
      },
    },
    {
      name: "Linked list ustida bajariladigan asosiy amallar",
      defination: (
        <>
          <b>Ro’yhat boshiga element qo’shish (insertAtHead). O(1) vaqtda</b>
          <br />
          Yangi node qo’shilib, uning pointeriga linked list head’i ko’rsatib
          qo’yiladi. <br /> <br />
          <b>Ro’yhat oxiriga element qo’shish (insertAtEnd). O(1) vaqtda</b>
          <br />
          Yangi node qo’shiladi. Uni linked list ohiriga qo’shish uchun oldin
          pointer = null bo’lgan ohirini topib olinadi. Keyin pointer yangi
          node’ga ko’rsatib qo’yiladi. <br /> <br />
          <b>Ma’lum bir elementni o’chirish (Delete). O(1) vaqtda</b>
          <br />
          Buning uchun linked list ichidan element topiladi. Agar element
          o’rtada bo’lsa Undan oldingi elementning pointeri undan keyingi
          elementga ulab qo’yiladi. Ohirida bo’lsa, oldingi elementning pointeri
          bo’shatiladi. <br /> <br />
          <b>
            Ma’lum bir elementni o’qib olish. Qidirish (Search). O(n) vaqtda
          </b>{" "}
          <br />
          Elementni qidirish har doim linked list boshidan boshlanadi.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Linked listni e'lon qilish</b>
        </>
      ),
      pseudocode:
        "DECLARE myLinkedList Array[0:11] OF INTEGER\n" +
        "DECLARE myLinkedListPointers Array[0:11] OF INTEGER\n" +
        "DECLATE startPointer: INTEGER\n" +
        "DECLARE heapStartPointer: INTEGER\n" +
        "DECLARE index: INTEGER\n" +
        "heapPointer <- 0\n" +
        "startPointer <- -1\n" +
        "FOR index <- 0 TO 11\n" +
        "    myLinkedListPointers[index] <- index + 1\n" +
        "NEXT index\n" +
        "myLinkedListPointers[index] <- -1",
      code:
        "myLinkedList = ['' for i in range(12)]\n" +
        "myLinkedListPointers = [index for index in range(11)]\n" +
        "myLinkedListPointers  = -1\n" +
        "startPointer = -1\n" +
        "heapStartPointer = 0",
    },

    {
      defination: <>Linked listdan kiritilgan sonni qidirish algoritmi.</>,

      pseudocode:
        "numbers <- [6, 7, 3, 9, 2, 4, 1, 0, 5, 8]\n" +
        "NextPointer <- [1, 9, 5, -1, 2, 8, 4, 6, 0, 3]\n" +
        "HeadPointer <- 4\n" +
        "Pointer <- HeadPointer \n" +
        "Found <- -1\n" +
        'OUTPUT "Enter a searching number "\n' +
        "INPUT searchingNumber\n" +
        "WHILE Pointer <> -1\n" +
        "    IF Numbers[Pointer] = searchingNumber THEN \n" +
        "        Found <- Pointer\n" +
        "        Pointer <- -1\n" +
        "    ELSE\n" +
        "        Pointer <- NextPointer[Pointer] \n" +
        "    ENDIF\n" +
        "ENDWHILE\n" +
        "IF Found <> -1 THEN\n" +
        '   OUTPUT Found, " is found"\n' +
        "ELSE\n" +
        '   OUTPUT "The number you wanted is not in the list"\n' +
        "ENDIF",

      code:
        "numbers =     [6, 7, 3, 9, 2, 4, 1, 0, 5, 8]\n" +
        "nextPointer = [1, 9, 5, -1, 2, 8, 4, 6, 0, 3]\n" +
        "headPointer = 7\n" +
        "pointer = headPointer \n" +
        "found = -1\n" +
        'searchingNumber = int(input("Enter a searching number "))\n' +
        "while (pointer != -1):\n" +
        "    print(pointer)\n" +
        "    if numbers[pointer] == searchingNumber: \n" +
        "        found = pointer\n" +
        "        pointer = -1\n" +
        "    else:\n" +
        "        pointer = nextPointer[pointer] \n" +
        "if found != -1:\n" +
        "   print(found)\n" +
        "else:\n" +
        '   print("The number you wanted is not in the list")',
    },
    {
      name: "Tasks",
    },
    {
      defination: (
        <>
          <b>1. (9618/21/O/N/22:4)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>2. (9618/32/O/N/22:11)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>3. (9618/21/M/J/21:6)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>4. (9618/41/M/J/21:1)</b>
        </>
      ),
    },
  ],
};
