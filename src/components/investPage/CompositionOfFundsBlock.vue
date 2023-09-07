<template>
  <div v-if="isCompositionOfFundsBlockVisible">
    <ExpandingTable
      v-for="(expandingTable, index) in expandingTables"
      :key="index"
      :title="expandingTable.title"
      :tableHeadings="expandingTable.tableHeadings"
      :tableRows="expandingTable.tableRows"
    />
  </div>
</template>

<script>
import ExpandingTable from '@/components/investPage/ExpandingTable.vue';

export default {
  name: 'CompositionOfFundsBlock',

  props: {
    isCompositionOfFundsBlockVisible: { type: Boolean, default: false },
    expandingTables: { type: Array },
  },
  components: {
    ExpandingTable,
  },
};
</script>
