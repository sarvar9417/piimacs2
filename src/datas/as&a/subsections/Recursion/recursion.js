import {recursions} from './recursions'
import {linearSearch} from './linearSearch'
import {binarySearch} from './binarySearch'
import {bubbleSort} from './bubbleSort'
import {linkedList} from './linkedList'
import {binaryTree} from './binaryTree'
import {stack} from './stack'
import {queue} from './queue'

export const recursion = {
    name: 'Recursion',
    routes: [
        {
            name: 'Recursion', to:'/recursion', datas: recursions
        },
        {
            name: 'Linear search', to:'/linearSearch', datas: linearSearch
        },
        {
            name: 'Binary search', to:'/binarySearch', datas: binarySearch
        },
        {
            name: 'Bubble sort', to:'/bubbleSort', datas: bubbleSort
        },
        {
            name: 'Linked list', to:'/list', datas: linkedList
        },
        {
            name: 'Binary tree', to:'/binaryTree', datas: binaryTree
        },
        {
            name: 'Stack', to:'/stack', datas: stack
        },
        {
            name: 'Queue', to:'/queue', datas: queue
        }
    ]

}
