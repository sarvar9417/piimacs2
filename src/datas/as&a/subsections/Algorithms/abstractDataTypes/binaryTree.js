import binaryT from "../../../../../assets/images/binaryTree.png";
import binaryT2 from "../../../../../assets/images/binaryTree2.png";
import binaryT3 from "../../../../../assets/images/binaryTree3.png";
import binaryTreeSearch from "../../../../../assets/images/binaryTreeSearch.gif";


export const binaryTree = {
  name: "Binary Tree",
  definations: [
    {
      defination: (
        <>
          <b>A tree</b> is a connected, undirected graph with no cycles. Recall
          that a cycle is a path that starts and ends at the same node. In a
          tree, there are no cycles, which means that there is only one possible
          path between any two nodes. <b>Connected</b> means that there is a
          path from any node to any other node, and there is no node, or set of
          nodes, that is disconnected from the others. <b>Undirected</b> means
          that there is no direction associated with an edge.
        </>
      ),
    },
    {
      language: "uzb",
      defination: (
        <>
          <b>Tree</b> - bu bog'langan, yo'naltirilmagan, tsikllarsiz grafikdir.
          Eslatib o'tamiz, tsikl - bu takroriy bajariladigan va tugaydigan
          vazifalardir. Daraxtda tsikllar yo'q, ya'ni har qanday ikkita tugun
          o'rtasida faqat bitta mumkin bo'lgan yo'l bor. <b>Connected</b> degani
          har qanday tugundan boshqa tugunga yo'l borligini va boshqalardan
          uzilgan tugun yoki tugunlar to'plami yo'qligini bildiradi.
        </>
      ),
    },

    {
      defination: (
        <>
          Trees introduce another set of terminology: <br />
          <br />
          <ul className="pl-7 list-disc">
            <li>
              The <b>root</b> of a tree is the start node for traversals. If the
              tree has a root, it is called a rooted tree.
            </li>
            <li>
              A <b>branch</b> is a path from the root to an end point. The end
              point is called a <b>leaf</b>.
            </li>
            <li>
              The <b>height of a tree</b> is equal to the number of edges that
              connect the root node to the leaf node that is furthest away from
              it (i.e. the longest branch).
            </li>
          </ul>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Tree(Daraxt)</b>larda qo'llaniladigan asosiy atamalar: <br />
          <br />
          <ul className="pl-7 list-disc">
            <li>
              Daraxtning <b>root(ildiz)</b>i boshlang'ich tugundir. Agar
              daraxtning <b>root</b>i bo'lsa, u ildizli daraxt deb ataladi .
            </li>
            <li>
              <b>Branch</b> - bu ildizdan daraxt oxirigacha bo'lgan yo'l. Oxirgi
              nuqta <b>leaf</b>
              deb ataladi .
            </li>
            <li>
              <b>Daraxtning balandligi</b> - uning ildizini undan eng uzoqda
              joylashgan bargga bog‘lovchi qirralarning soniga teng.
            </li>
          </ul>
        </>
      ),
      language: "uzb",
    },

    {
      defination: (
        <>
          A <b>rooted tree</b> is a tree with one node that has been designated
          as the root. Unlike real trees, when representing rooted trees in a
          diagram, the root is commonly situated above the other nodes and the
          branches descend to the leaf nodes.
        </>
      ),
    },

    {
      defination: (
        <>
          <b>Ildizli daraxt</b> - bu bitta tuguni ildiz sifatida belgilangan
          daraxt. Haqiqiy daraxtlardan farqli o'laroq, diagrammada ildiz otgan
          daraxtlarni tasvirlashda, ildiz odatda boshqa tugunlar ustida
          joylashgan va novdalari barg tugunlariga tushadi.
        </>
      ),

      language: "uzb",
      image: {
        name: binaryT,
        alt: "binaryTree",
        width: "200px",
      },
    },

    {
      defination: (
        <>
          In a rooted tree, the nodes are connected by parent–child
          relationships. If you mark a path from the root towards a node, a
          <b>parent</b> node is a node that comes directly before another
          adjacent node, which is considered its <b>child</b>. A node can have
          any number of children. A <b>leaf</b> is a node with no children. In
          the diagram above, the node marked 12,12 is the parent of the nodes
          marked 2,2 and 11,11. The node marked 5,5 is a leaf node. It follows
          that the root is the only node with no parent, and all other nodes are
          descendants of the root.
        </>
      ),
    },

    {
      defination: (
        <>
          Ildizli daraxtda tugunlar <b>ota-ona</b> munosabatlari bilan
          bog'langan. Agar siz ildizdan tugun tomon yo'lni belgilasangiz, u{" "}
          <b>ota-ona</b> tugun, undan keyin keladiganlari esa <b>bola</b>{" "}
          tugunlar deb ataladi. Tugun har qanday sonli bolalarga ega bo'lishi
          mumkin. <b>Barg</b> - bu bolalari bo'lmagan tugun. Yuqoridagi
          diagrammada 1-daraxt ildizi, 2-tugun 5-6 tugunlar uchun ota-ona tugun,
          5-6 lar bola tugunlar va darxt barglari hisoblanadi. Bundan kelib
          chiqadiki, ildiz ota-onasi bo'lmagan yagona tugun, qolgan barcha
          tugunlar esa ildizning avlodlaridir.
        </>
      ),
      language: "uzb",
      image: {
        name: binaryT2,
        alt: "binaryTree",
        width: "200px",
      },
    },
    {
      name: "Binary Tree",
      defination: (
        <>
          A <b>binary tree</b> is a rooted tree where every node has at most two
          child nodes.
        </>
      ),
    },
    {
      defination: (
        <>
          <b>Ikkilik daraxt</b> - bu ildizli daraxt bo'lib, unda har bir tugunda
          ko'pi bilan ikkita tugun mavjud.
        </>
      ),
      language: "uzb",
    },

    {
      defination: (
        <>
          Ikkilik daraxlarni ifodalashda <b>array</b>lardan foydalaniladi. Bunda
          daraxlarning har bir tuguni o'z indexsiga ega bo'ladi hamda, o'ng va
          chap qismlaridagi elementlar indexsini o'zida saqlaydi. o'ng yoki chap
          qismida tugunga ega bo'lmasa -1 yoki null yoziladi. Daraxt ildizi
          0-indexda joylashgan deb olinadi.
        </>
      ),
      language: "uzb",
      image: {
        name: binaryT3,
        alt: "binaryTree",
        width: "400px",
      },
    },

    {
      name: "Binary Tree codes",
      defination: (
        <>
          <b>Declare a new binary tree</b>
        </>
      ),

      pseudocode:
        "TYPE node\n" +
        "    DECLARE item : STRING\n" +
        "    DECLARE leftPointer : INTEGER \n" +
        "    DECLARE rightPointer : INTEGER\n" +
        "ENDTYPE\n" +
        "DECLARE rootPointer : INTEGER\n" +
        "DECLARE nextFreePointer : INTEGER\n" +
        "DECLARE myTree : ARRAY[0 : 9] OF TreeNode ",
    },

    {
      name: (
        <>
          <b>Finding an item in a binary tree</b>
        </>
      ),
      pseudocode:
        "DECLARE rootPointer:INTEGER\n" +
        "DECLARE itemPointer:INTEGER\n" +
        "DECLARE itemSearch:INTEGER\n" +
        "CONSTANT nullPointer <- -1\n" +
        "rootPointer <- 0\n" +
        "FUNCTION find (itemSearch) RETURNS INTEGER\n" +
        "itemPointer <- rootPointer\n" +
        "WHILE (myTree[itemPonter].item <> itemSearch and itemPointer <> nullPointer) DO\n" +
        "    IF (myTree[itemPointer].item > itemSearch)\n" +
        "        THEN \n" +
        "            itemPointer <- myTree[itemPointer].leftPointer\n" +
        "        ELSE\n" +
        "            itemPointer <- myTree[itemPointer].rightPointer\n" +
        "    ENDIF\n" +
        "ENDWHILE\n" +
        "RETURN itemPointer",

        image: {
          name: binaryTreeSearch,
            alt: "binaryTreeSearch",
            width: '400px'
        }
    },
    {
      name: (
        <>
          <b>Inserting items into a binary tree</b>
        </>
      ),
      pseudocode:
        "PROCEDURE InsertNode(NewItem) \n" +
        "    IF FreePtr <> NullPointer\n" +
        "        THEN\n" +
        "            NewNodePtr ← FreePtr\n" +
        "            FreePtr ← Tree[FreePtr].LeftPointer\n" +
        "            Tree[NewNodePtr].Data ← NewItem\n" +
        "            Tree[NewNodePtr].LeftPointer ← NullPointer\n" +
        "            Tree[NewNodePtr].RightPointer ← NullPointer\n" +
        "            IF RootPointer = NullPointer\n" +
        "                THEN\n" +
        "                    RootPointer ← NewNodePtr\n" +
        "                ELSE \n" +
        "                    ThisNodePtr ← RootPointer \n" +
        "                    WHILE ThisNodePtr <> NullPointer DO \n" +
        "                        PreviousNodePtr ← ThisNodePtr \n" +
        "                        IF Tree[ThisNodePtr].Data > NewItem\n" +
        "                            THEN \n" +
        "                                TurnedLeft ← TRUE\n" +
        "                                ThisNodePtr ← Tree[ThisNodePtr].LeftPointer\n" +
        "                            ELSE \n" +
        "                                TurnedLeft ← FALSE\n" +
        "                                ThisNodePtr ← Tree[ThisNodePtr].RightPointer\n" +
        "                        ENDIF \n" +
        "                    ENDWHILE\n" +
        "                    IF TurnedLeft = TRUE \n" +
        "                        THEN\n" +
        "                            Tree[PreviousNodePtr].LeftPointer ← NewNodePtr   \n" +
        "                        ELSE\n" +
        "                            Tree[PreviousNodePtr].RightPointer ← NewNodePtr \n" +
        "                    ENDIF\n" +
        "            ENDIF \n" +
        "    ENDIF\n" +
        "  ENDPROCEDURE",
    },

    {
      name: "Questions",
      defination: (
        <>
          <b>1. (9618/41/O/N/22: 3)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>2. (9608/41/M/J/21: 4)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>3. (9608/42/M/J/18: 6)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>4. (9608/42/M/J/21: 1)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>5. (9608/41/O/N/15: 4)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>6. (9608/41/M/J/19: 2)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>7. (9608/42/M/J/19: 1)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>7. (9608/42/M/J/17: 2)</b>
        </>
      ),
    },
    {
      defination: (
        <>
          <b>8. (9608/42/M/J/17: 2)</b>
        </>
      ),
    },
  ],
};
