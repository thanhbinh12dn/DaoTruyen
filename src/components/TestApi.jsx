import axios from "axios";

function TestApi() {

    const fetchTestApi = async () => {
        try {
            const response = await axios.get("https://daotruyen.onrender.com/")
        } catch (error) {
            console.log("Invalid test: ", error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchTestApi()
    }
 
    return (
        <div>
            <button 
                className="px-5 py-2 bg-main text-white rounded-sm"
                onClick={handleSubmit}
            >TEST API</button>
        </div>
    )
}

export default TestApi;