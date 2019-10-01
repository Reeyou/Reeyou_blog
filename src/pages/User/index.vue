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
import PageTable from "@/components/PageTable";
  export default {
    data() {
      return {
        tbData: [],
        columns: [
          {
            label: "标签id",
            key: "tag_id"
          },
          {
            label: "标签名称",
            key: "tagname"
          },
          {
            label: "操作",
            key: "action",
            width: 150,
            align: "center",
            render: (params) => {
              return (
                <div class='action'>
                  <span onClick={() => this.editTag(params)}>编辑</span>
                  <span onClick={() => this.deleteTag(params)}>删除</span>
                </div>
              )
            }
          }
        ],
        filters: [
          {
            label: "标题",
            type: "Input"
          },
          {
            label: "标签",
            type: "Input"
          },
          {
            label: "类型",
            type: "Input"
          },
          {
            label: "状态",
            type: "Select",
            selectList: [
              {
                value: "",
                label: "全部"
              },
              {
                value: 0,
                label: "当前"
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleFilter() {
        console.log(1)
      },
      handleReset() {
        console.log(1)
      }
    },
    components: {
      PageTable
    }
  }
</script>

<style lang="scss" scoped>

</style>