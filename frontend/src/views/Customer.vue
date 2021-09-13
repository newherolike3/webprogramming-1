<template>
  <div>

      <HelloWorld msg="ลูกค้า (VIP)" name="John" lastname="wick" />

      <HelloWorld msg="ลูกค้า (ระดับ 1)" name="aaaa" lastname="1111" />

      <HelloWorld msg="ลูกค้า (ระดับ 2)" name="bbbb" lastname="2222" />

      <HelloWorld msg="ลูกค้า (ระดับ 3)" name="cccc" lastname="3333" />

  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {

  components: {
    HelloWorld
  }

}
</script>

<style>

</style>