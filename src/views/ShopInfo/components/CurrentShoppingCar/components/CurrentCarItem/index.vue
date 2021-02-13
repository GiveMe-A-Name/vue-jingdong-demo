<template>
  <div class="curCar">
    <input class="" type="checkbox" name="" id="">
    <img src="" alt="" class="curCar__img">
    <div class="car__content">
      <h4 class="car__content__title">番茄250g/份</h4>
      <div class="content__price">
        <span class="content__price__new">¥33.6</span>
        <span class="content__price__old">¥33.6</span>
      </div>
    </div>
    <div class="car__count">
      <button class="count__btn__sub">-</button>
      <span class="count__content">888</span>
      <button class="count__btn__add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentCarItem'
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.curCar{
  display: flex;
  justify-content: space-between;
  &__img{
    width: .46rem;
    height: .46rem;
    background: red;
  }
  .car__content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-left: .16rem;
    &__title{
      @include textHeight(.2rem);
      font-size: .14rem;
      margin: 0;
    }
    .content__price{
      @include textHeight(.2rem);
      &__new{
        color: #E93B3B;
        font-size: .12rem;
        font-weight: 600;
      }
      &__old{
        display: inline-block;
        color: #999999;
        text-decoration: line-through;
        font-size: .12rem;
        transform-origin: center;
        transform: scale(.85, .85);
      }
    }
  }
  .car__count{
    display: flex;
    align-items: center;
    width: .93rem;
    .count__content{
      display: inline-block;
      margin: 0 .16rem;
    }
    button {
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      font-size: .1rem;
      outline: none;
    }
    .count__btn__sub{
      border: 1px solid #666666;
      color: #666666;
    }
    .count__btn__add{
      background-color: #0091FF;
      border: none;
      color: #fff;
    }
  }
}
</style>
