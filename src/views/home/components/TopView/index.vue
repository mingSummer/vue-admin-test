<template>
  <div class="top-view">
    <el-row :gutter="20"><!--gutter表示各个卡片间的间距为20px-->
      <el-col :span="6"><!--span总共为24，分4个卡片，每个span为6，分3个卡片，每个span为8-->
        <el-card shadow="hover">
          <total-sales/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TotalOrders from '../TotalOrders'
import TodayUsers from '../TodayUsers'
import TotalUsers from '../TotalUsers'

export default {
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>

<style scoped>

</style>
