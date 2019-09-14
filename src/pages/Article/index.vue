<template>
  <div>
    <PageTable
      title="文章列表"
      :columns="columns"
      :data="data"
      :filters="filters"
      :addBtn='{status: true, addArticle}'
      :onFilter='handleFilter'
      :onReset='handleReset'
    />
  </div>
</template>

<script>
import PageTable from "@/components/PageTable";
export default {
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      filters: [
        {
          lable: "标题",
          type: "Input"
        },
        {
          lable: "标签",
          type: "Input"
        },
        {
          lable: "类型",
          type: "Input"
        },
        {
          lable: "状态",
          type: "Select",
          status: [
            {
              value: '',
              label: "全部"
            },
            {
              value: 0,
              lable: "当前"
            }
          ]
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    handleFilter() {
      console.log(11)
    },
    handleReset() {
      console.log(22)
    }
  },
  components: {
    PageTable
  }
};
</script>

<style lang="scss" scoped>
</style>