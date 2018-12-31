<template>
    <button @click="$emit('click')" class="rounded text-white p-2" :class="[backgroundColor]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: 'blue'
            }
        },
        computed: {
            backgroundColor() {
                return 'bg-' + this.color;
            }
        }
    }
</script>