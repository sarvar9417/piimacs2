import stack1 from "../../../../../assets/images/stack.gif";
export const stack = {
  name: "Stack",
  definations: [
    {
      defination: (
        <>
          A stack is an abstract data type that holds an ordered, linear
          sequence of items. In contrast to a queue, a stack is a{" "}
          <b>last in, first out (LIFO)</b> structure. A real-life example is a
          stack of plates: you can only take a plate from the top of the stack,
          and you can only add a plate to the top of the stack. If you want to
          reach a plate that is not on the top of the stack, you need to remove
          all of the plates that are above that one. In the same way, in a stack
          data structure, you can only access the element on the top of the
          stack. The element that was added last will be the one to be removed
          first. Therefore, to implement a stack, you need to maintain a pointer
          to the top of the stack (the last element to be added).
          <br />
          <br />
          <ul className="pl-7 list-disc">
            <li>
              <b>push(data)</b> - adds an element to the top of the stack
            </li>
            <li>
              <b>pop() </b>- removes an element from the top of the stack
            </li>
            <li>
              <b>peek() </b>- returns a copy of the element on the top of the
              stack without removing it
            </li>
            <li>
              <b>is_empty()</b> - checks whether a stack is empty
            </li>
            <li>
              <b>is_full()</b> - checks whether a stack is at maximum capacity
              when stored in a static (fixed-size) structure
            </li>
          </ul>
        </>
      ),
    },
    {
      defination: (
        <>
          Stack - bu tartiblangan, chiziqli elementlar ketma-ketligini
          saqlaydigan mavhum ma'lumotlar turi. Queue farqli o'laroq, stek oxirgi
          kiruvchi, birinchi chiqadi (LIFO) tuzilmasi hisoblanadi. Haqiqiy hayot
          misoli - bu g'ishtlar ustuni: siz faqat g'ishtning yuqori qismidan
          g'isht olishingiz mumkin va siz faqat g'ishtning yuqori qismiga g'isht
          qo'shishingiz mumkin. Agar siz stackning tepasida bo'lmagan g'ishtni
          olmoqchi bo'lsangiz, uning ustidagi barcha g'ishtlarni olib
          tashlashingiz kerak. Xuddi shu tarzda, stek ma'lumotlar strukturasida
          siz faqat stekning yuqori qismidagi elementga olishingiz mumkin.
          Oxirgi qo'shilgan element birinchi bo'lib o'chiriladi. Shuning uchun,
          stekni amalga oshirish uchun siz stekning yuqori qismi(so'nggi
          qo'shiladigan element)ga ko'rsatgichni saqlashingiz kerak.
          <br />
          <br />
          <ul className="pl-7 list-disc">
            <li>
              <b>push(data)</b> - stackga element qo'shish
            </li>
            <li>
              <b>pop() </b>- stackdan elementni olib tashlash
            </li>
            <li>
              <b>peek() </b>- stackni yuqori elemantini qaytarish
            </li>
            <li>
              <b>is_empty()</b> - stackni bo'shlikka tekshirish
            </li>
            <li>
              <b>is_full()</b> - stack to'laligini tekshirish
            </li>
          </ul>
        </>
      ),
      language: "uzb",
      image: {
        name: stack1,
        alt: "stack",
        width: "400px",
      },
    },

    {
      name: "Create a new stack",
      pseudocode:
        'CONSTANT EMPTYSTRING = ""\n' +
        "CONSTANT NullPointer = –1\n" +
        "CONSTANT MaxStackSize = 8\n" +
        "DECLARE BaseOfStackPointer : INTEGER\n" +
        "DECLARE TopOfStackPointer : INTEGER\n" +
        "DECLARE Stack : ARRAY[1 : MaxStackSize – 1] OF STRING\n" +
        "\n" +
        "PROCEDURE InitialiseStack \n" +
        "    BaseOfStackPointer ← 0\n" +
        "    TopOfStackPointer ← NullPointer\n" +
        "ENDPROCEDURE",
    },
    {
      name: "Push an item onto the stack",
      pseudocode:
        "PROCEDURE Push(NewItem)\n" +
        "    IF TopOfStackPointer < MaxStackSize – 1\n" +
        "    THEN \n" +
        "        TopOfStackPointer ← TopOfStackPointer + 1 \n" +
        "        Stack[TopOfStackPointer] ← NewItem \n" +
        "    ENDIF\n" +
        "ENDPROCEDURE",
    },
    {
      name: "Pop an item off the stack",
      pseudocode:
        "FUNCTION Pop()\n" +
        "    DECLARE Item : STRING\n" +
        "    Item ← EMPTYSTRING\n" +
        "    IF TopOfStackPointer > NullPointer\n" +
        "        THEN     \n" +
        "            Item ← Stack[TopOfStackPointer]\n" +
        "            TopOfStackPointer ← TopOfStackPointer – 1 \n" +
        "    ENDIF\n" +
        "    RETURN Item \n" +
        "ENDFUNCTION",
    },
  ],
};
