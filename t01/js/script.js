[number = 1,
bigint = 1n,
string = '1',
symbol = Symbol('My Symbol'),
bool = Boolean(1),
nullvar = null,
undefined,
object = {},
].forEach(item => {
    alert((typeof item == 'symbol' ? item.description : item) + ' is ' + typeof item)
}) 




