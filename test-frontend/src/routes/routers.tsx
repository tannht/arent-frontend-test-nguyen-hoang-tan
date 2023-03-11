import TopPage from "../components/top-page/TopPage";
import MyRecord from "../components/my-record/MyRecord";
import Column from "../components/column/Column";

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
