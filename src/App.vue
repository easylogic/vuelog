<template>
    <div>
        <nav>
            <router-view name="navbar"></router-view>
        </nav>
        <div class="main">
            <router-view name="main"></router-view>
        </div>

        <router-view name="footer"></router-view>

    </div>
</template>

<script>

export default {
    data() {
        return {
        
        };
    }
};
</script>


<style lang="less">
    @color: black;

    div {
        color: @color;
    }
</style>