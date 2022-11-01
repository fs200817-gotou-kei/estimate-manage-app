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
            <div class=" estimate-condition">
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
</template>

<script>
import '../css/estimates_search.css'
import '../css/input_common.css'
import EstimatesService from '../services/EstimatesService'

export default {
    name: 'EstimatesSearch',
    data() {
        return {
            selectEstimate: null
        }
    },
    mounted() {
        EstimatesService.getAllEstimates()
    }
}

</script>