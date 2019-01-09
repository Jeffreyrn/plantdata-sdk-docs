let settings1 = {
    selector: '#autocomplete1',
    theme: 'normal',
    size: 'md',
    icon: {
        enter: {
            enable: false
        }
    },
    onPrompt: function (pre, $self) {
        let d = [
            {
                id: 1,
                name: 'test'
            },
            {
                id: 2,
                name: 'test2'
            },
            {
                id: 3,
                name: 'test3'
            },
            {
                id: 4,
                name: 'test4'
            },
            {
                id: 5,
                name: 'test5'
            },
            {
                id: 6,
                name: 'test6'
            },
            {
                id: 7,
                name: 'test7'
            },
            {
                id: 8,
                name: 'test8'
            },
            {
                id: 9,
                name: 'test9'
            },
            {
                id: 2,
                name: 'test2'
            },
            {
                id: 3,
                name: 'test3'
            },
            {
                id: 4,
                name: 'test4'
            },
            {
                id: 5,
                name: 'test5'
            },
            {
                id: 6,
                name: 'test6'
            },
            {
                id: 7,
                name: 'test7'
            },
            {
                id: 8,
                name: 'test8'
            },
            {
                id: 9,
                name: 'test9'
            }];
        return Promise.resolve(d);
    },
    onSearch: function (data) {
        alert(JSON.stringify(data));
    }
};
let autocomplete1 = new PdUIAutocomplete(settings1);

let settings2 = {
    selector: '#autocomplete2',
    theme: 'default',
    promptEnable: false,
    onSearch: function (data) {
        alert(JSON.stringify(data));
    }
};
let autocomplete2 = new PdUIAutocomplete(settings2);