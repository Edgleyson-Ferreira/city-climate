<template>
    <main>
        <div class="text-top">Página principal</div>
    </main>
</template>

<script>

export default {
    name: 'HomePage',
}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }
</style>