<template lang="pug">
  .human-card
    slot(name="image")
    .human-card_name
      slot(name="humanName")
    .human-card_discharge
      slot(name="discharge")
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins/flexbox'
@import '../../assets/stylus/base/breakpoints'
.human-card
  width 150px
  margin 0 auto
  @media screen and (min-width: md) 
    // margin-left -85px
    width 172px
  img 
    width 100%
    height 100%
    display flex
    @media screen and (min-width: md) 
      // margin-left -85px
      width 172px
      height 214px
  &_name
    font-family 'Noto Sans', sans-serif
    font-size 18px
    line-height normal
    margin 20px 0 0 0
    color #000000
    text-align center
  &_discharge
    font-family 'Noto Sans', sans-serif
    font-style italic
    font-weight normal
    font-size 16px
    line-height 22px
    text-align center
    color #868686
</style>

