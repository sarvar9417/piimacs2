import abstraction from "../../../../../assets/images/abstract.png";

export const computationalThinking = {
  name: "Computational thinking",
  definations: [
    {
      defination: (
        <>
          <b>Computational thinking</b> is a problem-solving process where a
          number of steps are taken in order to reach a solution. It is a
          logical approach to analysing a problem, producing a solution that can
          be understood by humans and used by computers. <br />{" "}
          <b>Computational thinking</b> involves five key strands:{" "}
          <ul className="pl-7 list-disc   ">
            <li>
              <b>Abstraction</b> – hiding unnecessary detail to reduce
              complexity
            </li>
            <li>
              <b>Decomposition</b> – breaking a problem down into smaller parts
            </li>
            <li>
              <b>Data modelling</b>
            </li>
            <li>
              <b>Pattern recognition</b> – identifying the problem as an example
              of a class of problems that have already been solved
            </li>
            <li>
              <b>Algorithmic thinking</b> – developing an algorithm to solve a
              problem
            </li>
          </ul>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Computational thinking</b> - bu muammoni hal qilish jarayoni
          bo'lib, unda yechimga erishish uchun bir nechta qadamlardan iborat
          ishlar bajariladi. Bu muammoni tahlil qilish, odamlar tushunadigan va
          kompyuterlar tomonidan qo'llanilishi mumkin bo'lgan yechim yaratish
          uchun mantiqiy yondashuvdir. <br /> <b>Computational thinking</b>{" "}
          beshta asosiy yo'nalishni o'z ichiga oladi:
          <ul className="pl-7 list-disc ">
            <li>
              <b>Abstraction</b> - murakkablikni kamaytirish uchun keraksiz
              tafsilotlarni yashirish
            </li>
            <li>
              <b>Decomposition</b> - muammoni kichikroq qismlarga ajratish
            </li>
            <li>
              <b>Data modelling</b>
            </li>
            <li>
              <b>Pattern recognition</b> - muammoni allaqachon hal qilingan
              muammolar sinfiga misol sifatida aniqlash
            </li>
            <li>
              <b>Algorithmic thinking</b> - muammoni hal qilish uchun algoritmni
              ishlab chiqish
            </li>
          </ul>
        </>
      ),
      language: "uzb",
    },

    {
      name: "Abstraction",
      defination: (
        <>
          Abstraction involves filtering out information that is not necessary
          to solve a problem. There are many examples in everyday life where
          abstraction is used. Figure 1 shows part of the underground map of
          London, UK. The purpose of this map is to help people plan their
          journey within London. The map does not show a geographical
          representation of the tracks of the underground train network nor does
          it show the streets above ground. It shows the stations and which
          train lines connect the stations. In other words, the information that
          is not necessary when planning how to get from one landmark to another
          is filtered out. The essential information we need to be able to plan
          our route is clearly represented.
        </>
      ),
    },

    {
      defination: (
        <>
          Abstraktsiya muammoni hal qilish uchun zarur bo'lmagan ma'lumotlarni
          filtrlashni o'z ichiga oladi. Kundalik hayotda mavhumlik
          qo'llaniladigan ko'plab misollar mavjud. Quyidagi rasmda London, Buyuk
          Britaniya er osti xaritasining bir qismi ko'rsatilgan. Ushbu
          xaritaning maqsadi odamlarga London bo'ylab sayohatlarini
          rejalashtirishda yordam berishdir. Xaritada yer osti poyezdlari
          tarmog‘i yo‘llarining geografik tasviri ham, yer ustidagi ko‘chalar
          ham ko‘rsatilmagan. Unda stansiyalar va qaysi poyezd liniyalari
          stansiyalarni bog‘lashi ko‘rsatilgan. Boshqacha qilib aytadigan
          bo'lsak, bir belgidan ikkinchisiga qanday o'tishni rejalashtirishda
          kerak bo'lmagan ma'lumotlar filtrlanadi. Bizning marshrutimizni
          rejalashtirishimiz kerak bo'lgan asosiy ma'lumotlar aniq ifodalangan.
        </>
      ),
      language: "uzb",
      image: {
        name: abstraction,
        alt: "abstract",
        width: "600px",
      },
    },
    {
      name: "Decomposition",
      description: (
        <>
          <b>Decomposition</b> means breaking problems down into sub-problems in
          order to explain a process more clearly. Decomposition leads us to the
          concept of program modules and using procedures and functions.
        </>
      ),
    },
    {
      description: (
        <>
          <b>Decomposition</b> jarayonni muammoni aniqroq tushunish uchun uni
          kichik bo'laklarga ajratishni anglatadi. Dekompozitsiya bizni
          modullar, protseduralar va funktsiyalardan foydalanish tushunchasiga
          olib keladi.
        </>
      ),
      language: "uzb",
    },
    {
      name: "Data modelling",
      defination: (
        <>
          <b>Data modelling</b> involves analysing and organising data . We can
          set up abstract data types to model real-world concepts, such as
          queues or stacks. When a programming language does not have such data
          types built-in, we can define our own by building them from existing
          data types. There are more ways to build data models
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Data modelling </b> ma'lumotlarni tahlil qilish va tartibga
          solishni anglatadi. Unda queues yoki stecklar kabi abstract data type
          o'rnatishimiz mumkin. Agar dasturlash tilida bunday ma'lumotlar
          turlari bo'lmasa, biz ularni mavjud ma'lumotlar turlaridan o'zimiz
          yaratishimiz mumkin.
        </>
      ),
      language: "uzb",
    },

    {
      name: "Pattern recognition",
      defination: (
        <>
          <b>Pattern recognition</b> means looking for patterns or common
          solutions to common problems and using these to complete tasks in a
          more efficient and effective way. There are many standard algorithms
          to solve standard problems, such as sorting or searching.
        </>
      ),
    },

    {
      defination: (
        <>
          <b>Pattern recognition</b> umumiy muammolarga yechimlarni izlash va
          tayyor yechimlardan samarali foydalanishni anglatadi. Mas: Sorting yoki
          searching kabi muammolarini hal qilish uchun ko'plab standart
          algoritmlar mavjud.
        </>
      ),
        language: 'uzb'
    },
  ],
};
