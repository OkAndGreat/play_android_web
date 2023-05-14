<script>
/* eslint-disable */
import {getFrequentWebsite} from "@/network/API";
import {List} from "vant";

const TAG = "FrequentWebsite"
export default {
    name: "FrequentWebsite",
    data() {
        return {
            hotKeyList: [],
            hotKeyMap: new Map()
        }
    },
    created() {
        console.log(TAG + "" + "created")
        this.initHotKeys()
    },
    methods: {
        async initHotKeys() {
            const {data: res} = await getFrequentWebsite()
            this.hotKeyList = res.data
            console.log(TAG + "[hotkeys:] --> " + JSON.stringify(this.hotKeyList))
        },
    },
    watch: {
        hotKeyList(newValue) {
            this.hotKeyMap.clear()
            for (const item of newValue) {
                if (this.hotKeyMap.has(item.category)) {
                    this.hotKeyMap.get(item.category).push(item)
                } else {
                    this.hotKeyMap.set(item.category, [item])
                }
            }
        }
    }
}
</script>

<template>
    <div class="FrequentWebsite">
        <h2 class="title">常用网站</h2>
    </div>
</template>

<style scoped lang="less">
.FrequentWebsite {
  margin-top: 20px;
  background-color: white;

  .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #8DB5D0;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    text-indent: 10px;
    white-space: nowrap;

  }
}
</style>