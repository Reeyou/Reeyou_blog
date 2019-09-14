<template>
  <div>
    <PageTable
      title="文章列表"
      :columns="columns"
      :data="tbData"
      :filters="filters"
      :addBtn="{label: '添加文章',status: true, onAdd: addArticle}"
      :onFilter="handleFilter"
      :onReset="handleReset"
    />
  </div>
</template>

<script>
import PageTable from "@/components/PageTable";
import { getArticleList } from '@/service/article'
export default {
  data() {
    return {
      tbData: [],
      columns: [
        {
          title: "文章id",
          key: "id"
        },
        {
          title: "文章标题",
          key: "title"
        },
        {
          title: "文章描述",
          key: "desc"
        },
        {
          title: "封面图",
          key: "poster"
        },
        {
          title: "文章分类",
          key: "tag"
        },
        {
          title: "创建时间",
          key: "create_time"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: params => {
            return (
              <div class="action">
                <span onClick={() => this.editArticle(params)}>编辑</span>
                <span onClick={() => this.deleteArticle(params)}>删除</span>
              </div>
            );
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
              value: "",
              label: "全部"
            },
            {
              value: 0,
              lable: "当前"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.getData()
  },
  methods: {
    handleFilter() {
      console.log(11);
    },
    handleReset() {
      console.log(22);
    },
    addArticle() {
      this.$router.push("/addArticle");
    },
    getData() {
      getArticleList().then(res => {
        this.tbData = res.data
      })
    },
    editArticle() {},
    deleteArticle() {}
  },
  components: {
    PageTable
  }
};
</script>

<style lang="scss" scoped>
</style>