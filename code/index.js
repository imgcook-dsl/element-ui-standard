export default {
  name: 'Page',
  data() {
    return {
      tabledata: [
        { key: '1', name: '胡彦斌1', age: 32, address: '西湖区湖底公园1号1' },
        { key: '2', name: '胡彦祖2', age: 42, address: '西湖区湖底公园1号2' },
        { key: '3', name: '胡彦斌3', age: 322, address: '西湖区湖底公园1号3' },
        { key: '4', name: '胡彦祖4', age: 421, address: '西湖区湖底公园1号4' }
      ],
      column: [
        { label: '姓名', prop: 'name', key: 'name' },
        { label: '年龄', prop: 'age', key: 'age' },
        { label: '住址', prop: 'address', key: 'address' }
      ],
      taglist: ['标签一', '标签二', '标签三'],
      treedata: [
        {
          label: '一级 1',
          children: [{ label: '二级 1-1', children: [{ label: '三级 1-1-1' }] }]
        },
        {
          label: '一级 2',
          children: [
            { label: '二级 2-1', children: [{ label: '三级 2-1-1' }] },
            { label: '二级 2-2', children: [{ label: '三级 2-2-1' }] }
          ]
        },
        {
          label: '一级3',
          children: [
            { label: '二级 3-1', children: [{ label: '三级 3-1-1' }] },
            { label: '二级 3-2', children: [{ label: '三级 3-2-1' }] }
          ]
        }
      ],
      defaultProps: { children: 'children', label: 'label' },
      currentPage4: 1,
      time: '2022-10-24',
      activeName: 'first',
      checked: [],
      constants: {}
    };
  },
  methods: {
    // eslint-disable-next-line
    tableRowClassName_1(row, rowIndex) {
      if (rowIndex === 1) {
        return 'background: oldlace;';
      } else if (rowIndex === 3) {
        return 'background: #f0f9eb;';
      }
      return '';
    },
    // eslint-disable-next-line
    handleSelectionChange_1() {},
    // eslint-disable-next-line
    formatter_1(row, column) {
      return row.name;
    },
    // eslint-disable-next-line
    filterHandler_1(value, row, column) {},
    // eslint-disable-next-line
    handleClose_1() {},
    // eslint-disable-next-line
    handleClose_2(tag) {
      this.taglist.splice(this.taglist.indexOf(tag), 1);
    },
    // eslint-disable-next-line
    handleNodeClick_1(data) {
      console.log(data);
    },
    // eslint-disable-next-line
    handleSizeChange_1(val) {
      console.log(`每页 ${val} 条`);
    },
    // eslint-disable-next-line
    handleCurrentChange_1(val) {
      console.log(`当前页: ${val}`);
    },
    // eslint-disable-next-line
    changeDatePicker_1() {
      // function
    },
    // eslint-disable-next-line
    changeCheckboxGroup_1() {
      // function
    },
    // eslint-disable-next-line
    changeCheckboxGroup_2() {
      // function
    }
  }
};
