import recursionImage from "../../../../assets/images/recursion.gif";
import recursionTable from "../../../../assets/images/recursionTable.png";
export const recursions = {
  name: "Recursion",
  definations: [
    {
      term: "Recursion",
      defination: (
        <>
          a process using a function or procedure that is defined in terms of
          itself and calls itself.
        </>
      ),
    },
    {
      language: "uzb",
      term: "Rekusiya",
      defination: (
        <>
          bu o'zidan o'ziga murajaat qiladigan, o'zini chaqiradigan funksiya va
          protseduralardir. <br />
        </>
      ),
      image: {
        name: recursionImage,
        alt: "Recursion",
        width: "300px",
      },
    },
    {
      defination: (
        <>
          <b>Base case</b> – a terminating solution to a process that is not
          recursive.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Base case</b> – rekursiyada takrorlanish jarayonini tugatish qismi.
        </>
      ),
      language: "uzb",
    },
    {
      defination: (
        <>
          <b>General case</b> – a solution to a process that is recursively
          defined.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>General case</b> – funksiyaninng o'ziga muraojaat qiluvchi qismi.
        </>
      ),
      language: "uzb",
    },
    {
      pseudocode:
        "FUNCTION factorial (number : INTEGER) RETURNS INTEGER \n" +
        "    IF number = 0\n" +
        "        THEN\n" +
        "            answer ← 1 // base case\n" +
        "        ELSE\n" +
        "            answer ← number * factorial (number - 1) \n" +
        "            // recursive call with general case\n" +
        "    ENDIF\n" +
        "RETURN answer ENDFUNCTION",
    },
    {
      code:
        "def factorial(number):\n" +
        "    if number == 0:\n" +
        "            answer = 1 #base case\n" +
        "    else:\n" +
        "        answer = number * factorial(number - 1) \n" +
        "        # recursive call with general case\n" +
        "    return answer\n" +
        "\n" +
        "n = int(input('Please enter number: '))\n" +
        "f = factorial(n)\n" +
        "print(f)",
    },
    {
      image:{
        name: recursionTable,
        alt: "recursion",
        width: "800px"
      }
    }
  ],
};
