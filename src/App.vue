<template>
    <component :is="component">
        <slot />
    </component>
</template>

<script>
    import LayoutZero from './layouts/LayoutZero'
    import LayoutOne from './layouts/LayoutOne'
    import LayoutTwo from './layouts/LayoutTwo'
    import LayoutThree from './layouts/LayoutThree'

    export default {
        name: 'App',

        components: {
            LayoutZero,
            LayoutOne,
            LayoutTwo,
            LayoutThree
        },

        computed: {
            component () {
                return LayoutThree
            }
        }
    }
</script>
