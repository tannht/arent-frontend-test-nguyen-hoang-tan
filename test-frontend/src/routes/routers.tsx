import TopPage from "../pages/top-page/TopPage";
import MyRecord from "../pages/my-record/MyRecord";
import Column from "../pages/column/Column";

const routers = [
    {
        path: '/',
        component: <TopPage/>,
        exact: true,
        name: 'TopPage'
    },
    {
        path: './my-record',
        component: <MyRecord/>,
        exact: true,
        name: 'MyRecord'
    },
    {
        path: './column',
        component: <Column/>,
        exact: true,
        name: 'Column'
    },
    {
        path: '*',
        component: TopPage,
        exact: true,
        name: 'TopPage'
    },
];
export default routers
