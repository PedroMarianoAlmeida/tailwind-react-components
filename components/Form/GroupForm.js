const GroupForm  = ({name ,children}) => {
    return (
        <div className="personal w-full border-t border-gray-400 pt-4">
        <h2 className="text-2xl text-gray-900">{name}:</h2>                                
        {children}
    </div>
      );
}
 
export default  GroupForm;
