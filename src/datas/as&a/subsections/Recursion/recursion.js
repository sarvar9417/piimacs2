import {recursions} from './recursions'
import {linearSearch} from './linearSearch'
import {binarySearch} from './binarySearch'
import {bubbleSort} from './bubbleSort'

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
        }
    ]

}
