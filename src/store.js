import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: null,
    collectionCount: null,
    archetypeList_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypes: null,
    selectedArchetype: '',


    fetchData(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response.config.url);
                this.cards = response.data.data;
                this.collectionCount = response.data.data.length;
                
            })
            .catch(error => {
                console.error(error);
            })
    },
    fetchFilter(){
        axios
        .get(this.archetypeList_url)
        .then(response => {
            this.archetypes = response.data;
        })
        .catch(error => {
            console.error(error)
        })
    }
})