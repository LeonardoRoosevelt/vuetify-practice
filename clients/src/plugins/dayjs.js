import Vue from 'vue'
import Dayjs from 'vue-dayjs'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

Vue.use(Dayjs, { dayjs })
