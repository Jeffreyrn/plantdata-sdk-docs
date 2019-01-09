const formUtils = {
    defaultData: {
        radio: '1',
        checkbox1: ['1', '2'],
        checkbox2: true,
        input1: ['a', 'b'],
        textarea1: ['a1', 'b1'],
        input2: 'c',
        textarea2: 'c1',
        tag: ['tag1', 'tag2'],
        switch: true,
        select: '1'
    }
};

$('#setvalue').on('click', () => {
    PdUIForm.setFormData($('#form'), formUtils.defaultData);
});
$('#getvalue').on('click', () => {
    const formData = PdUIForm.getFormData($('#form'));
console.log(formData);
});