import loopImage from '../../../../assets/images/loop.svg'

export const loop = {
    name: "Loop",
    definations: [
        {
            name: "Loop - iteration",
            term: "Computers",
            defination:
                " are great at doing the same thing over and over again. They’re always consistent. They never get bored or tired. Computers love a repetitive task 😀.",
        },
        {
            name: "Takrorlanishlar",
            term: "Kompyuterlar",
            defination:
                " takroriy ishlarni bajarishda juda qulaydir. Ular bir ishni qayta va qayta bajarganda hech qachon zerikmaydi va charchamaydi. Kompyuterlar takrorlanadigan vazifani yaxshi ko'radilar 😀",
            image: {
                name: loopImage,
                alt: "Loop",
                width: "600px",
            },
            pseudocode:
                "arrived = False\n" +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")\n' +
                'OUTPUT("Are we nearly there yet?")',
            code:
                "arrived = False\n" +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")\n' +
                'print("Are we nearly there yet?")',
        },
        {
            defination: (
                <span>
          Fortunately, to get a computer to do the same thing over and over
          again, you don’t have to write the same code over and over again.
          Instead of repeating instructions, you can reduce the length of
          programs by using <b>iteration</b>. Iteration means doing something
          repeatedly. In your program you can use a loop statement to repeat a
          set of instructions.
        </span>
            ),
        },
        {
            defination: (
                <span>
          Kompyuter bir xil ishni qayta-qayta bajarishi uchun siz bir xil kodni
          yuqoridagi kabi qayta va qayta yozishingiz shart emas. Ko'rsatmalarni
          takrorlash o'rniga, <b>takrorlash operatorlari</b> yordamida
          dasturlarning uzunligini qisqartirishingiz mumkin . <br />{" "}
                    <b>Takrorlash operatorlari</b> - biror narsani qayta-qayta qilishni
          anglatadi
        </span>
            ),
        },
        {
            defination:
                "Using iteration, the program above could be written as follows:",
        },
        {
            defination:
                "Takrorlash operatorlari yordamida yuqoridagi dastur quyidagicha yozilishi mumkin::",
            pseudocode:
                "arrived = False\n" +
                "WHILE arrived == False\n" +
                '    OUTPUT("Are we nearly there yet?")\n' +
                "ENDWHILE   ",
            code:
                "arrived = False\n" +
                "WHILE arrived == False\n" +
                '    print("Are we nearly there yet?")\n' +
                "ENDWHILE   ",
        },
        {
            defination: (
                <p>
                    When you use iteration, you specify a group of statements to be
                    repeated. This can be for a certain number of repetitions or it can be
                    controlled by a condition at the start or the end of the loop. There
                    are two main types of loop:
                    <ul style={{ listStyleType: "decimal" }} className="pl-7">
                        <li>
                            <b>Count-controlled</b> iteration (also known as{" "}
                            <b>definite iteration</b>) is when a set of instructions is
                            repeated a specific number of times. Types of count-controlled
                            loop include <code>for</code> loops and <code>for each</code>{" "}
                            loops.
                        </li>
                        <li>
                            <b>Condition-controlled</b> iteration (also known as indefinite
                            iteration) is when a set of instructions is repeated based on
                            whether a condition evaluates as <code>True</code> or{" "}
                            <code>False</code>. Types of condition-controlled iteration
                            include <code>while</code> loops, <code>do while</code>
                            loops, and <code>repeat until</code> loops.
                        </li>
                    </ul>
                </p>
            ),
        },
        {
            defination: (
                <p>
                    <hr/>
                    Takrorlanishlarda siz takrorlash operatorlaridan foydalanashingiz
                    mumkin. Ular ma'lum marotaba takrorlanishlarni hosil qilishi mumkin
                    yoki takrolanishning boshi yoki oxirida shart orqali boshqarilishi
                    mumkin. Takrorlash operatorlarining ikkita asosiy turi mavjud:
                    <ul style={{ listStyleType: "decimal" }} className="pl-7">
                        <li>
                            <b>Sanoq bilan boshqariladigan takrorlanishlar</b> (
                            <b>aniq iteratsiya </b> deb ham ataladi) ko'rsatmalar to'plami
                            ma'lum bir necha marta takrorlanishidir. Sanoq bilan
                            boshqariladigan takrolanishlarga <code>for</code> va{" "}
                            <code>for each</code> takrorlanishlari kiradi.
                        </li>
                        <li>
                            <b>Shart bilan boshqariladigan takrorlanishlar</b> (
                            <b>noaniq iteratsiya</b> deb ham ataladi)da shart{" "}
                            <code>True</code> yoki <code>False</code> qabul qilishi asosida
                            ko'rsatmalar to'plami takrorlanadi . Shart bilan boshqariladigan
                            takrorlanish turlariga <code>while</code>, <code>do while</code>{" "}
                            va <code>repeat until</code> takrorlash oparatorlari kiradi.
                        </li>
                    </ul>
                    <hr/>
                </p>
            ),
        },
        {
            defination: <p className="text-bf"><b>Savol:</b> yuqorida ko'rsatilgan dastur qanday takrorlash operatoriga misol bo'ladi?</p>
        }
    ],
};
