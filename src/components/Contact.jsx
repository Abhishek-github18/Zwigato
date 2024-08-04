const Contact = () => {
    return <div>
        <h1 className="font-bold text-3xl m-2 p-2">Hello Ji ! Contact Here</h1>
        <form>
            <input type="text" placeholder="name" className="p-2 m-2 border border-gray-400" />
            <input type="text" placeholder="message" className="p-2 m-2 border border-gray-400"/>
            <button className="p-2 m-2 border border-gray-400 rounded-md">Submit</button>
        </form>
    </div>
}

export default Contact;