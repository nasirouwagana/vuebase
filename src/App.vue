<template>
    <component :is="component">
        <slot />
    </component>
</template>

<script>
    import LayoutOne from './layouts/LayoutOne'

    export default {
        name: 'App',

        components: {
            LayoutOne
        },

        computed: {
            component () {
                return LayoutOne
            }
        }
    }
</script>
