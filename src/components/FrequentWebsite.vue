<script>
/* eslint-disable */
import {getFrequentWebsite} from "@/network/API";

const TAG = "FrequentWebsite"
export default {
    name: "FrequentWebsite",
    data() {
        return {
            hotKeyList: [],
            hotKeyMap: new Map(),
            newHotKeyList: []
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
        mapToArray(map) {
            return Array.from(map)
        }
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
            this.newHotKeyList = Array.from(this.hotKeyMap.values()).map(list => [...list])
            console.log(TAG + "[newHotKeyList:] --> " + JSON.stringify(this.newHotKeyList))
        }
    }
}
</script>

<template>
    <div class="FrequentWebsite">
        <h2 class="title">常用网站</h2>
        <div v-for="value in newHotKeyList" class="singleCategory">
            <a class="itemCategoryFirst">{{ value[0].category + ':' }}</a>
            <a v-for="category in value" class="singleCategoryItem">{{ category.name }}</a>
        </div>
    </div>
</template>

<style scoped lang="less">
.FrequentWebsite {
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  border-radius: 3px;

  .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #8DB5D0;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    text-indent: 10px;
    white-space: nowrap;
    margin-bottom: 0;
  }

  .singleCategory {
    padding: 5px 10px 5px 10px;
    border-top: 1px dashed #e2e2e2;

    a {
      margin: 3px 8px 3px 8px;
      text-decoration: none;
      font-size: 14px;
      text-align: center;

      &:hover {
        color: inherit;
      }
    }


    .itemCategoryFirst {
      background-color: #1b93fb;
      padding-right: 5px;
      padding-left: 5px;
      color: #ffffff !important;
    }

    .singleCategoryItem {
      display: inline-block;
      cursor: pointer;
      color: #767676;

      &:hover {
        color: #1b93fb;
        text-decoration: underline;
      }
    }

    &:first-of-type {
      border-top: none;
    }
  }
}
</style>

