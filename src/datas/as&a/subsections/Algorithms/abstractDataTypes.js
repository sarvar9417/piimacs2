import {adt} from './abstractDataTypes/adt'
import {stack} from './abstractDataTypes/stack'
import {linkedList} from './abstractDataTypes/linkedList'
import {binaryTree} from './abstractDataTypes/binaryTree'

export const abstractDataTypes = {
    name: 'Abstract Data Types (ADTs)',
    routes:[
        {
            name: 'Abstract Data Types', to:'/adt', datas:adt
        },
        {
            name: 'Linked list', to: '/linkedlist', datas: linkedList
        },
        {
          name: 'Binary tree', to: '/binarytree', datas: binaryTree
        },
        {
            name: 'Stack', to: '/stack', datas: stack
        }
    ]
}
