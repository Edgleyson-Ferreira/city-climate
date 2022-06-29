<template>
    <header>
        <nav class="container">
            <div id="menu-items">
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style scoped>
header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}


#menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

ul {
    list-style: none;
    text-align: center;
    height: 60px;
    align-items: center;
}

ul li {
    margin: 20px 0px;
    color: var(--color-text-light);
}
</style>
