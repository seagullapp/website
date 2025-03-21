"use client"
import logoutUser from "@/lib/auth/logoutUser";
import capitalize from "@/utils/capitalize";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearUser } from "@/app/redux/slices/userSlice";

// Types
import { RootState } from "@/app/redux/store";
import Avatar from "@/app/components/User/Avatar/Avatar";

export default function Container() {

    const router = useRouter()
    const dispatch = useDispatch()
    const [error, setError] = useState<{isError: Boolean, msg: string}>({isError: false, msg: "An error occurred"})

    const user = useSelector((root: RootState) => root.user);

    async function handleLogout() {

        setError({isError: false, msg: "Loading"})
        const result = await logoutUser()

        if (!result) { 
            setError({isError: true, msg: "Please try again"});
            return;
        }
        if (!result.success){
            setError({isError: true, msg: result.msg || "An error occurred"});
            return;
        }

        dispatch(clearUser())
        router.push("/login")

    }

    return ( <div className="">

        <form className="">
            
            <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col flex-grow max-w-[400px]"> 
                    <label htmlFor="first-name" className=''> First name </label>
                    <input name='first-name' type="text" placeholder={capitalize(user.firstName)} />
                    <label htmlFor="last-name" className='mt-3'> Last name </label>
                    <input name='last-name' type="text" placeholder={capitalize(user.lastName)} />
                </div>
                <Avatar avatar_url={user.avatar_url} avatar={user.avatar} size={100} />
            </div>

            <div className='mt-4'>

                <h3 className='text-[20px] grey font-semibold mb-1'> Danger Zone </h3>
                <button onClick={handleLogout}> Log out </button>

                {error.isError && <div> 
                    Error!
                    <p> {error.msg} </p>
                </div>}

            </div>


        </form>

    </div> )
}