

function gentPage1(current) {
    const settings = {
        cls: '',
        selector: '#page-1',
        totalItem: 165,
        totalItemShow: true,
        pageSize: 10,
        showNum: 0,
        current: current,
        prevNext: true,
        startEnd: false,
        jump: true,
        callback: (event, pageNo, data) => {
        gentPage1(pageNo);
    }
};
    const page = new PdUIPagination(settings);
}

function gentPage2(current) {
    const settings = {
        data: {
            id: 2
        },
        selector: '#page-2',
        total: 17,
        showNum: 0,
        current: current,
        prevNextMulti: true,
        callback: (event , pageNo , data ) => {
        gentPage2(pageNo);
        console.log(data.id);
    }
};
    const page = new PdUIPagination(settings);
}

function gentPage3(current ) {
    const settings = {
        selector: '#page-3',
        total: 17,
        showNum: 8,
        current: current,
        prevNextEnable: true,
        prevNextMultiEnable: true,
        startEnd: false,
        callback: (event , pageNo , data ) => {
        gentPage3(pageNo);
    }
};
    const page = new PdUIPagination(settings);
}

gentPage1(1);
gentPage2(1);
gentPage3(15);
