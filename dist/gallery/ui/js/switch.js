document.getElementById('switch-dynamic').innerHTML = PdUISwitch.create({
    label: ['开', '关'],
    size: 'md',
    input: {
        atts: {
            id: '1',
            checked: ''
        }
    }
});