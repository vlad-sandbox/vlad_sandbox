<template>
  <div id="wrap">
    <h1>FlexBox</h1>
    <transition-group name="list"
         tag="div"
         :class="['flex-container', {'blur': showSettings}]"
         :style="containerStyleComputed">
          <div :class="['flex-element', {'changed': changedElem(index)}]"
               title="Setup"
               :id="index"
               :style="styleElement(index)"
               @click="setup($event, $event.target)"
               v-for="(block, index) in settings.blockCount.presets[0].value"
               :key="block">{{block}}</div>
    </transition-group>
    <h3>Flex-container styles:</h3>
    <p>{{containerStyleComputed}}</p>
    <div :class="['setting', {'show': showSettings}]">
        <h2 @click="showSettings = !showSettings">Settings</h2>
        <div v-for="setting in settings" :key="setting.label" class="setting_group">
          <h3>{{setting.label}}</h3>
          <label v-for="set in setting.presets" :key="set.label">{{set.label}}
            <select v-model="set.value">
              <option v-for="option in set.options"
                      :key="option.text"
                      :value="option.value">{{option.text}}</option>
            </select>
          </label>
        </div>
    </div>
    <div :class="['contextSetting']" v-show="showSetup" ref="setup">
      <label v-for="set in flexElementSetting" :key="set.label">{{set.label}}
        <select v-model="set.value">
          <option v-for="option in set.options"
                  :key="option.text"
                  :value="option.value">{{option.text}}</option>
        </select>
      </label>
      <div class="btns">
        <button @click.prevent="saveSetup()">Применить</button>
        <button @click.prevent="closeSetup()">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
const settingsPreset = {
  blockCount: {
    label: 'Количество блоков',
    presets: [
      {
        multiple: false,
        label: '',
        options: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
          { text: '4', value: 4 },
          { text: '5', value: 5 },
          { text: '6', value: 6 },
          { text: '7', value: 7 },
          { text: '8', value: 8 },
          { text: '9', value: 9 },
          { text: '10', value: 10 },
          { text: '12', value: 12 },
          { text: '14', value: 14 },
          { text: '16', value: 16 },
          { text: '18', value: 18 },
          { text: '20', value: 20 }
        ],
        value: 8
      }
    ]
  },
  containerSettings: {
    label: 'Настройки flex-containera',
    presets: [
      {
        label: 'Высота блока: ',
        options: [
          { text: 'auto', value: { 'height': 'auto' } },
          { text: '200', value: { 'height': '200px' } },
          { text: '400', value: { 'height': '400px' } },
          { text: '600', value: { 'height': '600px' } },
          { text: '800', value: { 'height': '800px' } }
        ],
        value: { 'height': 'auto' }
      },
      {
        label: 'Display: ',
        options: [
          { text: 'block', value: { 'display': 'block' } },
          { text: 'flex', value: { 'display': 'flex' } },
          { text: 'inline-flex', value: { 'display': 'inline-flex' } }
        ],
        value: { display: 'flex' }
      },
      {
        label: 'Flex-direction: ',
        options: [
          { text: 'default', value: {} },
          { text: 'row', value: { 'flex-direction': 'row' } },
          { text: 'row-reverse', value: { 'flex-direction': 'row-reverse' } },
          { text: 'column', value: { 'flex-direction': 'column' } },
          { text: 'column-reverse', value: { 'flex-direction': 'column-reverse' } }
        ],
        value: {}
      },
      {
        label: 'Flex-wrap: ',
        options: [
          { text: 'default', value: {} },
          { text: 'nowrap', value: { 'flex-wrap': 'nowrap' } },
          { text: 'wrap', value: { 'flex-wrap': 'wrap' } },
          { text: 'wrap-reverse', value: { 'flex-wrap': 'wrap-reverse' } }
        ],
        value: {}
      },
      {
        label: 'Justify-content: ',
        options: [
          { text: 'default', value: {} },
          { text: 'flex-start', value: { 'justify-content': 'flex-start' } },
          { text: 'flex-end', value: { 'justify-content': 'flex-end' } },
          { text: 'center', value: { 'justify-content': 'center' } },
          { text: 'space-between', value: { 'justify-content': 'space-between' } },
          { text: 'space-around', value: { 'justify-content': 'space-around' } }
        ],
        value: {}
      },
      {
        label: 'Align-items: ',
        options: [
          { text: 'default', value: {} },
          { text: 'flex-start', value: { 'align-items': 'flex-start' } },
          { text: 'flex-end', value: { 'align-items': 'flex-end' } },
          { text: 'center', value: { 'align-items': 'center' } },
          { text: 'baseline', value: { 'align-items': 'baseline' } },
          { text: 'stretch', value: { 'align-items': 'stretch' } }
        ],
        value: {}
      },
      {
        label: 'Align-content: ',
        options: [
          { text: 'default', value: {} },
          { text: 'flex-start', value: { 'align-content': 'flex-start' } },
          { text: 'flex-end', value: { 'align-content': 'flex-end' } },
          { text: 'space-between', value: { 'align-content': 'space-between' } },
          { text: 'space-around', value: { 'align-content': 'space-around' } },
          { text: 'stretch', value: { 'align-content': 'stretch' } }
        ],
        value: {}
      }
    ]
  }
}
const flexElementSettings = [
  {
    label: 'Order: ',
    options: [
      { text: 'default', value: {} },
      { text: '-3', value: { 'order': -3 } },
      { text: '-2', value: { 'order': -2 } },
      { text: '-1', value: { 'order': -1 } },
      { text: '0', value: { 'order': 0 } },
      { text: '1', value: { 'order': 1 } },
      { text: '2', value: { 'order': 2 } },
      { text: '3', value: { 'order': 3 } },
      { text: '4', value: { 'order': 4 } },
      { text: '5', value: { 'order': 5 } },
      { text: '6', value: { 'order': 6 } },
      { text: '7', value: { 'order': 7 } },
      { text: '8', value: { 'order': 8 } },
      { text: '9', value: { 'order': 9 } }
    ],
    value: {}
  },
  {
    label: 'Flex-grow: ',
    options: [
      { text: 'default', value: {} },
      { text: '1', value: { 'flex-grow': 1 } },
      { text: '2', value: { 'flex-grow': 2 } },
      { text: '3', value: { 'flex-grow': 3 } },
      { text: '4', value: { 'flex-grow': 4 } },
      { text: '5', value: { 'flex-grow': 5 } }
    ],
    value: {}
  },
  {
    label: 'Flex-shrink: ',
    options: [
      { text: 'default', value: {} },
      { text: '1', value: { 'flex-shrink': 1 } },
      { text: '2', value: { 'flex-shrink': 2 } },
      { text: '3', value: { 'flex-shrink': 3 } },
      { text: '4', value: { 'flex-shrink': 4 } },
      { text: '5', value: { 'flex-shrink': 5 } }
    ],
    value: {}
  },
  {
    label: 'Flex-basis: ',
    options: [
      { text: 'default', value: {} },
      { text: 'auto', value: { 'flex-basis': 'auto' } },
      { text: '100', value: { 'flex-basis': '100px' } },
      { text: '200', value: { 'flex-basis': '200px' } },
      { text: '300', value: { 'flex-basis': '300px' } },
      { text: '400', value: { 'flex-basis': '400px' } },
      { text: '500', value: { 'flex-basis': '500px' } }
    ],
    value: {}
  },
  {
    label: 'Flex: ',
    options: [
      { text: 'default', value: {} },
      { text: '0 1 auto', value: { 'flex': '0 1 auto' } },
      { text: '1 1 auto', value: { 'flex': '1 1 auto' } },
      { text: '1 0 auto', value: { 'flex': '1 0 auto' } },
      { text: '1 200px', value: { 'flex': '1 200px' } },
      { text: '0 200px', value: { 'flex': '1 200px' } },
      { text: '1 0 200px', value: { 'flex': '1 0 200px' } }
    ],
    value: {}
  },
  {
    label: 'Align-self: ',
    options: [
      { text: 'default', value: {} },
      { text: 'flex-start', value: { 'align-self': 'flex-start' } },
      { text: 'flex-end', value: { 'align-self': 'flex-end' } },
      { text: 'center', value: { 'align-self': 'center' } },
      { text: 'baseline', value: { 'align-self': 'baseline' } },
      { text: 'stretch', value: { 'align-self': 'stretch' } }
    ],
    value: {}
  },
  {
    label: 'Margin: ',
    options: [
      { text: 'default', value: {} },
      { text: 'auto', value: { 'margin': 'auto' } }
    ],
    value: {}
  }
]
export default {
  name: 'flexbox',
  data () {
    return {
      showSettings: false,
      showSetup: false,
      settings: settingsPreset,
      flexElementSetting: flexElementSettings,
      savedConfigs: [],
      activeElem: ''
    }
  },
  watch: {
    activeElem (to, fr) {
      if (to.id && this.savedConfigs[to.id] !== undefined) {
        this.getSetup(to.id)
      } else {
        this.resetSetup()
      }
    }
  },
  methods: {
    setup (e, t) {
      this.clearActive(t)
      let cont = this.$refs.setup
      this.showSetup = true
      cont.style.top = e.y + 'px'
      cont.style.left = e.x + 'px'
    },
    clearActive (elem) {
      Array.from(document.getElementsByClassName('flex-element')).forEach(el => {
        if (elem && elem.id === el.id) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
      this.activeElem = elem
    },
    saveSetup () {
      this.showSetup = false
      this.setSetup(this.activeElem.id)
      this.clearActive('')
    },
    closeSetup () {
      this.showSetup = false
      this.clearActive('')
    },
    resetSetup () {
      this.flexElementSetting.forEach(fes => {
        fes.value = fes.options.filter(opt => opt.text === 'default')[0].value
      })
    },
    setSetup (id) {
      this.savedConfigs[id] = []
      this.flexElementSetting.forEach(el => {
        this.savedConfigs[id].push(el.value)
      })
    },
    getSetup (id) {
      let arr = this.savedConfigs[id]
      arr.forEach((el, i) => {
        this.flexElementSetting[i].value = el
      })
    },
    styleElement (index) {
      return this.savedConfigs[index] || ''
    },
    changedElem (index) {
      let res = false
      if (this.savedConfigs[index]) {
        this.savedConfigs[index].forEach(setting => {
          if (Object.keys(setting).length > 0) {
            res = true
          }
        })
      }
      return res
    }
  },
  computed: {
    containerStyleComputed () {
      let res = []
      this.settings.containerSettings.presets.forEach(el => Object.keys(el.value).length > 0 ? res.push(el.value) : {})
      return res
    }
  }
}
</script>
<style scoped>
  div {
    border-radius: 10px;
  }

  .setting {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #42b983;
    height: 30px;
    width: 100px;
    overflow: hidden;
    cursor: pointer;
  }

  .contextSetting {
    position: absolute;
    display: inline-flex;
    flex-direction: column;
    background-color: #42b983;
    transition: all .2s;
    border: 1px solid white;
    box-shadow: 2px 3px 6px #7f92a5;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }

  .btns button {
    border: none;
    outline: none;
    font-size: 20px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
    color: #2c3e50;
    font-weight: bold;
    transition: all .3s;
    box-shadow: 2px 3px 6px #7f92a5;
  }

  .btns button:hover {
    color: #42b983;
  }

  .setting.show {
    height: auto;
    width: auto;
  }

  .setting h2 {
    color: white;
    line-height: 1;
    margin: 5px;
  }

  .setting label, .contextSetting label {
    color: white;
    font-size: 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .setting label select, .contextSetting label select{
    border: none;
    border-radius: 5px;
    background-color: white;
    color: grey;
    outline: none;
    height: 25px;
    font-size: 20px;
    padding: 0 10px;
    flex-grow: 1;
    margin-left: 10px;
  }

  .setting_group {
    display: flex;
    flex-direction: column;
  }

  #wrap {
    margin: 0 15%;
  }

  .flex-container {
    background-color: white;
    display: flex;
  }
  .blur {
    filter: blur(5px);
  }

  .flex-element {
    background-color: #f44336;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin: 5px;
    min-width: 60px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
  }

  .flex-element.changed {
    background-color: #03a9f4;
  }

  .flex-element:hover, .flex-element.active {
    background-color: #42b983;
  }

  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: scale(0);
  }
</style>
