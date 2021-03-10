const TextOneColumn = ({value, onChange, labelText, id}) => {
    return (
        <div className='w-full md:w-full px-3 my-2'>
            <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor={id}
            >
                {labelText}
        </label>
            <input
                className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                type='text'
                placeholder={`Enter ${labelText}`}
                required
                id={id}
                name={id}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default TextOneColumn;