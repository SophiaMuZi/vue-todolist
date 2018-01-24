import from '../assets/style/footer.css'

export default {
    data(){
        return {
            author:'Mu'
        }
    }
    render(){
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}