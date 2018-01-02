<template>
    <textarea ></textarea>
</template>

<script>

import CodeMirror from '../../utils/codemirror'

export default {
    name: 'Editor',
    props : ['value', 'file'],
    data : function () {
        return {
            src : this.file, 
            code: this.value,
            editorOpts: {
                mode: 'htmlmixed'
            },
        }
    },
    methods : {
        focus : function () {
            this.editor.focus();
        },
        setValue : function (val) {
            if (val) {
                this.editor.setValue(val);
            }

        },
        setMode : function (mode) {
            if (mode) {
                this.editor.setOption('mode', mode);
            }
        }

    },
    mounted : function () {

        let arr = this.src.split('/').pop().split('.') ;
        let mode = 'htmlmixed';
        if (arr.length > 1) {
            mode = arr.pop();
            
            switch(mode) {
            case 'js':
            case 'json': 
                mode = 'javascript';
                break; 
            }
        }

        console.log(this.src, mode);

        // Set up the main content editor.
        this.editor = CodeMirror.fromTextArea(this.$el, {
            lineNumbers: (this.editorOpts.mode !== 'markdown'),
            viewportMargin: 500,
            theme: (this.editorOpts.mode === 'markdown') ? 'markdown' : 'ttcn',
            lineWrapping: (this.editorOpts.mode === 'markdown')
        });

        this.editor.on('change', () => {
            this.$emit('change', this.file, this.editor.getValue());
        })

        this.setMode(mode);
        this.setValue(this.code);
        this.focus();

        CodeMirror.autoLoadMode(this.editor, this.editorOpts.mode)
    }
}
</script>

<style lang="less">
.CodeMirror {
  width: 100%;
  height: 100%;
}
</style>
