<script setup lang="ts">
import WidgetFive from '@/components/dashboard/WidgetFive.vue';
import UniqueVisitor from '@/components/dashboard/UniqueVisitor.vue';
import IncomeOverview from '@/components/dashboard/IncomeOverview.vue';
import RecentOrder from '@/components/dashboard/RecentOrder.vue';
import AnalyticsReport from '@/components/dashboard/AnalyticsReport.vue';
import HelpSupport from '@/components/dashboard/HelpSupport.vue';
import TransactionHistory from '@/components/dashboard/TransactionHistory.vue';
import SalesReport from '@/components/dashboard/SalesReport.vue';
</script>
<template>
  <v-row>
    <v-col cols="12">
      <!-- -------------------------------------------------------------------- -->
      <!-- Total widgets -->
      <!-- -------------------------------------------------------------------- -->
      <WidgetFive />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Unique visitor -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="8">
      <UniqueVisitor />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Income overview -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <IncomeOverview />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Recent order -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="8">
      <RecentOrder />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Analytics Report -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <AnalyticsReport />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Sales Report -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="7">
      <SalesReport />
    </v-col>

    <v-col cols="12" md="5">
      <v-row>
        <!-- -------------------------------------------------------------------- -->
        <!-- Transaction History -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <TransactionHistory />
        </v-col>

        <!-- -------------------------------------------------------------------- -->
        <!-- Help support -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <HelpSupport />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
