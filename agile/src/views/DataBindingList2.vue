<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>회사코드</th>
                    <th>인보이스NO</th>
                    <th>자료NO</th>
                    <th>직원ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="product" v-for="product in productList">
                    <td> {{product.sysareaId}} </td>
                    <td> {{product.invNo}} </td>
                    <td> {{product.docNo}} </td>
                    <td> {{product.empId}} </td>
                </tr>    
            </tbody>
        </table>
        <ul>
            <li v-for="product in productList" v-bind:key="product">
                회사명 : {{product.sysareaId}} 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productList: ""
        };
    },
    methods: {
        get1() {
                this.axios.get("/getList.do").then((response) => {
                    console.log(response.data.data);
                this.productList = response.data.data;
            });
        },
    }
}
</script>
<!--
<script>
export default {
    data() {
        return {
            productList: []
        };
    },
    created() {
        this.getList();
       
    },
    methods: {
        async getList(){
            this.productList = await this.$api('/getList.do','get')
        },
    }
}
</script>
-->
<!--<template>
    <div>
         <v-btn color="primary" @click="fetchData">get data</v-btn>
    </div>
</template>

<script>

//axios 라이브러리 import
import axios from 'axios'

export default {
    name: 'TestVueExaxios',

    data() {
        return {
           
        };
    },

    mounted() {
       
    },

    methods: {
        fetchData: function() {
            axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
            console.log(response);
            })
            .catch(function(error) {
            console.log(error);
            });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>-->