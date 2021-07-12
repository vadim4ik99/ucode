alert(
    (promptFunction = () => {
        switch(Number(prompt('Enter number from 1 to 10'))) {
            case 1: return 'Back to square 1'

            case 2: return 'Goody 2-shoes'

            case (3 || 6): return "Two's company, three's a crowd"

            case (4 || 9): return 'Counting sheep'

            case 5: return 'Take five'

            case 7: return 'Seventh heaven'

            case 8: return 'Behind the eight-ball'

            case 10: return 'Cheaper by the dozen'

            default: return promptFunction()
        }
    }    
    )()
)