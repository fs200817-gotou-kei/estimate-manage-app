<template>
    <div class="content">
        <p class="border">検索結果一覧</p>
        <div class="search-result">
            <table class="table">
                <tr class="table-headers">
                    <th v-for="(headerName, index) in this.headerNames" :key="index">{{ headerName }}</th>
                </tr>
                <tr v-for="(estimate, index) in this.estimates" :key="index">
                    <td v-for="(estimateColumn, index) in estimate" :key="index">{{ estimateColumn }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import '../css/border.css'

export default {
    name: 'SearchResult',
    data() {
        return {
            headerNames: ['見積番号', '案件名', 'ステータス', '顧客名', '担当者名', '予算金額', '見積金額'],
            estimates: [
                {
                    id: 1,
                    name: 'オフィス',
                    status: '1',
                    customerName: '五斗',
                    employeeName: 'KEI',
                    budgetedAmount: 1000000,
                    estimateAmount: 1000
                },
                {
                    id: 2,
                    name: 'フィス',
                    status: '2',
                    customerName: '五',
                    employeeName: 'KI',
                    budgetedAmount: 200,
                    estimateAmount: 2000
                }
            ],
        }
    }
}
</script>