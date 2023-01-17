export const whileLoop = {
  name: "While loop syntax, pseudocode and how to write any while loop",
  definations: [
    {
      name: "While loop",
      defination: (
        <p>
          Often, you will need to repeat a section of code for as long as a
          condition is met, or until a condition is met, instead of a fixed
          number of times. For example, you might write a program that asks for
          input from the user repeatedly until the user’s input meets the
          specified criteria. Therefore, the number of iterations is not set,
          but depends on the user. This is what is known as a{" "}
          <b>condition-controlled</b> loop.
        </p>
      ),
    },
    {
      name: "While takrorlanish oparatori",
      defination: (
        <p>
          Ko'pincha siz kodning bir qismini shart bajarilgunga qadar yoki shart
          bajarilmaguncha bir necha marta takrorlashingiz kerak bo'ladi. Misol
          uchun, foydalanuvchi kiritgan ma'lumotlar belgilangan mezonlarga javob
          bermaguncha, foydalanuvchidan qayta-qayta kiritishni so'raydigan
          dastur yozishingiz mumkin. Shuning uchun, takrorlashlar soni oldindan
          ma'lum emas va foydalanuvchiga bog'liq. Bu{" "}
          <b>shartli takrorlanish operatori</b> deb nomlanadi .
        </p>
      ),
      pseudocode:
        "WHILE (<boolean expression>) DO \n" +
        "\t <block of statements> \n" +
        "END WHILE",
      code: `while (<boolean expression>): \n" + "\t <block of statements> \n`,
    },
    {
      name: "While",
      defination: (
        <p>
          There are various forms of the while loop. In a <b>pre-condition</b>{" "}
          loop, the condition will be evaluated at the start of the loop. If the
          condition evaluates as True, then the statements inside the loop body
          will be executed.
        </p>
      ),
    },

    {
      name: "While - sharti oldin tekshiriladigan takrorlanish",
      defination: (
        <p>
          <code>while</code> takrorlanish oparatorida shart sikl boshida
          takshiriladi. Agar shart qiymati True bo'lsa, sikl tanasi ichidagi
          operatorlar bajariladi.
        </p>
      ),
      pseudocode:
        'password <- "1234"\n' +
        'password_guess <- ""\n' +
        "\n" +
        "WHILE password_guess <> password DO\n " +
        '   OUTPUT("Please enter your password: ")\n' +
        "    INPUT password_guess\n" +
        "ENDWHILE",
      code:
        'password = "1234"\n' +
        'password_guess = ""\n' +
        "\n" +
        "while password_guess != password: \n" +
        '\t print("Please enter your password: ")\n' +
        "\t password_guess = input()\n",
    },
    {
      defination: (
        <p>
          If the condition initially evaluates to <code>False</code>, then the
          code within the <code>while</code> loop will not run, not even once.
          <br />
          Agar shart dastlab <code>False</code> qabul qilsa, u holda{" "}
          <code>while</code> sikl ichidagi kod bir marta ham bajarilmaydi.
        </p>
      ),
    },
    {
      defination: (
        <p>
          Here is another example. Trace the code to work out how the program
          works.
          <br />
          Mana yana bir misol. Dastur qanday ishlashini aniqlash uchun kodni
          tushunib bajarishga harakat qiling.
        </p>
      ),
      pseudocode:
        'PRINT("Please enter your name: ")\n' +
        "name = INPUT()\n" +
        'WHILE name != "Bob"\n' +
        '    PRINT("Try again, Bob")\n' +
        '    PRINT("Please enter your name: ")\n' +
        "    name = INPUT()\n" +
        "ENDWHILE\n" +
        'PRINT("Hi Bob")',
      code:
        'print("Please enter your name: ")\n' +
        "name = input()\n" +
        "\n" +
        'while name != "Bob":\n' +
        '    print("Try again, Bob")\n' +
        '    print("Please enter your name: ")\n' +
        "    name = input()\n" +
        "\n" +
        'print("Hi Bob")',
    },
    {
      defination: (
        <p>
          This program asks the user for an input that is then linked to the
          variable <code>name</code>. If that input is <b>not equal to</b>{" "}
          <code>Bob</code>, then the loop body will be executed and the program
          will ask the user to input their name again. This will happen
          repeatedly until the user enters <code>Bob</code>. When this happens,
          the condition will evaluate to False and the next line of code outside
          of the loop will be executed: <code>PRINT("Hi Bob")</code>.
        </p>
      ),
    },
    {
      defination: (
        <p>
          Ushbu dastur foydalanuvchidan <code>name</code> o'zgaruvchisini
          kiritishni so'raydi. Agar o'zgaruvchi qiymati <code>Bob</code>{" "}
          bo'lmasa, tsikl tanasi bajariladi va dastur foydalanuvchidan yana o'z
          nomini kiritishni so'raydi. Bu foydalanuvchi ismiga <code>Bob</code>{" "}
          kiritilgunga qadar qayta-qayta sodir bo'ladi.{" "}
          <code>name = 'Bob'</code> bo'lib, shart yolg'on qiymat qabul qilganda
          takrorlanish tugaydi va sikldan tashqaridagi keyingi kod: :{" "}
          <code>PRINT("Hi Bob")</code> qatori bajariladi.
        </p>
      ),
    },

    {
      defination: (
        <p>
          A <code>while</code> loop can be used to replicate the function of a{" "}
          <code>for</code> loop, an example of which is shown below. Note that
          the variable that is used to control the loop (in this case{" "}
          <code>count</code>) has to be explicitly incremented in the code using{" "}
          <code>count = count + 1</code>.
        </p>
      ),
    },
    {
      defination: (
        <p>
          <code>while</code> takrorlanish operatorini <code>for</code>{" "}
          takrorlanish operatori kabi ishlatish mumkin. Bunday holatlarda{" "}
          <code>count</code> nomli maxsus sanagichdan foydalanish zarur bo'ladi.
          Faqat undan avval <code>count</code> dan to'g'ri foydalanishni
          o'rganib olish zarur.
        </p>
      ),
    },

    {
      name: "Try it yourself!",
      defination: "What will be output when the while loop below is executed?",
    },
    {
      name: "O'zingizni sinab ko'ring!",
      defination:
        "Quyidagi dastur bajarilganda ekranga chiqadigan natijani aniqlang.",
      pseudocode:
        "count = 1\n" +
        "WHILE count <= 5\n" +
        "    PRINT(count)\n" +
        "    count = count + 1\n" +
        "ENDWHILE",
    },

    {
      defination: (
        <p>
          It is important that a while loop always terminates. You will often
          see the use of a <code>flag</code> or <code>rogue value</code> (also
          known as a <code>sentinel value</code>) to control the termination of
          a loop.
          <br />A <code>rogue value</code> is a specific value that is used to
          terminate a loop. The choice of what rogue value to use is up to the
          programmer, but it should be a value that is unlikely to be entered as
          a legitimate input by a user. A common rogue value for a program that
          is expecting non-negative integers to be entered is minus, −1.
        </p>
      ),
    },
    {
      defination: (
        <p>
          <code>while </code> takrorlanish oparatori albatta tugashi zarurdir.
          Takrorlanishni tugatish uchun <code>flag</code> or{" "}
          <code>teskari qiymatdan</code> foydalaniladi.
          <br />
          <b>Teskari qiymat</b> - bu dastur tugashi uchun zarur bo'lgan
          shartning teskarisidir. Masalan: -1 soni kiritilguniga qadar son
          kiritishni so'raydigan dastur kodi quyidagicha.
        </p>
      ),
      pseudocode:
        "sum = 0\n" +
        "num_values = 0\n" +
        "\n" +
        'user_input = INPUT("Enter a mark or -1 to end ")\n' +
        "mark = INT(user_input)\n" +
        "\n" +
        "WHILE mark != -1\n" +
        "    sum = sum + mark\n" +
        "    num_values = num_values + 1\n" +
        "\n" +
        '    user_input = INPUT("Enter a mark or -1 to end ")\n' +
        "    mark = INT(user_input)\n" +
        "ENDWHILE\n" +
        "\n" +
        "average = sum / num_values\n" +
        'PRINT("The average mark was " + STR(average))',
      code:
        "sum = 0\n" +
        "num_values = 0\n" +
        "\n" +
        'user_input = input("Enter a mark or -1 to end ")\n' +
        "mark = int(user_input)\n" +
        "\n" +
        "while mark != -1:\n" +
        "    sum = sum + mark\n" +
        "    num_values = num_values + 1\n" +
        "\n" +
        '    user_input = input("Enter a mark or -1 to end ")\n' +
        "    mark = int(user_input)\n" +
        "\n" +
        "average = sum / num_values\n" +
        'print(f"The average mark was {average}")',
    },
    { name: "Tasks" },
    { name: "Masalalar" },
    {
      defination: (
        <p>
          <b>1</b>. a va b musbat sonlar berilgan(a>b). a uzunlikdagi kesmaga b
          uzunlikdagi kesmani mumkin qadar eng ko‘p miqdorda joylashtirilganda,
          a kesmaning bo‘sh (ortib) qolgan bo‘lagi topilsin. Ko‘paytirish va
          bo‘lish operatsiyalaridan foydalanilmasin.
        </p>
      ),
      code:
        "# correct condition a < b \n" +
        'a = int(input("a = "))\n' +
        'b = int(input("b = "))\n' +
        "\n" +
        "while a >= b:\n" +
        "    a -= b\n" +
        "print(a)",
    },
    {
      defination: (
        <p>
          <b>2</b>. a va b musbat son berilgan(a>b). a uzunlikdagi kesmaga b
          uzunlikdagi kesma mumkin qadar eng ko‘p miqdorda joylashtirilgan
          bo`lsa, (Ko‘paytirish va bo‘lish operatsiyalaridan foydalanmay) a
          kesmaga joylashtirilgan b kesmalar soni aniqlansin.
          <br />
          (Yordam: 1-masalalar e'tibor bering)
        </p>
      ),
      // code:
      //   "# correct condition a <= b \n" +
      //   'a = int(input("a = "))\n' +
      //   'b = int(input("b = "))\n' +
      //   "\n" +
      //   "count = 0\n" +
      //   "\n" +
      //   "while a > b:\n" +
      //   "    a -= b\n" +
      //   "    count += 1\n" +
      //   "print(count)",
    },
    {
      defination: (
        <p>
            <b>3.</b>  n va k musbat butun sonlari berilgan. Faqat qo‘shish va ayirish
          operatsiyasidan foydalanib n ni k ga bo‘lganda bo‘linmaning butun
          hamda qoldiq qismi topilsin. <br />
          (Yordam: 1- va 2-masalalarga e'tibor bering)
        </p>
      ),
    },

    {
      defination: (
        <p>
          <b>4.</b> n(n>0) butun son berilgan. Agar u 3 sonining darajasidan
          iborat bo‘lsa true, aks holda false chiqarilsin.
        </p>
      ),
      code:
        "# correct condition m >= n \n" +
        'n = int(input("n = "))\n' +
        "m = 1\n" +
        "\n" +
        "while m < n :\n" +
        "    m *= 3\n" +
        "equal = m == n\n" +
        "print(equal)\n" +
        "\n" +
        "# or\n" +
        "# if (m == n):\n" +
        "#    print(True)\n" +
        "# else:\n" +
        "#    print(False)",
    },

    {
      defination: (
        <p>
          <b>5.</b> n(n>0) butun son berilgan. U 2 ning biror bir darajasidan
          iborat bo‘lsa n=2<sup>k</sup>, shu darajaning ko‘rsatkichi k butun
          soni topilsin.
          <br />
          (Yordam: 2- va 4-masalalarga e'tibor bering)
        </p>
      ),
    },
    {
      defination: (
        <p>
          <b>6.</b> n(n>0) butun son berilgan. n ikki factorial hisoblansin. Bu
          yerda n!!=n(n- 2)(n-4)... (oxirgi ko‘paytuvchi agar n-juft bo‘lsa 2
          ga, toq bo‘lsa 1 ga teng.) Butun tip diapozonidan oshib ketishining
          oldini olish uchun bu ko‘paytma natija haqiqiy tipli o‘zgaruvchiga
          qiymatlanadi.
        </p>
      ),
      code:
        "# correct condition n <= 0 \n" +
        'n = int(input("n = "))\n' +
        "m = 1\n" +
        "\n" +
        "while n > 0 :\n" +
        "    m *= n\n" +
        "    n -= 2\n" +
        "print(m)",
    },
    {
      defination: (
        <p>
          <b>7.</b> n(n>0) butun son berilgan. Kvadratdan ildiz chiqarish
          formulasidan foydalanmay kvadrati n dan katta eng kichik k soni
          topilsin. (k<sup>2</sup> > n)
        </p>
      ),
      code:
        "# correct condition m*m > n \n" +
        'n = int(input("n = "))\n' +
        "m = 1\n" +
        "\n" +
        "while m * m <= n :\n" +
        "    m += 1\n" +
        "print(m)",
    },
    {
      defination: (
        <p>
            <b>8</b>. n butun son berilgan. Kvadratdan ildiz chiqarish formulasidan
          foydalanmay kvadrati n dan katta bo‘lmagan eng katta butun k soni
          topilsin. (k<sup>2</sup>  n)
            <br />
            (Yordam: 7-masalaga e'tibor bering)
        </p>
      ),
    },
  ],
};
