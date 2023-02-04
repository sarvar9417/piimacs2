import {adt} from './abstractDataTypes/adt'
import {stack} from './abstractDataTypes/stack'
import {linkedList} from './abstractDataTypes/linkedList'
import {binaryTree} from './abstractDataTypes/binaryTree'
import {computationalThinking} from './AlgorithmDesignAndProblemsolving/computationalThinking'
import {pseudocodes} from './abstractDataTypes/pseudocodes'
import {codes} from './abstractDataTypes/codes'

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
        },
        {
            name: 'Computational thinking', datas: computationalThinking
        },
        {
            name: 'Pseudocodes', to: '/pseudocode', datas:pseudocodes
        },
        {
            name: 'Codes', to: '/codes', datas:codes
        }
    ]
}
