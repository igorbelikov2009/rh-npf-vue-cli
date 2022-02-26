<template>
  <div>
    <Paragraph
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      :isHasBefore="paragraph.isHasBefore"
      :text="paragraph.text"
    />
  </div>
</template>

<script>
import Paragraph from '@/components/general/text/Paragraph.vue';

export default {
  name: 'BlockOfParagraphs',

  props: {
    paragraphs: { type: Array },
    isHasBefore: { type: String },
    text: { type: String },
  },
  components: {
    Paragraph,
  },
};
</script>
