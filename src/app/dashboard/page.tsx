export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-slate-200 flex items-center justify-center flex-col">
            <div className="bg-slate-100 shadow-slate-900 max-w-[400px] w-full px-10 py-5 rounded">
                <p className="text-slate-800 mb-2">Dashboard</p>
                <hr />
                <p className="text-sm text-slate-400 font-[300] mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae blanditiis unde laudantium et ut culpa velit deserunt quas earum sint animi cupiditate, a, quaerat porro quam rem hic enim fugiat!</p>
                <button className="bg-gray-200 text-slate-500 font-[400] py-2 px-6 mt-4 rounded hover:bg-gray-300">Back</button>
            </div>
        </div>
    )
}