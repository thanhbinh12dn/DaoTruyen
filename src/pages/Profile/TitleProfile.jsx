function TitleProfile({ title }) {
    return (
        <div className="bg-white px-3 mb-2 border-l-4 border-solid border-main shadow-md">
            <div className="py-2 px-3">
                <h1 className="font-medium">{title}</h1>
            </div>
        </div>
    )
}

export default TitleProfile;