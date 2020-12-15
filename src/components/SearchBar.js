import React from 'react';

class SearchBar extends React.Component{

    

    handlerFormSumbit = (event)=>{
        event.preventDefault(); 

    }


    render(){

        return(
            <form onSubmit={this.handlerFormSumbit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input className="form-control" 
                        type="text" placeholder="Search a movie" 
                        onChange={this.props.searchMovieProp}
                        >

                        </input>
                    </div>
                </div>
                
            </form>
        )

    }
}


export default SearchBar ;