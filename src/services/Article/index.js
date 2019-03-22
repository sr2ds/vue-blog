/**
 * This Module centralize logic for operate Articles
 */
import Gists from './Api/Gists'

const Article = {

    /**
     * returna list with all articles
     */
    getArticlesList() {
        return Gists.getIndex()
    }
}
export default Article