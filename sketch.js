var ball, database, data,pos;

function setup() {
    database = firebase.database()
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    data = database.ref("ball/position");
    data.on("value", readPos, showError);
}

function draw() {
    background("white");
    if (pos !== undefined) {
        if (keyDown(LEFT_ARROW)) {
            changePosition(-1, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            changePosition(1, 0);
        }
        else if (keyDown(UP_ARROW)) {
            changePosition(0, -1);
        }
        else if (keyDown(DOWN_ARROW)) {
            changePosition(0, +1);
        }
    
    drawSprites();
    }
}

function changePosition(x, y) {
    database.ref("ball/position").set({
        x: pos.x + x,
        y: pos.y + y

    })
}

function readPos(d) {
    pos = d.val();
    ball.x = pos.x
    ball.y = pos.y
}

function showError() {
    console.log("show a error")
}