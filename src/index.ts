import readline from 'readline'
const word_list = [
  'python',
  'developer',
  'hangman',
  'keyboard',
  'monitor',
  'laptop',
  'program',
  'terminal',
  'function',
  'variable',
]

export class HangmanGame {
  private remainingAttempts: number
  private randomWord: string
  private hiddenWord: string
  private guessedLetters: string[] = []

  constructor() {
    const wordIndex = Math.floor(Math.random() * word_list.length)
    this.randomWord = word_list[wordIndex]
    this.remainingAttempts = 6
    this.hiddenWord = this.randomWord
      .split('')
      .map(() => {
        return '_'
      })
      .join('')
  }

  startGame() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const askQuestion = () => {
      rl.question(`Guess a letter: `, (letter) => {
        if (letter.length !== 1) {
          console.log('Please enter a single letter only')
          askQuestion()
          return
        }
        const indexOfLetter = this.randomWord.split('').indexOf(letter)
        if (this.guessedLetters.includes(letter)) {
          console.log('Letter already guessed!')
        } else if (indexOfLetter === -1) {
          this.guessedLetters.push(letter)
          console.log('Letter NOT found!')
          this.remainingAttempts -= 1
        } else {
          this.guessedLetters.push(letter)
          console.log('Letter found!')
          this.hiddenWord = this.hiddenWord
            .split('')
            .map((item, index) => {
              if (this.randomWord[index] === letter) {
                return letter
              } else return item
            })
            .join('')
        }
        console.log('Remaining Attempts:', this.remainingAttempts)
        console.log(this.hiddenWord)
        if (
          this.hiddenWord.split('').every((item) => {
            return item !== '_'
          })
        ) {
          console.log('Word guessed! Thanks for playing')
          rl.close()
          return
        }

        if (this.remainingAttempts > 0) {
          askQuestion()
        } else {
          console.log(
            `Out of attempts! Thanks for playing, the word was ${this.randomWord}`
          )
          rl.close()
        }
      })
    }
    askQuestion()
  }
  getRandomWord() {
    return this.randomWord
  }
  getHiddenWord() {
    return this.hiddenWord
  }
  returnUserFriendlyHiddenWord() {
    return this.hiddenWord.split('').join(' ')
  }
}
const game = new HangmanGame()

game.startGame()
