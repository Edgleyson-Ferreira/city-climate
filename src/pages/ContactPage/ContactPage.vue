<template>
    <main>
        <section class="container">
            <h1>Contato</h1>
            <div class="contact">
                <div class="contact" v-for="(contact, index) in contacts" :key="index">
                    <div class="contact-title">{{ contact.title }}</div>
                    <p><a :href="contact.link" target="_blank">{{ contact.label }}</a></p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            contacts: [
                {
                    "title": "Perfil LinkIn",
                    "label": "linkedin.com/in/edgleyson-ferreira-807a34233",
                    "link": "https://www.linkedin.com/in/edgleyson-ferreira-807a34233"
                },
                {
                    "title": "GitHub",
                    "label": "github.com/Edgleyson-Ferreira",
                    "link": "https://github.com/Edgleyson-Ferreira"
                },
                {
                    "title": "Email",
                    "label": "edgleyson.ferreira@upe.br",
                    "link": "mailto:edgleyson.ferreira@upe.br"
                }
            ]
        }
    },
}
</script>

<style scoped src="./style.css" />

