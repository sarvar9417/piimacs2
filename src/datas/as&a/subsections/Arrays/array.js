import arrayBirds from "../../../../assets/images/arrayBirds.svg";

export const array = {
  name: "Array",
  definations: [
    {
      term: <> An array </>,
      defination: (
        <>
          is a data structure that holds a number of data items or elements of
          the same data type. When you want to store many pieces of data that
          are related and have the same data type, it is often better to use an
          array instead of many separate variables. An element in an array can
          be accessed using the the location number, known as <b>index</b>. In
          this array of bird names, Seagull is in index 0, Falcon is in index 1,
          Eagle is in index 2, and Robin in index 3. It is important to point
          out that in most programming languages, the first index in an array is
          0, not 1.
        </>
      ),
    },

    {
      term: <>Array (massiv)</>,
      defination: (
        <>
          bu bir xil turdagi ma'lumotlarning bir nechta elementlari yoki
          elementlarini o'z ichiga olgan ma'lumotlar strukturasi. Bir-biriga
          bog'langan va bir xil ma'lumotlar turiga ega bo'lgan ko'plab
          ma'lumotlarni saqlamoqchi bo'lsangiz, ko'p alohida o'zgaruvchilar
          o'rniga massivdan foydalanish yaxshiroqdir. Massivdagi elementga{" "}
          <b>index</b> deb nomlanuvchi joylashuv raqami yordamida kirish mumkin.
          Masalan: quyigadi jadvalda tasvirlangan qush nomlari massivida Seagull
          - 0, Falcon - 1, Eagle - 2 va Robin - 3 indexda joylashgan. Shuni
          ta'kidlash kerakki, ko'pgina dasturlash tillarida massivdagi birinchi
          indeks 1 emas, 0 deb olinadi.
          <br />
          <br />
          <table className="w-full border text-center">
            <thead>
              <tr>
                <th className="border border-neutral-400 text-center">
                  Location number
                </th>
                <th className="border border-neutral-400 text-center">0</th>
                <th className="border border-neutral-400 text-center">1</th>
                <th className="border border-neutral-400 text-center">2</th>
                <th className="border border-neutral-400 text-center">3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-400 text-center">
                  Element
                </td>
                <td className="border border-neutral-400 text-center">
                  Seagull
                </td>
                <td className="border border-neutral-400 text-center">
                  Falcon
                </td>
                <td className="border border-neutral-400 text-center">Eagle</td>
                <td className="border border-neutral-400 text-center">Robin</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </>
      ),
      image: {
        name: arrayBirds,
        alt: "Loop",
        width: "600px",
      },
    },
    {
      defination: (
        <>
          Different programming languages implement array type structures in a
          variety of ways. In some languages, an array is implemented as a
          static data structure. Its length (the number of elements it has) is
          fixed when declared and cannot be changed during runtime. This type of
          array is often referred to in exam questions.
          <br />
          In other languages, arrays are dynamic. In Python, a <b>list</b> is a
          data structure that can be indexed like an array. However, it is
          dynamic and can hold different types of data (at the same time) so
          does not conform to the pure definition of an array.
        </>
      ),
    },

    {
      defination: (
        <>
          Turli dasturlash tillari massivlar turlicha usullarda e'lon qilinadi.
          Ba'zi tillarda massiv statik ma'lumotlar strukturasi sifatida e'lon
          qilinadi. Uning uzunligi (uning elementlari soni) e'lon qilinganda
          belgilanadi va uni ish vaqtida o'zgartirib bo'lmaydi. Ushbu turdagi
          massiv ko'pincha imtihon savollarida keladi.
          <br />
          Massiv dynamic bo'lgan dasturlar tillari ham mavjud(mas: Python).
          Pythonda list massiv kabi indekslanishi mumkin boʻlgan maʼlumotlar
          strukturasidir. Biroq, u dinamik va har xil turdagi ma'lumotlarni (bir
          vaqtning o'zida) saqlashi mumkin, shuning uchun massivning aniq
          ta'rifiga mos kelmaydi.
        </>
      ),
    },

    {
      name: "Static data",
      defination: (
        <>
          When you create a static data structure, the system reserves memory
          for a set amount of data. This is established by the programmer in
          advance, even though less memory may actually be needed during program
          execution. In many programming languages, an array is usually
          implemented as a static data structure that is fixed in size and can
          only contain elements of the same data type. The contents of a static
          array can be changed, but the array cannot be resized.
          <br />
          Static arrays are very efficient in terms of being able to access
          elements directly, but can be inefficient in terms of memory use.
          Memory is wasted if, for example, the array is declared with space for
          100 elements but only 10 elements are added when the program is run.
          On the other hand, if insufficient space has been allocated, the
          program may crash or not work properly.
        </>
      ),
    },
    {
      name: "Static ma'lumotlar",
      defination: (
        <>
          Statik ma'lumotlar strukturasini yaratganingizda, tizim ma'lum
          miqdordagi ma'lumotlar uchun xotirani zahiraga oladi. Bu dasturchi
          tomonidan oldindan belgilab qo'yiladi, garchi dasturni bajarishda
          aslida kamroq xotira talab qilinishi mumkin. Ko'pgina dasturlash
          tillarida massiv odatda o'lchami aniq bo'lgan va faqat bir xil turdagi
          ma'lumotlar elementlarini o'z ichiga olishi mumkin bo'lgan statik
          ma'lumotlar strukturasi sifatida amalga oshiriladi. Statik massiv
          tarkibini o'zgartirish mumkin, lekin massiv hajmini o'zgartirib
          bo'lmaydi.
          <br />
          Statik massivlar elementlarga to'g'ridan-to'g'ri kirish imkoniyati
          nuqtai nazaridan juda samarali, lekin xotiradan foydalanish nuqtai
          nazaridan samarasiz bo'lishi mumkin. Masalan, massiv 100 ta element
          uchun bo'sh joy bilan e'lon qilinsa, lekin dastur ishga tushirilganda
          faqat 10 ta element qo'shilsa, xotira isrof qilinadi. Boshqa tomondan,
          agar etarli joy ajratilmagan bo'lsa, dastur ishdan chiqishi yoki
          to'g'ri ishlamasligi mumkin.
        </>
      ),
    },
    {
      name: "Dynamic data",
      defination: (
        <>
          Dynamic data structures are memory efficient. The memory capacity of a
          dynamic data structure is not fixed, and the number of data items that
          it can hold is constrained only by the overall memory allocation to
          the program.
          <br />
          In Python, a list is an example of a dynamic data structure. A Python
          <b> list</b> has the advantage that its size is not predetermined, and
          the elements in the <b> list</b> can be accessed directly.
        </>
      ),
    },
    {
      name: "Dynamic ma'lumotlar",
      defination: (
        <>
          Dinamik ma'lumotlar tuzilmalari xotira bilan ishlarda juda samarali
          hisoblanadi. Dinamik ma'lumotlar strukturasining xotira sig'imi qat'iy
          emas va u saqlashi mumkin bo'lgan ma'lumotlar elementlari soni faqat
          dasturga umumiy xotira ajratilishi bilan cheklanadi.
          <br />
          Python-da <b> list</b> dinamik ma'lumotlar tuzilishiga misoldir.
          Pythonda
          <b> list</b>ning afzalligi shundaki, uning hajmi oldindan belgilanmagan
          va
          <b> list</b>dagi elementlarga to'g'ridan-to'g'ri kirish mumkin.
        </>
      ),
    },
  ],
};
