module.exports =  {
    "componentName": "Page",
    "props": {
      "style": {}
    },
    "children": [{
      "componentName": "Table",
      "props": {
        "className": "class-3",
        "data": "{{this.state.tabledata}}"
      },
      "id": "e4cce37e-e17e-41ae-bd1a-addf333df802",
      "children": [{
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "prop": "{{item.prop}}",
          "style": {
            "width": 100
          },
          "label": "{{item.label}}"
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true,
        "loopArgs": ["item", ""],
        "loop": "{{this.state.column}}"
      }]
    }, {
      "componentName": "Table",
      "props": {
        "className": "class-3",
        "data": "{{this.state.tabledata}}",
        "height": 250,
        "border": true,
        "row-class-name": function tableRowClassName(row, rowIndex) {
          if (rowIndex === 1) {
            return 'background: oldlace;';
          } else if (rowIndex === 3) {
            return 'background: #f0f9eb;';
          }
          return '';
        },
        "stripe": true,
        "@selection-change": function handleSelectionChange() {}
      },
      "id": "e4cce37e-e17e-41ae-bd1a-addf333df802",
      "children": [{
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "style": {
            "width": 100
          },
          "fixed": "left",
          "type": "selection",
          "width": 55
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true
      }, {
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "style": {
            "width": 100
          },
          "fixed": "left",
          "type": "index"
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true
      }, {
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "prop": "name",
          "style": {
            "width": 100
          },
          "label": "姓名",
          "fixed": "left",
          "formatter": function formatter(row, column) {return row.name;}
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true
      }, {
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "prop": "age",
          "style": {
            "width": 100
          },
          "label": "年龄",
          "filter-method": function filterHandler(value, row, column) {}
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true
      }, {
        "componentName": "TableColumn",
        "props": {
          "className": "class-4",
          "prop": "address",
          "style": {
            "width": 100
          },
          "label": "地址",
          "fixed": "right",
          "tooltip-effect": true,
          "show-overflow-tooltip": true
        },
        "id": "d2c1081d-295f-49bb-8d23-add1980e35c0",
        "condition": true
      }]
    }, {
      "componentName": "Div",
      "props": {
        "className": "class-6",
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "flex-start",
          "alignItems": "flex-start",
          "flexWrap": "wrap",
          "paddingTop": 10,
          "paddingBottom": 10
        }
      },
      "children": [{
        "componentName": "Tag",
        "props": {
          "className": "class-5",
          "closable": true,
          "visible": true,
          "type": "success",
          "_text": "标签一",
          "disable-transitions": "false",
          "size": "small",
          "effect": "plain",
          "@close": function handleClose() {}
        },
        "id": "ed2c5fa6-5477-4253-a246-add295aa1ffc"
      }, {
        "componentName": "Tag",
        "props": {
          "className": "class-5",
          "closable": true,
          "visible": true,
          "type": "success",
          "_text": "{{item}}",
          "disable-transitions": "false",
          "@close": function handleClose(tag) {
            this.taglist.splice(this.taglist.indexOf(tag), 1);
          }
        },
        "id": "ed2c5fa6-5477-4253-a246-add295aa1ffc",
        "loop": "{{this.state.taglist}}",
        "loopArgs": ["item", ""]
      }, {
        "componentName": "Tree",
        "props": {
          "className": "class-7",
          "autoExpandParent": "true",
          "blockNode": "false",
          "checkable": "false",
          "checkStrictly": "false",
          "defaultExpandAll": "false",
          "defaultExpandParent": "true",
          "disabled": "false",
          "draggable": "false",
          "multiple": "false",
          "selectable": true,
          "showIcon": "false",
          "showLine": false,
          "virtual": true,
          "data": "{{this.state.treedata}}",
          "props": "{{this.state.defaultProps}}",
          "@node-click": function handleNodeClick(data) {
            console.log(data);
          }
        },
        "id": "fd1175df-708c-47be-992c-addf09d86ee8"
      }, {
        "componentName": "Pagination",
        "props": {
          "className": "class-8",
          "defaultCurrent": "1",
          "defaultPageSize": "10",
          "style": {
            "display": "flex",
            "width": "100%",
            "height": "60px"
          },
          "total": 400,
          "@size-change": function handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          "@current-change": function handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          "current-page": "{{this.state.currentPage4}}",
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          "layout": "total, sizes, prev, pager, next, jumper"
        },
        "id": "59a5be02-e749-42b5-9375-addce5937812"
      }],
      "id": "62adf20f-404e-4df7-baeb-addde085f82c"
    }, {
      "id": "c1de3970-de5b-11ed-bd38-d37097bc62a4",
      "name": "日期选择器",
      "componentName": "DatePicker",
      "props": {
        "v-model": "{{time}}",
        "@change": function changeDatePicker() { // function
          
        },
        "type": "date",
        "format": "yyyy-MM-dd"
      }
    }, {
      "name": "标签页",
      "componentName": "Tabs",
      "props": {
        "v-model": "{{activeName}}",
        "@tabClick": function changeCheckboxGroup() { // function
          
        }
      },
      "children": [{
        "componentName": "TabPane",
        "props": {
          "label": "用户管理",
          "name": "first"
        }
      }, {
        "componentName": "TabPane",
        "props": {
          "label": "配置管理",
          "name": "second"
        }
      }, {
        "componentName": "TabPane",
        "props": {
          "label": "角色管理",
          "name": "third"
        }
      }]
    }, {
      "name": "多选组",
      "componentName": "CheckboxGroup",
      "props": {
        "v-model": "{{checked}}",
        "@change": function changeCheckboxGroup() { // function
          
        }
      },
      "children": [{
        "componentName": "Checkbox",
        "props": {
          "label": "zuqiu"
        },
        "children": []
      }, {
        "componentName": "Checkbox",
        "props": {
          "label": "lanqiu"
        }
      }, {
        "componentName": "Checkbox",
        "props": {
          "label": "bpq"
        }
      }]
    }, {
      "componentName": "Div",
      "props": {
        "className": "class-9"
      },
      "children": [{
        "componentName": "Badge",
        "props": {
          "className": "class-9",
          "dot": false,
          "overflowCount": "99",
          "showZero": false,
          "value": 12
        },
        "children": [{
          "componentName": "Button",
          "props": {
            "className": "class-9",
            "_text": "回复"
          },
          "id": "f4d15186-ab5b-4fb7-82e7-add5da000355"
        }],
        "id": "f4d15186-ab5b-4fb7-82e7-add5da000355"
      }],
      "id": "f4d15186-ab5b-4fb7-82e7-add5da000355"
    }],
    "state": {
      "tabledata": [{
        "key": "1",
        "name": "胡彦斌1",
        "age": 32,
        "address": "西湖区湖底公园1号1"
      }, {
        "key": "2",
        "name": "胡彦祖2",
        "age": 42,
        "address": "西湖区湖底公园1号2"
      }, {
        "key": "3",
        "name": "胡彦斌3",
        "age": 322,
        "address": "西湖区湖底公园1号3"
      }, {
        "key": "4",
        "name": "胡彦祖4",
        "age": 421,
        "address": "西湖区湖底公园1号4"
      }],
      "column": [{
        "label": "姓名",
        "prop": "name",
        "key": "name"
      }, {
        "label": "年龄",
        "prop": "age",
        "key": "age"
      }, {
        "label": "住址",
        "prop": "address",
        "key": "address"
      }],
      "taglist": ["标签一", "标签二", "标签三"],
      "treedata": [{
        "label": "一级 1",
        "children": [{
          "label": "二级 1-1",
          "children": [{
            "label": "三级 1-1-1"
          }]
        }]
      }, {
        "label": "一级 2",
        "children": [{
          "label": "二级 2-1",
          "children": [{
            "label": "三级 2-1-1"
          }]
        }, {
          "label": "二级 2-2",
          "children": [{
            "label": "三级 2-2-1"
          }]
        }]
      }, {
        "label": "一级3",
        "children": [{
          "label": "二级 3-1",
          "children": [{
            "label": "三级 3-1-1"
          }]
        }, {
          "label": "二级 3-2",
          "children": [{
            "label": "三级 3-2-1"
          }]
        }]
      }],
      "defaultProps": {
        "children": "children",
        "label": "label"
      },
      "currentPage4": 1,
      "time": "2022-10-24",
      "activeName": "first",
      "checked": []
    }
  }