import React, { useState } from 'react';
import swal from 'sweetalert';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const [service, setService] = useState({});
    useTitle('Add Service');
    const handleForm = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Good job!", "Service Added Successfully!", "success");
                    event.target.reset()
                }
            });
    };
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }
    return (
        <div className='grid grid-cols-1 gap-3 justify-items-center border-slate-200'>
            <h2 className='text-3xl font-bold text-slate-600'>Please Add A New Service!</h2>
            <form className='py-5 bg-slate-600 p-14 mb-10 rounded-lg' onSubmit={handleForm}>
                <input onBlur={handleInputBlur} type="text" name="serviceName" placeholder="Service Name" className="input input-bordered input-md w-[500px] max-w-xs my-2" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="serviceImage" placeholder="Service image URL" className="input input-bordered input-md w-full max-w-xs my-2" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="servicePrice" placeholder="Service Price" className="input input-bordered input-md w-full max-w-xs my-2" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="serviceRating" placeholder="Service Rating/Ex: 4.2, 4.6, 48" className="input input-bordered input-md w-full max-w-xs my-2" required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="jumpHeight" placeholder="Jump Height In Feet/ Ex: 2000feet" className="input input-bordered input-md w-full max-w-xs my-2" required />
                <br />
                <textarea onBlur={handleInputBlur} className="textarea textarea-info my-2 w-80 h-80" name="serviceDescription" placeholder="Service Description" required></textarea>
                <br />
                <button type="submit" className="btn btn-outline btn-info ml-[100px]">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;