import * as fa from '@fortawesome/free-solid-svg-icons';

const data = {
    funds: [
        {
            id: 102020,
            fund: 6000,
            currency: "USD",
        }],
    categories: [
        { id: 0, categoryLabel: "subscriptions", type: "expense", iconLabel: fa.faTv },
        { id: 1, categoryLabel: "auto", type: "expense", iconLabel: fa.faCar },
        { id: 2, categoryLabel: "home", type: "expense", iconLabel: fa.faHome },
        { id: 3, categoryLabel: "cellphone", type: "expense", iconLabel: fa.faMobile },
        { id: 4, categoryLabel: "grocery", type: "expense", iconLabel: fa.faStore },
        { id: 5, categoryLabel: "internet", type: "expense", iconLabel: fa.faGlobe },
        { id: 6, categoryLabel: "credit card", type: "expense", iconLabel: fa.faCreditCard },
        { id: 7, categoryLabel: "clothes", type: "expense", iconLabel: fa.faTshirt },
        { id: 8, categoryLabel: "utilities", type: "expense", iconLabel: fa.faTools },
        { id: 9, categoryLabel: "restaurant", type: "expense", iconLabel: fa.faUtensils },
        { id: 10, categoryLabel: "gas", type: "expense", iconLabel: fa.faGasPump },
        { id: 11, categoryLabel: "enternainment", type: "expense", iconLabel: fa.faFootballBall },
        { id: 12, categoryLabel: "misc", type: "expense", iconLabel: fa.faArchive },
    ],
    allocations: [
        {
            id: 1020200,
            category: 0,
            allocation: 100
        },
        {
            id: 1020201,
            category: 1,
            allocation: 550
        },
        {
            id: 1020202,
            category: 2,
            allocation: 900
        },
        {
            id: 1020203,
            category: 3,
            allocation: 150
        },
        {
            id: 1020204,
            category: 4,
            allocation: 600
        },
        {
            id: 1020205,
            category: 5,
            allocation: 100
        },
        {
            id: 1020206,
            category: 6,
            allocation: 2000
        },
        {
            id: 1020207,
            category: 7,
            allocation: 250
        },
        {
            id: 1020208,
            category: 8,
            allocation: 400
        },
        {
            id: 1020209,
            category: 9,
            allocation: 250
        },
        {
            id: 10202010,
            category: 10,
            allocation: 200
        },
        {
            id: 10202011,
            category: 11,
            allocation: 300
        },
        {
            id: 10202012,
            category: 12,
            allocation: 300
        },
    ],
    transactions: [
        // {
        //     month: 102020,
        //     category: 0,
        //     type: 'expense',
        //     amount: 100
        // },
        // {
        //     month: 102020,
        //     category: 0,
        //     type: 'expense',
        //     amount: 50
        // },
        // {
        //     month: 102020,
        //     category: 1,
        //     type: 'expense',
        //     amount: 50
        // }
    ],
};







export default data;