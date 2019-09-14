<template>
  <div class="addContent">
    <div class="title">
      <h2>文章新增</h2>
      <p>add blog article</p>
    </div>
    <Form
      ref="articleForm"
      label-position="left"
      :model="articleForm"
      :rules="articleRule"
      :label-width="80"
    >
      <FormItem label="标题" prop="title" style="width: 500px">
        <Input v-model="articleForm.title" placeholder="请输入文章标题" />
      </FormItem>
      <FormItem label="文章描述" prop="desc" style="width: 500px">
        <Input
          v-model="articleForm.desc"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="请输入文章描述"
        />
      </FormItem>
      <FormItem label="标签" prop="tag" style="width: 500px">
        <Select style="width:200px" class='tagList'>
          <Option v-for="(item,index) in tagList" :value="item.tagname" :key="index" @click.native='changeTag(item.tagname)'>{{ item.tagname }}</Option>
        </Select>
      </FormItem>
      <FormItem label="封面图" prop="poster_src">
        <UploadImg action="/api/upload" @getImgURL="getImgURL" />
      </FormItem>
      <FormItem label="文章正文" prop="content">
        <mavon-editor v-model="articleForm.content" ref="md" @change="mavonChange" style="min-height: 600px" />
      </FormItem>
    </Form>
    <Button class="btn" @click="handleSubmit" icon="ios-add" type="primary">提交</Button>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { addArticle } from "@/service/article";
import { getTagList } from "@/service/tag";
import UploadImg from "@/components/UploadImg";
export default {
  components: {
    mavonEditor,
    UploadImg
  },
  data() {
    return {
      tagList: [],
      poster_src: "",
      content: "", // 输入的markdown
      html: "", // 及时转的html
      visible: false,
      articleForm: {
        title: "",
        desc: "",
        poster_src: "",
        tag: "",
        content: ""
      },
      articleRule: {
        title: [
          {
            required: true,
            message: "文章标题不能为空",
            trigger: "blur"
          }
        ],
        desc: [
          {
            required: true,
            message: "文章描述不能为空",
            trigger: "blur"
          }
        ],
        poster_src: [
          {
            required: true,
            message: "封面图不能为空",
            trigger: "change"
          }
        ],
        tag: [{ required: true, message: "文章标签不能为空", trigger: "blur" }],
        content: [
          {
            required: true,
            message: "内容不能为空",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.getTagData()
  },
  methods: {
    getTagData() {
      getTagList().then(res => {
        if(res.code == 200) {
          this.tagList = res.data
        }
      })
    },
    getImgURL(url) {
      this.poster_src = url;
      this.articleForm.poster_src = url
    },
    // 所有操作都会被解析重新渲染
    mavonChange(value, render) {
      this.html = render;
    },
    changeTag(val) {
      this.articleForm.tag = val
    },
    // 提交
    handleSubmit() {
      this.$refs["articleForm"].validate(valid => {
        console.log(this.html)
        if (valid) {
          const data = this.articleForm
          const params = {
            title: data.title,
            desc: data.desc,
            poster: data.poster_src,
            tag: data.tag,
            content: this.html
          }
          addArticle(params).then(res => {
            if(res.code == 200) {
              this.$Message.success("添加成功!")
            } else {
              this.$Message.error("添加失败!");
            }
          })
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../assets/css/markdown.css";
.addContent {
  .title {
    h2 {
      // border-bottom: none;
      font-size: 20px;
      font-weight: bold;
    }
    p {
      font-size: 12px;
      color: #aaa;
      margin: 10px 0 20px 0;
    }
  }
  .btn {
    margin-left: 80px;
  }
}
.v-note-wrapper {
  z-index: 0;
}
</style>