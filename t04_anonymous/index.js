module.exports = {
    getAnonymous: function(name, alias, affiliation) {
        return new class {
            #nameField
            #aliasField
            #affiliationField

            constructor(name, alias, affiliation) {
                this.#nameField = name
                this.#aliasField = alias
                this.#affiliationField = affiliation
            }

            get name() {
                return this.#nameField
            }

            get alias() {
                return this.#aliasField
            }

            get affiliation() {
                return this.#affiliationField
            }

            set name(value) {
                this.#nameField = value
            }

            set alias(value) {
                this.#aliasField = value
            }

            set affiliation(value) {
                this.#affiliationField = value
            }
        }(name, alias, affiliation)
    }
}