angular.module('bookPreview').component('bookPreview', {
    templateUrl: 'scripts/book-preview/book-preview.template.html',
    bindings: { book: '=' },
    controller: function BookPreviewController(){
        this.now = new Date();
    }
});