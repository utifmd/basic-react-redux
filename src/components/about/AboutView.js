import PropTypes from "prop-types"
import { useEffect } from "react"

const AboutView = ({ about, getAuthor }) => {
    
    useEffect(() => {
        getAuthor()

    }, [getAuthor])

    const { author, loading, error } = about
    return (<>
    { loading && <span>Loading..</span> }
    { error && <span style={{color: 'red'}}>{error}</span> }
    { author != null &&
        <section>
            <h1>{author.name}</h1>
            <h3>{author.organization}</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>{author.address}</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>:</td>
                        <td>{author.education?.degree}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    }
    </>)
}
AboutView.prototype = {
    author: PropTypes.object.isRequired,
    getAuthor: PropTypes.func.isRequired
}
export default AboutView