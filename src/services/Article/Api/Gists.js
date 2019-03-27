import axios from 'axios'

const Gists = {
    indexFileDescript() {
        return window.indexFileDescript
    },
    owner() {
        return window.ownerOfGist
    },

    async getIndex() {
        let gists = await this.getByUser(this.owner());
        let indexFile = this.getByDescription(gists, this.indexFileDescript());

        // Get firts file from gist and return raw_url
        let file = Object.values(indexFile.files)[0].raw_url

        let indexRequest = await axios.get(file)
        let index = indexRequest.data

        return index
    },

    async getByUser() {
        let request = await axios.get(`https://api.github.com/users/${this.owner()}/gists`)
        return request.data
    },

    getByDescription(gists) {
        let index = null
        gists.forEach(element => {
            if (element.description == this.indexFileDescript()) {
                index = element;
            }
        });
        return index
    }

}
export default Gists;