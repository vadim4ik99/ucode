module.exports = {
    firstUpper: function(str) {
        if (!str) return ''
        str = str.trim()
        str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        return str
    }
}