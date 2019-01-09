let $modal = $('.pdui-modal');
$('#modal-base').on('click', () => {
    PdUIModal.open($modal, {});
});


$('[data-modal]').on('click', (event) => {
    const effect = parseInt($(event.currentTarget).attr('data-modal') || '1', 10);
const $modal0 = $('.pdui-modal[data-pdui-modal-effect="' + effect + '"]');
let start = new Date().getTime();
PdUIModal.open($modal0, {
    event: event
});
}).each((i, v) => {
    $('body').prepend($modal.clone().attr('data-pdui-modal-effect', $(v).attr('data-modal')));
});
