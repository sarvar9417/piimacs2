import {array} from './array'
import {onedimentionalarray} from './onedimentionalarray'

export const arrays = {
    name: 'Arrays',
    routes: [
        { name: "Array", to: "/array", datas: array },
        {name: "One dimensional array", to: "/one_dimensional_array", datas:onedimentionalarray}
    ],
}
