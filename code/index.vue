<template>
  <div>
    <el-table class="class-3" :data="tabledata">
      <!-- eslint-disable-next-line -->
      <el-table-column
        class="class-4"
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in column"
        :key="index"/></el-table
    ><el-table
      class="class-3"
      :data="tabledata"
      :height="250"
      :border="true"
      :row-class-name="tableRowClassName_1"
      :stripe="true"
      @selection-change="handleSelectionChange_1"
      ><el-table-column
        class="class-4"
        :fixed="'left'"
        :type="'selection'"
        :width="55"/><el-table-column
        class="class-4"
        :fixed="'left'"
        :type="'index'"/><el-table-column
        class="class-4"
        :prop="'name'"
        :label="'姓名'"
        :fixed="'left'"
        :formatter="formatter_1"/><el-table-column
        class="class-4"
        :prop="'age'"
        :label="'年龄'"
        :filter-method="filterHandler_1"/><el-table-column
        class="class-4"
        :prop="'address'"
        :label="'地址'"
        :fixed="'right'"
        :tooltip-effect="true"
        :show-overflow-tooltip="true"
    /></el-table>
    <div class="class-6">
      <el-tag
        class="class-5"
        :closable="true"
        :visible="true"
        :type="'success'"
        :disable-transitions="false"
        :size="'small'"
        :effect="'plain'"
        @close="handleClose_1"
        >标签一</el-tag
      >
      <!-- eslint-disable-next-line -->
      <el-tag
        class="class-5"
        :closable="true"
        :visible="true"
        :type="'success'"
        :disable-transitions="false"
        @close="handleClose_2"
        v-for="(item, index) in taglist"
        :key="index"
        >{{ item }}</el-tag
      ><el-tree
        class="class-7"
        :autoExpandParent="true"
        :blockNode="false"
        :checkable="false"
        :checkStrictly="false"
        :defaultExpandAll="false"
        :defaultExpandParent="true"
        :disabled="false"
        :draggable="false"
        :multiple="false"
        :selectable="true"
        :showIcon="false"
        :showLine="false"
        :virtual="true"
        :data="treedata"
        :props="defaultProps"
        @node-click="handleNodeClick_1"
      /><el-pagination
        class="class-8"
        :defaultCurrent="1"
        :defaultPageSize="10"
        :total="400"
        @size-change="handleSizeChange_1"
        @current-change="handleCurrentChange_1"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :layout="'total, sizes, prev, pager, next, jumper'"
      />
    </div>
    <el-date-picker
      v-model="time"
      @change="changeDatePicker_1"
      :type="'date'"
      :format="'yyyy-MM-dd'"
    /><el-tabs v-model="activeName" @tabClick="changeCheckboxGroup_1"
      ><el-tab-pane :label="'用户管理'" :name="'first'"/><el-tab-pane
        :label="'配置管理'"
        :name="'second'"/><el-tab-pane
        :label="'角色管理'"
        :name="'third'"/></el-tabs
    ><el-checkbox-group v-model="checked" @change="changeCheckboxGroup_2"
      ><el-checkbox :label="'zuqiu'"/><el-checkbox
        :label="'lanqiu'"/><el-checkbox :label="'bpq'"
    /></el-checkbox-group>
    <div class="class-9">
      <el-badge
        class="class-9"
        :dot="false"
        :overflowCount="99"
        :showZero="false"
        :value="12"
        ><el-button class="class-9">回复</el-button></el-badge
      >
    </div>
  </div>
</template>
<script>
import Page from './index.js';
export default Page;
</script>
<style src="./index.css" />
