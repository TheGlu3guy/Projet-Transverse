<template>
    <div id="body">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="fields">
                <label>Upload File</label><br>
                <input type="file" ref="file" @change="onSelect">
            </div>
            <div class=fields>
                <button>Submit</button>
            </div>
            <div class="message">
                <h5>{{message}}</h5>
            </div>
        </form>
        <div id="img">
            
        </div>

        <img :src="imageData" alt="">
    </div>
</template>
<script>
    module.exports = {
        data () {
            return {
                file: "",
                message: "",
                imageData: ""
            }
        },
        async created(){
            const div = document.getElementById("img")
            const img = new Image()

            const res = await axios.get('/api/upload')
            
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(res.data)
            img.attr("src", src)
            div.appendChild(img)
        },
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0]
                this.file = file
            },
            async onSubmit(){
                var reader = new FileReader();
                reader.onload = async function(e) {
                    try{
                        var parts = [
                            new Blob([reader.result], {type: 'text/plain'}),
                            new Uint16Array([33])
                        ];

                        var f = new File(parts, 'sample.txt', {
                            lastModified: new Date(0), // optional - default = now
                            type: "overide/mimetype" // optional - default = ''
                        });
                        
                        const formData = new FormData()
                        formData.append('file',f)

                        await axios.post('/api/upload', formData)
                        
                        this.message = "Uploaded !!"
                    }catch(err){
                        this.message = "Something went wrong"
                    }
                }
                reader.readAsDataURL(this.file);
            }
        }
    }
</script>