<template>
  <div>
    <PageTable
      title="留言列表"
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
import { getMessageList } from '@/api/message'
export default {
    data () {
        return {
            tbData: [],
            columns: [
                {
                    label: '用户',
                    key: 'name'
                },
                {
                    label: '留言内容',
                    key: 'content'
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
        getData (pageSize = 1, limit = 10) {
            getMessageList({pageSize, limit}).then(res => {
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
