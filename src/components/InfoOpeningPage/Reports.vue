<template>
  <div v-if="ifReportVisible">
    <ReportsWithHeader
      v-for="(report, index) in reports"
      :key="index"
      :heading="report.heading"
      :archiveLinks="report.archiveLinks"
    />
  </div>
</template>

<script>
import ReportsWithHeader from '@/components/InfoOpeningPage/ReportsWithHeader.vue';

export default {
  name: 'Reports',

  props: {
    ifReportVisible: { type: Boolean, default: false },
    reports: { type: Array },
  },

  components: {
    ReportsWithHeader,
  },
};
</script>
