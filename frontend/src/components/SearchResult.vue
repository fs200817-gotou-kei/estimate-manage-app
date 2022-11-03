<template>
    <div class="content">
        <p class="border">検索結果一覧</p>
        <div class="search-result">
            <table v-if="datas !== null" class="table">
                <tr class="table-headers">
                    <th v-for="(headerName, index) in headersName" :key="index">{{ headerName }}</th>
                </tr>
                <tr v-for="(data, index) in datas" :key="index">
                    <td v-for="(d, index) in data" :key="index">{{ d }}</td>
                    <td>test</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import '../css/border.css'

export default {
    name: 'SearchResult',
    props: [
        'datas',
        'headersName'
    ],
    created: function () {
    }
}
</script>