<template>
  <div>
    <PageTable
      title="标签列表"
      :columns="columns"
      :data="tbData"
      :filters="filters"
      :addBtn="{label: '添加标签',status: true, onAdd: handleAddTag}"
      :onFilter="handleFilter"
      :onReset="handleReset"
    />
    <Modal v-model="tagAddVisble " title="新增标签" @on-ok="handleAddOk" @on-cancel="handleAddCancel">
      <Form
        ref="tagAddForm"
        label-position="left"
        :model='tagAddForm'
        :rules="tagAddRule"
        :label-width="80"
      >
        <FormItem label="标签名" prop="tagAddName" style="width: 400px">
          <Input v-model="tagAddForm.tagAddName" placeholder="请输入标签名" />
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="tagEditVisble " title="编辑标签" @on-ok="handleEditOk" @on-cancel="handleEditCancel">
      <Form
        ref="tagEditForm"
        label-position="left"
        :rules="tagEditRule"
        :label-width="80"
      >
        <FormItem label="标签名" prop="tagEditName" style="width: 400px">
          <Input v-model="tagEditName" placeholder="请输入标签名" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import PageTable from "@/components/PageTable";
import { addTagName, getTagList, deleteTagName, updateTagName } from '@/service/tag'
export default {
  data() {
    return {
      tagAddVisble: false,
      tagEditVisble: false,
      tbData: [],
      tagAddForm: {
        tagAddName: "",
      },
      tagEditName: 'css',
      tagAddRule: {
        tagAddName: [
          {
            required: true,
            message: "标签名不能为空",
            trigger: "blur"
          }
        ],
      },
      tagEditRule: {
        tagEditName: [
          {
            required: true,
            message: "标签名不能为空",
            trigger: "blur"
          }
        ],
      },
      columns: [
        {
          title: "标签id",
          key: "tag_id"
        },
        {
          title: "标签名称",
          key: "tagname"
        },
        {
          title: "操作",
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
    getData() {
      getTagList().then(res => {
      this.tbData = res.data
    })
    },
    handleAddTag() {
      this.tagAddVisble = true;
    },
    handleAddOk() {
      this.$refs['tagAddForm'].validate(valid => {
        if(valid) {
          console.log(this.tagAddForm.tagAddName)
          const param = {
            tagname: this.tagAddForm.tagAddName
          }
          addTagName(param).then(res => {
            if(res.code == 200) {
              this.getData()
            }
          })
        } else {
          console.log('err')
        }
      })
    },
     handleAddCancel() {

    },
    editTag() {
      this.tagEditVisble = true
    },
    handleEditOk() {
      updateTagName(params).then(res => {

      })
    },
    handleEditCancel() {

    },
    deleteTag(params) {
      console.log(params.row.tag_id)
      deleteTagName({tagid: params.row.tag_id}).then(res => {
        if(res.code == 200) {
          this.getData()
        }
      })
    }
  },
  components: {
    PageTable
  }
};
</script>

<style lang="scss" scoped>
</style>