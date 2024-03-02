<script setup>
import { getAppwriteDocuments } from "@/utils/appwrite";

const docs = ref([]);

onMounted(async () => {
  try {
    const response = await getAppwriteDocuments();
    docs.value = response;

    console.log(docs.value.documents);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
  </div>
</template>
