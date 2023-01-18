export const onedimentionalarray = {
  name: "One dimentional array",
  definations: [
    {
      defination: (
        <>
          You can think of a one-dimensional array as a single row of values.
          For example, suppose you want to store a list of 10 words to be used
          in a child's spelling game. You create an array with 10 positions and
          add the words to the array. The logical representation of the elements
          of the array might be envisaged as follows:
        </>
      ),
    },
    {
      defination: (
        <>
          Bir o'lchovli massivni bir qator qiymatlar sifatida tasavvur
          qilishingiz mumkin. Misol uchun, siz yosh bolaning so'z o'yinida
          ishlatiladigan 10 ta so'z ro'yxatini saqlamoqchisiz. Siz 10 ta
          pozitsiyali massiv yaratasiz va so'zlarni massivga qo'shasiz. Massiv
          elementlarining mantiqiy ko'rinishi quyidagicha bo'lishi mumkin:
          <br />
          <br />
          <table className="w-full border text-center">
            <tbody>
              <tr>
                <td className="border border-neutral-400 text-center">path</td>
                <td className="border border-neutral-400 text-center">floor</td>
                <td className="border border-neutral-400 text-center">sugar</td>
                <td className="border border-neutral-400 text-center">
                  because
                </td>
                <td className="border border-neutral-400 text-center">
                  beautiful
                </td>
                <td className="border border-neutral-400 text-center">
                  clothes
                </td>
                <td className="border border-neutral-400 text-center">whole</td>
                <td className="border border-neutral-400 text-center">
                  behind
                </td>
                <td className="border border-neutral-400 text-center">move</td>
                <td className="border border-neutral-400 text-center">busy</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },

    {
      defination: (
        <>
          It is easier to makes sense of the layout if the representation
          includes the positions of the elements in the array. Each position is
          numbered using an index; in most programming languages the numbering
          of the indices starts from 0 (zero-based indexing).
        </>
      ),
    },
    {
      defination: (
        <>
          Agar jadval massivdagi elementlarning pozitsiyalarini o'z ichiga olgan
          bo'lsa, tartibni tushunish osonroq bo'ladi. Har bir pozitsiya indeks
          yordamida raqamlangan, avval aytganimizdek ko'pgina dasturlash
          tillarida indekslarni raqamlash 0 dan boshlanadi (nolga asoslangan
          indekslash).
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
                <th className="border border-neutral-400 text-center">4</th>
                <th className="border border-neutral-400 text-center">5</th>
                <th className="border border-neutral-400 text-center">6</th>
                <th className="border border-neutral-400 text-center">7</th>
                <th className="border border-neutral-400 text-center">8</th>
                <th className="border border-neutral-400 text-center">9</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-400 text-center"></td>
                <td className="border border-neutral-400 text-center">path</td>
                <td className="border border-neutral-400 text-center">floor</td>
                <td className="border border-neutral-400 text-center">sugar</td>
                <td className="border border-neutral-400 text-center">
                  because
                </td>
                <td className="border border-neutral-400 text-center">
                  beautiful
                </td>
                <td className="border border-neutral-400 text-center">
                  clothes
                </td>
                <td className="border border-neutral-400 text-center">whole</td>
                <td className="border border-neutral-400 text-center">
                  behind
                </td>
                <td className="border border-neutral-400 text-center">move</td>
                <td className="border border-neutral-400 text-center">busy</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },

    {
      name: "Using a one-dimensional array. (Bir o'lchovli massivlardan foydalanish)",
      defination: (
        <>
          In most languages, before you can use an array you must declare it.
          This will usually require you to:
          <ul className="pl-7" style={{ listStyleType: "decimal " }}>
            <li>specify a name for the array (its identifier)</li>
            <li>specify the type of data that will be stored in the array</li>
            <li>specify the number of positions in the array</li>
          </ul>
        </>
      ),
    },
    {
      defination: (
        <>
          Ko'pgina tillarda massivni ishlatishdan oldin uni e'lon qilish kerak
          bo'ladi. Buning uchun quyidagi vazifalar bajariladi:
          <ul className="pl-7" style={{ listStyleType: "decimal " }}>
            <li>massivga nomi beriladi (uning identifikatori)</li>
            <li>massivda saqlanadigan ma'lumotlar turini belgilanadi</li>
            <li>massivdagi indexlari soni belgilanadi</li>
          </ul>
        </>
      ),
    },

    {
      defination: (
        <>
          For example, in C++ you might specify{" "}
          <b>
            <code>string spellingWords = [10]</code>
          </b>
          . This declares an array called spellingWords that will have space to
          store 10 words.
        </>
      ),
    },
    {
      defination: (
        <>
          Masalan, C++ da massivni quyidagicha e'lon qilish mumkin:{" "}
          <b>
            <code>string spellingWords = [10]</code>
          </b>
          . Bu 10 ta so'zni saqlash mumkin bo'lgan massivni e'lon qiladi .
        </>
      ),
      pseudocode:
        "ARRAY spelling_words[10] // Declare an array of 10 elements\n" +
        "\n" +
        'spelling_words[0] = "path"  // Assign a value into a slot of the array\n' +
        'spelling_words[1] = "floor"\n' +
        'spelling_words[2] = "sugar"\n' +
        'spelling_words[3] = "because"\n' +
        'spelling_words[4] = "beautiful"\n' +
        'spelling_words[5] = "clothes"\n' +
        'spelling_words[6] = "whole"\n' +
        'spelling_words[7] = "behind"\n' +
        'spelling_words[8] = "move"\n' +
        'spelling_words[9] = "busy"',
      code: "spelling_words = ['path', 'floor', 'sugar', 'because', 'beautiful', 'clothes', 'whole', 'behind', 'move', 'busy']",
    },

    {
      defination: (
        <>
          To retrieve a value from the array you must specify the appropriate
          index. The following statement will display the word <b>sugar></b>
        </>
      ),
    },
    {
      defination: (
        <>
          Massivdan qiymatni olish uchun tegishli indeksni ko'rsatish kerak.
          Quyidagi <b>sugar></b> so'zi ko'rsatiladi
        </>
      ),
      pseudocode: "PRINT(spelling_words[2])",
      code: "print(spelling_words[2])",
    },

    {
      defination: (
        <>
          You can process the entire contents of an array using a{" "}
          <b>for loop</b>. The following example will display every word in the
          array.
        </>
      ),
    },
    {
      defination: (
        <>
          Siz massivni <b>for loop</b>i yordamida qayta ko'rib chiqishingiz
          mumkin. Quyidagi misol massivdagi har bir so'zni ko'rsatadi.
        </>
      ),
      pseudocode:
        "FOR i = 0 TO 9\n" + "    PRINT(spelling_words[i])\n" + "NEXT word",
      code: "for i in range(10):\n" + "    print(spelling_words[i])",
    },

    {
      name: "Tasks",
      defination: (
        <>
          <b>1.</b> n (n>0) butun son berilgan. Dastlabki n ta musbat toq
          sonlarni saqlaydigan n o‘lchamli butun sonli massiv tashkil etilsin.
        </>
      ),
      code:
        'n = int(input("n = "))\n' +
        "odd_numbers = [] # empty array\n" +
        "\n" +
        "for i in range(1, n+1):\n" +
        "    odd_numbers.append(i*2-1)\n" +
        "print(odd_numbers)",
    },
    {
      code:
        'n = int(input("n = "))\n' +
        "odd_numbers = [i*2-1 for i in range(1, n+1)] \n" +
        "print(odd_numbers)",
    },

    {
      defination: (
        <>
          <b>2.</b> n (n>0) butun son berilgan. 2 ning darajalarini saqlaydigan
          n o‘lchamli butun sonli massiv tashkil etilsin.
        </>
      ),
      code:
        "import math\n" +
        'n = int(input("n = "))\n' +
        "pow_two = [int(math.pow(2, i)) for i in range(1, n+1)] \n" +
        "print(pow_two)",
    },

    {
      defination: (
        <>
          <b>3</b>. Butun n (n>1) soni, arifmetik progressiyaning birinchi hadi
          a va uning ayirmasi d berilgan. Shulardan foydalanib o‘zida arifmetik
          progressiyaning dastlabki n ta hadini saqlovchi massiv tashkil
          etilsin.
        </>
      ),
      code:
        'a = int(input("a = "))\n' +
        'd = int(input("d = "))\n' +
        'n = int(input("n = "))\n' +
        "\n" +
        "a_p = [a+d*i for i in range(n)] \n" +
        "print(a_p)",
    },

    {
      defination: (
        <>
          <b>4.</b> n (n>1) butun soni hamda birinchi hadi b va maxraji q
          bo‘lgan geometrik progressiya berilgan. Shulardan foydalanib o‘zida
          geometrik progressiyaning dastlabki n ta hadini saqlovchi massiv
          tashkil etilsin.
          <br />
          (Yordam: 3-masalaga qaralsin)
        </>
      ),
    },
    {
      defination: (
        <>
          <b>5.</b> n (n>2) butun soni berilgan. f1=1, f2=1, fk=fk-2+f k-1,
          k=3,4,... fk Fibonachchi sonlar ketma-ketligida birinchi n ta
          elementni o‘z ichiga oladigan n o‘lchamli butun sonli massiv
          ifodalansin va chop etilsin.
        </>
      ),
      code:
        "f1 = 1\n" +
        "f2 = 1\n" +
        'n = int(input("n = ")) \n' +
        "\n" +
        "fib_numbers = [f1, f2] \n" +
        "\n" +
        "for i in range(2, n):\n" +
        "    fib_numbers.append(fib_numbers[i-1] + fib_numbers[i-2])\n" +
        "print(fib_numbers)",
    },
    {
      defination: (
        <>
          <b>6.</b> n (n>2), a va b butun sonlar berilgan. 1-elementi a ga,
          2-elementi b, har bir keyingi elemeti barcha avvalgi elementlar
          (o‘zidan oldingi barcha element) yig‘indisiga teng bo‘lgan n o‘lchamli
          butun sonli massiv ifodalansin va chop etilsin.
        </>
      ),
      code:
        'a = int(input("a = ")) \n' +
        'b = int(input("b = "))\n' +
        'n = int(input("n = "))\n' +
        "\n" +
        "summ = a + b\n" +
        "array = [a, b]\n" +
        "\n" +
        "for i in range(2, n):\n" +
        "    array.append(summ)\n" +
        "    summ += array[i]\n" +
        "print(array)",
    },

    {
      defination: (
        <>
          <b>7.</b> n o‘lchamli a massiv berilgan. Uning elementlari teskari
          tartibda chiqarilsin.
        </>
      ),
      code:
        'n = int(input("n = "))\n' +
        "array = []\n" +
        "for i in range(n):\n" +
        '    m = int(input("a["+str(i)+"]="))\n' +
        "    array.append(m)\n" +
        "print(array[::-1])\n" +
        "\n" +
        "# Boshqa yechimlar ham taklif eta olasizmi?\n",
    },
    {
      defination: (
        <>
          <b>8</b>.n o‘lchamli butun sonli massiv berilgan. Berilgan massivni
          indekslari bo‘yicha tartibida tartiblab, massivdagi juft sonlar va
          ularning miqdori k chiqarilsin.
        </>
      ),

      code:
        'n = int(input("n = "))\n' +
        "array = []\n" +
        "for i in range(n):\n" +
        '    m = int(input("a["+str(i)+"]="))\n' +
        "    array.append(m)\n" +
        "\n" +
        "count = 0\n" +
        "for i in range(n):\n" +
        "    if (array[i] % 2 == 0):\n" +
        "        print(array[i])\n" +
        "        count += 1\n" +
        "print(count)",
    },
    {
      defination: (
        <>
          <b>9</b>. n o‘lchamli, butun sonli massiv berilgan. Berilgan
          massivdagi barcha toq sonlarni o‘z ichiga oladigan elementlarni o‘sish
          tartibida tartiblab, chop etilsin hamda ularning miqdori k aniqlansin.
        </>
      ),

      code:
        'n = int(input("n = "))\n' +
        "array = []\n" +
        "for i in range(n):\n" +
        '    m = int(input("a["+str(i)+"]="))\n' +
        "    array.append(m)\n" +
        "\n" +
        "odd_numbers = []\n" +
        "count = 0\n" +
        "for i in range(n):\n" +
        "    if (array[i] % 2 == 1):\n" +
        "        odd_numbers.append(array[i])\n" +
        "        count += 1\n" +
        "odd_numbers.sort()\n" +
        "print(odd_numbers,count)",
    },

    {
      defination: (
        <>
          <b>10.</b> n o‘lchamli butun sonli massiv berilgan. Massivdagi juft
          sonli elementlarining indekslarini o‘sish tartibida, toq sonli
          elementlarining indekslarini kamayish tartibida tartiblab, massiv chop
          etilsin.
          <br />
          (Yordam: 9-masalaga qaralsin. <code>array.sort(reverse=True)</code> -
          teskari tartiblash
        </>
      ),

      code: "",
    },
  ],
};
