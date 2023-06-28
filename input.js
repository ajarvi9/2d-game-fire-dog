export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];
        // for mobile/touch screens
        this.touchY = '';
        this.touchThreshold = 20;
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            } else if (e.key === 'd') {
                this.game.debug = !this.game.debug;
            }

        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter') {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
        //reload or restart game
        window.addEventListener('keypress', e => {
            if (e.key === 'r') location.reload();
        });
        //mobile touch controls
        // window.addEventListener('touchstart', e => {
        //     this.touchY = e.changedTouches[0].pageY
        // });
        // window.addEventListener('touchmove', e => {
        //     console.log(e);
        //     const swipeDistance = e.changedTouches[0].pageY - this.touchY;
        //     if (swipeDistance < -this.touchThreshold && this.keys.indexOf('swipe up') === -1) this.keys.push('swipe up');
        //     else if (swipeDistance > this.touchThreshold && this.keys.indexOf('swipe down') === -1) {
        //         this.keys.push('swipe down');
        //         if (this.game.gameOver) location.reload();
        //     }
        // });
        // window.addEventListener('touchend', e => {
        //     this.keys.splice(this.keys.indexOf('swipe up'), 1);
        //     this.keys.splice(this.keys.indexOf('swipe down'), 1);


        // });
    }
}