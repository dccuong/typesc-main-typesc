import React, { useEffect, useState } from 'react'


type Props = {

}

const UserC = (props: Props) => {
    const [name, setName] = useState()
    useEffect(() => {
        const getIn4 = async () => {

            await setName(JSON.parse(localStorage.getItem("user") || "").user.name)
        }
        getIn4()
    }, [])

    return (
        <div>Halo
            {/* {name} */}
            {/* {check} */}

        </div>
    )
}

export default UserC