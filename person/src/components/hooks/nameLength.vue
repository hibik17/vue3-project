<script setup lang="ts">
import { computed } from "vue";
import { person } from "../type/Person.vue";
const nameLength = computed((postData: person) => {
  if (postData.name.length > 10) {
    return "name is too long";
  }
});
</script>
