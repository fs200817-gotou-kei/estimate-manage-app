<template>
    <div class="content">
        <div>
            <h1 class="page-title">見積検索</h1>
            <span>検索条件に部分一致した見積情報が結果に表示されます。</span>
        </div>
        <p class="border">検索条件</p>
        <div class="search-conditions">
            <div class="estimate-condition">
                <label class="search-label">見積番号</label>
                <input class="search-input" />
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condition">
                <label class="search-label">案件名</label>
                <input class="search-input" />
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condition">
                <label class="search-label">見積ステータス</label>
                <select v-model="this.selectEstimate">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condition">
                <label class="search-label">顧客名</label>
                <input class="search-input" readonly />
                <button class="customer_button">顧客選択</button>
                <button class="clear-button">クリア</button>
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condition">
                <label class="search-label">担当者名</label>
                <input class="search-input" readonly />
                <button class="customer_button">顧客選択</button>
                <button class="clear-button">クリア</button>
                <button class="search-button">検索</button>
            </div>
        </div>
    </div>
    <SearchResult v-if="this.datas !== null" :datas=this.estimates :headersName=this.headersName />
</template>

<script>
import '../css/border.css'
import '../css/input_common.css'
import EstimatesService from '../services/EstimatesService'
import SearchResult from './SearchResult.vue'

export default {
    name: 'EstimatesSearch',
    components: {
        SearchResult
    },
    data() {
        return {
            selectEstimate: null,
            headersName: ['見積番号', '案件名', 'ステータス', '顧客名', '担当者名', '予算金額', '見積金額'],
            estimates: null
        }
    },
    methods: {
        async setDatas() {
            this.estimates = await EstimatesService.getAllEstimates()
            console.log(this.estimates)
        }
    },
    created() {
        this.setDatas()
    }
}

</script>