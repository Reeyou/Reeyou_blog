<template>
  <div>
    <PageTable
      title="账户列表"
      :tbData='tbData'
      :columns='columns'
      :filters='filters'
      :onFilter="handleFilter"
      :onReset="handleReset"
    />
  </div>
</template>

<script>
import PageTable from '@/components/PageTable'
import { getUserList } from '@/api/user'
export default {
    data () {
        return {
            tbData: [],
            columns: [
                {
                    label: '用户名',
                    key: 'username'
                },
                {
                    label: '用户角色',
                    key: 'role'
                }
            ],
            filters: [
                {
                    label: '标题',
                    type: 'Input'
                },
                {
                    label: '标签',
                    type: 'Input'
                },
                {
                    label: '类型',
                    type: 'Input'
                },
                {
                    label: '状态',
                    type: 'Select',
                    selectList: [
                        {
                            value: '',
                            label: '全部'
                        },
                        {
                            value: 0,
                            label: '当前'
                        }
                    ]
                }
            ]
        }
    },
    created () {
        this.getData()
    },
    methods: {
        handleFilter () {
            console.log(1)
        },
        handleReset () {
            console.log(1)
        },
        getData (pageSize = 1, limit = 10) {
            getUserList({pageSize, limit}).then(res => {
                this.tbData = res.data
            })
        }
    },
    components: {
        PageTable
    }
}
</script>

<style lang="scss" scoped>

</style>
