<template>

    <div>

        <h3>Carregue os arquivos aqui</h3>
        <FileUpload name="demo[]"  route="/upload-file" @upload="onUpload" :multiple="true" accept=".zip, .rar" :maxFileSize="90000000">
            <template #empty>
                <p>Arraste e solte os arquivos aqui para fazer upload.</p>
            </template>
        </FileUpload>
       
    </div>

</template>

<script>

import FileUpload from 'primevue/fileupload';

    export default {
        components: {
            FileUpload
        },
        methods: {
            onUpload() {
                this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
            }
        }
    }

</script>