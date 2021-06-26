export default class Minesweeper {
    board: Array<Array<0 | 1>> = []
    constructor(max: number, bombCount: number) {
        if (bombCount >= max * max) {
            throw new Error("Pls use less bombs than total places")
        }
        for (let i = 0; i < max; i++) {
            this.board.push([])
            for (let k = 0; k < max; k++) {
                this.board[i].push(0)

            }
        }
        while (bombCount > 0) {
            let rand1 = Math.floor(Math.random() * max)
            let rand2 = Math.floor(Math.random() * max)
            if (this.board[rand1][rand2] === 0) {
                this.board[rand1][rand2] = 1
                bombCount -= 1
            }
        }
    }

    showBoard() {
        this.board.map(v => {
            console.log(v.join(' '));
        })
    }
}

