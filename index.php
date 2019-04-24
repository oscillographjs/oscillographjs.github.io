<!DOCTYPE html>
<html>
    <head>
        <title>Oscilloscope</title>
        <style>
            .canvas {
                margin: 0 auto;
                display: block;
                border: 1px solid grey;
            }
        </style>
    </head>
    <body>
        <canvas
            id="OscilloscopeCanvas"
            class="canvas"
            width="1600"
            height="900"
            ></canvas>
        <script>
            const ctx = OscilloscopeCanvas.getContext("2d");
            OscilloscopeCanvas.width = window.innerWidth * 0.95;
            OscilloscopeCanvas.height = window.innerHeight * 0.95;
            ctx.width = OscilloscopeCanvas.width;
            ctx.height = OscilloscopeCanvas.height;
            const LineLength = ctx.height / 12;
            const wipe = function () {
                ctx.fillStyle = "rgb(0, 0, 0)";
                ctx.fillRect(0,0, ctx.width, ctx.height);
            };
            ctx.x = ctx.width / 2;
            ctx.y = ctx.height / 2;
            const drawLine = (x1, y1, x2, y2) => {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.strokeStyle = 'rgb(0, 255, 0)';
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
            }
            const drawPoint = (x, y) => {
                drawLine(x, y, x + 1, y + 1);
            }
            const getTrigonometricFunction = function (name) {
                let table = {
                    'defaultX': 'cos',
                    'defaultY': 'sin',
                    'cos': 'sin',
                    'sin': 'tan',
                    'tan': 'cos',
                };
                return table[name];
            }
            const getDefaultMathParams = function () {
                return {
                    xPi: 2,
                    yPi: 2,
                    xFunc: getTrigonometricFunction('defaultX'),
                    yFunc: getTrigonometricFunction('defaultY'),
                    Phase: 1,
                }
            }
            const getDefaultRenderingParams = function () {
                return {
                    Frequency: 500,
                    ClearCanvas: true,
                    LineLength: LineLength * 2.5,
                    FramesToSkip: 0,
                    xCenter: ctx.x,
                    yCenter: ctx.y,
                };
            }
            const Params = {
                Math: getDefaultMathParams(),
                Rendering: getDefaultRenderingParams(),
            };
            const drawRandomPoint = () => {
                var ss = Math.random();
                drawPoint(
                    Math.floor(
                        Params.Rendering.xCenter + Params.Rendering.LineLength * (
                            Math[Params.Math.xFunc](ss * Math.PI * Params.Math.xPi)
                        )
                    ),
                    Math.floor(
                        Params.Rendering.yCenter + Params.Rendering.LineLength * (
                            Math[Params.Math.yFunc](ss * Math.PI * Params.Math.yPi * Params.Math.Phase)
                        )
                    )
                );
            }
            const runFrame = () => {
                drawRandomPoint();
            }
            const startRandomFilling = function () {
                if (startRandomFilling.skippedFrames >= Params.Rendering.FramesToSkip) {
                    if (Params.Rendering.ClearCanvas === true) {
                        wipe();
                    }
                    for (let i = 0; i < Params.Rendering.Frequency; i++) {
                      runFrame();
                    }
                    startRandomFilling.skippedFrames = 0;
                } else {
                    startRandomFilling.skippedFrames += 1;
                }
                requestAnimationFrame(startRandomFilling);
            }
            startRandomFilling.skippedFrames = 0;
            startRandomFilling();


            const KeyBindings = {
                KeyQ: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.Phase -= delta;
                },
                KeyE: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.Phase += delta;
                },
                KeyW: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.yPi += delta;
                },
                KeyS: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.yPi -= delta;
                },
                KeyA: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.xPi -= delta;
                },
                KeyD: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math.xPi += delta;
                },
                KeyR: (event) => {
                    let delta = 0.1;
                    if (event.shiftKey) {
                        delta = 0.01;
                    }
                    Params.Math = getDefaultMathParams();
                },
                KeyC: (event) => {
                    Params.Rendering.ClearCanvas = !Params.Rendering.ClearCanvas;
                },
                KeyF: (event) => {
                    var delta = 100;
                    if (event.shiftKey) {
                        delta = 750;
                    }
                    if (Params.Rendering.Frequency <= 25000) {
                        Params.Rendering.Frequency += delta;
                    }
                },
                KeyV: (event) => {
                    var delta = 100;
                    if (event.shiftKey) {
                        delta = 750;
                    }
                    if (Params.Rendering.Frequency - delta >= 0) {
                        Params.Rendering.Frequency -= delta;
                    }
                },
                KeyG: (event) => {
                    var delta = 25;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    if (Params.Rendering.LineLength + delta <= 400) {
                        Params.Rendering.LineLength += delta;
                    }
                },
                KeyB: (event) => {
                    var delta = 25;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    if (Params.Rendering.LineLength - delta >= 10) {
                        Params.Rendering.LineLength -= delta;
                    }
                },
                KeyI: (event) => {
                    var delta = 10;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    Params.Rendering.yCenter -= delta;
                },
                KeyJ: (event) => {
                    var delta = 10;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    Params.Rendering.xCenter -= delta;
                },
                KeyK: (event) => {
                    var delta = 10;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    Params.Rendering.yCenter += delta;
                },
                KeyL: (event) => {
                    var delta = 10;
                    if (event.shiftKey) {
                        delta = 50;
                    }
                    Params.Rendering.xCenter += delta;
                },
                KeyY: (event) => {
                    Params.Math.xFunc = getTrigonometricFunction(Params.Math.xFunc);
                },
                KeyH: (event) => {
                    Params.Math.yFunc = getTrigonometricFunction(Params.Math.yFunc);
                }
            };
            document.body.addEventListener('keypress', (event) => {
                if (KeyBindings[event.code]) {
                    KeyBindings[event.code](event);
                }
            });
        </script>
    </body>
</html>
