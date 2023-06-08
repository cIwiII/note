<template>
    <div class="group">
        <input type="file" value="选择文件" @change="fileUpload">
        <div>
            <img :src="imgSrc" alt="" />
        </div>
    </div>

</template>

<script>
import axios from "axios"
export default {
    // file代表告诉后端。取文件用file来获取
    props: ["fileName", "action"],
    data() {
        return {
            imgSrc: ""
        }
    },
    methods: {
        async fileUpload(event) {
            console.log(event);
            const files = event.target.files;
            // 创建一个对象,浏览器默认会提供对象formData
            const formData = new FormData();
            // 文件会默认被formData进行处理，二进制传输后端 Blob
            formData.append(this.fileName, files[0]);
            // 上传文件到后端
            const res = await axios.post(this.action, formData);
            // console.log(res);
            if (res.data.code) {
                // 得到上传后图片名字
                // this.student.imagePath = res.data.data[0];
                // 告诉父组件，成功后的地址是什么
                this.$emit("onSuccess", res.data.data[0])
                this.imgSrc = res.data.data[0]
            } else {
                alert("上传失败");
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.group {
    width: 175px;
    img {
        width: 150px;
        border: 1px solid gainsboro;
    }
}
</style>