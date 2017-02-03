class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.player1 = 1;
        this.player2 = 0;
        this.winner = null;
        this.freeFields = false;
        this.finished = false;
    }

    getCurrentPlayerSymbol() {
        if(this.player1 == 1) {
            return 'x';
        }else {
           return 'o';
        }
      
    }

    nextTurn(row, col) {
        if (this.player1 == 1) {
            if (this.matrix[row][col] == null) {
                this.matrix[row][col] = 'x';
                this.player1 = 0;
                this.player2 = 1;
            } else {
                this.player1 = 1;
                this.player2 = 0; 
                return; 
            }
        } else if (this.player2 == 1) {
            if (this.matrix[row][col] == null) {
                this.matrix[row][col] = 'o';
                this.player2 = 0;
                 this.player1 = 1;
            } else {
                this.player1 = 0;
                this.player2 = 1; 
                return;  
            }
        }
        if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] && this.matrix[2][2] != null ||
         this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2] && this.matrix[0][2] != null ||
         this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0] && this.matrix[2][0] != null ||
         this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1] && this.matrix[2][1] != null ||
         this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0] && this.matrix[2][0] != null ||
         this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2] && this.matrix[2][2] != null ||
         this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2] && this.matrix[2][2] != null ||
         this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2] && this.matrix[1][2] != null ) {
             this.winner = this.matrix[row][col];
             this.finished = true;
             if(this.matrix[row][col] == 'x') {
                 this.player1 = 0;
                 this.player2 = 1;
             } else {
                this.player1 = 1;
                 this.player2 = 0; 
             }
         }
         if(this.matrix.join('').length == 15) {
            this.freeFields = true;
            this.finished = true;
            }
        return;
    }

    isFinished() {
        return this.finished;
    }

    getWinner() {
        return this.winner;
        
    }

    noMoreTurns() {
        return this.freeFields;
    }

    isDraw() {
        if (this.finished == true && this.winner == null) {
            return true;
        }
        return false;
    }

    getFieldValue(row, col) {
        return this.matrix[row][col];
    }
}

module.exports = TicTacToe;
