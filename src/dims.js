function rainbow(message) {

          colors = [ // bunch of colors that work with console log.
            "\x1b[31m",
            "\x1b[32m",
            "\x1b[33m",
            "\x1b[34m",
            "\x1b[35m",
            "\x1b[36m",
            "\x1b[37m",
            "\x1b[93m"
          ]

          function arrayInterator(symbol, index) {   
            return `${colors[index % colors.length] + symbol + "\x1b[0m"}`
          }

          let symbols = message.split("")// Add .Reverse() if you want it to be reversed rainbow text.
          console.log(symbols.map(arrayInterator).join("")) // Console logs our symbols after function is applied and we join the letters.
        }

module.exports = rainbow;