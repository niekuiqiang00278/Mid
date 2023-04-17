// interface Tree {
//     id: string
//     label: string
//     children?: Tree[]
// }
//
// const getKey = (prefix: string, id: number) => {
//     return `${prefix}-${id}`
// }
//
// const createData = (
//     maxDeep: number,
//     maxChildren: number,
//     minNodesNumber: number,
//     deep = 1,
//     key = 'node'
// ): Tree[] => {
//     let id = 0
//     return Array.from({length: minNodesNumber})
//         .fill(deep)
//         .map(() => {
//             const childrenNumber =
//                 deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
//             const nodeKey = getKey(key, ++id)
//             return {
//                 id: nodeKey,
//                 label: nodeKey,
//                 children: childrenNumber
//                     ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
//                     : undefined,
//             }
//         })
// }
// const t2 ={
//         url: 'http://mockjs/test/mock/t2',
//         type: 'post',
//         response: function () {
//             return {
//                 status_code: 200,
//                 code: 200,
//                 result: createData(4, 30, 40),
//                 msg: ''
//             }
//         }
//     }
//
//
// export default t2
import Mock from "mockjs";
export default
    // GetUserInfo
    {
        url: "http://mockjs/test/mock/t2",
        type: "get",
        response: () => {
            return {
                code: 200,
                message: "成功",
                data: {
                    name: "testName",
                },
            };
        },
    }
