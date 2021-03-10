const HalfColumn = ({data, onChange}) => {
    console.log(typeof data.labelText);
    return (
        <div className='w-full md:w-1/2 px-3 mb-6'>
            <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor={data.id}
            >
                {data.labelText}
            </label>

            <input
                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                type='text'
                placeholder={data.labelText}
                required
                id={data.id}
                name={data.id}
                onChange={onChange}
                value={data.value}
            />
        </div>
    )
}

const TextTwoColumns = ({left, right, onChange}) => {
    return (
        <div className="flex items-center justify-between mt-4">
            <HalfColumn data={left} onChange={onChange}/>
            <HalfColumn data={right} onChange={onChange}/>
        </div>
    );
}

export default TextTwoColumns;