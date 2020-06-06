<template>
  <div>
    <PageTable
      title="文章列表"
      :tbData='tbData'
      :columns='columns'
      :filters='filters'
      :addBtn="{label: '添加文章',onAdd: addArticle}"
      :onFilter="handleFilter"
      :onReset="handleReset"
      @handleEdit='handleEdit'
      @handleDelete='handleDelete'
      @handelChangeSize='handelChangeSize'
      @handelChangePage='handelChangePage'
    />
  </div>
</template>

<script>
import PageTable from '@/components/PageTable'
import { getArticleList } from '@/api/article'
export default {
    data () {
        return {
            tbData: [],
            columns: [
                {
                    label: '文章标题',
                    prop: 'title'
                    // width: 400
                },
                {
                    label: '文章描述',
                    prop: 'desc'
                    // width: 400
                },
                {
                    label: '封面图',
                    prop: 'poster',
                    width: 140,
                    type: 'pic'
                },
                {
                    label: '文章分类',
                    prop: 'tag',
                    width: 100
                },
                {
                    label: '创建时间',
                    prop: 'create_time',
                    width: 200
                },
                {
                    label: '操作',
                    // fixed: 'right',
                    width: 140,
                    handle: [
                        { icon: 'el-icon-edit', type: 'primary', clickFun: this.handleEdit },
                        { icon: 'el-icon-delete', type: 'danger', clickFun: this.handleDelete }
                    ]
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
                    value: '',
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
        handleEdit (id) {
            console.log(id)
        },
        handleDelete (id) {
            console.log(id)
        },
        handelChangePage (pageSize) {
            this.getData(pageSize)
        },
        handelChangeSize (limit) {
            this.getData(1, limit)
        },
        handleFilter () {
            console.log(11)
            this.$router.go(-1)
            console.log(this.$route)
        },
        handleReset () {
            console.log(22)
        },
        addArticle () {
            this.$router.push('/addArticle')
        },
        getData (pageSize = 1, limit = 10) {
            getArticleList({pageSize, limit}).then(res => {
                this.tbData = res.data
            })
        },
        editArticle (val) {
            console.log(val)
        },
        deleteArticle () {}
    },
    components: {
        PageTable
    }
}
</script>

<style lang="scss" scoped>
</style>
