import { HangmanGame } from '../src/index'

describe('hangman game', () => {
  it('should correctly display the hidden word at the start', () => {
    const game = new HangmanGame()

    const word = game.getHiddenWord()
    for (const item of word) {
      expect(item).toEqual('_')
    }
    // expect(game.getHiddenWord()).toEqual(/^[_ ]+$/)
  })

  it('should correctly update the word as letters are guessed', () => {})
  it('should handle correct and incorrect guess appropriately', () => {})
  it('should end the game when the word is fully guessed or max attempts are reached', () => {})
})
