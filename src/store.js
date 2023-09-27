import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: null,
    collectionCount: null,


    fetchData() {
        axios
            .get(this.base_url)
            .then(response => {
                this.cards = response.data.data;
                this.collectionCount = response.data.data.length;

            })
            .catch(error => {
                console.error(error);
            })
    }
})