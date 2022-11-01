<template>
    <div class="commom-width">
        <div>
            <h1>見積検索</h1>
            <span>検索条件に部分一致した見積情報が結果に表示されます。</span>
        </div>
        <div class="search-conditions">
            <p class="border">検索条件</p>
            <div class="estimate-condtion">
                <label class="search-label">見積番号</label>
                <input class="search-input" />
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condtion">
                <label class="search-label">案件名</label>
                <input class="search-input" />
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condtion">
                <label class="search-label">見積ステータス</label>
                <input class="search-input" />
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condtion">
                <label class="search-label">顧客名</label>
                <input class="search-input" />
                <button class="customer_button">顧客選択</button>
                <button class="clear-button">クリア</button>
                <button class="search-button">検索</button>
            </div>
            <div class="estimate-condtion">
                <label class="search-label">担当者名</label>
                <input class="search-input" />
                <button class="customer_button">顧客選択</button>
                <button class="clear-button">クリア</button>
                <button class="search-button">検索</button>
            </div>
        </div>
    </div>
</template>

<script>
import EstimatesService from '../services/EstimatesService'

export default {
    name: 'EstimatesSearch',
    mounted() {
        EstimatesService.getAllEstimates()
    }
}

</script>