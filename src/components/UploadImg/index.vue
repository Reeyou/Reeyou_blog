<template>
  <div class="upload">
    <div class="upload-container">
      <div class="icon">
        <Icon type="ios-add" class="add-icon"></Icon>
        <p>上传图片</p>
      </div>
      <input
        type="file"
        id="image"
        @change="upload"
        accept="image/jpg, image/jpeg, image/png, image/PNG"
        
      />
    </div>
    <div class="poster-preview" v-if="uploadStatus">
      <img :src="poster_src" class="poster" alt="封面图片" />
      <div class="preview-icon">
        <Icon type="ios-image-outline" class='icon' @click='handlePreview'/>
        <Icon type="ios-trash-outline" class='icon' @click='handleDelete'/>
      </div>
    </div>
  </div>
</template>

<script>
import dataURLtoBlob from "@/utils/dataURLtoBlob";
export default {
  props: ['action'],
  data() {
    return {
      poster_src: "",
      uploadStatus: false,
      files: '',
      imgData: ''
    };
  },
  methods: {
    upload(e) {
      let self = this;
      self.files = e.target.files[0]
      if (!e || !window.FileReader) return // 看支持不支持FileReader

      let reader = new FileReader()
      reader.readAsDataURL(self.files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        self.poster_src = this.result
        self.uploadStatus = true

        let formdata = new FormData()
        let blob = dataURLtoBlob(this.result)
        formdata.append("file", blob)
        self.$axios.post(self.action, formdata).then(res => {
          self.imgData = res.data.data
          self.$emit('getImgURL',self.imgData);
        })
      };
    },
    handlePreview() {

    },
    handleDelete() {
      this.poster_src = ''
      this.files = ''
      this.uploadStatus = false
      document.querySelector('#image').innerHTML = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.upload {
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 6px;
  text-align: center;
  position: relative;
  &-container {
    width: 100%;
    height: 100%;
    position: relative;
    .icon {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 10px 0;
      // display: none;
      .add-icon {
        font-size: 20px;
      }
      > p {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 13px;
        color: #aaa;
      }
    }
    > input {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .poster-preview {
    width: 100%;
    height: 100%;
    .poster {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 6px;
    }
    &:hover {
      .preview-icon {
        display: block;
      }
    }
    .preview-icon {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      padding:  20px 0;
      border-radius: 6px;
      .icon {
        display: inline-block;
        font-size: 20px;
        color: #eee;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>