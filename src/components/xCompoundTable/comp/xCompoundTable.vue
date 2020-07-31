<template>
  <div class="x-compound-table">
    <Button type="success" @click="handleSelectAll(true)">Set all selected</Button>
    <Button type="info" @click="handleSelectAll(false)">Cancel all selected</Button>
    <Button type="error" @click="handleSelectDelete()">Delete</Button>
    <Button type="primary" @click="handleOperation()">Operation</Button>
    <Icon type="md-help" class="helpicon" @click="modal1 = true"/>
    <Modal
        v-model="modal1"
        :title="helpData.title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p
          v-for="(item, index) in helpData.content"
          :key="index"
        >{{item}}</p>
    </Modal>
    <Table ref="tableSelection" :data="nowData" :columns="tableColumns2" @on-select="OnSelection"   @on-select-cancel="OnSelectionCancel" border height="560" width="1400"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="text-align: center">
            <Page :total="total" :page-size-opts="[10, 20, 50, 100]" show-sizer show-total show-elevator @on-change="changePage" @on-page-size-change="changeNum"></Page>
        </div>
    </div>
    <div class="checkbox-wrapper">
      <div class="checkbox-btn" @click="handleClick">表格设置</div>
      <Checkbox-group
        v-show="!!isShowPanel"
        v-model="tableColumnsChecked"
        @on-change="changeTableColumns"
        class="checkbox-content"
      >
        <Checkbox
          v-for="(item, index) in tableColumnsTitles"
          :key="index"
          class="checkbox-item"
          :label="item"
        >{{item}}</Checkbox>
      </Checkbox-group>
    </div>
  </div>
</template>
<script>

export default {
  name: 'xCompoundTable',
  components: {},
  props: {
    tableData: {
      type: Array
    },
    tableColumnsTitles: {
      type: Array
    },
    tableColumnList: {
      type: Object
    },
    helpData: {
      type: Object
    }
  },
  data () {
    return {
      modal1: false,
      isShowPanel: false,
      tableColumns2: [],
      tableColumnsChecked: this.tableColumnsTitles,
      pageSizeDefault: 10,
      nowData: [],
      pageCurrent: 1,

      selected: []
    }
  },
  computed: {
    total () {
      return this.tableData.length
    }
  },
  watch: {
    tableData () {
      // 传入数据发生改变，刷新改变数据表
      this.changePage(this.pageCurrent)
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    handleClick () {
      this.isShowPanel = !this.isShowPanel
    },
    OnSelection (row, selection) {
      // console.log(row)
      this.selected = row
    },
    OnSelectionCancel (row, selection) {
      // console.log(row)
      this.selected = row
    },

    handleSelectAll (status) {
      // this.$refs.tableSelection.selectAll(status)
      this.$emit('handleSelect', this.$refs.tableSelection, status)
    },
    handleSelectDelete () {
      this.$emit('selectDelete', this.selected)
      // const newArr = []
      // this.tableData.forEach((a, index) => {
      //   !this.selected.some((b) => JSON.stringify(b) === JSON.stringify(a)) && newArr.push(a)
      // })
      // console.log(newArr)
      // this.tableData = newArr
      // this.changePage(this.pageCurrent)
    },
    handleOperation () {
      this.$emit('handleOperation', this.selected)
    },
    changePage (page) {
      // 需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      const _start = (page - 1) * this.pageSizeDefault
      // 需要显示结束数据的index
      const _end = page * this.pageSizeDefault
      // 截取需要当前显示的数据
      this.nowData = this.tableData.slice(_start, _end)
      // 储存当前页
      this.pageCurrent = page
    },
    changeNum (num) {
      // 保存当前的每页显示条数 默认10条
      this.pageSizeDefault = num
      // 改变了每页显示条数，要重新加载获取列表数据
      this.changePage(this.pageCurrent)
    },
    getTable2Columns () {
      // 先排序，把selection和name放在前面
      const data = [this.tableColumnList.selection, this.tableColumnList.name]
      // 后面加入其他数据的既定排序
      this.tableColumnsChecked.forEach(col => data.push(this.tableColumnList[col]))

      return data
    },
    changeTableColumns () {
      // 定义排列顺序，让显示数据有一个队列tableColumnsTitles
      var sort = this.tableColumnsTitles
      var temp = []
      for (var i in sort) {
        if (this.tableColumnsChecked.indexOf(sort[i]) >= 0) {
          temp.push(sort[i])
        }
      }
      this.tableColumnsChecked = temp
      this.tableColumns2 = this.getTable2Columns()
    },
    toggleFav (index) {
      this.tableData[index].fav = this.tableData[index].fav === 0 ? 1 : 0
    }
  },
  mounted () {
    this.changeTableColumns()
    // 先加载一次首页 默认当前页1
    this.changePage(this.pageCurrent)
  }
}
</script>

<style lang="scss" scoped>
.x-compound-table {
  width: 90%;
  margin: 0 auto;
  position: relative;
  button {
    margin: 10px 10px;
  }
  .helpicon {
    color: #2baee9;
    font-size: 20px;
  }
  .checkbox-wrapper {
    position: relative;
    .checkbox-btn {
      position: absolute;
      color: #00f;
      right: 80px;
      bottom: 15px;
    }
    .checkbox-btn:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    .checkbox-content {
      position: absolute;
      bottom: 35px;
      right: 0;
      width: 266px;
      z-index: 10;
      background: #efefef;
      border-radius: 4px;
      padding: 5px;
      .checkbox-item {
        width: 120px;
        height: 18px;
        line-height: 18px;
      }
    }
  }
}
</style>
