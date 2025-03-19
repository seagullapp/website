import Modal from "../Modal/Modal";

interface Props {
    setShow: (arg: boolean) => void
}

export default function AddLabel( {setShow} : Props ) {

    return ( <Modal setShow={setShow} title="First Label tag">

        <form className='flex flex-col'>

            <label htmlFor="title" className="font-semibold mb-1">Label Tag</label>
            <input name="title" type="text" placeholder="Designer"/>

        </form>

    </Modal> )
}