<script>
import searchNormalIcon from '@/svg/search_icon.svg'
import searchFocusedIcon from '@/svg/search_focus_icon.svg'

const TAG = "SearchWidget"
export default {
    name: "SearchWidget",
    data() {
        return {
            useFocusedSearchIcon: false,
            searchNormalIcon,
            searchFocusedIcon
        }
    },
    methods: {
        onSearchInputFocused() {
            console.log(TAG + "onSearchInputFocused")
            const searchInput = document.getElementsByClassName('searchForm')[0]
            searchInput.style.border = '1px solid #6EB8FC'

            this.useFocusedSearchIcon = !this.useFocusedSearchIcon
        },
        onSearchInputNotFocused() {
            console.log(TAG + "onSearchInputNotFocused")
            const searchInput = document.getElementsByClassName('searchForm')[0]
            searchInput.style.border = '1px solid #dadada'

            this.useFocusedSearchIcon = !this.useFocusedSearchIcon
        }
    }
}

</script>

<template>
    <form class="searchForm">
        <input class="searchInput" type="text" placeholder="搜索关键词以空格形式隔开"
               v-on:focus="onSearchInputFocused" v-on:blur="onSearchInputNotFocused">
        <div class="searchIconBox"><img ref="searchIcon"
                                        :src="useFocusedSearchIcon ? searchFocusedIcon : searchNormalIcon"
                                        class="searchIcon"></div>
    </form>
</template>

<style scoped>
.searchForm {
    width: 297px;
    height: 36px;
    border: 1px solid #dadada;
    border-radius: 5px;
    background-color: #fafafa;
    overflow: hidden;

    .searchInput {
        height: 36px;
        width: 190px;
        line-height: 36px;
        text-indent: 5px;
        font-size: 15px;
        background-color: transparent;
    }

    .searchIconBox {
        height: 36px;
        width: 40px;
        align-items: center;
        float: right;

        .searchIcon {
            width: 20px;
            height: 36px;
            line-height: 36px;
            cursor: pointer;
        }
    }
}
</style>