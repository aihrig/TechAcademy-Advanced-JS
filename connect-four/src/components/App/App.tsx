import React from 'react';
import Board from '../Board/Board';
import { Props, State, ChipsPositions } from './types';
import Sound from '../Sound/Sound';
import styles from './App.module.css';

export default class App extends React.PureComponent<Props, State> {
    state: State = {
        chipsPositions: {},
        playerTurn: 'orange',
        gameStatus: "It's orange's turn",
        playClick: false
    };

    handleTileClick = (tileId: string) => {
        const { chipsPositions, playerTurn } = this.state;

        // Get last empty tile of the column
        const column = parseInt(tileId.split(':')[1]);
        let lastEmptyTileId = this.getLastEmptyTile(column);

        // If there is no empty tile in the column, do nothing
        if (!lastEmptyTileId) {
            return;
        }

        // Add chip to empty tile
        const newChipsPositions = {
            ...chipsPositions,
            [lastEmptyTileId]: playerTurn
        };

        // Switch player turn
        const newPlayerTurn = playerTurn === 'orange' ? 'black' : 'orange';

        // Calculate game status
        const gameStatus = this.calculateGameStatus(
            newPlayerTurn,
            newChipsPositions
        );

        // Save new state
        this.setState({
            chipsPositions: newChipsPositions,
            playerTurn: newPlayerTurn,
            gameStatus,
            playClick: true
        });
    };

    componentDidUpdate() {
        this.setState({ playClick: false });
    }

    getLastEmptyTile(column: number) {
        const { rows } = this.props;
        const { chipsPositions } = this.state;

        for (let row = rows - 1; row >= 0; row--) {
            const tileId = `${row}:${column}`;

            if (!chipsPositions[tileId]) {
                return tileId;
            }
        }
    }

    renderBoard() {
        const { columns, rows } = this.props;
        const { chipsPositions, playClick } = this.state;
        return (
            <div>
                <Board
                    columns={columns}
                    rows={rows}
                    chipsPositions={chipsPositions}
                    onTileClick={this.handleTileClick}
                />
                <Sound
                    id="chipClick"
                    url="./click.mp3"
                    volume={0.1}
                    playing={playClick}
                    loop={false}
                ></Sound>
            </div>
        );
    }

    renderStatusMessage() {
        const { gameStatus } = this.state;
        return <div className={styles.app}>{gameStatus}</div>;
    }

    renderBackgroundMusic() {
        return (
            <Sound
                id="backgroundMusic"
                url="http://soundimage.org/wp-content/uploads/2015/12/Mister-Snarkypants.mp3"
                volume={0.05}
                playing={false} // TODO: turn back on
                loop={true}
            ></Sound>
        );
    }

    render() {
        return (
            <div className={styles.app}>
                {this.renderBoard()}
                {this.renderStatusMessage()}
                {this.renderBackgroundMusic()}
            </div>
        );
    }

    calculateGameStatus = (
        playerTurn: string,
        chipsPositions: ChipsPositions
    ): string => {
        const { columns, rows } = this.props;

        // Check for four tiles in a row horizontally
        for (let row = 0; row < rows; row++) {
            let repetitionCountStatus = { playerChip: '', count: 0 };

            for (let column = 0; column < columns; column++) {
                const chip = chipsPositions[`${row}:${column}`];

                // If there is a chip in that position and it belongs
                // to a player, count that chip for that player (either
                // increase the count or start over)
                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = { playerChip: chip, count: 1 };
                }

                // If the count for a player is 4, that player won
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`;
                }
            }
        }

        // Check for four in a row vertically
        for (let column = 0; column < columns; column++) {
            let repetitionCountStatus = { playerChip: '', count: 0 };

            for (let row = 0; row < rows; row++) {
                const chip = chipsPositions[`${row}:${column}`];

                // If there is a chip in that position and it belongs
                // to a player, count that chip for that player (either
                // increase the count or start over)
                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = { playerChip: chip, count: 1 };
                }

                // If the count for a player is 4, that player won
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`;
                }
            }
        }

        // TODO: Check for four in a row diagonally

        return `It's ${playerTurn}'s playerTurn`;
    };
}
