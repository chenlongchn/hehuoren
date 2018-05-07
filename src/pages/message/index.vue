<template>
    <div class="container">
        <user-header></user-header>
        <div>
            <div class="tab">
                <div>全部消息</div>
                <div>会员互动</div>
                <div>系统消息</div>
            </div>
            <div class="options">

            </div>
            <div class="lists">
                <div v-for="(item, index) in messages" :key="index">
                    <div>
                        <div>{{item.title}}</div>
                        <p>{{item.time}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userHeader from '@/components/userHeader'

export default {
    data: function () {
        return {
            messages: [
                {
                    title: '您的项目有新的【关注】消息',
                    message: '你被关注了',
                    read: false,
                    time: '2018年5月3日23：06',
                    type: 'user'
                },{
                    title: '您有新的项目资料【审核】消息',
                    message: '你的审核通过了',
                    read: false,
                    time: '2018年4月12日14:23',
                    type: 'system'
                },{
                    title: '你的项目有新的【关注】消息',
                    message: '你被关注了',
                    read: true,
                    time: '2018年3月30日12:00',
                    type: 'user'
                }
            ]
        }
    },
    components: {
        userHeader
    }
}
</script>

<style scoped>

</style>


