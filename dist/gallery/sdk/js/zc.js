var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    setTimeout

var craf = window.cancelAnimationFrame
    || window.cancelRequestAnimationFrame
    || window.webkitCancelAnimationFrame
    || window.webkitCancelRequestAnimationFrame
    || window.mozCancelRequestAnimationFrame
    || window.oCancelRequestAnimationFrame
    || window.msCancelRequestAnimationFrame
    || clearTimeout

var tsMap = {}
var centerId = 164

function computeDistance (from, to, links) {
    let result = 0
    let exMap = {}
    if (from !== to) {
        exMap[from] = true
        let nodeList = [from]
        let newList = []
        while (nodeList.length) {
            let cur = nodeList.shift()
            for (let n of links) {
                if (n.from === cur && !exMap[n.to]) {
                    newList.push(n.to)
                } else if (n.to === cur && !exMap[n.from]) {
                    newList.push(n.from)
                }
            }
            if (_.indexOf(newList, to) >= 0) {
                result++
                break
            }
            if (nodeList.length === 0) {
                result++
                nodeList = _.clone(newList)
            }
        }
    }
    return result
}

function customShapeUpdate (context, radius) {
    // console.log(context, radius)
    return {
        bounds: [-radius, -radius, radius, radius],
        HWidth: radius,
        HHeight: radius
    }
}

function getStyleFunction (level) {
    return {
        customShape: {
            onUpdate: customShapeUpdate,
            paint: function (ctx, centerX, centerY, hw, hh, image, p) {
                // console.log(this.data.name, context, centerX, centerY, hw, hh, image, p)
                let node = this
                var zoom = node.shape.zoom
                var currentAngle = 0
                update()

                function update (ts) {
                    if (hw === node.radius * node.shape.zoom || !node.data.id) {
                        let split = 2
                        let radiusArc = _.round(split * zoom)
                        currentAngle = (node.currentAngle || 0)
                        level = node.data.id ? node.data.level : level
                        switch (level) {
                            case 0:
                                if (node.hovered) {
                                    drawCircle('#f8f8f8', hw + 8 * radiusArc, ctx, centerX, centerY)
                                }
                                drawCircle('#ff446320', hw + 8 * radiusArc, ctx, centerX, centerY)
                                drawWheel(5, '#ff4463', radiusArc, hw + 5.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                                drawCircle('#ff4463', hw + 5 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#ff4463', hw + 2 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#ff4463', hw, ctx, centerX, centerY)
                                break
                            case 1:
                                if (node.hovered) {
                                    drawCircle('#f8f8f8', hw + 6 * radiusArc, ctx, centerX, centerY)
                                }
                                drawWheel(5, '#4b87e5', radiusArc, hw + 5.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                                drawCircle('#4b87e5', hw + 5 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#487eda', hw + 2 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                                break
                            case 2:
                                if (node.hovered) {
                                    drawCircle('#f8f8f8', hw + 5 * radiusArc, ctx, centerX, centerY)
                                }
                                drawWheel(5, '#4b87e5', radiusArc, hw + 4.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                                drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#487eda', hw + 2 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                                break
                            default:
                                if (node.hovered) {
                                    drawCircle('#f8f8f8', hw + 3 * radiusArc, ctx, centerX, centerY)
                                }
                                drawWheel(5, '#4b87e5', radiusArc, hw + 2.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                                drawCircle('#fff', hw + 2 * radiusArc, ctx, centerX, centerY)
                                drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                                break
                        }
                        if (node.data.id) {
                            drawText(node.data.name, zoom, '#fff', ctx, centerX, centerY, hw)
                        }
                    }
                    if (node.hovered) {
                        currentAngle += 0.02
                        if (tsMap[ts]) {
                            craf(tsMap[ts])
                            currentAngle -= 0.02
                        }
                        node.currentAngle = currentAngle
                        tsMap[ts] = raf(update)
                    }
                }

                function drawCircle (color, radius, ctx, centerX, centerY) {
                    ctx.beginPath()
                    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
                    ctx.strokeStyle = 'transparent'
                    ctx.fillStyle = color
                    ctx.stroke()
                    ctx.fill()
                }

                function drawWheel (num2, color, lineWidth, radius, offset, ctx, centerX, centerY) {
                    for (var j = 0; j < num2; ++j) {
                        var startAngle = j * (2 / num2) * Math.PI + offset
                        var endAngle = (j * (2 / num2) + 2 / num2 * 3 / 4) * Math.PI + offset
                        draw(ctx, color, centerX, centerY, radius, startAngle, endAngle, lineWidth)
                    }


                    function draw (ctx, color, centerX, centerY, radius, startAngle, endAngle, lineWidth) {
                        ctx.beginPath()
                        ctx.strokeStyle = color
                        ctx.lineWidth = lineWidth
                        ctx.arc(centerX, centerY, radius, startAngle, endAngle, 0)
                        ctx.stroke()
                    }
                }

                function drawText (txt, zoom, color, ctx, centerX, centerY, hw) {
                    let fontSize = 12 * zoom
                    if (fontSize > 6) {
                        let font = fontSize + 'px 微软雅黑'
                        var result = breakLinesForCanvas(ctx, txt, hw * 2, font)
                        var lineHeight = fontSize * 1.25
                        ctx.font = font
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'middle'
                        ctx.fillStyle = color
                        result.forEach(function (line, index) {
                            ctx.fillText(line, centerX, lineHeight * (index - (result.length - 1) / 2) + centerY)
                        })
                    }

                    function findBreakPoint (text, width, context) {
                        var min = 0
                        var max = text.length - 1
                        while (min <= max) {
                            var middle = Math.floor((min + max) / 2)
                            var middleWidth = context.measureText(text.substr(0, middle)).width
                            var oneCharWiderThanMiddleWidth = context.measureText(text.substr(0, middle + 1)).width
                            if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
                                return middle
                            }
                            if (middleWidth < width) {
                                min = middle + 1
                            } else {
                                max = middle - 1
                            }
                        }
                        return -1
                    }

                    function breakLinesForCanvas (context, text, width, font) {
                        var result = []
                        var breakPoint = 0
                        if (font) {
                            context.font = font
                        }
                        while ((breakPoint = findBreakPoint(text, width, context)) !== -1) {
                            result.push(text.substr(0, breakPoint))
                            text = text.substr(breakPoint)
                        }
                        if (text) {
                            result.push(text)
                        }
                        return result
                    }

                }
            }
            // paintSelection: function(context, x,y ,hw, hh) {
            // console.log('paintSelection', this.data.name, context, x,y, hw, hh)
            // }
        }
    }
}

var settings = {
    kgName: 'XinhuaNews_test001',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'http://221.122.57.124:8880/plantdata-sdk/api/sdk/',
        headers: {
            APK: '2c4587af764b4b87a629b24ab915cd7d'
        }
    },
    loaderSettings: {
        ajaxSettings: {
            dataFilter: (dataStr) => {
                let result = JSON.parse(dataStr)
                let data = result.data
                for (let item of data.entityList) {
                    let level = computeDistance(item.id, centerId, data.relationList)
                    item.level = level > 3 ? 3 : level
                    item.className = 'node-class-' + item.level
                }
                return JSON.stringify(result)
            }
        }
    },
    filter: {
        settings: {
            filters: [
                {
                    key: 'distance',
                    selected: 3
                }
            ]
        }
    },
    nodeLegend: {
        enable: false
    },
    netChartSettings: {
        main: {
            nodeSettings: {
                imgBuilder: (url) => {
                    return 'http://opvdgx0ov.bkt.clouddn.com/' + url
                }
            },
            settings: {
                legend: {
                    enabled: true
                },
                style: {
                    nodeStyleFunction: null,
                    node: {
                        display: 'customShape',
                        customShape: {
                            onUpdate: customShapeUpdate
                        }
                    },
                    nodeClasses: [
                        {className: 'node-class-0', nameLegend: '焦点', style: getStyleFunction(0)},
                        {className: 'node-class-1', nameLegend: '一层', style: getStyleFunction(1)},
                        {className: 'node-class-2', nameLegend: '二层', style: getStyleFunction(2)},
                        {className: 'node-class-3', nameLegend: '三层', style: getStyleFunction(3)}
                    ]
                }
            }
        }
    }
}
var ins = new PdSDKZcGraph(settings)
ins.load({id: centerId})
