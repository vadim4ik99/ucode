module.exports = class Access {
    mark_LXXXVValue
    get mark_LXXXV() {
        if (this.mark_LXXXVValue == '') return 'null'
        if (this.mark_LXXXVValue == undefined) return 'undefined'
        return this.mark_LXXXVValue
    }

    set mark_LXXXV(value) {
        this.mark_LXXXVValue = value
    }
}