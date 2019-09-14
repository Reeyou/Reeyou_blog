<template>
  <div class="markdown-body add-content">
    <div class="title">
      <h2>文章新增</h2>
      <p>add blog content</p>
    </div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="标题" prop="title">
        <Input v-model="title" placeholder="Enter your name" />
      </FormItem>
      <FormItem label="封面图" prop="pic">
        <input
          type="file"
          id="saveImage"
          @change="preview"
          accept="image/jpg, image/jpeg, image/png, image/PNG"
        />
        <!-- <img :src=imageSave alt="" id="portrait" style="width: 200px;height: 200px" /> -->
        <img :src="poster_src" class="article_cover" alt="封面图片" />
      </FormItem>
      <FormItem label="标签" prop="tag">
        <Input
          v-model="tag"
          placeholder="请输入文章标签"
        />
      </FormItem>
      <FormItem label="文章描述" prop="desc">
        <Input
          v-model="desc"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="请输入文章描述"
        />
      </FormItem>
      <FormItem label="文章正文" prop="content">
        <mavon-editor v-model="content" ref="md" @change="mavonChange" style="min-height: 600px" />
      </FormItem>
    </Form>
    <Button class="btn" @click='submit' icon="ios-add" type="primary">提交</Button>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { addArticle } from '@/service/article'
import { upload } from '@/service/upload'
import axios from 'axios'
export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      poster: "",
      poster_src: "",
      content: "", // 输入的markdown
      html: "", // 及时转的html
      visible: false,
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    // this.preview()
    
  },
  methods: {
    preview(e) {
      let _this = this;
      var files = e.target.files[0];
      console.log(files)
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.poster_src = this.result;
        _this.poster = this.result
      }
    },
   
    dataURLtoBlob(baseurl) {
      let arr = baseurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
          type: mime
      })
    },
    // 所有操作都会被解析重新渲染
    mavonChange(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      // console.log(this.content);
      // console.log(this.html);
      // // console.log(this.$refs.md.markdownIt)
      // this.saveHtml = this.html;
      // const params = {
      //   title: this.title,
      //   subtitle: this.desc,
      //   poster: poster_src,
      //   tag: this.tag,
      //   content: this.html
      // }
      console.log(this.poster)
      let formdata = new FormData()
      let blob = this.dataURLtoBlob(this.poster)
      console.log(blob)
      formdata.append('file', blob)
      this.$axios.post('/api/upload',formdata).then(res => {

      })
      // upload(params).then(res => {

      // })
      // console.log(params)
      // addArticle(params).then(res => {

      // })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/markdown.css";
.add-content {
  padding: 28px;
  .title {
    h2 {
      border-bottom: none;
      padding-bottom: 0;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #aaa;
    }
  }
  .btn {
    margin-left: 80px;
  }
}
</style>