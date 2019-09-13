<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="addBtn" v-if='addBtn.status'>
      <Button type='primary' icon='ios-add' @click='addBtn.addArticle'>添加文章</Button>
    </div>
    <Row :gutter="30">
      <Col span="8" v-for="(item,index) in filters" :key='index'>
        <Form :model="formLeft" label-position="left" :label-width="60" v-if="item.type == 'Input'">
          <FormItem :label="item.lable">
            <Input v-model="formLeft.input1" />
          </FormItem>
        </Form>
        <Form :model="formLeft" label-position="left" :label-width="60" v-if="item.type == 'Select'">
          <FormItem label="City" prop="city" v-if="item.type == 'Select'">
            <Select v-model="formLeft.input1" placeholder="Select your city" >
              <Option v-for="(statuitem,index) in item.status" :key="index" :value="statuitem.value">{{statuitem.lable}}</Option>
            </Select>
        </FormItem>
        </Form>
      </Col>
      <Col span="8">
        <Button type='primary' @click='handleFilter'>筛选</Button>
        <Button type='primary' @click='handleReset'>重置</Button>
      </Col>
    </Row>
    <Table border :columns="columns" :data="data"></Table>
    <div class="page">
      <Page :total="100" show-sizer show-elevator show-total />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title","columns","addBtn","filters", "data",'onFilter','onReset'],
  data() {
    return {
      formLeft: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  mounted() {

  },
  methods: {
    handleFilter() {
      this.onFilter()
    },
    handleReset() {
      this.onReset()
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.addBtn {
  float: right;
  margin-top: -4px;
}
.page {
  float: right;
  margin-top: 20px;
  font-size: 12px;
}
</style>