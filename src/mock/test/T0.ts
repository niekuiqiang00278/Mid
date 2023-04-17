// interface CLientGroup {
//     us: string
//     aka: string
//     por: string
//     ws: boolean
//     live: boolean
//     pt: string
//     lt: string
// }
//
// @ts-ignore
import Mock from "mockjs";
const Random = Mock.Random;
function slkk() {
    return Mock.mock({
        us: Random.name(),
        aka: Random.guid(),
        por: Random.guid(),
        ws: Random.boolean(),
        live: Random.integer(0,120),
        pt: Random.datetime(),
        lt: Random.datetime(),
    })
}
function dkkf() {
    const a0 = 5;
    const a2 = []
    for (let a1 = 0; a1 < a0; a1++) {
        a2.push(slkk())
    }
    return a2
}

export default {
    url: "http://mockjs/test/mock/t0",
    type: "post",
    response: function () {
        return Mock.mock({
            status_code:200,
            code:200,
            result:{
                akt:dkkf()
            },
            msg:'',
        });
    },
};
