var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

console.log('this',this)
var game = new Phaser.Game(config);

function preload ()
{
    //key url frameWidth
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    var group = this.add.group({
        key: 'diamonds',
        frame: [ 0, 1, 2, 3, 4 ],
        frameQuantity: 10
    });
    //添加组


    Phaser.Actions.GridAlign(group.getChildren(), {
        width: 8,
        height: 8,
        cellWidth: 32,
        cellHeight: 32,
        x: 0,
        y: 0
    });
    //width height 钻石的横轴 竖轴 个数
    //cellWidth cellHeight 单个钻石的长宽
    // x y 以group 右上角第一个单位的中心距离 画布右上角 放置 
}
