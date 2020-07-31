<template>
  <div class="about">
    <x-compound-table
      :tableData="tableData"
      :tableColumnsTitles="tableColumnsTitles"
      :tableColumnList="tableColumnList"
      :helpData="helpData"
      @handleSelect="handleSelect"
      @selectDelete="selectDelete"
      @handleOperation="handleOperation"
    ></x-compound-table>
  </div>
</template>

<script>
// import xCompoundTable from '@/components/xCompoundTable/xCompoundTable.vue'

export default {
  // components: {
  //   xCompoundTable
  // },
  data () {
    return {
      helpData: {
        title: '表格操作规范及提示',
        content: ['1.这是干什么的，这就是做什么的', '2.这是干什么的，这就是做什么的', '3.这是干什么的，这就是做什么的']
      },
      tableColumnsTitles: ['show', 'weak', 'city', 'address', 'active', 'day7', 'day30', 'province', 'day', 'week', 'month'],
      tableData: [
        {
          day7: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 1,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 2,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 3,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 4,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 5,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 6,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 7,
          month: 10,
          day: 21,
          show: 'good'
        },
        {
          day7: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 8,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 9,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 10,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 11,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 12,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 13,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 14,
          month: 10,
          day: 21,
          show: 'good'
        },
        {
          day7: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 15,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 16,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 17,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 18,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 19,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 20,
          month: 10,
          day: 21,
          show: 'good'
        }, {
          day7: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          weak: 21,
          month: 10,
          day: 21,
          show: 'good'
        }
      ],
      tableColumnList: {
        selection: {
          type: 'selection',
          width: 60,
          fixed: 'left',
          align: 'center'
        },
        name: {
          title: 'Name',
          key: 'name',
          fixed: 'left',
          width: 200,
          render: (h, params) => {
            const fav = this.tableData[params.index].fav
            const style = fav === 0 ? {
              cursor: 'pointer'
            } : {
              cursor: 'pointer',
              color: '#f50'
            }

            return h('div', [
              h('Icon', {
                style,
                props: {
                  type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                },
                nativeOn: {
                  address: () => {
                    this.toggleFav(params.index)
                  }
                }
              }),
              h('span', ' ' + params.row.name)
            ])
          }
        },
        show: {
          title: 'Show',
          key: 'show',
          width: 150,
          sortable: true
        },
        weak: {
          title: 'Weak',
          key: 'weak',
          width: 150,
          sortable: true
        },
        city: {
          title: 'city',
          key: 'city',
          width: 150,
          sortable: true
        },
        address: {
          title: 'address',
          key: 'address',
          width: 250,
          sortable: true
        },
        active: {
          title: 'Active',
          key: 'active',
          width: 150,
          sortable: true
        },
        day7: {
          title: '7, retained',
          key: 'day7',
          width: 150,
          sortable: true
        },
        day30: {
          title: '30, retained',
          key: 'day30',
          width: 150,
          sortable: true
        },
        province: {
          title: 'The next day left',
          key: 'province',
          width: 150,
          sortable: true
        },
        day: {
          title: 'Day Active',
          key: 'day',
          width: 150,
          sortable: true
        },
        week: {
          title: 'Week Active',
          key: 'week',
          width: 150,
          sortable: true
        },
        month: {
          title: 'Month Active',
          key: 'month',
          width: 150,
          sortable: true
        }
      }
    }
  },
  methods: {
    handleSelect (ele, status) {
      ele.selectAll(status)
    },
    selectDelete (arr) {
      const newArr = []
      this.tableData.forEach((a, index) => {
        !arr.some((b) => JSON.stringify(b) === JSON.stringify(a)) && newArr.push(a)
      })
      console.log(newArr)
      this.tableData = newArr
      console.log('this.tableData: ', this.tableData)
      // this.changePage(this.pageCurrent)
    },
    handleOperation (arr) {
      console.log('arr: ', arr)
    }
  }
}
</script>
