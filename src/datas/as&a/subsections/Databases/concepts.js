export const concepts = {
  name: "Database concepts",
  definations: [
    {
      name: "Database concepts",
      defination: (
        <>
          Data is fundamental to any computer system. With data comes the need
          for a system that is able to store, sort, and search through it.
          Imagine the amount of users a popular social media company has, then
          think about storing every post they have made and the media that comes
          with it, such as a video, image, or animated GIF. Without a database,
          you wouldn't be able to log in to access your posts, let alone be able
          to make connections with other users and see their posts.
          <br />
          <br />
          In this section you will learn that databases can be as simple as a
          single file, and as complex as a set of related <b>tables</b>, each
          with
          <b>fields</b> and <b>keys</b>. It is important that data within a
          database is kept up-to-date and consistent, and it is crucial to avoid
          storing the same data in multiple places.
          <br />
          <br />
          At a more advanced level, you will learn that creating an{" "}
          <b>entity relationship model</b> and designing a set of tables using
          the rules of
          <b>normalisation</b> is important. Challenges arise when lots of users
          want to access data simultaneously, and you will learn that{" "}
          <b>transactions</b>
          and <b>transaction processing</b> are needed to ensure that the data
          does not get out of sync.
        </>
      ),
    },
    {
      name: "Ma'lumotlar bazasi tushunchalari",
      defination: (
        <>
          Ma'lumotlar har qanday kompyuter tizimi uchun asosiy manba
          hisoblanadi. Ma'lumotlar paydo bo'lishi bilan ularni saqlash, saralash
          va qidirishga qodir bo'lgan tizimga ehtiyoj paydo bo'ladi. Mashhur
          ijtimoiy media kompaniyalarida qancha foydalanuvchilar borligini
          tasavvur qiling, so'ngra ular yozgan har bir postni va u bilan birga
          kelgan video, rasm yoki animatsion GIF kabi oma'lumotlarni saqlash
          haqida o'ylab, tasavvur qilib ko'ring. Ma'lumotlar bazasi bo'lmasa,
          siz boshqa foydalanuvchilar bilan aloqa o'rnatish va ularning
          xabarlarini ko'rish u yoqda tursin, o'z postlaringizga kirish uchun
          ham tizimga kira olmaysiz.
          <br />
          <br />
          Ushbu bo'limda siz ma'lumotlar bazalari bitta fayl kabi oddiy va
          tegishli <b>jadvallar to'plami</b> kabi <b>maydonlar</b> va{" "}
          <b>kalitlarga</b> ega va murakkab bo'lishi mumkinligini bilib olasiz.
          Ma'lumotlar bazasidagi ma'lumotlar yangilangan va izchil bo'lishi
          muhim va bir xil ma'lumotlarni bir nechta joyda saqlashning oldini
          olish juda muhimdir.
          <br />
          <br />A levelda siz ob'ekt munosabatlari modelini yaratish va
          normalizatsiya qoidalaridan foydalangan holda jadvallar to'plamini
          loyihalash muhimligini bilib olasiz. Ko'p foydalanuvchilar bir
          vaqtning o'zida ma'lumotlarga kirishni xohlasa, qiyinchiliklar paydo
          bo'ladi va siz ma'lumotlar sinxronlashtirilmasligini ta'minlash uchun
          <b>tranzaktsiyalar</b> va <b>tranzaktsiyalarni qayta ishlash</b>{" "}
          kerakligini bilib olasiz.
        </>
      ),
    },

    {
      name: "Relational databases",
      defination: (
        <>
          In a relational database the data is kept in more than one table, and
          the tables are linked together using <b>relationships</b>.
          <br />
          <br />
          To explore the benefits of using a relational model, it's beneficial
          to look at the potential problems that can arise when all the required
          data is stored in a single table, known as a <b>flat file</b>{" "}
          database.
        </>
      ),
    },
    {
      defination: (
        <>
          <>
            Relyatsion ma'lumotlar bazasida ma'lumotlar bir nechta jadvallarda
            saqlanadi va jadvallar munosabatlar yordamida{" "}
            <b>bir-biriga bog'lanadi</b>.
            <br />
            <br />
            Relyatsion MBdan foydalanishning afzalliklarini o'rganish uchun
            barcha kerakli ma'lumotlar <b>flat file</b> deb nomlanuvchi
            ma'lumotlar bazasida bitta jadval sifatida saqlanganida yuzaga
            kelishi mumkin bo'lgan muammolarni ko'rib chiqamiz.
          </>
        </>
      ),
    },

    {
      defination: (
        <>
          Below is an example of a flat file database that holds data about the
          films shown in a cinema:
          <br />
          <br />
          Quyida kinoteatrda namoyish etilgan filmlar haqidagi ma'lumotlarni
          saqlaydigan flat file ma'lumotlar bazasiga misol keltirilgan:
          <br />
          <br />
          <table className="w-full text-center bg-white m-0">
            <thead>
              <tr>
                <th className="border border-neutral-300 text-center">Title</th>
                <th className="border border-neutral-300 text-center">
                  Rating
                </th>
                <th className="border border-neutral-300 text-center">
                  Duration (mins)
                </th>
                <th className="border border-neutral-300 text-center">
                  ScreenName
                </th>
                <th className="border border-neutral-300 text-center">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Minions
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  U
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  91
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Blue Room
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  17:45
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Jumanji
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  PG
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  104
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Grand Theatre A
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  18:15
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Minions
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  U
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  91
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Green Room
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  18:45
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Thor
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  12A
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  114
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Grand Theatre B
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  19:30
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Jumanji
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  U
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  104
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Grand Theatre B
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  19:45
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Thor
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  12A
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  114
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  Bue Room
                </td>
                <td className="border border-neutral-300 border border-neutral-300 text-center">
                  20:30
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },

    {
      defination: (
        <>
          Storing all the data in a single table in this way is an inefficient
          approach, especially as the dataset becomes larger.
        </>
      ),
    },
    {
      defination: (
        <>
          Barcha ma'lumotlarni bitta jadvalda shu tarzda saqlash samarasiz
          hisoblanadi, ayniqsa ma'lumotlar to'plami kattalashganda.
        </>
      ),
    },

    {
      name: "Data redundancy (Ma'lumotlarning ortiqchaligi)",
      defination: (
        <>
          <b>Data redundancy</b> is when there is <b>unnecessary</b> data
          repetition in a database.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Ma'lumotlarning ortiqchaligi</b> - bu ma'lumotlar bazasida{" "}
          <b>keraksiz</b>
          ma'lumotlar takrorlanishi.
          <br />
          <br />
          <table className="w-full text-center bg-white m-0">
            <thead>
              <tr>
                <th className="border border-neutral-300">Title</th>
                <th className="border border-neutral-300">Rating</th>
                <th className="border border-neutral-300">Duration (mins)</th>
                <th className="border border-neutral-300">ScreenName </th>
                <th className="border border-neutral-300">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300">Minions</td>
                <td className="border border-neutral-300">U</td>
                <td className="border border-neutral-300">91</td>
                <td className="border border-neutral-300">Blue Room</td>
                <td className="border border-neutral-300">17:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Jumanji</td>
                <td className="border border-neutral-300">PG</td>
                <td className="border border-neutral-300">104</td>
                <td className="border border-neutral-300">Grand Theatre A</td>
                <td className="border border-neutral-300">18:15</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Minions</td>
                <td className="border border-neutral-300">U</td>
                <td className="border border-neutral-300">91</td>
                <td className="border border-neutral-300">Green Room</td>
                <td className="border border-neutral-300">18:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Thor</td>
                <td className="border border-neutral-300">12A</td>
                <td className="border border-neutral-300">114</td>
                <td className="border border-neutral-300">Grand Theatre B</td>
                <td className="border border-neutral-300">19:30</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Jumanji</td>
                <td className="border border-neutral-300">U</td>
                <td className="border border-neutral-300">104</td>
                <td className="border border-neutral-300">Grand Theatre B</td>
                <td className="border border-neutral-300">19:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Thor</td>
                <td className="border border-neutral-300">12A</td>
                <td className="border border-neutral-300">114</td>
                <td className="border border-neutral-300">Bue Room</td>
                <td className="border border-neutral-300">20:30</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },

    {
      defination: (
        <>
          The table in the example above holds only six records and yet there
          are already many examples of where data has been repeated
          unnecessarily. The titles and duration of the films are duplicated as
          are the names of the screens. Multiply this by the amount of records
          that would actually be needed for a cinema over weeks or months which
          shows several films a day, and it would result in <b>a lot</b> of
          extra data being stored in the database that doesn't need to be there.
        </>
      ),
    },

    {
      defination: (
        <>
          Yuqoridagi misoldagi jadval faqat oltita yozuvni o'z ichiga oladi va
          shunga qaramay, ma'lumotlar keraksiz ravishda takrorlangan.
          Filmlarning nomlari, davomiyligi va ekran nomlari takrorlanadi. Buni
          kinoteatrda haftalar yoki oylar davomida kuniga bir nechta filmlar
          namoyish etiladigan qiymatga ko'paytiring va bu ma'lumotlar bazasida
          bo'lishi shart bo'lmagan juda ko'p qo'shimcha ma'lumotlarning
          saqlanishiga olib keladi.
        </>
      ),
    },

    {
      defination: (
        <>
          Having unnecessary duplicated data has the potential to cause the
          following problems:
          <br />
          <ul className="pl-7 list-disc">
            <li>
              An unnecessary amount of data storage capacity required to store
              the duplicated data
            </li>
            <li>
              An increased risk of having inaccurate data (notice the mistake in
              the spelling of Blue room in the last record)
            </li>
            <li>
              It is more time consuming and problematic to update the database
              (to maintain accurate data, for example by having to update all of
              the duplicated data accurately)
            </li>
          </ul>
        </>
      ),
    },
    {
      defination: (
        <>
          Keraksiz takroriy ma'lumotlarga ega bo'lish quyidagi muammolarni
          keltirib chiqarishi mumkin:
          <br />
          <ul className="pl-7 list-disc">
            <li>
              Takrorlangan ma'lumotlarni saqlash uchun ortiqcha xotira band
              qilinishi
            </li>
            <li>
              Noto'g'ri ma'lumotlarga ega bo'lish xavfi ortadi ( Blue room
              oxirgi yozuvdagi imlodagi xatoga e'tibor bering)
            </li>
            <li>
              Ma'lumotlar bazasini yangilash ko'proq vaqt talab etadi va
              murakkablik tug'diradi
            </li>
          </ul>
        </>
      ),
    },

    {
      name: "Data inconsistency (Ma'lumotlarning mos kelmasligi)",
      defination: (
        <>
          If the data in the database isn't updated correctly, and updated in
          all of the relevant places, this leads to the data becoming
          inconsistent as in the example below.
        </>
      ),
    },

    {
      defination: (
        <>
          Agar ma'lumotlar bazasidagi ma'lumotlar to'g'ri yangilanmagan bo'lsa
          va barcha tegishli joylarda yangilanmasa, bu quyidagi misoldagi kabi
          ma'lumotlarning nomuvofiq bo'lishiga olib keladi.
        </>
      ),
    },

    {
      defination: (
        <>
          The film Jumanji has been stored as having two different ratings. This
          means that the data now lacks <b>integrity</b> as it's not possible to
          trust that the data is accurate. There are also two films that are
          showing in the same screen at a similar time. Both Thor and Jumanji
          are said to be showing in Grand Theatre B at 19:30 and 19:45
          respectively.
        </>
      ),
    },

    {
      defination: (
        <>
          Jumanji filmi ikki xil reytingga ega bo'lib qolgan. Bu shuni
          anglatadiki, endi ma'lumotlar <b>yaxlit</b> emas, chunki
          ma'lumotlarning aniqligi yo'qolgan. Yana, bir vaqtda bir ekranda
          namoyish etilayotgan ikkita film bor. Tor ham, Jumanji ham Grand
          Theatre B da 19:30 va 19:45 da namoyish etiladi.
          <br />
          <table className="w-full text-center bg-white m-0">
            <thead>
              <tr>
                <th className="border border-neutral-300">Title</th>
                <th className="border border-neutral-300">Rating</th>
                <th className="border border-neutral-300">Duration (mins)</th>
                <th className="border border-neutral-300">ScreenName </th>
                <th className="border border-neutral-300">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300">Minions</td>
                <td className="border border-neutral-300">U</td>
                <td className="border border-neutral-300">91</td>
                <td className="border border-neutral-300">Blue Room</td>
                <td className="border border-neutral-300">17:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Jumanji</td>
                <td className="border border-neutral-300 bg-amber-200">PG</td>
                <td className="border border-neutral-300">104</td>
                <td className="border border-neutral-300">Grand Theatre A</td>
                <td className="border border-neutral-300">18:15</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Minions</td>
                <td className="border border-neutral-300">U</td>
                <td className="border border-neutral-300">91</td>
                <td className="border border-neutral-300">Green Room</td>
                <td className="border border-neutral-300">18:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Thor</td>
                <td className="border border-neutral-300">12A</td>
                <td className="border border-neutral-300">114</td>
                <td className="border border-neutral-300 bg-bluesky">
                  Grand Theatre B
                </td>
                <td className="border border-neutral-300">19:30</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Jumanji</td>
                <td className="border border-neutral-300 bg-amber-200">U</td>
                <td className="border border-neutral-300">104</td>
                <td className="border border-neutral-300 bg-bluesky">
                  Grand Theatre B
                </td>
                <td className="border border-neutral-300">19:45</td>
              </tr>
              <tr>
                <td className="border border-neutral-300">Thor</td>
                <td className="border border-neutral-300">12A</td>
                <td className="border border-neutral-300">114</td>
                <td className="border border-neutral-300">Bue Room</td>
                <td className="border border-neutral-300">20:30</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {},
  ],
};
