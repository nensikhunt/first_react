import Child1 from './Child1';
import usercontext from './Context';
function Parent() {
    return ( 
        <>
            <usercontext.Provider value={{name:"nensi khunt"}}>
                <Child1 />
            </usercontext.Provider>
        </>
     );
}

export default Parent;