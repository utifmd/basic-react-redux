import { useState } from "react"
import PropTypes from "prop-types"

const PostFormView = ({loading, saveArticle}) => {
    const [formState, setFormState] = useState({})
    const onFieldChange = e => {
        const {name, value, checked} = e.target
        
        setFormState({...formState, 
            [name]: name === "status" ? checked : value
        })
    }
    const onPost = () => {
        saveArticle(formState)
        setFormState({})
    }
    return (<>
        <section>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>:</td>
                        <td><input 
                            placeholder="Enter title" 
                            name="title" 
                            type="text" 
                            value={formState?.title || ''}
                            onChange={onFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Content</td>
                        <td>:</td>
                        <td><input 
                            placeholder="Enter content" 
                            name="content" 
                            type="text"
                            value={formState?.content || ''}
                            onChange={onFieldChange} />
                        </td>
                    </tr>
                    {/* <tr>
                        <td>Publish</td>
                        <td>:</td>
                        <td><input
                            placeholder="Select to post" 
                            name="status" 
                            type="checkbox"
                            checked={formState?.status || false}
                            onChange={onFieldChange} />
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <button 
                disabled={loading} 
                onClick={onPost}>{loading ? 'Loading..' : 'Save'}</button>
        </section>
    </>)
}
PostFormView.prototype = {
    saveArticle: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}
export default PostFormView