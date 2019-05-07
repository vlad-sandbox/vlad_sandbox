<template>
  <div id="wrap">
    <h1>FlexBox</h1>
    <transition-group name="list"
         tag="div"
         :class="['flex-container', {'blur': showSettings}]"
         :style="containerStyleComputed">
          <div class="flex-element"
               v-for="block in settings.blockCount.presets[0].value"
               :key="block">{{block}}</div>
    </transition-group>
    <h3>Стили:</h3>
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
export default {
  name: 'flexbox',
  data () {
    return {
      showSettings: false,
      settings: settingsPreset
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

  .setting.show {
    height: auto;
    width: auto;
  }

  .setting h2 {
    color: white;
    line-height: 1;
    margin: 5px;
  }

  .setting label {
    color: white;
    font-size: 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .setting label select {
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
    cursor: default;
    margin: 5px;
    min-width: 60px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: scale(0);
  }
</style>
