<template>
    <button :class="['border-' + color, 'bg-' + background, 'text-' + color]"
            class="rounded border p-2 w-1/6 text-left font-bold">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: 'blue'
            },
            background: {
                type: String,
                default: 'blue-lightest'
            }
        }
    }
</script>