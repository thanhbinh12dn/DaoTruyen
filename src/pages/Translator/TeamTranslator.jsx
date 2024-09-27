import { useState } from 'react'
import { useTranslatorContext } from '../../contexts/translator_context'
import TitleProfile from "../Profile/TitleProfile"
import { createTeamTranSlate_url } from '../../url/translator_url'

function TeamTranslator() {
    const { fetchCreateTeamTranslate } = useTranslatorContext()

    const [teamName, setTeamName] = useState('')

    const handleCreateTeamTranslate = () => {
        fetchCreateTeamTranslate(createTeamTranSlate_url, { teamName,  })
    }

    console.log(teamName)

    return (
        <div>
            <TitleProfile title={"Team translate"} />
            <div className="bg-white p-4 md:p-6 shadow-md h-96">
                <h1 className="font-medium text-lg">Đặt tên team dịch truyện</h1>
                <div className="mt-4">
                    <label htmlFor="teamTranslator" className="font-medium">Tên của team: </label>
                    <input 
                        id="teamTranslator" 
                        className="w-[35%] px-2 py-1 border border-solid border-black rounded-md" 
                        type="text" 
                        onChange={e => setTeamName(e.target.value)}
                    />
                </div>
                <button 
                    className="mt-6 px-4 py-2 bg-main text-white rounded-lg border border-solid border-main hover:text-main hover:bg-white"
                    onClick={handleCreateTeamTranslate}
                >Xác nhận</button>
            </div>
        </div>
    )
}

export default TeamTranslator