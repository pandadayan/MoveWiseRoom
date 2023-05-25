<template>
  <div class="indexall">
    <!-- <van-button
      type="success"
      @click="clickFn"
    >
      主页
    </van-button> -->
    <div class="onediv">
      <p class="onetitle">预约系统</p>
      <div class="oneimg">
        <div @click="() => { $router.push('/apply') }">
          <img src="../../assets/images/space.png" alt="" style="width:0.59rem">
          <p>预约申请</p>
        </div>
        <div @click="() => { $router.push('/initiate') }">
          <img src="../../assets/images/Initiate.png" alt="" style="width:0.59rem">
          <p>我发起的</p>
        </div>
        <div @click="() => { $router.push('/join') }">
          <img src="../../assets/images/participate.png" alt="" style="width:0.59rem">
          <p>我参与的</p>
        </div>
        <div @click="() => { $router.push('/approval') }">
          <img src="../../assets/images/Approve.png" alt="" style="width:0.59rem">
          <p>待我审批</p>
        </div>
        <div @click="() => { $router.push('/space') }">
          <img src="../../assets/images/spacePlan.png" alt="" style="width:0.59rem">
          <p>空间安排</p>
        </div>
      </div>
    </div>
        <div class="onediv">
      <p class="onetitle">报修系统</p>
      <div class="oneimg">
        <div @click="() => { $router.push('/equipment') }">
          <img src="../../assets/images/equipment.png" alt="" style="width:0.59rem">
          <p>设备报修</p>
        </div>
        <div @click="() => { $router.push('/record') }">
          <img src="../../assets/images/Repair.png" alt="" style="width:0.59rem">
          <p>报修记录</p>
        </div>
        <div @click="() => { $router.push('/handling') }">
          <img src="../../assets/images/dealWith.png" alt="" style="width:0.59rem">
          <p>报修处理</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="Home">
import request from '@/utils/request'
import storage from '@/utils/storage'

const clickFn = () => {
  const data = ref({ id: '123' })
  request.get('/sl-wise-auth/public/silu/api/v1/auth/getVerificationCode', data.value).then((res) => {
    console.log('res:', res)
    storage.setItem('userInfo', { age: 30, name: 'zhangsan' })
  })
}


// const arr = ref('')

</script>

<style lang="scss">
.indexall{
    padding:0.2rem 0.23rem;
    position:fixed;
    right:0;
    left:0;
    top:1.2rem;
    bottom:1rem;
    overflow: auto;

    .onediv{
        min-height:2.3rem;
        box-shadow:0px 5px 18px 0px rgba(0,0,0,0.07);
        background: #ffffff;
        border-radius: 0.02rem;
        margin-top:0.23rem;
        padding:0 0.1rem;
        .onetitle{
            color: #303030;
            font-weight: 600;
            line-height: 0.7rem;
            padding:0 0.2rem;
            border-bottom:1px dashed rgb(228, 227, 227);
            margin-bottom: 0.2rem;
        }
        .oneimg{
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
            div{
                width:25%;
                height:1.2rem;
                text-align: center;
                position: relative;
                margin-bottom: 0.28rem;
            }
            p{
               position:absolute;
               bottom: 0.1rem;
               left:0;
               right:0;
               color: #636363;
               font-size: 0.22rem;
            }
        }
    }
}
</style>
