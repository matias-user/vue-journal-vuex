
export default {
    name: 'daybook',
    children:[
        {
            path:'',
            name:'no-entry',
            component: () => import('../views/NoEntrySelected')
        },
        {
            path:':id',
            name:'entry',
            component: () => import('../views/EntryView')
        }
    ],
    component:()=> import(/* webpackChunckName: "dayBook" */ '@/modules/daybook/layouts/DayBookLayout') 

}