<template>
    <div class="container">
        <input class="input_value" type="text" model-value="modelValue" :value="modelValue"
            @input="event => $emit('update:modelValue', (<HTMLInputElement>event.target).value)" />
        <label class="input_icon">
            <HIcon name="date" size="1em"></HIcon>
        </label>
        <div class="date-seletor">
            <div class="head">
                <div class="title">
                    <span class="title-btn"><input class="date-show year" type="number" v-model="year" min="0"
                            max="9999" ref="yearRef" @input="event => inputYear(event)"> 年</span>
                    <span class="title-btn"><input class="date-show month" type="number" v-model="month" min="1"
                            max="12" ref="monthRef" @input="event => inputMonth(event)"> 月</span>
                </div>
            </div>
            <div class="main">
                <div class="select" ref="select"></div>
                <div class="item-week" ref="itemWeeks" v-for="item in weeks">{{ item }}</div>
                <div class="item-previus" ref="itemPrevius" v-for="item in 7" @click="selectDatePrevius(item)">{{
                    item
                }}</div>
                <div class="item" ref="itemNormal" v-for="item in monthDaysNumber" @click="selectDate(item)"
                    :title="year + '年' + month + '月' + item + '日'">{{ item }}</div>
                <div class="item-next" ref="itemNext" v-for="item in (42 - monthDaysNumber - 7)"
                    @click="selectDateNext(item)">{{
                        item
                    }}
                </div>
            </div>
            <div class="foot">
                <div class="btn" @click="selectDatePrevius(1)">{{ previusMonth }}月</div>
                <div class="btn" @click="selectDateNext(1)">{{ nextMonth }}月</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { HIcon } from '../../../../packages';

//===============================父组件绑定的时间值====================================
const props = defineProps({
    modelValue: String,    // v-model绑定值
    shake: Boolean         // 是否开启震动
})
const emits = defineEmits([
    'update:modelValue'
])


const select = ref<HTMLDivElement | null>(null);
const itemNormal = ref<any>(null);
const yearRef = ref<HTMLInputElement | null>(null);
const monthRef = ref<HTMLInputElement | null>(null);
//===============================父组件绑定的时间值====================================

//===============================定义用户选择的日期====================================
/**
 * 当前选择的日期
 */
let selectDateValue = reactive({
    year: 0,
    month: 0,
    day: 0
})
watch(selectDateValue, () => {
    // 将当前选择的年月计算得到字符串，更新到 modelValue
    let str = `${selectDateValue.year}-${selectDateValue.month >= 10 ? selectDateValue.month : '0' + selectDateValue.month}-${selectDateValue.day >= 10 ? selectDateValue.day : '0' + selectDateValue.day}`
    emits("update:modelValue", str)
})

//===============================监听用户在输入框中的输入===============================
watch(() => props.modelValue, (newVal) => {
    // 将输入转换为年月日，分别对年月日进行限制
    let result = newVal?.split("-") as Array<string>;
    let resultNum = result.map(item => parseInt(item));
    for (let item of resultNum) {
        if (isNaN(item)) {
            return;
        }
    }
    if ((resultNum[0] >= 0 && resultNum[0] <= 9999) && (resultNum[1] >= 1 && resultNum[1] <= 12) && (resultNum[2] >= 0 && resultNum[2] <= mGetDate(resultNum[0], resultNum[1]))) {
        year.value = resultNum[0];
        month.value = resultNum[1];
        selectDate(resultNum[2]);
    } else {
        return;
    }
})
//===============================监听用户在输入框中的输入===============================


/**
 * 前一个选择的日期
 */
let previusDay = reactive({
    year: 0,
    month: 0,
    day: 0
});

type Location = {
    x: number,
    y: number
}
/**
 * 根据选中日期计算出坐标（供滑块使用）
 * @param number 选中的日期
 */
function getLocation(number: number): Location {
    // 日历格式为 6 * 7
    let x = number % 7 - 1;
    let y = Math.floor(number / 7) + 2;     // 加上 一行星期，一行上一月
    if (x < 0) {
        x = x + 7;
        y = y - 1;
    }
    return { x, y }
}
//==============================定义用户选择的日期=====================================


//==============================获取今天的日期相关属性=================================
/**
 * 今天的日期
 */
let currentDay = new Date();

/**
 * 获取当前年月以及下一年下一月
 */
let year = ref(currentDay.getFullYear());
let month = ref(currentDay.getMonth() + 1);
let nextMonth = computed(() => {
    return month.value === 12 ? 1 : month.value + 1;
})
let previusMonth = computed(() => {
    return month.value === 1 ? 12 : month.value - 1;
})
let weeks = reactive(['一', '二', '三', '四', '五', '六', '日'])

/**
 * 计算当前月份天数的函数
 * @param year 年份
 * @param month 月份
 * 
 * @returns 当前这月的总天数
 */
function mGetDate(year: number, month: number): number {
    // js中day的范围是 1~31，因此设置为0时会提前一天，也就是上一月的最后一天，即我们要的月份天数
    var d = new Date(year, month, 0);
    return d.getDate();
}
/**
 * 当前月份天数的计算属性
 */
let monthDaysNumber = computed(() => {
    return mGetDate(year.value, month.value)
})
/**
 * 判断一个日期对象是否为当天
 * @param date 
 */
function isToday(date: { year: number, month: number, day: number }): boolean {
    if (date.year === currentDay.getFullYear() && date.month === currentDay.getMonth() + 1 && date.day === day) {
        return true;
    } else {
        return false;
    }
}
//==============================获取今天的日期相关属性=================================


//==============================对选择的日期进行处理=================================
// 今天的“日”
let day = currentDay.getDate();
// 所有日期的Element集合
// onMounted(() => {
//     console.log(itemNormal.value[23])
// })
// 当前选中的日期对象默认为当天
selectDateValue.year = year.value;
selectDateValue.month = month.value;
selectDateValue.day = day;
// 前一天的日期默认为当天
previusDay = selectDateValue;

/**
 * @param number 选中的日期
 * 1. 判断前一天是否为今天
 *    if 今天:
 *       将该日期的字体处理
 *    else:
 *       将该日期的字体还原
 * 2. 获取当前选择日期的坐标
 * 3. 将前一天设置为选中的这天
 * 4. 将select按钮位移到选中的日期位置:  位置 = (gap->0.8em + width->1.5em) * x, (gap->0.8em + width->1.5em) * y;
 * 5. 延迟0.3s将选中日期的字体颜色设置为 #ffffff
 */
function selectDate(number: number): void {
    // 震动1毫秒
    if (props.shake) {
        navigator.vibrate(100);
    }
    // 前一天选中日期的el对象
    let previusDayElement = itemNormal.value[previusDay.day - 1] as HTMLDivElement;
    // 判断前一天选中的日期是否为今天，如果是则修改样式，否则还原
    if (isToday(previusDay)) {
        previusDayElement.style.color = "#2d87cc";
        previusDayElement.style.fontWeight = "bold";
        previusDayElement.style.boxShadow = "0 0 4px rgba(0,0,0,0.2)";
    } else {
        previusDayElement.style.color = "#606266";
    }
    // 当前选中日期的坐标
    let currentDayLocation = getLocation(number);
    // 当前选中日期的el对象
    let currentDayElement = itemNormal.value[number - 1] as HTMLDivElement;
    // 修改滑块的位置
    if (select.value) {
        select.value.style.transform = `translate(${2.3 * currentDayLocation.x}em, ${2.3 * currentDayLocation.y}em)`;
    }
    // 设置延时器，对当前选中的日期进行判断，是否等于今天的日期
    setTimeout(() => {
        if (isToday(selectDateValue)) {
            currentDayElement.style.fontWeight = "normal";
            currentDayElement.style.boxShadow = "none";
        }
        currentDayElement.style.color = "#ffffff";
    }, 300);
    // 更新当前选中的日期对象
    selectDateValue.year = year.value;
    selectDateValue.month = month.value;
    selectDateValue.day = number;
    // 更新前一个选中的日期对象
    previusDay = selectDateValue;
}

/**
 * 处理点击前一个月的日期的事件
 * @param number 
 */
function selectDatePrevius(number: number) {
    if (month.value === 1) {
        year.value--;
        month.value = 12;
    } else {
        month.value--;
    }
    selectDate(number)
}

/**
 * 处理点击后一个月的日期的事件
 * @param number 
 */
function selectDateNext(number: number) {
    if (month.value === 12) {
        year.value++;
        month.value = 1;
    } else {
        month.value++;
    }
    selectDate(number)
}
//==============================对选择的日期进行处理=================================


//==============================组件初次渲染完成时的操作=============================
onMounted(() => {
    /**
     * 初次渲染组件时，对今天的日期进行样式调整
     */
    let currentDay = getLocation(day);
    let currentDayElement = itemNormal.value[day - 1] as HTMLDivElement;
    if (select.value) {
        select.value.style.transform = `translate(${2.3 * currentDay.x}em, ${2.3 * currentDay.y}em)`;
        select.value.style.transition = "all 0.5s";
        currentDayElement.style.color = "#fff";
    }
})
//==============================组件初次渲染完成时的操作=============================

//==============================侦听月份变化来控制当天日期的样式变化==================
/**
 * 监听月份切换控制当天日期的样式变化
 */
watch([month, year], () => {
    let now = itemNormal.value[day - 1] as HTMLDivElement;
    if (month.value === (currentDay.getMonth() + 1) && year.value === currentDay.getFullYear()) {
        // 当年当月
        now.style.color = "#2d87cc";
        now.style.fontWeight = "bold";
        now.style.boxShadow = "0 0 4px rgba(0,0,0,0.2)";
    } else {
        // 不是当年当月
        now.style.color = "#606266";
        now.style.fontWeight = "normal";
        now.style.boxShadow = "none";
    }
    // 记得要更新当前选中时间的年月
    selectDateValue.year = year.value;
    selectDateValue.month = month.value;
    selectDate(selectDateValue.day)
})

function inputYear(el: Event) {
    let value = parseInt((<HTMLInputElement>el.target).value);
    if (isNaN(value) || value <= 0 || value >= 9999) {
        if (yearRef.value) {
            yearRef.value.style.color = "red";
        }
    } else {
        if (yearRef.value) {
            yearRef.value.style.color = "#000000";
        }
    }
}

function inputMonth(el: Event) {
    let value = parseInt((<HTMLInputElement>el.target).value);
    if (isNaN(value) || value < 1 || value > 12) {
        if (monthRef.value) {
            monthRef.value.style.color = "red";
        }
    } else {
        if (monthRef.value) {
            monthRef.value.style.color = "#000000";
        }
    }
}
//==============================侦听月份变化来控制当天日期的样式变化==================
</script>

<style scoped>
@import url("./date-selector.css");
</style>