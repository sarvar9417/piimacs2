import {concepts} from './concepts'
import {tasks} from './tasks'

export const databases = {
    name: 'Database',
    routes: [
        { name: "Database concepts", to: "/concepts", datas: concepts },
        {name: 'Tasks', to: "/tasks", datas: tasks}
    ],
}
