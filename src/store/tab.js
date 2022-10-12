export default {
    state: {
        isCollapse: false // 菜单展开
    },
    mutations: {
        collapseChange(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}