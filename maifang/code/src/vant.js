// 按需全局引入 vant组件，对应组件的css也会按需引入，不过没看懂原理在哪里实现，先不管了
import Vue from 'vue'

import {
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  Popup,
  Picker,
  DatetimePicker,
  Field,
  Checkbox,
  CheckboxGroup,
  Calendar,
  Area,
  NavBar,
  Overlay,
  Dialog,
  ActionSheet,
  Uploader,
  Switch,
  RadioGroup,
  Radio,
  Tab,
  Tabs,
  Tag,
  Divider
} from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(DatetimePicker)
Vue.use(Field)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Calendar)
Vue.use(Area)
Vue.use(NavBar)
Vue.use(Overlay)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Uploader)
Vue.use(Switch)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Divider)
