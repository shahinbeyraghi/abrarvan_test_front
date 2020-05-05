<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">Factors List</h1>
            </div>
        </div>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <div class="feed-toggle">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Value</th>
                                <th scope="col">Description</th>
                            </tr>
                            </thead>
                            <tbody v-for="index in factors">
                            <tr>
                                <th scope="row">{{ index.id}}</th>
                                <td>{{ index.title}}</td>
                                <td>{{ index.value}}</td>
                                <td>{{ index.description}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { FACTORS } from "@/store/actions.type";
export default {
    name: "rwv-factors",
    beforeRouteEnter(to, from, next) {
        Promise.all([
            store.dispatch(FACTORS),
        ]).then(() => {
            next();
        });
    },
    computed: {
        ...mapGetters(["factors"])
    },
}
</script>