<template>

    <div>

        <h3>Carregue os arquivos aqui</h3>
        <FileUpload name="demo[]" url="api/upload-files" :customUpload="true" @uploader="onAdvancedUpload" :multiple="true" accept=".zip, .rar" :maxFileSize="90000000">
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
            setup() {

                const onAdvancedUpload = async (event) => {
                const files = event.files;

                console.log('opa', files)

                



                const imgUpload = await fetch("api/upload-files", {
                    method: "POST",
                    body: files,
                });

                if (imgUpload) {
                    //console.log(imgUpload);
                    
                }
                };
                return {
                    onAdvancedUpload,
                };

            }
    }

</script>